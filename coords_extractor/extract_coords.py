# put the google map coords after searching in the links.txt file and run the script.
# link should be in this format: 
# https://www.google.com/maps/place/Shantinagar+Bus+Station/@27.6867841,85.3404746,832m/data=(google_metadata) \n
# The script extracts name from         ^ here and coords from        ^ here.  
# Doesnt work most of the time but oh well, what can you do!

def formatCoords(coords):
    x, y, _ = coords.replace("@", '').split(',')
    return f"{x},{y}"

busStops_list = []
busindices_list = []

with open('links.txt', 'r') as file:
    lines = file.readlines()

    for index, line in enumerate(lines):
        l = line.strip().split("/")
        name = l[5]
        coords = l[6]

        fmt_id = name.replace("(", "").replace(")", '').replace("+", "-")
        fmt_name = name.replace("+", " ")
        fmt_coords = formatCoords(coords)

        otpt = f'{{"id":"{fmt_id}","name":"{fmt_name}","pos":[{fmt_coords}]}}'

        busStops_list.append(otpt)
        busindices_list.append(f"'{fmt_id}'")

busStops = ",\n".join(busStops_list)
busindices = ",".join(busindices_list)



with open("busStops.txt", 'w') as file:
    file.write(busStops)

with open("busindices.txt", 'w') as file:
    file.write(busindices)
