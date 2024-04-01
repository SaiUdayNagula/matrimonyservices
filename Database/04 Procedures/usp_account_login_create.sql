USE `martimonyservices`;
DROP procedure IF EXISTS `usp_account_login_create`;

USE `martimonyservices`;
DROP procedure IF EXISTS `martimonyservices`.`usp_account_login_create`;
;

DELIMITER $$
USE `martimonyservices`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_account_login_create`(
	first_name varchar(45),
	last_name varchar(45),
    primary_phone varchar(10),
    primary_phone_country varchar(5),
    primary_phone_type int,
    birth_date date,
    gender int,
    address_line1 varchar(45),
    city varchar(45),
    state varchar(45),
    zip varchar(45),
    country varchar(45),
    photo varchar(45),
    secret_question varchar(45),
    secret_answer varchar(45),
    secondary_phone varchar(10),
    secondary_phone_country varchar(5),
    secondary_phone_type int,
    middle_name varchar(45),
    address_line2  varchar(45)
)
BEGIN
  	
    -- get today created account count to prepare account_id
    DECLARE sno VARCHAR(25) DEFAULT '';
	SELECT  count(*) + 1
	INTO sno
	FROM ACCOUNT
	WHERE DATE_FORMAT(created_date,'yyyy-mm-dd') = DATE_FORMAT(NOW(),'yyyy-mm-dd');
    
    -- Assign Account Code
    SET  @account_code = CONCAT(DATE_FORMAT(NOW(), '%Y%m%d-%H%i%s') , concat('-',sno)) ;

	START TRANSACTION;
	INSERT INTO account (
        account_code,
        email, 
		primary_phone ,
		primary_phone_country  ,
		primary_phone_type ,
		first_name ,
		last_name ,
		birth_date ,
		gender ,
		address_line1 ,
		city ,
		state ,
		zip ,
		country)
	VALUES(
    @account_code,
	first_name ,
	last_name ,
    primary_phone ,
    primary_phone_country ,
    primary_phone_type,
    birth_date ,
    gender ,
    address_line1 ,
    city ,
    state ,
    zip ,
    country ,
    photo ,
    secret_question ,
    secret_answer ,
    secondary_phone ,
    secondary_phone_country ,
    secondary_phone_type ,
    middle_name ,
    address_line2  
    );
	-- Get latest account table inserted record id
    SET @account_id:=(SELECT LAST_INSERT_ID());
    
  
	 INSERT INTO login (account_id,
		user_name,
        password)
		VALUES( @account_id,
				LEFT(MD5(RAND()), 8),
				LEFT(MD5(RAND()), 8)
			); 
	COMMIT;
    
    select @account_id;
END$$

DELIMITER ;
;

