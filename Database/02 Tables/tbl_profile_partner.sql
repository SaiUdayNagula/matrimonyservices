CREATE TABLE `profile_partner` (
  `profile_id` int NOT NULL,
  `partner_id` int DEFAULT NULL,
  `share_with_others` tinyint DEFAULT NULL,
  `document_location` varchar(200) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci