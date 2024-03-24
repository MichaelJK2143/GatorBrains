from flask_sqlalchemy import SQLAlchemy
from models import User, StudySesh, db



def make_dummy_users():
    db.session.add(StudySesh(course= "MAS3114", x=1,y=1,floor=2))
    db.session.add(StudySesh(course= "COP4533", x=1,y=1,floor=2))
    for i in range(5):
        user = User(username="bob", password="bob")
        db.session.add(user)
        db.session.add(StudySesh(course= "COP3504", x=1,y=1,floor=1))
    
    db.session.commit()

    print("made dummy users")
