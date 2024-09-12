'''
Create a program that calculates and prints the total cost 
of purchasing three items. You know the price of each item, 
and you want to calculate the sum.  
'''

apple = 1
banana = 1.5
pineapple = 3

all_items = [apple, banana, pineapple]
sum = 0

for item in all_items:
    sum = sum + item
    
print("total price: ", sum)
    