require "colorize"

class Tile
  attr_reader :value

  def initialize(value)
    @value = value
    @given = value == 0 ? false : true
  end

  def color
    given? ? :blue : :red
  end

  def given?
    @given
  end

  def to_s
    value == 0 ? " " : value.to_s.colorize(color)
  end

  def value=(new_value)
    if given?
      puts "This tile is given."
    else
      @value = new_value
    end
  end
end
