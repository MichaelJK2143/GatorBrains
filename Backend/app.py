from flask import Flask
from flask_cors import CORS

from routes import configure_routes
from dummyData import make_dummy_users
from models import db



def create_app():
    app = Flask(__name__)
    
    CORS(app, origins='http://localhost:3000', methods=['GET', 'POST', 'PUT'])
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////app/users.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.drop_all()  # wipes the database after every start, if we don't want this remove this line
        db.create_all()
        configure_routes(app)
        make_dummy_users()
    return_status(True)
    return app


def return_status(status):
    if status:
        return "successful"
    else:
        return "unsuccessful"
