USE `martimonyservices`;
DROP procedure IF EXISTS `usp_validate_login`;

USE `martimonyservices`;
DROP procedure IF EXISTS `martimonyservices`.`usp_validate_login`;
;

DELIMITER $$
USE `martimonyservices`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_validate_login`(
		uname varchar(45), 
        pwd varchar(45),
        ip varchar(20), 
		sysname varchar(45), 
        usragent varchar(45), 
        location varchar(45))
BEGIN
	DECLARE id_login INT;
	
    -- Check if the username and password match 
	IF EXISTS (
		SELECT * FROM uvw_get_active_login_info 
        WHERE (user_name=uname OR email = uname ) AND 
				BINARY password = pwd)  THEN
		-- Generate email OTP 
		-- SET @OTP = cast(RAND()*100000 as char(5));
        SET @email_otp = FLOOR(1000 + RAND() * 9000);
		SET @start_date = NOW();    
        -- Get Login ID
        SELECT login_id INTO id_login FROM login WHERE user_name=uname AND  CAST(password  as BINARY) = pwd;


        -- Insert into login_history table
        INSERT INTO login_history(
				login_name,
                login_date, 
                login_status, 
                email_otp, 
                ip_address,
				system_name,
                user_agent,
                location,
                login_id_on_success,
                email_otp_valid_start,
                email_otp_valid_end)
		VALUES(
			uname,
            NOW(), 
            1,
            @email_otp,
            ip, 
			sysname, 
            usragent,
            location,
            id_login,
            @start_date ,
            DATE_ADD(@start_date, INTERVAL 2 MINUTE));            
        -- Return the OTP
        SELECT @email_otp AS otp;
    ELSE 
		INSERT INTO login_history(
			login_name,
			login_date, 
			login_status, 
			email_otp, 
			ip_address,
			system_name,
			user_agent,
			location)
		VALUES(
			uname,
            NOW(), 
            0,
            -1,
            ip, 
			sysname, 
            usragent,
            location);
		-- Return -1 if the login credentials are invalid
        SELECT -1 AS otp;
    END IF;
END$$

DELIMITER ;
;

