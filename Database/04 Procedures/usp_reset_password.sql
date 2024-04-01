USE `martimonyservices`;
DROP procedure IF EXISTS `usp_reset_password`;

USE `martimonyservices`;
DROP procedure IF EXISTS `martimonyservices`.`usp_reset_password`;
;

DELIMITER $$
USE `martimonyservices`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_reset_password`(login_id INT, pwd varchar(45) )
BEGIN
	-- update password for the provided login
	IF EXISTS(SELECT * FROM login WHERE login_id = login_id) THEN
		UPDATE login
        SET password = pwd
        WHERE login_id = login_id;
	
		SELECT 'Success' as result;
	ELSE
		SELECT 'Fail' as result;    
    END IF;

END$$

DELIMITER ;
;

