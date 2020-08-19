#codewars 8/19/2020
def even_or_odd(number)
  if number.even?
    "Even"
    else 
    "Odd"
  end
end

#test 
# Test.assert_equals(even_or_odd(2), "Even", 'even_or_odd(2)')
# Test.assert_equals(even_or_odd(1), "Odd", 'even_or_odd(1)')
# Test.assert_equals(even_or_odd(-1), "Odd", 'even_or_odd(-1)')
# Test.expect(even_or_odd(0) == "Even")
# Test.expect(even_or_odd(1545452) == "Even")
# Test.expect(even_or_odd(7) == "Odd")
# Test.expect(even_or_odd(78) == "Even")
# Test.expect(even_or_odd(17) == "Odd")
# Test.expect(even_or_odd(74156741) == "Odd")
# Test.expect(even_or_odd(100000) == "Even")
# Test.expect(even_or_odd(-123) == "Odd")
# Test.expect(even_or_odd(-456) == "Even")

# problem started on 8/17/19 
# create a fibonacci function that given a signature array/list, 
#returns the first n elements - signature included of the so seeded sequence.
#Signature will always contain 3 numbers; 
#n will always be a non-negative number; 
#if n == 0, then return an empty array (except in C return NULL) 
#and be ready for anything else which is not clearly specified ;)

def tribonacci(signature,n)
  return Array.new if n<=0 
  return signature.take(n) if n<3 
  (0..n-1).each do |x| 
    signature << signature [x-3] + signature[x-2] + signature[x-1] if x>2 
    binding.pry 
  end
  return signature 
end


# 8.11.2020 Solution "Fill the name of the problem in here"
def numberToString(num)
    num.to_s # Convert a Number to a String
 end

#  Test.expect(numberToString(67) === '67');

#8/14/2020 implement a difference function, which subtracts one list from another and returns the result.
#It should remove all values from list a, which are present in list b.
def array_diff(a, b)
    a-b
  end

  