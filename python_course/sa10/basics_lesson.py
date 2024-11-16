
print('Hallo Welt')

# Variablen

my_name = 'Max'     #string - Zeichen
my_number = 5       #integer - Ganze Zahlen
my_number_2 = 1.6   #float - Kommazahlen
my_boolean = True   #boolean - wahr oder falsch


#Typumwandlungen

float_to_int = int(my_number_2) #in int umwandeln - wird zum kleineren Wert
print(float_to_int)

float_to_int = round(my_number_2) #auf nächstgrößeren Wert runden
print(float_to_int)

number_to_string = str(my_number)
print(my_name + ' ' + number_to_string)
print(f'{my_name} {number_to_string} Hallo Welt')


# Operatoren und If Abfragen

# Zuweisungsoperatoren
temperature = 22.5
temperature = temperature + 2
temperature += 2

# Vergleichsoperatoen
5 > 4 #True
3 > 7 #False
2 <= 2 #True
4 == 4 #True
'Hallo' == 'Hallo'

# Logischen Operatoren
my_name == 'Max' and my_number > 10 #False
3 > 2 and 10 < 11 and 4 > 2 #True
2 > 10 or 4 < 6 #True
(8 < 10 and 5 > 2) or 3 > 10 #True

# If Abfragen
if my_number == 5:
    print('Hallo Welt')
elif my_number > 10:
    print('Hallo Weeeeelt')
elif my_number > 20:
    print('Hallo Hallo Weeeeelt')
else:
    print('Tschau Welt')
    
    
# User input
user_input = input('Weche Temepratur hat es?: ')

# Loops
fruits = ['banana', 'apple', 'orange', 'pineapple']

for fruit in fruits: # durch Liste iterieren
    print(fruit)
    
for number in range(0, 10): # 10 mal wiederholen
    print(number)
    
game_over = False
while game_over == False:   # Solange das piel nicht game over ist, wiederhole die Schleife
    print('Das Spiel läuft')
    player_input = input('Weiter spielen?: y/n')
    if player_input == 'n':
        game_over = True
        

# Functions
def say_hello():
    print('Hello')
    
say_hello()

def add_numbers(a, b): # mit zwei Parametern/Argumenten
    return a + b

new_number = add_numbers(5, 10)