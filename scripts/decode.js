function rlePlusStringToArray(_0x812a13, _0xf818a9) {
                        const _0x31c760 = 'RLE_NUMERIC';
                        let _0x473b66, _0x189052 = 0x0, 
                            _0x463ebe = 0x0, 
                            _0x20d7f0, _0x40c383 = 0x0, 
                            _0x3324db = 0x0, 
                            _0x36dddc = 0x0, 
                            _0x513d7f = 0x0, 
                            _0x1a9902 = 0x0, 
                            _0x16a4e8, _0x2f566e = '#' ['charAt'](0x0),
                            _0x54735a = '#' ['charCodeAt'](0x0),
                            _0x2c143d = 0x1; 
                        if (typeof _0x812a13 === 'undefined' || _0x812a13 == null) return new Uint8Array(0x0);
                        _0x3324db = _0x812a13['length'];
                        _0xf818a9 ? _0x473b66 = new Array(_0xf818a9) : _0x473b66 = [];
                        if (_0x812a13['substring'](0x0, _0x31c760['length']) === _0x31c760) {
                            _0x812a13 = Buffer['from'](_0x812a13['substring'](_0x31c760['length']), 'base64')['toString'](), _0x3324db = _0x812a13['length'], _0x16a4e8 = _0x812a13['charCodeAt'](_0x1a9902);
                            _0x16a4e8 === _0x54735a && _0x812a13['charAt'](_0x1a9902) === _0x2f566e && _0x1a9902++;
                            _0x1a9902++;
                            _0x812a13['charAt'](_0x1a9902) === '#' && _0x812a13['charAt'](_0x1a9902 + 0x1) !== '#' && (_0x1a9902++, _0x2c143d = parseInt(_0x812a13['substring'](_0x1a9902, _0x812a13['indexOf']('#', _0x1a9902)), 0xa), _0x1a9902 = _0x812a13['indexOf']('#', _0x1a9902) + 0x1);
                            while (_0x1a9902 < _0x3324db || _0x2c143d > 0x0) {
                                if (_0x2c143d <= 0x0) {
                                    _0x16a4e8 = _0x812a13['charCodeAt'](_0x1a9902), _0x1a9902++;
                                    _0x16a4e8 === _0x54735a && _0x812a13['charAt'](_0x1a9902) === '#' && _0x1a9902++;
                                    if (_0x1a9902 >= _0x3324db) {
                                        _0xf818a9 ? _0x473b66[_0x36dddc++] = _0x16a4e8 : _0x473b66['push'](_0x16a4e8);
                                        continue;
                                    }    
                                    _0x812a13['charAt'](_0x1a9902) === '#' && _0x812a13['charAt'](_0x1a9902 + 0x1) !== '#' && (_0x1a9902++, _0x2c143d = parseInt(_0x812a13['substring'](_0x1a9902, _0x812a13['indexOf']('#', _0x1a9902)), 0xa), _0x1a9902 = _0x812a13['indexOf']('#', _0x1a9902) + 0x1);
                                }    
                                _0xf818a9 ? _0x473b66[_0x36dddc++] = _0x16a4e8 : _0x473b66['push'](_0x16a4e8), _0x2c143d--;
                            }    
                            return Uint8Array['from'](_0x473b66);
                        }    
                        for (_0x40c383; _0x40c383 < _0x3324db; _0x40c383 += 0x2) {
                            if (_0x812a13[_0x40c383] === '#') {
                                _0x189052 = _0x812a13['indexOf']('#', _0x40c383 + 0x1), _0x463ebe = parseInt(_0x812a13['substring'](_0x40c383 + 0x1, _0x189052), 0xa);
                                for (_0x513d7f = 0x1; _0x513d7f < _0x463ebe; _0x513d7f++) {
                                    _0xf818a9 ? _0x473b66[_0x36dddc++] = _0x20d7f0 : _0x473b66['push'](_0x20d7f0);
                                }    
                                _0x40c383 = _0x189052 + 0x1; 
                            }    
                            _0x40c383 < _0x3324db && (_0x20d7f0 = parseInt(_0x812a13['substring'](_0x40c383, _0x40c383 + 0x2), 0x10), _0xf818a9 ? _0x473b66[_0x36dddc++] = _0x20d7f0 : _0x473b66['push'](_0x20d7f0));
                        }
                        return Uint8Array['from'](_0x473b66);
                    }

const fs = require('fs');

fs.appendFileSync("e.bin", Buffer.from(rlePlusStringToArray(fs.readFileSync('e.b64').toString())));
