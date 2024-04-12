CREATE TABLE `profile_partner_prefernce` (
  `profile_id` int NOT NULL,
  `min_age` int DEFAULT NULL,
  `max_age` int DEFAULT NULL,
  `religion` int DEFAULT NULL,
  `max_education` int DEFAULT NULL,
  `occupation` int DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci