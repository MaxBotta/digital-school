'''
Write a Python program that defines a function called repeat_name 
that takes a name and a number as arguments. The function should 
print the name repeated the specified number of times. 
'''

def repeat_name(name, number):
    for i in range(number):
        print(name)
        
input_name = input('Enter your name: ')
input_number = int(input('Enter a number: '))

repeat_name(input_name, input_number)