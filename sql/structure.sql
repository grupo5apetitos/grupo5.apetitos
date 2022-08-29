DROP DATABASE IF EXISTS apetitos_db;
CREATE DATABASE apetitos_db;
USE apetitos_db;

CREATE TABLE users (
	id_users INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    avatar VARCHAR(100) NOT NULL,
    id_profile TINYINT NOT NULL
);

CREATE TABLE users_profile (
	id_profile TINYINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    abrev CHAR(5)
);

CREATE TABLE meals (
	id_meals INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price DOUBLE NOT NULL,
    image VARCHAR(100) NOT NULL,
    id_category TINYINT
);

CREATE TABLE category (
	id_category TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE shopping_cart (
	id_cart INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_users INT NOT NULL
);

CREATE TABLE cart_meals (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cart INT NOT NULL,
    id_meals INT NOT NULL
);

ALTER TABLE users ADD CONSTRAINT FK_users_profile FOREIGN KEY (id_profile) REFERENCES users_profile(id_profile) ON DELETE CASCADE;
ALTER TABLE meals ADD CONSTRAINT FK_meals_category FOREIGN KEY (id_category) REFERENCES category(id_category) ON DELETE CASCADE;
ALTER TABLE shopping_cart ADD CONSTRAINT FK_cart_users FOREIGN KEY (id_users) REFERENCES users(id_users) ON DELETE CASCADE;
ALTER TABLE cart_meals ADD CONSTRAINT FK_cart_meals FOREIGN KEY (id_cart) REFERENCES shopping_cart(id_cart) ON DELETE CASCADE;
ALTER TABLE cart_meals ADD CONSTRAINT FK_shopping_cart_meals FOREIGN KEY (id_meals) REFERENCES meals(id_meals) ON DELETE CASCADE;