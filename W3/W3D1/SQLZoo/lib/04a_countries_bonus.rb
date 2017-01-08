# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  execute(<<-SQL)
    SELECT
      countries.name
    FROM
      countries
    WHERE
      countries.gdp > (
        SELECT
          MAX(c2.gdp)
        FROM
          countries c2
        WHERE
          c2.continent = 'Europe'
      );
  SQL
end

def largest_in_continent
  execute(<<-SQL)
    SELECT
      c1.continent,
      c1.name,
      c1.area
    FROM
      countries c1
    WHERE
      c1.area = (
        SELECT
          MAX(c2.area)
        FROM
           countries c2
        WHERE
          c1.continent = c2.continent
      );
  SQL
end

def large_neighbors
  execute(<<-SQL)
    SELECT
      c1.name,
      c1.continent
    FROM
      countries c1
    WHERE
      population > 3 * (
        SELECT
          MAX(c2.population)
        FROM
          countries c2
        WHERE
          c1.name != c2.name
            AND c1.continent = c2.continent
      )
  SQL
end
