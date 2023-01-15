import sqlite3

connection = sqlite3.connect('database.db')


with open('table.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

# cur.execute("DROP table posts",)

connection.commit()
connection.close()