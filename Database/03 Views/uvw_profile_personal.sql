CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_profile_personal` AS
    SELECT 
        `profile_personal`.`profile_id` AS `profile_id`,
        `profile_personal`.`account_id` AS `account_id`,
        `profile_personal`.`first_name` AS `first_name`,
        `profile_personal`.`last_name` AS `last_name`,
        `profile_personal`.`middle_name` AS `middle_name`,
        `profile_personal`.`prefix` AS `prefix`,
        `profile_personal`.`suffix` AS `suffix`,
        `profile_personal`.`gender` AS `gender`,
        `profile_personal`.`birth_date` AS `birth_date`,
        `profile_personal`.`phone_mobile` AS `phone_mobile`,
        `profile_personal`.`phone_home` AS `phone_home`,
        `profile_personal`.`phone_emergency` AS `phone_emergency`,
        `profile_personal`.`email_id` AS `email_id`,
        `profile_personal`.`marital_status` AS `marital_status`,
        `profile_personal`.`religion` AS `religion`,
        `profile_personal`.`nationality` AS `nationality`,
        `profile_personal`.`caste` AS `caste`,
        `profile_personal`.`height_inches` AS `height_inches`,
        `profile_personal`.`height_cms` AS `height_cms`,
        `profile_personal`.`weight` AS `weight`,
        `profile_personal`.`weight_units` AS `weight_units`,
        `profile_personal`.`complexion` AS `complexion`,
        `profile_personal`.`linkedin` AS `linkedin`,
        `profile_personal`.`facebook` AS `facebook`,
        `profile_personal`.`instagram` AS `instagram`,
        `profile_personal`.`whatsapp_number` AS `whatsapp_number`,
        `profile_personal`.`profession` AS `profession`,
        `profile_personal`.`disability` AS `disability`,
        `profile_personal`.`created_date` AS `created_date`,
        `profile_personal`.`modified_date` AS `modified_date`
    FROM
        `profile_personal`
    WHERE
        (`profile_personal`.`is_active` = 1)