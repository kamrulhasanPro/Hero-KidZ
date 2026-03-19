CREATE DATABASE IF NOT EXISTS hero_kidz_db;
USE hero_kidz_db;

CREATE TABLE IF NOT EXISTS products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    bangla_title VARCHAR(255),
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

CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, 
    provider VARCHAR(50),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- INSERT INTO products 
-- (title, bangla_title, image, price, discount, description, reviews, sold, ratings)
-- VALUES
-- ('Number and Counting Learning Board','সংখ্যা ও গণনা শেখার শিক্ষামূলক বোর্ড','https://i.ibb.co.com/p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg',1250,10,'Number and Counting Learning Board...',19,31,4.6),

-- ('Animal and Nature Learning Flash Cards','প্রাণী ও প্রকৃতি শেখার ফ্ল্যাশ কার্ড সেট','https://i.ibb.co.com/QFDWpCf4/s-l1600.webp',950,8,'Animal and Nature Learning Flash Cards...',22,40,4.7),

-- ('Fun Logic Matching Cube Game','মজার লজিক ম্যাচিং কিউব গেম','https://i.ibb.co.com/3mMvjKnV/71k8-US2-Ls3-L-SL1500.jpg',1150,14,'Fun Logic Matching Cube Game...',26,48,4.6),

-- ('Creative Story Builder Picture Cards','মজার গল্প বানানোর পিকচার কার্ড সেট','https://i.ibb.co.com/RGMWJdwt/71zppz-Gon-RL-AC-SX679.jpg',1050,9,'Creative Story Builder Picture Cards...',21,37,4.7),

-- ('Kids Graduation Hat with Costume','শিশুদের গ্র্যাজুয়েশন হ্যাট','https://i.ibb.co.com/vxMYHV6V/image.png',650,5,'Kids Graduation Hat...',15,28,4.4),

-- ('Superman Costume for Kids','শিশুদের সুপারম্যান পোশাক','https://i.ibb.co.com/1tNhx5Ct/81-Vy-ni-Yxs-L-AC-SX679.jpg',1350,10,'Superman Costume...',18,32,4.6),

-- ('Doctor Costume Set for Kids','শিশুদের ডাক্তার পোশাক সেট','https://i.ibb.co.com/203h05Sq/image.png',1450,12,'Doctor Costume Set...',20,30,4.7),

-- ('Kids Engineering Tools Set','শিশুদের ইঞ্জিনিয়ারিং টুলস সেট','https://i.ibb.co.com/W4L8SFbK/image.png',1350,10,'Kids Engineering Tools Set...',18,28,4.6);


-- INSERT INTO product_qna (product_id, question, answer) VALUES

-- -- Product 1
-- (1,'এই বোর্ডটি কোন বয়সের শিশুদের জন্য উপযুক্ত?','৩ থেকে ৬ বছর'),
-- (1,'এই খেলনাটি কি গণিত শেখার জন্য কার্যকর?','হ্যাঁ'),

-- -- Product 2
-- (2,'এই ফ্ল্যাশ কার্ডগুলো কোন বয়সের শিশুদের জন্য উপযুক্ত?','২ থেকে ৬ বছর'),
-- (2,'এটি কি একা ব্যবহার করা যায়?','হ্যাঁ'),

-- -- Product 3
-- (3,'এই গেমটি কি কঠিন?','না'),
-- (3,'গ্রুপে খেলা যায়?','হ্যাঁ'),

-- -- Product 4
-- (4,'গল্প বানানো শেখায়?','হ্যাঁ'),
-- (4,'কোন বয়সের জন্য?','৪-৮ বছর'),

-- -- Product 5
-- (5,'সব বয়সের জন্য?','হ্যাঁ'),
-- (5,'আরামদায়ক?','হ্যাঁ'),

-- -- Product 6
-- (6,'সব সাইজ আছে?','হ্যাঁ'),
-- (6,'আরামদায়ক?','হ্যাঁ'),

-- -- Product 7
-- (7,'নিরাপদ?','হ্যাঁ'),
-- (7,'role play করা যায়?','হ্যাঁ'),

-- -- Product 8
-- (8,'engineering শেখায়?','হ্যাঁ'),
-- (8,'STEM skill উন্নত করে?','হ্যাঁ');


-- INSERT INTO product_info (product_id, info) VALUES

-- -- Product 1
-- (1,'সংখ্যা শেখা'),(1,'গণনা শেখা'),(1,'হ্যান্ডস-অন'),(1,'নিরাপদ'),

-- -- Product 2
-- (2,'প্রাণী শেখা'),(2,'ভিজ্যুয়াল মেমোরি'),(2,'স্ক্রিন-ফ্রি'),(2,'প্রি-স্কুল'),

-- -- Product 3
-- (3,'লজিক'),(3,'প্যাটার্ন'),(3,'ফান লার্নিং'),(3,'নিরাপদ'),

-- -- Product 4
-- (4,'সৃজনশীলতা'),(4,'গল্প বলা'),(4,'স্ক্রিন-ফ্রি'),(4,'গ্রুপ প্লে'),

-- -- Product 5
-- (5,'গ্র্যাজুয়েশন'),(5,'কমফোর্ট'),(5,'কালারফুল'),(5,'সেফ'),

-- -- Product 6
-- (6,'role play'),(6,'superhero'),(6,'safe'),(6,'party use'),

-- -- Product 7
-- (7,'doctor role'),(7,'props'),(7,'safe'),(7,'learning'),

-- -- Product 8
-- (8,'engineering'),(8,'problem solving'),(8,'safe'),(8,'STEM');

select * from product_info;