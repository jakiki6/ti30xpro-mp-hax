#!/bin/sh
cd "$(dirname $0)/.."

for i in prio pro plus; do
    python3 pyu8disas/main.py -l disas/labels_$i -o disas/$i.asm roms/$i.bin
done;
