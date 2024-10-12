'''
The program asks the player questions about the capital cities. 
Users get three chances to answer each question. Correct answer will score one point. 
At the end of the quiz, the player’s final score will be shown. 
For this app we will use variables, functions, if statements and loops.
'''

from random import randint


questions = [
    {
        'question': 'What is the capital city of France?',
        'answer': 'Paris'
    },
    {
        'question': 'What is the capital city of Italy?',
        'answer': 'Rome'
    },
    {
        'question': 'What is the capital city of Spain?',
        'answer': 'Madrid'
    },
    {
        'question': 'What is the capital city of Germany?',
        'answer': 'Berlin'
    },
    {
        'question': 'What is the capital city of Portugal?',
        'answer': 'Lisbon'
    }
]

# Zugriff auf Werte in List of Dictionaries questions[0]['answer']

random_number = randint(0, len(questions) - 1)

question = questions[random_number]['question']