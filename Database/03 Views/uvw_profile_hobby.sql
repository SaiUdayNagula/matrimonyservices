CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_hobby` AS
    SELECT 
        `profile_hobby`.`profile_id` AS `profile_id`,
        `profile_hobby`.`hobby_id` AS `hobby_id`,
        `profile_hobby`.`description` AS `description`,
        `profile_hobby`.`date_created` AS `date_created`,
        `profile_hobby`.`date_modified` AS `date_modified`
    FROM
        `profile_hobby`