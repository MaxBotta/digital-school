from tinydb import TinyDB, Query
db = TinyDB('db.json')

programclose = False
while programclose == False:
    user_input = input("Choose an option: 1 - Add note, 2 - Show notes, 3 - Delete note, 4 - Delete all, 5 - Exit,")


    if user_input == "1":
        note_input = input("Enter your note: ")

        max_id = 0
        for note in db.all():
            if int(note["id"]) > max_id:
                max_id = int(note["id"])

        db.insert({"note": note_input, "id": max_id + 1})
        

    if user_input == "2":
        all_notes = db.all()

        index = 0
        for note in all_notes:
            index = index + 1
            print(str(index) + ": " + note["note"])


    if user_input == "3":
        all_notes = db.all()

        index = 0
        for note in all_notes:
            index = index + 1
            print(str(index) + ": " + note["note"])

        index_input = input("Which note do you want to delete? (choose number)")
        
        if index_input.isnumeric():
            index = 0
            note_id = None
            for note in all_notes:
                index = index + 1
                if index == index_input:
                    note_id = note["id"]
                    break

            my_query = Query()
            db.remove(my_query.id == note_id)
        else:
            print("Invalid input")


    if user_input == "5":
        programclose = True