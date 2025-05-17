import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  getArticles, 
  getArticleById, 
  createArticle, 
  updateArticle, 
  deleteArticle 
} from '../api/news';

// Async thunks
export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getArticles(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  'news/fetchArticleById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getArticleById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addArticle = createAsyncThunk(
  'news/addArticle',
  async (articleData, { rejectWithValue }) => {
    try {
      const response = await createArticle(articleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editArticle = createAsyncThunk(
  'news/editArticle',
  async ({ id, articleData }, { rejectWithValue }) => {
    try {
      const response = await updateArticle(id, articleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeArticle = createAsyncThunk(
  'news/removeArticle',
  async (id, { rejectWithValue }) => {
    try {
      await deleteArticle(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  totalCount: 0,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.items;
        state.totalCount = action.payload.total;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch articles';
      })
      
      // Fetch article by ID
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch article';
      })
      
      // Add article
      .addCase(addArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.unshift(action.payload);
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to add article';
      })
      
      // Edit article
      .addCase(editArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.articles.findIndex(article => article.id === action.payload.id);
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
        state.currentArticle = action.payload;
      })
      .addCase(editArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to update article';
      })
      
      // Remove article
      .addCase(removeArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = state.articles.filter(article => article.id !== action.payload);
        if (state.currentArticle && state.currentArticle.id === action.payload) {
          state.currentArticle = null;
        }
      })
      .addCase(removeArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to delete article';
      });
  },
});

export const { clearCurrentArticle, clearError } = newsSlice.actions;
export default newsSlice.reducer;