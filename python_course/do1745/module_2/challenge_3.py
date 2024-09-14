'''
Design a program that calculates the average score of a student 
from their test scores. The test scores are provided as a list 
of floating-point numbers. Make sure to include comments explaining 
the steps and logic of your calculation.
'''

is_typing = True

scores = []

def calculate_average(scores):
    sum = 0
    for score in scores:
        sum = sum + score

    average = sum / len(scores)
    return average


while is_typing:
    number = input("Füge eine Note hinzu (z.B. 2.3) oder drücke 'f' und berechne den Durschnitt.")
    
    if number == 'f':
        average = calculate_average(scores)
        print("Der Durschnitt beträgt: ", average)
        is_typing = False
        quit()

    try:
        new_number = float(number)
        scores.append(float(new_number))
    except:
        print("das ist keine Zahl!")