from flask import jsonify  # request
from flask_sqlalchemy import SQLAlchemy
from models import User


def configure_routes(app):
    @app.route('/users')
    def run():
        users = [user.id for user in User.query.all()]
<<<<<<< HEAD
        return jsonify({"users": users})
=======
        return jsonify({"users": users})  # type: ignore
>>>>>>> 1016a53dd364cea1295b0be35654d506fb076cb6
