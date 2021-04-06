drop table student;
drop table advisor;
drop table parent;

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
	parent_id int FOREIGN KEY REFERENCES parent(parent_id),
	advisor_id int FOREIGN KEY REFERENCES advisor(advisor_id), 
	grade varchar(3),
	birthday date,
	activity_id int,
	route_no int
);

insert into advisor(first_name, last_name, grade)
	select advisor_first_name, advisor_last_name, grade
	from csv_data;

insert into parent(first_name, last_name, phone_number)
	select parent_first_name, parent_last_name, parent_phone_number
	from csv_data;

insert into student(first_name, last_name, parent_id, advisor_id, grade)
	select csv_data.first_name, csv_data.last_name, parent_id, advisor_id, csv_data.grade
	from csv_data, parent, advisor
	where csv_data.parent_last_name = parent.last_name
	and csv_data.parent_first_name = parent.first_name
	and csv_data.parent_phone_number = parent.phone_number
	and csv_data.advisor_last_name = advisor.last_name
	and csv_data.advisor_first_name = advisor.first_name
	and csv_data.grade = advisor.grade
;