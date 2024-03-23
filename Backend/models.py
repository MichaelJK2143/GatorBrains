from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ARRAY
from datetime import datetime, timedelta

db = SQLAlchemy()

class Course():
     def __init__(self, course_name: str, course_code: str, professor: str):
          self.course_name = course_name
          self.course_code = course_code[:8] # shouldn't be more than 8, right?
          self.professor = professor
     
     
class StudySesh():
     start_time = db.Column(db.DateTime, default=datetime.now()) # time it was created
     departure_time = db.Column(db.DateTime, default=lambda: datetime.now() + timedelta(hours=1)) # default to hour later from created
     study_subject = db.Column(db.Course)


class User(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     username = db.Column(db.String(80))
     password = db.Column(db.String(80))
     email = db.Column(db.String(80)) # try to figure this out eventually
     schedule = db.Column(ARRAY(Course))
     

     def __repr__(self):
          return '<User %r>' % self.id