import json

path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/sa10/module_12/todo_app/todos.json"

def read():
    with open(path, 'r') as file:
        data = json.load(file)
        return data["todos"]
    
def create(new_todo_text):
    todos = read()
    
    with open(path, 'w') as file:
        
        new_todo = {
            'title': new_todo_text, 
            'completed': False
        }
        
        todos.append(new_todo)
        
        data = {
            "todos": todos
        }
        
        json.dump(data, file)

def update():
    pass

def delete():
    pass