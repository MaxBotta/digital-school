'''
The program asks the player questions about the capital cities. 
Users get three chances to answer each question. Correct answer will score one point. 
At the end of the quiz, the player’s final score will be shown. 
For this app we will use variables, functions, if statements and loops.
'''

'''
To Dos:
- Das Programm soll dem Nutzer nacheinander 5 zufällige fragen stellen
- Für jede Frage hat der Nutzer 3 Chancen
- Für jede richtig beantwortete Frage erhält der Spieler einen Punkt
- Wurden alle fragen beantwortet, wird das Programm beendet
'''


from random import randint

questions = [
    {
        'question': 'What is the capital city of France?',
        'answer': 'Paris'
    },
    {
        'question': 'What is the capital city of Italy?',
        'answer': 'Rome'
    },
    {
        'question': 'What is the capital city of Spain?',
        'answer': 'Madrid'
    },
    {
        'question': 'What is the capital city of Germany?',
        'answer': 'Berlin'
    },
    {
        'question': 'What is the capital city of Portugal?',
        'answer': 'Lisbon'
    }
]

score = 0

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
            



# Gibt eine zufällige ganze Zahl zurück (0 - Anzahl der Fragen)
#random_number = randint(0, len(questions) - 1)

