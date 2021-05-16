create table csv_data(
	student_last_name varchar(20),
	student_first_name varchar(20),
	grade varchar(5),
	advisor_last_quotes varchar(20),
	advisor_first_quotes varchar(20),
	advisor_last_name varchar(20),
	advisor_first_name varchar(20),
	parent_last_name varchar(20),
	parent_first_name varchar(20),
	parent_phone_number varchar(15)
);

load data local infile '~/WhaleWatchr/FullWhaleWatchrData.csv' into table csv_data
	fields terminated by ','
	lines terminated by '\r\n'
	ignore 1 lines;
