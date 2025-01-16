import customtkinter as ctk
from crud import read, delete

app = ctk.CTk()
# app.geometry('400x600')

title = ctk.CTkLabel(app, text="Todo App", font=('Helvetica', 20))
title.grid(row=0, column=0, padx=10, pady=10, sticky="w")

#Frame für Todos anlegen
todos_frame = ctk.CTkFrame(app)
todos_frame.grid(row=1, column=0, padx=10, pady=10, sticky="w")


#Frame für Eingabe anlegen
input_frame = ctk.CTkFrame(app)
input_frame.grid(row=2, column=0, padx=10, pady=10, sticky="w")

entry = ctk.CTkEntry(input_frame)
entry.grid(row=0, column=0, padx=10, pady=10, sticky="w")


add_button = ctk.CTkButton(input_frame, text="Add todo")
add_button.grid(row=0, column=1, padx=10, pady=10, sticky="w")

def create_todos():
    todos = read()
    for index, todo in enumerate(todos):
        todo_label = ctk.CTkLabel(todos_frame, text=todo['task'])
        todo_label.grid(row=index, column=0, padx=10, pady=5, sticky="w")
        checkbox = ctk.CTkCheckBox(todos_frame, text="", width=22, height=22, fg_color="green")
        checkbox.grid(row=index, column=1, padx=10, pady=5, sticky="e")
        delete_button = ctk.CTkButton(todos_frame, text="X", width=22, height=22, command=lambda id=todo['id']: delete(id))
        delete_button.grid(row=index, column=2, padx=10, pady=5, sticky="e")
        
create_todos()


app.mainloop()