'''
Write a Python program that defines a function 
called count_vowels that takes a string as an argument. 
The function should count and print the number of vowels 
(a, e, i, o, u) in the provided string.
'''

def count_vowels(text):
    vowel_count = 0
    for letter in text:
        if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
            vowel_count += 1
    print(f'Die Anzahl der Vokale beträgt: {vowel_count}')
    
text = input('Schreibe einen Satz: ')
count_vowels(text)