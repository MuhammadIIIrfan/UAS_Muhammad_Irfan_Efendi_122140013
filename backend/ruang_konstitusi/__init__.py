from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from .models import Base
from pyramid.config import Configurator

def main(global_config, **settings):
    config = Configurator(settings=settings)
    engine = engine_from_config(settings, 'sqlalchemy.')
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)
    DBSession = sessionmaker(bind=engine)
    config.registry['dbsession_factory'] = DBSession

    config.add_route('home', '/')
    config.add_route('users', '/users')
    config.add_route('user_detail', '/users/{id}')
    config.scan('.views')

    config.include('pyramid_cors')
    config.add_cors_preflight_handler()
    config.add_cors_origin('*')

    return config.make_wsgi_app()