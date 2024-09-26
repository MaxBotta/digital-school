'''
Write a Python program that takes a positive integer
as input and calculates its factorial using a loop.
'''

number = input('Enter a positive integer: ')

try:
    number = int(number)
    if number <= 0:
        raise ValueError
    
    factorial = 1
    for i in range(1, number + 1):
        factorial *= i
    print(factorial)
    
except:
    print('This is not a positive integer!')