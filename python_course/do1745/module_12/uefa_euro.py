

file = open('/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/do1745/module_12/uefa_euro.txt', 'r')

for line in file:
    line = line.rstrip('\n')
    seperated = line.split('/')
    print('year: ', seperated[0])
    print('countries: ', seperated[1])
    print('score: ', seperated[2])
    print('------------------------')