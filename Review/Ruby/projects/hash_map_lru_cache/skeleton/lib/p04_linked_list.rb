include Enumerable

class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    self.each do |list|
      return list.val if list.key == key
    end
  end

  def include?(key)
    self.each do |list|
      return true if list.key == key
    end

    false
  end

  def append(key, val)
    current = Node.new(key, val)
    prev = @tail.prev
    prev.next = current
    current.prev = prev
    current.next = @tail
    @tail.prev = current
  end

  def update(key, val)
    each do |list|
      list.val = val if list.key == key
    end
  end

  def remove(key)
    current = nil
    
    each do |list|
      current = list if list.key == key
    end

    pre = current.prev
    nex = current.next
    pre.next = nex
    nex.prev = pre
    current.prev = nil
    current.next = nil
  end

  def each
    current = @head.next
    until current == @tail
      yield current
      current = current.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
