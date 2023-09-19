SELECT cohort.name as cohort_name, count(students.*) AS student_count 
FROM cohorts
JOIN students ON cohort.id = cohort_id
GROUP BY cohort_name
HAVING COUNT(*) >= 18
ORDER BY student_count;

