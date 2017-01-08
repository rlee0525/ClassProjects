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

def example_select
  execute(<<-SQL)
    SELECT
      population
    FROM
      countries
    WHERE
      name = 'France'
  SQL
end

def large_countries
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      population > 200000000;
  SQL
end

def high_population_gdps
  execute(<<-SQL)
    SELECT
      name,
      gdp / population AS GDP
    FROM
      countries
    WHERE
      population >= 200000000;
  SQL
end

def population_in_millions
  execute(<<-SQL)
    SELECT
      name,
      population/1000000 AS population_millions
    FROM
      countries
    WHERE
      continent = 'South America';
  SQL
end

def name_and_population
  execute(<<-SQL)
    SELECT
      name,
      population
    FROM
      countries
    WHERE
      name IN ('France', 'Germany', 'Italy');
  SQL
end

def united_we_stand
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      name LIKE '%United%';
  SQL
end
