CREATE PROCEDURE `usp_profile_partner_pref_create` (
profile_id int, 
min_age int , 
max_age int, 
religion int, 
max_education int , 
occupation int , 
country varchar(45)
)
BEGIN
INSERT INTO `martimonyservices`.`profile_partner_prefernce`
(`profile_id`,
`min_age`,
`max_age`,
`religion`,
`max_education`,
`occupation`,
`country`)
VALUES
(
	profile_id, 
	min_age, 
	max_age, 
	religion, 
	max_education, 
	occupation, 
    country
);

END