'''
Temperature Classification
Write a Python program that classifies a given temperature into different categories: 
- If the temperature is between 10 and 25 degrees (inclusive), print "Moderate". 
- If the temperature is greater than 25 degrees, print "Hot".
'''

temperature = input('Type in a temperature')

temperature = int(temperature)

if temperature >= 10 and temperature <= 25:
    print('Moderate temperature')
elif temperature > 25:
    print('Hot temperature')
else:
    print('Cold temperature')