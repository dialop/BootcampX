SELECT id, name, email, cohort_id
FROM students
WHERE github IS NULL OR github = '';
ORDER BY cohort_id;z