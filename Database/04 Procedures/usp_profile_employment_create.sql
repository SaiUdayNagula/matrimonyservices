CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_employment_create`(
	profileid int,
	institution_name varchar(100), 
	address_line1 varchar(100), 
	city varchar(45), 
	state varchar(45), 
	country varchar(45), 
	zip varchar(45), 
	start_year int, 
	end_year int, 
	job_title varchar(45), 
	last_salary_drawn varchar(45), 
	account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_employment (
			profile_id ,
			institution_name , 
			address_line1 , 
			city , 
			state, 
			country , 
			zip , 
			start_year , 
			end_year , 
			job_title , 
			last_salary_drawn, 
			date_created,
            user_created)
		VALUES
			(profileid ,
			institution_name , 
			address_line1 , 
			city , 
			state, 
			country , 
			zip , 
			start_year , 
			end_year , 
			job_title , 
			last_salary_drawn, 
			now(),
            account_id);
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;

END