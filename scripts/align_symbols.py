#!/usr/bin/env python3
# the purpose of this script is to port a certain offset for a function from one rom to another
# e.g. we have the label memset in one rom
# we can incrementally read n bytes from that offset and search in the other rom until we have exactly 1 match

import sys

if len(sys.argv) != 4:
    print(sys.argv[0], "<known rom>", "<new rom>", "<known offset>")
    exit(1)

offset = eval(sys.argv[3])

with open(sys.argv[1], "rb") as f:
    ref = f.read()

with open(sys.argv[2], "rb") as f:
    new = f.read()

n = 1
while True:
    part = ref[offset:offset+n]
    count = new.count(part)

    if count == 0:
        print("Not found")
        exit(1)
    elif count == 1:
        print(hex(new.index(part)))
        exit(0)

    n += 1
