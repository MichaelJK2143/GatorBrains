from flask import Flask
from models import db
from routes import configure_routes
from dummyData import make_dummy_users


def create_app():
    app = Flask(__name__)
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
