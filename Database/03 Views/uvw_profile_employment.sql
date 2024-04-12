CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_employment` AS
    SELECT 
        `profile_employment`.`profile_id` AS `profile_id`,
        `profile_employment`.`institution_name` AS `institution_name`,
        `profile_employment`.`address_line1` AS `address_line1`,
        `profile_employment`.`city` AS `city`,
        `profile_employment`.`state` AS `state`,
        `profile_employment`.`country` AS `country`,
        `profile_employment`.`zip` AS `zip`,
        `profile_employment`.`start_year` AS `start_year`,
        `profile_employment`.`end_year` AS `end_year`,
        `profile_employment`.`job_title` AS `job_title`,
        `profile_employment`.`last_salary_drawn` AS `last_salary_drawn`,
        `profile_employment`.`date_created` AS `date_created`,
        `profile_employment`.`date_modified` AS `date_modified`
    FROM
        `profile_employment`