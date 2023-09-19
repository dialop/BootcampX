SELECT student.name as student, avg(assignment_submission.duration) as average_assignment_duration, avg(assignments.duration) as average_estimated_duration 
FROM students
JOIN assignment_submission ON student_id = student.id
JOIN assignments on assignment.id = assignment_id
WHERE end_date
GROUP BY student
HAVING avg(assignment_submission.duration) < avg(assignment.duration)
ORDER BY average_assignment_duration;