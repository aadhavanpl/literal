from flask import Blueprint, render_template #files with all the urls#

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('home.html', passed="This is passed from another page")