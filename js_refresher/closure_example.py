#!/bin/python3

# Find out till when I have to scale to have a certain MB value

RESX, RESY = 1920, 1080
MB = 1_900_000

def decr(x0):
    def inner():
        nonlocal x0
        inner.val = x0
        x0 -= 1
        return inner.val
    return inner

if __name__ == '__main__':
    x, y = decr(RESX), decr(RESY) 
    total = RESX * RESY
    while (total >= MB): 
        total = x() * y()
        print(f"{x.val}x{y.val} = {total:_} bytes")
