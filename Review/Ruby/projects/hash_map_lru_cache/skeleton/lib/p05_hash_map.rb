require_relative 'p02_hashing'
require_relative 'p04_linked_list'
include Enumerable

class HashMap
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    each do |k, v|
      return true if k == key
    end

    false
  end

  def set(key, val)
    resize! if @count == num_buckets
    if bucket(key).include?(key)
      bucket(key).update(key, val)
    else
      bucket(key).append(key, val)
      @count += 1
    end
  end

  def get(key)
    each do |k, v|
      return v if k == key
    end

    nil
  end

  def delete(key)
    if bucket(key).include?(key)
      bucket(key).remove(key)
      @count -= 1
    end
  end

  def each
    @store.each do |bucket|
      bucket.each do |list|
        yield [list.key, list.val]
      end
    end
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    @store = Array.new(num_buckets * 2) { LinkedList.new }
    @count = 0
    old_store.each do |bucket|
      bucket.each do |list|
        set(list.key, list.val)
      end
    end
  end

  def bucket(key)
    @store[key.hash % num_buckets]
  end
end
