SELECT cohort.name as cohort, count(assignments_submissions.*) as total_submissions
FROM assignments_submissions
JOIN
JOIN cohorts ON cohorts.id = cohort_id
JOIN cohort ON cohort.id = cohort_id
GROUP BY cohort.name
ORDER BY total_submissions DESC;