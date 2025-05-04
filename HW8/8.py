def is_prime(n):
    if n < 2:
        return False
    for a in range(2, n):
        if n % a == 0:
            return False
    return True

print(is_prime(3))
print(is_prime(57))
print(is_prime(19))