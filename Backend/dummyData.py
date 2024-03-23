from flask_sqlalchemy import SQLAlchemy
from models import User
from models import db


def make_dummy_users():
    for i in range(5):
        user = User(name="bob", username="bob", password="bob", email="bob@bob.com")
        db.session.add(user)

    db.session.commit()

    print("made dummy users")
