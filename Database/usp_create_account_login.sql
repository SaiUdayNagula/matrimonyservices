DELIMITER $$

CREATE  PROCEDURE `usp_account_login`()
BEGIN
  	
    -- get today created account count to prepare account_id
    DECLARE sno VARCHAR(25) DEFAULT '';
	SELECT  count(*) + 1
	INTO sno
	FROM ACCOUNT
	WHERE DATE_FORMAT(created_date,'yyyy-mm-dd') = DATE_FORMAT(NOW(),'yyyy-mm-dd');
    
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
    'test@test.com',
    '1234567890',
    '+91',
    2,
    'test1 first name',
    'test1 last name',
    '1990-01-01',
    1,
    'test address line1',
    'test city',
    'test state',
    123456,
    'test country'    
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
END $$
DELIMITER ;