from sqlalchemy import (
    Column,
    Integer,
    Text,
)
from .meta import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(Text, unique=True)
    password = Column(Text)
    nama = Column(Text)

def includeme(config):
    config.add_route('register', '/api/register')