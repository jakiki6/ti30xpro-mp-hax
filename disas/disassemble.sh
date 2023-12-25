#!/bin/sh
cd "$(dirname $0)/.."

lua disas/disassembler.lua input='roms/pro.bin' output='disas/pro.asm' entry='1' addresses='true' word_commands='true' rom_window='0xffff' names=<(cat 'disas/labels' 'disas/labels_sfr')
