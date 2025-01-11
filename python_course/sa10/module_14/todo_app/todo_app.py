from crud_todos import read, create, delete
import customtkinter as ctk

app = ctk.CTk()

app.geometry('400x600')
# app.config(bg='white')

app.grid_columnconfigure(0, weight=1, minsize=300)

frame1 = ctk.CTkFrame(app, fg_color='white')
frame1.grid(row=0, column=0, padx=10, pady=10, sticky="ew")

title = ctk.CTkLabel(frame1, text='Todo App', font=('Helvetica', 20))
title.grid(row=0, column=0, padx=10, pady=10, sticky="w")

frame2 = ctk.CTkFrame(app, fg_color='white')
frame2.grid(row=1, column=0, padx=10, pady=10, sticky="ew")
frame2.grid_columnconfigure(0, weight=1)
frame2.grid_columnconfigure(1, weight=0)
frame2.grid_columnconfigure(2, weight=0)
    
frame3 = ctk.CTkFrame(app, fg_color='white')
frame3.grid(row=2, column=0, padx=10, pady=10, sticky="ew")
frame3.grid_columnconfigure(0, weight=1)
frame3.grid_columnconfigure(1, weight=0)

#input to add new todo
entry = ctk.CTkEntry(frame3)
entry.grid(row=0, column=0, padx=10, pady=10, sticky="ew")
add_button = ctk.CTkButton(frame3, text='Add todo', command=lambda: create_todo(entry.get()))
add_button.grid(row=0, column=1, padx=10, pady=10, sticky="e")

def clear_todos():
    for widget in frame2.winfo_children():
        widget.destroy()

def show_todos():
    todos = read()
    for i, todo in enumerate(todos):
        label = ctk.CTkLabel(frame2, text=todo['title'])
        label.grid(row=i, column=0, padx=10, pady=5, sticky="w")
        checkbox = ctk.CTkCheckBox(frame2, text='', width=20, height=20, fg_color='green')
        checkbox.grid(row=i, column=1, padx=10, pady=5, sticky='e')
        delete_button = ctk.CTkButton(frame2, text='X', command=lambda id=todo['id']: delete_todo(id), fg_color='red', width=20, height=20)
        delete_button.grid(row=i, column=2, padx=10, pady=5, sticky='e')
        
def update_todos():
    clear_todos()
    show_todos()

def create_todo(text):
    create(text)
    update_todos()
    
def delete_todo(todo_id):
    delete(todo_id)
    update_todos()

show_todos()


app.mainloop()