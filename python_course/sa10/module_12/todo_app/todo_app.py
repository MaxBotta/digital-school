from tkinter import Tk, simpledialog, messagebox
from crud_todos import create, read

root = Tk()
root.withdraw()

new_todo = simpledialog.askstring("New Todo", "Enter a new todo.")
create(new_todo)

root.mainloop()