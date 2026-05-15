create database ecomexpress;

use ecomexpress;

create table user_customers(
customer_id int primary key auto_increment,
customer_name varchar(200),
customer_ciity varchar(200)


);

insert into user_customers (customer_name,customer_ciity)
 values 
 ("maya","chennai"),
 ("paya","viluppuram"),
 ("Thai Kelavi","Kallakurichi"),
  ("aaya","Madurai"),
 ("Chaaya","Thindivanam"),
 ("Immu","Trichu");



create table Orders(

order_id int primary key auto_increment,
product_name varchar(200),
product_price int,
cus_id int,


foreign key (cus_id) references user_customers (customer_id)

);

insert into Orders (product_name,product_price,cus_id) values 
("soap",2876,1),
("shampoo",236,1),
("Powder",130,1),
("Sunscreen",2909890,2),
("eyeliner",236,1),
("Mascara",130,1),
("Shift-Duos",2909890,2);