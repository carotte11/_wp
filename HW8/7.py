def dict_to_string(d):
    result = []
    for key in d:
        result.append(f"{key}:{d[key]}")
    return ",".join(result)
    
print(dict_to_string({"a":1, "b":2}))