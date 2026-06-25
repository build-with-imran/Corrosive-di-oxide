--create database EmployeeDB;

-- CRUD OPERATIONS / C-Create R-Read U-Update D-Delete

-- To create table 

--create table Employee (emp_id int identity (1,1) primary key, emp_name varchar(100) not null)

-- Rows can be called as records and columns can be called as fields 

--insert into Employee (emp_name) values ('Jesintha')


select * from Employee

--alter table Employee add gender char(1);

update Employee set gender = 'F' Where emp_id in (2,4,5);

