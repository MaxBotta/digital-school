from struct import pack
from tkinter import Tk, Label, Button, Entry
from tracemalloc import start
from questions import categories

root = Tk()
root.geometry("400x400")

label = Label(root, text='Wähle eine Kategorie', font=("Helvetica", 14))
label.pack(pady=10)

buttons = []

answer_button_a = Button(root, text='a', font=("Helvetica", 14))
answer_button_b = Button(root, text='b', font=("Helvetica", 14))
answer_button_c = Button(root, text='c', font=("Helvetica", 14))

buttons.append(answer_button_a)
buttons.append(answer_button_b)
buttons.append(answer_button_c)


category = 0
current_question = -1
score = 0

def remove_all_buttons():
    for button in buttons:
        button.pack_forget()

def pack_answer_button():
    answer_button_a.pack(pady=10)
    answer_button_b.pack(pady=10)
    answer_button_c.pack(pady=10)
    
def change_label_text(text):
    label.config(text=text)
    
def check_answer(answer):
    global score
    if answer == categories[category]['questions'][current_question]['answer']:
        change_label_text('Richtig')
        score += 1
    else:
        change_label_text('Falsch')
    
    #wait 2 seconds
    root.after(2000, next_question)
    

def change_button_text(a, b, c):
    answer_button_a.config(text=a, command=lambda: check_answer('a'))
    answer_button_b.config(text=b, command=lambda: check_answer('b'))
    answer_button_c.config(text=c, command=lambda: check_answer('c'))
    
def next_question():
    global category
    global current_question
    current_question += 1
    print(category, current_question)
    if current_question < len(categories[category]['questions']):
        question = categories[category]['questions'][current_question]
        change_label_text(question['question'])
        change_button_text(question['options']['a'], question['options']['b'], question['options']['c'])
        pack_answer_button()
    else:
        label.config(text='Ende des Quiz. Punkte: ' + str(score))
        remove_all_buttons()
    

def start_quiz(cat):
    global category
    global current_question
    category = cat
    current_question = -1
    remove_all_buttons()
    next_question()

def choose_category():
    global buttons
    for i, cat in enumerate(categories):
        button = Button(root, text=cat['name'], font=("Helvetica", 14), command=lambda index=i: start_quiz(index))
        button.pack(pady=10)
        buttons.append(button)


def start_game():
    choose_category()
    
start_game()


root.mainloop()