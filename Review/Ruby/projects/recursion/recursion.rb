def range(s, e)
  return [] if e <= s
  range(s, e - 1) << e - 1
end
