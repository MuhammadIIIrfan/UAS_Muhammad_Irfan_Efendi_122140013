from pyramid.view import view_config
from pyramid.response import Response
from ..models import User
from sqlalchemy.exc import DBAPIError

@view_config(route_name='register', renderer='json', request_method='POST')
def register(request):
    data = request.json_body
    user = User(email=data['email'], password=data['password'], nama=data['nama'])
    request.dbsession.add(user)
    return {'status': 'success', 'message': 'User registered'}