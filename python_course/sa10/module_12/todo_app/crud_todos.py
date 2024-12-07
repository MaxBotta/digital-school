import json

path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/sa10/module_12/todo_app/todos.json"

def create(new_todo):
    file = open(path, 'w')
    data = json.load(file)
    todos = data["todos"]
    todos.append(new_todo)
    file.write(json.dumps(data))
    file.close()

def read():
    with open(path, 'r') as file:
        data = json.load(file)
        return data["todos"]

def update():
    pass

def delete():
    pass