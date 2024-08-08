from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB configuration
client = MongoClient("mongodb://localhost:27017/")
db = client["bookstore"]
collection = db["books"]

@app.route('/books', methods=['GET'])
def get_books():
    books = collection.find()
    return dumps(books)
@app.route('/books', methods=['POST'])
def add_book():
    data = request.json
    # Ensure the data includes the required fields, including 'title', 'author', and 'image_url'
    if not all(key in data for key in ('title', 'author', 'image_url')):
        return jsonify({"error": "Missing required fields"}), 400

    collection.insert_one(data)
    return jsonify({"status": "Book added!"}), 201


@app.route('/books/<id>', methods=['DELETE'])
def delete_book(id):
    collection.delete_one({"_id": ObjectId(id)})
    return jsonify({"status": "Book deleted!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
