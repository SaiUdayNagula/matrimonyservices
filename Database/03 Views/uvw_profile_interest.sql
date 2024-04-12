CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_interest` AS
    SELECT 
        `profile_interest`.`profile_id` AS `profile_id`,
        `profile_interest`.`interest_id` AS `interest_id`,
        `profile_interest`.`description` AS `description`,
        `profile_interest`.`date_created` AS `date_created`,
        `profile_interest`.`date_modified` AS `date_modified`
    FROM
        `profile_interest`