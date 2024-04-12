CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_family_property` AS
    SELECT 
        `profile_family_property`.`profile_id` AS `profile_id`,
        `profile_family_property`.`property_type` AS `property_type`,
        `profile_family_property`.`ownership_type` AS `ownership_type`,
        `profile_family_property`.`address_line1` AS `address_line1`,
        `profile_family_property`.`city` AS `city`,
        `profile_family_property`.`state` AS `state`,
        `profile_family_property`.`country` AS `country`,
        `profile_family_property`.`zip` AS `zip`,
        `profile_family_property`.`landmark1` AS `landmark1`,
        `profile_family_property`.`landmark2` AS `landmark2`,
        `profile_family_property`.`date_created` AS `date_created`,
        `profile_family_property`.`date_modified` AS `date_modified`
    FROM
        `profile_family_property`