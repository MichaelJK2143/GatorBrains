from flask_sqlalchemy import SQLAlchemy
from models import User, Course
from models import db



def make_dummy_users():
    for i in range(5):
        user = User(name="bob", username="bob", password="bob", email="bob@bob.com")
        db.session.add(user)
        db.session.add(Course(name= "Linear Algebra", course_code ="MAS3114", professor = "Huang"))
    
    db.session.commit()

    print("made dummy users")
