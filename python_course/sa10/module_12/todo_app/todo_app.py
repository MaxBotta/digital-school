from tkinter import Tk, Label, Entry, Button, ttk
from crud_todos import read, create

root = Tk()
style = ttk.Style(root)
style.theme_use('aqua')

root.geometry('400x600')

todos = read()
for todo in todos:
    label = ttk.Label(root, text=todo['title'])
    label.pack(pady=10)

entry = ttk.Entry(root)
entry.pack(pady=10)

button = ttk.Button(root, text='Add task', command=lambda: create(entry.get()))
button.pack(pady=10)

root.mainloop()