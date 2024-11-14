'''
To Dos:
-   Soll dem Nutzer 5 Fragen stellen
-   Soll bei jeder Frage 3 Antwortmöglichkeiten anbieten
-   Der Spieler hat für jede Frage 2 Versuche
-   Wird die Frage beim ersten Versuch richtig beantwortet, bekommt der Spieler zwei Punkte, 
    beim zweiten Versuch einen Punkt und sonst 0 Punkte

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
    
    tries = 2
    while tries > 0:
        player_answer = input('Welche Antwort ist richtig (a, b oder c)')
            
        if player_answer == q['answer']:
            if tries == 2:
                score += 2
            else:
                score += 1
            print('Richtiiiig!!!')
            break
        else:
            tries -= 1
            print('falsch :/')
            if tries == 0:
                print('Die richtige Antwort ist', q['answer'])
        
print('Punkte: ', score)