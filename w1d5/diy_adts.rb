class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
    el
  end

  def remove
    @stack.pop
  end

  def show
    @stack
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
      @queue.push(el)
      el
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    exists = false
    @map.each_index do |idx|
      if @map[idx][0] == key
        @map[idx][1] = value
        exists = true
      end
    end
    @map << [key, value] unless exists
    [key, value]
  end

  def lookup(key)
    @map.each_index do |idx|
      return @map[idx][1] if @map[idx][0] == key
    end
    nil
  end

  def remove(key)
    value = nil
    @map.each_index do |idx|
      value = @map[idx][1] if @map[idx][0] == key
    end
    return nil unless value
    @map.delete([key, value])
  end

  def show
    @map
  end
end
