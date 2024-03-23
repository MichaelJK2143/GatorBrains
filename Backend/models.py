from datetime import datetime, timedelta
from sqlalchemy import ARRAY
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Course(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     course_code = db.Column(db.String(8))
     # omg, this could also work if somebody says like MCAT or smthg
     professor = db.Column(db.String(40))

     
     def __repr___(self):
          return '<course %r>' % self.course_code

     
class StudySesh(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     start_time = db.Column(db.DateTime, default=datetime.now()) # time it was created
     departure_time = db.Column(db.DateTime, default=lambda: datetime.now() + timedelta(hours=1)) # default to hour later from created
     course = db.Column(db.String(8))
     x = db.Column(db.Float)
     y = db.Column(db.Float)

     def __init__(self, duration, course, x, y):
          self.departure_time = self.start_time + datetime.timedelta(hours=duration)
          self.course = course
          self.x = x
          self.y = y

     def __repr___(self):
          return '<id %r>' % self.course_name
     
class User(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     username = db.Column(db.String(80))
     password = db.Column(db.String(80))
     email = db.Column(db.String(80)) # figure this out eventually
     

     def __repr__(self):
          return '<User %r>' % self.id
     
