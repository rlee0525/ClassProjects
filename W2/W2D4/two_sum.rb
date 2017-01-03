def bad_two_sum?(arr, target_sum)
  arr.length.times do |i|
    (arr.length - i - 1).times do |j|
      return true if arr[i] + arr[j + i + 1] == target_sum
    end
  end
  false
end

def okay_two_sum?(arr, target_sum)
  arr = arr.sort
  arr.each_with_index do |el, i|
    match_idx = arr.bsearch_index { |el2| (target_sum - el) <=> el2 }
    return true if match_idx && match_idx != i
  end
  false
end

def two_sum?(arr, target_sum)
  complements = {}

  arr.each do |el|
    return true if complements[target_sum - el]
    complements[el] = true
  end

  false
end

def two_sum_indices(arr, target_sum)
  complements = {}
  arr.each_with_index do |el, i|
    complement, j = complements[target_sum - el]
    return [i, j] if complement

    complements[el] = [el, i]
  end
  nil
end

def four_sum?(arr, target_sum)
  pairs = Hash.new

  arr.each_with_index do |a, first|
    arr.each_with_index do |b, second|
      next unless first < second

      sum = [a + b].reduce(:+)
      pairs[sum] ||= Hash.new
      pairs[sum][a] ||= Set.new
      pairs[sum][b] ||= Set.new
      pairs[sum][a] << first
      pairs[sum][b] << second
      complement = target_sum - sum
      next unless pairs[complement]

      pairs[complement].each do |c, thirds|
        next if (thirds - [first, second]).empty?

        d = complement - c
        (thirds - [first, second]).each do |third|
          return true unless (pairs[complement][d] - [first, second, third]).empty?
        end
      end
    end
  end

  false
end
