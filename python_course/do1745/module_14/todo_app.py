import customtkinter as ctk
from crud import read

app = ctk.CTk()
# app.geometry('400x600')

title = ctk.CTkLabel(app, text="Todo App", font=('Helvetica', 20))
title.grid(row=0, column=0, padx=10, pady=10, sticky="w")

#Frame für Todos anlegen
todos_frame = ctk.CTkFrame(app)
todos_frame.grid(row=1, column=0, padx=10, pady=10, sticky="w")

#Todos in frame einfügen
todo_1 = ctk.CTkLabel(todos_frame, text="Todo 1")
todo_1.grid(row=0, column=0, padx=10, pady=5, sticky="w")
delete_1 = ctk.CTkButton(todos_frame, text="Delete")
delete_1.grid(row=0, column=1, padx=10, pady=5, sticky="e")
delete_1_2 = ctk.CTkButton(todos_frame, text="Delete")
delete_1_2.grid(row=0, column=2, padx=10, pady=5, sticky="e")


todo_2 = ctk.CTkLabel(todos_frame, text="Todo 2")
todo_2.grid(row=1, column=0, padx=10, pady=5, sticky="w")

#Frame für Eingabe anlegen
input_frame = ctk.CTkFrame(app)
input_frame.grid(row=2, column=0, padx=10, pady=10, sticky="w")

entry = ctk.CTkEntry(input_frame)
entry.grid(row=0, column=0, padx=10, pady=10, sticky="w")


add_button = ctk.CTkButton(input_frame, text="Add todo")
add_button.grid(row=0, column=1, padx=10, pady=10, sticky="w")


app.mainloop()