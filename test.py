# persons = [
#   "Jake",
#   "Liz",
#   "Max",
#   "Rob",
#   "Zakia"
# ]
#
# greetings = {
#    'formal': 'Splendid to see you this fine day',
#   'relaxed': "S'up <head nod>",
#   'excited': "OMG HELLO HELLO HELLO AAAARRRRGGGGGH",
# }
#
# def greet(personarray, greetdict,  personindex, greetkey):
#   print("%s, %s!" % (greetdict[greetkey], personarray[personindex]))
#
# greet(persons,  greetings, 2, 'formal')


string = 'bananas'
counts_dict = {}
for char in string:
    counts_dict[char] = counts_dict[char] + 1
print(counts_dict)
