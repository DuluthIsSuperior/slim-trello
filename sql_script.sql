CREATE DATABASE IF NOT EXISTS not_trello;
USE not_trello;

DROP TABLE IF EXISTS people;
CREATE TABLE people(
	person_id INT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    job_title VARCHAR(30) NOT NULL
);

INSERT INTO people VALUES(1, 'Kyle', 'Dick', 'Admin');

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks(
	task_id INT PRIMARY KEY,
    task_name VARCHAR(30) NOT NULL,
    task_description VARCHAR(100)
) AUTO_INCREMENT = 1;

DROP TABLE IF EXISTS tasks_assigned;
CREATE TABLE tasks_assigned(
	person_id INT,
    task_id INT,
    CONSTRAINT fk_person FOREIGN KEY (person_id) REFERENCES people(person_id),
    CONSTRAINT fk_task FOREIGN KEY (task_id) REFERENCES tasks(task_id)
) AUTO_INCREMENT = 1;