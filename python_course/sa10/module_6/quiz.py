from random import randint
from questions import categories

'''
The program asks the player questions about the capital cities. 
Users get three chances to answer each question. Correct answer will score one point. 
At the end of the quiz, the player’s final score will be shown. 
For this app we will use variables, functions, if statements and loops.
'''

'''
To Dos:
-   Wenn das Programm startet, soll der Spieler aus einer von 3 Kategorien wählen
-   Das Programm soll dem Nutzer nacheinander 5 zufällige Fragen stellen
-   Der Spieler kann aus 3 Antwortmöglichkeiten eine wählen, 
    diese soll durch Eingabe von a,b oder c ausgewählt werden
-   Für jede richtig beantwortete Frage erhält der Spieler einen Punkt
-   Wurden alle Fragen beantwortet, wird das Programm beendet
'''



def start_game():
    score = 0
    
    for i, cat in enumerate(categories):
        print(str(i + 1) + ': ', cat['name'])
    
    # player chooses a category
    category_index = input('Choose a category (1, 2, ...): ')
    
    # get the choosen category
    category = categories[int(category_index) - 1]
    
    # Wiederhole x mal: Stelle dem Nutzer eine Frage
    for q in category['questions']:
        print('')
        print('------------------------------------')
        
        # Stelle dem Nutzer die Frage
        print(q['question'])
        
        # Alle Antowrten anzeigen
        for key in q['options']:
            print(key + ': ', q['options'][key])
        
        player_input = input('Your answer: ')
            
        if player_input == q['answer']:
            score += 1
            print('This answer is right :)')
        else:
            print('This answer is wrong :/')
                
    print('This is your score: ' , score)
    

start_game()
            

# Gibt eine zufällige ganze Zahl zurück (0 - Anzahl der Fragen)
#random_number = randint(0, len(questions) - 1)

