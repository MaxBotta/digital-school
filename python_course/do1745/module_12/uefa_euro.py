from tkinter import Tk, simpledialog, messagebox

root = Tk()

messagebox.showinfo('Test', 'Hallo Welt')

user_year = simpledialog.askstring('Year', 'type in a year')

def find_game(year):
    file = open('/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/do1745/module_12/uefa_euro.txt', 'r')
    for line in file:
        line = line.rstrip('\n')
        seperated = line.split('/')
        print('year: ', seperated[0])
        print('countries: ', seperated[1])
        print('score: ', seperated[2])
        print('------------------------')
        
    return seperated[0], seperated[1]

countries, score = find_game(user_year)