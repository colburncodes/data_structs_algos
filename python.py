ratings = [91, 35, 65, 89, 78, 93]

for rating in ratings:
    if 0 <= rating <= 59:
        print('Rating 2: 0 to 59 points', rating, "\n")
    elif 60 <= rating <= 72:
        print('Rating 3: 60 to 72 points', rating, "\n")
    elif 73 <= rating <= 84:
        print('Rating 4: 73 to 84 points', rating, "\n")
    elif 85 <= rating <= 100:
        print('Rating 5: 85 to 100 points', rating, "\n")
    else:
        print("Rating Not Defined")