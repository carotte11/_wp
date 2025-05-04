def most_common(nums):
    count_dict = {}  

    for i in nums:
        if i in count_dict:
            count_dict[i] += 1
        else:
            count_dict[i] = 1

    max_count = 0
    most_common_num = None

    for i , count in count_dict.items():
        if count > max_count:
            max_count = count
            most_common_num = i

    return most_common_num


print(most_common([1, 3, 3, 4, 7, 9, 1, 4, 1])) 
