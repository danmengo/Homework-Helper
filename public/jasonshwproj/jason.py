def list_numbers(formula) -> list:
    numbers = []
    current_num = ""
    for each in formula:
        if each.isalpha():
            if current_num:
                numbers.append(current_num)
            numbers.append(each)
            current_num = ""
        elif each.isdigit():
            current_num += each

    if current_num:
        numbers.append(current_num)
    return numbers

def list_elements(formula) -> list:
    together_num = list_numbers(formula)
    elements = []
    current_element = ""
    for each in together_num:
        if each.isalpha():
            if each.isupper():
                if current_element:
                    elements.append(current_element)
                current_element = ""
                current_element += each
            elif each.islower():
                current_element += each
        
        elif each.isdigit():
            if current_element:
                elements.append(current_element)
            current_element = ""
            elements.append(each)
        
    if current_element:
        elements.append(current_element)
    return elements

def element_counts(formula) -> dict:
    element_list = list_elements(formula)
    counts = []
    counts_dict = {}

    for i in range(len(element_list)):
        if element_list[i].isalpha():
            counts.append(element_list[i])
            if i < len(element_list) - 1:
                if element_list[i + 1].isalpha():
                    counts.append("1")
            elif i == len(element_list) - 1:
                counts.append("1")

        elif element_list[i].isdigit():
            counts.append(element_list[i])
    
    for i in range(len(counts)):
        if counts[i].isalpha():
            if counts[i] in counts_dict:
                counts_dict[counts[i]] += int(counts[i + 1])
            else:
                counts_dict[counts[i]] = int(counts[i + 1])
    
    return counts_dict

user_input = input("Input formula / q to quit: ")

elements = {
        'C': 12.01,
        'H': 1.01,
        'O': 16.00,
        'Cl': 35.45,
        'Br': 79.90,
        'Na': 22.99,
        'F': 19.00,
        'I': 129.90,
        'K':39.10,
        'S': 32.07,
        'N': 14.01
        }

while (user_input != 'q'):
    try:
        counts = element_counts(user_input)
        maths = []
        total = 0
        for key, value in counts.items():
            total += elements[key] * value
            maths.append(f'({elements[key]:.2f}g*{value})')

        show_work = "+".join(maths)
        print(f'({user_input})', end=" - ")
        print(show_work, end="")
        print(f' = {total:.2f}g/mol')
        strung = f'({user_input}) " - " {show_work} = {total:.2f}g/mol'
      
    except:
        print("Invalid formula")
    user_input = input("Input formula / q to quit: ")

