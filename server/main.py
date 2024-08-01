from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors=CORS(app,origin='*')

@app.route("/api/users", methods=['GET'])
def users():
    return jsonify({
        "users": [
            "sai",
            "ram",
            "teja"
        ]
    })

if __name__ == "__main__":
    app.run()
