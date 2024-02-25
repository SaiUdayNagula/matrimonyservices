CREATE TABLE `login_history` (
  `history_id` int NOT NULL AUTO_INCREMENT,
  `login_id` int DEFAULT NULL,
  `login_date` datetime DEFAULT NULL,
  `login_attempt_count` int DEFAULT NULL,
  `login_status` int DEFAULT NULL,
  `login_failure_reason` varchar(45) DEFAULT NULL,
  `email_otp` int DEFAULT NULL,
  `mobile_top` int DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `system_name` varchar(45) DEFAULT NULL,
  `user_agent` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `login_historycol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`history_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci