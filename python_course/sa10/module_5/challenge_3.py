'''
Write a Python program that defines a function called count_vowels 
that takes a string as an argument. The function should count and 
print the number of vowels (a, e, i, o, u) in the provided string.
'''


def count_vowels(word):
    vowel_number = 0
    for letter in word:
        if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
            vowel_number += 1
    print('vowels:', vowel_number)

word = input('Type in a word: ')
count_vowels(word)