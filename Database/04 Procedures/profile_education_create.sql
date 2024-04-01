USE `martimonyservices`;
DROP procedure IF EXISTS `profile_education_create`;

DELIMITER $$
USE `martimonyservices`$$
CREATE PROCEDURE `profile_education_create` (
		profile_id 			int, 
		education_level 	int, 
		year_completed 		int, 
		institution_name 	varchar(100), 
		address_line1 		varchar(100), 
		city 				varchar(45), 
		state 				varchar(45), 
		country 			varchar(45), 
		zip 				varchar(45), 
		field_of_study 		int, 
		user_created 		varchar(45))
BEGIN

INSERT INTO profile_education (
		profile_id, 		
		education_level, 
		year_completed, 	
		institution_name,
		address_line1, 	
		city, 			
		state, 			
		country, 		
		zip, 			
		field_of_study, 	
		user_created 	
) VALUES (
		profile_id, 		
		education_level, 
		year_completed, 	
		institution_name,
		address_line1, 	
		city, 			
		state, 			
		country, 		
		zip, 			
		field_of_study, 	
		user_created 	);
END$$

DELIMITER ;

