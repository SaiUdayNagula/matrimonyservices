CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_family_reference` AS
    SELECT 
        `profile_family_reference`.`profile_id` AS `profile_id`,
        `profile_family_reference`.`reference_type` AS `reference_type`,
        `profile_family_reference`.`first_name` AS `first_name`,
        `profile_family_reference`.`last_name` AS `last_name`,
        `profile_family_reference`.`middle_name` AS `middle_name`,
        `profile_family_reference`.`alias` AS `alias`,
        `profile_family_reference`.`gender` AS `gender`,
        `profile_family_reference`.`date_of_birth` AS `date_of_birth`,
        `profile_family_reference`.`religion` AS `religion`,
        `profile_family_reference`.`nationality` AS `nationality`,
        `profile_family_reference`.`caste` AS `caste`,
        `profile_family_reference`.`marital_status` AS `marital_status`,
        `profile_family_reference`.`highest_education` AS `highest_education`,
        `profile_family_reference`.`disability` AS `disability`,
        `profile_family_reference`.`address_line1` AS `address_line1`,
        `profile_family_reference`.`city` AS `city`,
        `profile_family_reference`.`state` AS `state`,
        `profile_family_reference`.`country` AS `country`,
        `profile_family_reference`.`zip` AS `zip`,
        `profile_family_reference`.`primary_phone` AS `primary_phone`,
        `profile_family_reference`.`secondary_phone` AS `secondary_phone`,
        `profile_family_reference`.`can_communicate` AS `can_communicate`,
        `profile_family_reference`.`email` AS `email`,
        `profile_family_reference`.`linkedin` AS `linkedin`,
        `profile_family_reference`.`instagram` AS `instagram`,
        `profile_family_reference`.`facebook` AS `facebook`,
        `profile_family_reference`.`whatsapp` AS `whatsapp`,
        `profile_family_reference`.`employment_status` AS `employment_status`,
        `profile_family_reference`.`emp_company_name` AS `emp_company_name`,
        `profile_family_reference`.`emp_city` AS `emp_city`,
        `profile_family_reference`.`emp_state` AS `emp_state`,
        `profile_family_reference`.`emp_country` AS `emp_country`,
        `profile_family_reference`.`emp_zip` AS `emp_zip`,
        `profile_family_reference`.`date_created` AS `date_created`,
        `profile_family_reference`.`date_modified` AS `date_modified`
    FROM
        `profile_family_reference`