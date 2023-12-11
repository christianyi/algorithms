# this is from bard..
roman_numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

def roman_to_int(roman_string):
  """
  Converts a Roman numeral string to an integer.

  Args:
    roman_string: A string representing a Roman numeral.

  Returns:
    The integer equivalent of the Roman numeral.
  """
  total = 0
  prev = 0
  for char in roman_string[::-1]:
    current = roman_numerals[char]
    if current < prev:
      total -= current
    else:
      total += current
    prev = current
  return total

# Example usage
roman_string = "MCMXCIV"
integer = roman_to_int(roman_string)
print(f"{roman_string} is equivalent to {integer}")
