
#functions

def hello_world():
    print("Hello World!")
    
def print_ln(text):
    print(text, end='')

def print_n(text):
    print('')
    print(text, end='\n')
    
print_ln("Hello")
print_ln(" World!")
print_n('Next line')


def add_numbers(a, b):
    return a + b

my_number = add_numbers(3, 4)


# built in functions
print('Hello')

print(min(1, 2, 3, 4, 5))
print(max(1, 2, 3, 4, 5))

my_list = [1, 2, 3, 4, 5]
print(sum(my_list))
print(len(my_list))

# function with counts the length of a list
def length(list):
    count = 0
    for i in list:
        count += 1
    return count

print(length(my_list))

# arbitrary length of arguments
def add_numbers(*numbers):
    sum = 0
    for number in numbers:
        if type(number) != int:
            return False
        sum += number
    return sum

add_numbers(4,7,6,3,5,6,3,4,6,8, 'hello')