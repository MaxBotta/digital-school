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


from random import randint

questions = [
    {
        'question': 'What is the capital city of France?',
        'options': {
            'a': 'Berlin',
            'b': 'Paris',
            'c': 'Stockholm'
        },
        'answer': 'b'
    },
    {
        'question': 'What is the capital city of Italy?',
        'options': {
            'a': 'Amsterdam',
            'b': 'Lisbon',
            'c': 'Rome'
        },
        'answer': 'c'
    },
    {
        'question': 'What is the capital city of Spain?',
        'options': {
            'a': 'Madrid',
            'b': 'Paris',
            'c': 'Stockholm'
        },
        'answer': 'a'
    },
]


def start_game():
    score = 0
    
    # TODO: implement that player can choose a category
    # category = input('Which category? (a: capital cities, b: coding )')
    
    # if category == 'a':

    # Wiederhole x mal: Stelle dem Nutzer eine Frage
    for q in questions:
        # Stelle dem Nutzer die Frage
        print(q['question'])
        
        # Zähle Antworten
        answer_counter = 0
        
        while answer_counter < 3:
            player_input = input('Your answer: ')
            
            #Kontrolliere ob die Spielerantwort richtig ist
            if player_input == q['answer']:
                score += 1
                print('This answer is right :)')
                break
            else:
                answer_counter += 1
                print('This answer is wrong :/')
                
    print('This is your score: ' , score)
    

start_game()
            

# Gibt eine zufällige ganze Zahl zurück (0 - Anzahl der Fragen)
#random_number = randint(0, len(questions) - 1)

