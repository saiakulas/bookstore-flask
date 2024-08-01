from app import app, mongo
from flask import jsonify, request

@app.route('/api/books', methods=['GET'])
def get_books():
    books_collection = mongo.db.books
    books = books_collection.find()
    return jsonify([{
        'id': str(book['_id']),
        'title': book['title'],
        'author': book['author'],
        'price': book['price']
    } for book in books])

@app.route('/api/books', methods=['POST'])
def add_book():
    data = request.json
    books_collection = mongo.db.books
    new_book = {
        'title': data['title'],
        'author': data['author'],
        'price': data['price']
    }
    result = books_collection.insert_one(new_book)
    return jsonify({'message': 'Book added!', 'id': str(result.inserted_id)}), 201
