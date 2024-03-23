from flask import jsonify  # request
from models import User

from app import db


def configure_routes(app):
    @app.route('/users')
    def run():
        users = [{"id": user.id, "name": user.name, "password": user.password, "email": user.email} for user in User.query.all()]
        return jsonify({"users": users})  # type: ignore
