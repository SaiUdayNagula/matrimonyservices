CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_hobby`(
	profileid int, 
	hobby_id int, 
	description varchar(100), 
	account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_hobby(
			profile_id,
			hobby_id, 
			description,
			date_created, 
			user_created
        )VALUES (
			profileid,
			hobby_id, 
			description,
			now(), 
			account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;

END