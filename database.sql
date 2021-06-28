CREATE DATABASE yiya;

use yiya;

CREATE TABLE cards(
    id INT(11) NOT NULL PRIMARY KEY,
    name VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customer(
    id INT(11) NOT NULL PRIMARY KEY,
    name INT(11) NOT NULL,
    surname INT(11) NOT NULL,
    address VARCHAR(200),
    city VARCHAR(200),
    zipCode VARCHAR(200),
    country VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user(
    id INT(11) NOT NULL PRIMARY KEY,
    continent VARCHAR(200),
    country VARCHAR(200),
    timeZone VARCHAR(200),
    ipAddress VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders(
    id INT(11) NOT NULL PRIMARY KEY,
    customerID INT(11) NOT NULL,
    cardID INT(11) NOT NULL,
    cardStatus varchar(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
