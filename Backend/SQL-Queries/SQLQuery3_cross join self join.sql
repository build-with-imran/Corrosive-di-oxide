--select * from Employee

create table Tshirt (color varchar(20) not null);
create table sizes (size char(1) not null);

insert into Tshirt values ('red'),('blue');
insert into sizes values ('L'),('M'),('S');

select * from sizes

select * from Tshirt cross join sizes 

--Each Row has each row from the both tables.

--Self join

create table Worker (emp_id int primary key identity (1,1),employee_name varchar(100) not null,Manager_id int)

insert into worker (employee_name) values ('Imran'),('Jesintha'),('Jesi'),('Gayu')
select * from worker

update worker set Manager_id = 2 where emp_id in (2);

update worker set Manager_id = 56258 where emp_id in (1,3);


update worker set Manager_id = 54251 where emp_id in (4);

alter table worker add salary int;
alter table worker add department varchar(50);

update worker set salary = 72000 where emp_id = 4
update worker set department = 'HR' where emp_id = 3

--sub queries is called query inside another query 2 types are outer query and inner query

--employees with > than average salary

select * from worker where salary > (select avg (salary) from Worker);

select * from worker where department in (select department from worker where department = 'HR');	


