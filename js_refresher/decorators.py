def decorator(function):
    def wrapper():
        return "--- " + function().upper() + " ---"
    print("Wrapper function initiated")
    return wrapper

def hello():
    return 'hello'

upper_hello = decorator(hello)






