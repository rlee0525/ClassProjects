def range(min, max)
  return [] if max <= min
  range(min, max - 1) << max - 1
end

def sum_iter(nums)
  sum = 0
  nums.each { |num| sum += num }
  sum
end

def sum_rec(nums)
  return 0 if nums.empty?
  nums[0] + sum_rec(nums.drop(1))
end

def exp1(base, power)
  (power == 0) ? 1 : (base * exp1(base, power - 1))
end

def exp2(base, power)
  return 1 if power == 0

  half = exp2(base, power / 2)

  if power.even?
    half * half
  else
    base * half * half
  end
end

class Array
  def deep_dup
    map { |el| el.is_a?(Array) ? el.deep_dup : el }
  end
end

def fibs_iter(n)
  return [] if n == 0
  return [0] if n == 1

  fibs = [0, 1]

  while fibs.count < n
    fibs << fibs[-2] + fibs[-1]
  end

  fibs
end

def fibs_rec(n)
  return [0, 1].take(n) if n < 3

  fibs = fibs_rec(n - 1)
  fibs << fibs[-2] + fibs[-1]
end

class Array
  def subsets
    return [[]] if empty?
    subs = take(count - 1).subsets
    subs.concat(subs.map { |sub| sub + [last] })
  end
end

def permutations(array)
  return [array] if array.length <= 1

  first = array.shift
  perms = permutations(array)
  total_permutations = []

  perms.each do |perm|
    (0..perm.length).each do |i|
      total_permutations << perm[0...i] + [first] + perm[i..-1]
    end
  end

  total_permutations
end

def bsearch(nums, target)
  return nil if nums.empty?

  probe_index = nums.length / 2
  case target <=> nums[probe_index]
  when -1
    bsearch(nums.take(probe_index), target)
  when 0
    probe_index
  when 1
    sub_answer = bsearch(nums.drop(probe_index + 1), target)
    (sub_answer.nil?) ? nil : (probe_index + 1) + sub_answer
  end
end

class Array
  def merge_sort
    return self if count < 2

    middle = count / 2

    left, right = self.take(middle), self.drop(middle)
    sorted_left, sorted_right = left.merge_sort, right.merge_sort

    merge(sorted_left, sorted_right)
  end

  def merge(left, right)
    merged_array = []
    until left.empty? || right.empty?
      merged_array <<
        ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
  end
end

def make_change(target, coins = [25, 10, 5, 1])
  return [] if target == 0
  return nil if coins.none? { |coin| coin <= target }

  coins = coins.sort.reverse

  best_change = nil
  coins.each_with_index do |coin, index|
    next if coin > target

    remainder = target - coin
    best_remainder = make_change(remainder, coins.drop(index))
    next if best_remainder.nil?

    this_change = [coin] + best_remainder

    if (best_change.nil? || (this_change.count < best_change.count))
      best_change = this_change
    end
  end

  best_change
end
