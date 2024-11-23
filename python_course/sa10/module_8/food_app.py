from recipes import recipes

def start_app():
    print("Welcome to the Food App! I will recommend a recipe for you based on your preferences.")
    
    is_spicy = False
    cuisine = ""
    meal_time = ""
    
    is_spicy_input = input("Do you want to eat spicy? y/n")
    if is_spicy_input == "y":
        is_spicy_input = True
        
    cuisine_input = int(input("What cuisine do you prefer? 1: asian 2: mexican 3: italian"))
    if cuisine_input == 1:
        cuisine = "asian"
    elif cuisine_input == 2:
        cuisine = "mexican"
    elif cuisine_input == 3:
        cuisine = "italian"
        
    #Suche passende Gerichte aus Liste von Gerichten
    fitting_meals = []
    for meal in recipes:
        if meal["spicy"] == is_spicy and meal["cuisine"] == cuisine:
            fitting_meals.insert(meal)
    
    #was wenn Liste leer ist?
    
    #Gebe gefundene Gerichte aus
    print("I recommend the meal", fitting_meals[0])
    print("Nice side dishes: ", fitting_meals[0]["side_dishes"] )
        
start_app()