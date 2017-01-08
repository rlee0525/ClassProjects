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

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  execute(<<-SQL)
    SELECT
      movies.title
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON actors.id = castings.actor_id
    WHERE
      actors.name = 'Harrison Ford';
  SQL
end

def ford_supporting_films
  execute(<<-SQL)
    SELECT
      movies.title
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON actors.id = castings.actor_id
    WHERE
      (actors.name = 'Harrison Ford' AND castings.ord != 1);
  SQL
end

def films_and_stars_from_sixty_two
  execute(<<-SQL)
    SELECT
      movies.title,
      actors.name
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON actors.id = castings.actor_id
    WHERE
      (movies.yr = 1962 AND castings.ord = 1);
  SQL
end

def travoltas_busiest_years
  execute(<<-SQL)
    SELECT
      movies.yr,
      COUNT(*)
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON actors.id = castings.actor_id
    WHERE
      actors.name = 'John Travolta'
    GROUP BY
      movies.yr
    HAVING
      COUNT(*) >= 2;
  SQL
end

def andrews_films_and_leads
  execute(<<-SQL)
    SELECT
      DISTINCT movies.title,
      actors.name
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON actors.id = castings.actor_id
    WHERE
      movies.id IN (
        SELECT
          movies.id
        FROM
          movies
        JOIN
          castings ON castings.movie_id = movies.id
        JOIN
          actors ON actors.id = castings.actor_id
        WHERE
          actors.name = 'Julie Andrews'
      ) AND castings.ord = 1
    ORDER BY
      movies.title;
  SQL
end

def prolific_actors
  execute(<<-SQL)
    SELECT
      actors.name
    FROM
      actors
    JOIN
      castings ON castings.actor_id = actors.id
    WHERE
      castings.ord = 1
    GROUP BY
      actors.name
    HAVING
      COUNT(*) >= 15
    ORDER BY
      actors.name;
  SQL
end

def films_by_cast_size
  execute(<<-SQL)
    SELECT
      movies.title,
      COUNT(DISTINCT castings.actor_id) AS actor_count
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    WHERE
      movies.yr = 1978
    GROUP BY
      movies.id
    ORDER BY
      COUNT(*) DESC, movies.title ASC;
  SQL
end

def colleagues_of_garfunkel
  execute(<<-SQL)
    SELECT
      a1.name
    FROM (
        SELECT
          movies.*
        FROM
          movies
        JOIN
          castings ON castings.movie_id = movies.id
        JOIN
          actors ON actors.id = castings.actor_id
        WHERE
          actors.name = 'Art Garfunkel'
      ) AS m1
    JOIN (
        SELECT
          actors.*,
          castings.movie_id
        FROM
          actors
        JOIN
          castings ON castings.actor_id = actors.id
        WHERE
          actors.name != 'Art Garfunkel'
      ) AS a1 ON m1.id = a1.movie_id;
  SQL
end
