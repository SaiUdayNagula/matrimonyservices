CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_address` AS
    SELECT 
        `profile_address`.`profile_id` AS `profile_id`,
        `profile_address`.`address_type` AS `address_type`,
        `profile_address`.`address_line1` AS `address_line1`,
        `profile_address`.`address_line2` AS `address_line2`,
        `profile_address`.`city` AS `city`,
        `profile_address`.`state` AS `state`,
        `profile_address`.`country` AS `country`,
        `profile_address`.`zip` AS `zip`,
        `profile_address`.`phone` AS `phone`,
        `profile_address`.`landmark1` AS `landmark1`,
        `profile_address`.`landmark2` AS `landmark2`,
        `profile_address`.`date_created` AS `date_created`,
        `profile_address`.`user_created` AS `user_created`,
        `profile_address`.`date_modified` AS `date_modified`,
        `profile_address`.`user_modified` AS `user_modified`
    FROM
        `profile_address`