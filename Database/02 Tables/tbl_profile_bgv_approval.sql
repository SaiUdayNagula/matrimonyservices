CREATE TABLE `profile_bgv_approval` (
  `profile_id` int NOT NULL,
  `verification_type` int DEFAULT NULL,
  `is_signed` int DEFAULT NULL,
  `signed_doc_location` varchar(150) DEFAULT NULL,
  `fee_agreed` double DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci