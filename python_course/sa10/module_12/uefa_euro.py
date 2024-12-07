from tkinter import Tk, simpledialog, messagebox, mainloop
import crud

root = Tk()
root.withdraw()

user_year = str(simpledialog.askinteger("Year", "Enter a year."))
year, counries, result = crud.read(user_year)

if result is None:
    input_answer = simpledialog.askstring("Add Result", f"There was no entry for the year {user_year}. Would you like to add a result? y/n")
    
    if input_answer == "y":
        input_countries = simpledialog.askstring("Countries", "Which countries played? country1-country2")
        input_result = simpledialog.askstring("Countries", "What was the result? 1-0")
        input_correct = simpledialog.askstring("Add Result", f"You added a new result. In the year {user_year} the countries {input_countries} played with a result of {input_result}. Is this correct? y/n")
        
        if input_correct is "y":
             crud.create(user_year, input_countries, input_result)
        
else:
    messagebox.showinfo("Result", f"The result of the UEFA Euro {year} was {counries} with a result of {result}.")


root.mainloop()
