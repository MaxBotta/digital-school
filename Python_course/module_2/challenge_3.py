'''
Design a program that calculates the average score of a student 
from their test scores. The test scores are provided as a list 
of floating-point numbers. Make sure to include comments explaining 
the steps and logic of your calculation.
'''

all_scores = [] #empty list of scores
is_typing = True #bool to check if process is finished

#calculates the average score of a list of scores
def calculate_average():
    #set average to 0
    average = 0
    
    # sum up all scores provided
    for score in all_scores:
        average += score

    #divide by count of scores 
    average = average / len(all_scores)

    #print to terminal
    print("average score is: ", round(average, 2))
    
    #end the program
    is_typing = False

#loop to type as many scores as you want
while is_typing:
    #get input from user
    number = input("Type a floating point number or 'f' to calculate average: ")
    
    #check if user wants to calculate average
    if number == "f":
        calculate_average()
        
    #check if input is a number
    if number.isnumeric():
        #add number to list of scores and make sure its a float
        all_scores.append(float(number))
    else:
        print("Please type in a number!")

