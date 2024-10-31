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
        'answers': { 
            'a': 'Paris',
            'b': 'Lissabon', 
            'c': 'Stockholm'
        },
        'answer': 'a' 
    },
    { 
        'question': 'Was ist die Hauptstadt von Portugal', 
        'answers': { 
            'a': 'Paris',
            'b': 'Lissabon', 
            'c': 'Stockholm'
        },
        'answer': 'b' 
    }
]

#question_1 = questions[0]['question']
#answer_1_a = questions[0]['answers']['a']



for question in questions:
    print(question['question'])
    
    print('a: ', question['answers']['a'])
    print('b: ', question['answers']['b'])
    print('c: ', question['answers']['c'])
    
    player_answer = input('Welche Antwort ist richtig (a, b oder c)')