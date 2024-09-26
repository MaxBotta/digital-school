'''
Write a Python program that defines a function called 
greet that takes a name as an argument and prints a 
greeting message with the provided name. 
'''

def greet(name):
    print(f'Hello, {name}. We wish you a nice day!')
    
name = input('Enter your name: ')
greet(name)