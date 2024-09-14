# Modul 2

#comments can be written with #

#variables and types
int_number = 10 #int
float_number = 8.8 #float
string_word = "Hallo Welt" #str
my_bool = True #bool
my_list = [int_number, float_number, string_word, my_bool] #list

print(type(int_number))
print(type(float_number))
print(type(string_word))
print(type(my_bool))
print(type(my_list))

#naming conventions
helloWorld = "Hello World" #WRONG camelCase

hello_world = "Hello World" #RIGHT snake_case

#Symbols such as -, /, #, or @ aren’t allowed!!!


#casting
float_to_int = int(float_number)
print(float_to_int)

float_to_string = str(float_number)
print(float_to_string + " " + string_word)

#lists
todos = ["go to school", "study", "sleep", "sport", "clean up"]

print(todos)

todo_3 = todos[3]
print(todo_3)

for todo in todos:
    print(todo)

    