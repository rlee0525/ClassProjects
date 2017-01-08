# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

def example_select
  execute(<<-SQL)
    SELECT
      yr,
      subject,
      winner
    FROM
      nobels
    WHERE
      yr = 1960
  SQL
end

def prizes_from_1950
  execute(<<-SQL)
    SELECT
      yr,
      subject,
      winner
    FROM
      nobels
    WHERE
      yr = 1950;
  SQL
end

def literature_1962
  execute(<<-SQL)
    SELECT
      winner
    FROM
      nobels
    WHERE
      yr = 1962
      AND subject = 'Literature';
  SQL
end

def einstein_prize
  execute(<<-SQL)
    SELECT
      yr,
      subject
    FROM
      nobels
    WHERE
      winner = 'Albert Einstein';
  SQL
end

def millennial_peace_prizes
  execute(<<-SQL)
    SELECT
      winner
    FROM
      nobels
    WHERE
      subject = 'Peace'
      AND yr >= 2000;
  SQL
end

def eighties_literature
  execute(<<-SQL)
    SELECT
      yr,
      subject,
      winner
    FROM
      nobels
    WHERE
      subject = 'Literature'
      AND yr BETWEEN 1980 AND 1989;
  SQL
end

def presidential_prizes
  execute(<<-SQL)
    SELECT
      yr,
      subject,
      winner
    FROM
      nobels
    WHERE
      winner IN (
        'Theodore Roosevelt',
        'Woodrow Wilson',
        'Jimmy Carter'
      );
  SQL
end

def nobel_johns
  execute(<<-SQL)
    SELECT
      winner
    FROM
      nobels
    WHERE
      winner LIKE 'John%';
  SQL
end
