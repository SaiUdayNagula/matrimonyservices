CREATE  PROCEDURE `usp_get_account_metrics`(account_id int)
BEGIN
	DECLARE 
		profilecount, profilesreviewed, shortlisted, viewedyourprofiles, savedfordiscusseion, recommendations, favourties int default 0;
    
    select profilecount = COUNT(*) FROM uvw_account_profiles
    WHERE account_id = 10;
    
    
    select profilecount, profilesreviewed, shortlisted, viewedyourprofiles, savedfordiscusseion, recommendations, favourties;    

END