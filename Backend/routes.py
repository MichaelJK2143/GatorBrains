from flask import jsonify, request, make_response

from models import db
from models import User, Course, StudySesh
from flask_sqlalchemy import SQLAlchemy


def configure_routes(app):
    @app.route('/')
    def run():
        return getUsers()

    @app.route('/users')
    def getUsers():
        users = [{"id": user.id, "name": user.name, "password": user.password, "email": user.email} for user in User.query.all()]
        return jsonify({"users": users})  # type: ignore
    
    # making an account
    @app.route('/createAccount', methods=['POST'])
    def createAccount():
        try:
            data = request.get_json()
            new_user = User(name=data['name'], username=data['username'], password=data['password'], email=data['email'])
            db.session.add(new_user)
            db.session.commit()
            return make_response(jsonify({'message': 'New user created! Time to get on the grindddddd'}), 201)
        except:
            return make_response(jsonify({'message': 'error creating user'}), 500)
    
    """
    @app.route('/<int:user_id>/addCourse', methods=['PUT'])
    def addCourse(user_id):
            
            user = User.query.filter_by(id=user_id).first()
            if(user):
                data = request.get_json()
                if(Course.query.filter_by(course_code = data['course_code']).first()):
                    user.schedule.append(data['course_id'])
                    db.session.commit()
                    return make_response(jsonify({'message': 'course sucessfully added'}), 201)
                return make_response(jsonify({'message': 'course not found'}), 201)
            return make_response(jsonify({'message': 'user not found'}), 201)
            return make_response(jsonify({'message': 'error adding course'}), 500)
    
"""

  
    # get all courses
    @app.route('/courses', methods=['GET'])
    def getCourses():
        courses = [{"name": course.name, "course_code": course.course_code, "professor": course.professor} for course in Course.query.all()]
        return jsonify({"courses": courses})
    
    @app.route('/createCourse', methods=['POST'])
    def createCourse():
        try:
            data = request.get_json()
            new_Course = Course(name=data['name'], course_code=data['course_code'], professor=data['professor'])
            db.session.add(new_Course)
            db.session.commit()
            return make_response(jsonify({'message': 'course created'}), 201)
        except:
            return make_response(jsonify({'message': 'error creating course'}), 500)
    
   
    


    # make a new sesh
    @app.route('/createNewStudySession', methods=['POST'])
    def createNewStudySesh():
        try:
            data = request.get_json()
            new_sesh = StudySesh(course=data['course'], duration=data['hours'])
            db.session.add(new_sesh)
            db.session.commit()
            return make_response(jsonify({'message': 'Study session created! Good luck soldier'}), 201)
        except:
            return make_response(jsonify({'message': 'error creating study session'}), 500)
        

    #idk if this is post or not
    """
    @app.route('/currentSessions', methods=['POST'])
    def currentSessions():
        try:



            return make_response(jsonify({'messsage': 'Here are the current sessions going on'}), 201)
        except:
            return make_response(jsonify({'message' : 'error'}), 500)
    """
