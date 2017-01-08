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

def select_population_of_germany
  execute(<<-SQL)
    SELECT
      population
    FROM
      countries
    WHERE
      name = 'Germany';
  SQL
end

def per_capita_gdp
  execute(<<-SQL)
    SELECT
      name,
      gdp/population AS gdp
    FROM
      countries
    WHERE
      area > 5000000;
  SQL
end

def small_and_wealthy
  execute(<<-SQL)
    SELECT
      name,
      continent
    FROM
      countries
    WHERE
      area < 2000 AND gdp > 5000000000;
  SQL
end

def scandinavia
  execute(<<-SQL)
    SELECT
      name,
      population
    FROM
      countries
    WHERE
      name IN ('Denmark', 'Finland', 'Norway', 'Sweden');
  SQL
end

def starts_with_g
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      name LIKE 'G%';
  SQL
end

def just_the_right_size
  execute(<<-SQL)
    SELECT
      name,
      area/1000
    FROM
      countries
    WHERE
      area BETWEEN 200000 AND 250000;
  SQL
end
