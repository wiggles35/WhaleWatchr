/* THIS IS THE SQL QUERIES THAT ARE RUN BY THE CRONJOB AT SUNDAY MIDNIGHT TO UPDATE THE DB WITH THE CURRENT WEEKS INFO */

UPDATE student, reef_activitychange 
    SET student.activity_curr = JSON_SET(student.activity_curr,  '$."0"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 2 AND reef_activitychange.student_id = student.student_id;

UPDATE student, reef_activitychange 
    SET student.activity_curr = JSON_SET(student.activity_curr,  '$."1"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 3 AND reef_activitychange.student_id = student.student_id;

UPDATE student, reef_activitychange 
    SET student.activity_curr = JSON_SET(student.activity_curr,  '$."2"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 4 AND reef_activitychange.student_id = student.student_id;

UPDATE student, reef_activitychange 
    SET student.activity_curr = JSON_SET(student.activity_curr,  '$."3"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 5 AND reef_activitychange.student_id = student.student_id;

UPDATE student, reef_activitychange 
    SET student.activity_curr = JSON_SET(student.activity_curr,  '$."4"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 6 AND reef_activitychange.student_id = student.student_id;


/* UPDATES TO activity_base */

UPDATE student, reef_activitychange 
    SET student.activity_base = JSON_SET(student.activity_base,  '$."0"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 2 AND reef_activitychange.student_id = student.student_id; 
   
UPDATE student, reef_activitychange 
    SET student.activity_base = JSON_SET(student.activity_base,  '$."1"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 3 AND reef_activitychange.student_id = student.student_id; 
   
UPDATE student, reef_activitychange 
    SET student.activity_base = JSON_SET(student.activity_base,  '$."2"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 4 AND reef_activitychange.student_id = student.student_id; 
   
UPDATE student, reef_activitychange 
    SET student.activity_base = JSON_SET(student.activity_base,  '$."3"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 5 AND reef_activitychange.student_id = student.student_id; 
   
UPDATE student, reef_activitychange 
    SET student.activity_base = JSON_SET(student.activity_base,  '$."4"', reef_activitychange.activity_type)  
    WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date BETWEEN CURDATE() and DATE_ADD(CURDATE(), INTERVAL 5 DAY) AND DAYOFWEEK(reef_activitychange.start_date) = 6 AND reef_activitychange.student_id = student.student_id; 
   