CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_bgv_create`(
	profileid int, 
	verification_type int, 
	status int, 
	start_date datetime, 
	completed_date datetime, 
	verificaiton_notes varchar(45), 
	admin_remarks varchar(45), 
	fee_paid double, 
	verification_completed_by varchar(45), 
	is_document_available tinyint,
    document_location varchar(200),
    account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_bgv (
			profile_id , 
			verification_type , 
			status , 
			start_date , 
			completed_date , 
			verificaiton_notes , 
			admin_remarks , 
			fee_paid , 
			verification_completed_by , 
			is_document_available ,
			document_location,
			date_created,
            user_created
        )
        VALUES (
			profileid , 
			verification_type , 
			status , 
			start_date , 
			completed_date , 
			verificaiton_notes , 
			admin_remarks , 
			fee_paid , 
			verification_completed_by , 
			is_document_available ,
			document_location,
			now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
END