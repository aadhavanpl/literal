from flask import Blueprint #files with all the urls#

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return "<p>Test</p>"