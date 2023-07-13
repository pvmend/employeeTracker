INSERT INTO departments (name) VALUES ('Cool Stuff'), ('Recruiter'), ('Practical');

INSERT INTO roles (title, salary, department_id) VALUES
('Pro Flosser', 1570.00, 1),
('Baby Trainer', 800.00, 2),
('Bee Keeper', 75000.00, 3),
('Zoo Keeper', 9000.00, 1),
('Exorcist', 25000.00, 2),
('Mechanic', 20.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Reggie', 'Reggerson', 3, NULL),
('Greg', 'Mcgee', 1, NULL),
('Giga', 'Chad', 2, NULL),
('Bobert', 'Patterson', 5, 1),
('Juan', 'Juan', 4, 2),
('Ralph', 'Wiggim', 6, 3);