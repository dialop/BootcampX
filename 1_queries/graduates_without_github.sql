-- graduates_without_github.sql
SELECT name, email, phone
FROM students
WHERE github IS NULL
AND end_date IS NOT NULL;