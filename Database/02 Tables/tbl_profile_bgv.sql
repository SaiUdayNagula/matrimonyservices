CREATE TABLE `profile_bgv` (
  `profile_id` int NOT NULL,
  `verification_type` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `start-date` datetime DEFAULT NULL,
  `completed_date` datetime DEFAULT NULL,
  `verificaiton_notes` varchar(45) DEFAULT NULL,
  `admin_remarks` varchar(45) DEFAULT NULL,
  `fee_paid` double DEFAULT NULL,
  `verification_completed_by` varchar(45) DEFAULT NULL,
  `is_document_available` tinyint DEFAULT NULL,
  `document_location` varchar(200) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_created` varchar(45) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci