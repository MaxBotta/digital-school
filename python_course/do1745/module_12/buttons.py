#Import the required Libraries
from tkinter import Label, Button, Tk
import time

#Create an instance of Tkinter frame
win = Tk()

#Set the geometry of the Tkinter frame
win.geometry("750x250")

questions = [
    {
        "question": "What is the capital of Germany?",
        "options": {
            "a": "Berlin",
            "b": "Paris",
            "c": "London"
        },
        "answer": "a"
    },
    {
        "question": "What is the capital of France?",
        "options": {
            "a": "Berlin",
            "b": "Paris",
            "c": "London"
        },
        "answer": "b"
    },
    {
        "question": "What is the capital of England?",
        "options": {
            "a": "Berlin",
            "b": "Paris",
            "c": "London"
        },
        "answer": "c"
    }
]


current_question = 0

#write text into the window
label = Label(win, text="Welcome to the quiz game!", font=("Helvetica", 16))
label.pack(pady=10)

answer_a = Button(win, text = "test")
answer_a.pack(pady=10)

answer_b = Button(win, text = "test")
answer_b.pack(pady=10)

answer_c = Button(win, text = "test")
answer_c.pack(pady=10)

def set_text(label, text):
    label.config(text=text)
    
    #3 seconds to next question
def set_timer():
    for i in range(3):
        label.config(text=str(3-i))
        time.sleep(1)
    
    global current_question
    current_question += 1
    set_question(current_question)

def check_answer(answer):
    if questions[current_question]["answer"] == answer:
        set_text(label, "Correct!")
    else:
        set_text(label, "Wrong!")
    set_timer()

def set_question(index):
    set_text(label, questions[index]["question"])
    answer_a.config(text=questions[index]["options"]["a"], command=check_answer("a"))
    answer_b.config(text=questions[index]["options"]["b"], command=check_answer("b"))
    answer_c.config(text=questions[index]["options"]["c"], command=check_answer("c"))

set_question(current_question)

win.mainloop()