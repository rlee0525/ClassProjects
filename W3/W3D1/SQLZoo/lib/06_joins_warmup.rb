# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_query
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    WHERE
      title = 'Doctor No'
  SQL
end

def films_from_sixty_two
  execute(<<-SQL)
    SELECT
      id,
      title
    FROM
      movies
    WHERE
      yr = 1962;
  SQL
end

def year_of_kane
  execute(<<-SQL)
    SELECT
      yr
    FROM
      movies
    WHERE
      title = 'Citizen Kane';
  SQL
end

def trek_films
  execute(<<-SQL)
    SELECT
      id,
      title,
      yr
    FROM
      movies
    WHERE
      title LIKE '%Star Trek%'
    ORDER BY
      yr;
  SQL
end

def films_by_id
  execute(<<-SQL)
    SELECT
      title
    FROM
      movies
    WHERE
      id IN (1119, 1595, 1768);
  SQL
end

def glenn_close_id
  execute(<<-SQL)
    SELECT
      id
    FROM
      actors
    WHERE
      name = 'Glenn Close';
  SQL
end

def casablanca_id
  execute(<<-SQL)
    SELECT
      id
    FROM
      movies
    WHERE
      title = 'Casablanca';
  SQL
end

def casablanca_cast
  execute(<<-SQL)
    SELECT
      actors.name
    FROM
      actors
    JOIN
      castings ON castings.actor_id = actors.id
    WHERE
      castings.movie_id = 27
  SQL
end

def alien_cast
  execute(<<-SQL)
    SELECT
      actors.name
    FROM
      actors
    JOIN
      castings ON castings.actor_id = actors.id
    JOIN
      movies ON movies.id = castings.movie_id
    WHERE
      movies.title = 'Alien';
  SQL
end
