require 'byebug'
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    (0..13).each do |cup|
      next if cup == 6 || cup == 13
      @cups[cup] = [:stone, :stone, :stone, :stone]
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 12
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    holding = @cups[start_pos]
    @cups[start_pos] = []
    pos = start_pos
    until holding.empty?
      pos += 1
      pos = 0 if pos > 13
      if current_player_name == @player1
        @cups[pos].push(holding.pop) unless pos == 13
      else
        @cups[pos].push(holding.pop) unless pos == 6
      end
    end
    render
    next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    side_one_empty = (0..5).all? { |cup| @cups[cup].empty? }
    side_two_empty = (7..12).all? { |cup| @cups[cup].empty? }
    side_one_empty || side_two_empty
  end

  def winner
    side_one_count = @cups[6].length
    side_two_count = @cups[13].length
    winner = (side_one_count <=> side_two_count)
    case winner
    when -1
      return @player2
    when 0
      return :draw
    when 1
      return @player1
    end
  end
end
