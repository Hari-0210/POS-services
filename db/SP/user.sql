CREATE PROCEDURE create_user (IN userName varchar(255),IN password varchar(255))
BEGIN
    insert into userDetails (userName,password) values (userName,password);
END


CREATE TABLE `userDetails` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roleID` int(11) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName_UNIQUE` (`userName`)
);