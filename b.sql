mysql -u root -p

CREATE DATABASE school;
USE school;

CREATE TABLE Teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50),
    salary INT
);

INSERT INTO Teacher (name, subject, salary) VALUES
('Anil', 'Maths', 25000),
('Meena', 'English', 18000),
('Charan', 'Physics', 22000),
('Divya', 'Chemistry', 19500),
('Eshan', 'Biology', 30000);

SELECT * FROM Teacher;
