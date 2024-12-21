'''
    - Ein Hauptfenster
    - Kategorie auswählen
    - Ein Label mit der Frage
    - 3 Buttons mit den Antowrtmöglichkeiten
'''

from tkinter import Tk, Label, Button, Entry

root = Tk()
root.geometry('400x400')

label = Label(root, text='Hallo Welt')
label.pack(pady=10)

buttons = []

def remove_buttons():
    for btn in buttons:
        btn.pack_forget()

def on_button_click(text):
    label.config(text=text)

def create_buttons():
    for i in range(3):
        new_button = Button(root, text=f'Button: {i}', command=lambda index=i: on_button_click(f'Button: {index}'))
        new_button.pack(pady=5)
        buttons.append(new_button)
        
create_buttons()


root.mainloop()