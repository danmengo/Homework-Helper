elements = {'C': 12.01,
           'H': 1.01,
           'O': 16.00,
           'Cl': 35.45,
           'Br': 79.90,
           'Na': 22.99,
           'I': 19.00,
           'S': 129.90,
           'K':39.10,
           'S': 32.07,
           'N': 14.01
            }

def calculate_mass(formula):

    current_element = ''
    mass = 0
    element_count = 0
    try:
        for char in formula:
            if char.isalpha():
                if current_element:
                    mass += elements[current_element] * (element_count if element_count else 1)
                current_element = char
                element_count = 0
            elif char.isdigit():
                element_count = element_count * 10 + int(char)
        if current_element:
            mass += elements[current_element] * (element_count if element_count else 1)
        
        return mass
    except:
        return "Invalid compound"

input_element = input("Enter compound: ")

while (input_element != 'q'):

    print(f'{input_element}: {calculate_mass(input_element.upper())}')
    input_element = input("Enter compound or q to quit: ")
