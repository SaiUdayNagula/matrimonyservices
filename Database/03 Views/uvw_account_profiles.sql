CREATE 
    ALGORITHM = UNDEFINED 

    SQL SECURITY DEFINER
VIEW `uvw_account_profiles` AS
    SELECT 
        `profile_personal`.`account_id` AS `account_id`,
        `profile_personal`.`profile_id` AS `profile_id`,
        `profile_personal`.`first_name` AS `first_name`,
        `profile_personal`.`last_name` AS `last_name`,
        `profile_personal`.`gender` AS `gender`,
        `profile_personal`.`birth_date` AS `birth_date`,
        ROUND(((TO_DAYS(NOW()) - TO_DAYS(`profile_personal`.`birth_date`)) / 365),
                0) AS `Age`,
        `profile_personal`.`height_inches` AS `height_inches`,
        `profile_personal`.`caste` AS `caste`,
        `profile_personal`.`religion` AS `religion`,
        `pa`.`city` AS `city`,
        `pa`.`state` AS `state`,
        `pa`.`country` AS `country`
    FROM
        (`profile_personal`
        JOIN (SELECT 
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
        WHERE
            (`profile_address`.`address_type` = 1)
        LIMIT 1) `pa` ON ((`profile_personal`.`profile_id` = `pa`.`profile_id`)))