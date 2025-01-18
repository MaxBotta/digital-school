from crud_todos import read, create, delete, update
import customtkinter as ctk
from tkcalendar import DateEntry
from datetime import datetime

app = ctk.CTk()

app.geometry('400x600')
app.config(bg='#f0f0f0')

app.grid_columnconfigure(0, weight=1, minsize=300)

frame1 = ctk.CTkFrame(app, fg_color='#f0f0f0')
frame1.grid(row=0, column=0, padx=10, pady=10, sticky="ew")

title = ctk.CTkLabel(frame1, text='Todo App', font=('Helvetica', 20))
title.grid(row=0, column=0, padx=10, pady=10, sticky="w")

frame2 = ctk.CTkFrame(app, fg_color='#f0f0f0')
frame2.grid(row=1, column=0, padx=10, pady=10, sticky="ew")
frame2.grid_columnconfigure(0, weight=1)
frame2.grid_columnconfigure(1, weight=0)
frame2.grid_columnconfigure(2, weight=0)
    
frame3 = ctk.CTkFrame(app, fg_color='#f0f0f0')
frame3.grid(row=2, column=0, padx=10, pady=10, sticky="ew")
frame3.grid_columnconfigure(0, weight=1)
frame3.grid_columnconfigure(1, weight=0)

#input to add new todo
entry = ctk.CTkEntry(frame3)
entry.grid(row=0, column=0, padx=10, pady=10, sticky="ew")
date_entry = DateEntry(frame3, width=12, date_pattern="dd-mm-y")
date_entry.grid(row=0, column=1, padx=10, pady=5, sticky='e')
add_button = ctk.CTkButton(frame3, text='Add todo', command=lambda: create_todo(entry.get()))
add_button.grid(row=1, column=0, padx=10, pady=10, sticky="w")

def clear_todos():
    for widget in frame2.winfo_children():
        widget.destroy()

def show_todos():
    todos = read()
    for i, todo in enumerate(todos):
        # Todo anzeigen
        label = ctk.CTkLabel(frame2, text=todo['title'], text_color='black', font=('Helvetica', 16))
        label.grid(row=i, column=0, padx=10, pady=5, sticky="w")
        
        # Datum anzeigen
        date = datetime.strptime(todo['date'], '%Y-%m-%d')
        date_now = datetime.now()
        date_label_color = 'black'
        #Schaue ob das Datum heute ist oder in der vergagngenheit
        if date_now >= date:
            date_label_color = 'red'
        
        label = ctk.CTkLabel(frame2, text=todo['date'], text_color=date_label_color, font=('Helvetica', 16))
        label.grid(row=i, column=1, padx=10, pady=5, sticky="w")
        
        # Ob erledigt anzeigen
        checkbox = ctk.CTkCheckBox(frame2, text='', width=20, height=20, fg_color='green', command=lambda t=todo: toggle_completed(t))
        checkbox.grid(row=i, column=2, padx=10, pady=5, sticky='e')
        
        if todo['completed'] is True:
            checkbox.select()
        
        # Button zum löschen des Todo
        delete_button = ctk.CTkButton(frame2, text='X', command=lambda id=todo['id']: delete_todo(id), fg_color='red', width=20, height=20)
        delete_button.grid(row=i, column=3, padx=10, pady=5, sticky='e')
        
def rerender_todos():
    clear_todos()
    show_todos()

def create_todo(text):
    date = date_entry.get_date()
    create(text, date)
    rerender_todos()
    
def delete_todo(todo_id):
    delete(todo_id)
    rerender_todos()
    
def toggle_completed(todo):
    if todo['completed'] is True:
        todo['completed'] = False
    else:
       todo['completed'] = True
       
    update(todo)
    rerender_todos()

show_todos()


app.mainloop()