USE `martimonyservices`;
DROP procedure IF EXISTS `usp_validate_email_otp`;

USE `martimonyservices`;
DROP procedure IF EXISTS `martimonyservices`.`usp_validate_email_otp`;
;

DELIMITER $$
USE `martimonyservices`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_validate_email_otp`(user_otp INT)
BEGIN
	-- validate email OTP 
	IF EXISTS( select  * from login_history where  email_otp = user_otp and email_otp_valid_end > now()) THEN
		SELECT 'Success' as result;
	ELSE
		SELECT 'Fail' as result;
	END IF;
END$$

DELIMITER ;
;

