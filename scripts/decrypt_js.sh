#!/bin/sh

# reverse engineered from the NativeConnectServer.dll
openssl aes-128-cbc -d -in js/ti30xprosmartview-min.js -out js/ti30xprosmartview-min-dec.js -iv AB2CD182AC895CD79645BBD0AEF33365 -K CA10B9BB2906DA2166D5470ED3E180D3
