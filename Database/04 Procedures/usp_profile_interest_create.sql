CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_interest_create`(
	profileid int, 
	interest_id int, 
	description varchar(100),
    account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_interest (
			profile_id , 
			interest_id, 
			description,
            date_created,
            user_created
        )
        VALUES (
			profileid , 
			interest_id, 
			description,
            now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
END