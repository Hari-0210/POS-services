CREATE TABLE `POSDB_DEV`.`product` (
  `productID` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(255) NOT NULL,
  `productCode` VARCHAR(255) NOT NULL,
  `productCategory` INT NULL,
  `brand` INT NULL,
  `productQty` INT NULL,
  `productCost` VARCHAR(45) NULL,
  PRIMARY KEY (`productID`),
  UNIQUE INDEX `productName_UNIQUE` (`productName` ASC),
  UNIQUE INDEX `productCode_UNIQUE` (`productCode` ASC));


  CREATE TABLE `POSDB_DEV`.`productCategory` (
  `productCategoryID` INT NOT NULL AUTO_INCREMENT,
  `productCategoryName` VARCHAR(255) NULL,
  PRIMARY KEY (`productCategoryID`),
  UNIQUE INDEX `productCategoryName_UNIQUE` (`productCategoryName` ASC));


CREATE TABLE `POSDB_DEV`.`brand` (
  `brandID` INT NOT NULL AUTO_INCREMENT,
  `brandName` VARCHAR(255) NULL,
  PRIMARY KEY (`brandID`),
  UNIQUE INDEX `brandName_UNIQUE` (`brandName` ASC));