# Array implementation of LRU Cache
class LRUCache
  def initialize(cache_size)
    @cache_size = cache_size
    @cache = []
  end

  def count
    @cache.count
  end

  def add(el)
    @cache.delete(el) if @cache.include?(el)
    @cache.shift if count == @cache_size
    @cache << el
  end

  def show
    print @cache
  end
end
