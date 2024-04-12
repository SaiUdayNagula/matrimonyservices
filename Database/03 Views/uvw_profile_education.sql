CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_education` AS
    SELECT 
        `profile_education`.`profile_id` AS `profile_id`,
        `profile_education`.`education_level` AS `education_level`,
        `profile_education`.`year_completed` AS `year_completed`,
        `profile_education`.`institution_name` AS `institution_name`,
        `profile_education`.`address_line1` AS `address_line1`,
        `profile_education`.`city` AS `city`,
        `profile_education`.`state` AS `state`,
        `profile_education`.`country` AS `country`,
        `profile_education`.`zip` AS `zip`,
        `profile_education`.`field_of_study` AS `field_of_study`,
        `profile_education`.`date_created` AS `date_created`,
        `profile_education`.`date_modified` AS `date_modified`
    FROM
        `profile_education`