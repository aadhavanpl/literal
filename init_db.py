import sqlite3

connection = sqlite3.connect('database.db')


with open('table.sql') as f:
    connection.executescript(f.read())  
    #executescript allows you to exectute multiple queries at once
    #execute allows you to only execute one query

cur = connection.cursor()

cur.execute("INSERT INTO posts (title, content) VALUES (?, ?)",
            ('First Post', 'Content for the first post')
            )

cur.execute("INSERT INTO posts (title, content) VALUES (?, ?)",
            ('Second Post', 'Content for the second post')
            )

connection.commit()
#any changes made to the database will be rolled back when the connection is closed
connection.close()