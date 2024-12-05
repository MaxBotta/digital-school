from ast import main
from tkinter import Tk, simpledialog, messagebox, mainloop

root = Tk()

root.withdraw()

path = '/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/do1745/module_12'

def find_game(input_year):
    file = open(f'{path}/uefa_euro.txt', 'r')
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

def write_year(year, countries, score):
    file = open(f'{path}/uefa_euro.txt', 'a')
    file.write('\n')
    file.write(f'{year}/{countries}/{score}')
    file.close()

def init_app():
    user_year = simpledialog.askstring('Year', 'type in a year')
    year, countries, score = find_game(user_year)
    
    if score == None:
        user_input = simpledialog.askstring('Result', f'No result found for the year {user_year}, would you like to add a result? y/n')
        
        if user_input == 'y':
            countries = simpledialog.askstring('Countries', 'Type in the countries')
            score = simpledialog.askstring('Score', 'Type in the score')
            write_year(user_year, countries, score)
            messagebox.showinfo('Result', 'The result of the year ' + user_year + ' was ' + countries + ' with a score of ' + score)
    else:
        messagebox.showinfo('Result', 'The result of the year ' + year + ' was ' + countries + ' with a score of ' + score)

init_app()

mainloop()