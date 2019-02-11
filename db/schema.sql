DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	item_id INTEGER (11) AUTO_INCREMENT,
    burger_name VARCHAR (50) NOT NULL,
    devoured Boolean Default false,
    PRIMARY KEY (item_id)
);
