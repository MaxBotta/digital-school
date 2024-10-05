
# Text im Terminal anzeigen
print("Hello World!")

# Text in einer Variablen speichern
text = "Es ist ein schöner Tag!" # String
print(text)

# Text in Variable speichern und später ändern
text = "Das ist ein anderer Text."
print(text)

# Text und Variable kombinieren
name = "Max"
print("Guten Morgen " + name + "!")

# Zahlen in Variablen speichern und mit Wörtern kombinieren
temperature = 18 # Integer
rain = 0.2      # Float
sky = "bewölkt" # String

print("Die Temperatur beträgt " + str(temperature) + 
      " Grad Celsius. Die Regenwahrscheinlichkeit liegt bei " + str(rain * 100) + 
      " Prozent. Der Himmel ist " + sky + ".") 

# If Abfragen
if temperature < 0:
    print("Es ist sehr kalt.")
elif temperature < 10:
    print("Es ist kalt.")
elif temperature < 18:
    print("Es ist kühl.")
else: 
    print("Es ist warm.")