create database VoterResult;

use VoterResult;

CREATE TABLE CONSTITUTION (
    Constitution_ID INT PRIMARY KEY AUTO_INCREMENT,
    Constitution_Name VARCHAR(100) NOT NULL,

    Created_By VARCHAR(100) DEFAULT "Admin",
    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,

    Updated_By VARCHAR(100) DEFAULT "immu",
    Updated_At DATETIME DEFAULT CURRENT_TIMESTAMP
);


