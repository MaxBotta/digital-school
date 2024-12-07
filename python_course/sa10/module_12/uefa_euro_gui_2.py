from tkinter import Tk, Label, Button, Entry

root = Tk()

#Set the geometry of the Tkinter frame
root.geometry("400x250")

label = Label(root, text="What would you like to do?", font=("Helvetica", 14))
label.pack(pady=10)

button_find = Button(root, text="Find year", font=("Helvetica", 14))
button_find.pack(pady=10)

button_add = Button(root, text="Add year", font=("Helvetica", 14))
button_add.pack(pady=10)

path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/sa10/module_12/"

def find_year(input_year):
    file = open(path + "uefa_euro.txt", "r")
    for line in file:
        cleaned_up = line.rstrip('\n')
        splitted = cleaned_up.split("/")
        year = splitted[0]
        countries = splitted[1]
        result = splitted[2]
        
        if year == str(input_year):
            file.close()
            return year, countries, result
    
    file.close()
    return None, None, None
    

def add_year(year, countries, result):
    file = open(path + "uefa_euro.txt", "a")
    file.write("\n")
    file.write(f"{year}/{countries}/{result}")
    file.close()
    

def show_add_year():
    label.config(text="You have selected to add a year.")
    
    entry_year = Entry(root, text="year", font=("Helvetica", 14))
    entry_year.pack(pady=10)
    entry_countries = Entry(root, text="country1-country2", font=("Helvetica", 14))
    entry_countries.pack(pady=10)
    entry_result = Entry(root, text="result1-result2", font=("Helvetica", 14))
    entry_result.pack(pady=10)
    button_submit = Button(root, text="Submit", font=("Helvetica", 14))
    button_submit.pack(pady=10)
    
    entry_year.insert(0, "year")
    entry_countries.insert(0, "country1-country2")
    entry_result.insert(0, "result1-result2")
    
    
    def remove_and_add_year():
        entry_year.pack_forget()
        entry_countries.pack_forget()
        entry_result.pack_forget()
        button_submit.pack_forget()
        add_year(entry_year.get(), entry_countries.get(), entry_result.get())
        button_find.config(state="normal")
        button_add.config(state="normal")
        
    button_find.config(state="disabled")
    button_add.config(state="disabled")
    button_submit.config(command=remove_and_add_year)
    

     
button_add.config(command=show_add_year)



root.mainloop()
