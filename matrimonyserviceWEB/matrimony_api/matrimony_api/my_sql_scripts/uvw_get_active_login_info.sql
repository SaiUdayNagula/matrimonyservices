CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `uvw_get_active_login_info` AS
    SELECT 
        `account`.`email` AS `email`,
        `login`.`login_id` AS `login_id`,
        `login`.`account_id` AS `account_id`,
        `login`.`user_name` AS `user_name`,
        `login`.`password` AS `password`,
        `login`.`is_active` AS `is_active`
    FROM
        (`login`
        JOIN `account` ON ((`account`.`account_id` = `login`.`login_id`)))