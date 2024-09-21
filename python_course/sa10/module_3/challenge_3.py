'''
Fahrenheit temperature to Celsius
Write a Python program that does the following:
- Takes a temperature value in Fahrenheit as input.
- Converts the Fahrenheit temperature to Celsius using the formula (F - 32) * 5/9.
- Prints the converted temperature in Celsius.
'''

fahrenheit = input('Gebe eine Temperatur in Fahrenheit ein: ')

try:
    fahrenheit = float(fahrenheit)
    celcius = (fahrenheit - 32) * 5/9
    print(round(celcius, 2))
except: 
    print('Das ist keine Zahl!')