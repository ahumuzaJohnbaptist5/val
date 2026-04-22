import sqlite3

conn = sqlite3.connect("nyondo_stock.db")
cur = conn.cursor()

cur.execute("SELECT * FROM products;")
rows = cur.fetchall()

for row in rows:
    print(row)

print("\nTotal rows:", len(rows))

conn.close()