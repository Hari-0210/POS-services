CREATE PROCEDURE create_user (IN userName varchar(255),IN password varchar(255))
BEGIN
    insert into userDetails (userName,password) values (userName,password);
END