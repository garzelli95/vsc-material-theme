nterms = int(input("How many terms? "))

first_name = "John"
print("Hello {}, hope you're well!".format(first_name))
print('%s whi %d' % (name, number))

# first two terms
n1, n2 = 0, 1
count = 0

name = __name__
boln = True

# check if the number of terms is valid
if nterms is not None and nterms <= 0:
    print("Please enter \n a positive integer")
# if there is only one term, return n1
elif nterms == 1:
    print("Fibonacci sequence upto",nterms,":")
    print(n1)
# generate fibonacci sequence
else:
    print(f"Fibonacci {count * 2} sequence:")
    while count < nterms:
        print(n1)
        nth = n1 + n2
        # update values
        n1 = n2
        n2 = nth
        count += 1
