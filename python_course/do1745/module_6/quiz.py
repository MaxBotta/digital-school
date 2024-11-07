'''
To Dos:
- Soll dem Nutzer 5 Fragen stellen
- Soll bei jeder Frage 3 Antwortmöglichkeiten anbieten
- Wenn die richtige Antwort gegeben wurde, bekommt der Spieler einen Punkt

Ergänzung:
- Die Antworten sollen über ein input an das Programm gegeben werden

'''

questions = [
    { 
        'question': 'Was ist die Hauptstadt von Frankreich?', 
        'options': { 
            'a': 'Paris',
            'b': 'Lissabon', 
            'c': 'Stockholm'
        },
        'answer': 'a' 
    },
    { 
        'question': 'Was ist die Hauptstadt von Portugal', 
        'options': { 
            'a': 'Paris',
            'b': 'Lissabon', 
            'c': 'Stockholm'
        },
        'answer': 'b' 
    }
]


#question_1 = questions[0]['question']
#answer_1_a = questions[0]['answers']['a']

# Punkte auf 0 setzen
score = 0

# Durch alle Fragen durchgehen
for q in questions:
    print(q['question'])
    
    print('a: ', q['options']['a'])
    print('b: ', q['options']['b'])
    print('c: ', q['options']['c'])
    
    player_answer = input('Welche Antwort ist richtig (a, b oder c)')
    
    if player_answer == q['answer']:
        score += 1
        print('Richtiiiig!!!')
    else:
        print('falsch!!! :/')
        
print('Your score is: ', score)