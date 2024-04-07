CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_account_login`(username varchar(45), password1 varchar(45), firstname varchar(25), lastname varchar(25), dob date, gender varchar(10), 
										address1 varchar(25), city varchar(45), state varchar(25), country varchar(25), zip varchar(25), email1 varchar(255), 
                                        phone varchar(10), phonecountry varchar(5) )
BEGIN
  	
    -- get today created account count to prepare account_id
    
    DECLARE sno VARCHAR(25) DEFAULT '';
	SELECT  count(*) + 1
	INTO sno
	FROM ACCOUNT
	WHERE DATE_FORMAT(created_date,'yyyy-mm-dd') = DATE_FORMAT(NOW(),'yyyy-mm-dd');
    
    SET  @account_code = CONCAT(DATE_FORMAT(NOW(), '%Y%m%d-%H%i%s') , concat('-',sno)) ;
    SET @gen = CASE WHEN @gender = 'male' THEN 1 ELSE 0 END;

	START TRANSACTION;
	INSERT INTO account ( account_code, email, primary_phone , primary_phone_country  , primary_phone_type , first_name , last_name ,
				birth_date , gender , address_line1 , city , state , zip , country)
	VALUES( @account_code, email1, phone, phonecountry, 2, firstname, lastname, dob, @gen, address1, city, state, zip, country );
    
	-- Get latest account table inserted record id
    SET @account_id:=(SELECT LAST_INSERT_ID());
  
	INSERT INTO login (account_id, user_name, password)
		VALUES( @account_id, username, password1) ;
	COMMIT;
    
    select @account_id, email1;
END