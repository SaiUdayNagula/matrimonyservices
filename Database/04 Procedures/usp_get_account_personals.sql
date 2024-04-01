USE `martimonyservices`;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_get_account_personals`(
	accountid int
)
BEGIN
	IF EXISTS (SELECT * FROM account WHERE account_id = accountid ) THEN
		-- TODO: if there are no profiles send no profiles exist
        SELECT  first_name, 
				last_name, 
				middle_name, 
				gender, 
				birth_date, 
				marital_status, 
				religion,
				nationality, 
				caste, 
				height_inches, 
				height_cms, 
				weight, 
				weight_units 
        FROM profile_personal 
        WHERE account_id = accountid;
	ELSE
		SELECT 'Account doesnot Exist';
    
    END IF;

END