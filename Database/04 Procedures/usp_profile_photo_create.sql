CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_photo_create`(
	profileid int, 
	type int,
	description varchar(100), 
	caption varchar(100), 
	url varchar(100),
    account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_photo (
			profile_id, 
			type,
			description, 
			caption, 
			url,
			date_created,
            user_created
        )
        VALUES (
			profileid, 
			type,
			description, 
			caption, 
			url,
			now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;

END