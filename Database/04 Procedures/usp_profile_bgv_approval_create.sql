CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_bgv_approval_create`(
	profileid int,
	verification_type int,
	is_signed int, 
	signed_doc_location varchar(150), 
	fee_agreed double, 
	account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_bgv_approval (
			profile_id ,
			verification_type ,
			is_signed , 
			signed_doc_location , 
			fee_agreed , 
			date_created,
            user_created
		)
		VALUES (
			profileid ,
			verification_type ,
			is_signed , 
			signed_doc_location , 
			fee_agreed , 
			now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
            
    
END