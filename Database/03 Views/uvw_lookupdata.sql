CREATE 
    ALGORITHM = UNDEFINED 
    SQL SECURITY DEFINER
VIEW `uvw_lookupdata` AS
    SELECT 
        `lkp_disability`.`id` AS `id`,
        `lkp_disability`.`name` AS `name`,
        `lkp_disability`.`description` AS `description`,
        'disability' AS `lkp_type`
    FROM
        `lkp_disability` 
    UNION ALL SELECT 
        `lkp_caste`.`id` AS `id`,
        `lkp_caste`.`name` AS `name`,
        `lkp_caste`.`description` AS `description`,
        'caste' AS `lkp_type`
    FROM
        `lkp_caste` 
    UNION ALL SELECT 
        `lkp_contact_purpose`.`id` AS `id`,
        `lkp_contact_purpose`.`name` AS `name`,
        `lkp_contact_purpose`.`description` AS `description`,
        'contact_purpose' AS `lkp_type`
    FROM
        `lkp_contact_purpose` 
    UNION ALL SELECT 
        `lkp_friend_type`.`id` AS `id`,
        `lkp_friend_type`.`name` AS `name`,
        `lkp_friend_type`.`description` AS `description`,
        'friend_type' AS `lkp_type`
    FROM
        `lkp_friend_type` 
    UNION ALL SELECT 
        `lkp_gender_at_birth`.`id` AS `id`,
        `lkp_gender_at_birth`.`name` AS `name`,
        `lkp_gender_at_birth`.`description` AS `description`,
        'gender_at_birth' AS `lkp_type`
    FROM
        `lkp_gender_at_birth` 
    UNION ALL SELECT 
        `lkp_marital_status`.`id` AS `id`,
        `lkp_marital_status`.`name` AS `name`,
        `lkp_marital_status`.`description` AS `description`,
        'marital_status' AS `lkp_type`
    FROM
        `lkp_marital_status` 
    UNION ALL SELECT 
        `lkp_phone_type`.`id` AS `id`,
        `lkp_phone_type`.`name` AS `name`,
        `lkp_phone_type`.`description` AS `description`,
        'phone_type' AS `lkp_type`
    FROM
        `lkp_phone_type` 
    UNION ALL SELECT 
        `lkp_profession`.`id` AS `id`,
        `lkp_profession`.`name` AS `name`,
        `lkp_profession`.`description` AS `description`,
        'profession' AS `lkp_type`
    FROM
        `lkp_profession` 
    UNION ALL SELECT 
        `lkp_religion`.`id` AS `id`,
        `lkp_religion`.`name` AS `name`,
        `lkp_religion`.`description` AS `description`,
        'religion' AS `lkp_type`
    FROM
        `lkp_religion` 
    UNION ALL SELECT 
        `lkp_sexual_orientation`.`id` AS `id`,
        `lkp_sexual_orientation`.`name` AS `name`,
        `lkp_sexual_orientation`.`description` AS `description`,
        'Sexual Orientation' AS `lkp_type`
    FROM
        `lkp_sexual_orientation` 
    UNION ALL SELECT 
        `lkp_profile_complexion`.`id` AS `id`,
        `lkp_profile_complexion`.`name` AS `name`,
        `lkp_profile_complexion`.`description` AS `description`,
        'complexion' AS `lkp_type`
    FROM
        `lkp_profile_complexion`