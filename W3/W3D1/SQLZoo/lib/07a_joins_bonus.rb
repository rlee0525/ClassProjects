# == Schema Information
#
# Table name: albums
#
#  asin        :string       not null, primary key
#  title       :string
#  artist      :string
#  price       :float
#  rdate       :date
#  label       :string
#  rank        :integer
#
# Table name: styles
#
# album        :string       not null
# style        :string       not null
#
# Table name: tracks
# album        :string       not null
# disk         :integer      not null
# posn         :integer      not null
# song         :string

require_relative './sqlzoo.rb'

def alison_artist
  execute(<<-SQL)
    SELECT
      albums.artist
    FROM
      albums
    JOIN
      tracks ON albums.asin = tracks.album
    WHERE
      tracks.song = 'Alison'
  SQL
end

def exodus_artist
  execute(<<-SQL)
    SELECT
      albums.artist
    FROM
      albums
    JOIN
      tracks ON albums.asin = tracks.album
    WHERE
      tracks.song = 'Exodus'
  SQL
end

def blur_songs
  execute(<<-SQL)
    SELECT
      tracks.song
    FROM
      tracks
    JOIN
      albums ON tracks.album = albums.asin
    WHERE
      albums.title = 'Blur'
  SQL
end

def heart_tracks
  execute(<<-SQL)
    SELECT
      albums.title,
      COUNT(tracks.*)
    FROM
      albums
    JOIN
      tracks ON albums.asin = tracks.album
    WHERE
      tracks.song LIKE '%Heart%'
    GROUP BY
      albums.asin
    ORDER BY
      COUNT(tracks.*) DESC, albums.title
  SQL
end

def title_tracks
  execute(<<-SQL)
    SELECT
      tracks.song
    FROM
      tracks
    JOIN
      albums ON tracks.album = albums.asin
    WHERE
      tracks.song = albums.title
  SQL
end

def eponymous_albums
  execute(<<-SQL)
    SELECT
      albums.title
    FROM
      albums
    WHERE
      albums.title = albums.artist
  SQL
end

def song_title_counts
  execute(<<-SQL)
    SELECT
      tracks.song,
      COUNT( DISTINCT albums.asin)
    FROM
      tracks
    JOIN
      albums ON tracks.album = albums.asin
    GROUP BY
      tracks.song
    HAVING
      COUNT( DISTINCT albums.asin) > 2
  SQL
end

def best_value
  execute(<<-SQL)
    SELECT
      albums.title,
      albums.price,
      COUNT(tracks.*)
    FROM
      albums
    JOIN
      tracks ON albums.asin = tracks.album
    GROUP BY
      albums.asin
    HAVING
      (albums.price / COUNT(tracks.*)) < 0.5
  SQL
end

def top_track_counts
  execute(<<-SQL)
    SELECT
      albums.title,
      COUNT(tracks.*)
    FROM
      albums
    JOIN
      tracks ON albums.asin = tracks.album
    GROUP BY
      albums.asin
    ORDER BY
      COUNT(tracks.*) DESC, albums.title DESC
    LIMIT
      10
  SQL
end

def rock_superstars
  execute(<<-SQL)
    SELECT
      albums.artist,
      COUNT(DISTINCT albums.asin)
    FROM
      albums
    JOIN
      styles ON albums.asin = styles.album
    WHERE
      styles.style LIKE '%Rock%'
    GROUP BY
      albums.artist
    ORDER BY
      COUNT(DISTINCT albums.asin) DESC
    LIMIT 1
  SQL
end

def expensive_tastes
  execute(<<-SQL)
    SELECT
      styles.style,
      (SUM(album_track_counts.price) / SUM(album_track_counts.count))
    FROM
      styles
    JOIN (
      SELECT
        albums.*,
        COUNT(tracks.*) AS count
      FROM
        albums
      JOIN
        tracks ON albums.asin = tracks.album
      WHERE
        albums.price IS NOT NULL
      GROUP BY
        albums.asin
      ) AS album_track_counts ON styles.album = album_track_counts.asin
    GROUP BY
      styles.style
    ORDER BY
      (SUM(album_track_counts.price) / SUM(album_track_counts.count)) DESC
    LIMIT 5
  SQL
end
