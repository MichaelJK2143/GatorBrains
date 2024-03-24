from flask import jsonify, request, make_response

from models import db
from models import User, StudySesh
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


    # get all courses
    """
    @app.route('/courses', methods=['GET'])
    def getCourses():
        courses = [{"Name": course.name, "Course Code": course.course_code, "Professor": course.professor} for course in Course.query.all()]
        return jsonify({"courses": courses})
    """
    

    # get all current study sessions on a specific floor
    @app.route('/currentFloorSessions', methods=['GET'])
    def currentSessions():
        data = request.get_json()
        sessions = [{'Course': session.course, 'Started': session.start_time, 'Members': session.members, 'Session ID': session.id} for session in StudySesh.query.filter_by(floor=data['floor']).all()]
        return jsonify({'Sessions': sessions})
    

    # get all current study sessions by course code
    # remember to give professor as well


    # make a new sesh
    @app.route('/createNewStudySession', methods=['POST'])
    def createNewStudySesh():
        try:
            data = request.get_json()
            user = User.query.filter_by(id=data['user_id']).first()
            new_sesh = StudySesh(course=data['course'], x=data['x'], y=data['y'], floor=data['floor'])
            if(user and new_sesh):
                new_sesh.users.append(user)
                db.session.add(new_sesh)
                db.session.commit()
                return make_response(jsonify({'message': 'Study session created! Good luck soldier'}), 201)
            return make_response(jsonify({'message': 'Either your study sesh or user id is wrong my due'}), 500)
        except:
            return make_response(jsonify({'message': 'error creating study session'}), 500)


    # joining an existing session
    @app.route('/joinSession', methods=['PUT'])
    def joinSession():
        data = request.get_json()
        sesh = StudySesh.query.filter_by(id=data['session_id']).first()
        user = User.query.filter_by(id=data['user_id']).first()
        if(sesh and user):
            sesh.members += 1
            sesh.users.append(user.id)
            db.session.commit()
            return make_response(jsonify({'message': "You've joined the session! Time to get on that grind"}, 201))
        return(make_response(jsonify({'message': 'Session not found :('})))


    # leave the session. deletes if no members in session anymore
    @app.route('/leaveSession', methods=['GET'])
    def leaveSession(user_id, session_id):
        sesh = StudySesh.query.filter_by(id=session_id).first()
        user = User.query.filter_by(id=user_id).first()
        if(sesh and user):
            data=request.get_json()
            sesh.members -= 1
            sesh.users.remove(user.id)
            if(sesh.members == 0):
                db.session.delete(sesh)
            db.session.commit()
            return make_response(jsonify({'message': "You've left the session! Was it hard work or hardly working?"}, 201))
        return(make_response(jsonify({'message': 'Session or user not found :('})))


    """
    @app.route('/addCourse', methods=['PUT'])
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