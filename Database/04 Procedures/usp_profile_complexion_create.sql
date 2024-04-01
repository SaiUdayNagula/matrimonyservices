CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_complexion_create`(
	profileid int,
    name varchar(255), 
	description varchar(250), 
	status enum('Active','Inactive')
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_complexion(
			id ,
			name, 
			description, 
			status,
            created_at
		)
        VALUES (
			profileid,
            name,
            description,
            status,
            now()
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;

END