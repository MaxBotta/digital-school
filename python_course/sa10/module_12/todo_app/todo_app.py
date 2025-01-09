from crud_todos import read, create, delete
import customtkinter as ctk

app = ctk.CTk()

app.geometry('400x600')
app.config(bg='white')

todo_elements = []

frame1 = ctk.CTkFrame(app, fg_color='white')
frame1.grid(row=0, column=0, padx=10, pady=10, sticky="w")

title = ctk.CTkLabel(frame1, text='Todo App', font=('Helvetica', 20))
title.grid(row=0, column=0, padx=10, pady=10, sticky="w")

frame2 = ctk.CTkFrame(app, fg_color='white')
frame2.grid(row=1, column=0, padx=10, pady=10, sticky="w")

todos = read()
for i, todo in enumerate(todos):
    label = ctk.CTkLabel(frame2, text=todo['title'])
    label.grid(row=i, column=0, padx=10, pady=5, sticky="w")
    todo_elements.append(label)
    delete_button = ctk.CTkButton(frame2, text='Delete', command=lambda id=todo['id']: delete(id))
    delete_button.grid(row=i, column=1, padx=10, pady=5)
    todo_elements.append(delete_button)
    
frame3 = ctk.CTkFrame(app, fg_color='white')
frame3.grid(row=2, column=0, padx=10, pady=10, sticky="w")

entry = ctk.CTkEntry(frame3)
entry.grid(row=0, column=0, padx=10, pady=10, sticky="ew")

def create_todo_and_udpate():
    create(entry.get())
    update()

add_button = ctk.CTkButton(frame3, text='Add todo', command=lambda: create(entry.get()))
add_button.grid(row=0, column=1, padx=10, pady=10, sticky="w")

#update after new todo
def update():
    global todos
    todos = read()
    
    #delete all todos
    for element in todo_elements:
        element.destroy()
        
    for i, todo in enumerate(todos):
        label = ctk.CTkLabel(frame2, text=todo['title'])
        label.grid(row=i + 1, column=0, padx=10, pady=5, sticky="w")
        button = ctk.CTkButton(frame2, text='Delete')
        button.grid(row=i + 1, column=1, padx=10, pady=5)

app.mainloop()