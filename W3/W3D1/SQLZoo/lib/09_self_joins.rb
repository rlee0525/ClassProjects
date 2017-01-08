# == Schema Information
#
# Table name: stops
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: routes
#
#  num         :string       not null, primary key
#  company     :string       not null, primary key
#  pos         :integer      not null, primary key
#  stop_id     :integer

require_relative './sqlzoo.rb'

def num_stops
  execute(<<-SQL)
    SELECT
      COUNT(DISTINCT(routes.stop_id))
    FROM
      routes;
  SQL
end

def craiglockhart_id
  execute(<<-SQL)
    SELECT
      stops.id
    FROM
      stops
    WHERE
      stops.name = 'Craiglockhart';
  SQL
end

def lrt_stops
  execute(<<-SQL)
    SELECT
      routes.stop_id,
      stops.name
    FROM
      routes
    JOIN
      stops ON routes.stop_id = stops.id
    WHERE
      routes.company = 'LRT'
      AND routes.num = '4';
  SQL
end

def connecting_routes
  execute(<<-SQL)
    SELECT
      company,
      num,
      COUNT(*)
    FROM
      routes
    WHERE
      stop_id = 149 OR stop_id = 53
    GROUP BY
      company, num
    HAVING
      COUNT(*) = 2
  SQL
end

def cl_to_lr
  execute(<<-SQL)
    SELECT
      a.company,
      a.num,
      a.stop_id,
      b.stop_id
    FROM
      routes a
    JOIN
      routes b ON a.company = b.company AND a.num = b.num
    WHERE
      a.stop_id = 53 AND b.stop_id = 149
  SQL
end

def cl_to_lr_by_name
  execute(<<-SQL)
    SELECT
      a.company,
      a.num,
      stopa.name,
      stopb.name
    FROM
      routes a
    JOIN
      routes b ON a.company = b.company AND a.num = b.num
    JOIN
      stops stopa ON a.stop_id = stopa.id
    JOIN
      stops stopb ON b.stop_id = stopb.id
    WHERE
      stopa.name = 'Craiglockhart' AND stopb.name = 'London Road'
  SQL
end

def haymarket_and_leith
  execute(<<-SQL)
    SELECT DISTINCT
      start_routes.company,
      start_routes.num
    FROM
      routes AS start_routes
    JOIN
      routes AS end_routes ON start_routes.company = end_routes.company
        AND start_routes.num = end_routes.num
    WHERE
      start_routes.stop_id = 115 AND end_routes.stop_id = 137
  SQL
end

def craiglockhart_and_tollcross
  execute(<<-SQL)
    SELECT
      start_routes.company,
      start_routes.num
    FROM
      routes AS start_routes
    JOIN
      routes AS end_routes ON start_routes.company = end_routes.company
        AND start_routes.num = end_routes.num
    WHERE
      start_routes.stop_id = (
        SELECT
          id
        FROM
          stops
        WHERE
          stops.name = 'Craiglockhart'
      ) AND end_routes.stop_id = (
        SELECT
          id
        FROM
          stops
        WHERE
          stops.name = 'Tollcross'
      )
  SQL
end

def start_at_craiglockhart
  execute(<<-SQL)
    SELECT
      end_route_stops.name,
      end_routes.company,
      end_routes.num
    FROM
      routes AS start_routes
    JOIN
      routes AS end_routes ON start_routes.num = end_routes.num
        AND start_routes.company = end_routes.company
    JOIN
      stops AS end_route_stops ON end_routes.stop_id = end_route_stops.id
    WHERE
      start_routes.stop_id = (
        SELECT
          stops.id
        FROM
          stops
        WHERE
          stops.name = 'Craiglockhart'
      )
  SQL
end

def craiglockhart_to_sighthill
  execute(<<-SQL)
    SELECT DISTINCT
      start.num,
      start.company,
      transfer.name,
      finish.num,
      finish.company
    FROM
      routes start
    JOIN
      routes AS to_transfer ON start.company = to_transfer.company
        AND start.num = to_transfer.num
    JOIN
      stops AS transfer ON to_transfer.stop_id = transfer.id
    JOIN
      routes AS from_transfer ON transfer.id = from_transfer.stop_id
    JOIN
      routes AS finish ON from_transfer.company = finish.company
        AND from_transfer.num = finish.num
    WHERE
      start.stop_id = (
        SELECT
          id
        FROM
          stops
        WHERE
          name = 'Craiglockhart'
      ) AND finish.stop_id = (
        SELECT
          id
        FROM
          stops
        WHERE
          name = 'Sighthill'
      )
  SQL
end
