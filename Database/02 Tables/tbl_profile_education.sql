CREATE TABLE `profile_education` (
  `profile_id` int NOT NULL,
  `education_level` int NOT NULL,
  `year_completed` int NOT NULL,
  `institution_name` varchar(100) NOT NULL,
  `address_line1` varchar(100) DEFAULT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `zip` varchar(45) NOT NULL,
  `field_of_study` int NOT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci