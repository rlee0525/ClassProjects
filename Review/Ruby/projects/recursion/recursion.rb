def range(s, e)
  return [] if e <= s
  range(s, e - 1) << e - 1
end

p range(3, 10)

def rec_sum(arr)
  return 0 if arr.empty?
  arr[0] + rec_sum(arr[1..-1])
end

p rec_sum([3, 4, 5, 10])

def iter_sum(arr)
  sum = 0
  arr.each do |el|
    sum += el
  end

  sum
end

p iter_sum([3, 4, 5, 10])

def exp(b, n)
  return 1 if n == 0
  b * exp(b, n - 1)
end

p exp(2, 5)














