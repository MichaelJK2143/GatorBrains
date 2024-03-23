from flask import jsonify, request, make_response
from models import User

from app import db


def configure_routes(app):
    @app.route('/users')
    def run():
        users = [{"id": user.id, "name": user.name, "password": user.password, "email": user.email} for user in User.query.all()]
        return jsonify({"users": users})  # type: ignore

    @app.rout('/createAccount', methods=['POST'])
    def createAccount():
        try:
            data = request.get_json()
            new_user = User(name=data['name'], username=data['username'], password=data['password'], emaiil=data['email'])
            db.session.add(new_user)
            db.session.commit()
            return make_response(jsonify({'message': 'user created'}), 201)
        except:
            return make_response(jsonify({'message': 'error creating user'}), 500)