SELECT day, COUNT(*) as total_assignment
FROM assignments
GROUP BY day
HAVING COUNT(*) >= 10
ORDER BY day;