fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(fish)
  longest_fish = ""
  fish.each do |f1|
    fish.each do |f2|
      longest_fish = f1.length > f2.length ? f1 : f2
    end
  end
  longest_fish
end

def merge_sort (array, &prc)
  prc ||= Proc.new { |num1, num2| num1 <=> num2 }
  return array if array.length <= 1

  mid_idx = array.length / 2
  merge(
    merge_sort(array.take(mid_idx), &prc),
    merge_sort(array.drop(mid_idx), &prc),
    &prc
  )
end

def merge(left, right, &prc)
  merged_array = []
  until left.empty? || right.empty?
    case prc.call(left.first, right.first)
    when -1
      merged_array << left.shift
    when 0
      merged_array << left.shift
    when 1
      merged_array << right.shift
    end
  end

  merged_array + left + right
end


def dominant_octopus(fish)
  prc = Proc.new { |x, y| y.length <=> x.length }
  merge_sort(fish, &prc)[0]
end

def clever_octopus(fish)
  longest_fish = fish[0]
  fish.each do |f|
    longest_fish = longest_fish.length > f.length ? longest_fish : f
  end
  longest_fish
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end

tiles_hash = {
  'up' => 0,
  'right-up' => 1,
  'right' => 2,
  'right-down' => 3,
  'down' => 4,
  'left-down' => 5,
  'left' => 6,
  'left-up' => 7
}

def constant_dance(direction, tiles_hash)
  tiles_hash[direction]
end
