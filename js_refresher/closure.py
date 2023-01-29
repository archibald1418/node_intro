def closure():
    counter = 0
    sheep = '🐑' 
    def inner():
        nonlocal counter # accesses outer variable
        counter += 1
        return f'{counter} {sheep}'
    print("Initialize counter: 0")
    return inner
