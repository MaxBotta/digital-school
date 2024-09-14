'''
Design a program that calculates the average score of a student 
from their test scores. The test scores are provided as a list 
of floating-point numbers. Make sure to include comments explaining 
the steps and logic of your calculation.
'''

#bool variable for while loop
is_typing = True

##list of all scores/grades
scores = []

#calculate the average score of all grades
def calculate_average(scores):
    sum = 0
    #sum up all scores
    for score in scores:
        sum = sum + score

    #calculate average and return
    average = sum / len(scores)
    return average


#loop to add as amany scores as the user want to
while is_typing:
    number = input("Füge eine Note hinzu (z.B. 2.3) oder drücke 'f' und berechne den Durschnitt.")
    
    #check if user wants to stop and calculate average
    if number == 'f':
        average = calculate_average(scores)
        print("Der Durschnitt beträgt: ", average)
        #end loop and quit program
        is_typing = False
        quit()

    #check if user input is a number and if true add number to lsit of scores
    try:
        new_number = float(number)
        scores.append(float(new_number))
    except:
        print("das ist keine Zahl!")