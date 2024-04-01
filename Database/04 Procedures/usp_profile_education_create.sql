CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_education_create`(
	profileid int, 
	education_level int ,
	year_completed int ,
	institution_name varchar(100), 
	address_line1 varchar(100), 
	city varchar(45), 
	state varchar(45), 
	country varchar(45), 
	zip varchar(45), 
	field_of_study int, 
	account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_education (
			profile_id, 
			education_level,
			year_completed,
			institution_name , 
			address_line1, 
			city, 
			state, 
			country, 
			zip, 
			field_of_study,
            date_created,
            user_created
        )
        VALUES(
			profileid, 
			education_level,
			year_completed,
			institution_name , 
			address_line1, 
			city, 
			state, 
			country, 
			zip, 
			field_of_study,
            now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
END