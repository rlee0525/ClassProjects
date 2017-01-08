# == Schema Information
#
# Table name: teachers
#
#  id          :integer      not null, primary key
#  dept_id     :integer
#  name        :string
#  phone       :integer
#  mobile      :string
#
# Table name: depts
#
#  id          :integer      not null, primary key
#  name        :string       not null

require_relative './sqlzoo.rb'

def null_dept
  execute(<<-SQL)
    SELECT
      teachers.name
    FROM
      teachers
    WHERE
      teachers.dept_id IS NULL;
  SQL
end

def all_teachers_join
  execute(<<-SQL)
    SELECT
      teachers.name,
      depts.name
    FROM
      teachers
    LEFT OUTER JOIN
      depts ON teachers.dept_id = depts.id;
  SQL
end

def all_depts_join
  execute(<<-SQL)
    SELECT
      teachers.name,
      depts.name
    FROM
      depts
    LEFT OUTER JOIN
      teachers ON depts.id = teachers.dept_id;
  SQL
end

def teachers_and_mobiles
  execute(<<-SQL)
    SELECT
      teachers.name,
      COALESCE(teachers.mobile, '07986 444 2266')
    FROM
      teachers;
  SQL
end

def teachers_and_depts
  execute(<<-SQL)
    SELECT
      teachers.name,
      COALESCE(depts.name, 'None')
    FROM
      teachers
    LEFT OUTER JOIN
      depts ON teachers.dept_id = depts.id;
  SQL
end

def num_teachers_and_mobiles
  execute(<<-SQL)
    SELECT
      COUNT(teachers.name),
      COUNT(teachers.mobile)
    FROM
      teachers;
  SQL
end

def dept_staff_counts
  execute(<<-SQL)
    SELECT
      depts.name,
      COUNT(teachers.id)
    FROM
      depts
    LEFT OUTER JOIN
      teachers ON depts.id = teachers.dept_id
    GROUP BY
      depts.name;
  SQL
end

def teachers_and_divisions
  execute(<<-SQL)
    SELECT
      teachers.name,
      CASE
        WHEN teachers.dept_id IN (1, 2) THEN 'Sci'
        ELSE 'Art'
      END AS dept_name
    FROM
      teachers;
  SQL
end

def teachers_and_divisions_two
  execute(<<-SQL)
    SELECT
      teachers.name,
      CASE
        WHEN teachers.dept_id IN (1, 2) THEN 'Sci'
        WHEN teachers.dept_id = 3 THEN 'Art'
        ELSE 'None'
      END AS dept_name
    FROM teachers;
  SQL
end
