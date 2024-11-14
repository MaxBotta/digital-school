'''
    Erstelle eine Psswortgenerator App, die durch die Kombination von Wörterns aus 
    zwei oder mehr Listen von Kategorien ein Passwort erstellt. Zusätzlich soll eine 
    zufällige Nummer zwischen 0 und 100 enthalten sein und ein Sonderzeichen.
    
    Beispiel: KatzeBlau42#
'''

import random
import string

animals = ['Cat', 'Dog', 'Zebra', 'Lion']
colors = ['Blue', 'Green', 'Red', 'Orange']

def create_password(level):
    rand_animal = random.choice(animals)
    rand_color = random.choice(colors)
    rand_number = random.randrange(0, 100)
    special_character = random.choice(string.punctuation)
    rand_letter_low = random.choice(string.ascii_lowercase)
    rand_letter = random.choice(string.ascii_uppercase)
    
    password = ''
    
    if level == 1:
        password = rand_animal + rand_color + str(rand_number)
    elif level == 2:
        password = rand_animal + rand_color + str(rand_number) + special_character
    else:
        password = rand_animal + rand_color + str(rand_number) + special_character + rand_letter_low + rand_letter
    
    return password


password_is_ok = False
while password_is_ok == False:
    password = create_password(1)
    print('')
    print(password)
    
    user_answer = input('Password ok? y/n : ')
    
    if user_answer == 'y':
        password_is_ok = True

