def summary(data):
    for students in data:
        name = students['name']
        scores = students['scores']
        total = sum(scores)
        avg = total / len(scores)
        print(f"{name}, total : {total}, average : {avg:.2f}")

students = [{'name' : 'Alice', 'scores' : [90, 80, 70]}, {'name' : 'Bob', 'scores' : [100, 85, 95]}]
summary(students)
