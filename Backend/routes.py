from flask import jsonify, request, make_response
from models import db, User, StudySesh
from flask_sqlalchemy import SQLAlchemy
import json


def configure_routes(app):
    @app.route('/')
    def run():
        return getUsers()

    @app.route('/users')
    def getUsers():
        users = [{"id": user.id, "password": user.password} for user in User.query.all()]
        return jsonify({"users": users})  # type: ignore
    
    # making an account
    @app.route('/createAccount', methods=['POST'])
    def createAccount():

        try:
            data = json.loads(request.data)
            new_user = User(username=data['username'], password=data['password'])
            db.session.add(new_user)
            db.session.commit()
            response = {
                'id': new_user.id,
                'message': 'New user created! Time to get on the grindddddd'}
            return jsonify(response), 201
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
    def currentFloorSessions():
        data = json.loads(request.data)
        sesh = StudySesh.query.filter_by(floor=data['floor']).first()
        if(sesh):
            sessions = [{'Course': session.course, 'Started': session.start_time.strftime("%H:%M:%S"), 'Members': session.members, 'Session ID': session.id} for session in StudySesh.query.filter_by(floor=data['floor']).all()]
            return jsonify({'Sessions': sessions})
        else:
            return make_response(jsonify({'message': 'For some reason, there are no study sessions on this floor. Crazy.'}), 201)
    

    # get all current study sessions by course code
    @app.route('/currentCourseSessions', methods=['GET'])
    def currentCourseSessions():
        data = json.loads(request.data)
        sesh = StudySesh.query.filter_by(course=data['course']).first()
        if(sesh):
            sessions = [{'Course': session.course, 'Started': session.start_time.strftime("%H:%M:%S"), 'Members': session.members, 'Session ID': session.id} for session in StudySesh.query.filter_by(course=data['course']).all()]
            return jsonify({'Sessions': sessions})
        else:
            return make_response(jsonify({'message': 'No study sessions for that class yet :0'}), 201)

    # make a new sesh
    # make a notice that the course inputted needs to be the course code
    @app.route('/createNewStudySession', methods=['POST'])
    def createNewStudySesh():
        try:
            data = json.loads(request.data)
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
        data = json.loads(request.data)
        sesh = StudySesh.query.filter_by(id=data['session_id']).first()
        user = User.query.filter_by(id=data['user_id']).first()
        if(sesh and user):
            for u in sesh.users:
                if u.id == user.id:
                    return make_response(jsonify({'message': "Oops! You're already in this session!"}, 201))
            sesh.members = sesh.members + 1
            sesh.users.append(user)
            db.session.commit()
            return make_response(jsonify({'message': "You've joined the session! Time to get on that grind"}, 201))
        return(make_response(jsonify({'message': 'Session or user not found :('})), 500)


    # leave the session. deletes if no members in session anymore
    @app.route('/leaveSession', methods=['GET'])
    def leaveSession():
        data = json.loads(request.data)
        sesh = StudySesh.query.filter_by(id=data['session_id']).first()
        user = User.query.filter_by(id=data['user_id']).first()
        if(sesh and user):
            data=request.get_json()
            sesh.members -= 1
            sesh.users.remove(user.id)
            if(sesh.members == 0):
                db.session.delete(sesh)
            db.session.commit()
            return make_response(jsonify({'message': "You've left the session! Was it hard work or hardly working?"}, 201))
        return(make_response(jsonify({'message': 'Session or user not found :('})), 500)