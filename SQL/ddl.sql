create database COMPANYDB;

use COMPANYDB;
create table Employeetable(
Employee_id int primary key auto_increment,
Employee_name varchar(200) not null,
Employee_Email varchar(200) not null,
Department varchar(200) not null,
Employee_salary int not null,
Employee_city varchar(200) not null,
Created_At date not null

);

INSERT INTO Employeetable (Employee_name,Employee_Email,Department,Employee_salary,Employee_city,Created_At) VALUES 

(upper("imran"),lower("IMRANIMMU1997@GMAIL.com"),upper("FrontEnd"),round("23456.786"),upper("chennai"),DATE(NOW())),

(upper("abhijith"),lower("IMRANIMMU1997@GMAIL.com"),upper("FrontEnd"),round("23456.786"),upper("chennai"),DATE(NOW())),

(upper("Gayu"),lower("JESibASKER@GMAAIL.com"),upper("FrontEnd"),round("23456.786"),upper("chennai"),DATE(NOW())),

(UPPER("vijay"),LOWER("vijay@gmail.com"),UPPER("Testing"),ROUND(28765.786),UPPER("coimbatore"),DATE(NOW())),

(UPPER("gokul"),LOWER("gokul@gmail.com"),UPPER("Support"),ROUND(22345.786),UPPER("madurai"),DATE(NOW())),

(UPPER("janani"),LOWER("janani@gmail.com"),UPPER("Designer"),ROUND(38765.786),UPPER("trichy"),DATE(NOW())),

(UPPER("joseph"),LOWER("joseph@gmail.com"),UPPER("Developer"),ROUND(51234.786),UPPER("kochi"),DATE(NOW())),

(UPPER("mansoor"),LOWER("mansoor@gmail.com"),UPPER("Frontend"),ROUND(29876.786),UPPER("vellore"),DATE(NOW())),

(UPPER("saranya"),LOWER("saranya@gmail.com"),UPPER("Finance"),ROUND(42345.786),UPPER("salem"),DATE(NOW())),

(UPPER("surya"),LOWER("surya@gmail.com"),UPPER("Marketing"),ROUND(33456.786),UPPER("erode"),DATE(NOW())),

(UPPER("natpu"),LOWER("natpu@gmail.com"),UPPER("Security"),ROUND(24567.786),UPPER("tirunelveli"),DATE(NOW())),

(UPPER("yeduthuko"),LOWER("yeduthuko@gmail.com"),UPPER("Admin"),ROUND(26789.786),UPPER("karur"),DATE(NOW())),

(UPPER("vaangiko"),LOWER("vaangiko@gmail.com"),UPPER("Frontend"),ROUND(31234.786),UPPER("hosur"),DATE(NOW())),

(UPPER("thookirlaam"),LOWER("thookirlaam@gmail.com"),UPPER("Backend"),ROUND(37890.786),UPPER("namakkal"),DATE(NOW())),

(UPPER("yeduthurlaam"),LOWER("yeduthurlaam@gmail.com"),UPPER("Testing"),ROUND(28901.786),UPPER("thanjavur"),DATE(NOW())),

(UPPER("parichikalaam"),LOWER("parichikalaam@gmail.com"),UPPER("Support"),ROUND(25678.786),UPPER("dindigul"),DATE(NOW())),

(UPPER("vaangikalaam"),LOWER("vaangikalaam@gmail.com"),UPPER("Designer"),ROUND(46789.786),UPPER("cuddalore"),DATE(NOW())),

(UPPER("magesh"),LOWER("magesh@gmail.com"),UPPER("Developer"),ROUND(55678.786),UPPER("pondicherry"),DATE(NOW())),

(UPPER("arun"),LOWER("arun@gmail.com"),UPPER("Frontend"),ROUND(27890.786),UPPER("chennai"),DATE(NOW())),

(UPPER("karthik"),LOWER("karthik@gmail.com"),UPPER("Backend"),ROUND(48901.786),UPPER("bangalore"),DATE(NOW())),

(UPPER("keerthana"),LOWER("keerthana@gmail.com"),UPPER("HR"),ROUND(36789.786),UPPER("hyderabad"),DATE(NOW())),

(UPPER("naveen"),LOWER("naveen@gmail.com"),UPPER("Testing"),ROUND(29876.786),UPPER("madurai"),DATE(NOW())),

(UPPER("priya"),LOWER("priya@gmail.com"),UPPER("Finance"),ROUND(50987.786),UPPER("coimbatore"),DATE(NOW())),

(UPPER("rohith"),LOWER("rohith@gmail.com"),UPPER("Marketing"),ROUND(34567.786),UPPER("trichy"),DATE(NOW())),

(UPPER("deepika"),LOWER("deepika@gmail.com"),UPPER("Admin"),ROUND(27890.786),UPPER("salem"),DATE(NOW()));

select * from Employeetable;

