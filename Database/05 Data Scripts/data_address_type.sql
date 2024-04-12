
insert into lkp_address_type (`name`,
`description`,
`status`,
`created_at`,
`updated_at`)
values('Present Address','Also known as current address, this is where the individual currently resides. It might differ from the permanent address, especially if the person has moved recently',
'active',now(),now());

insert into lkp_address_type(`name`,
`description`,
`status`,
`created_at`,
`updated_at`)
values('Permanent Address','
This is the address where the individual permanently resides or considers their primary place of residence. It usually doesn''t change frequently.
',
'active',now());

insert into lkp_address_type(`name`,
`description`,
`status`,
`created_at`,
`updated_at`)
values('Temporary Address','Sometimes individuals may have a temporary address, such as when they are staying at a different location for a short period of time. 
This could be relevant for students living in hostels or individuals temporarily relocating for work.
',
'active',now());

insert into lkp_address_type(`name`,
`description`,
`status`,
`created_at`,
`updated_at`)
values('Work Address',' If applicable, the address of the individual''s 
workplace can be included. This is especially useful if the biodata is being used for employment purposes
',
'active',now());

insert into lkp_address_type(`name`,
`description`,
`status`,
`created_at`,
`updated_at`)
values('Mailing Address','This is the address where the individual wants to receive mail. It might be different from the permanent or present address
',
'active',now());