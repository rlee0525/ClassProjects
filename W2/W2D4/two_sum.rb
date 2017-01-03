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
