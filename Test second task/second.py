import os
import hashlib
 
f_names = os.listdir()
 
for i in range(len(f_names)):
    fn = f_names[i]
    f = open(f"{fn}", "r").read()
    s = hashlib.sha3_256()
    s.update(f"{f}".encode('utf-8'))
    print(fn, s.hexdigest())
