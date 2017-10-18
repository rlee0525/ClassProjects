# Write a query to to get the list of users who took a 
# training lesson more than once in the same day, 
# grouped by user and training lesson, each ordered 
# from the most recent lesson date to oldest date. 

def sql_1
  execute(<<-SQL)
    SELECT
      u.user_id,
      username,
      training_id,
      training_date,
      COUNT(user_training_id) as count
    FROM
      users u JOIN training_details t on u.user_id == t.user_id
    GROUP BY
      u.user_id,
      training_id,
      training_date
    HAVING
      COUNT(user_training_id) > 1
    ORDER BY
      training_date DESC
  SQL
end

