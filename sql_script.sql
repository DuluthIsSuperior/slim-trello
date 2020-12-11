CREATE DATABASE IF NOT EXISTS not_trello;
USE not_trello;

DROP TABLE IF EXISTS tasks_assigned;	# we have to drop tasks_assigned here first to clear the foreign key constraints

DROP TABLE IF EXISTS people;
CREATE TABLE people(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    password VARCHAR(15) NOT NULL,
    job_title VARCHAR(30) NOT NULL
) AUTO_INCREMENT = 1;

INSERT INTO people(first_name, last_name, password, job_title)
VALUES('Adam', 'Smith', 'admin', 'Admin'), ('Jane', 'Doe', 'janeDoe', 'Developer'), ('Walter', 'White', 'walterWhite', 'Distributor');

DROP FUNCTION IF EXISTS validateUser;
# delimiter command below prevents MySQL from interpreting each line of the function as its own query
DELIMITER $$
CREATE FUNCTION validateUser(f_name VARCHAR(20), l_name VARCHAR(20), pwd VARCHAR(15))
RETURNS INTEGER
READS SQL DATA
BEGIN
	DECLARE c INT;
    SELECT COUNT(*) INTO c FROM people WHERE first_name = f_name AND last_name = l_name AND password = pwd;
    # if COUNT(*) returns 0, invalid user, if COUNT(*) returns 1, valid user
	RETURN c;
END$$
DELIMITER ;
# above delimiter command returns the styling to normal

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100)
) AUTO_INCREMENT = 1;


INSERT INTO tasks(name, description)
VALUES('Add Title', 'Add title to webpage'), ('Install ReactJS', 'Install ReactJS source files to webpage'), 
('Create CSS', 'Add CSS to modernize webpage');

CREATE TABLE tasks_assigned(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	person_id INT NOT NULL,
    task_id INT NOT NULL,
    completed TINYINT NOT NULL,	-- 0 = false, everything else is true
    CONSTRAINT fk_person FOREIGN KEY (person_id) REFERENCES people(id),
    CONSTRAINT fk_task FOREIGN KEY (task_id) REFERENCES tasks(id)
) AUTO_INCREMENT = 1;

INSERT INTO tasks(person_id, task_id, completed)
VALUES(1, 1, 0), (1, 3, 1), (2, 2, 1);

-- SELECT * FROM people A LEFT OUTER JOIN (SELECT person_id AS id, task_id FROM tasks_assigned) B ON A.id = B.id WHERE task_id IS NOT NULL; 