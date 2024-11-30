from tkinter import Tk, simpledialog, messagebox, mainloop

root = Tk()
root.withdraw()

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
    

def write_year(year, countries, result):
    file = open(path + "uefa_euro.txt", "a")
    file.write("\n")
    file.write("2000/France-Italy/2-1")
    file.close()


user_answer = simpledialog.askinteger("Year", "Enter a year.")

year, counries, result = find_year(user_answer)

messagebox.showinfo("Result", f"The result of the UEFA Euro {year} was {counries} with a result of {result}.")




mainloop()
