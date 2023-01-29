def decorator(function):
    def wrapper():
        return "--- " + function().upper() + " ---"
    print("Wrapper function initiated")
    return wrapper

def hello():
    return 'hello'

if __name__ == '__main__':
    upper_hello = decorator(hello)
    print("Simple hello: ", hello())
    print("Mega hello: ", upper_hello())







