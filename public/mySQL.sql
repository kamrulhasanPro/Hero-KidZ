CREATE DATABASE IF NOT EXISTS defaultdb;
USE defaultdb;

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
);

CREATE TABLE IF NOT EXISTS product_qna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    question TEXT,
    answer TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS product_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    info TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

select * from product_info;