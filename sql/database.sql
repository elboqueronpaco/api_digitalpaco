CREATE DATABASE api_rest_digitalpaco OWNER elboqueronpaco;
\c api_rest_digitalpaco;

CREATE TYPE roles AS ENUM ('User', 'Admin');
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(40)NOT NULL UNIQUE,
    email VARCHAR(150)NOT NULL UNIQUE,
    password VARCHAR(255)NOT NULL,
    avatar VARCHAR(255),
    privilege roles NOT NULL DEFAULT 'User',
    active BOOLEAN NOT NULL DEFAULT FALSE
);

