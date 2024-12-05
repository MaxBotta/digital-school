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

category_string = ''
index = 0
for cat in categories:
    index += 1
    category_string += ' ' + str(index) + ': ' + cat['name']

player_cat = simpledialog.askstring('Category', 'Wähle eine Kategorie: ' + category_string)

# Durch alle Fragen durchgehen
for q in categories[int(player_cat) - 1]['questions']:
    messagebox.showinfo('Quesion', f'{q['question']} Antwortmöglichkeiten: a: {q['options']['a']} b: {q['options']['b']} c: {q['options']['c']}')
    
    tries = 2
    while tries > 0:
        player_answer = simpledialog.askstring('Answer', 'Welche Antwort ist richtig (a, b oder c)')
            
        if player_answer == q['answer']:
            if tries == 2:
                score += 2
            else:
                score += 1
            messagebox.showinfo('Result', 'Richtiiiig!!!')
            break
        else:
            tries -= 1
            messagebox.showinfo('Result', 'falsch :/')
            if tries == 0:
                messagebox.showinfo('Result', 'Die richtige Antwort ist: ' + q['answer'])
        
messagebox.showinfo('Punkte: ', 'Punktestand: ' + score)

root.mainloop()