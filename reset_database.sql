drop table reef_activitychange;
drop table reef_advisor;
drop table reef_parent;
drop table reef_student;
drop table reef_transport_logs;
drop table reef_updaterequest;
truncate table student;
truncate table parent;
truncate table advisor;

/*
create table advisor(
	advisor_id int primary key auto_increment,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(30),
	password varchar(30),
	grade varchar(3),
	room_number varchar(10)
);

create table parent(
	parent_id int primary key auto_increment,
	first_name varchar(20),
	last_name varchar(20),
	email varchar(30),
	password varchar(30),
	address varchar(50),
	phone_number varchar(15)
);

create table student(
	student_id int primary key auto_increment,
	first_name varchar(20),
	last_name varchar(20),
	parent_id int,
	advisor_id int, 
	grade varchar(3),
	birthday date,
	activity_curr json,
	activity_base json,
	route_no int,

	FOREIGN KEY (parent_id)
	references parent(parent_id)
	on delete cascade,

	FOREIGN KEY (advisor_id)
	references advisor(advisor_id)
);
*/

insert into advisor(first_name, last_name, grade)
	select distinct advisor_first_name, advisor_last_name, grade
	from csv_data;

insert into parent(first_name, last_name, phone_number)
	select distinct parent_first_name, parent_last_name, parent_phone_number
	from csv_data;

insert into student(first_name, last_name, parent_id, advisor_id, grade)
	select csv_data.student_first_name, csv_data.student_last_name, parent_id, advisor_id, csv_data.grade
	from csv_data, parent, advisor
	where csv_data.parent_last_name = parent.last_name
	and csv_data.parent_first_name = parent.first_name
	and csv_data.parent_phone_number = parent.phone_number
	and csv_data.advisor_last_name = advisor.last_name
	and csv_data.advisor_first_name = advisor.first_name
	and csv_data.grade = advisor.grade
;
