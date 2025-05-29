from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from .models import User
import json

def get_session(request):
    return request.registry['dbsession_factory']()

@view_config(route_name='home', renderer='json')
def home_view(request):
    return {'message': 'Selamat datang di API Konstitusi!'}

@view_config(route_name='users', renderer='json', request_method='GET')
def list_users(request):
    session = get_session(request)
    users = session.query(User).all()
    return [{'id': u.id, 'name': u.name, 'email': u.email} for u in users]

@view_config(route_name='users', renderer='json', request_method='POST')
def create_user(request):
    session = get_session(request)
    try:
        data = request.json_body
        user = User(name=data['name'], email=data['email'])
        session.add(user)
        session.commit()
        return {'id': user.id, 'name': user.name, 'email': user.email}
    except Exception as e:
        session.rollback()
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='user_detail', renderer='json', request_method='GET')
def get_user(request):
    session = get_session(request)
    user = session.query(User).get(request.matchdict['id'])
    if not user:
        return HTTPNotFound(json_body={'error': 'User not found'})
    return {'id': user.id, 'name': user.name, 'email': user.email}

@view_config(route_name='user_detail', renderer='json', request_method='PUT')
def update_user(request):
    session = get_session(request)
    user = session.query(User).get(request.matchdict['id'])
    if not user:
        return HTTPNotFound(json_body={'error': 'User not found'})
    data = request.json_body
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    session.commit()
    return {'id': user.id, 'name': user.name, 'email': user.email}

@view_config(route_name='user_detail', renderer='json', request_method='DELETE')
def delete_user(request):
    session = get_session(request)
    user = session.query(User).get(request.matchdict['id'])
    if not user:
        return HTTPNotFound(json_body={'error': 'User not found'})
    session.delete(user)
    session.commit()
    return Response(json.dumps({'status': 'deleted'}), content_type='application/json')

@view_config(route_name='users', renderer='json')
def users_view(request):
    return [{"id": 1, "name": "User Satu"}, {"id": 2, "name": "User Dua"}]