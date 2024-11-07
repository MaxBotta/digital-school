'''
To Dos:
- Soll dem Nutzer 5 Fragen stellen
- Soll bei jeder Frage 3 Antwortmöglichkeiten anbieten
- Wenn die richtige Antwort gegeben wurde, bekommt der Spieler einen Punkt

Ergänzung:
- Die Antworten sollen über ein input an das Programm gegeben werden

'''

from questions import categories

# Punkte auf 0 setzen
score = 0

print('Wähle eine Kategorie')

index = 0
for cat in categories:
    index += 1
    print(str(index) + ': ', cat['name'])
    
player_cat = input('Wähle eine Kategorie: ')

# Durch alle Fragen durchgehen
for q in categories[int(player_cat) - 1]['questions']:
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
        
print('Punkte: ', score)