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
from tkinter import Tk, simpledialog, messagebox

root = Tk()
root.withdraw()

# Punkte auf 0 setzen
score = 0

category_string = 'Wähle eine Kategorie: \n'
index = 0
for cat in categories:
    index += 1
    category_string += f'{str(index)} : {cat['name']}\n'
    
player_cat = simpledialog.askinteger('Kategorie', category_string)


# Durch alle Fragen durchgehen
for q in categories[int(player_cat) - 1]['questions']:

    tries = 2
    while tries > 0:
        player_answer = simpledialog.askstring('Frage', f'{q['question']} \n a: {q['options']['a']} \n b: {q['options']['b']} \n c: {q['options']['c']}')

        if player_answer == q['answer']:
            if tries == 2:
                score += 2
            else:
                score += 1
            messagebox.showinfo('Auswertung', 'Richtig!')
            break
        else:
            tries -= 1
            messagebox.showinfo('Auswertung', 'Falsch!')
            if tries == 0:
                messagebox.showinfo('Auswertung', 'Die richtige Antwort ist ' + q['answer'])
        
        
messagebox.showinfo('Punkte', 'Punkte: ' + str(score))