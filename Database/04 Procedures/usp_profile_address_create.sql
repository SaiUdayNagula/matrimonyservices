USE `martimonyservices`;
DROP procedure IF EXISTS `usp_profile_address_create`;

USE `martimonyservices`;
DROP procedure IF EXISTS `martimonyservices`.`usp_profile_address_create`;
;

DELIMITER $$
USE `martimonyservices`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_address_create2`(
	profileid int,
    address_type int, 
	address_line1 varchar(100), 
	address_line2 varchar(100), 
	city varchar(100), 
	state varchar(100), 
	country varchar(100), 
	zip varchar(100), 
	phone varchar(100), 
	landmark1 varchar(100),
    landmark2 varchar(100),
    account_id int)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_address (
			profile_id,
            address_type,
            address_line1, 
			address_line2, 
			city, 
			state, 
			country, 
			zip, 
			phone, 
			landmark1,
			landmark2,
            date_created,
            user_created
        )
        VALUES (
			profileid,
            address_type,
            address_line1, 
			address_line2, 
			city, 
			state, 
			country, 
			zip, 
			phone, 
			landmark1,
			landmark2,
            now(),
            account_id
		);
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
END

DELIMITER ;
;

