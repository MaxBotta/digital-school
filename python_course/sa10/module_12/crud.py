path = "/Users/maxbotta/Desktop/Berlitz/DigitalSchool/python_course/sa10/module_12/"

def create(year, countries, result):
    file = open(path + "uefa_euro.txt", "a")
    file.write("\n")
    file.write(f"{year}/{countries}/{result}")
    file.close()

def read(input_year):
    file = open(path + "uefa_euro.txt", "r")
    for line in file:
        cleaned_up = line.rstrip('\n')
        splitted = cleaned_up.split("/")
        year = splitted[0]
        countries = splitted[1]
        result = splitted[2]
        
        if year == str(input_year):
            file.close()
            return year, countries, result
    
    file.close()
    return None, None, None

def update():
    pass

def delete():
    pass