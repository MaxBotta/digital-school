
# Vergleichsoperatoren

x = 5
y = 10
z = 5

x > y   #False
x == y  #False
x < y   #True
x >= z  #True


# Logische Operatoren

x < y and x == z            #True
z > y and y > x and z == y  #False
x == y or x == z            #True
(x < y or z > y) and x == z #True


# If Abfragen

if x < y:
    print('x is smaller than y')
elif x > y:
    print('x is greater than y')
else:
    print('x is euqal to y')
    
    
# user input

number = input('Tippe eine Nummer')

number = int(number)

if(number >= 0 and number <= 10):
    print('Number is between 0 and 10')      
