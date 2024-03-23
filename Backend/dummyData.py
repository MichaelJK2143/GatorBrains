from flask_sqlalchemy import SQLAlchemy
from models import User

db = SQLAlchemy()

def make_dummy_users():
    for i in range(5):
        user = User()
        db.session.add(user)
    
    db.session.commit()

    print("made dummy users")