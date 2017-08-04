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

# To test that your code works, create a new instance of the Stack class,
# and play around with adding and removing elements. Remember, a stack
# follows the principle of LIFO!
