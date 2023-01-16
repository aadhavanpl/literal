import sqlite3
from flask import Flask, render_template, request, url_for, flash, redirect, abort

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sahelriaz'

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def get_post(post_id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?',
                        (post_id,)).fetchone()
    conn.close()
    if post is None:
        abort(404)
    return post

@app.route('/blog/<int:id>')
def blog(id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id=?', (id,)).fetchone()
    conn.close()
    return render_template('blog.html', posts=post)

@app.route('/blog/<int:id>/delete', methods=('POST',))
def delete(id):
    post = get_post(id)
    conn = get_db_connection()
    conn.execute('DELETE FROM posts WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('"{}" was successfully deleted!'.format(post['title']))
    return redirect(url_for('index')) 

@app.route('/blog/edit/<int:id>', methods=('GET', 'POST'))
def edit(id):
    post = get_post(id)

    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        content = request.form['content']

        if not title:
            flash('Title is required!')

        elif not author:
            flash('Author is required!')

        elif not content:
            flash('Content is required!')

        else:
            conn = get_db_connection()
            conn.execute('UPDATE posts SET title = ?, author = ?, content = ?'
                         ' WHERE id = ?',
                         (title, author, content, id))
            conn.commit()
            conn.close()
            return redirect(url_for('blog', id=post['id']))

    return render_template('edit.html', post=post)

@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)

@app.route('/create/', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        content = request.form['content']

        if not title:
            flash('Title is required!')
        elif not author:
            flash('Author is required!')
        elif not content:
            flash('Content is required!')
        else:
            conn = get_db_connection()
            conn.execute('INSERT INTO posts (title, author, content) VALUES (?, ?, ?)',
                         (title, author, content))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))

    return render_template('create.html')

# @app.route('/create/')
# def convertToBinaryData(filename):
#     with open(filename, 'rb') as file:
#         blobData = file.read()
#     return blobData

# def writeTofile(data, filename):
#     with open(filename, 'wb') as file:
#         file.write(data)
#     print("Stored blob data into: ", filename, "\n")