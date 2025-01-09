import json

def read():
    with open("todos.json") as file:
        data = json.load(file)
        return data["todos"]