from datetime import datetime, timedelta
from sqlalchemy import ARRAY

from app import db

class course():
     name = db.Column(db.String(80))
     course_code = db.Column(db.String(8))
     professor = db.Column(db.String(40))
     
     def __repr___(self):
          return '<course %r>' % self.name

     
class StudySesh():
     id = db.Column(db.Integer, primary_key=True)
     start_time = db.Column(db.DateTime, default=datetime.now()) # time it was created
     departure_time = db.Column(db.DateTime, default=lambda: datetime.now() + timedelta(hours=1)) # default to hour later from created
     course = db.Column(db.course)

     def __repr___(self):
          return '<id %r>' % self.course_name
     
class User(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(80))
     username = db.Column(db.String(80))
     password = db.Column(db.String(80))
     email = db.Column(db.String(80)) # try to figure this out eventually
     schedule = db.Column(ARRAY(db.Course))
     

     def __repr__(self):
          return '<User %r>' % self.id
     
