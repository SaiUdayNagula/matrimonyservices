CREATE TABLE `profile_employment` (
  `profile_id` int NOT NULL,
  `institution_name` varchar(100) NOT NULL,
  `address_line1` varchar(100) DEFAULT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `zip` varchar(45) NOT NULL,
  `start_year` int DEFAULT NULL,
  `end_year` int DEFAULT NULL,
  `job_title` varchar(45) NOT NULL,
  `last_salary_drawn` varchar(45) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci