CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_profile_family_property_create`(
	profileid int ,
	property_type int ,
	ownership_type int ,
	address_line1 varchar(50), 
	city varchar(45) ,
	state varchar(45) ,
	country varchar(45), 
	zip varchar(45) ,
	landmark1 varchar(45) ,
	landmark2 varchar(45),
    account_id int
)
BEGIN
	IF EXISTS(SELECT * FROM profile_personal WHERE profile_id = profileid) THEN
		INSERT INTO profile_family_property (
			profile_id  ,
			property_type  ,
			ownership_type  ,
			address_line1 , 
			city  ,
			state  ,
			country , 
			zip  ,
			landmark1 ,
			landmark2,
            date_created,
            user_created
        )
        VALUES (
			profileid,
			property_type,
			ownership_type,
			address_line1, 
			city,
			state,
			country, 
			zip,
			landmark1,
			landmark2,
            now(),
            account_id
        );
	ELSE
		SELECT 'Profile doesnot exist';
	END IF;
END