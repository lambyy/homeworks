class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      @sequence_length += 1
      round_success_message
    end
  end

  def show_sequence
    add_random_color
    puts "Simon says sequence is:"
    @seq.each do |color|
      puts color
      sleep 1
      system("clear")
      sleep 0.5
    end
  end

  def require_sequence
    puts "Your turn"
    user_seq = []
    i = 0
    until user_seq.length == sequence_length
      user_seq << gets.chomp
      unless user_seq[i] == @seq[i]
        @game_over = true
        break
      end
      i += 1
    end
  end

  def add_random_color
    color = COLORS.sample
    @seq << color
  end

  def round_success_message
    puts "Good job! You passed this round"
  end

  def game_over_message
    puts "Sorry, game over."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
