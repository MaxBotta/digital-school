
''' 
while loops 
With the while loop we can execute a set of statements as 
long as a condition is true.
'''

index = 0
while index < 100:
    index += 1
    print('index: ', index)
    
'''
for loop
With the for loop we can execute a set of statements, 
once for each item in a list, tuple, set etc.
'''
names = ['Max', 'Moritz', 'Monika', 'Marta', 'Mia']
for name in names:
    
    if name == 'Moritz':
        continue
    
    print('name: ', name)
    
    if name == 'Marta':
        break
    
for x in range(3, 10):
    print('x: ', x)
    
    

