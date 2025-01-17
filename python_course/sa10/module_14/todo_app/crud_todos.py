import json

path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/sa10/module_14/todo_app/todos.json"

def read():
    with open(path, 'r') as file:
        data = json.load(file)
        return data["todos"]
    
def create(new_todo_text, date):
    todos = read()
    
    # Find the highest id
    highest_id = 0
    for todo in todos:
        if todo['id'] > highest_id:
            highest_id = todo['id']
    
    with open(path, 'w') as file:
        
        new_todo = {
            'id': highest_id + 1,
            'title': new_todo_text, 
            'completed': False,
            'date': str(date)
        }
        
        todos.append(new_todo)
        
        data = {
            "todos": todos
        }
        
        json.dump(data, file)

def update(todo):
    todos = read()
    
    #replace old todo with new one
    for i, t in enumerate(todos):
        if t['id'] == todo['id']:
            todos[i] = todo
    
    with open(path, 'w') as file:    
        data = {
            "todos": todos
        }
        json.dump(data, file)

def delete(id):
    todos = read()
    
    for todo in todos:
        if todo['id'] == id:
            todos.remove(todo)
            
    with open(path, 'w') as file:
        data = {
            "todos": todos
        }
        json.dump(data, file)
    