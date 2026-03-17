CREATE DATABASE IF NOT EXISTS hero_kidz_db;

CREATE TABLE IF NOT EXISTS products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    bangla VARCHAR(255),
    image TEXT,
    price DECIMAL(10,2),
    discount INT,
    description TEXT,
    reviews INT DEFAULT 0,
    sold INT DEFAULT 0,
    ratings DECIMAL(2,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)