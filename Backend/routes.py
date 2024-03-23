from flask import jsonify, request, make_response
from models import db
from models import User
from models import Course


def configure_routes(app):
    @app.route('/users')
    def run():
        users = [{"id": user.id, "name": user.name, "password": user.password, "email": user.email} for user in User.query.all()]
        return jsonify({"users": users})  # type: ignore

    @app.route('/createAccount', methods=['POST'])
    def createAccount():
        try:
            data = request.get_json()
            new_user = User(name=data['name'], username=data['username'], password=data['password'], emaiil=data['email'])
            db.session.add(new_user)
            db.session.commit()
            return make_response(jsonify({'message': 'user created'}), 201)
        except:
            return make_response(jsonify({'message': 'error creating user'}), 500)
        
    @app.route('/<int:id>/addCourse', methods=['PUT'])
    def addCourse():
        try:
            user = db.query.filter_by(id=id).first()
            if(user):
                course = request.get_json()
                user.schedule.append(course['course_id'])
                db.session.commit()
                return make_response(jsonify({'message': 'course sucessfully added'}), 201)
            return make_response(jsonify({'message': 'user not found'}), 201)
        except:
            return make_response(jsonify({'message': 'error adding course'}), 500)
    

    @app.route('/courses')
    def getCourses():
        courses = [{"name": course.name, "course_code": course.course_code, "professor": course.professor} for course in Course.query.all()]
        return jsonify({"courses": courses})
    
   