CREATE TABLE `profile_photo` (
  `profile_id` int NOT NULL,
  `type` int NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `caption` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci