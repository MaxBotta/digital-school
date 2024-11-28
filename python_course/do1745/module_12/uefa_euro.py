from tkinter import Tk, simpledialog, messagebox

root = Tk()

root.withdraw()

def find_game(input_year):
    file = open('/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/do1745/module_12/uefa_euro.txt', 'r')
    for line in file:
        line = line.rstrip('\n')
        seperated = line.split('/')
        year = seperated[0]
        country = seperated[1]
        score = seperated[2]
        
        if year == input_year:
            file.close()
            return year, country, score
    
    return None, None, None

def init_app():
    user_year = simpledialog.askstring('Year', 'type in a year')
    year, countries, score = find_game(user_year)
    
    if score == None:
        messagebox.showinfo('Result', 'No result found for the year ' + user_year)
    else:
        messagebox.showinfo('Result', 'The result of the year ' + year + ' was ' + countries + ' with a score of ' + score)

init_app()