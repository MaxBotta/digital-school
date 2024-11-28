from recipes import recipes
from random import randint

def start_app():
    print("Welcome to the Food App! I will recommend a recipe for you based on your preferences.")
    
    is_spicy = False
    cuisine = ""
    meal_time = ""
    
    is_spicy_input = input("Do you want to eat spicy? y/n")
    if is_spicy_input == "y":
        is_spicy = True
        
    cuisine_input = int(input("What cuisine do you prefer? 1: asian 2: mexican 3: italian 4: greek"))
    if cuisine_input == 1:
        cuisine = "asian"
    elif cuisine_input == 2:
        cuisine = "mexican"
    elif cuisine_input == 3:
        cuisine = "italian"
    elif cuisine_input == 4:
        cuisine = "italian"
        
    #Suche passende Gerichte aus Liste von Gerichten
    fitting_meals = []
    for meal in recipes:
        if meal["spicy"] == is_spicy and meal["cuisine"] == cuisine:
            fitting_meals.append(meal)
    
    #was wenn Liste leer ist?
    print(len(fitting_meals))
    
    if len(fitting_meals) == 0:
        print('Sorry I found no meals')
    else:
        random_meal = fitting_meals[randint(0, len(fitting_meals) - 1)]
        
        #Gebe gefundene Gerichte aus
        print("I recommend the meal", random_meal["name"])
        
        #ingridients
        
        #side dishes
        print("Nice side dishes: ", random_meal["side_dishes"])
        
start_app()