# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

def physics_no_chemistry
  execute(<<-SQL)
    SELECT DISTINCT
      yr
    FROM
      nobels
    WHERE
      (subject = 'Physics' AND yr NOT IN (
        SELECT
          yr
        FROM
          nobels
        WHERE
          subject = 'Chemistry'
      ))
  SQL
end
