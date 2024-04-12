USE `martimonyservices`;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_get_account_personal_data`(
	accountid int
)
BEGIN
	IF EXISTS (SELECT * FROM account WHERE account_id = accountid ) THEN
		-- TODO: if there are no profiles send no profiles exist
        SELECT *
        FROM uvw_account_profiles
        WHERE account_id = accountid;
	ELSE
		SELECT 'Account doesnot Exist';
    
    END IF;

END