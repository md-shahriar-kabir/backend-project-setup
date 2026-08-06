CREATE TABLE students2 (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT,
    department TEXT,
    cgpa DECIMAL(3,2)
);

INSERT INTO students2(name, age, department, cgpa)
VALUES
('Kabir',22,'CSE',3.80),
('Rahim',23,'EEE',3.50),
('Karim',21,'CSE',3.95),
('Sadia',22,'BBA',3.60),
('Nusrat',20,'CSE',3.70),
('Rafi',24,'EEE',3.20),
('Jannat',21,'BBA',3.85),
('Hasan',23,'CSE',3.40);

SELECT * FROM students2

SELECT name FROM students2;
SELECT department FROM students2;
SELECT cgpa FROM students2;

SELECT * FROM students2
WHERE cgpa > 3.70;

SELECT name, cgpa FROM students2
WHERE department = 'CSE';

SELECT * FROM students2
ORDER BY cgpa DESC;

SELECT * FROM students2
ORDER BY age ASC;

SELECT * FROM students2
LIMIT 3;

SELECT * FROM students2
ORDER BY cgpa DESC
LIMIT 1;

SELECT COUNT(*)
FROM students2;

SELECT AVG(cgpa)
FROM students2;

SELECT MAX(cgpa)
FROM students2;

SELECT department, COUNT(*) FROM students2
GROUP BY department;

SELECT department, AVG(cgpa)
FROM students2
GROUP BY department;

-- update

UPDATE students2
SET cgpa = 4.00
WHERE name = 'Kabir';

DELETE FROM students2
WHERE cgpa < 3.30;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    salary INT,
    department_id INT REFERENCES departments(id)
);

INSERT INTO employees (name, salary, department_id)
VALUES
('Kabir', 50000, 1),
('Rahim', 45000, 2),
('Karim', 60000, 1),
('Sadia', 55000, 3),
('Nusrat', 52000, 1),
('Rafi', 47000, 2);


SELECT e.name AS employee_name,
       d.name AS department_name
FROM employees e
JOIN departments d
ON e.department_id = d.id;