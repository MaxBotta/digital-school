'''
Create a program that takes individual letters 
from two lists and combines them to form words. 
Print the words you've formed. 
'''

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

hello = [7, 4, 11, 11, 14]
world = [22, 14, 17, 11, 3]

for i in hello:
    print(alphabet[i], end="")
    
print(" ", end="")
    
for i in world:
    print(alphabet[i], end="")
    
print("")
