from flask import jsonify, request
from flask_sqlalchemy import SQLAlchemy
from .models import User

def configure_routes(app):
    @app.rout('/users')
    def run():
        users = [user.id for user in User.query.all()]
        return jsonify({"users": users})