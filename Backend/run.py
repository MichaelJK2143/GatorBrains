from flask import request
from flask import Flask, jsonify
from app import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
