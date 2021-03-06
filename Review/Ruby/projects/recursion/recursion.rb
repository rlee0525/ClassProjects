def range(s, e)
  return [] if e <= s
  range(s, e - 1) << e - 1
end

p range(3, 10) == [3, 4, 5, 6, 7, 8, 9]

def rec_sum(arr)
  return 0 if arr.empty?
  arr[0] + rec_sum(arr[1..-1])
end

p rec_sum([3, 4, 5, 10]) == 22

def iter_sum(arr)
  sum = 0
  arr.each do |el|
    sum += el
  end

  sum
end

p iter_sum([3, 4, 5, 10]) == 22

def exp(b, n)
  return 1 if n == 0
  b * exp(b, n - 1)
end

p exp(2, 5) == 32

def exp2(b, n)
  return 1 if n == 0
  n.even? ? exp2(b, n / 2) ** 2 : b * (exp2(b, (n - 1) / 2) ** 2)
end

p exp2(2, 5) == 32

def deep_dup(arr)
  copied = []
  arr.each do |el|
    if el.is_a? Array
      copied << deep_dup(el)
    else
      copied << el
    end
  end

  copied
end

p deep_dup([1, [2], [3, [4]]]) == [1, [2], [3, [4]]]

def iter_fib(n)
  return [] if n == 0
  return [0] if n == 1
  arr = [0, 1]
  
  while arr.length < n
    arr << arr[-1] + arr[-2]
  end

  arr
end

p iter_fib(7) == [0, 1, 1, 2, 3, 5, 8]

def rec_fib(n)
  if n <= 2
    arr = [0, 1].take(n)
  else
    arr = rec_fib(n - 1)
    arr << arr[-1] + arr[-2]
  end

  arr
end

p rec_fib(7) == [0, 1, 1, 2, 3, 5, 8]

def subsets(arr)
  return [[]] if arr.empty?
  subset = subsets(arr[0...-1])
  subset + subset.map { |el| el + [arr[-1]]}
end

p subsets([1, 2, 3]) == [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

def permutation(arr)
  return [arr] if arr.length <= 1

  first = arr.shift
  perms = permutation(arr)
  total = []
  
  perms.each do |perm|
    (0..perm.length).each do |i|
      total << perm[0...i] + [first] + perm[i..-1]
    end
  end

  total
end

p permutation([]) == [[]]
p permutation([1]) == [[1]]
p permutation([1, 2]) == [[1, 2], [2, 1]]
p permutation([1, 2, 3]) == [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]

def bsearch(arr, target)
  return if arr.empty?

  mid = arr.length / 2
  
  if arr[mid] == target
    return mid
  elsif arr[mid] > target
    bsearch(arr[0...mid], target)
  else
    ans = bsearch(arr[mid + 1..-1], target)
    mid + 1 + ans if ans
  end
end

p bsearch([1, 2, 3], 1) == 0
p bsearch([2, 3, 4, 5], 3) == 1
p bsearch([2, 4, 6, 8, 10], 6) == 2
p bsearch([1, 3, 4, 5, 9], 5) == 3
p bsearch([1, 2, 3, 4, 5, 6], 6) == 5
p bsearch([1, 2, 3, 4, 5, 6], 0) == nil
p bsearch([1, 2, 3, 4, 5, 7], 6) == nil

class Array
  def merge_sort
    return self if count < 2
    mid = count / 2
    left, right = self.take(mid), self.drop(mid)
    sorted_left = left.merge_sort
    sorted_right = right.merge_sort

    merge(sorted_left, sorted_right)
  end

  def merge(left, right)
    merged = []
    until left.empty? || right.empty?
      merged << ((left.first < right.first) ? left.shift : right.shift)
    end

    merged + left + right
  end
end

p [2, 31, 0, 14, 15, 17, 100, 3, 2, 1, 10].merge_sort == [0, 1, 2, 2, 3, 10, 14, 15, 17, 31, 100]

def make_change(amount, coins = [25, 10, 5, 1])
  return [] if amount == 0
  return nil if coins.all? { |coin| coin > amount }

  coins = coins.sort.reverse
  best_change = nil

  coins.each_with_index do |coin, idx|
    next if coin > amount
    remainder = amount - coin
    best_remainder = make_change(remainder, coins.drop(idx))
    next if best_remainder.nil?

    current_change = [coin] + best_remainder

    if best_change.nil? || current_change.count < best_change.count
      best_change = current_change
    end
  end

  best_change
end

p make_change(24, [10, 7, 1]) == [10, 7, 7]







