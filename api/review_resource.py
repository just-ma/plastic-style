from flask import Flask
from api.service import review_service

app = Flask(__name__)
app.config.from_pyfile('config.py')

@app.route("/")
def get_reviews():
    return review_service.get_reviews()


@app.route("/<id>")
def get_review(id):
    return review_service.get_review(id)
