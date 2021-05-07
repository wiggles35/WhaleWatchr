/* THIS IS THE SQL QUERIES THAT ARE RUN BY THE CRONJOB AT MIDNIGHT TO UPDATE THE DB WITH THE CURRENT DAYS INFO */
UPDATE student, reef_activitychange SET student.activity_curr = JSON_SET(student.activity_curr,  CONCAT(CONCAT('$."', CAST((DAYOFWEEK(CURDATE())-2) AS CHAR)), '"'), reef_activitychange.activity_type) WHERE reef_activitychange.start_date = CURRENT_DATE() AND reef_activitychange.student_id = student.student_id;

UPDATE student, reef_activitychange SET student.activity_base = JSON_SET(student.activity_base,  CONCAT(CONCAT('$."', CAST((DAYOFWEEK(CURDATE())-2) AS CHAR)), '"'), reef_activitychange.activity_type) WHERE reef_activitychange.permanent = True AND reef_activitychange.start_date = CURRENT_DATE() AND reef_activitychange.student_id = student.student_id;

