import sqlite3

DB_NAME = "nyondo_stock.db"

def main():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        description TEXT,
        price REAL NOT NULL
    );
    """)

    cur.execute("""
    INSERT OR IGNORE INTO products (name, description, price) VALUES
        ('Cement (bag)', 'Portland cement 50kg bag', 35000),
        ('Iron Sheet 3m', 'Gauge 30 roofing sheet 3m', 110000),
        ('Paint 5L', 'Exterior wall paint white 5L', 60000),
        ('Nails 1kg', 'Common wire nails 1kg pack', 12000),
        ('Timber 2x4', 'Pine timber plank 2x4 per metre', 25000);
    """)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    main()