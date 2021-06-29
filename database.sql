CREATE DATABASE yiya;

use yiya;

/*
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS orders;
*/

CREATE TABLE cards(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customer(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    continent VARCHAR(200),
    country VARCHAR(200),
    timeZone VARCHAR(200),
    ipAddress VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders(
    id INT(11) AUTO_INCREMENT NOT NULL  PRIMARY KEY,
    customerID INT(11) NOT NULL,
    cardID INT(11) NOT NULL,
    address VARCHAR(200),
    city VARCHAR(200),
    zipCode VARCHAR(200),
    country VARCHAR(200),
    status varchar(200) NOT NULL DEFAULT "pending",
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cardID) REFERENCES cards(id),
    FOREIGN KEY (customerID) REFERENCES customer(id)
);

insert into cards (name) values ("go card");
insert into cards (name) values ("go two");
insert into cards (name) values ("go");
insert into cards (name) values ("card");
insert into cards (name) values ("go fast");
insert into cards (name) values ("fast");
insert into cards (name) values ("done");
insert into cards (name) values ("success");
insert into cards (name) values ("blue");
insert into cards (name) values ("ZA");
insert into cards (name) values ("ZAR");
insert into cards (name) values ("GREEN");
insert into cards (name) values ("two");
insert into cards (name) values ("No");
insert into cards (name) values ("pelota");
insert into cards (name) values ("shida");
insert into cards (name) values ("Hello");
insert into cards (name) values ("dearest");
insert into cards (name) values ("perfecto");
insert into cards (name) values ("wings");
insert into cards (name) values ("dunno");
insert into cards (name) values ("build");
insert into cards (name) values ("free");
insert into cards (name) values ("free talk");
insert into cards (name) values ("zoom");
insert into cards (name) values ("jelly");
insert into cards (name) values ("tango");
insert into cards (name) values ("jazz");
insert into cards (name) values ("radio");
insert into cards (name) values ("hump day");
insert into cards (name) values ("yours");
insert into cards (name) values ("internet");

insert into customer (name) values ("seni");
insert into customer (name) values ("mac");
insert into customer (name) values ("jennifer");
insert into customer (name) values ("cindy");
insert into customer (name) values ("blue");
insert into customer (name) values ("mr green");
insert into customer (name) values ("sade");
insert into customer (name) values ("Mr Miller");
insert into customer (name) values ("Mrs sade");
insert into customer (name) values ("Sise Anne");
insert into customer (name) values ("Anne");
insert into customer (name) values ("brown");
insert into customer (name) values ("Jen");
insert into customer (name) values ("January");
