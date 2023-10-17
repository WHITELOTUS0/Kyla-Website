CREATE DATABASE IF NOT EXISTS school_matching;

USE school_matching;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    grade_level INT NOT NULL
);

CREATE TABLE IF NOT EXISTS profiles (
    user_id INT,
    name VARCHAR(255),
    traits VARCHAR(255),
    differences VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS quiz_responses (
    user_id INT,
    responses TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
