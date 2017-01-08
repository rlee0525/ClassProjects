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

def example_sum
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
  SQL
end

def continents
  execute(<<-SQL)
    SELECT
      DISTINCT(continent)
    FROM
      countries;
  SQL
end

def africa_gdp
  execute(<<-SQL)
    SELECT
      SUM(gdp)
    FROM
      countries
    WHERE
      continent = 'Africa';
  SQL
end

def area_count
  execute(<<-SQL)
    SELECT
      COUNT(*)
    FROM
      countries
    WHERE
      area > 1000000;
  SQL
end

def group_population
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
    WHERE
      name IN ('France', 'Germany', 'Spain');
  SQL
end

def country_counts
  execute(<<-SQL)
    SELECT
      continent,
      COUNT(*)
    FROM
      countries
    GROUP BY
      continent;
  SQL
end

def populous_country_counts
  execute(<<-SQL)
    SELECT
      continent,
      COUNT(*)
    FROM
      countries
    WHERE
      population >= 10000000
    GROUP BY
      continent;
  SQL
end

def populous_continents
  execute(<<-SQL)
    SELECT
      continent
    FROM
      countries
    GROUP BY
      continent
    HAVING
      SUM(population) > 100000000;
  SQL
end
