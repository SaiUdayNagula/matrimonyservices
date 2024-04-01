CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_partner_create`(
	profileid int, 
	partner_id int, 
	share_with_others tinyint, 
	document_location varchar(20),
    account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_partner(
			profile_id, 
			partner_id, 
			share_with_others, 
			document_location,
            date_created,
            user_created
        )
        VALUES (
			profileid, 
			partner_id, 
			share_with_others, 
			document_location,
            now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
        
END