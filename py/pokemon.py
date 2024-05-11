class Pokemon:
    def __init__(self, name, element, life, strength, defense):
        self.name = name
        self.element = element
        self.life = life
        self.strength = strength
        self.defense = defense

    def attack(self, pokemon):
        pokemon.life = pokemon.life - self.strength
        if(pokemon.life <= 0):
            print(pokemon.name + " is dead")
    
    
pikachu = Pokemon("Pikachu", "Electric", 100, 50, 30)
charmander = Pokemon("Charmander", "Fire", 100, 20, 10)

print("Your Pokemon is: " + pikachu.name)
print(pikachu.name + " has " + str(pikachu.life) + " life points")



while True:
    print("---------------------------------")
    options = input("Choose an option: 1 - Attack, 2 - Run")
    print("---------------------------------")
    if(options == "1"):
        pikachu.attack(charmander)
        print(pikachu.name + " attacked " + charmander.name)
        print(charmander.name + " has " + str(charmander.life) + " life points")
