USE `martimonyservices`;
CREATE  OR REPLACE VIEW `uvw_lookupdata` AS

SELECT id, name, description , 'disability' as lkp_type from lkp_disability
UNION ALL
SELECT id, name, description , 'caste' as lkp_type from lkp_caste
UNION ALL
SELECT id, name, description , 'contact_purpose' as lkp_type from lkp_contact_purpose
UNION ALL
SELECT id, name, description , 'friend_type' as lkp_type from lkp_friend_type
UNION ALL
SELECT id, name, description , 'gender_at_birth' as lkp_type from lkp_gender_at_birth
UNION ALL
SELECT id, name, description , 'marital_status' as lkp_type from lkp_marital_status
UNION ALL
SELECT id, name, description , 'phone_type' as lkp_type from lkp_phone_type
UNION ALL
SELECT id, name, description , 'profession' as lkp_type from lkp_profession
UNION ALL
SELECT id, name, description , 'religion' as lkp_type from lkp_religion
UNION ALL
SELECT id, name, description , 'Sexual Orientation' as lkp_type from lkp_sexual_orientation;
