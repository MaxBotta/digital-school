
# functions

def print_hello():
    print('Hello')
    
# parameters
def print_text(text):
    print(text)
    
# return values
def add(a, b):
    return a + b

my_number = add(5, 10)
my_number = add(b=10, a=5)

# arbitrary number of parameters
def add_many(*numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum

my_number = add_many(4,8,5,2,8,5)


# built in functions
print('Hello')

min_number = min(5, 10, 15)
print(min_number)
max_number = max(5, 10, 15)
print(max_number)

my_sum = sum([1, 2, 3, 4, 5])
print(my_sum)

numbers = range(1, 11)
my_sum = sum(numbers)
print(my_sum)