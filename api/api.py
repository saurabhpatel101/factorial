from flask import Flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors.core import probably_regex

app = Flask(__name__)
CORS(app)


@app.route('/api/result', methods=['POST'])
def value():

    # return the calculated value of factorial and taken time
    return
