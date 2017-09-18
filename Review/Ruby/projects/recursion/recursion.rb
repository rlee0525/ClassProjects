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















