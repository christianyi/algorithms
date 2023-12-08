# Given an integer x, return true if x is a palindrome, and false otherwise.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        forward = str(x)
        backward = forward[::-1]
        if (forward == backward):
            return True
        return False