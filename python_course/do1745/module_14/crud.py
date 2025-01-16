import json

path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/do1745/module_14/todos.json"

def read():
    with open(path) as file:
        data = json.load(file)
        return data["todos"]
    
def delete(id):
    todos = read()
    
    #finde das Todo mit der richtigen id und löschen es
    for index, todo in enumerate(todos):
        if todo['id'] is id:
            todos.pop(index)
            break
        
    with open(path, 'w') as file:
        new_data = {
            "todos": todos
        }
        json.dump(new_data, file)