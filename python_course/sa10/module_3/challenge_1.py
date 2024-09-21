'''
Write a Python program that compares two numbers 
and prints "First number is greater" if the first 
number is greater than the second number. Otherwise, 
print "Second number is greater".
'''

number_1 = input('Wähle deine erste Nummer')
number_2 = input('Wähle deine zweite Nummer')


if number_1 > number_2:
    print('First number is greater')
elif number_2 > number_1:  
   print('Second number is greater')