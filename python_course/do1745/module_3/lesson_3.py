
# Vergleichsoperatoren

x = 10
y = 20
z = 10

x == y  #False
x != y  #True
x > y   #False
x < y   #True
x >= y  #False
x <= z  #True


# Logische Operatoren

x < y and x > y             #False
x < y and x < y and x == z  #False

x < y or x < y              #True
not(x > y or x == z)        #False


# If Abfragen

if x != y and y != z:
    print('x is not y and y is not z')
    
if x < y:
    print('x is smaller than y')
elif x == z:
    print('x is euqal to z')
else:
    print('no statement is true')


# User Input

number = input('Type a number between 0 and 10')

#falls es kein float ist würde das Programm abstürzen
try:
    new_number = float(number)
except:
    print("das ist keine Zahl!")

if number > 0 and number <= 10:
    print('this is true')
else:
    print('this is false')
        
