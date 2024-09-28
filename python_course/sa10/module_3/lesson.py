# Zuweisungsoperatoren
x = 5
y = 10
z = 5

a = 3

# Kurzschreibweise
a = a + 1
a += 1
a *= 2

# Vergleichsoperatoren

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
