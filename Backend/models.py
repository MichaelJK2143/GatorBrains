from datetime import datetime
import pytz
from sqlalchemy import ARRAY
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

"""
class Course(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     course_code = db.Column(db.String(8))
     professor = db.Column(db.String(40))

     def __repr___(self):
          return '<course %r>' % self.course_code
"""
     
class StudySesh(db.Model):
     time = datetime.now()
     time_est = time.astimezone(pytz.timezone('US/Eastern'))

     id = db.Column(db.Integer, primary_key=True)
     start_time = db.Column(db.DateTime, default=time_est) # time it was created
     course = db.Column(db.String(8))
     members = db.Column(db.Integer)
     users = db.relationship('User', backref='study_sesh', lazy=True)
     floor = db.Column(db.Integer)
     x = db.Column(db.Integer)
     y = db.Column(db.Integer)

     def __init__(self, course, x, y, floor, members=1):
          self.course = course
          self.x = x
          self.y = y
          self.floor = floor
          self.members = members


     def __repr__(self):
          return '<id %r>' % self.id
     

class User(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     username = db.Column(db.String(80))
     password = db.Column(db.String(80))
     email = db.Column(db.String(80)) # figure this out eventually
     study_sesh_id = db.Column(db.Integer, db.ForeignKey('study_sesh.id'), nullable=True)
     
     def __repr__(self):
          return '<User %r>' % self.id