/*2*/
(function(_0x482166) {
    if (typeof exports === 'object' && typeof module !== 'undefined') module['exports'] = _0x482166();
    else {
        if (typeof define === 'function' && define['amd']) define([], _0x482166);
        else {
            var _0x7fcfbb;
            if (typeof window !== 'undefined') _0x7fcfbb = window;
            else {
                if (typeof global !== 'undefined') _0x7fcfbb = global;
                else typeof self !== 'undefined' ? _0x7fcfbb = self : _0x7fcfbb = this;
            }
            _0x7fcfbb['TIExamCalc'] = _0x482166();
        }
    }
}(function() {
    var _0x2a7b57, _0xc9c0ae, _0xbd9ec4;
    return function() {
        function _0x1db5bb(_0x4b6392, _0x3fc1e1, _0x3f0c3f) {
            function _0x1ffaf9(_0x319f29, _0x72bdf8) {
                if (!_0x3fc1e1[_0x319f29]) {
                    if (!_0x4b6392[_0x319f29]) {
                        var _0x509c16 = 'function' == typeof require && require;
                        if (!_0x72bdf8 && _0x509c16) return _0x509c16(_0x319f29, !0x0);
                        if (_0x29f6a3) return _0x29f6a3(_0x319f29, !0x0);
                        var _0x3ffa73 = new Error('Cannot find module \'' + _0x319f29 + '\'');
                        throw _0x3ffa73['code'] = 'MODULE_NOT_FOUND', _0x3ffa73;
                    }
                    var _0x57ca78 = _0x3fc1e1[_0x319f29] = {
                        'exports': {}
                    };
                    _0x4b6392[_0x319f29][0x0]['call'](_0x57ca78['exports'], function(_0x1bb7f7) {
                        var _0x285bdc = _0x4b6392[_0x319f29][0x1][_0x1bb7f7];
                        return _0x1ffaf9(_0x285bdc || _0x1bb7f7);
                    }, _0x57ca78, _0x57ca78['exports'], _0x1db5bb, _0x4b6392, _0x3fc1e1, _0x3f0c3f);
                }
                return _0x3fc1e1[_0x319f29]['exports'];
            }
            for (var _0x29f6a3 = 'function' == typeof require && require, _0x3e807a = 0x0; _0x3e807a < _0x3f0c3f['length']; _0x3e807a++) _0x1ffaf9(_0x3f0c3f[_0x3e807a]);
            return _0x1ffaf9;
        }
        return _0x1db5bb;
    }()({
        0x1: [function(_0x423724, _0x40355a, _0x476b88) {
            'use strict';
            var _0x3fda27 = this && this['__awaiter'] || function(_0x3e4f06, _0x18e564, _0x23e882, _0x4d25b0) {
                return new(_0x23e882 || (_0x23e882 = Promise))(function(_0x24584f, _0x3853a5) {
                    function _0x28de9b(_0x51cac3) {
                        try {
                            _0xdbfe9f(_0x4d25b0['next'](_0x51cac3));
                        } catch (_0x3ed0aa) {
                            _0x3853a5(_0x3ed0aa);
                        }
                    }

                    function _0x2e7c7e(_0x31cd52) {
                        try {
                            _0xdbfe9f(_0x4d25b0['throw'](_0x31cd52));
                        } catch (_0x1874cd) {
                            _0x3853a5(_0x1874cd);
                        }
                    }

                    function _0xdbfe9f(_0x12964e) {
                        _0x12964e['done'] ? _0x24584f(_0x12964e['value']) : new _0x23e882(function(_0x582f96) {
                            _0x582f96(_0x12964e['value']);
                        })['then'](_0x28de9b, _0x2e7c7e);
                    }
                    _0xdbfe9f((_0x4d25b0 = _0x4d25b0['apply'](_0x3e4f06, _0x18e564 || []))['next']());
                });
            };
            Object['defineProperty'](_0x476b88, '__esModule', {
                'value': !![]
            });
            const _0x18067e = _0x423724('../../../../src/emulators_ts/ASIC'),
                _0x5367c7 = _0x423724('../../../../src/emulators_ts/AbstractBaseEmulator'),
                _0x3a43cf = _0x423724('../../../../src/emulators_ts/Statefiles');
            class _0x31415b extends _0x5367c7['AbstractBaseEmulator'] {
                constructor(_0x18df88) {
                    super(null, null, null, null, _0x18df88), this['currentMetadata'] = new _0x3a43cf['StatefileInfo'](), this['stateString'] = null;
                } ['svErrorHandler'](_0x5c80cc, _0x2331de) {
                    var _0x3d30c3 = typeof app;
                    _0x3d30c3 !== 'undefined' && typeof app['logFromJS'] !== 'undefined' && app['logFromJS'](_0x5c80cc, _0x2331de);
                } ['getScreenCapture']() {
                    return _0x5367c7['AbstractBaseEmulator']['prototype']['getScreen']();
                } ['relSVGKey']() {
                    return this['keypad']['keyUpEvent']();
                } ['sendSVGKey'](_0x3bb863) {
                    return this['keypad']['keyDownEvent'](_0x3bb863);
                } ['sendAndReleaseSVGKey'](_0x537add) {
                    var _0x429539 = !![];
                    return _0x429539 = _0x429539 && this['sendSVGKey'](_0x537add), _0x429539 = _0x429539 && this['relSVGKey'](), _0x429539;
                } ['getStateData'](_0x13583c) {
                    let _0x129232 = new _0x3a43cf['StatefileManager']();
                    return _0x129232['getState']([this['asic'], this['lcd']], {
                        'osversion': this['currentMetadata']['osversion'],
                        'statefiletype': this['currentMetadata']['statefiletype'],
                        'productflavor': this['currentMetadata']['productflavor']
                    })['then'](_0x9428bc => {
                        this['stateString'] = _0x9428bc;
                    }), this['stateString'];
                } ['parseStateData'](_0x7a18de) {
                    console['log']('//TODO: parseStateData Implement me!');
                } ['setStateData'](_0x32c0c2) {
                    return console['log']('//TODO: setStateData Implement me!'), ![];
                } ['clearHighlightedKey']() {
                    return this['keypad']['reset'](), ![];
                } ['launchEmulator'](_0x121e6e, _0x437168, _0x3055bd, _0x1f14ee) {
                    console['log']('//TODO: Implement AbstractSmartviewEmulator.launchEmulator!');
                } ['modifyInsertSVG'](_0x1f5257, _0x2b9e98) {
                    var _0x5091a4 = 'smallcaps',
                        _0x1d5b5c = null,
                        _0x352184 = null,
                        _0x2bee7e, _0x2908d5, _0xf6f917;
                    _0x1d5b5c = document['getElementById'](this['calcModel']), _0x352184 = document['getElementById']('display');
                    for (_0xf6f917 = _0x1d5b5c['classList']['length'] - 0x1; _0xf6f917 >= 0x0; _0xf6f917--) {
                        _0x2bee7e = _0x1d5b5c['classList']['item'](_0xf6f917), _0x2bee7e && (_0x2bee7e['indexOf']('ti_theme_') === 0x0 || _0x2bee7e['indexOf']('ti_layout_') === 0x0) && (_0x1d5b5c['classList']['remove'](_0x2bee7e), _0x352184['classList']['remove'](_0x2bee7e));
                    }
                    _0x2b9e98 && (_0x2908d5 = 'ti_theme_' + _0x2b9e98, _0x1d5b5c['classList']['add'](_0x2908d5), _0x352184['classList']['add'](_0x2908d5)), _0x5091a4 && (_0x2908d5 = 'ti_layout_' + _0x5091a4, _0x1d5b5c['classList']['add'](_0x2908d5), _0x352184['classList']['add'](_0x2908d5));
                } ['zoom']() {
                    this['keypad']['zoom']();
                } ['initializeFromStatefile'](_0x3c440a) {
                    return new Promise((_0x174518, _0x34eb6b) => {
                        let _0x315ec4 = new _0x3a43cf['StatefileManager']();
                        console['log']('initializeFromStatefile calling setStateFomStatefile'), _0x315ec4['setStateFromStatefile']([this['asic'], this['lcd']], _0x3c440a)['then'](() => {
                            this['currentMetadata'] = _0x3c440a['info'], _0x174518();
                        })['catch'](_0x349c37 => {
                            console['log']('Could not load emulator state'), _0x34eb6b();
                        });
                    });
                } ['boot'](_0x40218a) {
                    console['log']('//TODO: boot Implement me!');
                } ['releaseKey'](_0x5f17c3) {
                    this['keypad']['releaseKey'](_0x5f17c3);
                } ['sendKey'](_0x464683) {
                    this['keypad']['releaseKey'](_0x464683);
                } ['isSafeToClose']() {
                    return console['log']('//TODO: isSafeToClose Implement me!'), !![];
                } ['commStart']() {
                    console['log']('//TODO: commStart Implement me!');
                } ['commEnd']() {
                    console['log']('//TODO: commEnd Implement me!');
                } ['commTrnsStart']() {
                    console['log']('//TODO: commTrnsStart Implement me!');
                } ['commTrnsEnd']() {
                    console['log']('//TODO: commTrnsEnd Implement me!');
                } ['updateDelayValue']() {
                    console['log']('//TODO: updateDelayValue Implement me!');
                } ['sendOnKey']() {
                    return !![];
                } ['isInitializing']() {
                    return this['asic']['getASICState']()['then'](function(_0x3f7405) {
                        return _0x3f7405 === _0x18067e['ASICState']['IDLE'];
                    })['catch'](function() {
                        return !![];
                    }), ![];
                } ['isReadyForKey']() {
                    return console['log']('//TODO: isReadyForKey Implement me!'), !![];
                } ['getEmulatorSVGKeyPrefix']() {
                    return this['calcModel'];
                } ['switchTheme'](_0x2fe5bb) {
                    return super['switchTheme'](_0x2fe5bb), !![];
                } ['setMetadataInfo'](_0x21c56f) {
                    try {
                        _0x21c56f['split'](';')['forEach'](function(_0x4138aa) {
                            var _0x384f6d = _0x4138aa['split'](':');
                            _0x384f6d[0x1] != null && (this['currentMetadata'][_0x384f6d[0x0]] = _0x384f6d[0x1]);
                        }, this);
                    } catch (_0x2bb863) {
                        console['log']('Could not parse metadata');
                    }
                } ['verifyChecksumAndGetMetaInfo'](_0x571c97) {
                    var _0x21a80e = _0x571c97['info'];
                    if (typeof _0x21a80e !== 'undefined') {
                        let _0x208a43 = new _0x3a43cf['StatefileManager'](),
                            _0x6c8c32 = _0x208a43['getMd5String'](_0x571c97);
                        _0x6c8c32 !== _0x21a80e['checksum'] && (console['log']('incorrect checksum found in statefile!' + _0x21a80e['checksum']), _0x21a80e = undefined);
                    } else console['log']('No metadata!');
                    return _0x21a80e;
                } ['getCurrentMetaInfo']() {
                    return this['currentMetadata'];
                } ['ta_sendCommand']() {
                    return _0x3fda27(this, void 0x0, void 0x0, function*() {
                        if (typeof this['taCommand'] !== 'undefined') {
                            console['log']('TACommand received.');
                            let _0x21f96e = this['taCommand']['getTABuffer']()['split'](',')['map'](Number),
                                _0x1389ba = Uint8Array['from'](_0x21f96e),
                                _0x4e5f71 = this['taCommand']['getLengthDesignation']();
                            yield this['isUARTReady']();
                            let _0x31ed56;
                            _0x4e5f71 > 0x0 ? _0x31ed56 = yield this['asic']['setTABuffer'](_0x1389ba, _0x4e5f71): _0x31ed56 = yield this['asic']['setTABuffer'](_0x1389ba), this['taCommand']['setResponse'](_0x31ed56);
                        } else console['log']('TACommand not found!');
                        console['log']('TACommand processed.');
                    });
                } ['isUARTReady']() {
                    return this['uartReadyPromise'];
                }
            }
            _0x476b88['AbstractSmartviewEmulator'] = _0x31415b;
        }, {
            '../../../../src/emulators_ts/ASIC': 0x12,
            '../../../../src/emulators_ts/AbstractBaseEmulator': 0x13,
            '../../../../src/emulators_ts/Statefiles': 0x1b
        }],
        0x2: [function(_0x22d1da, _0x27904e, _0x402d75) {
            'use strict';
            Object['defineProperty'](_0x402d75, '__esModule', {
                'value': !![]
            });
            const _0x4c3c45 = _0x22d1da('../../../../src/emulators_ts/GenericLCDColumnMajor'),
                _0x5b0aa9 = 0xc0,
                _0x2e79f7 = 0x40,
                _0x18f77a = 0x8,
                _0x32739b = 0x2,
                _0x51ed97 = _0x5b0aa9 * _0x32739b,
                _0x50fc0c = (_0x2e79f7 + _0x18f77a) * _0x32739b;
            class _0x40d0ab extends _0x4c3c45['GenericLCDColumnMajor'] {
                constructor(_0x27bfbb, _0x26bfa0) {
                    super(_0x27bfbb, _0x26bfa0), this['lastPartialScreenDataBuffer'] = new Uint8Array(new ArrayBuffer(_0x5b0aa9 * (_0x2e79f7 / 0x8))), this['lastPartialTopIconsBuffer'] = new Uint8Array(new ArrayBuffer(_0x5b0aa9)), this['completeScreenBuffer'] = new Uint8Array(new ArrayBuffer(_0x5b0aa9 * ((_0x2e79f7 + _0x18f77a) / 0x8))), this['refreshTimerInterval'] = 0x2a, this['displayOFF'] = ![];
                } ['create']() {
                    if (!this['created']) {
                        var _0x58d91d = document['getElementById']('calculatorDiv');
                        console['log']('Called create() from GenericScientificLCDForSmartview');
                        let _0x243309 = document['createElement']('div');
                        _0x243309['id'] = 'displayDiv', _0x243309['className'] = 'displayDiv', _0x243309['style']['display'] = this['displayOFF'] ? 'none' : 'block', _0x58d91d['appendChild'](_0x243309);
                        let _0x3dcb15 = document['createElement']('canvas');
                        _0x3dcb15['id'] = 'display', _0x3dcb15['className'] = 'display', _0x3dcb15['width'] = _0x51ed97, _0x3dcb15['height'] = _0x50fc0c, _0x243309['appendChild'](_0x3dcb15), this['canvasContext'] = _0x3dcb15['getContext']('2d'), this['created'] = !![], _0x3dcb15['onmousedown'] = function(_0x40ba9d) {
                            let _0x541989 = typeof app;
                            _0x541989 !== 'undefined' ? app['LCDClickEvent']() : console['log']('app is Undefined, we were not able to init the LCDClickEvent handler!');
                        };
                    }
                } ['start']() {
                    return new Promise((_0x5c25f0, _0xb83f75) => {
                        !this['created'] && (this['create'](), this['refreshTimerID'] = window['setInterval'](() => {
                            if (this['lastCompleteDataString']) {
                                var _0x14842f = typeof app;
                                _0x14842f !== 'undefined' && typeof app['setScreenUnidimentionalDataStrComp'] !== 'undefined' ? app['setScreenUnidimentionalDataStrComp'](this['lastCompleteDataString']) : console['log']('Method not found');
                            }
                        }, this['refreshTimerInterval'])), this['screenChanged'](this['lastPartialScreenDataBuffer']), this['topIconsChanged'](this['topIconsStatus']), _0x5c25f0();
                    });
                } ['setState'](_0x20c754) {
                    if (typeof _0x20c754 !== 'undefined') {
                        let _0x4b5159 = _0x20c754['length'] - this['INDICARTORS_STATUS_LENGTH'],
                            _0x3d3026 = _0x20c754[_0x4b5159++] | _0x20c754[_0x4b5159++] << 0x8 | _0x20c754[_0x4b5159] << 0x10,
                            _0x379d86 = _0x20c754['length'] - this['INDICARTORS_STATUS_LENGTH'];
                        this['lastPartialScreenDataBuffer'] = _0x20c754['subarray'](0x0, _0x379d86), super['saveScreenData'](this['lastPartialScreenDataBuffer']), super['saveTopIconsData'](_0x3d3026), this['buildAllScreenBufferColumnMajor']();
                    }
                } ['screenChanged'](_0x17e0d5) {
                    super['screenChanged'](_0x17e0d5), this['lastPartialScreenDataBuffer'] = _0x17e0d5, this['buildAllScreenBufferColumnMajor']();
                } ['topIconsChanged'](_0x1cd335) {
                    super['topIconsChanged'](_0x1cd335), this['buildAllScreenBufferColumnMajor']();
                } ['buildAllScreenBufferColumnMajor']() {
                    let _0x5760f0 = this['lastPartialTopIconsBuffer'],
                        _0x3193f7 = this['lastPartialScreenDataBuffer'];
                    if (_0x5760f0 && _0x3193f7) {
                        let _0x2d420f = 0x0,
                            _0x494b6f = 0x0,
                            _0x34d95f = (_0x2e79f7 + _0x18f77a) / 0x8,
                            _0x18e3e1 = _0x5b0aa9 * _0x34d95f;
                        this['completeScreenBuffer'][0x0] = _0x5760f0[_0x2d420f++];
                        for (let _0x1af2b3 = 0x1; _0x1af2b3 < _0x18e3e1; _0x1af2b3++) {
                            _0x1af2b3 % _0x34d95f === 0x0 ? this['completeScreenBuffer'][_0x1af2b3] = _0x5760f0[_0x2d420f++] : this['completeScreenBuffer'][_0x1af2b3] = _0x3193f7[_0x494b6f++];
                        }
                        this['lastCompleteDataString'] = this['uint8ToStr'](this['completeScreenBuffer']);
                    } else console['log']('ErRor! Couln\'t build the complete screen buffer, invalid params!!');
                } ['drawIcon'](_0x27b236, _0x57e761, _0x2c1791, _0x18d730) {
                    super['drawIcon'](_0x27b236, _0x57e761, _0x2c1791, _0x18d730);
                    let _0x5daf23 = _0x27b236 > 0x0 ? _0x27b236 / _0x32739b : 0x0;
                    _0x18d730 ? this['lastPartialTopIconsBuffer']['set'](_0x2c1791, _0x5daf23) : this['lastPartialTopIconsBuffer']['fill'](0x0, _0x5daf23, _0x5daf23 + _0x2c1791['length']);
                } ['uint8ToStr'](_0x4ec5f2) {
                    if (_0x4ec5f2 !== null && _0x4ec5f2['length'] > 0x0) {
                        const _0x1e76ef = 0x100,
                            _0x4ada7a = 0x101;
                        let _0xd3b076 = [],
                            _0x2b9097 = 0x0,
                            _0x391d7c = 0x0,
                            _0x3f13ba = _0x4ec5f2[_0x391d7c],
                            _0x52dbb3;
                        while (_0x391d7c < _0x4ec5f2['length']) {
                            _0x3f13ba !== (_0x52dbb3 = _0x4ec5f2[_0x391d7c++]) && (_0xd3b076['push'](_0x3f13ba === 0x0 ? String['fromCharCode'](_0x1e76ef) : String['fromCharCode'](_0x3f13ba)), _0x2b9097 > 0x1 && (_0xd3b076['push'](String['fromCharCode'](_0x4ada7a)), _0xd3b076['push'](_0x2b9097), _0xd3b076['push'](String['fromCharCode'](_0x4ada7a))), _0x2b9097 = 0x0, _0x3f13ba = _0x52dbb3), _0x2b9097++;
                        }
                        _0xd3b076['push'](_0x3f13ba === 0x0 ? String['fromCharCode'](_0x1e76ef) : String['fromCharCode'](_0x3f13ba));
                        _0x2b9097 > 0x1 && (_0xd3b076['push'](String['fromCharCode'](_0x4ada7a)), _0xd3b076['push'](_0x2b9097), _0xd3b076['push'](String['fromCharCode'](_0x4ada7a)));
                        let _0x1f7bae = _0xd3b076['join']('');
                        return _0x1f7bae;
                    } else return console['log']('unit2ToStr with invalid parameter!'), null;
                }
            }
            _0x402d75['GenericScientificLCDForSmartview'] = _0x40d0ab;
        }, {
            '../../../../src/emulators_ts/GenericLCDColumnMajor': 0x19
        }],
        0x3: [function(_0x44a935, _0x3a958a, _0x364e78) {
            'use strict';
            Object['defineProperty'](_0x364e78, '__esModule', {
                'value': !![]
            });
            const _0x404eae = _0x44a935('../../../../src/emulators_ts/LapisASIC');
            class _0x1ec441 extends _0x404eae['LapisASIC'] {
                ['setUpUART']() {
                    return this['mcu']['initUART']();
                } ['setTABuffer'](_0x2ec7ed, _0x2e0614) {
                    return this['mcu']['setTestAutomationBuffer'](_0x2ec7ed, _0x2e0614);
                }
            }
            _0x364e78['LapisASICSmartView'] = _0x1ec441;
        }, {
            '../../../../src/emulators_ts/LapisASIC': 0x1a
        }],
        0x4: [function(_0x2b47a9, _0x5ecc70, _0x4a72ed) {
            'use strict';
            Object['defineProperty'](_0x4a72ed, '__esModule', {
                'value': !![]
            });
            const _0x16d9b0 = _0x2b47a9('../../GenericScientificLCDForSmartview');
            class _0xfaa734 extends _0x16d9b0['GenericScientificLCDForSmartview'] {
                constructor(_0x266d97) {
                    super('TI30XPRO', _0x266d97);
                }
            }
            _0x4a72ed['TI30XProLCD'] = _0xfaa734;
        }, {
            '../../GenericScientificLCDForSmartview': 0x2
        }],
        0x5: [function(_0x3172cc, _0x2a4cfd, _0x3fe980) {
            'use strict';
            Object['defineProperty'](_0x3fe980, '__esModule', {
                'value': !![]
            }), _0x3fe980['TI30XProSVG'] = '<?xml version=\'1.0\' encoding=\'utf-8\'?> <!-- Copyright (c) 2018, by Texas Instruments Incorporated.  All rights reserved. --> <svg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' version=\'1.1\' id=\'TI30XPRO\' x=\'0px\' y=\'0px\' viewBox=\'0 0 264 568\' style=\'enable-background:new 0 0 264 568;\' xml:space=\'preserve\' class=\'TI30XPRO\'><filter id=\'ti-ec-svg-drop-shadow\'><feDropShadow dx=\'0\' dy=\'2\' stdDeviation=\'1\' flood-color=\'#000000\' flood-opacity=\'0.5\'></feDropShadow><feMerge><feMergeNode></feMergeNode><feMergeNode in=\'SourceGraphic\'></feMergeNode></feMerge></filter><filter id=\'ti-ec-svg-drop-shadow-calc-case\'><feDropShadow dx=\'0\' dy=\'3\' stdDeviation=\'2\' flood-color=\'#000000\' flood-opacity=\'0.5\'></feDropShadow><feMerge><feMergeNode></feMergeNode><feMergeNode in=\'SourceGraphic\'></feMergeNode></feMerge></filter><path id=\'TI30XPRO_CALC_CASE\' class=\'ti_calc_case\' d=\'M249.53,557H14.47C9.79,557,6,553.21,6,548.53V11.47C6,6.79,9.79,3,14.47,3  h235.06c4.68,0,8.47,3.79,8.47,8.47v537.06C258,553.21,254.21,557,249.53,557z\'></path><g id=\'TI30XPRO_BRANDING\' class=\'TI30XPRO_BRANDING\'><g id=\'TI30XPRO_CALC_LOGO\' class=\'TI30XPRO_CALC_LOGO\'><path class=\'ti_calc_logo\' d=\'M182.69,41.66c-0.06-1.12-0.12-2.47-0.11-3.47h-0.03c-0.26,0.94-0.58,1.94-0.96,3.05l-1.35,3.9       h-0.75l-1.24-3.83c-0.36-1.13-0.67-2.17-0.88-3.12h-0.02c-0.02,1-0.08,2.35-0.15,3.55l-0.2,3.44h-0.94l0.53-8.03h1.26       l1.31,3.89c0.32,0.99,0.58,1.87,0.77,2.71h0.03c0.19-0.81,0.47-1.69,0.81-2.71l1.36-3.89h1.26l0.48,8.03h-0.96L182.69,41.66z M188.44,45.18l-0.08-0.73h-0.03c-0.31,0.45-0.9,0.86-1.68,0.86c-1.11,0-1.68-0.82-1.68-1.66       c0-1.39,1.18-2.16,3.3-2.15v-0.12c0-0.48-0.12-1.33-1.25-1.33c-0.51,0-1.04,0.17-1.43,0.43l-0.23-0.69       c0.45-0.31,1.11-0.51,1.8-0.51c1.68,0,2.09,1.2,2.09,2.36v2.16c0,0.5,0.02,0.99,0.09,1.38H188.44z M188.29,42.24       c-1.09-0.02-2.33,0.18-2.33,1.3c0,0.68,0.43,1,0.94,1c0.71,0,1.17-0.48,1.33-0.97c0.03-0.11,0.06-0.23,0.06-0.33V42.24z M192.03,37.76v1.66h1.43v0.8h-1.43v3.11c0,0.71,0.19,1.12,0.75,1.12c0.26,0,0.45-0.04,0.58-0.07       l0.05,0.79c-0.19,0.08-0.5,0.14-0.89,0.14c-0.47,0-0.84-0.15-1.08-0.44c-0.28-0.31-0.39-0.82-0.39-1.5v-3.15h-0.85v-0.8h0.85       v-1.38L192.03,37.76z M194.58,36.72h1v3.6h0.02c0.16-0.3,0.41-0.56,0.71-0.74c0.3-0.18,0.65-0.3,1.02-0.3       c0.74,0,1.92,0.48,1.92,2.47v3.43h-1v-3.31c0-0.93-0.33-1.72-1.27-1.72c-0.65,0-1.16,0.48-1.34,1.05       c-0.06,0.14-0.07,0.3-0.07,0.5v3.48h-1V36.72z M200.92,37.25c0.48-0.08,1.1-0.15,1.9-0.15c0.98,0,1.69,0.24,2.15,0.67       c0.42,0.38,0.67,0.97,0.67,1.68c0,0.73-0.2,1.3-0.59,1.72c-0.52,0.58-1.37,0.88-2.34,0.88c-0.3,0-0.57-0.01-0.79-0.07v3.22       h-0.99V37.25z M201.91,41.12c0.22,0.06,0.49,0.08,0.82,0.08c1.19,0,1.92-0.61,1.92-1.72c0-1.06-0.71-1.57-1.8-1.57       c-0.43,0-0.76,0.04-0.93,0.08V41.12z M206.74,41.22c0-0.68-0.01-1.26-0.05-1.8h0.87l0.03,1.13h0.05c0.25-0.77,0.85-1.26,1.52-1.26       c0.11,0,0.19,0.01,0.28,0.04v0.99c-0.1-0.02-0.2-0.04-0.34-0.04c-0.7,0-1.2,0.56-1.34,1.35c-0.02,0.14-0.05,0.31-0.05,0.49       v3.07h-0.99V41.22z M211.61,37.8c0.01,0.36-0.24,0.64-0.64,0.64c-0.35,0-0.6-0.29-0.6-0.64       c0-0.37,0.26-0.66,0.62-0.66C211.38,37.14,211.61,37.43,211.61,37.8z M210.5,45.18v-5.77h1v5.77H210.5z M213.16,40.98c0-0.6-0.01-1.08-0.05-1.56H214l0.06,0.95h0.02c0.27-0.55,0.91-1.08,1.82-1.08       c0.76,0,1.94,0.48,1.94,2.46v3.44h-1v-3.32c0-0.93-0.33-1.7-1.27-1.7c-0.66,0-1.17,0.49-1.34,1.07       c-0.04,0.13-0.07,0.31-0.07,0.49v3.47h-1V40.98z M220.62,37.76v1.66h1.43v0.8h-1.43v3.11c0,0.71,0.19,1.12,0.75,1.12c0.26,0,0.45-0.04,0.58-0.07       l0.05,0.79c-0.19,0.08-0.5,0.14-0.89,0.14c-0.47,0-0.84-0.15-1.08-0.44c-0.28-0.31-0.39-0.82-0.39-1.5v-3.15h-0.85v-0.8h0.85       v-1.38L220.62,37.76z M154.7,18.63h-4.11v-2.91h11.76v2.91h-4.18v12.4h-3.47V18.63z M167.66,15.72v15.3h-3.47v-15.3H167.66z M175.79,22.22v2.29h-5.95v-2.29H175.79z M178.04,27.48c0.61,0.33,2.02,0.95,3.43,0.95c1.79,0,2.7-0.91,2.7-2.07       c0-1.53-1.45-2.22-2.97-2.22h-1.41v-2.6h1.34c1.16-0.02,2.63-0.48,2.63-1.79c0-0.93-0.73-1.62-2.18-1.62       c-1.2,0-2.47,0.55-3.09,0.93l-0.7-2.62c0.89-0.6,2.66-1.17,4.56-1.17c3.16,0,4.9,1.74,4.9,3.86c0,1.64-0.89,2.93-2.7,3.6v0.05       c1.77,0.33,3.2,1.74,3.2,3.77c0,2.74-2.29,4.74-6.04,4.74c-1.91,0-3.52-0.52-4.38-1.1L178.04,27.48z M200.24,23.21c0,4.79-1.84,8.08-5.61,8.08c-3.81,0-5.5-3.6-5.52-7.98c0-4.48,1.82-8.03,5.63-8.03       C198.7,15.27,200.24,18.97,200.24,23.21z M192.59,23.31c-0.02,3.55,0.79,5.24,2.13,5.24c1.34,0,2.07-1.76,2.07-5.29       c0-3.43-0.7-5.24-2.09-5.24C193.43,18.01,192.57,19.71,192.59,23.31z M209.42,31.03l-1.38-2.77c-0.57-1.07-0.93-1.86-1.36-2.75h-0.05c-0.32,0.89-0.7,1.68-1.18,2.75       l-1.27,2.77h-3.95l4.43-7.74l-4.27-7.56h3.97l1.34,2.79c0.45,0.93,0.79,1.68,1.16,2.54h0.05c0.36-0.98,0.66-1.66,1.04-2.54       l1.29-2.79h3.95l-4.31,7.47l4.54,7.83H209.42z M219.52,15.91c0.95-0.16,2.2-0.29,3.79-0.29c1.95,0,3.38,0.45,4.29,1.27       c0.84,0.73,1.34,1.84,1.34,3.2c0,1.38-0.41,2.47-1.18,3.27c-1.04,1.11-2.75,1.68-4.68,1.68c-0.59,0-1.13-0.02-1.59-0.14v6.13       h-1.98V15.91z M221.49,23.28c0.43,0.11,0.98,0.16,1.63,0.16c2.38,0,3.84-1.16,3.84-3.27c0-2.02-1.43-3-3.61-3       c-0.86,0-1.52,0.07-1.86,0.16V23.28z M230.6,23.47c0-1.29-0.02-2.41-0.09-3.43h1.75l0.07,2.16h0.09c0.5-1.48,1.7-2.41,3.04-2.41       c0.23,0,0.39,0.02,0.57,0.07v1.88c-0.2-0.04-0.41-0.07-0.68-0.07c-1.41,0-2.41,1.07-2.68,2.57c-0.04,0.27-0.09,0.59-0.09,0.93       v5.86h-1.98V23.47z M247.17,25.44c0,4.06-2.82,5.83-5.47,5.83c-2.97,0-5.27-2.18-5.27-5.65       c0-3.68,2.41-5.83,5.45-5.83C245.04,19.79,247.17,22.08,247.17,25.44z M238.46,25.56c0,2.41,1.38,4.22,3.34,4.22       c1.91,0,3.34-1.79,3.34-4.27c0-1.86-0.93-4.22-3.29-4.22S238.46,23.47,238.46,25.56z\'></path></g><g><path class=\'ti_logo\' d=\'M28.1,26.99c0-0.08,0.05-0.96,0.06-1.18c-0.4-0.16-1.53-0.27-2.49-0.26l-0.33,1.46h1.03l-0.33,1.43       h-1.02l-0.41,1.87c-0.08,0.38,0.1,0.44,0.27,0.44c0.16,0,0.43-0.03,0.55-0.06l-0.32,1.23c0,0-0.82,0.36-1.71,0.36       c-0.57,0-1.05-0.27-1.23-0.9c-0.1-0.32-0.01-0.9,0.05-1.21l0.37-1.74h-1.03l0.34-1.43h1.01l0.35-1.59       c-0.35-0.06-0.64-0.19-0.76-0.29v-2h-3.15v4.78H16c0.12,1.24,1.18,1.54,1.58,2.32c0.25,0.5,0.62,1.7,1.36,1.7       c0.63,0,0.64-0.85,1.39-0.85c0.83,0,1.17,1.48,1.87,2.74c0.53,0.97,1.44,1.65,2.2,1.68c0.62,0.04,0.95-0.19,0.95-0.19       c-0.14-0.3-0.24-0.67-0.24-1.2c0-0.83,0.64-1.6,1.36-2.12c0.96-0.68,1.81-0.94,2.16-1.06c0,0,0.16-0.52,0.21-1.38       c0.04-0.62-0.05-1.12-0.05-1.12S28.09,28.26,28.1,26.99z M23.94,30.68l1.04-4.59h-1.26l-1.01,4.59H23.94z M24.58,25.71       c0.39,0,0.69-0.26,0.69-0.66c0-0.42-0.31-0.69-0.69-0.69c-0.37,0-0.71,0.29-0.71,0.69C23.88,25.46,24.19,25.71,24.58,25.71z        M54.81,28.72c0-0.54,0.65-0.64,1.07-0.64c0.89,0,1.4,0.38,1.66,0.7l0.15-0.05l-0.4-1.28c0,0-0.1,0.02-0.13,0.04       c-0.04,0.03,0.01,0.19-0.15,0.14c-0.15-0.04-0.58-0.19-1.21-0.19c-1.06,0-2.12,0.57-2.12,1.54c0,2.14,3.19,1.36,3.19,2.59       c0,0.34-0.22,0.71-1.16,0.71c-1,0-1.68-0.45-2.1-0.97l-0.16,0.06l0.56,1.54c0,0,0.16-0.02,0.17-0.07       c0.02-0.07,0.04-0.16,0.17-0.12c0.4,0.11,0.84,0.21,1.45,0.21c1.48,0,2.3-0.68,2.3-1.66C58.1,29.16,54.81,29.74,54.81,28.72z        M42.12,31.63c-0.4,0.49-0.91,0.55-1.41,0.55c-0.07,0-1.26,0-1.26,0c-0.31,0-0.38-0.07-0.38-0.4v-1.41h1.37       c0.53,0,0.65,0.11,0.7,0.37h0.15V29.3h-0.15c-0.05,0.26-0.18,0.39-0.7,0.39h-1.37v-1.15c0-0.31,0.07-0.4,0.38-0.4       c0,0,0.93,0,1.03,0c0.56,0,0.96,0.11,1.32,0.56l0.13-0.06l-0.39-1.14h-4.16v0.16c0.31,0.05,0.49,0.2,0.49,0.69v3.62       c0,0.51-0.18,0.66-0.49,0.72v0.16h4.45l0.41-1.15L42.12,31.63z M36.52,26.56c1.15,0,1.59,0.02,1.99,0.49l0.13-0.06l-0.4-1.23       h-5.79l-0.41,1.23l0.14,0.06c0.4-0.47,0.84-0.49,1.99-0.49c0.37,0,0.51-0.01,0.51,0.29v5.15c0,0.49-0.21,0.65-0.49,0.69v0.16       h2.33v-0.16c-0.27-0.04-0.51-0.2-0.51-0.69v-5.15C36.01,26.54,36.16,26.56,36.52,26.56z M52.89,32.08l-1.92-4.58h-1.03       l-1.69,4.04c-0.36,0.85-0.61,0.99-0.61,0.99s-0.19-0.17-0.38-0.43l-1.52-2.15l1.31-1.73c0.28-0.4,0.6-0.52,0.89-0.56V27.5       h-1.98v0.16c0.31,0,0.37,0.25,0.17,0.52l-0.86,1.15l-0.74-1.05c-0.27-0.37-0.07-0.62,0.19-0.62V27.5h-2.47v0.16       c0.34,0.05,0.48,0.2,0.78,0.58l1.52,2.01l-1.33,1.78c-0.31,0.39-0.68,0.62-0.97,0.66v0.16h2.01v-0.16       c-0.22,0-0.43-0.19-0.17-0.52l0.92-1.24l0.83,1.14c0.33,0.47-0.05,0.62-0.23,0.62v0.16h3.46v-0.16c-0.13,0-0.54-0.09-0.33-0.6       l0.3-0.75h2.22l0.29,0.72c0.23,0.55-0.16,0.63-0.3,0.63v0.16h2.32v-0.16C53.29,32.63,52.99,32.33,52.89,32.08z M49.32,30.68       l0.85-2.15l0.85,2.15H49.32z M61.53,25.98c0.26,0.05,0.49,0.2,0.49,0.71v5.37c0,0.51-0.24,0.67-0.49,0.71v0.16h2.33l0-0.16       c-0.24-0.04-0.5-0.19-0.5-0.71v-5.37c0-0.51,0.25-0.66,0.5-0.71v-0.14h-2.33V25.98z M68.21,27.74c0.28,0.06,0.48,0.2,0.48,0.7       v2.17l-2.77-3.02H64.4v0.14c0.31,0.06,0.48,0.18,0.48,0.68v3.64c0,0.51-0.19,0.64-0.48,0.71v0.16h1.67v-0.16       c-0.26-0.05-0.48-0.2-0.48-0.71v-2.91l3.62,3.85h0.19v-4.55c0-0.5,0.23-0.65,0.49-0.7V27.6h-1.67L68.21,27.74z M89.15,27.74       c0.26,0.05,0.49,0.2,0.49,0.7v2.7c0,0.85-0.66,1.22-1.42,1.22c-0.83,0-1.39-0.36-1.39-1.22v-2.7c0-0.5,0.23-0.66,0.48-0.7V27.6       h-2.16l0,0.14c0.25,0.04,0.48,0.2,0.48,0.7v2.71c0,1.51,1.49,1.86,2.4,1.86c0.9,0,2.31-0.36,2.31-1.88v-2.7       c0-0.5,0.22-0.65,0.48-0.7V27.6h-1.67V27.74z M75,27.6l-0.41,1.22l0.14,0.05c0.49-0.61,0.65-0.63,1.57-0.63       c0.22,0,0.31,0.07,0.31,0.4l0,3.42c0,0.51-0.16,0.63-0.48,0.71v0.16h2.18v-0.16c-0.31-0.06-0.48-0.2-0.48-0.71v-3.42       c0-0.33,0.1-0.4,0.32-0.4c0.92,0,1.05,0.02,1.55,0.63l0.13-0.05L79.4,27.6H75z M71.47,28.79c0-0.55,0.65-0.64,1.07-0.64       c0.88,0,1.39,0.38,1.66,0.7l0.15-0.05l-0.41-1.28c0,0-0.1,0.02-0.13,0.03c-0.04,0.04,0.01,0.2-0.15,0.15       c-0.15-0.05-0.58-0.2-1.21-0.2c-1.07,0-2.12,0.57-2.12,1.55c0,2.13,3.19,1.36,3.19,2.58c0,0.36-0.22,0.72-1.16,0.72       c-1,0-1.68-0.46-2.09-0.98l-0.17,0.06l0.56,1.55c0,0,0.16-0.03,0.17-0.07c0.02-0.08,0.04-0.16,0.16-0.13       c0.4,0.11,0.85,0.21,1.46,0.21c1.48,0,2.3-0.68,2.3-1.65C74.76,29.22,71.47,29.8,71.47,28.79z M97.53,32.06l0-3.62       c0-0.55,0.23-0.65,0.48-0.69V27.6h-1.45l-1.95,3.5l-1.79-3.5H91.1v0.16c0.26,0.04,0.48,0.14,0.48,0.69l0,3.62       c0,0.51-0.22,0.67-0.48,0.71v0.15h1.68l0-0.15c-0.22-0.04-0.51-0.2-0.51-0.71v-2.64l2,3.61h0.12l1.93-3.5v2.54       c0,0.51-0.23,0.67-0.48,0.71v0.15h2.18v-0.15C97.8,32.73,97.53,32.58,97.53,32.06z M107.44,27.75       c0.26,0.05,0.48,0.19,0.48,0.69v2.18l-2.75-3.02h-1.54v0.15c0.32,0.06,0.49,0.17,0.49,0.68v3.63c0,0.51-0.24,0.67-0.49,0.71       v0.15h1.69l0-0.15c-0.24-0.04-0.5-0.2-0.5-0.71v-2.91l3.61,3.84h0.2v-4.55c0-0.5,0.27-0.65,0.49-0.69V27.6h-1.68V27.75z        M101.95,32.29c-0.07,0-1.26,0-1.26,0c-0.31,0-0.38-0.08-0.38-0.41v-1.4h1.38c0.53,0,0.66,0.11,0.7,0.37h0.15v-1.44h-0.15       c-0.04,0.23-0.18,0.38-0.7,0.38h-1.38l0-1.15c0-0.31,0.07-0.4,0.38-0.4c0,0,0.93,0,1.03,0c0.57,0,0.96,0.11,1.32,0.56       l0.13-0.06l-0.39-1.14h-4.15v0.16c0.26,0.04,0.48,0.2,0.48,0.69v3.61c0,0.51-0.16,0.66-0.48,0.72v0.15h4.45l0.4-1.15       l-0.13-0.05C102.96,32.22,102.45,32.29,101.95,32.29z M113.95,27.6h-4.41l-0.41,1.22l0.14,0.05c0.49-0.61,0.65-0.63,1.57-0.63       c0.23,0,0.3,0.07,0.3,0.4l0,3.42c0,0.51-0.16,0.63-0.49,0.71v0.15h2.19l0-0.15c-0.3-0.06-0.49-0.2-0.49-0.71v-3.42       c0-0.34,0.09-0.4,0.32-0.4c0.92,0,1.05,0.02,1.55,0.63l0.13-0.05L113.95,27.6z M115.69,28.79c0-0.55,0.66-0.64,1.08-0.64       c0.89,0,1.4,0.38,1.66,0.7l0.14-0.05l-0.39-1.28c0,0-0.1,0.02-0.14,0.03c-0.03,0.04,0.01,0.2-0.15,0.15       c-0.14-0.05-0.58-0.2-1.21-0.2c-1.06,0-2.11,0.57-2.11,1.55c0,2.13,3.19,1.36,3.19,2.58c0,0.36-0.23,0.72-1.16,0.72       c-1,0-1.68-0.46-2.09-0.98l-0.17,0.06l0.55,1.55c0,0,0.16-0.03,0.17-0.07c0.03-0.08,0.04-0.16,0.18-0.13       c0.39,0.11,0.84,0.2,1.44,0.2c1.49,0,2.3-0.68,2.3-1.65C118.98,29.23,115.69,29.81,115.69,28.79z M83.31,30.32       c0.49-0.1,1.46-0.31,1.46-1.36c0-0.97-0.83-1.37-1.99-1.37h-2.96v0.14c0.26,0.05,0.49,0.2,0.49,0.7v3.62       c0,0.51-0.21,0.66-0.49,0.71v0.16h2.17l0-0.16c-0.27-0.05-0.48-0.2-0.48-0.71v-1.45h0.6c1.29,0,0.8,2.36,2.78,2.36       c0.37,0,0.61-0.11,0.73-0.18l0-0.13C84.76,32.67,84.67,30.88,83.31,30.32z M82.26,29.96h-0.75v-1.33       c0-0.36,0.07-0.41,0.39-0.41h0.54c0.87,0,1.1,0.46,1.1,0.86C83.53,29.73,82.88,29.96,82.26,29.96z\'></path></g></g><g id=\'TI30XPRO_CALCSCREEN\' class=\'TI30XPRO_CALCSCREEN\'><rect x=\'16.25\' y=\'56\' class=\'ti_lcd_background\' width=\'232\' height=\'92\'></rect></g><g id=\'TI30XPRO_KEY_2ND_NONE\' class=\'TI30XPRO_KEY_2ND_NONE\'><rect x=\'12\' y=\'155\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_secondKey\' d=\'M54,195H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,194.1,55.1,195,54,195z\'></path><g class=\'ti_secondKey_art_primary\'><path class=\'ti_secondKey_art_primary\' d=\'M26.34,189.75v-0.98l1-0.92c1.99-1.85,2.93-2.86,2.94-3.98c0-0.75-0.4-1.42-1.51-1.42     c-0.74,0-1.38,0.38-1.81,0.7l-0.47-1.13c0.61-0.49,1.53-0.87,2.6-0.87c1.87,0,2.78,1.18,2.78,2.56c0,1.48-1.07,2.68-2.54,4.04     l-0.74,0.64v0.03h3.47v1.33H26.34z M33.1,185.3c0-0.73-0.01-1.34-0.05-1.88h1.4l0.08,0.95h0.04     c0.27-0.49,0.96-1.09,2.02-1.09c1.1,0,2.25,0.71,2.25,2.72v3.76h-1.6v-3.58c0-0.91-0.34-1.6-1.21-1.6     c-0.64,0-1.08,0.46-1.25,0.94c-0.05,0.14-0.06,0.34-0.06,0.52v3.72H33.1V185.3z M45.86,180.52v7.45c0,0.65,0.03,1.35,0.05,1.78h-1.43l-0.07-1h-0.03     c-0.38,0.7-1.14,1.14-2.07,1.14c-1.51,0-2.7-1.29-2.7-3.24c-0.01-2.12,1.31-3.38,2.83-3.38c0.87,0,1.5,0.36,1.78,0.83h0.03v-3.59     H45.86z M44.26,186.06c0-0.13-0.01-0.29-0.04-0.42c-0.14-0.62-0.65-1.13-1.38-1.13c-1.03,0-1.6,0.91-1.6,2.09     c0,1.16,0.57,2,1.59,2c0.65,0,1.22-0.44,1.38-1.13c0.04-0.14,0.05-0.3,0.05-0.47V186.06z\'></path></g></g><g id=\'TI30XPRO_KEY_MODE_NONE\' class=\'TI30XPRO_KEY_MODE_NONE\'><rect x=\'60\' y=\'155\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M102,195H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,194.1,103.1,195,102,195z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M79.8,169.41h-0.02c-0.28,0.45-0.77,0.75-1.45,0.75c-1.05,0-1.96-0.91-1.96-2.38     c0-1.71,1.1-2.52,2.1-2.52c0.65,0,1.12,0.28,1.37,0.72l0.02,0.01l0.03-0.63h1.15c-0.02,0.42-0.04,0.87-0.04,1.36v5.24H79.8     V169.41z M79.8,167.3c0-0.1-0.01-0.2-0.03-0.29c-0.11-0.44-0.48-0.82-1.01-0.82c-0.76,0-1.19,0.65-1.19,1.53     c0,0.86,0.41,1.5,1.17,1.5c0.48,0,0.88-0.31,1.01-0.78c0.04-0.12,0.06-0.25,0.06-0.37V167.3z M86.21,168.65c0,0.56,0.02,1.02,0.04,1.41h-1.04l-0.06-0.71h-0.02     c-0.2,0.34-0.66,0.82-1.5,0.82c-0.86,0-1.64-0.51-1.64-2.04v-2.75h1.18v2.55c0,0.78,0.25,1.28,0.88,1.28     c0.47,0,0.78-0.34,0.9-0.64c0.04-0.11,0.07-0.23,0.07-0.37v-2.83h1.18V168.65z M88.51,164.06c0,0.36-0.26,0.64-0.67,0.64c-0.39,0-0.65-0.28-0.65-0.64     c0-0.37,0.27-0.65,0.66-0.65C88.25,163.41,88.5,163.69,88.51,164.06z M87.25,170.06v-4.69h1.19v4.69H87.25z M90.83,164.03v1.34h1.13v0.89h-1.13v2.07c0,0.57,0.15,0.87,0.61,0.87     c0.2,0,0.36-0.03,0.46-0.06l0.02,0.91c-0.17,0.07-0.48,0.12-0.86,0.12c-0.43,0-0.8-0.14-1.02-0.39     c-0.25-0.27-0.37-0.69-0.37-1.31v-2.21H89v-0.89h0.67v-1.06L90.83,164.03z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M69.51,185.3c0-0.73-0.01-1.34-0.05-1.88h1.38l0.06,0.94h0.04     c0.31-0.49,0.88-1.08,1.95-1.08c0.83,0,1.48,0.47,1.75,1.17h0.03c0.22-0.35,0.48-0.61,0.78-0.79c0.35-0.25,0.75-0.38,1.27-0.38     c1.05,0,2.12,0.71,2.12,2.74v3.73h-1.56v-3.5c0-1.05-0.36-1.68-1.13-1.68c-0.55,0-0.95,0.39-1.12,0.85     c-0.04,0.16-0.08,0.35-0.08,0.53v3.8H73.4v-3.67c0-0.88-0.35-1.51-1.09-1.51c-0.6,0-1,0.47-1.14,0.91     c-0.07,0.16-0.09,0.34-0.09,0.52v3.74h-1.56V185.3z M86.05,186.53c0,2.33-1.64,3.37-3.25,3.37c-1.79,0-3.17-1.23-3.17-3.26     c0-2.08,1.37-3.35,3.28-3.35C84.79,183.28,86.05,184.6,86.05,186.53z M81.28,186.59c0,1.22,0.6,2.15,1.57,2.15     c0.91,0,1.55-0.9,1.55-2.17c0-0.99-0.44-2.12-1.53-2.12C81.73,184.45,81.28,185.54,81.28,186.59z M92.69,180.52v7.45c0,0.65,0.03,1.35,0.05,1.78h-1.43l-0.06-1h-0.03     c-0.38,0.7-1.14,1.14-2.07,1.14c-1.51,0-2.7-1.29-2.7-3.24c-0.01-2.12,1.31-3.38,2.83-3.38c0.87,0,1.5,0.36,1.78,0.83h0.03v-3.59     H92.69z M91.09,186.06c0-0.13-0.01-0.29-0.04-0.42c-0.14-0.62-0.65-1.13-1.38-1.13c-1.03,0-1.6,0.91-1.6,2.09     c0,1.16,0.57,2,1.59,2c0.65,0,1.22-0.44,1.38-1.13c0.04-0.14,0.05-0.3,0.05-0.47V186.06z M95.03,187.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.76-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H95.03z M97.82,185.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H97.82z\'></path></g></g><g id=\'TI30XPRO_KEY_DELETE_INSERT\' class=\'TI30XPRO_KEY_DELETE_INSERT\'><rect x=\'108\' y=\'155\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M150,195h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,194.1,151.1,195,150,195z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M122.63,164.06c0,0.36-0.26,0.64-0.67,0.64c-0.39,0-0.65-0.28-0.65-0.64     c0-0.37,0.27-0.65,0.66-0.65C122.37,163.41,122.62,163.69,122.63,164.06z M121.37,170.06v-4.69h1.19v4.69H121.37z M123.59,166.76c0-0.54-0.01-0.99-0.04-1.4h1.04l0.06,0.7h0.03     c0.2-0.37,0.71-0.81,1.49-0.81c0.82,0,1.67,0.53,1.67,2.01v2.78h-1.18v-2.65c0-0.67-0.25-1.18-0.9-1.18     c-0.47,0-0.8,0.34-0.92,0.69c-0.04,0.11-0.05,0.25-0.05,0.38v2.75h-1.19V166.76z M128.8,168.97c0.27,0.16,0.78,0.34,1.2,0.34c0.52,0,0.75-0.21,0.75-0.52     c0-0.32-0.19-0.48-0.77-0.68c-0.92-0.32-1.3-0.82-1.29-1.37c0-0.83,0.68-1.47,1.77-1.47c0.52,0,0.97,0.13,1.24,0.28l-0.23,0.84     c-0.2-0.12-0.58-0.27-0.99-0.27c-0.42,0-0.65,0.2-0.65,0.49c0,0.3,0.22,0.44,0.82,0.65c0.85,0.31,1.24,0.74,1.25,1.43     c0,0.85-0.66,1.46-1.91,1.46c-0.57,0-1.08-0.13-1.42-0.33L128.8,168.97z M133.47,168.04c0.03,0.85,0.69,1.21,1.44,1.21c0.55,0,0.94-0.08,1.3-0.21l0.17,0.82     c-0.4,0.16-0.96,0.29-1.64,0.29c-1.52,0-2.42-0.93-2.42-2.37c0-1.3,0.79-2.52,2.29-2.52c1.52,0,2.02,1.25,2.02,2.28     c0,0.22-0.02,0.4-0.04,0.5H133.47z M135.53,167.22c0.01-0.43-0.18-1.15-0.97-1.15c-0.73,0-1.04,0.66-1.09,1.15H135.53z M137.36,166.88c0-0.64-0.01-1.09-0.04-1.51h1.03l0.04,0.9h0.04c0.23-0.66,0.78-1,1.28-1     c0.12,0,0.18,0.01,0.28,0.03v1.12c-0.1-0.02-0.2-0.04-0.35-0.04c-0.57,0-0.95,0.37-1.06,0.9c-0.02,0.11-0.04,0.23-0.04,0.37v2.43     h-1.18V166.88z M142.12,164.03v1.34h1.13v0.89h-1.13v2.07c0,0.57,0.15,0.87,0.61,0.87     c0.2,0,0.36-0.03,0.46-0.06l0.02,0.91c-0.17,0.07-0.48,0.12-0.86,0.12c-0.43,0-0.8-0.14-1.02-0.39     c-0.25-0.27-0.37-0.69-0.37-1.31v-2.21h-0.67v-0.89h0.67v-1.06L142.12,164.03z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M122.42,180.52v7.45c0,0.65,0.03,1.35,0.05,1.78h-1.43l-0.07-1h-0.03     c-0.38,0.7-1.14,1.14-2.07,1.14c-1.51,0-2.7-1.29-2.7-3.24c-0.01-2.12,1.31-3.38,2.83-3.38c0.87,0,1.5,0.36,1.78,0.83h0.03v-3.59     H122.42z M120.82,186.06c0-0.13-0.01-0.29-0.04-0.42c-0.14-0.62-0.65-1.13-1.38-1.13c-1.03,0-1.6,0.91-1.6,2.09     c0,1.16,0.57,2,1.59,2c0.65,0,1.22-0.44,1.38-1.13c0.04-0.14,0.05-0.3,0.05-0.47V186.06z M124.76,187.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.76-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H124.76z M127.54,185.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H127.54z M129.83,180.52h1.61v9.23h-1.61V180.52z M133.79,187.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.76-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H133.79z M136.57,185.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H136.57z M140.69,181.61v1.81h1.52v1.2h-1.52v2.8c0,0.77,0.21,1.17,0.82,1.17     c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.19-1.38-0.52     c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98h-0.91v-1.2h0.91v-1.43L140.69,181.61z M143.97,187.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.76-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H143.97z M146.75,185.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H146.75z\'></path></g></g><g id=\'TI30XPRO_KEY_LN-LOG_DERIVITIVE\' class=\'TI30XPRO_KEY_LN-LOG_DERIVITIVE\'><rect x=\'12\' y=\'199\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,239H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,238.1,55.1,239,54,239z\'></path><g><polygon class=\'ti_calc_case_art_second\' points=\'27.57,216.56 28.67,216.55 33.23,208 32.13,208   \'></polygon><path class=\'ti_calc_case_art_second\' d=\'M43.25,209.11l0.01,7.15l5.69,0l-0.01-7.15L43.25,209.11L43.25,209.11z M47.88,210.17    c0,0.8,0,4.24,0,5.04c-0.72,0-2.86,0-3.58,0c0-0.8,0-4.24,0-5.04C45.03,210.17,47.16,210.17,47.88,210.17z M33.23,212.78c0.3-0.16,0.62-0.22,0.82-0.22c0.19,0,0.46,0.14,0.58,0.27      c0.04,0.02,0.07-0.03,0.08-0.06c0.08-0.25,0.43-1.38,0.59-1.97c0.08-0.31,0.06-0.39-0.04-0.43c-0.27-0.13-0.36-0.19-0.36-0.23      c0-0.08,0.1-0.16,0.13-0.17c0.18-0.06,1.28-0.2,1.5-0.2c0.12,0,0.16,0.13,0.04,0.52c-0.19,0.62-0.43,1.3-0.88,2.74      c-0.3,0.96-0.58,1.88-0.75,2.49c-0.04,0.14,0.06,0.24,0.16,0.24c0.18,0,0.49-0.28,0.69-0.5c0.05-0.06,0.08-0.08,0.11-0.08      s0.05,0.03,0.05,0.13c0,0.39-0.96,1.36-1.74,1.36c-0.22,0-0.43-0.3-0.43-0.45c0-0.12,0.23-0.86,0.33-1.16      c0.02-0.05-0.05-0.09-0.1-0.02c-0.81,1.17-1.41,1.6-2.18,1.6c-0.12,0-0.3-0.06-0.4-0.15c-0.12-0.13-0.19-0.48-0.19-0.6      C31.24,215.34,31.77,213.57,33.23,212.78z M32.62,215.91c0.29,0,0.68-0.38,1.08-0.9c0.2-0.27,0.51-0.85,0.68-1.33      c0.09-0.24,0.09-0.4,0.05-0.49c-0.04-0.09-0.14-0.29-0.25-0.29c-0.15,0-0.4,0.19-0.76,0.63c-0.44,0.55-0.98,1.58-0.98,2.05      C32.44,215.79,32.51,215.91,32.62,215.91z M38.6,213.12l0.27,0.85c0.01,0.03,0.06,0.02,0.08-0.01c0.35-0.5,0.65-0.88,0.96-1.16      c0.1-0.09,0.29-0.23,0.52-0.23c0.38,0,0.47,0.27,0.47,0.47c0,0.17-0.31,0.64-0.56,0.64c-0.08,0-0.11-0.01-0.16-0.1      c-0.05-0.08-0.14-0.2-0.23-0.2c-0.27,0-0.77,0.65-0.92,0.91c-0.05,0.08-0.04,0.19-0.03,0.25c0.24,0.88,0.39,1.22,0.56,1.22      c0.13,0,0.31-0.14,0.56-0.49c0.04-0.05,0.11-0.09,0.13-0.09c0.07,0,0.11,0.07,0.09,0.23c-0.1,0.64-0.83,1.22-1.34,1.22      c-0.2,0-0.5-0.3-0.62-0.66c-0.09-0.28-0.14-0.51-0.22-0.75c-0.01-0.01-0.05-0.03-0.07,0c-0.73,1.08-1.15,1.48-1.59,1.48      c-0.27,0-0.48-0.24-0.46-0.48c0.02-0.36,0.3-0.58,0.45-0.65c0.07-0.02,0.16-0.02,0.19,0.03c0.04,0.07,0.16,0.2,0.33,0.2      c0.23,0,0.58-0.28,0.99-0.91c0.05-0.07,0.04-0.17,0.03-0.22c0-0.07-0.24-0.8-0.3-0.97c-0.07-0.2-0.12-0.21-0.18-0.21      c-0.13,0-0.3,0.13-0.54,0.43c-0.03,0.04-0.08,0.09-0.12,0.09c-0.06,0-0.09-0.11-0.09-0.18c0.04-0.38,0.7-1.24,1.36-1.24      C38.37,212.59,38.54,212.94,38.6,213.12z M25.17,210.26c0.3-0.16,0.62-0.22,0.82-0.22c0.19,0,0.46,0.14,0.58,0.27      c0.04,0.02,0.07-0.03,0.08-0.06c0.08-0.25,0.43-1.38,0.59-1.97c0.08-0.31,0.06-0.39-0.04-0.43c-0.27-0.13-0.36-0.19-0.36-0.23      c0-0.08,0.1-0.16,0.13-0.17c0.18-0.06,1.28-0.2,1.5-0.2c0.12,0,0.16,0.13,0.04,0.52c-0.19,0.62-0.43,1.3-0.88,2.74      c-0.3,0.96-0.58,1.88-0.75,2.49c-0.04,0.14,0.06,0.24,0.16,0.24c0.18,0,0.49-0.28,0.69-0.5c0.05-0.06,0.08-0.08,0.11-0.08      s0.05,0.03,0.05,0.13c0,0.39-0.96,1.36-1.74,1.36c-0.22,0-0.43-0.3-0.43-0.45c0-0.12,0.23-0.86,0.33-1.16      c0.02-0.05-0.05-0.09-0.1-0.02c-0.81,1.17-1.41,1.6-2.18,1.6c-0.12,0-0.3-0.06-0.4-0.15c-0.12-0.13-0.19-0.48-0.19-0.6      C23.17,212.82,23.7,211.04,25.17,210.26z M24.56,213.38c0.29,0,0.68-0.38,1.08-0.9c0.2-0.27,0.51-0.85,0.68-1.33      c0.09-0.24,0.09-0.4,0.05-0.49c-0.04-0.09-0.14-0.29-0.25-0.29c-0.15,0-0.4,0.19-0.76,0.63c-0.44,0.55-0.98,1.58-0.98,2.05      C24.38,213.27,24.44,213.38,24.56,213.38z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M22.58,224.52h1.61v9.23h-1.61V224.52z M25.42,229.3c0-0.73-0.01-1.34-0.05-1.88h1.4l0.08,0.95h0.04     c0.27-0.49,0.96-1.09,2.02-1.09c1.1,0,2.25,0.71,2.25,2.72v3.76h-1.6v-3.58c0-0.91-0.34-1.6-1.21-1.6     c-0.64,0-1.08,0.46-1.25,0.94c-0.05,0.14-0.06,0.34-0.06,0.52v3.72h-1.61V229.3z M34.53,224.52h1.61v9.23h-1.61V224.52z M43.38,230.53c0,2.33-1.64,3.37-3.25,3.37c-1.79,0-3.17-1.23-3.17-3.26     c0-2.08,1.37-3.35,3.28-3.35C42.12,227.28,43.38,228.6,43.38,230.53z M38.61,230.59c0,1.22,0.6,2.15,1.57,2.15     c0.91,0,1.55-0.9,1.55-2.17c0-0.99-0.44-2.12-1.53-2.12C39.07,228.45,38.61,229.54,38.61,230.59z M49.98,227.42c-0.03,0.43-0.05,0.95-0.05,1.82v3.59c0,1.33-0.27,2.27-0.94,2.87     c-0.66,0.58-1.57,0.77-2.44,0.77c-0.81,0-1.66-0.17-2.21-0.51l0.35-1.21c0.4,0.23,1.08,0.48,1.85,0.48     c1.04,0,1.82-0.55,1.82-1.91v-0.55h-0.03c-0.36,0.56-1.01,0.94-1.85,0.94c-1.57,0-2.69-1.3-2.69-3.09c0-2.08,1.35-3.34,2.87-3.34     c0.96,0,1.53,0.47,1.83,0.99h0.03l0.07-0.84H49.98z M48.32,229.95c0-0.14-0.01-0.3-0.05-0.43c-0.17-0.58-0.62-1.03-1.3-1.03     c-0.9,0-1.56,0.78-1.56,2.07c0,1.08,0.55,1.95,1.55,1.95c0.6,0,1.12-0.39,1.3-0.96c0.04-0.17,0.06-0.39,0.06-0.57V229.95z\'></path></g></g><g id=\'TI30XPRO_KEY_MATH_MATRIX\' class=\'TI30XPRO_KEY_MATH_MATRIX\'><rect x=\'60\' y=\'199\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M102,239H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,238.1,103.1,239,102,239z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M71.76,210.76c0-0.54-0.01-0.99-0.04-1.4h1.02l0.05,0.69h0.03     c0.23-0.37,0.65-0.8,1.44-0.8c0.62,0,1.1,0.35,1.3,0.87h0.02c0.16-0.26,0.36-0.45,0.58-0.59c0.26-0.18,0.56-0.28,0.94-0.28     c0.78,0,1.57,0.53,1.57,2.03v2.76h-1.16v-2.59c0-0.78-0.27-1.24-0.84-1.24c-0.4,0-0.7,0.29-0.83,0.63     c-0.03,0.12-0.06,0.26-0.06,0.39v2.81h-1.16v-2.72c0-0.65-0.26-1.12-0.81-1.12c-0.44,0-0.74,0.35-0.85,0.67     c-0.05,0.12-0.07,0.25-0.07,0.39v2.77h-1.16V210.76z M82.32,214.06l-0.08-0.52h-0.03c-0.29,0.37-0.78,0.63-1.39,0.63     c-0.94,0-1.47-0.68-1.47-1.4c0-1.18,1.05-1.78,2.78-1.77v-0.08c0-0.31-0.13-0.82-0.95-0.82c-0.46,0-0.94,0.14-1.26,0.35     l-0.23-0.77c0.35-0.21,0.95-0.41,1.69-0.41c1.5,0,1.94,0.95,1.94,1.97v1.69c0,0.42,0.02,0.84,0.07,1.13H82.32z M82.17,211.76     c-0.84-0.02-1.64,0.16-1.64,0.88c0,0.46,0.3,0.67,0.67,0.67c0.47,0,0.82-0.31,0.92-0.65c0.03-0.09,0.04-0.18,0.04-0.26V211.76z M85.64,208.03v1.34h1.13v0.89h-1.13v2.07c0,0.57,0.15,0.87,0.61,0.87     c0.2,0,0.36-0.03,0.46-0.06l0.02,0.91c-0.17,0.07-0.48,0.12-0.86,0.12c-0.43,0-0.8-0.14-1.02-0.39     c-0.25-0.27-0.37-0.69-0.37-1.31v-2.21h-0.67v-0.89h0.67v-1.06L85.64,208.03z M87.42,210.88c0-0.64-0.01-1.09-0.04-1.51h1.03l0.04,0.9h0.04c0.23-0.66,0.78-1,1.28-1     c0.12,0,0.18,0.01,0.28,0.03v1.12c-0.1-0.02-0.2-0.04-0.35-0.04c-0.57,0-0.95,0.37-1.06,0.9c-0.02,0.11-0.04,0.23-0.04,0.37v2.43     h-1.18V210.88z M91.87,208.06c0,0.36-0.26,0.64-0.67,0.64c-0.39,0-0.65-0.28-0.65-0.64     c0-0.37,0.27-0.65,0.66-0.65C91.61,207.41,91.86,207.69,91.87,208.06z M90.6,214.06v-4.69h1.19v4.69H90.6z M93.62,209.37l0.56,0.89c0.15,0.25,0.29,0.48,0.42,0.72h0.03     c0.13-0.26,0.27-0.5,0.4-0.74l0.52-0.87h1.29l-1.57,2.25l1.6,2.44h-1.34l-0.58-0.93c-0.15-0.25-0.29-0.5-0.42-0.76h-0.02     c-0.13,0.27-0.27,0.5-0.42,0.76l-0.54,0.93h-1.31l1.63-2.39l-1.57-2.3H93.62z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M70.08,229.3c0-0.73-0.01-1.34-0.05-1.88h1.38l0.06,0.94h0.04     c0.31-0.49,0.88-1.08,1.95-1.08c0.83,0,1.48,0.47,1.75,1.17h0.03c0.22-0.35,0.48-0.61,0.78-0.79c0.35-0.25,0.75-0.38,1.27-0.38     c1.05,0,2.12,0.71,2.12,2.74v3.73h-1.56v-3.5c0-1.05-0.36-1.68-1.13-1.68c-0.55,0-0.95,0.39-1.12,0.85     c-0.04,0.16-0.08,0.35-0.08,0.53v3.8h-1.56v-3.67c0-0.88-0.35-1.51-1.09-1.51c-0.6,0-1,0.47-1.14,0.91     c-0.06,0.16-0.09,0.34-0.09,0.52v3.74h-1.56V229.3z M84.67,233.75l-0.1-0.7h-0.04c-0.39,0.49-1.05,0.85-1.87,0.85     c-1.27,0-1.99-0.92-1.99-1.89c0-1.6,1.42-2.4,3.76-2.39v-0.1c0-0.42-0.17-1.1-1.29-1.1c-0.62,0-1.27,0.19-1.7,0.47l-0.31-1.04     c0.47-0.29,1.29-0.56,2.29-0.56c2.03,0,2.61,1.29,2.61,2.67v2.29c0,0.57,0.03,1.13,0.09,1.52H84.67z M84.46,230.66     c-1.13-0.03-2.21,0.22-2.21,1.18c0,0.62,0.4,0.91,0.91,0.91c0.64,0,1.1-0.42,1.25-0.87c0.04-0.12,0.05-0.25,0.05-0.35V230.66z M89.47,225.61v1.81h1.52v1.2h-1.52v2.8c0,0.77,0.21,1.17,0.82,1.17     c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.19-1.38-0.52     c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98H87v-1.2h0.91v-1.43L89.47,225.61z M92.2,224.52h1.61v3.77h0.03c0.19-0.3,0.46-0.55,0.79-0.73     c0.31-0.18,0.69-0.29,1.09-0.29c1.08,0,2.21,0.71,2.21,2.74v3.73h-1.6v-3.55c0-0.92-0.34-1.61-1.22-1.61     c-0.62,0-1.07,0.42-1.23,0.9c-0.05,0.13-0.06,0.3-0.06,0.48v3.78H92.2V224.52z\'></path></g></g><g id=\'TI30XPRO_KEY_DATA_STAT-REGDISTR\' class=\'TI30XPRO_KEY_DATA_STAT-REGDISTR\'><rect x=\'108\' y=\'199\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M150,239h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,238.1,151.1,239,150,239z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M113.28,212.63c0.2,0.14,0.58,0.28,0.9,0.28c0.39,0,0.56-0.18,0.56-0.43     c0-0.26-0.14-0.4-0.58-0.57c-0.68-0.26-0.97-0.68-0.96-1.14c0-0.69,0.51-1.22,1.33-1.22c0.39,0,0.73,0.11,0.93,0.23l-0.17,0.7     c-0.15-0.1-0.43-0.22-0.74-0.22c-0.32,0-0.49,0.17-0.49,0.41c0,0.25,0.17,0.37,0.61,0.54c0.63,0.26,0.93,0.62,0.94,1.19     c0,0.7-0.5,1.22-1.43,1.22c-0.42,0-0.81-0.11-1.07-0.27L113.28,212.63z M117.16,208.52v1.11h0.84v0.74h-0.84v1.72c0,0.47,0.12,0.72,0.45,0.72     c0.15,0,0.27-0.02,0.35-0.05l0.01,0.75c-0.13,0.06-0.36,0.1-0.64,0.1c-0.32,0-0.6-0.12-0.76-0.32c-0.19-0.22-0.27-0.58-0.27-1.09     v-1.83h-0.5v-0.74h0.5v-0.88L117.16,208.52z M120.47,213.53l-0.06-0.43h-0.02c-0.22,0.3-0.58,0.52-1.04,0.52     c-0.71,0-1.1-0.57-1.1-1.16c0-0.98,0.79-1.48,2.08-1.47v-0.06c0-0.26-0.09-0.68-0.71-0.68c-0.35,0-0.71,0.12-0.94,0.29     l-0.17-0.64c0.26-0.18,0.71-0.34,1.27-0.34c1.12,0,1.45,0.79,1.45,1.64v1.41c0,0.35,0.01,0.7,0.05,0.94H120.47z M120.35,211.63     c-0.63-0.02-1.22,0.14-1.22,0.73c0,0.38,0.22,0.56,0.5,0.56c0.35,0,0.61-0.26,0.69-0.54c0.02-0.07,0.03-0.15,0.03-0.22V211.63z M122.95,208.52v1.11h0.84v0.74h-0.84v1.72c0,0.47,0.12,0.72,0.45,0.72     c0.15,0,0.27-0.02,0.35-0.05l0.01,0.75c-0.13,0.06-0.36,0.1-0.64,0.1c-0.32,0-0.6-0.12-0.76-0.32c-0.19-0.22-0.27-0.58-0.27-1.09     v-1.83h-0.5v-0.74h0.5v-0.88L122.95,208.52z M125.83,211.06v0.68H124v-0.68H125.83z M126.34,210.89c0-0.53-0.01-0.9-0.03-1.26h0.77l0.03,0.74h0.03     c0.17-0.55,0.58-0.83,0.96-0.83c0.09,0,0.14,0.01,0.21,0.02v0.93c-0.07-0.02-0.15-0.03-0.26-0.03c-0.42,0-0.71,0.3-0.79,0.74     c-0.01,0.09-0.03,0.19-0.03,0.3v2.01h-0.89V210.89z M129.29,211.86c0.02,0.7,0.52,1.01,1.08,1.01c0.41,0,0.71-0.06,0.97-0.18l0.13,0.68     c-0.3,0.14-0.72,0.24-1.22,0.24c-1.14,0-1.81-0.78-1.81-1.97c0-1.08,0.59-2.1,1.71-2.1c1.14,0,1.51,1.04,1.51,1.9     c0,0.18-0.01,0.33-0.03,0.42H129.29z M130.83,211.17c0.01-0.36-0.14-0.95-0.73-0.95c-0.55,0-0.78,0.55-0.81,0.95H130.83z M135.4,209.64c-0.01,0.26-0.03,0.58-0.03,1.12v2.21c0,0.82-0.15,1.4-0.52,1.77     c-0.37,0.36-0.87,0.47-1.35,0.47c-0.45,0-0.92-0.1-1.22-0.31l0.19-0.74c0.22,0.14,0.6,0.3,1.02,0.3c0.58,0,1.01-0.34,1.01-1.18     v-0.34h-0.01c-0.2,0.34-0.56,0.58-1.02,0.58c-0.87,0-1.49-0.8-1.49-1.9c0-1.28,0.75-2.06,1.59-2.06c0.53,0,0.85,0.29,1.02,0.61     h0.01l0.04-0.52H135.4z M134.49,211.2c0-0.09-0.01-0.18-0.03-0.26c-0.09-0.36-0.35-0.63-0.72-0.63c-0.5,0-0.86,0.48-0.86,1.27     c0,0.66,0.3,1.2,0.86,1.2c0.33,0,0.62-0.24,0.72-0.59c0.02-0.1,0.04-0.24,0.04-0.35V211.2z M135.73,213.85l1.76-5.8h0.62l-1.76,5.8H135.73z M141.62,207.85v4.58c0,0.4,0.01,0.83,0.03,1.1h-0.79l-0.04-0.62h-0.01     c-0.21,0.43-0.63,0.7-1.15,0.7c-0.83,0-1.5-0.79-1.5-1.99c-0.01-1.3,0.73-2.08,1.57-2.08c0.48,0,0.83,0.22,0.99,0.51h0.01v-2.21     H141.62z M140.74,211.26c0-0.08-0.01-0.18-0.02-0.26c-0.08-0.38-0.36-0.7-0.76-0.7c-0.57,0-0.89,0.56-0.89,1.29     c0,0.71,0.32,1.23,0.88,1.23c0.36,0,0.68-0.27,0.76-0.7c0.02-0.09,0.03-0.18,0.03-0.29V211.26z M143.34,208.55c0,0.3-0.2,0.53-0.5,0.53c-0.29,0-0.49-0.23-0.49-0.53     c0-0.3,0.2-0.54,0.5-0.54C143.14,208.01,143.33,208.25,143.34,208.55z M142.39,213.53v-3.89h0.89v3.89H142.39z M144.01,212.63c0.2,0.14,0.58,0.28,0.9,0.28c0.39,0,0.56-0.18,0.56-0.43     c0-0.26-0.14-0.4-0.58-0.57c-0.68-0.26-0.97-0.68-0.96-1.14c0-0.69,0.51-1.22,1.33-1.22c0.39,0,0.73,0.11,0.93,0.23l-0.17,0.7     c-0.15-0.1-0.43-0.22-0.74-0.22c-0.32,0-0.49,0.17-0.49,0.41c0,0.25,0.17,0.37,0.61,0.54c0.63,0.26,0.93,0.62,0.94,1.19     c0,0.7-0.5,1.22-1.43,1.22c-0.42,0-0.81-0.11-1.07-0.27L144.01,212.63z M147.89,208.52v1.11h0.84v0.74h-0.84v1.72c0,0.47,0.12,0.72,0.45,0.72     c0.15,0,0.27-0.02,0.35-0.05l0.01,0.75c-0.13,0.06-0.36,0.1-0.64,0.1c-0.32,0-0.6-0.12-0.76-0.32c-0.19-0.22-0.27-0.58-0.27-1.09     v-1.83h-0.5v-0.74h0.5v-0.88L147.89,208.52z M149.23,210.89c0-0.53-0.01-0.9-0.03-1.26h0.77l0.03,0.74h0.03     c0.17-0.55,0.58-0.83,0.96-0.83c0.09,0,0.14,0.01,0.21,0.02v0.93c-0.07-0.02-0.15-0.03-0.26-0.03c-0.42,0-0.71,0.3-0.79,0.74     c-0.01,0.09-0.03,0.19-0.03,0.3v2.01h-0.89V210.89z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M127.08,224.52v7.45c0,0.65,0.03,1.35,0.05,1.78h-1.43l-0.06-1h-0.03     c-0.38,0.7-1.14,1.14-2.07,1.14c-1.51,0-2.7-1.29-2.7-3.24c-0.01-2.12,1.31-3.38,2.83-3.38c0.87,0,1.5,0.36,1.78,0.83h0.03v-3.59     H127.08z M125.48,230.06c0-0.13-0.01-0.29-0.04-0.42c-0.14-0.62-0.65-1.13-1.38-1.13c-1.03,0-1.6,0.91-1.6,2.09     c0,1.16,0.57,2,1.59,2c0.65,0,1.22-0.44,1.38-1.13c0.04-0.14,0.05-0.3,0.05-0.47V230.06z M131.85,233.75l-0.1-0.7h-0.04c-0.39,0.49-1.05,0.85-1.87,0.85     c-1.27,0-1.99-0.92-1.99-1.89c0-1.6,1.42-2.4,3.76-2.39v-0.1c0-0.42-0.17-1.1-1.29-1.1c-0.62,0-1.27,0.19-1.7,0.47l-0.31-1.04     c0.47-0.29,1.29-0.56,2.29-0.56c2.03,0,2.61,1.29,2.61,2.67v2.29c0,0.57,0.03,1.13,0.09,1.52H131.85z M131.64,230.66     c-1.13-0.03-2.21,0.22-2.21,1.18c0,0.62,0.4,0.91,0.91,0.91c0.64,0,1.1-0.42,1.25-0.87c0.04-0.12,0.05-0.25,0.05-0.35V230.66z M136.14,225.61v1.81h1.52v1.2h-1.52v2.8c0,0.77,0.21,1.17,0.82,1.17     c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.19-1.38-0.52     c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98h-0.91v-1.2h0.91v-1.43L136.14,225.61z M141.93,233.75l-0.1-0.7h-0.04c-0.39,0.49-1.05,0.85-1.87,0.85     c-1.27,0-1.99-0.92-1.99-1.89c0-1.6,1.42-2.4,3.76-2.39v-0.1c0-0.42-0.17-1.1-1.29-1.1c-0.62,0-1.27,0.19-1.7,0.47l-0.31-1.04     c0.47-0.29,1.29-0.56,2.29-0.56c2.03,0,2.61,1.29,2.61,2.67v2.29c0,0.57,0.03,1.13,0.09,1.52H141.93z M141.72,230.66     c-1.13-0.03-2.21,0.22-2.21,1.18c0,0.62,0.4,0.91,0.91,0.91c0.64,0,1.11-0.42,1.25-0.87c0.04-0.12,0.05-0.25,0.05-0.35V230.66z\'></path></g></g><g id=\'TI30XPRO_KEY_LEFTARROW_NONE\' class=\'TI30XPRO_KEY_LEFTARROW_NONE\'><polygon class=\'ti_key_background_padding\' points=\'204,199 156,242 156,156  \'></polygon><path class=\'ti_arrowKey\' d=\'M162.02,161.63c-1.25,1.38-2.02,3.18-2.02,5.16v64.41c0,1.98,0.77,3.79,2.02,5.16L204,199   L162.02,161.63z\'></path><path class=\'ti_arrowKey_outerStroke\' d=\'M162.02,161.63c-1.25,1.38-2.02,3.18-2.02,5.16v64.41c0,1.98,0.77,3.79,2.02,5.16\'></path><path class=\'ti_arrowKey_art_primary\' d=\'M171.43,196.56l-3.33,2.26c-0.13,0.09-0.13,0.27,0,0.36l3.33,2.26   c0.16,0.11,0.4,0.01,0.4-0.18v-4.51C171.83,196.56,171.6,196.45,171.43,196.56z\'></path></g><g id=\'TI30XPRO_KEY_UPARROW_NONE\' class=\'TI30XPRO_KEY_UPARROW_NONE\'><polygon class=\'ti_key_background_padding\' points=\'252,155.1 252,156 204,199 156,156 156,155.1  \'></polygon><path class=\'ti_arrowKey\' d=\'M204,199l41.98-37.37c-1.47-1.61-3.6-2.63-5.98-2.63h-72c-2.38,0-4.52,1.02-5.98,2.63L204,199z\'></path><path class=\'ti_arrowKey_outerStroke\' d=\'M245.98,161.63c-1.47-1.61-3.6-2.63-5.98-2.63h-72c-2.38,0-4.52,1.02-5.98,2.63\'></path><path class=\'ti_arrowKey_art_primary\' d=\'M206.7,171.84l-2.5-3.01c-0.1-0.12-0.3-0.12-0.4,0l-2.5,3.01   c-0.12,0.15-0.01,0.36,0.2,0.36h5C206.71,172.2,206.82,171.99,206.7,171.84z\'></path></g><g id=\'TI30XPRO_KEY_RIGHTARROW_NONE\' class=\'TI30XPRO_KEY_RIGHTARROW_NONE\'><polygon class=\'ti_key_background_padding\' points=\'204,199 252,242 252,156  \'></polygon><path class=\'ti_arrowKey\' d=\'M245.98,236.37c1.25-1.38,2.02-3.18,2.02-5.16v-64.41c0-1.98-0.77-3.79-2.02-5.16L204,199   L245.98,236.37z\'></path><path class=\'ti_arrowKey_outerStroke\' d=\'M245.98,236.37c1.25-1.38,2.02-3.18,2.02-5.16v-64.41c0-1.98-0.77-3.79-2.02-5.16\'></path><path class=\'ti_arrowKey_art_primary\' d=\'M236.57,201.44l3.33-2.26c0.13-0.09,0.13-0.27,0-0.36l-3.33-2.26   c-0.16-0.11-0.4-0.01-0.4,0.18v4.51C236.17,201.44,236.4,201.55,236.57,201.44z\'></path></g><g id=\'TI30XPRO_KEY_DOWNARROW_NONE\' class=\'TI30XPRO_KEY_DOWNARROW_NONE\'><polygon class=\'ti_key_background_padding\' points=\'156,242.9 156,242 204,199 252,242 252,242.9  \'></polygon><path class=\'ti_arrowKey\' d=\'M204,199l-41.98,37.37c1.47,1.61,3.6,2.63,5.98,2.63h72c2.38,0,4.52-1.02,5.98-2.63L204,199z\'></path><path class=\'ti_arrowKey_outerStroke\' d=\'M162.02,236.37c1.47,1.61,3.6,2.63,5.98,2.63h72c2.38,0,4.52-1.02,5.98-2.63\'></path><path class=\'ti_arrowKey_art_primary\' d=\'M201.3,226.16l2.5,3.01c0.1,0.12,0.3,0.12,0.4,0l2.5-3.01c0.12-0.15,0.01-0.36-0.2-0.36   h-5C201.29,225.8,201.18,226.01,201.3,226.16z\'></path></g><g id=\'TI30XPRO_KEY_ENTH-10NTH_INTEGRAL\' class=\'TI30XPRO_KEY_ENTH-10NTH_INTEGRAL\'><rect x=\'12\' y=\'243\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,283H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,282.1,55.1,283,54,283z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M41.64,255.5c0.3-0.16,0.62-0.22,0.82-0.22c0.19,0,0.46,0.14,0.58,0.27      c0.04,0.02,0.07-0.03,0.08-0.06c0.08-0.25,0.43-1.38,0.59-1.97c0.08-0.31,0.06-0.39-0.04-0.43c-0.27-0.13-0.36-0.19-0.36-0.23      c0-0.08,0.1-0.16,0.13-0.17c0.18-0.06,1.28-0.2,1.5-0.2c0.12,0,0.16,0.13,0.04,0.52c-0.19,0.62-0.43,1.3-0.88,2.74      c-0.3,0.96-0.58,1.88-0.75,2.49c-0.04,0.14,0.06,0.24,0.16,0.24c0.18,0,0.49-0.28,0.69-0.5c0.05-0.06,0.08-0.08,0.11-0.08      s0.05,0.03,0.05,0.13c0,0.39-0.96,1.36-1.74,1.36c-0.22,0-0.43-0.3-0.43-0.45c0-0.12,0.23-0.86,0.33-1.16      c0.02-0.05-0.05-0.09-0.1-0.02c-0.81,1.17-1.41,1.6-2.18,1.6c-0.12,0-0.3-0.06-0.4-0.15c-0.12-0.13-0.19-0.48-0.19-0.6      C39.65,258.07,40.18,256.29,41.64,255.5z M41.03,258.63c0.29,0,0.68-0.38,1.08-0.9c0.2-0.27,0.51-0.85,0.68-1.33      c0.09-0.24,0.09-0.4,0.05-0.49c-0.04-0.09-0.14-0.29-0.25-0.29c-0.15,0-0.4,0.19-0.76,0.63c-0.44,0.55-0.98,1.58-0.98,2.05      C40.85,258.52,40.92,258.63,41.03,258.63z M47.01,255.84l0.27,0.85c0.01,0.03,0.06,0.02,0.08-0.01c0.35-0.5,0.65-0.88,0.96-1.16      c0.1-0.09,0.29-0.23,0.52-0.23c0.38,0,0.47,0.27,0.47,0.47c0,0.17-0.31,0.64-0.56,0.64c-0.08,0-0.11-0.01-0.16-0.1      c-0.05-0.08-0.14-0.2-0.23-0.2c-0.27,0-0.77,0.65-0.92,0.91c-0.05,0.08-0.04,0.19-0.03,0.25c0.24,0.88,0.39,1.22,0.56,1.22      c0.13,0,0.31-0.14,0.56-0.49c0.04-0.05,0.11-0.09,0.13-0.09c0.07,0,0.11,0.07,0.09,0.23c-0.1,0.64-0.83,1.22-1.34,1.22      c-0.2,0-0.5-0.3-0.62-0.66c-0.09-0.28-0.14-0.51-0.22-0.75c-0.01-0.01-0.05-0.03-0.07,0c-0.73,1.08-1.15,1.48-1.59,1.48      c-0.27,0-0.48-0.24-0.46-0.48c0.02-0.36,0.3-0.58,0.45-0.65c0.07-0.02,0.16-0.02,0.19,0.03c0.04,0.07,0.16,0.2,0.33,0.2      c0.23,0,0.58-0.28,0.99-0.91c0.05-0.07,0.04-0.17,0.03-0.22c0-0.07-0.24-0.8-0.3-0.97c-0.07-0.2-0.12-0.21-0.18-0.21      c-0.13,0-0.3,0.13-0.54,0.43c-0.03,0.04-0.08,0.09-0.12,0.09c-0.06,0-0.09-0.11-0.09-0.18c0.04-0.38,0.7-1.24,1.36-1.24      C46.78,255.31,46.95,255.67,47.01,255.84z M26.17,251.83c0,0.3-0.25,0.54-0.57,0.54c-0.47,0-0.45-0.7-0.71-0.7      c-0.12,0-0.24,0.34-0.19,1.72c0.04,1.2,0.09,2.04,0.12,3.28c0.08,3.39-1.04,4.18-1.96,4.18c-0.39,0-0.69-0.29-0.69-0.62      c0-0.36,0.19-0.62,0.59-0.62c0.54,0,0.59,0.65,0.79,0.65s0.2-0.26,0.16-1.2c-0.02-0.83-0.07-1.72-0.14-3.51      c-0.14-3.92,1.37-4.38,1.86-4.38C25.79,251.17,26.17,251.38,26.17,251.83z M32.86,252.49l0.01,7.15l5.69,0l-0.01-7.15L32.86,252.49L32.86,252.49z M37.5,253.54    c0,0.8,0,4.24,0,5.04c-0.72,0-2.86,0-3.58,0c0-0.8,0-4.24,0-5.04C34.64,253.54,36.78,253.54,37.5,253.54z M27.16,251.04h3.07h0.42v0.42v3.07v0.42h-0.42h-3.07h-0.42v-0.42v-3.07v-0.42H27.16    L27.16,251.04z M29.81,251.87h-2.24v2.24h2.24V251.87z M26.04,256.21h3.07h0.42v0.42v3.07v0.42h-0.42h-3.07h-0.42v-0.42v-3.07v-0.42H26.04    L26.04,256.21z M28.69,257.04h-2.24v2.24h2.24V257.04z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M22.4,276.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.76-0.29l0.23,1.11         c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08         c0,0.3-0.03,0.53-0.05,0.68H22.4z M25.18,274.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H25.18z M36.18,271.74h-0.03l-1.55,0.78l-0.27-1.21l2.05-1.01h1.34v8.45h-1.55V271.74z M45.31,274.47c0,2.72-1.07,4.42-3.08,4.42c-1.95,0-2.99-1.77-3-4.34         c0-2.63,1.12-4.39,3.09-4.39C44.36,270.16,45.31,271.98,45.31,274.47z M40.83,274.55c-0.01,2.05,0.56,3.12,1.44,3.12         c0.94,0,1.43-1.14,1.43-3.17c0-1.96-0.47-3.12-1.43-3.12C41.42,271.38,40.82,272.43,40.83,274.55z M31.3,267v3.62h-3.62V267H31.3 M32.3,266h-5.62v5.62h5.62V266L32.3,266z M50.59,267v3.62h-3.62V267H50.59 M51.59,266h-5.62v5.62h5.62V266L51.59,266z\'></path></g></g><g id=\'TI30XPRO_KEY_EE_VECTOR\' class=\'TI30XPRO_KEY_EE_VECTOR\'><rect x=\'60\' y=\'243\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M102,283H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,282.1,103.1,283,102,283z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M72.45,253.5l0.79,2.47c0.14,0.43,0.24,0.82,0.33,1.22h0.03     c0.09-0.4,0.2-0.78,0.33-1.22l0.77-2.47h1.3l-1.86,4.87h-1.21l-1.81-4.87H72.45z M77.24,256.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H77.24z M79.38,255.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H79.38z M84.86,258.22c-0.26,0.12-0.77,0.25-1.38,0.25c-1.52,0-2.51-0.97-2.51-2.48     c0-1.46,1-2.6,2.71-2.6c0.45,0,0.91,0.1,1.19,0.23l-0.22,0.92c-0.2-0.09-0.49-0.19-0.93-0.19c-0.94,0-1.5,0.69-1.49,1.58     c0,1,0.65,1.57,1.49,1.57c0.43,0,0.73-0.09,0.97-0.19L84.86,258.22z M87.08,252.11v1.39h1.17v0.92h-1.17v2.15c0,0.59,0.16,0.9,0.63,0.9     c0.21,0,0.37-0.03,0.48-0.06l0.02,0.94c-0.18,0.07-0.5,0.12-0.89,0.12c-0.45,0-0.83-0.15-1.06-0.4     c-0.26-0.28-0.38-0.72-0.38-1.36v-2.29h-0.7v-0.92h0.7v-1.1L87.08,252.11z M93.49,255.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C92.52,253.39,93.49,254.41,93.49,255.89z M89.83,255.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C90.18,254.29,89.83,255.13,89.83,255.94z M94.26,255.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V255.07z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M83.61,273.86h-3.3v2.57H84v1.31h-5.29v-8.76h5.1v1.31h-3.5v2.26h3.3V273.86z M89.8,273.86h-3.3v2.57h3.69v1.31H84.9v-8.76h5.1v1.31h-3.5v2.26h3.3V273.86z\'></path></g></g><g id=\'TI30XPRO_KEY_NCR-NPR_RANDOM\' class=\'TI30XPRO_KEY_NCR-NPR_RANDOM\'><rect x=\'108\' y=\'243\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M150,283h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,282.1,151.1,283,150,283z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M116.31,255.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V255.07z M122.26,258.37l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H122.26z M122.1,255.99     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V255.99z M124.36,254.95c0-0.56-0.01-1.03-0.04-1.45h1.08l0.06,0.73h0.03     c0.21-0.38,0.74-0.84,1.55-0.84c0.85,0,1.73,0.55,1.73,2.09v2.89h-1.23v-2.75c0-0.7-0.26-1.23-0.93-1.23     c-0.49,0-0.83,0.35-0.96,0.72c-0.04,0.11-0.05,0.26-0.05,0.4v2.86h-1.24V254.95z M134.31,251.27V257c0,0.5,0.02,1.04,0.04,1.37h-1.1l-0.05-0.77h-0.02     c-0.29,0.54-0.88,0.88-1.59,0.88c-1.16,0-2.08-0.99-2.08-2.49c-0.01-1.63,1.01-2.6,2.18-2.6c0.67,0,1.15,0.28,1.37,0.64h0.02     v-2.76H134.31z M133.08,255.53c0-0.1-0.01-0.22-0.03-0.32c-0.11-0.48-0.5-0.87-1.06-0.87c-0.79,0-1.23,0.7-1.23,1.61     c0,0.89,0.44,1.54,1.22,1.54c0.5,0,0.94-0.34,1.06-0.87c0.03-0.11,0.04-0.23,0.04-0.36V255.53z M140.01,255.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C139.04,253.39,140.01,254.41,140.01,255.89z M136.34,255.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C136.69,254.29,136.34,255.13,136.34,255.94z M140.77,254.95c0-0.56-0.01-1.03-0.04-1.45h1.06l0.05,0.72h0.03     c0.24-0.38,0.68-0.83,1.5-0.83c0.64,0,1.14,0.36,1.35,0.9h0.02c0.17-0.27,0.37-0.47,0.6-0.61c0.27-0.19,0.58-0.29,0.98-0.29     c0.81,0,1.63,0.55,1.63,2.11v2.87h-1.2v-2.69c0-0.81-0.28-1.29-0.87-1.29c-0.42,0-0.73,0.3-0.86,0.65     c-0.03,0.12-0.06,0.27-0.06,0.41v2.92h-1.2v-2.82c0-0.68-0.27-1.16-0.84-1.16c-0.46,0-0.77,0.36-0.88,0.7     c-0.05,0.12-0.07,0.26-0.07,0.4v2.88h-1.2V254.95z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M127.67,267.47c0-0.62-0.01-1.13-0.04-1.6h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.94,0,1.9,0.61,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.38-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V267.47z M138.89,271.01c-0.32,0.17-1.02,0.33-1.91,0.33c-2.35,0-3.79-1.47-3.79-3.73      c0-2.44,1.69-3.92,3.96-3.92c0.89,0,1.53,0.19,1.8,0.33l-0.3,1.08c-0.35-0.15-0.84-0.29-1.45-0.29c-1.51,0-2.6,0.95-2.6,2.73      c0,1.63,0.96,2.67,2.58,2.67c0.55,0,1.12-0.11,1.47-0.27L138.89,271.01z M139.52,267.6c0-0.73-0.01-1.24-0.04-1.73h1.18l0.04,1.02h0.04      c0.26-0.76,0.89-1.14,1.46-1.14c0.13,0,0.21,0.01,0.32,0.03v1.28c-0.11-0.02-0.23-0.04-0.4-0.04c-0.65,0-1.09,0.42-1.21,1.02      c-0.02,0.12-0.04,0.26-0.04,0.42v2.77h-1.35V267.6z M127.88,276.47c0-0.62-0.01-1.13-0.04-1.6h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.94,0,1.9,0.61,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.38-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V276.47z M133.79,272.91c0.48-0.09,1.15-0.15,2.07-0.15c0.99,0,1.72,0.21,2.19,0.6      c0.44,0.36,0.73,0.95,0.73,1.64c0,0.7-0.22,1.29-0.64,1.68c-0.54,0.54-1.39,0.79-2.34,0.79c-0.25,0-0.48-0.01-0.66-0.04v2.79      h-1.34V272.91z M135.13,276.37c0.17,0.04,0.38,0.05,0.66,0.05c1.01,0,1.63-0.5,1.63-1.36c0-0.83-0.57-1.27-1.51-1.27      c-0.37,0-0.64,0.03-0.78,0.07V276.37z M139.31,276.6c0-0.73-0.01-1.24-0.04-1.73h1.18l0.04,1.02h0.04      c0.26-0.76,0.89-1.14,1.46-1.14c0.13,0,0.21,0.01,0.32,0.03v1.28c-0.11-0.02-0.23-0.04-0.4-0.04c-0.65,0-1.09,0.42-1.21,1.02      c-0.02,0.12-0.04,0.26-0.04,0.42v2.77h-1.35V276.6z M121.2,276.72c0-0.74,0.5-1.25,1.2-1.25c0.74,0,1.2,0.51,1.22,1.25      c0,0.72-0.48,1.25-1.22,1.25C121.68,277.97,121.19,277.44,121.2,276.72z M121.65,274.46l-0.29-7.46h2.08l-0.29,7.46H121.65z\'></path></g></g><g id=\'TI30XPRO_KEY_TABLE_EXPR-EVAL\' class=\'TI30XPRO_KEY_TABLE_EXPR-EVAL\'><rect x=\'156\' y=\'243\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M198,283h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C200,282.1,199.1,283,198,283z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M163.28,256.38c0.03,0.84,0.68,1.2,1.43,1.2c0.54,0,0.93-0.08,1.28-0.21l0.17,0.81     c-0.4,0.16-0.95,0.29-1.62,0.29c-1.5,0-2.39-0.92-2.39-2.34c0-1.28,0.78-2.49,2.26-2.49c1.5,0,2,1.24,2,2.25     c0,0.22-0.02,0.39-0.04,0.49H163.28z M165.31,255.56c0.01-0.43-0.18-1.13-0.96-1.13c-0.72,0-1.03,0.66-1.07,1.13H165.31z M167.82,253.74l0.55,0.87c0.15,0.25,0.29,0.48,0.42,0.71h0.03     c0.13-0.26,0.27-0.49,0.4-0.73l0.51-0.86H171l-1.55,2.22l1.58,2.41h-1.32l-0.57-0.92c-0.15-0.25-0.29-0.49-0.42-0.75h-0.02     c-0.13,0.27-0.27,0.49-0.42,0.75l-0.53,0.92h-1.29l1.61-2.36l-1.55-2.27H167.82z M171.5,255.28c0-0.61-0.02-1.1-0.04-1.54h1.03l0.06,0.71h0.02     c0.34-0.52,0.88-0.82,1.59-0.82c1.07,0,1.95,0.91,1.95,2.36c0,1.67-1.06,2.48-2.11,2.48c-0.58,0-1.06-0.25-1.3-0.62h-0.02v2.4     h-1.17V255.28z M172.67,256.43c0,0.11,0.01,0.22,0.04,0.32c0.11,0.48,0.53,0.82,1.03,0.82c0.74,0,1.18-0.62,1.18-1.53     c0-0.82-0.4-1.48-1.15-1.48c-0.48,0-0.93,0.35-1.05,0.87c-0.03,0.09-0.05,0.2-0.05,0.29V256.43z M176.81,255.23c0-0.63-0.01-1.07-0.04-1.49h1.02l0.04,0.88h0.04     c0.23-0.66,0.77-0.99,1.26-0.99c0.11,0,0.18,0.01,0.28,0.03v1.1c-0.09-0.02-0.2-0.04-0.34-0.04c-0.56,0-0.94,0.36-1.05,0.88     c-0.02,0.1-0.04,0.23-0.04,0.36v2.4h-1.17V255.23z M182.01,255.43v0.81h-2.42v-0.81H182.01z M183.67,256.38c0.03,0.84,0.68,1.2,1.43,1.2c0.54,0,0.93-0.08,1.28-0.21l0.17,0.81     c-0.4,0.16-0.95,0.29-1.62,0.29c-1.5,0-2.39-0.92-2.39-2.34c0-1.28,0.78-2.49,2.26-2.49c1.5,0,2,1.24,2,2.25     c0,0.22-0.02,0.39-0.04,0.49H183.67z M185.71,255.56c0.01-0.43-0.18-1.13-0.96-1.13c-0.72,0-1.03,0.66-1.07,1.13H185.71z M188.23,253.74l0.75,2.35c0.13,0.41,0.23,0.78,0.31,1.16h0.03     c0.09-0.38,0.19-0.74,0.31-1.16l0.73-2.35h1.24l-1.77,4.63h-1.15l-1.72-4.63H188.23z M194.62,258.37l-0.08-0.51h-0.03c-0.29,0.36-0.77,0.62-1.37,0.62     c-0.93,0-1.46-0.67-1.46-1.38c0-1.17,1.04-1.76,2.75-1.75v-0.08c0-0.3-0.12-0.81-0.94-0.81c-0.46,0-0.93,0.14-1.25,0.34     l-0.23-0.76c0.34-0.21,0.94-0.41,1.67-0.41c1.48,0,1.91,0.94,1.91,1.95v1.67c0,0.42,0.02,0.83,0.07,1.11H194.62z M194.47,256.1     c-0.83-0.02-1.62,0.16-1.62,0.87c0,0.46,0.29,0.67,0.67,0.67c0.46,0,0.81-0.3,0.91-0.64c0.03-0.09,0.04-0.18,0.04-0.26V256.1z M196.6,251.62h1.18v6.75h-1.18V251.62z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M169.5,269.61v1.81h1.52v1.2h-1.52v2.8c0,0.77,0.21,1.17,0.82,1.17     c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.19-1.38-0.52     c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98h-0.91v-1.2h0.91v-1.43L169.5,269.61z M175.28,277.75l-0.1-0.7h-0.04c-0.39,0.49-1.05,0.85-1.87,0.85     c-1.27,0-1.99-0.92-1.99-1.89c0-1.6,1.42-2.4,3.76-2.39v-0.1c0-0.42-0.17-1.1-1.29-1.1c-0.62,0-1.27,0.19-1.7,0.47l-0.31-1.04     c0.47-0.29,1.29-0.56,2.29-0.56c2.03,0,2.61,1.29,2.61,2.67v2.29c0,0.57,0.03,1.13,0.09,1.52H175.28z M175.08,274.66     c-1.13-0.03-2.21,0.22-2.21,1.18c0,0.62,0.4,0.91,0.91,0.91c0.64,0,1.11-0.42,1.25-0.87c0.04-0.12,0.05-0.25,0.05-0.35V274.66z M177.77,277.75c0.03-0.43,0.05-1.13,0.05-1.78v-7.45h1.6v3.77h0.03     c0.39-0.61,1.08-1.01,2.03-1.01c1.55,0,2.65,1.29,2.64,3.21c0,2.27-1.44,3.41-2.87,3.41c-0.82,0-1.55-0.31-2-1.09h-0.03     l-0.08,0.95H177.77z M179.42,275.14c0,0.13,0.01,0.26,0.04,0.38c0.17,0.64,0.73,1.12,1.42,1.12c1,0,1.61-0.81,1.61-2.08     c0-1.12-0.53-2.03-1.6-2.03c-0.65,0-1.23,0.47-1.42,1.17c-0.03,0.12-0.05,0.26-0.05,0.42V275.14z M184.92,268.52h1.61v9.23h-1.61V268.52z M188.88,275.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.75-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H188.88z M191.66,273.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H191.66z\'></path></g></g><g id=\'TI30XPRO_KEY_CLEAR_NONE\' class=\'TI30XPRO_KEY_CLEAR_NONE\'><rect x=\'204\' y=\'243\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M246,283h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,282.1,247.1,283,246,283z\'></path><g><path class=\'ti_generalKey_art_primary\' d=\'M221.07,277.56c-0.34,0.16-1,0.32-1.79,0.32c-1.98,0-3.26-1.26-3.26-3.22     c0-1.9,1.3-3.38,3.52-3.38c0.58,0,1.18,0.13,1.55,0.3l-0.29,1.2c-0.26-0.12-0.64-0.25-1.21-0.25c-1.22,0-1.95,0.9-1.94,2.05     c0,1.3,0.85,2.04,1.94,2.04c0.56,0,0.95-0.12,1.26-0.25L221.07,277.56z M221.75,268.52h1.61v9.23h-1.61V268.52z M225.71,275.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.75-0.29l0.23,1.11     c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H225.71z M228.5,273.92c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H228.5z M234.34,277.75l-0.1-0.7h-0.04c-0.39,0.49-1.05,0.85-1.87,0.85     c-1.27,0-1.99-0.92-1.99-1.89c0-1.6,1.42-2.4,3.76-2.39v-0.1c0-0.42-0.17-1.1-1.29-1.1c-0.62,0-1.27,0.19-1.7,0.47l-0.31-1.04     c0.47-0.29,1.29-0.56,2.29-0.56c2.03,0,2.61,1.29,2.61,2.67v2.29c0,0.57,0.03,1.13,0.09,1.52H234.34z M234.14,274.66     c-1.13-0.03-2.21,0.22-2.21,1.18c0,0.62,0.4,0.91,0.91,0.91c0.64,0,1.11-0.42,1.25-0.87c0.04-0.12,0.05-0.25,0.05-0.35V274.66z M236.88,273.46c0-0.86-0.01-1.47-0.05-2.04h1.39l0.05,1.21h0.05     c0.31-0.9,1.05-1.35,1.73-1.35c0.16,0,0.25,0.01,0.38,0.04v1.51c-0.13-0.03-0.27-0.05-0.47-0.05c-0.77,0-1.29,0.49-1.43,1.21     c-0.03,0.14-0.05,0.31-0.05,0.49v3.28h-1.6V273.46z\'></path></g></g><g id=\'TI30XPRO_KEY_PI-E-I_COMPLEX\' class=\'TI30XPRO_KEY_PI-E-I_COMPLEX\'><rect x=\'12\' y=\'287\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,327H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,326.1,55.1,327,54,327z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M23.23,302.22c-0.25,0.11-0.73,0.24-1.31,0.24c-1.44,0-2.39-0.92-2.39-2.36     c0-1.39,0.95-2.47,2.58-2.47c0.43,0,0.87,0.1,1.13,0.22l-0.21,0.88c-0.19-0.09-0.47-0.18-0.88-0.18c-0.89,0-1.43,0.66-1.42,1.5     c0,0.95,0.62,1.49,1.42,1.49c0.41,0,0.69-0.09,0.92-0.18L23.23,302.22z M28.17,300.01c0,1.7-1.2,2.46-2.38,2.46c-1.31,0-2.32-0.9-2.32-2.39     c0-1.52,1-2.45,2.4-2.45C27.25,297.63,28.17,298.6,28.17,300.01z M24.68,300.06c0,0.89,0.44,1.57,1.15,1.57     c0.67,0,1.13-0.66,1.13-1.59c0-0.72-0.32-1.55-1.12-1.55C25.01,298.49,24.68,299.29,24.68,300.06z M28.89,299.12c0-0.53-0.01-0.98-0.04-1.38h1.01l0.05,0.68h0.03     c0.23-0.36,0.65-0.79,1.43-0.79c0.61,0,1.08,0.34,1.28,0.86h0.02c0.16-0.26,0.35-0.45,0.57-0.58c0.26-0.18,0.55-0.28,0.93-0.28     c0.77,0,1.55,0.52,1.55,2.01v2.73h-1.14v-2.56c0-0.77-0.27-1.23-0.83-1.23c-0.4,0-0.69,0.29-0.82,0.62     c-0.03,0.11-0.06,0.26-0.06,0.39v2.78h-1.14v-2.68c0-0.65-0.26-1.1-0.8-1.1c-0.44,0-0.73,0.34-0.84,0.67     c-0.05,0.11-0.07,0.25-0.07,0.38v2.74h-1.14V299.12z M36.7,299.28c0-0.61-0.02-1.1-0.04-1.54h1.03l0.06,0.71h0.02     c0.34-0.52,0.88-0.82,1.59-0.82c1.06,0,1.95,0.91,1.95,2.36c0,1.67-1.06,2.48-2.11,2.48c-0.58,0-1.06-0.25-1.3-0.62h-0.02v2.4     H36.7V299.28z M37.87,300.43c0,0.11,0.01,0.22,0.04,0.32c0.11,0.48,0.53,0.82,1.03,0.82c0.74,0,1.18-0.62,1.18-1.53     c0-0.82-0.4-1.48-1.15-1.48c-0.48,0-0.93,0.35-1.05,0.86c-0.03,0.1-0.05,0.2-0.05,0.29V300.43z M42.02,295.62h1.18v6.75h-1.18V295.62z M45.06,300.38c0.03,0.84,0.68,1.2,1.43,1.2c0.54,0,0.93-0.08,1.28-0.21l0.17,0.81     c-0.4,0.16-0.95,0.29-1.62,0.29c-1.5,0-2.39-0.92-2.39-2.34c0-1.28,0.78-2.49,2.26-2.49c1.5,0,2,1.24,2,2.25     c0,0.22-0.02,0.39-0.04,0.5H45.06z M47.09,299.56c0.01-0.43-0.18-1.13-0.96-1.13c-0.72,0-1.03,0.66-1.07,1.13H47.09z M49.6,297.74l0.55,0.88c0.15,0.25,0.29,0.48,0.42,0.71h0.03     c0.13-0.26,0.27-0.49,0.4-0.73l0.51-0.86h1.27l-1.55,2.22l1.58,2.41h-1.32l-0.57-0.92c-0.15-0.25-0.29-0.49-0.42-0.75h-0.02     c-0.13,0.27-0.27,0.49-0.42,0.75l-0.53,0.92h-1.29l1.61-2.36l-1.55-2.27H49.6z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M36.9,312.72l-0.5,1.45h-1.88l-1.34,3.86c-0.1,0.34-0.16,0.6-0.16,0.78    c0,0.25,0.06,0.44,0.18,0.56c0.12,0.12,0.29,0.18,0.52,0.18c0.24,0,0.45-0.06,0.64-0.19c0.18-0.13,0.31-0.29,0.37-0.48h0.3    c-0.1,0.59-0.34,1.05-0.72,1.38c-0.38,0.33-0.84,0.5-1.37,0.5c-0.39,0-0.72-0.13-0.97-0.4c-0.25-0.27-0.38-0.65-0.38-1.16    c0-0.33,0.05-0.65,0.16-0.96c0.04-0.1,0.06-0.17,0.07-0.21l1.33-3.86h-1.99l-1.52,4.48c-0.27,0.86-0.54,1.43-0.82,1.7    c-0.28,0.27-0.57,0.41-0.86,0.41c-0.25,0-0.45-0.07-0.6-0.21c-0.15-0.14-0.23-0.31-0.23-0.51c0-0.12,0.03-0.26,0.1-0.4    c0.07-0.14,0.23-0.35,0.47-0.65c0.24-0.29,0.45-0.6,0.62-0.93c0.22-0.44,1-2.33,1.18-2.95l0.27-0.95H29.4    c-0.5,0-1.53,0.07-1.73,0.2c-0.2,0.14-0.34,0.35-0.41,0.63h-0.38c0.11-0.91,0.37-1.38,0.78-1.74c0.41-0.36,1.1-0.54,2.06-0.54    H36.9z M43.75,309.13c0,0.71-0.58,1.14-1.25,1.43c-0.48,0.22-1.18,0.39-1.56,0.48      c-0.1,0.03-0.13,0.08-0.17,0.21c-0.04,0.12-0.09,0.35-0.09,0.66c0,0.43,0.27,0.77,0.57,0.77c0.33,0,0.77-0.13,1.43-0.68      c0.09-0.06,0.21-0.2,0.3-0.2c0.06,0,0.1,0.07,0.1,0.09c0,0.12-0.1,0.34-0.18,0.43c-0.64,0.81-1.57,1.35-2.52,1.35      c-0.48,0-1.3-0.58-1.3-1.59c0-0.91,0.65-2.18,1.27-2.83c0.66-0.66,1.56-1.08,2.21-1.08C43.43,308.18,43.75,308.73,43.75,309.13z       M40.95,310.52c-0.03,0.08,0,0.16,0.08,0.13c1.3-0.44,1.57-1.47,1.57-1.69c0-0.29-0.12-0.38-0.23-0.38      C41.83,308.59,41.22,309.51,40.95,310.52z M40.9,318.96c0,0.12-0.09,0.35-0.14,0.47c-0.62,1.48-0.83,2.17-1.23,3.17      c-0.05,0.14,0.05,0.18,0.14,0.18c0.12,0,0.47-0.17,0.95-0.6c0.14-0.12,0.18-0.14,0.26-0.14c0.03,0,0.1,0.04,0.1,0.1      c0,0.1-0.08,0.29-0.22,0.46c-0.64,0.79-1.98,1.47-2.5,1.47c-0.19,0-0.56-0.21-0.56-0.4c0-0.08-0.01-0.08,0.04-0.21      c0.47-1.14,0.87-2.01,1.39-3.42c0.04-0.12,0.01-0.25-0.1-0.25c-0.14,0-0.48,0.13-0.81,0.36c-0.06,0.05-0.18-0.04-0.18-0.09      c0-0.1,0.05-0.2,0.16-0.33c0.29-0.33,1.56-1.2,2.38-1.2C40.72,318.54,40.9,318.84,40.9,318.96z M41.38,316.54      c0,0.43-0.44,0.95-0.92,0.95c-0.13,0-0.25-0.04-0.33-0.09c-0.17-0.13-0.33-0.35-0.33-0.66c0-0.38,0.22-0.64,0.44-0.79      c0.16-0.1,0.32-0.14,0.43-0.14C41.17,315.8,41.38,316.16,41.38,316.54z\'></path></g></g><g id=\'TI30XPRO_KEY_SIN-SIN-1_NUM-SOLV\' class=\'TI30XPRO_KEY_SIN-SIN-1_NUM-SOLV\'><rect x=\'60\' y=\'287\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M102,327H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,326.1,103.1,327,102,327z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M66.27,299.12c0-0.53-0.01-0.98-0.04-1.38h1.03l0.06,0.69h0.03     c0.2-0.36,0.7-0.8,1.47-0.8c0.81,0,1.64,0.52,1.64,1.99v2.75h-1.17v-2.61c0-0.67-0.25-1.17-0.88-1.17     c-0.47,0-0.79,0.33-0.91,0.68c-0.04,0.1-0.05,0.25-0.05,0.38v2.72h-1.18V299.12z M75.61,300.98c0,0.55,0.02,1.01,0.04,1.39h-1.03l-0.06-0.7h-0.02     c-0.2,0.33-0.66,0.81-1.48,0.81c-0.85,0-1.62-0.5-1.62-2.02v-2.72h1.17v2.52c0,0.77,0.25,1.26,0.86,1.26     c0.47,0,0.77-0.33,0.89-0.63c0.04-0.1,0.07-0.23,0.07-0.36v-2.79h1.17V300.98z M76.63,299.12c0-0.53-0.01-0.98-0.04-1.38h1.01l0.05,0.68h0.03     c0.23-0.36,0.65-0.79,1.43-0.79c0.61,0,1.08,0.34,1.28,0.86h0.02c0.16-0.26,0.35-0.45,0.57-0.58c0.26-0.18,0.55-0.28,0.93-0.28     c0.77,0,1.55,0.52,1.55,2.01v2.73h-1.14v-2.56c0-0.77-0.27-1.23-0.83-1.23c-0.4,0-0.69,0.29-0.82,0.62     c-0.03,0.11-0.06,0.26-0.06,0.39v2.78h-1.14v-2.68c0-0.65-0.26-1.1-0.8-1.1c-0.44,0-0.73,0.34-0.84,0.67     c-0.05,0.11-0.07,0.25-0.07,0.38v2.74h-1.14V299.12z M86.53,299.43v0.81h-2.42v-0.81H86.53z M87.15,301.29c0.27,0.16,0.77,0.33,1.19,0.33c0.51,0,0.74-0.21,0.74-0.51     c0-0.31-0.19-0.48-0.76-0.67c-0.9-0.31-1.28-0.81-1.27-1.35c0-0.82,0.67-1.46,1.75-1.46c0.51,0,0.96,0.13,1.23,0.28l-0.23,0.83     c-0.2-0.11-0.57-0.27-0.98-0.27c-0.42,0-0.65,0.2-0.65,0.48c0,0.29,0.22,0.44,0.81,0.65c0.84,0.3,1.23,0.73,1.24,1.42     c0,0.84-0.66,1.44-1.88,1.44c-0.56,0-1.06-0.13-1.41-0.32L87.15,301.29z M95.33,300.01c0,1.7-1.2,2.46-2.38,2.46c-1.31,0-2.32-0.9-2.32-2.39     c0-1.52,1-2.45,2.4-2.45C94.41,297.63,95.33,298.6,95.33,300.01z M91.84,300.06c0,0.89,0.44,1.57,1.15,1.57     c0.67,0,1.13-0.66,1.13-1.59c0-0.72-0.32-1.55-1.12-1.55C92.17,298.49,91.84,299.29,91.84,300.06z M96.05,295.62h1.18v6.75h-1.18V295.62z M98.99,297.74l0.75,2.35c0.13,0.41,0.23,0.78,0.31,1.16h0.03     c0.09-0.38,0.19-0.74,0.31-1.16l0.73-2.35h1.24l-1.77,4.63h-1.15l-1.72-4.63H98.99z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M76.82,314.47c0.31,0.19,0.89,0.38,1.38,0.38c0.59,0,0.86-0.24,0.86-0.59      c0-0.36-0.22-0.55-0.88-0.78c-1.04-0.36-1.49-0.94-1.47-1.56c0-0.95,0.78-1.68,2.02-1.68c0.59,0,1.11,0.15,1.42,0.32l-0.26,0.96      c-0.23-0.13-0.66-0.31-1.13-0.31c-0.48,0-0.75,0.23-0.75,0.56c0,0.34,0.25,0.51,0.94,0.75c0.97,0.35,1.42,0.85,1.43,1.64      c0,0.97-0.76,1.67-2.18,1.67c-0.65,0-1.23-0.15-1.63-0.37L76.82,314.47z M82.49,308.86c0,0.41-0.3,0.73-0.77,0.73c-0.45,0-0.75-0.32-0.75-0.73      c0-0.42,0.31-0.74,0.76-0.74C82.19,308.12,82.47,308.44,82.49,308.86z M81.04,315.71v-5.36h1.36v5.36H81.04z M83.43,311.95c0-0.62-0.01-1.13-0.04-1.59h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.94,0,1.9,0.6,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.39-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V311.95z M76.82,322.97c0.31,0.19,0.89,0.38,1.38,0.38c0.59,0,0.86-0.24,0.86-0.59      c0-0.36-0.22-0.55-0.88-0.78c-1.04-0.36-1.49-0.94-1.47-1.56c0-0.95,0.78-1.68,2.02-1.68c0.59,0,1.11,0.15,1.42,0.32l-0.26,0.96      c-0.23-0.13-0.66-0.31-1.13-0.31c-0.48,0-0.75,0.23-0.75,0.56c0,0.34,0.25,0.51,0.94,0.75c0.97,0.35,1.42,0.85,1.43,1.64      c0,0.97-0.76,1.67-2.18,1.67c-0.65,0-1.23-0.15-1.63-0.37L76.82,322.97z M82.49,317.36c0,0.41-0.3,0.73-0.77,0.73c-0.45,0-0.75-0.32-0.75-0.73      c0-0.42,0.31-0.74,0.76-0.74C82.19,316.62,82.47,316.94,82.49,317.36z M81.04,324.21v-5.36h1.36v5.36H81.04z M83.43,320.45c0-0.62-0.01-1.13-0.04-1.59h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.94,0,1.9,0.6,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.39-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V320.45z M92.68,319.19v0.93h-2.81v-0.93H92.68z M94.81,321.71v-3.41h-0.02l-0.84,0.38l-0.15-0.76l1.14-0.51h0.92v4.29H94.81z\'></path></g></g><g id=\'TI30XPRO_KEY_COS-COS-1_POLY-SOLV\' class=\'TI30XPRO_KEY_COS-COS-1_POLY-SOLV\'><rect x=\'108\' y=\'287\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M150,327h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,326.1,151.1,327,150,327z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M114.81,299.28c0-0.61-0.02-1.1-0.04-1.54h1.03l0.06,0.71h0.02     c0.34-0.52,0.88-0.82,1.59-0.82c1.06,0,1.95,0.91,1.95,2.36c0,1.67-1.06,2.48-2.11,2.48c-0.58,0-1.06-0.25-1.3-0.62h-0.02v2.4     h-1.17V299.28z M115.98,300.43c0,0.11,0.01,0.22,0.04,0.32c0.11,0.48,0.53,0.82,1.03,0.82c0.74,0,1.18-0.62,1.18-1.53     c0-0.82-0.4-1.48-1.15-1.48c-0.48,0-0.93,0.35-1.05,0.86c-0.03,0.1-0.05,0.2-0.05,0.29V300.43z M124.53,300.01c0,1.7-1.2,2.46-2.38,2.46c-1.31,0-2.32-0.9-2.32-2.39     c0-1.52,1-2.45,2.4-2.45C123.61,297.63,124.53,298.6,124.53,300.01z M121.04,300.06c0,0.89,0.44,1.57,1.15,1.57     c0.67,0,1.13-0.66,1.13-1.59c0-0.72-0.32-1.55-1.12-1.55C121.37,298.49,121.04,299.29,121.04,300.06z M125.25,295.62h1.18v6.75h-1.18V295.62z M128.18,297.74l0.84,2.48c0.1,0.29,0.19,0.64,0.26,0.9h0.03     c0.08-0.27,0.16-0.61,0.25-0.91l0.72-2.47h1.25l-1.16,3.16c-0.64,1.73-1.06,2.5-1.62,2.98c-0.46,0.41-0.93,0.56-1.23,0.6     l-0.27-0.99c0.2-0.05,0.45-0.15,0.68-0.32c0.22-0.14,0.48-0.42,0.64-0.73c0.05-0.08,0.08-0.15,0.08-0.21     c0-0.05-0.01-0.11-0.07-0.23l-1.69-4.25H128.18z M133.99,299.43v0.81h-2.42v-0.81H133.99z M134.6,301.29c0.27,0.16,0.77,0.33,1.19,0.33c0.51,0,0.74-0.21,0.74-0.51     c0-0.31-0.19-0.48-0.76-0.67c-0.9-0.31-1.28-0.81-1.27-1.35c0-0.82,0.67-1.46,1.75-1.46c0.51,0,0.96,0.13,1.23,0.28l-0.23,0.83     c-0.2-0.11-0.57-0.27-0.98-0.27c-0.42,0-0.65,0.2-0.65,0.48c0,0.29,0.22,0.44,0.81,0.65c0.84,0.3,1.23,0.73,1.24,1.42     c0,0.84-0.66,1.44-1.88,1.44c-0.56,0-1.06-0.13-1.41-0.32L134.6,301.29z M142.79,300.01c0,1.7-1.2,2.46-2.38,2.46c-1.31,0-2.32-0.9-2.32-2.39     c0-1.52,1-2.45,2.4-2.45C141.86,297.63,142.79,298.6,142.79,300.01z M139.3,300.06c0,0.89,0.44,1.57,1.15,1.57     c0.67,0,1.13-0.66,1.13-1.59c0-0.72-0.32-1.55-1.12-1.55C139.63,298.49,139.3,299.29,139.3,300.06z M143.5,295.62h1.18v6.75h-1.18V295.62z M146.45,297.74l0.75,2.35c0.13,0.41,0.23,0.78,0.31,1.16h0.03     c0.09-0.38,0.19-0.74,0.31-1.16l0.73-2.35h1.24l-1.77,4.63h-1.15l-1.72-4.63H146.45z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M127.77,315.54c-0.29,0.13-0.85,0.28-1.52,0.28c-1.67,0-2.76-1.07-2.76-2.73      c0-1.61,1.1-2.86,2.98-2.86c0.49,0,1,0.11,1.31,0.25l-0.24,1.01c-0.22-0.1-0.54-0.21-1.02-0.21c-1.03,0-1.65,0.76-1.64,1.74      c0,1.1,0.71,1.73,1.64,1.73c0.47,0,0.8-0.1,1.07-0.21L127.77,315.54z M133.33,312.98c0,1.97-1.39,2.85-2.75,2.85c-1.52,0-2.68-1.04-2.68-2.76      c0-1.76,1.15-2.84,2.77-2.84C132.27,310.23,133.33,311.35,133.33,312.98z M129.3,313.04c0,1.03,0.51,1.82,1.33,1.82      c0.77,0,1.31-0.76,1.31-1.84c0-0.84-0.37-1.79-1.3-1.79C129.68,311.22,129.3,312.14,129.3,313.04z M133.95,314.47c0.31,0.19,0.89,0.38,1.38,0.38c0.59,0,0.86-0.24,0.86-0.59      c0-0.36-0.22-0.55-0.88-0.78c-1.04-0.36-1.49-0.94-1.47-1.56c0-0.95,0.78-1.68,2.02-1.68c0.59,0,1.11,0.15,1.42,0.32l-0.26,0.96      c-0.23-0.13-0.66-0.31-1.13-0.31c-0.48,0-0.75,0.23-0.75,0.56c0,0.34,0.25,0.51,0.93,0.75c0.97,0.35,1.42,0.85,1.43,1.64      c0,0.97-0.76,1.67-2.18,1.67c-0.65,0-1.23-0.15-1.63-0.37L133.95,314.47z M127.77,324.04c-0.29,0.13-0.85,0.28-1.52,0.28c-1.67,0-2.76-1.07-2.76-2.73      c0-1.61,1.1-2.86,2.98-2.86c0.49,0,1,0.11,1.31,0.25l-0.24,1.01c-0.22-0.1-0.54-0.21-1.02-0.21c-1.03,0-1.65,0.76-1.64,1.74      c0,1.1,0.71,1.73,1.64,1.73c0.47,0,0.8-0.1,1.07-0.21L127.77,324.04z M133.33,321.48c0,1.97-1.39,2.85-2.75,2.85c-1.52,0-2.68-1.04-2.68-2.76      c0-1.76,1.15-2.84,2.77-2.84C132.27,318.73,133.33,319.85,133.33,321.48z M129.3,321.54c0,1.03,0.51,1.82,1.33,1.82      c0.77,0,1.31-0.76,1.31-1.84c0-0.84-0.37-1.79-1.3-1.79C129.68,319.72,129.3,320.64,129.3,321.54z M133.95,322.97c0.31,0.19,0.89,0.38,1.38,0.38c0.59,0,0.86-0.24,0.86-0.59      c0-0.36-0.22-0.55-0.88-0.78c-1.04-0.36-1.49-0.94-1.47-1.56c0-0.95,0.78-1.68,2.02-1.68c0.59,0,1.11,0.15,1.42,0.32l-0.26,0.96      c-0.23-0.13-0.66-0.31-1.13-0.31c-0.48,0-0.75,0.23-0.75,0.56c0,0.34,0.25,0.51,0.93,0.75c0.97,0.35,1.42,0.85,1.43,1.64      c0,0.97-0.76,1.67-2.18,1.67c-0.65,0-1.23-0.15-1.63-0.37L133.95,322.97z M141.84,318.88v1.02h-3.06v-1.02H141.84z M144.16,321.27v-3.72h-0.02l-0.91,0.42l-0.17-0.83l1.25-0.55h1.01v4.68H144.16z\'></path></g></g><g id=\'TI30XPRO_KEY_TAN-TAN-1_SYS-SOLV\' class=\'TI30XPRO_KEY_TAN-TAN-1_SYS-SOLV\'><rect x=\'156\' y=\'287\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M198,327h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C200,326.1,199.1,327,198,327z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M164.6,301.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L164.6,301.24z M169.35,297.5l0.88,2.61c0.1,0.3,0.2,0.67,0.27,0.95h0.03     c0.08-0.28,0.17-0.64,0.26-0.96l0.76-2.6h1.32l-1.22,3.32c-0.67,1.82-1.12,2.63-1.7,3.13c-0.48,0.43-0.98,0.59-1.29,0.63     l-0.28-1.04c0.21-0.05,0.47-0.16,0.72-0.34c0.23-0.15,0.5-0.44,0.67-0.77c0.05-0.09,0.08-0.16,0.08-0.22     c0-0.05-0.01-0.12-0.07-0.24L168,297.5H169.35z M173.15,301.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L173.15,301.24z M179.32,299.28v0.85h-2.55v-0.85H179.32z M179.97,301.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L179.97,301.24z M188.58,299.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C187.61,297.39,188.58,298.41,188.58,299.89z M184.91,299.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C185.26,298.29,184.91,299.13,184.91,299.94z M189.34,295.27h1.24v7.1h-1.24V295.27z M192.44,297.5l0.79,2.47c0.14,0.43,0.24,0.82,0.33,1.22h0.03     c0.09-0.4,0.2-0.78,0.33-1.22l0.77-2.47h1.3l-1.86,4.87h-1.21l-1.81-4.87H192.44z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M173.32,307.82v1.53h1.29v1.01h-1.29v2.37c0,0.65,0.18,0.99,0.69,0.99      c0.23,0,0.41-0.03,0.53-0.07l0.02,1.03c-0.2,0.08-0.55,0.13-0.98,0.13c-0.5,0-0.91-0.17-1.17-0.44      c-0.29-0.31-0.42-0.79-0.42-1.5v-2.52h-0.77v-1.01H172v-1.21L173.32,307.82z M178.22,314.71l-0.09-0.59h-0.03c-0.33,0.42-0.89,0.71-1.58,0.71      c-1.08,0-1.68-0.78-1.68-1.6c0-1.35,1.2-2.04,3.18-2.02v-0.09c0-0.35-0.14-0.93-1.09-0.93c-0.53,0-1.08,0.17-1.44,0.4      l-0.26-0.88c0.4-0.24,1.09-0.47,1.94-0.47c1.72,0,2.21,1.09,2.21,2.25v1.94c0,0.48,0.02,0.96,0.08,1.29H178.22z M178.04,312.09      c-0.96-0.02-1.87,0.19-1.87,1c0,0.53,0.34,0.77,0.77,0.77c0.54,0,0.94-0.35,1.06-0.74c0.03-0.1,0.04-0.21,0.04-0.3V312.09z M180.36,310.95c0-0.62-0.01-1.13-0.04-1.59h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.93,0,1.9,0.6,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.39-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V310.95z M173.32,316.32v1.53h1.29v1.01h-1.29v2.37c0,0.65,0.18,0.99,0.69,0.99      c0.23,0,0.41-0.03,0.53-0.07l0.02,1.03c-0.2,0.08-0.55,0.13-0.98,0.13c-0.5,0-0.91-0.17-1.17-0.44      c-0.29-0.31-0.42-0.79-0.42-1.5v-2.52h-0.77v-1.01H172v-1.21L173.32,316.32z M178.22,323.21l-0.09-0.59h-0.03c-0.33,0.42-0.89,0.71-1.58,0.71      c-1.08,0-1.68-0.78-1.68-1.6c0-1.35,1.2-2.04,3.18-2.02v-0.09c0-0.35-0.14-0.93-1.09-0.93c-0.53,0-1.08,0.17-1.44,0.4      l-0.26-0.88c0.4-0.24,1.09-0.47,1.94-0.47c1.72,0,2.21,1.09,2.21,2.25v1.94c0,0.48,0.02,0.96,0.08,1.29H178.22z M178.04,320.59      c-0.96-0.02-1.87,0.19-1.87,1c0,0.53,0.34,0.77,0.77,0.77c0.54,0,0.94-0.35,1.06-0.74c0.03-0.1,0.04-0.21,0.04-0.3V320.59z M180.36,319.45c0-0.62-0.01-1.13-0.04-1.59h1.19l0.07,0.8h0.03      c0.23-0.42,0.81-0.92,1.71-0.92c0.93,0,1.9,0.6,1.9,2.3v3.18h-1.35v-3.03c0-0.77-0.29-1.35-1.02-1.35      c-0.54,0-0.91,0.39-1.06,0.79c-0.04,0.12-0.06,0.29-0.06,0.44v3.15h-1.36V319.45z M189.89,317.88v1.02h-3.06v-1.02H189.89z M192.21,320.27v-3.72h-0.02l-0.91,0.42l-0.17-0.83l1.25-0.55h1.01v4.68H192.21z\'></path></g></g><g id=\'TI30XPRO_KEY_DIVIDE_PERCENT\' class=\'TI30XPRO_KEY_DIVIDE_PERCENT\'><rect x=\'204\' y=\'287\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,327h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,326.1,247.1,327,246,327z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M227.52,298.06c0,1.5-0.95,2.28-1.98,2.28c-1.09,0-1.95-0.81-1.95-2.16     c0-1.28,0.78-2.24,2-2.24C226.83,295.94,227.52,296.84,227.52,298.06z M224.84,298.14c0,0.75,0.25,1.29,0.74,1.29     c0.47,0,0.7-0.48,0.7-1.29c0-0.73-0.2-1.29-0.71-1.29C225.07,296.85,224.84,297.42,224.84,298.14z M225.63,303.33l4.1-7.39h0.9     l-4.11,7.39H225.63z M232.67,301.03c0,1.5-0.95,2.28-1.98,2.28c-1.08,0-1.94-0.81-1.95-2.16c0-1.28,0.78-2.24,2-2.24     C231.98,298.91,232.67,299.81,232.67,301.03z M230,301.11c-0.01,0.75,0.24,1.29,0.73,1.29c0.47,0,0.7-0.48,0.7-1.29     c0-0.73-0.19-1.29-0.7-1.29C230.22,299.82,230,300.39,230,301.11z\'></path></g><g><rect x=\'227.61\' y=\'310.49\' transform=\'matrix(4.464879e-11 -1 1 4.464879e-11 -87.5296 544.4688)\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect><circle class=\'ti_fourFunctionKey_art_primary\' cx=\'228.47\' cy=\'311.52\' r=\'1.28\'></circle><circle class=\'ti_fourFunctionKey_art_primary\' cx=\'228.47\' cy=\'320.48\' r=\'1.28\'></circle></g></g><g id=\'TI30XPRO_KEY_XNTH_NTHSQRT\' class=\'TI30XPRO_KEY_XNTH_NTHSQRT\'><rect x=\'12\' y=\'331\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,371H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,370.1,55.1,371,54,371z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M29.43,340.34h3.07h0.42v0.42v3.07v0.42H32.5h-3.07h-0.42v-0.42v-3.07v-0.42H29.43    L29.43,340.34z M32.08,341.17h-2.24v2.24h2.24V341.17z M32.98,349.39l-2.58-3.05c-0.22-0.26-0.19-0.65,0.07-0.87c0.26-0.22,0.65-0.19,0.87,0.07    l1.49,1.77l3.46-5.43l6.69,0c0.34,0,0.62,0.28,0.62,0.62s-0.28,0.62-0.62,0.62l-6.01,0L32.98,349.39z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M32.88,358.93l0.53,1.67c0.02,0.06,0.11,0.04,0.15-0.02       c0.68-0.99,1.27-1.73,1.9-2.28c0.19-0.17,0.57-0.46,1.03-0.46c0.74,0,0.93,0.53,0.93,0.93c0,0.34-0.61,1.25-1.1,1.25       c-0.15,0-0.21-0.02-0.32-0.19c-0.09-0.15-0.28-0.4-0.46-0.4c-0.53,0-1.52,1.29-1.82,1.79c-0.09,0.15-0.08,0.38-0.06,0.49       c0.47,1.73,0.78,2.41,1.1,2.41c0.27,0,0.61-0.29,1.1-0.97c0.08-0.1,0.21-0.17,0.25-0.17c0.13,0,0.21,0.13,0.17,0.46       c-0.19,1.25-1.63,2.41-2.64,2.41c-0.4,0-0.99-0.59-1.22-1.31c-0.17-0.55-0.29-1.01-0.44-1.48c-0.02-0.02-0.1-0.06-0.13,0       c-1.44,2.13-2.26,2.93-3.13,2.93c-0.53,0-0.95-0.47-0.91-0.95c0.04-0.7,0.59-1.14,0.89-1.27c0.13-0.04,0.32-0.04,0.38,0.06       c0.08,0.13,0.32,0.4,0.65,0.4c0.46,0,1.14-0.55,1.96-1.79c0.1-0.13,0.08-0.34,0.06-0.44c0-0.13-0.48-1.58-0.59-1.92       c-0.13-0.4-0.23-0.42-0.36-0.42c-0.27,0-0.59,0.27-1.06,0.86c-0.06,0.08-0.15,0.17-0.23,0.17c-0.11,0-0.17-0.21-0.17-0.36       c0.08-0.74,1.39-2.45,2.68-2.45C32.42,357.89,32.77,358.59,32.88,358.93z M38.89,354.19h4.42h0.6v0.6v4.42v0.6h-0.6h-4.42h-0.6v-0.6v-4.42v-0.6H38.89     L38.89,354.19z M42.71,355.39h-3.22v3.22h3.22V355.39z\'></path></g></g><g id=\'TI30XPRO_KEY_FRACTION_RECIPRICAL\' class=\'TI30XPRO_KEY_FRACTION_RECIPRICAL\'><rect x=\'60\' y=\'331\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M102.16,371H65.84c-1.11,0-2.01-0.9-2.01-2.01v-31.98c0-1.11,0.9-2.01,2.01-2.01h36.33   c1.11,0,2.01,0.9,2.01,2.01v31.98C104.17,370.1,103.27,371,102.16,371z\'></path><g><path class=\'ti_generalKey_art_primary\' d=\'M85.62,354.39v3.22h-3.24v-3.22H85.62 M86.83,353.19h-5.67v5.62h5.67V353.19     L86.83,353.19z M85.62,364.39v3.22h-3.24v-3.22H85.62 M86.83,363.19h-5.67v5.62h5.67V363.19     L86.83,363.19z\'></path><rect x=\'79.75\' y=\'360.44\' class=\'ti_generalKey_art_primary\' width=\'8.5\' height=\'1.12\'></rect></g><g><rect x=\'81.58\' y=\'343.02\' class=\'ti_calc_case_art_second\' width=\'4.84\' height=\'0.64\'></rect><path class=\'ti_calc_case_art_second\' d=\'M85.15,345.26v2.13h-2.31v-2.13H85.15 M85.96,344.46h-3.92v3.73h3.92V344.46     L85.96,344.46z M84.61,342.26h-0.97v-2.72c-0.35,0.33-0.77,0.57-1.25,0.73v-0.87       c0.25-0.08,0.53-0.24,0.82-0.47c0.3-0.23,0.5-0.5,0.61-0.8h0.79V342.26z\'></path></g></g><g id=\'TI30XPRO_KEY_LEFTPAREN_CONSTANTS\' class=\'TI30XPRO_KEY_LEFTPAREN_CONSTANTS\'><rect x=\'108\' y=\'331\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M150,371h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,370.1,151.1,371,150,371z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M117.21,346.22c-0.25,0.11-0.73,0.24-1.31,0.24c-1.44,0-2.39-0.92-2.39-2.36     c0-1.39,0.95-2.47,2.58-2.47c0.43,0,0.87,0.1,1.13,0.22l-0.21,0.88c-0.19-0.09-0.47-0.18-0.88-0.18c-0.89,0-1.43,0.66-1.42,1.5     c0,0.95,0.62,1.49,1.42,1.49c0.41,0,0.69-0.08,0.92-0.18L117.21,346.22z M122.15,344.01c0,1.7-1.2,2.46-2.38,2.46c-1.31,0-2.32-0.9-2.32-2.39     c0-1.52,1-2.45,2.4-2.45C121.23,341.63,122.15,342.6,122.15,344.01z M118.67,344.06c0,0.89,0.44,1.57,1.15,1.57     c0.67,0,1.13-0.66,1.13-1.59c0-0.72-0.32-1.55-1.12-1.55C119,342.49,118.67,343.29,118.67,344.06z M122.87,343.12c0-0.53-0.01-0.98-0.04-1.38h1.03l0.06,0.69h0.03     c0.2-0.36,0.7-0.8,1.47-0.8c0.81,0,1.64,0.52,1.64,1.99v2.75h-1.17v-2.61c0-0.67-0.25-1.17-0.88-1.17     c-0.47,0-0.79,0.33-0.91,0.68c-0.04,0.1-0.05,0.25-0.05,0.38v2.72h-1.18V343.12z M128.01,345.29c0.27,0.16,0.77,0.33,1.19,0.33c0.51,0,0.74-0.21,0.74-0.51     c0-0.31-0.19-0.48-0.76-0.67c-0.9-0.31-1.28-0.81-1.27-1.35c0-0.82,0.67-1.46,1.75-1.46c0.51,0,0.96,0.13,1.23,0.28l-0.23,0.83     c-0.2-0.11-0.57-0.27-0.98-0.27c-0.42,0-0.65,0.2-0.65,0.48c0,0.29,0.22,0.44,0.81,0.65c0.84,0.3,1.23,0.73,1.24,1.42     c0,0.84-0.66,1.44-1.88,1.44c-0.56,0-1.06-0.13-1.41-0.32L128.01,345.29z M133.13,340.42v1.32h1.11v0.88h-1.11v2.04c0,0.56,0.15,0.86,0.6,0.86     c0.2,0,0.35-0.03,0.46-0.06l0.02,0.89c-0.17,0.07-0.47,0.11-0.85,0.11c-0.43,0-0.79-0.14-1.01-0.38     c-0.25-0.27-0.36-0.68-0.36-1.29v-2.18h-0.67v-0.88h0.67v-1.04L133.13,340.42z M137.5,346.37l-0.08-0.51h-0.03c-0.29,0.36-0.77,0.62-1.37,0.62     c-0.93,0-1.46-0.67-1.46-1.38c0-1.17,1.04-1.76,2.75-1.75v-0.08c0-0.3-0.12-0.81-0.94-0.81c-0.46,0-0.93,0.14-1.25,0.34     l-0.23-0.76c0.34-0.21,0.94-0.41,1.67-0.41c1.48,0,1.91,0.94,1.91,1.95v1.67c0,0.42,0.02,0.83,0.07,1.11H137.5z M137.34,344.1     c-0.83-0.02-1.62,0.16-1.62,0.87c0,0.46,0.29,0.67,0.67,0.67c0.47,0,0.81-0.3,0.91-0.64c0.03-0.08,0.04-0.18,0.04-0.26V344.1z M139.48,343.12c0-0.53-0.01-0.98-0.04-1.38h1.03l0.06,0.69h0.03     c0.2-0.36,0.7-0.8,1.47-0.8c0.81,0,1.64,0.52,1.64,1.99v2.75h-1.17v-2.61c0-0.67-0.25-1.17-0.88-1.17     c-0.47,0-0.79,0.33-0.91,0.68c-0.04,0.1-0.05,0.25-0.05,0.38v2.72h-1.18V343.12z M145.97,340.42v1.32h1.11v0.88h-1.11v2.04c0,0.56,0.15,0.86,0.6,0.86     c0.2,0,0.35-0.03,0.46-0.06l0.02,0.89c-0.17,0.07-0.47,0.11-0.85,0.11c-0.43,0-0.79-0.14-1.01-0.38     c-0.25-0.27-0.36-0.68-0.36-1.29v-2.18h-0.67v-0.88h0.67v-1.04L145.97,340.42z M147.67,345.29c0.27,0.16,0.77,0.33,1.19,0.33c0.51,0,0.74-0.21,0.74-0.51     c0-0.31-0.19-0.48-0.76-0.67c-0.9-0.31-1.28-0.81-1.27-1.35c0-0.82,0.67-1.46,1.75-1.46c0.51,0,0.96,0.13,1.23,0.28l-0.23,0.83     c-0.2-0.11-0.57-0.27-0.98-0.27c-0.42,0-0.65,0.2-0.65,0.48c0,0.29,0.22,0.44,0.81,0.65c0.84,0.3,1.23,0.73,1.24,1.42     c0,0.84-0.66,1.44-1.88,1.44c-0.56,0-1.06-0.13-1.41-0.32L147.67,345.29z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M134.08,354.89c-0.86,1.38-1.52,3.39-1.52,6.07c0,2.64,0.68,4.63,1.52,6.03h-1.59     c-0.81-1.16-1.71-3.15-1.71-6.04c0.02-2.91,0.9-4.89,1.71-6.06H134.08z\'></path></g></g><g id=\'TI30XPRO_KEY_RIGHTPAREN_OP\' class=\'TI30XPRO_KEY_RIGHTPAREN_OP\'><rect x=\'156\' y=\'331\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M198,371h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C200,370.1,199.1,371,198,371z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M179.79,343.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C178.82,341.39,179.79,342.41,179.79,343.89z M176.12,343.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C176.47,342.29,176.12,343.13,176.12,343.94z M180.55,343.12c0-0.64-0.02-1.16-0.04-1.62h1.08l0.06,0.75h0.02     c0.36-0.55,0.93-0.86,1.67-0.86c1.12,0,2.05,0.96,2.05,2.48c0,1.76-1.11,2.61-2.22,2.61c-0.61,0-1.12-0.26-1.37-0.65h-0.02v2.52     h-1.23V343.12z M181.78,344.33c0,0.12,0.01,0.23,0.04,0.34c0.12,0.5,0.56,0.86,1.08,0.86c0.78,0,1.24-0.65,1.24-1.61     c0-0.86-0.42-1.56-1.21-1.56c-0.51,0-0.98,0.37-1.1,0.91c-0.03,0.1-0.05,0.21-0.05,0.31V344.33z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M178.45,366.99c0.82-1.38,1.51-3.41,1.51-6.06c0-2.66-0.67-4.65-1.51-6.04h1.59     c0.79,1.15,1.71,3.12,1.71,6.04c-0.02,2.92-0.92,4.89-1.71,6.06H178.45z\'></path></g></g><g id=\'TI30XPRO_KEY_MULTIPLY_SETOP\' class=\'TI30XPRO_KEY_MULTIPLY_SETOP\'><rect x=\'204\' y=\'331\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,371h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,370.1,247.1,371,246,371z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M216.14,345.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L216.14,345.24z M220.99,344.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H220.99z M223.13,343.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H223.13z M226.44,340.11v1.39h1.17v0.92h-1.17v2.15c0,0.59,0.16,0.9,0.63,0.9     c0.21,0,0.37-0.03,0.48-0.06l0.02,0.94c-0.18,0.07-0.5,0.12-0.89,0.12c-0.45,0-0.83-0.15-1.06-0.4     c-0.26-0.28-0.38-0.72-0.38-1.36v-2.29h-0.7v-0.92h0.7v-1.1L226.44,340.11z M234.74,343.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C233.77,341.39,234.74,342.41,234.74,343.89z M231.07,343.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C231.42,342.29,231.07,343.13,231.07,343.94z M235.5,343.12c0-0.64-0.02-1.16-0.04-1.62h1.08l0.06,0.75h0.02     c0.36-0.55,0.93-0.86,1.67-0.86c1.12,0,2.05,0.96,2.05,2.48c0,1.76-1.11,2.61-2.22,2.61c-0.61,0-1.12-0.26-1.37-0.65h-0.02v2.52     h-1.23V343.12z M236.73,344.33c0,0.12,0.01,0.23,0.04,0.34c0.12,0.5,0.56,0.86,1.08,0.86c0.78,0,1.24-0.65,1.24-1.61     c0-0.86-0.42-1.56-1.21-1.56c-0.51,0-0.98,0.37-1.1,0.91c-0.03,0.1-0.05,0.21-0.05,0.31V344.33z\'></path></g><g><rect x=\'227.61\' y=\'354.99\' transform=\'matrix(0.7071 -0.7071 0.7071 0.7071 -187.9936 267.1399)\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect><rect x=\'227.61\' y=\'354.99\' transform=\'matrix(-0.7071 -0.7071 0.7071 -0.7071 135.1112 776.9614)\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect></g></g><g id=\'TI30XPRO_KEY_X2_SQRT\' class=\'TI30XPRO_KEY_X2_SQRT\'><rect x=\'12\' y=\'375\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,415H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,414.1,55.1,415,54,415z\'></path><path class=\'ti_calc_case_art_second\' d=\'M32.05,391.73l-2.58-3.05c-0.22-0.26-0.19-0.65,0.07-0.87c0.26-0.22,0.65-0.19,0.87,0.07   l1.49,1.77l3.46-5.43l6.69,0c0.34,0,0.62,0.28,0.62,0.62s-0.28,0.62-0.62,0.62l-6.01,0L32.05,391.73z\'></path><g><path class=\'ti_generalKey_art_primary\' d=\'M32.97,402.74l0.53,1.67c0.02,0.06,0.11,0.04,0.15-0.02c0.68-0.99,1.27-1.73,1.9-2.28     c0.19-0.17,0.57-0.46,1.03-0.46c0.74,0,0.93,0.53,0.93,0.93c0,0.34-0.61,1.25-1.1,1.25c-0.15,0-0.21-0.02-0.32-0.19     c-0.09-0.15-0.28-0.4-0.46-0.4c-0.53,0-1.52,1.29-1.82,1.79c-0.09,0.15-0.08,0.38-0.06,0.49c0.47,1.73,0.78,2.41,1.1,2.41     c0.27,0,0.61-0.29,1.1-0.97c0.08-0.1,0.21-0.17,0.25-0.17c0.13,0,0.21,0.13,0.17,0.46c-0.19,1.25-1.63,2.41-2.64,2.41     c-0.4,0-0.99-0.59-1.22-1.31c-0.17-0.55-0.29-1.01-0.44-1.48c-0.02-0.02-0.1-0.06-0.13,0c-1.44,2.13-2.26,2.93-3.13,2.93     c-0.53,0-0.95-0.47-0.91-0.95c0.04-0.7,0.59-1.14,0.89-1.27c0.13-0.04,0.32-0.04,0.38,0.06c0.08,0.13,0.32,0.4,0.65,0.4     c0.46,0,1.14-0.55,1.96-1.79c0.1-0.13,0.08-0.34,0.06-0.44c0-0.13-0.48-1.58-0.59-1.92c-0.13-0.4-0.23-0.42-0.36-0.42     c-0.27,0-0.59,0.27-1.06,0.86c-0.06,0.08-0.15,0.17-0.23,0.17c-0.11,0-0.17-0.21-0.17-0.36c0.08-0.74,1.39-2.45,2.68-2.45     C32.52,401.7,32.86,402.4,32.97,402.74z M39.25,402.7l0.94-0.86c1.2-1.08,1.82-1.68,1.82-2.38c0-0.5-0.33-0.88-1-0.88     c-0.51,0-0.98,0.23-1.29,0.44l-0.39-0.94c0.45-0.35,1.2-0.65,2.04-0.65c1.47,0,2.16,0.85,2.16,1.77c0,1.12-0.85,1.88-1.85,2.74     l-0.42,0.35v0.03h2.38v1.09h-4.39V402.7z\'></path></g></g><g id=\'TI30XPRO_KEY_7_MIXEDFRACTION\' class=\'TI30XPRO_KEY_7_MIXEDFRACTION\'><rect x=\'60\' y=\'375\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M102,415H66c-1.1,0-2-0.9-2-2v-26c0-4.42,3.58-8,8-8h30c1.1,0,2,0.9,2,2v32   C104,414.1,103.1,415,102,415z\'></path><g><rect x=\'84.84\' y=\'387.23\' class=\'ti_calc_case_art_second_dark\' width=\'5.27\' height=\'0.7\'></rect><path class=\'ti_calc_case_art_second_dark\' d=\'M77.89,384.09l0.01,7.15l5.69,0l-0.01-7.15L77.89,384.09L77.89,384.09z     M82.53,385.14c0,0.8,0,4.24,0,5.04c-0.72,0-2.86,0-3.58,0c0-0.8,0-4.24,0-5.04C79.67,385.14,81.81,385.14,82.53,385.14z M85.94,382.69h3.07h0.42v0.42v3.07v0.42h-0.42h-3.07h-0.42v-0.42v-3.07v-0.42H85.94    L85.94,382.69z M88.59,383.52h-2.24v2.24h2.24V383.52z M85.94,388.58h3.07h0.42V389v3.07v0.42h-0.42h-3.07h-0.42v-0.42V389v-0.42H85.94    L85.94,388.58z M88.59,389.41h-2.24v2.24h2.24V389.41z\'></path></g><g><polygon class=\'ti_numpadKey_art_primary\' points=\'88,403.82 80.15,403.82 81.15,402 89,402    \'></polygon><path class=\'ti_numpadKey_art_primary\' d=\'M88.66,396.1v1.66l-5.77,11.99h-2.73l5.75-11.46v-0.04h-6.42v-2.14H88.66z\'></path></g></g><g id=\'TI30XPRO_KEY_8_CONVERT\' class=\'TI30XPRO_KEY_8_CONVERT\'><rect x=\'108\' y=\'375\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M150,415h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,414.1,151.1,415,150,415z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M120.6,390.21c-0.26,0.12-0.77,0.25-1.38,0.25c-1.52,0-2.51-0.97-2.51-2.48     c0-1.46,1-2.6,2.71-2.6c0.45,0,0.91,0.1,1.19,0.23l-0.22,0.92c-0.2-0.09-0.49-0.19-0.93-0.19c-0.94,0-1.5,0.69-1.49,1.58     c0,1,0.65,1.57,1.49,1.57c0.43,0,0.73-0.09,0.97-0.19L120.6,390.21z M125.8,387.88c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C124.83,385.38,125.8,386.4,125.8,387.88z M122.13,387.93c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C122.48,386.28,122.13,387.12,122.13,387.93z M126.57,386.94c0-0.56-0.01-1.03-0.04-1.45h1.08l0.06,0.73h0.03     c0.21-0.38,0.74-0.84,1.55-0.84c0.85,0,1.73,0.55,1.73,2.09v2.89h-1.23v-2.75c0-0.7-0.26-1.23-0.93-1.23     c-0.49,0-0.83,0.35-0.96,0.72c-0.04,0.11-0.05,0.26-0.05,0.4v2.86h-1.24V386.94z M132.65,385.49l0.79,2.47c0.14,0.43,0.24,0.82,0.33,1.22h0.03     c0.09-0.4,0.2-0.78,0.33-1.22l0.77-2.47h1.3l-1.86,4.87h-1.21l-1.81-4.87H132.65z M137.45,388.27c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22     l0.18,0.85c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H137.45z M139.58,387.41c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H139.58z M141.48,387.06c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V387.06z M146.43,384.1v1.39h1.17v0.92h-1.17v2.15c0,0.59,0.16,0.9,0.63,0.9     c0.21,0,0.37-0.03,0.48-0.06l0.02,0.94c-0.18,0.07-0.5,0.12-0.89,0.12c-0.45,0-0.83-0.15-1.06-0.4     c-0.26-0.28-0.38-0.72-0.38-1.36v-2.29h-0.7v-0.92h0.7v-1.1L146.43,384.1z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M127.09,406.24c0-1.7,0.99-2.86,2.56-3.55v-0.06c-1.43-0.69-2.08-1.83-2.08-3.02     c0-2.22,1.97-3.74,4.56-3.74c2.94,0,4.28,1.76,4.28,3.44c0,1.15-0.61,2.35-2.1,3.09v0.06c1.49,0.57,2.6,1.74,2.6,3.44     c0,2.44-2.06,4.07-4.98,4.07C128.74,409.98,127.09,408.15,127.09,406.24z M134.29,406.12c0-1.39-1.03-2.14-2.54-2.56     c-1.28,0.38-2.02,1.26-2.02,2.39c-0.04,1.15,0.84,2.2,2.29,2.2C133.38,408.15,134.29,407.29,134.29,406.12z M130.03,399.5     c0,1.11,0.92,1.78,2.23,2.14c0.92-0.27,1.7-1.03,1.7-2.06c0-0.94-0.57-1.93-1.95-1.93C130.7,397.65,130.03,398.51,130.03,399.5z\'></path></g></g><g id=\'TI30XPRO_KEY_9_BASEN\' class=\'TI30XPRO_KEY_9_BASEN\'><rect x=\'156\' y=\'375\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M198,415h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h30c4.42,0,8,3.58,8,8v26   C200,414.1,199.1,415,198,415z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M167.34,390.36c0.02-0.33,0.04-0.87,0.04-1.37v-5.73h1.23v2.9h0.02     c0.3-0.47,0.83-0.78,1.56-0.78c1.19,0,2.04,0.99,2.03,2.47c0,1.75-1.11,2.62-2.21,2.62c-0.63,0-1.19-0.24-1.54-0.84h-0.02     l-0.06,0.73H167.34z M168.61,388.35c0,0.1,0.01,0.2,0.03,0.29c0.13,0.49,0.56,0.86,1.09,0.86c0.77,0,1.24-0.62,1.24-1.6     c0-0.86-0.41-1.56-1.23-1.56c-0.5,0-0.95,0.36-1.09,0.9c-0.02,0.09-0.04,0.2-0.04,0.32V388.35z M175.72,390.36l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H175.72z M175.56,387.98     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V387.98z M177.75,389.23c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L177.75,389.23z M182.6,388.27c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H182.6z M184.74,387.41c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H184.74z M188.46,386.94c0-0.56-0.01-1.03-0.04-1.45h1.08l0.06,0.73h0.03     c0.21-0.38,0.74-0.84,1.55-0.84c0.85,0,1.73,0.55,1.73,2.09v2.89h-1.23v-2.75c0-0.7-0.26-1.23-0.93-1.23     c-0.49,0-0.83,0.35-0.96,0.72c-0.04,0.11-0.05,0.26-0.05,0.4v2.86h-1.24V386.94z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M176.32,407.9c0.4,0.04,0.8,0.02,1.43-0.04c1.01-0.08,2.02-0.44,2.77-1.05     c0.88-0.71,1.49-1.74,1.74-3.02l-0.04-0.02c-0.69,0.78-1.66,1.22-2.98,1.22c-2.37,0-4.14-1.72-4.14-4.24     c0-2.6,2.02-4.87,4.93-4.87c3.17,0,4.87,2.5,4.87,5.82c0,2.92-0.97,5-2.37,6.34c-1.2,1.11-2.83,1.74-4.66,1.87     c-0.59,0.06-1.18,0.06-1.55,0.04V407.9z M177.67,400.59c0.02,1.41,0.82,2.5,2.25,2.5c1.05,0,1.81-0.48,2.2-1.13     c0.08-0.17,0.15-0.38,0.15-0.73c0.02-1.85-0.67-3.44-2.35-3.44C178.61,397.78,177.67,398.93,177.67,400.59z\'></path></g></g><g id=\'TI30XPRO_KEY_SUBTRACT_NONE\' class=\'TI30XPRO_KEY_SUBTRACT_NONE\'><rect x=\'204\' y=\'375\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,415h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,414.1,247.1,415,246,415z\'></path><g><rect x=\'227.61\' y=\'399.63\' transform=\'matrix(4.464879e-11 -1 1 4.464879e-11 -176.6741 633.6132)\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect></g><g><path class=\'ti_calc_case_art_second\' d=\'M231.13,385.91L231.13,385.91c-0.56-0.57-1.34-0.91-2.2-0.91     c-0.86,0-1.64,0.35-2.2,0.91l0,0c-0.56,0.56-0.91,1.34-0.91,2.2c0,0.86,0.35,1.64,0.91,2.2h0c0.56,0.56,1.34,0.91,2.2,0.91     c0.86,0,1.64-0.35,2.2-0.91l0,0c0.56-0.56,0.91-1.34,0.91-2.2C232.05,387.26,231.7,386.48,231.13,385.91z M227.24,389.8     L227.24,389.8c-0.43-0.43-0.7-1.03-0.7-1.69c0-0.66,0.27-1.26,0.7-1.69l0,0c0.43-0.43,1.03-0.7,1.69-0.7v4.77     C228.27,390.5,227.67,390.24,227.24,389.8z\'></path><polygon class=\'ti_calc_case_art_second\' points=\'219.5,388.42 221.59,387.53 223.68,386.63 223.68,388.42 223.68,390.22      221.59,389.32    \'></polygon></g></g><g id=\'TI30XPRO_KEY_XVAR_CLEARVAR\' class=\'TI30XPRO_KEY_XVAR_CLEARVAR\'><rect x=\'12\' y=\'419\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,459H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,458.1,55.1,459,54,459z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M23.03,434.22c-0.26,0.12-0.77,0.25-1.38,0.25c-1.52,0-2.51-0.97-2.51-2.48     c0-1.46,1-2.6,2.71-2.6c0.45,0,0.91,0.1,1.19,0.23l-0.22,0.92c-0.2-0.09-0.49-0.19-0.93-0.19c-0.94,0-1.5,0.69-1.49,1.58     c0,1,0.65,1.57,1.49,1.57c0.43,0,0.73-0.09,0.97-0.19L23.03,434.22z M23.69,427.27h1.24v7.1h-1.24V427.27z M26.88,432.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H26.88z M29.02,431.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H29.02z M33.66,434.37l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H33.66z M33.5,431.99     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V431.99z M35.75,431.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V431.07z M41.66,429.5l0.79,2.47c0.14,0.43,0.24,0.82,0.33,1.22h0.03     c0.09-0.4,0.2-0.78,0.33-1.22l0.77-2.47h1.3l-1.86,4.87h-1.21l-1.81-4.87H41.66z M48.39,434.37l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H48.39z M48.23,431.99     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V431.99z M50.48,431.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V431.07z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M25.42,446.17l0.53,1.67c0.02,0.06,0.11,0.04,0.15-0.02      c0.68-0.99,1.27-1.73,1.9-2.28c0.19-0.17,0.57-0.46,1.03-0.46c0.74,0,0.93,0.53,0.93,0.93c0,0.34-0.61,1.25-1.1,1.25      c-0.15,0-0.21-0.02-0.32-0.19c-0.09-0.15-0.28-0.4-0.46-0.4c-0.53,0-1.52,1.29-1.82,1.79c-0.09,0.15-0.08,0.38-0.06,0.49      c0.47,1.73,0.78,2.41,1.1,2.41c0.27,0,0.61-0.29,1.1-0.97c0.08-0.1,0.21-0.17,0.25-0.17c0.13,0,0.21,0.13,0.17,0.46      c-0.19,1.25-1.63,2.41-2.64,2.41c-0.4,0-0.99-0.59-1.22-1.31c-0.17-0.55-0.29-1.01-0.44-1.48c-0.02-0.02-0.1-0.06-0.13,0      c-1.44,2.13-2.26,2.93-3.13,2.93c-0.53,0-0.95-0.47-0.91-0.95c0.04-0.7,0.59-1.14,0.89-1.27c0.13-0.04,0.32-0.04,0.38,0.06      c0.08,0.13,0.32,0.4,0.65,0.4c0.46,0,1.14-0.55,1.96-1.79c0.1-0.13,0.08-0.34,0.06-0.44c0-0.13-0.48-1.58-0.59-1.92      c-0.13-0.4-0.23-0.42-0.36-0.42c-0.27,0-0.59,0.27-1.06,0.86c-0.06,0.08-0.15,0.17-0.23,0.17c-0.11,0-0.17-0.21-0.17-0.36      c0.08-0.74,1.39-2.45,2.68-2.45C24.97,445.12,25.31,445.83,25.42,446.17z M34.48,443.05c0.06,0.66,0.13,1.8,0.05,2.36c-0.01,0.07,0.02,0.17,0.13-0.02      c0.47-0.83,0.81-1.99,0.85-3.24c0-0.11,0.14-0.21,0.21-0.21c0.24,0,0.5,0.42,0.5,0.53c0,0.87-0.73,2.27-1.18,2.99      c-0.45,0.71-0.95,1.34-1.15,1.62c-0.33,0.45-0.87,1.09-1.33,1.44c-0.39,0.28-0.74,0.43-1.18,0.43c-0.21,0-0.54-0.15-0.54-0.46      c0-0.39,0.42-0.72,0.55-0.72c0.04,0,0.13,0.01,0.15,0.04c0.15,0.11,0.4,0.36,0.61,0.36c0.25,0,0.45-0.04,0.72-0.38      c0.37-0.47,0.63-1.79,0.63-2.82c0-0.94-0.02-1.49-0.1-1.85c-0.06-0.28-0.13-0.36-0.22-0.36c-0.09,0-0.33,0.33-0.56,0.7      c-0.08,0.14-0.18,0.22-0.23,0.22c-0.06,0-0.11-0.14-0.11-0.25c0-0.44,0.66-1.47,1.54-1.47      C34.12,441.96,34.43,442.47,34.48,443.05z M40.19,442.26c0.21,0.09,0.3,0.05,0.41,0.05c0.13,0,0.4-0.11,0.62-0.28      c0.12-0.09,0.19-0.12,0.25-0.12c0.07,0,0.12,0.07,0.12,0.12c0,0.08-0.09,0.23-0.15,0.28c-0.45,0.39-2.49,2.09-2.87,2.52      c-0.05,0.06-0.04,0.1,0.03,0.1c0.34,0,0.75,0.18,1.12,0.44c0.25,0.18,0.48,0.24,0.59,0.24c0.39,0,0.4-0.27,0.4-0.68      c0-0.1-0.04-0.29-0.05-0.35c-0.01-0.04,0.04-0.09,0.11-0.09c0.23,0,0.42,0.27,0.41,0.57c-0.01,0.39-0.36,0.71-0.69,0.99      c-0.28,0.23-0.76,0.46-1.04,0.46c-0.19,0-0.46-0.18-0.86-0.47c-0.39-0.29-0.52-0.36-0.69-0.36c-0.08,0-0.28,0.03-0.42,0.21      c-0.04,0.05-0.17,0.24-0.24,0.39c-0.02,0.04-0.08,0.08-0.1,0.08c-0.06,0-0.21-0.16-0.21-0.27c-0.01-0.22,0.18-0.42,0.36-0.59      c0.58-0.53,2.51-2.17,2.57-2.32c0.02-0.05,0-0.05-0.04-0.05c-0.15,0-0.35-0.03-0.58-0.09c-0.33-0.08-0.74-0.32-0.98-0.32      c-0.14,0-0.22,0.06-0.23,0.18c0,0.09,0,0.29,0.05,0.45c0.02,0.06-0.01,0.08-0.09,0.16c-0.12,0.1-0.33,0.22-0.42,0.22      c-0.12,0-0.15-0.21-0.15-0.34c0-0.21,0.28-0.6,0.65-0.92c0.38-0.34,0.76-0.5,0.94-0.5C39.45,441.96,39.81,442.1,40.19,442.26z M45.3,441.18l-0.23,0.79c-0.01,0.07,0.02,0.11,0.07,0.11c0.21,0,0.6,0.02,0.8,0.03      c0.11,0.01,0.15,0.05,0.15,0.1c0,0.1-0.14,0.24-0.26,0.26c-0.11,0.02-0.67,0.05-0.87,0.05c-0.04,0-0.11,0.04-0.12,0.07      c-0.19,0.38-0.62,1.57-0.94,2.5c-0.02,0.06,0.04,0.21,0.11,0.21c0.18,0,0.63-0.29,0.92-0.55c0.07-0.06,0.24-0.09,0.24-0.02      c0,0.08-0.01,0.18-0.12,0.33c-0.48,0.65-1.6,1.25-2.11,1.25c-0.19,0-0.45-0.3-0.45-0.48c0-0.05,0.02-0.17,0.06-0.29      c0.04-0.1,0.69-1.74,1.13-2.89c0.03-0.06,0.01-0.12-0.02-0.12c-0.07,0-0.3-0.01-0.42-0.02c-0.13-0.01-0.25-0.06-0.25-0.13      c0-0.11,0.2-0.24,0.28-0.24l0.54-0.05c0.05,0,0.12-0.05,0.15-0.1c0.2-0.38,0.39-0.67,0.56-0.87c0.13-0.17,0.42-0.28,0.7-0.28      C45.31,440.84,45.37,440.94,45.3,441.18z M33.17,451.96c0.02,0.02,0.1-0.01,0.11-0.04c0.06-0.12,0.11-0.2,0.18-0.31      c0.03-0.04,0.15-0.09,0.22-0.09c0.21,0,0.42,0.09,0.64,0.21c0.03,0.02,0.05,0.16,0.03,0.22c-0.28,0.72-0.78,1.99-1.08,2.87      c-0.06,0.19,0.09,0.24,0.15,0.24c0.23,0,0.6-0.31,0.88-0.62c0.05-0.05,0.12,0.01,0.12,0.1c0,0.07-0.02,0.17-0.08,0.28      c-0.53,0.9-1.33,1.17-1.75,1.17c-0.3,0-0.54-0.19-0.54-0.41c0-0.14,0.24-0.71,0.36-1.01c0.04-0.09-0.03-0.17-0.08-0.1      c-0.96,1.09-1.73,1.53-2.18,1.53c-0.2,0-0.59-0.19-0.59-0.47c0-0.23,0.09-0.54,0.4-1.05c0.65-1.11,1.89-2.28,2.41-2.57      c0.2-0.1,0.28-0.13,0.34-0.13C32.71,451.75,33.01,451.82,33.17,451.96z M31.54,453c-0.32,0.41-0.61,1.08-0.61,1.64      c0,0.31,0.11,0.4,0.23,0.4c0.1,0,0.38-0.17,0.76-0.62c0.27-0.31,0.74-1.04,0.95-1.52c0.05-0.11,0.03-0.2,0.01-0.23      c-0.11-0.12-0.28-0.2-0.35-0.2C32.12,452.48,31.78,452.67,31.54,453z M40.25,452.53c0,1.08-0.96,2.43-1.98,3.04c-0.52,0.31-1.1,0.4-1.33,0.4      c-0.62,0-1.23-0.35-1.23-1.18c0-0.21,0.17-0.88,0.41-1.64c0.24-0.77,0.99-2.87,1.18-3.43c0.12-0.35,0.03-0.41-0.25-0.59      c-0.07-0.04-0.14-0.13-0.14-0.15c0-0.07,0.14-0.17,0.27-0.2c0.11-0.03,1.4-0.21,1.65-0.21c0.05,0,0.09,0.1,0.07,0.15      c-0.25,0.49-1.22,3.03-1.59,4.15c-0.01,0.04,0.06,0.07,0.08,0.03c0.61-0.79,1.4-1.32,1.97-1.32      C39.92,451.59,40.25,452.02,40.25,452.53z M37.5,453.41c-0.5,0.8-0.73,1.62-0.73,1.82s0.15,0.4,0.3,0.4      c0.11,0,0.4-0.17,0.61-0.37c0.66-0.7,1.34-2.25,1.34-2.78c0-0.13-0.06-0.32-0.23-0.32C38.34,452.16,37.92,452.76,37.5,453.41z M44.56,451.69c0.08,0.04,0.22,0.13,0.22,0.26c0,0.41-0.32,0.75-0.47,0.75      c-0.04,0-0.15-0.03-0.2-0.11c-0.2-0.39-0.28-0.65-0.56-0.65c-0.11,0-0.28,0.12-0.56,0.66c-0.25,0.49-0.46,1.23-0.46,1.72      c0,0.72,0.28,0.82,0.46,0.82c0.28,0,0.63-0.12,1.08-0.56c0.09-0.09,0.22-0.08,0.22,0c0,0.11-0.09,0.29-0.15,0.37      c-0.45,0.58-1.05,0.98-1.83,0.98c-0.81,0-1.02-0.75-1.02-1.2c0-0.43,0.2-1.19,0.43-1.59c0.32-0.59,0.71-1.08,1.44-1.38      c0.25-0.1,0.75-0.18,0.9-0.18C44.28,451.58,44.43,451.62,44.56,451.69z M47.7,451.82c0.32-0.17,0.66-0.24,0.88-0.24c0.21,0,0.5,0.16,0.62,0.29      c0.04,0.02,0.07-0.03,0.08-0.06c0.08-0.27,0.46-1.48,0.63-2.12c0.08-0.33,0.06-0.41-0.04-0.46c-0.29-0.14-0.38-0.21-0.38-0.25      c0-0.08,0.1-0.18,0.14-0.19c0.2-0.06,1.37-0.22,1.61-0.22c0.13,0,0.18,0.14,0.04,0.56c-0.21,0.66-0.46,1.39-0.94,2.94      c-0.32,1.03-0.62,2.01-0.8,2.67c-0.04,0.15,0.06,0.26,0.18,0.26c0.2,0,0.53-0.3,0.74-0.54c0.05-0.06,0.08-0.08,0.11-0.08      s0.05,0.03,0.05,0.14c0,0.42-1.03,1.46-1.87,1.46c-0.24,0-0.46-0.32-0.46-0.49c0-0.12,0.25-0.92,0.35-1.24      c0.02-0.05-0.05-0.09-0.1-0.02c-0.87,1.25-1.51,1.71-2.33,1.71c-0.13,0-0.32-0.06-0.43-0.17c-0.13-0.13-0.21-0.52-0.21-0.64      C45.57,454.56,46.14,452.67,47.7,451.82z M47.05,455.17c0.31,0,0.73-0.41,1.16-0.96c0.22-0.29,0.55-0.91,0.73-1.42      c0.09-0.26,0.09-0.43,0.05-0.53c-0.04-0.09-0.15-0.31-0.27-0.31c-0.17,0-0.43,0.21-0.81,0.67c-0.47,0.59-1.05,1.69-1.05,2.2      C46.86,455.05,46.93,455.17,47.05,455.17z\'></path></g></g><g id=\'TI30XPRO_KEY_4_D\' class=\'TI30XPRO_KEY_4_D\'><rect x=\'60\' y=\'419\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M102,459H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,458.1,103.1,459,102,459z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M81.4,427.65c0.54-0.09,1.24-0.14,1.98-0.14c1.23,0,2.03,0.22,2.66,0.69     c0.67,0.5,1.1,1.3,1.1,2.45c0,1.24-0.45,2.1-1.08,2.63c-0.68,0.57-1.72,0.84-2.99,0.84c-0.76,0-1.3-0.05-1.67-0.1V427.65z      M82.88,432.95c0.13,0.03,0.33,0.03,0.51,0.03c1.33,0.01,2.2-0.72,2.2-2.27c0.01-1.35-0.78-2.06-2.04-2.06     c-0.33,0-0.54,0.03-0.66,0.06V432.95z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M84.96,453.75v-3.46h-6.17v-1.68l5.56-8.5h3.04v8.23h1.76v1.95H87.4v3.46H84.96z      M84.96,448.33v-3.72c0-0.78,0.02-1.58,0.08-2.37h-0.08c-0.42,0.86-0.78,1.55-1.2,2.31l-2.5,3.74l-0.02,0.04H84.96z\'></path></g></g><g id=\'TI30XPRO_KEY_5_E\' class=\'TI30XPRO_KEY_5_E\'><rect x=\'108\' y=\'419\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M150,459h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,458.1,151.1,459,150,459z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M134.05,431.31h-2.39v1.54h2.67v1.2h-4.14v-6.49h4.01v1.2h-2.53v1.35h2.39V431.31z     \'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M135.95,442.24h-5.25l-0.4,2.73c0.31-0.04,0.59-0.06,0.99-0.06     c1.2,0,2.39,0.27,3.32,0.88c1.03,0.65,1.79,1.8,1.79,3.46c0,2.6-2.16,4.72-5.52,4.72c-1.57,0-2.9-0.4-3.61-0.8l0.52-1.95     c0.59,0.31,1.76,0.71,3,0.71c1.51,0,2.96-0.86,2.96-2.5c0-1.55-1.16-2.58-3.88-2.58c-0.76,0-1.32,0.04-1.87,0.13l0.9-6.89h7.05     V442.24z\'></path></g></g><g id=\'TI30XPRO_KEY_6_F\' class=\'TI30XPRO_KEY_6_F\'><rect x=\'156\' y=\'419\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M198,459h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C200,458.1,199.1,459,198,459z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M178.22,427.57h3.97v1.2h-2.49v1.48h2.33v1.19h-2.33v2.61h-1.47V427.57z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M183.59,441.93c-0.38,0-0.8,0-1.32,0.06c-2.86,0.34-4.24,2.1-4.58,3.99h0.06     c0.67-0.78,1.7-1.32,3.07-1.32c2.35,0,4.18,1.68,4.18,4.45c0,2.6-1.91,4.87-4.81,4.87c-3.32,0-5.14-2.52-5.14-5.88     c0-2.62,0.94-4.77,2.37-6.13c1.26-1.18,2.9-1.85,4.85-2.02c0.57-0.06,0.99-0.06,1.3-0.04L183.59,441.93z M182.37,449.26     c0-1.58-0.86-2.71-2.37-2.71c-0.97,0-1.83,0.59-2.23,1.41c-0.11,0.21-0.17,0.46-0.17,0.82c0.04,1.81,0.9,3.28,2.56,3.28     C181.51,452.05,182.37,450.89,182.37,449.26z\'></path></g></g><g id=\'TI30XPRO_KEY_ADD_NONE\' class=\'TI30XPRO_KEY_ADD_NONE\'><rect x=\'204\' y=\'419\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,459h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,458.1,247.1,459,246,459z\'></path><g><rect x=\'227.61\' y=\'441.98\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect><rect x=\'227.61\' y=\'441.98\' transform=\'matrix(4.464879e-11 -1 1 4.464879e-11 -219.0199 675.959)\' class=\'ti_fourFunctionKey_art_primary\' width=\'1.71\' height=\'11.02\'></rect></g><g><path class=\'ti_calc_case_art_second\' d=\'M229.78,427.91L229.78,427.91c-0.56-0.57-1.34-0.91-2.2-0.91     c-0.86,0-1.64,0.35-2.2,0.91l0,0c-0.56,0.56-0.91,1.34-0.91,2.2c0,0.86,0.35,1.64,0.91,2.2h0c0.56,0.56,1.34,0.91,2.2,0.91     c0.86,0,1.64-0.35,2.2-0.91l0,0c0.56-0.56,0.91-1.34,0.91-2.2C230.69,429.26,230.34,428.48,229.78,427.91z M225.88,431.8     L225.88,431.8c-0.43-0.43-0.7-1.03-0.7-1.69c0-0.66,0.27-1.26,0.7-1.69l0,0c0.43-0.43,1.03-0.7,1.69-0.7v4.77     C226.91,432.5,226.32,432.24,225.88,431.8z\'></path><polygon class=\'ti_calc_case_art_second\' points=\'237,430.17 234.91,429.28 232.82,428.38 232.82,430.17 232.82,431.97      234.91,431.07    \'></polygon></g></g><g id=\'TI30XPRO_KEY_STO_RECALL\' class=\'TI30XPRO_KEY_STO_RECALL\'><rect x=\'12\' y=\'463\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,503H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,502.1,55.1,503,54,503z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M25.74,475.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V475.07z M29.83,476.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H29.83z M31.97,475.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H31.97z M37.45,478.22c-0.26,0.12-0.77,0.25-1.38,0.25c-1.52,0-2.51-0.97-2.51-2.48     c0-1.46,1-2.6,2.71-2.6c0.45,0,0.91,0.1,1.19,0.23l-0.22,0.92c-0.2-0.09-0.49-0.19-0.93-0.19c-0.94,0-1.5,0.69-1.49,1.58     c0,1,0.65,1.57,1.49,1.57c0.43,0,0.73-0.09,0.97-0.19L37.45,478.22z M40.85,478.37l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H40.85z M40.69,475.99     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V475.99z M42.94,471.27h1.24v7.1h-1.24V471.27z M45.26,471.27h1.24v7.1h-1.24V471.27z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M23.68,496.28c0.36,0.22,1.05,0.46,1.63,0.46c0.7,0,1.01-0.29,1.01-0.7      c0-0.43-0.26-0.65-1.04-0.92c-1.23-0.43-1.75-1.11-1.74-1.85c0-1.12,0.92-1.99,2.39-1.99c0.7,0,1.31,0.18,1.68,0.38l-0.31,1.13      c-0.27-0.16-0.78-0.36-1.34-0.36c-0.57,0-0.88,0.27-0.88,0.66c0,0.4,0.3,0.6,1.1,0.88c1.14,0.42,1.68,1,1.69,1.94      c0,1.14-0.9,1.98-2.57,1.98c-0.77,0-1.46-0.18-1.92-0.44L23.68,496.28z M30.49,489.61v1.81h1.52v1.2h-1.52v2.79c0,0.77,0.21,1.17,0.82,1.17      c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.2-1.38-0.52      c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98h-0.91v-1.2h0.91v-1.43L30.49,489.61z M38.64,494.53c0,2.33-1.64,3.37-3.25,3.37c-1.79,0-3.17-1.23-3.17-3.26      c0-2.08,1.37-3.35,3.28-3.35C37.38,491.28,38.64,492.6,38.64,494.53z M33.87,494.59c0,1.22,0.6,2.15,1.57,2.15      c0.91,0,1.55-0.9,1.55-2.17c0-0.99-0.44-2.12-1.53-2.12C34.33,492.45,33.87,493.54,33.87,494.59z\'></path><polygon class=\'ti_generalKey_art_primary\' points=\'51.31,494.23 46.12,491.24 46.12,493.48 41,493.48 41,494.98 46.12,494.98     46.12,497.22   \'></polygon></g></g><g id=\'TI30XPRO_KEY_1_A\' class=\'TI30XPRO_KEY_1_A\'><rect x=\'60\' y=\'463\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M102,503H66c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,502.1,103.1,503,102,503z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M83.1,476.39l-0.46,1.67h-1.52l1.98-6.49h1.93l2.01,6.49h-1.58l-0.5-1.67H83.1z      M84.75,475.29l-0.4-1.38c-0.12-0.38-0.23-0.87-0.33-1.25H84c-0.1,0.38-0.19,0.88-0.3,1.25l-0.39,1.38H84.75z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M83.33,486.43h-0.04l-2.5,1.26l-0.44-1.95l3.32-1.64h2.16v13.65h-2.5V486.43z\'></path></g></g><g id=\'TI30XPRO_KEY_2_B\' class=\'TI30XPRO_KEY_2_B\'><rect x=\'108\' y=\'463\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M150,503h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,502.1,151.1,503,150,503z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M129.85,471.65c0.39-0.08,1.17-0.14,1.9-0.14c0.9,0,1.44,0.09,1.92,0.37     c0.45,0.24,0.78,0.68,0.78,1.27c0,0.58-0.34,1.12-1.07,1.39v0.02c0.74,0.2,1.29,0.76,1.29,1.6c0,0.59-0.27,1.05-0.67,1.38     c-0.47,0.38-1.26,0.59-2.55,0.59c-0.72,0-1.26-0.05-1.59-0.1V471.65z M131.3,474.14h0.48c0.77,0,1.18-0.32,1.18-0.8     c0-0.49-0.38-0.75-1.04-0.75c-0.32,0-0.5,0.02-0.63,0.04V474.14z M131.3,477.02c0.14,0.02,0.32,0.02,0.57,0.02     c0.66,0,1.25-0.25,1.25-0.93c0-0.66-0.59-0.92-1.32-0.92h-0.5V477.02z\'></path></g><g id=\'TI_30XPRO_KEY_2_B_5_\' class=\'TI_30XPRO_KEY_2_B_5_\'><path class=\'ti_numpadKey_art_primary\' d=\'M127.27,497.75v-1.57l1.62-1.49c3.21-2.98,4.72-4.62,4.75-6.42     c0-1.22-0.65-2.29-2.44-2.29c-1.2,0-2.23,0.61-2.92,1.13l-0.76-1.83c0.99-0.8,2.48-1.41,4.2-1.41c3.02,0,4.49,1.91,4.49,4.14     c0,2.39-1.72,4.33-4.09,6.53l-1.2,1.03v0.04h5.61v2.14H127.27z\'></path></g></g><g id=\'TI30XPRO_KEY_3_C\' class=\'TI30XPRO_KEY_3_C\'><rect x=\'156\' y=\'463\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M198,503h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C200,502.1,199.1,503,198,503z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M182.66,477.87c-0.27,0.13-0.88,0.28-1.67,0.28c-2.24,0-3.4-1.4-3.4-3.25     c0-2.21,1.58-3.45,3.54-3.45c0.76,0,1.34,0.15,1.6,0.29l-0.3,1.17c-0.3-0.12-0.71-0.24-1.23-0.24c-1.17,0-2.07,0.7-2.07,2.15     c0,1.3,0.77,2.12,2.08,2.12c0.44,0,0.93-0.1,1.22-0.21L182.66,477.87z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M175.8,495.08c0.52,0.31,1.81,0.84,3.11,0.84c1.97,0,2.77-1.11,2.75-2.18     c0-1.62-1.51-2.31-3.09-2.31h-1.2v-1.89h1.15c1.2,0,2.71-0.55,2.71-1.91c0-0.92-0.69-1.7-2.18-1.7c-1.11,0-2.23,0.48-2.79,0.86     l-0.59-1.87c0.78-0.55,2.29-1.05,3.93-1.05c2.81,0,4.26,1.55,4.26,3.34c0,1.43-0.84,2.6-2.52,3.19v0.04c1.66,0.29,3,1.55,3,3.4     c0,2.31-1.93,4.14-5.31,4.14c-1.66,0-3.09-0.46-3.82-0.94L175.8,495.08z\'></path></g></g><g id=\'TI30XPRO_KEY_TOGGLE_FTOD\' class=\'TI30XPRO_KEY_TOGGLE_FTOD\'><rect x=\'204\' y=\'463\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,503h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,502.1,247.1,503,246,503z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M217.14,478.37v-3.95h-0.66v-0.92h0.66v-0.21c0-0.63,0.17-1.26,0.59-1.66     c0.36-0.34,0.85-0.47,1.27-0.47c0.33,0,0.59,0.05,0.79,0.12l-0.09,0.95c-0.13-0.05-0.3-0.09-0.52-0.09     c-0.61,0-0.82,0.51-0.82,1.11v0.25h1.07v0.92h-1.06v3.95H217.14z M239.24,471.27V477c0,0.5,0.02,1.04,0.04,1.37h-1.1l-0.05-0.77h-0.02     c-0.29,0.54-0.88,0.88-1.59,0.88c-1.16,0-2.08-0.99-2.08-2.49c-0.01-1.63,1.01-2.6,2.18-2.6c0.67,0,1.15,0.28,1.37,0.64h0.02     v-2.76H239.24z M238.01,475.53c0-0.1-0.01-0.22-0.03-0.32c-0.11-0.48-0.5-0.87-1.06-0.87c-0.79,0-1.23,0.7-1.23,1.61     c0,0.89,0.44,1.54,1.22,1.54c0.5,0,0.94-0.34,1.06-0.87c0.03-0.11,0.04-0.23,0.04-0.36V475.53z\'></path></g><polygon class=\'ti_calc_case_art_second\' points=\'233.03,475.12 230.42,474 227.8,472.88 227.8,475.12 227.8,477.37 230.42,476.24     \'></polygon><polygon class=\'ti_calc_case_art_second\' points=\'220.94,475.12 223.55,474 226.17,472.88 226.17,475.12 226.17,477.37    223.55,476.25  \'></polygon><g><path class=\'ti_fourFunctionKey_art_primary\' d=\'M242.25,490.95c-0.64,0.94-1.77,1.71-3.02,1.71c-1.08,0-1.79-0.42-2.43-0.69      c-0.58-0.25-1.21-0.66-2.14-0.66c-0.92,0-1.71,0.62-2.21,1.17l-0.83-1.02c0.64-0.85,1.75-1.66,3.06-1.66      c1.08,0,1.77,0.42,2.39,0.69c0.58,0.23,1.21,0.66,2.14,0.66c0.92,0,1.71-0.71,2.12-1.19L242.25,490.95z M242.3,494.87      c-0.64,0.98-1.79,1.75-3.06,1.75c-1.04,0-1.77-0.42-2.39-0.69c-0.58-0.25-1.21-0.66-2.18-0.66c-0.87,0-1.67,0.62-2.18,1.17      l-0.83-1.04c0.64-0.87,1.79-1.64,3.02-1.64c1.1,0,1.79,0.42,2.43,0.69c0.58,0.23,1.21,0.66,2.12,0.66      c0.94,0,1.73-0.64,2.18-1.19L242.3,494.87z\'></path><polygon class=\'ti_fourFunctionKey_art_primary\' points=\'213.7,493.22 220.57,489.78 220.57,496.66   \'></polygon><polygon class=\'ti_fourFunctionKey_art_primary\' points=\'229.51,493.22 222.64,489.78 222.64,496.66   \'></polygon></g></g><g id=\'TI30XPRO_KEY_ON_OFF\' class=\'TI30XPRO_KEY_ON_OFF\'><rect x=\'12\' y=\'507\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_generalKey\' d=\'M54,547H18c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32C56,546.1,55.1,547,54,547z\'></path><g><path class=\'ti_calc_case_art_second\' d=\'M35.37,519.89c0,1.79-1.26,2.59-2.5,2.59c-1.38,0-2.44-0.95-2.44-2.51     c0-1.6,1.05-2.58,2.52-2.58C34.4,517.39,35.37,518.41,35.37,519.89z M31.7,519.94c0,0.94,0.46,1.65,1.21,1.65     c0.7,0,1.19-0.69,1.19-1.67c0-0.76-0.34-1.63-1.18-1.63C32.05,518.29,31.7,519.13,31.7,519.94z M39.27,522.37v-3.95H37.5v3.95h-1.23v-3.95h-0.66v-0.92h0.66v-0.12     c0-0.63,0.15-1.21,0.55-1.61c0.3-0.31,0.75-0.5,1.37-0.5c0.26,0,0.52,0.07,0.67,0.14l-0.2,0.91c-0.12-0.05-0.28-0.09-0.44-0.09     c-0.56,0-0.73,0.47-0.73,1.08v0.19h1.78v-0.21c0-0.63,0.17-1.26,0.6-1.66c0.36-0.34,0.84-0.47,1.27-0.47     c0.33,0,0.59,0.05,0.78,0.12l-0.08,0.95c-0.14-0.05-0.3-0.09-0.53-0.09c-0.61,0-0.81,0.51-0.81,1.11v0.25h1.06v0.92h-1.05v3.95     H39.27z\'></path></g><g><path class=\'ti_generalKey_art_primary\' d=\'M36,538.53c0,2.33-1.64,3.37-3.25,3.37c-1.79,0-3.17-1.23-3.17-3.26     c0-2.08,1.36-3.35,3.28-3.35C34.74,535.28,36,536.6,36,538.53z M31.23,538.59c0,1.22,0.6,2.15,1.57,2.15     c0.91,0,1.55-0.9,1.55-2.17c0-0.99-0.44-2.12-1.53-2.12C31.69,536.45,31.23,537.54,31.23,538.59z M36.79,537.3c0-0.73-0.01-1.34-0.05-1.88h1.4l0.08,0.95h0.04     c0.27-0.49,0.96-1.09,2.02-1.09c1.1,0,2.25,0.72,2.25,2.72v3.76h-1.6v-3.58c0-0.91-0.34-1.6-1.21-1.6     c-0.64,0-1.08,0.46-1.25,0.94c-0.05,0.14-0.06,0.34-0.06,0.52v3.72h-1.61V537.3z\'></path></g></g><g id=\'TI30XPRO_KEY_0_RESET\' class=\'TI30XPRO_KEY_0_RESET\'><rect x=\'60\' y=\'507\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M102,547H72c-4.42,0-8-3.58-8-8v-26c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C104,546.1,103.1,547,102,547z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M74.55,519.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V519.07z M78.64,520.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H78.64z M80.77,519.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H80.77z M82.62,521.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L82.62,521.24z M87.46,520.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22l0.18,0.85     c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H87.46z M89.6,519.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H89.6z M92.91,516.11v1.39h1.17v0.92h-1.17v2.15c0,0.59,0.16,0.9,0.63,0.9     c0.21,0,0.37-0.03,0.48-0.06l0.02,0.94c-0.18,0.07-0.5,0.12-0.89,0.12c-0.45,0-0.83-0.15-1.06-0.4     c-0.26-0.28-0.38-0.72-0.38-1.36v-2.29h-0.7v-0.92h0.7v-1.1L92.91,516.11z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M88.91,534.89c0,4.39-1.72,7.14-4.98,7.14c-3.15,0-4.83-2.86-4.85-7.01     c0-4.24,1.81-7.1,5-7.1C87.38,527.92,88.91,530.85,88.91,534.89z M81.69,535.01c-0.02,3.32,0.9,5.04,2.33,5.04     c1.51,0,2.31-1.85,2.31-5.12c0-3.17-0.76-5.04-2.31-5.04C82.63,529.89,81.67,531.59,81.69,535.01z\'></path></g></g><g id=\'TI30XPRO_KEY_DECIMAL_COMMA\' class=\'TI30XPRO_KEY_DECIMAL_COMMA\'><rect x=\'108\' y=\'507\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M150,547h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C152,546.1,151.1,547,150,547z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M130.81,524.33c0.48-0.13,0.83-0.35,1.05-0.66c0.22-0.31,0.35-0.74,0.39-1.3h-1.44     v-2.48h2.56v2.15c0,0.38-0.05,0.77-0.15,1.18s-0.29,0.76-0.56,1.06c-0.29,0.32-0.64,0.56-1.03,0.73     c-0.4,0.16-0.67,0.25-0.82,0.25V524.33z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M130.08,539.1c0-1.3,0.89-2.23,2.16-2.23c1.27,0,2.14,0.91,2.14,2.23     c0,1.27-0.86,2.21-2.16,2.21C130.97,541.31,130.08,540.37,130.08,539.1z\'></path></g></g><g id=\'TI30XPRO_KEY_NEGATIVE_ANS\' class=\'TI30XPRO_KEY_NEGATIVE_ANS\'><rect x=\'156\' y=\'507\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_numpadKey\' d=\'M192,546.95L162,547c-1.1,0-2-1.07-2-2.4v-31.2c0-1.33,0.9-2.4,2-2.4h36c1.1,0,2,1.07,2,2.4v23.95   C200,542.65,196.42,546.95,192,546.95z\'></path><g><path class=\'ti_calc_case_art_second_dark\' d=\'M168.58,522.37l-0.08-0.54h-0.03c-0.3,0.38-0.81,0.65-1.44,0.65     c-0.98,0-1.53-0.71-1.53-1.45c0-1.23,1.09-1.85,2.89-1.84v-0.08c0-0.32-0.13-0.85-0.99-0.85c-0.48,0-0.98,0.15-1.31,0.36     l-0.24-0.8c0.36-0.22,0.99-0.43,1.76-0.43c1.56,0,2.01,0.99,2.01,2.05v1.76c0,0.44,0.02,0.87,0.07,1.17H168.58z M168.42,519.99     c-0.87-0.02-1.7,0.17-1.7,0.91c0,0.48,0.31,0.7,0.7,0.7c0.49,0,0.85-0.32,0.96-0.67c0.03-0.09,0.04-0.19,0.04-0.27V519.99z M170.67,518.95c0-0.56-0.01-1.03-0.04-1.45h1.08l0.06,0.73h0.03     c0.21-0.38,0.74-0.84,1.55-0.84c0.85,0,1.73,0.55,1.73,2.09v2.89h-1.23v-2.75c0-0.7-0.26-1.23-0.93-1.23     c-0.49,0-0.83,0.35-0.96,0.72c-0.04,0.11-0.05,0.26-0.05,0.4v2.86h-1.24V518.95z M176.08,521.24c0.28,0.17,0.81,0.35,1.25,0.35c0.54,0,0.78-0.22,0.78-0.54     c0-0.33-0.2-0.5-0.8-0.71c-0.95-0.33-1.35-0.85-1.34-1.42c0-0.86,0.71-1.53,1.84-1.53c0.54,0,1.01,0.14,1.29,0.29l-0.24,0.87     c-0.21-0.12-0.6-0.28-1.03-0.28c-0.44,0-0.68,0.21-0.68,0.51c0,0.31,0.23,0.46,0.85,0.68c0.88,0.32,1.29,0.77,1.3,1.49     c0,0.88-0.69,1.52-1.98,1.52c-0.59,0-1.12-0.14-1.48-0.34L176.08,521.24z M180.8,517.5l0.51,2.21c0.11,0.52,0.22,1.05,0.31,1.58h0.02     c0.1-0.53,0.26-1.07,0.4-1.57l0.63-2.22h1l0.61,2.16c0.15,0.57,0.28,1.1,0.39,1.63h0.02c0.08-0.53,0.19-1.06,0.32-1.63l0.54-2.16     h1.21l-1.53,4.87h-1.14l-0.58-1.98c-0.15-0.51-0.26-0.97-0.37-1.56h-0.02c-0.1,0.6-0.23,1.08-0.37,1.56l-0.62,1.98h-1.15     l-1.44-4.87H180.8z M188.04,520.28c0.03,0.88,0.72,1.26,1.5,1.26c0.57,0,0.98-0.08,1.35-0.22     l0.18,0.85c-0.42,0.17-1,0.3-1.7,0.3c-1.58,0-2.51-0.97-2.51-2.46c0-1.35,0.82-2.62,2.38-2.62c1.58,0,2.1,1.3,2.1,2.37     c0,0.23-0.02,0.41-0.04,0.52H188.04z M190.18,519.42c0.01-0.45-0.19-1.19-1.01-1.19c-0.76,0-1.08,0.69-1.13,1.19H190.18z M192.08,519.07c0-0.66-0.01-1.13-0.04-1.57h1.07l0.04,0.93h0.04     c0.24-0.69,0.81-1.04,1.33-1.04c0.12,0,0.19,0.01,0.29,0.03v1.16c-0.1-0.02-0.21-0.04-0.36-0.04c-0.59,0-0.99,0.38-1.1,0.93     c-0.02,0.11-0.04,0.24-0.04,0.38v2.52h-1.23V519.07z\'></path></g><g><path class=\'ti_numpadKey_art_primary\' d=\'M174.84,528.83c-1.19,1.41-2.1,3.37-2.1,6.05c0,2.63,0.93,4.58,2.1,6h-1.67     c-1.06-1.19-2.25-3.12-2.25-6c0.02-2.9,1.19-4.84,2.25-6.05H174.84z M184.08,533.6v1.93h-8.17v-1.93H184.08z M185.16,540.89c1.17-1.41,2.08-3.39,2.08-6.03s-0.91-4.59-2.08-6.02h1.65     c1.08,1.19,2.27,3.12,2.27,6.03c-0.02,2.9-1.19,4.82-2.27,6.02H185.16z\'></path></g></g><g id=\'TI30XPRO_KEY_ENTER_NONE\' class=\'TI30XPRO_KEY_ENTER_NONE\'><rect x=\'204\' y=\'507\' class=\'ti_key_background_padding\' width=\'48\' height=\'44\'></rect><path class=\'ti_fourFunctionKey\' d=\'M246,547h-36c-1.1,0-2-0.9-2-2v-32c0-1.1,0.9-2,2-2h36c1.1,0,2,0.9,2,2v32   C248,546.1,247.1,547,246,547z\'></path><g><path class=\'ti_fourFunctionKey_art_primary\' d=\'M216.8,538.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.75-0.29     l0.23,1.11c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H216.8z M219.58,536.91c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H219.58z M221.85,536.3c0-0.73-0.01-1.34-0.05-1.88h1.4l0.08,0.95h0.04     c0.27-0.49,0.96-1.09,2.01-1.09c1.11,0,2.25,0.72,2.25,2.72v3.76h-1.6v-3.58c0-0.91-0.34-1.6-1.21-1.6     c-0.64,0-1.08,0.46-1.25,0.94c-0.05,0.14-0.07,0.34-0.07,0.52v3.72h-1.61V536.3z M230.54,532.61v1.81h1.52v1.2h-1.52v2.79c0,0.77,0.21,1.17,0.82,1.17     c0.27,0,0.48-0.04,0.62-0.08l0.03,1.22c-0.23,0.09-0.65,0.16-1.16,0.16c-0.58,0-1.08-0.2-1.38-0.52     c-0.34-0.36-0.49-0.94-0.49-1.77v-2.98h-0.91v-1.2h0.91v-1.43L230.54,532.61z M233.8,538.03c0.04,1.14,0.94,1.64,1.95,1.64c0.74,0,1.27-0.1,1.75-0.29     l0.23,1.11c-0.55,0.22-1.3,0.39-2.21,0.39c-2.05,0-3.26-1.26-3.26-3.2c0-1.75,1.07-3.41,3.09-3.41c2.05,0,2.73,1.69,2.73,3.08     c0,0.3-0.03,0.53-0.05,0.68H233.8z M236.58,536.91c0.01-0.58-0.25-1.55-1.31-1.55c-0.99,0-1.4,0.9-1.47,1.55H236.58z M238.86,536.46c0-0.86-0.01-1.47-0.05-2.04h1.39l0.05,1.21h0.05     c0.31-0.9,1.05-1.35,1.73-1.35c0.16,0,0.25,0.01,0.38,0.04v1.51c-0.13-0.03-0.27-0.05-0.47-0.05c-0.77,0-1.29,0.49-1.43,1.21     c-0.03,0.14-0.05,0.31-0.05,0.49v3.28h-1.6V536.46z\'></path></g></g></svg>';
        }, {}],
        0x6: [function(_0x452260, _0x422712, _0x2f2e70) {
            'use strict';
            Object['defineProperty'](_0x2f2e70, '__esModule', {
                'value': !![]
            });
            const _0x2ca9f9 = _0x452260('../../AbstractSmartviewEmulator'),
                _0x57e91f = _0x452260('./TI30XProLCD'),
                _0x4bbd1e = _0x452260('./TI30XProSmartviewKeypad'),
                _0x370706 = _0x452260('./dolphin'),
                _0xd6fdca = _0x452260('../../LapisASICSmartView'),
                _0x34f5be = 'TI30XPRO';
            let _0x51f808 = 0x9,
                _0xe3f702 = 0xc0,
                _0x5f38a8 = 0x2,
                _0xe452ce = '#000000',
                _0x5efbae = '#FFFFFF',
                _0x4c6344 = 0x4;
            class _0xbccf9d extends _0x2ca9f9['AbstractSmartviewEmulator'] {
                constructor(_0x4285af) {
                    super(_0x34f5be);
                    let _0x19d3f2 = console['log'],
                        _0x163c4d = this;
                    console['log'] = function(_0x2cc3bf) {
                        _0x19d3f2(_0x2cc3bf), _0x163c4d['svErrorHandler']('INFO', _0x2cc3bf);
                    }, console['warn'] = function(_0x151133) {
                        _0x163c4d['svErrorHandler']('WARNING', _0x151133);
                    }, console['error'] = function(_0x38cdf7) {
                        _0x163c4d['svErrorHandler']('SEVERE', _0x38cdf7);
                    }, console['trace'] = function(_0x74020c) {
                        _0x163c4d['svErrorHandler']('FINE', _0x74020c);
                    };
                } ['launchEmulator'](_0x49bcdc, _0x304b8d, _0x16e243, _0x500227) {
                    const _0x3f48e6 = {
                        'elementId': 'calculatorDiv',
                        'ROMLocation': 'bin/ti30mv.h84state',
                        'FaceplateLocation': 'images/TI30XPRO_touch.svg',
                        'KeyMappingFile': '',
                        'KeyHistBufferLength': 0xa,
                        'DisplayMode': 'MATHPRINT',
                        'AngleMode': 'DEG'
                    };
                    this['settings'] = _0x3f48e6, this['asic'] = new _0xd6fdca['LapisASICSmartView'](_0x3f48e6);
                    let _0xf8561d = new _0x57e91f['TI30XProLCD'](_0x3f48e6['elementId']);
                    this['lcd'] = _0xf8561d, this['keypad'] = new _0x4bbd1e['TI30XProSmartviewKeypad'](this['settings'], this['asic']);;
                    this['calcModel'] = _0x34f5be;
                    let _0x3c4ad2 = 'calculatorDiv';
                    _0x3f48e6['elementId'] && (this['divID'] = _0x3f48e6['elementId']);
                    this['asic']['addStateListener'](this), this['asic']['addScreenListener'](_0xf8561d);
                    let _0x1f4535;
                    typeof _0x49bcdc !== 'undefined' && _0x49bcdc != null ? _0x1f4535 = this['initializeFromStatefile'](_0x49bcdc) : _0x1f4535 = this['initializeFromStatefile'](_0x370706['dolphinStatefile']), this['uartReadyPromise'] = this['asic']['setUpUART'](), _0x1f4535['then'](() => {
                        this['keypad']['start']()['then'](() => {
                            this['lcd']['start']()['then'](() => {
                                this['modifyInsertSVG'](_0x304b8d, _0x500227), this['initPromise'] = this['asic']['start']()['then'](() => {
                                    this['asic']['onIdle']()['then'](() => {
                                        this['lcd']['align'](), this['zoom']();
                                    });
                                });
                            });
                        });
                    });
                } ['getVersion']() {
                    return '1.0.0.0';
                } ['getDisplaySettings']() {
                    var _0x57ef19 = typeof app,
                        _0x322669;
                    _0x57ef19 !== 'undefined' && typeof app['createDisplaySettings'] !== 'undefined' && (_0x322669 = app['createDisplaySettings'](_0x51f808, _0xe3f702, _0x5f38a8, _0xe452ce, _0x5efbae, _0x4c6344));
                } ['resetSVEmulator']() {
                    return console['log']('Resetting...'), this['asic']['stop']()['then'](() => {
                        this['initializeFromStatefile'](_0x370706['dolphinStatefile'])['then'](() => {
                            this['asic']['start']()['then'](() => {
                                this['asic']['onIdle']()['then'](() => {
                                    this['lcd']['start']()['then'](() => {
                                        console['log']('Reset emulator done.');
                                    });
                                });
                            })['catch'](() => {
                                console['log']('Failed to reset emulator: init failed.');
                            });
                        })['catch'](() => {
                            console['log']('Failed to reset emulator: bad state');
                        });
                    })['catch'](() => {
                        console['log']('Failed to stop Emulator during reset.');
                    }), !![];
                }
            }
            _0x2f2e70['TI30XProSmartview'] = _0xbccf9d;
        }, {
            '../../AbstractSmartviewEmulator': 0x1,
            '../../LapisASICSmartView': 0x3,
            './TI30XProLCD': 0x4,
            './TI30XProSmartviewKeypad': 0x7,
            './dolphin': 0x8
        }],
        0x7: [function(_0x22a425, _0x124db8, _0x727159) {
            'use strict';
            Object['defineProperty'](_0x727159, '__esModule', {
                'value': !![]
            });
            const _0x3876fb = _0x22a425('../../../../../../src/emulators_ts/TI-30XPro/main/TI30XProKeypad'),
                _0x43c0f7 = _0x22a425('./TI30XProSVG'),
                _0x1a8079 = _0x22a425('../../../../../../src/emulators_ts/Utilities');
            class _0x4b39ae extends _0x3876fb['TI30XProKeypad'] {
                ['start']() {
                    let _0x536fac = document['getElementById'](this['divId']);
                    return new Promise((_0x33bba5, _0x290ee7) => {
                        var _0x52618c, _0x38bc9f, _0x16db1c, _0x5466ff, _0x97ded9 = 0x1,
                            _0x218559, _0x17621e;
                        _0x52618c = new DOMParser(), _0x38bc9f = _0x52618c['parseFromString'](_0x43c0f7['TI30XProSVG'], 'text/xml'), _0x16db1c = _0x38bc9f['documentElement'], _0x16db1c = document['importNode'](_0x16db1c, !![]), _0x17621e = _0x16db1c['getAttribute']('viewBox'), _0x17621e == null || _0x17621e == 'undefined' ? (this['svgSizeW'] = 0xfe, this['svgSizeH'] = 0x22c) : (_0x17621e = _0x17621e['split'](/\s+|,/), this['svgSizeW'] = parseInt(_0x17621e[0x2]), this['svgSizeH'] = parseInt(_0x17621e[0x3])), this['calculatorDiv'] = document['getElementById']('calculatorDiv'), this['calculatorDiv']['style']['width'] = this['svgSizeW'] + 'px', this['calculatorDiv']['style']['height'] = this['svgSizeH'] + 'px', this['calculatorDiv']['appendChild'](_0x16db1c), this['svg'] = _0x16db1c, this['initKeysFromDOM'](), this['acceptInput'](!![]), _0x33bba5();
                    });
                } ['zoom']() {
                    var _0x438bf = window['innerHeight'],
                        _0xcd341e = window['innerWidth'],
                        _0xb266aa = _0x438bf / this['svgSizeH'];
                    _0xb266aa * this['svgSizeW'] > _0xcd341e && (_0xb266aa = _0xcd341e / this['svgSizeW']), this['calculatorDiv']['style']['zoom'] = '' + _0xb266aa;
                } ['mouseDownHandler'](_0x1f50e9) {
                    !this['isSVGKeyPressed'] && (typeof this['lastButtonPressed'] !== 'undefined' && _0x1a8079['Utilities']['removeClass'](this['lastButtonPressed'], this['highlightClass']), this['svTimePressed'] = new Date()['getTime'](), super['mouseDownHandler'](_0x1f50e9), this['lastKey'] = this['lastButtonPressed']);
                } ['mouseUpHandler'](_0x1be5d5) {
                    if (_0x1be5d5['currentTarget'] instanceof Element) {
                        let _0x5d065b = _0x1be5d5['currentTarget'];
                        if (_0x5d065b === this['lastButtonPressed'] && typeof this['lastKey'] !== 'undefined') {
                            super['mouseUpHandler'](_0x1be5d5), _0x1a8079['Utilities']['addClass'](_0x5d065b, this['highlightClass']), this['lastKey'] = undefined;
                            var _0x3c5b8a = typeof app;
                            _0x3c5b8a !== 'undefined' && typeof app['keyPressed'] !== 'undefined' && app['keyPressed'](_0x5d065b['id'], new Date()['getTime']() - this['svTimePressed']);
                        }
                    }
                } ['keyDownEvent'](_0x3c69a5) {
                    let _0x207e06 = ![];
                    if (!this['isSVGKeyPressed']) {
                        let _0x39f9fa = document['getElementById'](_0x3c69a5);
                        typeof _0x39f9fa !== 'undefined' && _0x39f9fa instanceof Element && typeof this['lastKey'] === 'undefined' && (_0x39f9fa['dispatchEvent'](new MouseEvent('mousedown')), _0x207e06 = !![]);
                    }
                    return _0x207e06;
                } ['keyUpEvent']() {
                    let _0x182af5 = ![];
                    return typeof this['lastKey'] !== 'undefined' && (this['lastKey']['dispatchEvent'](new MouseEvent('mouseup')), _0x182af5 = !![]), _0x182af5;
                } ['reset']() {
                    return new Promise((_0x32e3c5, _0x4761af) => {
                        typeof this['lastButtonPressed'] !== 'undefined' && _0x1a8079['Utilities']['removeClass'](this['lastButtonPressed'], this['highlightClass']), this['deleteKeyPressHistory'](), this['lastPressedKey'] = undefined, this['lastKey'] = undefined, this['lastButtonPressed'] = undefined, _0x32e3c5();
                    });
                }
            }
            _0x727159['TI30XProSmartviewKeypad'] = _0x4b39ae;
        }, {
            '../../../../../../src/emulators_ts/TI-30XPro/main/TI30XProKeypad': 0x1c,
            '../../../../../../src/emulators_ts/Utilities': 0x1d,
            './TI30XProSVG': 0x5
        }],
        0x8: [function(_0x50f20d, _0x4a3af0, _0x59a15f) {
            'use strict';
            Object['defineProperty'](_0x59a15f, '__esModule', {
                'value': !![]
            }), _0x59a15f['dolphinStatefile'] = {
                'info': {
                    'statefileversion': '1.0.0',
                    'osversion': '1.0.0.15',
                    'statefiletype': 'SV_OS',
                    'checksum': '4b7c70bd0e758ce9ff6792a7e8f0c2aa',
                    'compatibility': 0x1,
                    'productflavor': 'TI30XProMP'
                }
            };
        }, {}],
        0x9: [function(_0x25c873, _0x2d614b, _0x1437f0) {
            'use strict';
            _0x1437f0['byteLength'] = _0x3112b0, _0x1437f0['toByteArray'] = _0x10552f, _0x1437f0['fromByteArray'] = _0x3dc8d2;
            var _0x54c6a4 = [],
                _0x487db4 = [],
                _0x4b0723 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
                _0x2b19ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            for (var _0x21db3f = 0x0, _0x763423 = _0x2b19ab['length']; _0x21db3f < _0x763423; ++_0x21db3f) {
                _0x54c6a4[_0x21db3f] = _0x2b19ab[_0x21db3f], _0x487db4[_0x2b19ab['charCodeAt'](_0x21db3f)] = _0x21db3f;
            }
            _0x487db4['-' ['charCodeAt'](0x0)] = 0x3e, _0x487db4['_' ['charCodeAt'](0x0)] = 0x3f;

            function _0x501e80(_0x4c9320) {
                var _0x297a41 = _0x4c9320['length'];
                if (_0x297a41 % 0x4 > 0x0) throw new Error('Invalid string. Length must be a multiple of 4');
                var _0x5d8bfd = _0x4c9320['indexOf']('=');
                if (_0x5d8bfd === -0x1) _0x5d8bfd = _0x297a41;
                var _0x57a2b5 = _0x5d8bfd === _0x297a41 ? 0x0 : 0x4 - _0x5d8bfd % 0x4;
                return [_0x5d8bfd, _0x57a2b5];
            }

            function _0x3112b0(_0x271e0f) {
                var _0x47c7b7 = _0x501e80(_0x271e0f),
                    _0x247efa = _0x47c7b7[0x0],
                    _0x5cd8da = _0x47c7b7[0x1];
                return (_0x247efa + _0x5cd8da) * 0x3 / 0x4 - _0x5cd8da;
            }

            function _0x40a466(_0x8242b0, _0x161aba, _0x6f672) {
                return (_0x161aba + _0x6f672) * 0x3 / 0x4 - _0x6f672;
            }

            function _0x10552f(_0x28ae1d) {
                var _0x4c92ea, _0x2e2b6d = _0x501e80(_0x28ae1d),
                    _0x475683 = _0x2e2b6d[0x0],
                    _0x601881 = _0x2e2b6d[0x1],
                    _0x5aa5fe = new _0x4b0723(_0x40a466(_0x28ae1d, _0x475683, _0x601881)),
                    _0x2e0450 = 0x0,
                    _0x143448 = _0x601881 > 0x0 ? _0x475683 - 0x4 : _0x475683,
                    _0xd85590;
                for (_0xd85590 = 0x0; _0xd85590 < _0x143448; _0xd85590 += 0x4) {
                    _0x4c92ea = _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590)] << 0x12 | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x1)] << 0xc | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x2)] << 0x6 | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x3)], _0x5aa5fe[_0x2e0450++] = _0x4c92ea >> 0x10 & 0xff, _0x5aa5fe[_0x2e0450++] = _0x4c92ea >> 0x8 & 0xff, _0x5aa5fe[_0x2e0450++] = _0x4c92ea & 0xff;
                }
                return _0x601881 === 0x2 && (_0x4c92ea = _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590)] << 0x2 | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x1)] >> 0x4, _0x5aa5fe[_0x2e0450++] = _0x4c92ea & 0xff), _0x601881 === 0x1 && (_0x4c92ea = _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590)] << 0xa | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x1)] << 0x4 | _0x487db4[_0x28ae1d['charCodeAt'](_0xd85590 + 0x2)] >> 0x2, _0x5aa5fe[_0x2e0450++] = _0x4c92ea >> 0x8 & 0xff, _0x5aa5fe[_0x2e0450++] = _0x4c92ea & 0xff), _0x5aa5fe;
            }

            function _0x2effe2(_0x11e1aa) {
                return _0x54c6a4[_0x11e1aa >> 0x12 & 0x3f] + _0x54c6a4[_0x11e1aa >> 0xc & 0x3f] + _0x54c6a4[_0x11e1aa >> 0x6 & 0x3f] + _0x54c6a4[_0x11e1aa & 0x3f];
            }

            function _0x362f5f(_0x55f825, _0x11c59f, _0x344a3e) {
                var _0x56ec32, _0x46763e = [];
                for (var _0x32ad02 = _0x11c59f; _0x32ad02 < _0x344a3e; _0x32ad02 += 0x3) {
                    _0x56ec32 = (_0x55f825[_0x32ad02] << 0x10 & 0xff0000) + (_0x55f825[_0x32ad02 + 0x1] << 0x8 & 0xff00) + (_0x55f825[_0x32ad02 + 0x2] & 0xff), _0x46763e['push'](_0x2effe2(_0x56ec32));
                }
                return _0x46763e['join']('');
            }

            function _0x3dc8d2(_0x4e9e50) {
                var _0x47b52c, _0x5a7cc4 = _0x4e9e50['length'],
                    _0x3980c2 = _0x5a7cc4 % 0x3,
                    _0x23e017 = [],
                    _0x2ac870 = 0x3fff;
                for (var _0x4f5a7c = 0x0, _0x245086 = _0x5a7cc4 - _0x3980c2; _0x4f5a7c < _0x245086; _0x4f5a7c += _0x2ac870) {
                    _0x23e017['push'](_0x362f5f(_0x4e9e50, _0x4f5a7c, _0x4f5a7c + _0x2ac870 > _0x245086 ? _0x245086 : _0x4f5a7c + _0x2ac870));
                }
                if (_0x3980c2 === 0x1) _0x47b52c = _0x4e9e50[_0x5a7cc4 - 0x1], _0x23e017['push'](_0x54c6a4[_0x47b52c >> 0x2] + _0x54c6a4[_0x47b52c << 0x4 & 0x3f] + '==');
                else _0x3980c2 === 0x2 && (_0x47b52c = (_0x4e9e50[_0x5a7cc4 - 0x2] << 0x8) + _0x4e9e50[_0x5a7cc4 - 0x1], _0x23e017['push'](_0x54c6a4[_0x47b52c >> 0xa] + _0x54c6a4[_0x47b52c >> 0x4 & 0x3f] + _0x54c6a4[_0x47b52c << 0x2 & 0x3f] + '='));
                return _0x23e017['join']('');
            }
        }, {}],
        0xa: [function(_0x485c27, _0x44b602, _0xa88c79) {
            (function(_0x30dd01) {
                'use strict';
                var _0x3ce151 = _0x485c27('base64-js'),
                    _0x3aef9b = _0x485c27('ieee754'),
                    _0x59cb24 = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') : null;
                _0xa88c79['Buffer'] = _0x30dd01, _0xa88c79['SlowBuffer'] = _0x572272, _0xa88c79['INSPECT_MAX_BYTES'] = 0x32;
                var _0x2b3d4c = 0x7fffffff;
                _0xa88c79['kMaxLength'] = _0x2b3d4c, _0x30dd01['TYPED_ARRAY_SUPPORT'] = _0x2b3e0b();
                !_0x30dd01['TYPED_ARRAY_SUPPORT'] && typeof console !== 'undefined' && typeof console['error'] === 'function' && console['error']('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');

                function _0x2b3e0b() {
                    try {
                        var _0x41e67b = new Uint8Array(0x1),
                            _0x2204a1 = {
                                'foo': function() {
                                    return 0x2a;
                                }
                            };
                        return Object['setPrototypeOf'](_0x2204a1, Uint8Array['prototype']), Object['setPrototypeOf'](_0x41e67b, _0x2204a1), _0x41e67b['foo']() === 0x2a;
                    } catch (_0x2b6340) {
                        return ![];
                    }
                }
                Object['defineProperty'](_0x30dd01['prototype'], 'parent', {
                    'enumerable': !![],
                    'get': function() {
                        if (!_0x30dd01['isBuffer'](this)) return undefined;
                        return this['buffer'];
                    }
                }), Object['defineProperty'](_0x30dd01['prototype'], 'offset', {
                    'enumerable': !![],
                    'get': function() {
                        if (!_0x30dd01['isBuffer'](this)) return undefined;
                        return this['byteOffset'];
                    }
                });

                function _0x53f80b(_0x2caee8) {
                    if (_0x2caee8 > _0x2b3d4c) throw new RangeError('The value \"' + _0x2caee8 + '\" is invalid for option \"size\"');
                    var _0xae36b3 = new Uint8Array(_0x2caee8);
                    return Object['setPrototypeOf'](_0xae36b3, _0x30dd01['prototype']), _0xae36b3;
                }

                function _0x30dd01(_0x2f8fc7, _0x49e9ca, _0x46aa92) {
                    if (typeof _0x2f8fc7 === 'number') {
                        if (typeof _0x49e9ca === 'string') throw new TypeError('The \"string\" argument must be of type string. Received type number');
                        return _0x176e6c(_0x2f8fc7);
                    }
                    return _0x43558b(_0x2f8fc7, _0x49e9ca, _0x46aa92);
                }
                _0x30dd01['poolSize'] = 0x2000;

                function _0x43558b(_0xd8fd0, _0x3f7d8a, _0xf4fd1) {
                    if (typeof _0xd8fd0 === 'string') return _0x2ee4a2(_0xd8fd0, _0x3f7d8a);
                    if (ArrayBuffer['isView'](_0xd8fd0)) return _0x23757e(_0xd8fd0);
                    if (_0xd8fd0 == null) throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof _0xd8fd0);
                    if (_0x1fa220(_0xd8fd0, ArrayBuffer) || _0xd8fd0 && _0x1fa220(_0xd8fd0['buffer'], ArrayBuffer)) return _0x11395b(_0xd8fd0, _0x3f7d8a, _0xf4fd1);
                    if (typeof SharedArrayBuffer !== 'undefined' && (_0x1fa220(_0xd8fd0, SharedArrayBuffer) || _0xd8fd0 && _0x1fa220(_0xd8fd0['buffer'], SharedArrayBuffer))) return _0x11395b(_0xd8fd0, _0x3f7d8a, _0xf4fd1);
                    if (typeof _0xd8fd0 === 'number') throw new TypeError('The \"value\" argument must not be of type number. Received type number');
                    var _0x210927 = _0xd8fd0['valueOf'] && _0xd8fd0['valueOf']();
                    if (_0x210927 != null && _0x210927 !== _0xd8fd0) return _0x30dd01['from'](_0x210927, _0x3f7d8a, _0xf4fd1);
                    var _0x54e4eb = _0x495e06(_0xd8fd0);
                    if (_0x54e4eb) return _0x54e4eb;
                    if (typeof Symbol !== 'undefined' && Symbol['toPrimitive'] != null && typeof _0xd8fd0[Symbol['toPrimitive']] === 'function') return _0x30dd01['from'](_0xd8fd0[Symbol['toPrimitive']]('string'), _0x3f7d8a, _0xf4fd1);
                    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof _0xd8fd0);
                }
                _0x30dd01['from'] = function(_0x423f29, _0x49318a, _0x3d3ff9) {
                    return _0x43558b(_0x423f29, _0x49318a, _0x3d3ff9);
                }, Object['setPrototypeOf'](_0x30dd01['prototype'], Uint8Array['prototype']), Object['setPrototypeOf'](_0x30dd01, Uint8Array);

                function _0x808532(_0x34bb63) {
                    if (typeof _0x34bb63 !== 'number') throw new TypeError('\"size\" argument must be of type number');
                    else {
                        if (_0x34bb63 < 0x0) throw new RangeError('The value \"' + _0x34bb63 + '\" is invalid for option \"size\"');
                    }
                }

                function _0x59868d(_0x1ff4ec, _0x14d1df, _0x46cefc) {
                    _0x808532(_0x1ff4ec);
                    if (_0x1ff4ec <= 0x0) return _0x53f80b(_0x1ff4ec);
                    if (_0x14d1df !== undefined) return typeof _0x46cefc === 'string' ? _0x53f80b(_0x1ff4ec)['fill'](_0x14d1df, _0x46cefc) : _0x53f80b(_0x1ff4ec)['fill'](_0x14d1df);
                    return _0x53f80b(_0x1ff4ec);
                }
                _0x30dd01['alloc'] = function(_0x14a322, _0x5cf857, _0x10144b) {
                    return _0x59868d(_0x14a322, _0x5cf857, _0x10144b);
                };

                function _0x176e6c(_0x4688e2) {
                    return _0x808532(_0x4688e2), _0x53f80b(_0x4688e2 < 0x0 ? 0x0 : _0x71378c(_0x4688e2) | 0x0);
                }
                _0x30dd01['allocUnsafe'] = function(_0x16e2e5) {
                    return _0x176e6c(_0x16e2e5);
                }, _0x30dd01['allocUnsafeSlow'] = function(_0x4313dd) {
                    return _0x176e6c(_0x4313dd);
                };

                function _0x2ee4a2(_0x1a366e, _0x1dbe3b) {
                    (typeof _0x1dbe3b !== 'string' || _0x1dbe3b === '') && (_0x1dbe3b = 'utf8');
                    if (!_0x30dd01['isEncoding'](_0x1dbe3b)) throw new TypeError('Unknown encoding: ' + _0x1dbe3b);
                    var _0x2d01a0 = _0x5e8999(_0x1a366e, _0x1dbe3b) | 0x0,
                        _0x38569a = _0x53f80b(_0x2d01a0),
                        _0x3e06c1 = _0x38569a['write'](_0x1a366e, _0x1dbe3b);
                    return _0x3e06c1 !== _0x2d01a0 && (_0x38569a = _0x38569a['slice'](0x0, _0x3e06c1)), _0x38569a;
                }

                function _0x23757e(_0x1b5f3d) {
                    var _0x186a9f = _0x1b5f3d['length'] < 0x0 ? 0x0 : _0x71378c(_0x1b5f3d['length']) | 0x0,
                        _0x44ccc3 = _0x53f80b(_0x186a9f);
                    for (var _0x5b0f16 = 0x0; _0x5b0f16 < _0x186a9f; _0x5b0f16 += 0x1) {
                        _0x44ccc3[_0x5b0f16] = _0x1b5f3d[_0x5b0f16] & 0xff;
                    }
                    return _0x44ccc3;
                }

                function _0x11395b(_0x1008bd, _0x175f78, _0x4b271b) {
                    if (_0x175f78 < 0x0 || _0x1008bd['byteLength'] < _0x175f78) throw new RangeError('\"offset\" is outside of buffer bounds');
                    if (_0x1008bd['byteLength'] < _0x175f78 + (_0x4b271b || 0x0)) throw new RangeError('\"length\" is outside of buffer bounds');
                    var _0x37d923;
                    if (_0x175f78 === undefined && _0x4b271b === undefined) _0x37d923 = new Uint8Array(_0x1008bd);
                    else _0x4b271b === undefined ? _0x37d923 = new Uint8Array(_0x1008bd, _0x175f78) : _0x37d923 = new Uint8Array(_0x1008bd, _0x175f78, _0x4b271b);
                    return Object['setPrototypeOf'](_0x37d923, _0x30dd01['prototype']), _0x37d923;
                }

                function _0x495e06(_0x40f447) {
                    if (_0x30dd01['isBuffer'](_0x40f447)) {
                        var _0x5d274f = _0x71378c(_0x40f447['length']) | 0x0,
                            _0x38b33b = _0x53f80b(_0x5d274f);
                        if (_0x38b33b['length'] === 0x0) return _0x38b33b;
                        return _0x40f447['copy'](_0x38b33b, 0x0, 0x0, _0x5d274f), _0x38b33b;
                    }
                    if (_0x40f447['length'] !== undefined) {
                        if (typeof _0x40f447['length'] !== 'number' || _0x1f9b25(_0x40f447['length'])) return _0x53f80b(0x0);
                        return _0x23757e(_0x40f447);
                    }
                    if (_0x40f447['type'] === 'Buffer' && Array['isArray'](_0x40f447['data'])) return _0x23757e(_0x40f447['data']);
                }

                function _0x71378c(_0x472945) {
                    if (_0x472945 >= _0x2b3d4c) throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + _0x2b3d4c['toString'](0x10) + ' bytes');
                    return _0x472945 | 0x0;
                }

                function _0x572272(_0x3c6249) {
                    return +_0x3c6249 != _0x3c6249 && (_0x3c6249 = 0x0), _0x30dd01['alloc'](+_0x3c6249);
                }
                _0x30dd01['isBuffer'] = function _0x3b19ed(_0x461822) {
                    return _0x461822 != null && _0x461822['_isBuffer'] === !![] && _0x461822 !== _0x30dd01['prototype'];
                }, _0x30dd01['compare'] = function _0x105b18(_0x4a5566, _0x185d01) {
                    if (_0x1fa220(_0x4a5566, Uint8Array)) _0x4a5566 = _0x30dd01['from'](_0x4a5566, _0x4a5566['offset'], _0x4a5566['byteLength']);
                    if (_0x1fa220(_0x185d01, Uint8Array)) _0x185d01 = _0x30dd01['from'](_0x185d01, _0x185d01['offset'], _0x185d01['byteLength']);
                    if (!_0x30dd01['isBuffer'](_0x4a5566) || !_0x30dd01['isBuffer'](_0x185d01)) throw new TypeError('The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array');
                    if (_0x4a5566 === _0x185d01) return 0x0;
                    var _0x42cc93 = _0x4a5566['length'],
                        _0x5b1148 = _0x185d01['length'];
                    for (var _0x107051 = 0x0, _0x542456 = Math['min'](_0x42cc93, _0x5b1148); _0x107051 < _0x542456; ++_0x107051) {
                        if (_0x4a5566[_0x107051] !== _0x185d01[_0x107051]) {
                            _0x42cc93 = _0x4a5566[_0x107051], _0x5b1148 = _0x185d01[_0x107051];
                            break;
                        }
                    }
                    if (_0x42cc93 < _0x5b1148) return -0x1;
                    if (_0x5b1148 < _0x42cc93) return 0x1;
                    return 0x0;
                }, _0x30dd01['isEncoding'] = function _0x5760f1(_0x2ea97f) {
                    switch (String(_0x2ea97f)['toLowerCase']()) {
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return !![];
                        default:
                            return ![];
                    }
                }, _0x30dd01['concat'] = function _0x280c60(_0x27dfae, _0x98e2f5) {
                    if (!Array['isArray'](_0x27dfae)) throw new TypeError('\"list\" argument must be an Array of Buffers');
                    if (_0x27dfae['length'] === 0x0) return _0x30dd01['alloc'](0x0);
                    var _0x35fbd7;
                    if (_0x98e2f5 === undefined) {
                        _0x98e2f5 = 0x0;
                        for (_0x35fbd7 = 0x0; _0x35fbd7 < _0x27dfae['length']; ++_0x35fbd7) {
                            _0x98e2f5 += _0x27dfae[_0x35fbd7]['length'];
                        }
                    }
                    var _0x30e8b3 = _0x30dd01['allocUnsafe'](_0x98e2f5),
                        _0x3706ef = 0x0;
                    for (_0x35fbd7 = 0x0; _0x35fbd7 < _0x27dfae['length']; ++_0x35fbd7) {
                        var _0x47bcb5 = _0x27dfae[_0x35fbd7];
                        _0x1fa220(_0x47bcb5, Uint8Array) && (_0x47bcb5 = _0x30dd01['from'](_0x47bcb5));
                        if (!_0x30dd01['isBuffer'](_0x47bcb5)) throw new TypeError('\"list\" argument must be an Array of Buffers');
                        _0x47bcb5['copy'](_0x30e8b3, _0x3706ef), _0x3706ef += _0x47bcb5['length'];
                    }
                    return _0x30e8b3;
                };

                function _0x5e8999(_0x3e9c07, _0x33b54c) {
                    if (_0x30dd01['isBuffer'](_0x3e9c07)) return _0x3e9c07['length'];
                    if (ArrayBuffer['isView'](_0x3e9c07) || _0x1fa220(_0x3e9c07, ArrayBuffer)) return _0x3e9c07['byteLength'];
                    if (typeof _0x3e9c07 !== 'string') throw new TypeError('The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof _0x3e9c07);
                    var _0x339b67 = _0x3e9c07['length'],
                        _0x397c85 = arguments['length'] > 0x2 && arguments[0x2] === !![];
                    if (!_0x397c85 && _0x339b67 === 0x0) return 0x0;
                    var _0x568cff = ![];
                    for (;;) {
                        switch (_0x33b54c) {
                            case 'ascii':
                            case 'latin1':
                            case 'binary':
                                return _0x339b67;
                            case 'utf8':
                            case 'utf-8':
                                return _0x5654a4(_0x3e9c07)['length'];
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return _0x339b67 * 0x2;
                            case 'hex':
                                return _0x339b67 >>> 0x1;
                            case 'base64':
                                return _0x2deb42(_0x3e9c07)['length'];
                            default:
                                if (_0x568cff) return _0x397c85 ? -0x1 : _0x5654a4(_0x3e9c07)['length'];
                                _0x33b54c = ('' + _0x33b54c)['toLowerCase'](), _0x568cff = !![];
                        }
                    }
                }
                _0x30dd01['byteLength'] = _0x5e8999;

                function _0x6924e4(_0x383262, _0x3dc70c, _0x265a68) {
                    var _0x35749b = ![];
                    (_0x3dc70c === undefined || _0x3dc70c < 0x0) && (_0x3dc70c = 0x0);
                    if (_0x3dc70c > this['length']) return '';
                    (_0x265a68 === undefined || _0x265a68 > this['length']) && (_0x265a68 = this['length']);
                    if (_0x265a68 <= 0x0) return '';
                    _0x265a68 >>>= 0x0, _0x3dc70c >>>= 0x0;
                    if (_0x265a68 <= _0x3dc70c) return '';
                    if (!_0x383262) _0x383262 = 'utf8';
                    while (!![]) {
                        switch (_0x383262) {
                            case 'hex':
                                return _0x93acf1(this, _0x3dc70c, _0x265a68);
                            case 'utf8':
                            case 'utf-8':
                                return _0x38e1d2(this, _0x3dc70c, _0x265a68);
                            case 'ascii':
                                return _0x2875ea(this, _0x3dc70c, _0x265a68);
                            case 'latin1':
                            case 'binary':
                                return _0x2214a3(this, _0x3dc70c, _0x265a68);
                            case 'base64':
                                return _0x58b250(this, _0x3dc70c, _0x265a68);
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return _0x2b405e(this, _0x3dc70c, _0x265a68);
                            default:
                                if (_0x35749b) throw new TypeError('Unknown encoding: ' + _0x383262);
                                _0x383262 = (_0x383262 + '')['toLowerCase'](), _0x35749b = !![];
                        }
                    }
                }
                _0x30dd01['prototype']['_isBuffer'] = !![];

                function _0x2545b9(_0x1890f0, _0x5bc6ae, _0x5a49d6) {
                    var _0x39c4d7 = _0x1890f0[_0x5bc6ae];
                    _0x1890f0[_0x5bc6ae] = _0x1890f0[_0x5a49d6], _0x1890f0[_0x5a49d6] = _0x39c4d7;
                }
                _0x30dd01['prototype']['swap16'] = function _0x21cd18() {
                    var _0x3ee58d = this['length'];
                    if (_0x3ee58d % 0x2 !== 0x0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                    for (var _0x48251a = 0x0; _0x48251a < _0x3ee58d; _0x48251a += 0x2) {
                        _0x2545b9(this, _0x48251a, _0x48251a + 0x1);
                    }
                    return this;
                }, _0x30dd01['prototype']['swap32'] = function _0x232e3b() {
                    var _0x2481e7 = this['length'];
                    if (_0x2481e7 % 0x4 !== 0x0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                    for (var _0x230d58 = 0x0; _0x230d58 < _0x2481e7; _0x230d58 += 0x4) {
                        _0x2545b9(this, _0x230d58, _0x230d58 + 0x3), _0x2545b9(this, _0x230d58 + 0x1, _0x230d58 + 0x2);
                    }
                    return this;
                }, _0x30dd01['prototype']['swap64'] = function _0x56af4f() {
                    var _0x4bb11d = this['length'];
                    if (_0x4bb11d % 0x8 !== 0x0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                    for (var _0x3e0574 = 0x0; _0x3e0574 < _0x4bb11d; _0x3e0574 += 0x8) {
                        _0x2545b9(this, _0x3e0574, _0x3e0574 + 0x7), _0x2545b9(this, _0x3e0574 + 0x1, _0x3e0574 + 0x6), _0x2545b9(this, _0x3e0574 + 0x2, _0x3e0574 + 0x5), _0x2545b9(this, _0x3e0574 + 0x3, _0x3e0574 + 0x4);
                    }
                    return this;
                }, _0x30dd01['prototype']['toString'] = function _0x510f90() {
                    var _0x2f887c = this['length'];
                    if (_0x2f887c === 0x0) return '';
                    if (arguments['length'] === 0x0) return _0x38e1d2(this, 0x0, _0x2f887c);
                    return _0x6924e4['apply'](this, arguments);
                }, _0x30dd01['prototype']['toLocaleString'] = _0x30dd01['prototype']['toString'], _0x30dd01['prototype']['equals'] = function _0xc01dd4(_0x436b3c) {
                    if (!_0x30dd01['isBuffer'](_0x436b3c)) throw new TypeError('Argument must be a Buffer');
                    if (this === _0x436b3c) return !![];
                    return _0x30dd01['compare'](this, _0x436b3c) === 0x0;
                }, _0x30dd01['prototype']['inspect'] = function _0x325456() {
                    var _0x8c2bfa = '',
                        _0x29d655 = _0xa88c79['INSPECT_MAX_BYTES'];
                    _0x8c2bfa = this['toString']('hex', 0x0, _0x29d655)['replace'](/(.{2})/g, '$1 ')['trim']();
                    if (this['length'] > _0x29d655) _0x8c2bfa += ' ... ';
                    return '<Buffer ' + _0x8c2bfa + '>';
                };
                _0x59cb24 && (_0x30dd01['prototype'][_0x59cb24] = _0x30dd01['prototype']['inspect']);
                _0x30dd01['prototype']['compare'] = function _0xec900f(_0x24312b, _0x52ea30, _0x14ca98, _0x209999, _0x5e6043) {
                    _0x1fa220(_0x24312b, Uint8Array) && (_0x24312b = _0x30dd01['from'](_0x24312b, _0x24312b['offset'], _0x24312b['byteLength']));
                    if (!_0x30dd01['isBuffer'](_0x24312b)) throw new TypeError('The \"target\" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof _0x24312b);
                    _0x52ea30 === undefined && (_0x52ea30 = 0x0);
                    _0x14ca98 === undefined && (_0x14ca98 = _0x24312b ? _0x24312b['length'] : 0x0);
                    _0x209999 === undefined && (_0x209999 = 0x0);
                    _0x5e6043 === undefined && (_0x5e6043 = this['length']);
                    if (_0x52ea30 < 0x0 || _0x14ca98 > _0x24312b['length'] || _0x209999 < 0x0 || _0x5e6043 > this['length']) throw new RangeError('out of range index');
                    if (_0x209999 >= _0x5e6043 && _0x52ea30 >= _0x14ca98) return 0x0;
                    if (_0x209999 >= _0x5e6043) return -0x1;
                    if (_0x52ea30 >= _0x14ca98) return 0x1;
                    _0x52ea30 >>>= 0x0, _0x14ca98 >>>= 0x0, _0x209999 >>>= 0x0, _0x5e6043 >>>= 0x0;
                    if (this === _0x24312b) return 0x0;
                    var _0xd46fc1 = _0x5e6043 - _0x209999,
                        _0x238682 = _0x14ca98 - _0x52ea30,
                        _0x3d7c7b = Math['min'](_0xd46fc1, _0x238682),
                        _0x299da6 = this['slice'](_0x209999, _0x5e6043),
                        _0x2aad67 = _0x24312b['slice'](_0x52ea30, _0x14ca98);
                    for (var _0x4dca76 = 0x0; _0x4dca76 < _0x3d7c7b; ++_0x4dca76) {
                        if (_0x299da6[_0x4dca76] !== _0x2aad67[_0x4dca76]) {
                            _0xd46fc1 = _0x299da6[_0x4dca76], _0x238682 = _0x2aad67[_0x4dca76];
                            break;
                        }
                    }
                    if (_0xd46fc1 < _0x238682) return -0x1;
                    if (_0x238682 < _0xd46fc1) return 0x1;
                    return 0x0;
                };

                function _0x14f8d4(_0x5020d3, _0x2b31d5, _0x522293, _0x5f4165, _0x47ec6c) {
                    if (_0x5020d3['length'] === 0x0) return -0x1;
                    if (typeof _0x522293 === 'string') _0x5f4165 = _0x522293, _0x522293 = 0x0;
                    else {
                        if (_0x522293 > 0x7fffffff) _0x522293 = 0x7fffffff;
                        else _0x522293 < -0x80000000 && (_0x522293 = -0x80000000);
                    }
                    _0x522293 = +_0x522293;
                    _0x1f9b25(_0x522293) && (_0x522293 = _0x47ec6c ? 0x0 : _0x5020d3['length'] - 0x1);
                    if (_0x522293 < 0x0) _0x522293 = _0x5020d3['length'] + _0x522293;
                    if (_0x522293 >= _0x5020d3['length']) {
                        if (_0x47ec6c) return -0x1;
                        else _0x522293 = _0x5020d3['length'] - 0x1;
                    } else {
                        if (_0x522293 < 0x0) {
                            if (_0x47ec6c) _0x522293 = 0x0;
                            else return -0x1;
                        }
                    }
                    typeof _0x2b31d5 === 'string' && (_0x2b31d5 = _0x30dd01['from'](_0x2b31d5, _0x5f4165));
                    if (_0x30dd01['isBuffer'](_0x2b31d5)) {
                        if (_0x2b31d5['length'] === 0x0) return -0x1;
                        return _0x1d4239(_0x5020d3, _0x2b31d5, _0x522293, _0x5f4165, _0x47ec6c);
                    } else {
                        if (typeof _0x2b31d5 === 'number') {
                            _0x2b31d5 = _0x2b31d5 & 0xff;
                            if (typeof Uint8Array['prototype']['indexOf'] === 'function') return _0x47ec6c ? Uint8Array['prototype']['indexOf']['call'](_0x5020d3, _0x2b31d5, _0x522293) : Uint8Array['prototype']['lastIndexOf']['call'](_0x5020d3, _0x2b31d5, _0x522293);
                            return _0x1d4239(_0x5020d3, [_0x2b31d5], _0x522293, _0x5f4165, _0x47ec6c);
                        }
                    }
                    throw new TypeError('val must be string, number or Buffer');
                }

                function _0x1d4239(_0x5e6c3b, _0x363e19, _0x54f339, _0x7f97cc, _0x2b9f57) {
                    var _0x9f1027 = 0x1,
                        _0x13d2bb = _0x5e6c3b['length'],
                        _0x2c0745 = _0x363e19['length'];
                    if (_0x7f97cc !== undefined) {
                        _0x7f97cc = String(_0x7f97cc)['toLowerCase']();
                        if (_0x7f97cc === 'ucs2' || _0x7f97cc === 'ucs-2' || _0x7f97cc === 'utf16le' || _0x7f97cc === 'utf-16le') {
                            if (_0x5e6c3b['length'] < 0x2 || _0x363e19['length'] < 0x2) return -0x1;
                            _0x9f1027 = 0x2, _0x13d2bb /= 0x2, _0x2c0745 /= 0x2, _0x54f339 /= 0x2;
                        }
                    }

                    function _0xa2eb9(_0x1d7280, _0x51080e) {
                        return _0x9f1027 === 0x1 ? _0x1d7280[_0x51080e] : _0x1d7280['readUInt16BE'](_0x51080e * _0x9f1027);
                    }
                    var _0x4e373a;
                    if (_0x2b9f57) {
                        var _0x2c5c88 = -0x1;
                        for (_0x4e373a = _0x54f339; _0x4e373a < _0x13d2bb; _0x4e373a++) {
                            if (_0xa2eb9(_0x5e6c3b, _0x4e373a) === _0xa2eb9(_0x363e19, _0x2c5c88 === -0x1 ? 0x0 : _0x4e373a - _0x2c5c88)) {
                                if (_0x2c5c88 === -0x1) _0x2c5c88 = _0x4e373a;
                                if (_0x4e373a - _0x2c5c88 + 0x1 === _0x2c0745) return _0x2c5c88 * _0x9f1027;
                            } else {
                                if (_0x2c5c88 !== -0x1) _0x4e373a -= _0x4e373a - _0x2c5c88;
                                _0x2c5c88 = -0x1;
                            }
                        }
                    } else {
                        if (_0x54f339 + _0x2c0745 > _0x13d2bb) _0x54f339 = _0x13d2bb - _0x2c0745;
                        for (_0x4e373a = _0x54f339; _0x4e373a >= 0x0; _0x4e373a--) {
                            var _0x2f0bdd = !![];
                            for (var _0xc6c362 = 0x0; _0xc6c362 < _0x2c0745; _0xc6c362++) {
                                if (_0xa2eb9(_0x5e6c3b, _0x4e373a + _0xc6c362) !== _0xa2eb9(_0x363e19, _0xc6c362)) {
                                    _0x2f0bdd = ![];
                                    break;
                                }
                            }
                            if (_0x2f0bdd) return _0x4e373a;
                        }
                    }
                    return -0x1;
                }
                _0x30dd01['prototype']['includes'] = function _0x36df90(_0x39af8c, _0x1fd75b, _0x302466) {
                    return this['indexOf'](_0x39af8c, _0x1fd75b, _0x302466) !== -0x1;
                }, _0x30dd01['prototype']['indexOf'] = function _0x80e3f(_0x2c5f75, _0xfd2c32, _0x2f68db) {
                    return _0x14f8d4(this, _0x2c5f75, _0xfd2c32, _0x2f68db, !![]);
                }, _0x30dd01['prototype']['lastIndexOf'] = function _0x374ba3(_0x1190fe, _0x1f0401, _0x13c3cc) {
                    return _0x14f8d4(this, _0x1190fe, _0x1f0401, _0x13c3cc, ![]);
                };

                function _0x18d76d(_0x111ae6, _0x3b400e, _0x19ed85, _0x4e03ce) {
                    _0x19ed85 = Number(_0x19ed85) || 0x0;
                    var _0x1305b1 = _0x111ae6['length'] - _0x19ed85;
                    !_0x4e03ce ? _0x4e03ce = _0x1305b1 : (_0x4e03ce = Number(_0x4e03ce), _0x4e03ce > _0x1305b1 && (_0x4e03ce = _0x1305b1));
                    var _0x384437 = _0x3b400e['length'];
                    _0x4e03ce > _0x384437 / 0x2 && (_0x4e03ce = _0x384437 / 0x2);
                    for (var _0x21b90f = 0x0; _0x21b90f < _0x4e03ce; ++_0x21b90f) {
                        var _0x1a2815 = parseInt(_0x3b400e['substr'](_0x21b90f * 0x2, 0x2), 0x10);
                        if (_0x1f9b25(_0x1a2815)) return _0x21b90f;
                        _0x111ae6[_0x19ed85 + _0x21b90f] = _0x1a2815;
                    }
                    return _0x21b90f;
                }

                function _0x4eec08(_0x3667bb, _0x1d339d, _0x308f25, _0x121614) {
                    return _0x2646e4(_0x5654a4(_0x1d339d, _0x3667bb['length'] - _0x308f25), _0x3667bb, _0x308f25, _0x121614);
                }

                function _0x204d1b(_0x579cfb, _0x248752, _0x547582, _0x57a52b) {
                    return _0x2646e4(_0x551092(_0x248752), _0x579cfb, _0x547582, _0x57a52b);
                }

                function _0x27536f(_0x35f1bb, _0x5a8d41, _0x448f67, _0x5e728f) {
                    return _0x204d1b(_0x35f1bb, _0x5a8d41, _0x448f67, _0x5e728f);
                }

                function _0x127a4f(_0x1aaac7, _0x3b48c4, _0x5b94b3, _0x22efa0) {
                    return _0x2646e4(_0x2deb42(_0x3b48c4), _0x1aaac7, _0x5b94b3, _0x22efa0);
                }

                function _0x34ab2e(_0x4c6cdb, _0x3b6f40, _0x842f00, _0xa3c012) {
                    return _0x2646e4(_0x220f98(_0x3b6f40, _0x4c6cdb['length'] - _0x842f00), _0x4c6cdb, _0x842f00, _0xa3c012);
                }
                _0x30dd01['prototype']['write'] = function _0x500964(_0x1c86c2, _0x49d96c, _0x538793, _0x242fe7) {
                    if (_0x49d96c === undefined) _0x242fe7 = 'utf8', _0x538793 = this['length'], _0x49d96c = 0x0;
                    else {
                        if (_0x538793 === undefined && typeof _0x49d96c === 'string') _0x242fe7 = _0x49d96c, _0x538793 = this['length'], _0x49d96c = 0x0;
                        else {
                            if (isFinite(_0x49d96c)) {
                                _0x49d96c = _0x49d96c >>> 0x0;
                                if (isFinite(_0x538793)) {
                                    _0x538793 = _0x538793 >>> 0x0;
                                    if (_0x242fe7 === undefined) _0x242fe7 = 'utf8';
                                } else _0x242fe7 = _0x538793, _0x538793 = undefined;
                            } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                        }
                    }
                    var _0x204552 = this['length'] - _0x49d96c;
                    if (_0x538793 === undefined || _0x538793 > _0x204552) _0x538793 = _0x204552;
                    if (_0x1c86c2['length'] > 0x0 && (_0x538793 < 0x0 || _0x49d96c < 0x0) || _0x49d96c > this['length']) throw new RangeError('Attempt to write outside buffer bounds');
                    if (!_0x242fe7) _0x242fe7 = 'utf8';
                    var _0x5f04aa = ![];
                    for (;;) {
                        switch (_0x242fe7) {
                            case 'hex':
                                return _0x18d76d(this, _0x1c86c2, _0x49d96c, _0x538793);
                            case 'utf8':
                            case 'utf-8':
                                return _0x4eec08(this, _0x1c86c2, _0x49d96c, _0x538793);
                            case 'ascii':
                                return _0x204d1b(this, _0x1c86c2, _0x49d96c, _0x538793);
                            case 'latin1':
                            case 'binary':
                                return _0x27536f(this, _0x1c86c2, _0x49d96c, _0x538793);
                            case 'base64':
                                return _0x127a4f(this, _0x1c86c2, _0x49d96c, _0x538793);
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return _0x34ab2e(this, _0x1c86c2, _0x49d96c, _0x538793);
                            default:
                                if (_0x5f04aa) throw new TypeError('Unknown encoding: ' + _0x242fe7);
                                _0x242fe7 = ('' + _0x242fe7)['toLowerCase'](), _0x5f04aa = !![];
                        }
                    }
                }, _0x30dd01['prototype']['toJSON'] = function _0x1eb9ef() {
                    return {
                        'type': 'Buffer',
                        'data': Array['prototype']['slice']['call'](this['_arr'] || this, 0x0)
                    };
                };

                function _0x58b250(_0x42327c, _0x890741, _0x2bfefc) {
                    return _0x890741 === 0x0 && _0x2bfefc === _0x42327c['length'] ? _0x3ce151['fromByteArray'](_0x42327c) : _0x3ce151['fromByteArray'](_0x42327c['slice'](_0x890741, _0x2bfefc));
                }

                function _0x38e1d2(_0x438ae8, _0x15ad7b, _0xb2b4ba) {
                    _0xb2b4ba = Math['min'](_0x438ae8['length'], _0xb2b4ba);
                    var _0x90b34f = [],
                        _0x315ed7 = _0x15ad7b;
                    while (_0x315ed7 < _0xb2b4ba) {
                        var _0x25a411 = _0x438ae8[_0x315ed7],
                            _0x16ebd6 = null,
                            _0x1090f0 = _0x25a411 > 0xef ? 0x4 : _0x25a411 > 0xdf ? 0x3 : _0x25a411 > 0xbf ? 0x2 : 0x1;
                        if (_0x315ed7 + _0x1090f0 <= _0xb2b4ba) {
                            var _0x23fde6, _0x263c02, _0x1228b1, _0x3d41a7;
                            switch (_0x1090f0) {
                                case 0x1:
                                    _0x25a411 < 0x80 && (_0x16ebd6 = _0x25a411);
                                    break;
                                case 0x2:
                                    _0x23fde6 = _0x438ae8[_0x315ed7 + 0x1];
                                    (_0x23fde6 & 0xc0) === 0x80 && (_0x3d41a7 = (_0x25a411 & 0x1f) << 0x6 | _0x23fde6 & 0x3f, _0x3d41a7 > 0x7f && (_0x16ebd6 = _0x3d41a7));
                                    break;
                                case 0x3:
                                    _0x23fde6 = _0x438ae8[_0x315ed7 + 0x1], _0x263c02 = _0x438ae8[_0x315ed7 + 0x2];
                                    (_0x23fde6 & 0xc0) === 0x80 && (_0x263c02 & 0xc0) === 0x80 && (_0x3d41a7 = (_0x25a411 & 0xf) << 0xc | (_0x23fde6 & 0x3f) << 0x6 | _0x263c02 & 0x3f, _0x3d41a7 > 0x7ff && (_0x3d41a7 < 0xd800 || _0x3d41a7 > 0xdfff) && (_0x16ebd6 = _0x3d41a7));
                                    break;
                                case 0x4:
                                    _0x23fde6 = _0x438ae8[_0x315ed7 + 0x1], _0x263c02 = _0x438ae8[_0x315ed7 + 0x2], _0x1228b1 = _0x438ae8[_0x315ed7 + 0x3];
                                    (_0x23fde6 & 0xc0) === 0x80 && (_0x263c02 & 0xc0) === 0x80 && (_0x1228b1 & 0xc0) === 0x80 && (_0x3d41a7 = (_0x25a411 & 0xf) << 0x12 | (_0x23fde6 & 0x3f) << 0xc | (_0x263c02 & 0x3f) << 0x6 | _0x1228b1 & 0x3f, _0x3d41a7 > 0xffff && _0x3d41a7 < 0x110000 && (_0x16ebd6 = _0x3d41a7));
                            }
                        }
                        if (_0x16ebd6 === null) _0x16ebd6 = 0xfffd, _0x1090f0 = 0x1;
                        else _0x16ebd6 > 0xffff && (_0x16ebd6 -= 0x10000, _0x90b34f['push'](_0x16ebd6 >>> 0xa & 0x3ff | 0xd800), _0x16ebd6 = 0xdc00 | _0x16ebd6 & 0x3ff);
                        _0x90b34f['push'](_0x16ebd6), _0x315ed7 += _0x1090f0;
                    }
                    return _0x128b7c(_0x90b34f);
                }
                var _0x15e724 = 0x1000;

                function _0x128b7c(_0x19e295) {
                    var _0x57a414 = _0x19e295['length'];
                    if (_0x57a414 <= _0x15e724) return String['fromCharCode']['apply'](String, _0x19e295);
                    var _0x1653ca = '',
                        _0x57e290 = 0x0;
                    while (_0x57e290 < _0x57a414) {
                        _0x1653ca += String['fromCharCode']['apply'](String, _0x19e295['slice'](_0x57e290, _0x57e290 += _0x15e724));
                    }
                    return _0x1653ca;
                }

                function _0x2875ea(_0x3c4521, _0x39e9ea, _0x25cedc) {
                    var _0x55f09b = '';
                    _0x25cedc = Math['min'](_0x3c4521['length'], _0x25cedc);
                    for (var _0x1ce03e = _0x39e9ea; _0x1ce03e < _0x25cedc; ++_0x1ce03e) {
                        _0x55f09b += String['fromCharCode'](_0x3c4521[_0x1ce03e] & 0x7f);
                    }
                    return _0x55f09b;
                }

                function _0x2214a3(_0x172d16, _0x48d3e4, _0x39151f) {
                    var _0x432bae = '';
                    _0x39151f = Math['min'](_0x172d16['length'], _0x39151f);
                    for (var _0x3f2f8d = _0x48d3e4; _0x3f2f8d < _0x39151f; ++_0x3f2f8d) {
                        _0x432bae += String['fromCharCode'](_0x172d16[_0x3f2f8d]);
                    }
                    return _0x432bae;
                }

                function _0x93acf1(_0x11d40c, _0x47f817, _0x5ec37d) {
                    var _0x4534ee = _0x11d40c['length'];
                    if (!_0x47f817 || _0x47f817 < 0x0) _0x47f817 = 0x0;
                    if (!_0x5ec37d || _0x5ec37d < 0x0 || _0x5ec37d > _0x4534ee) _0x5ec37d = _0x4534ee;
                    var _0x2ff7d0 = '';
                    for (var _0x251279 = _0x47f817; _0x251279 < _0x5ec37d; ++_0x251279) {
                        _0x2ff7d0 += _0x50b047[_0x11d40c[_0x251279]];
                    }
                    return _0x2ff7d0;
                }

                function _0x2b405e(_0x38ab8e, _0x4c4539, _0x374ec5) {
                    var _0x474265 = _0x38ab8e['slice'](_0x4c4539, _0x374ec5),
                        _0x370fd5 = '';
                    for (var _0x5f2354 = 0x0; _0x5f2354 < _0x474265['length']; _0x5f2354 += 0x2) {
                        _0x370fd5 += String['fromCharCode'](_0x474265[_0x5f2354] + _0x474265[_0x5f2354 + 0x1] * 0x100);
                    }
                    return _0x370fd5;
                }
                _0x30dd01['prototype']['slice'] = function _0x55bd98(_0x5361df, _0x1ec666) {
                    var _0x4fab2a = this['length'];
                    _0x5361df = ~~_0x5361df, _0x1ec666 = _0x1ec666 === undefined ? _0x4fab2a : ~~_0x1ec666;
                    if (_0x5361df < 0x0) {
                        _0x5361df += _0x4fab2a;
                        if (_0x5361df < 0x0) _0x5361df = 0x0;
                    } else _0x5361df > _0x4fab2a && (_0x5361df = _0x4fab2a);
                    if (_0x1ec666 < 0x0) {
                        _0x1ec666 += _0x4fab2a;
                        if (_0x1ec666 < 0x0) _0x1ec666 = 0x0;
                    } else _0x1ec666 > _0x4fab2a && (_0x1ec666 = _0x4fab2a);
                    if (_0x1ec666 < _0x5361df) _0x1ec666 = _0x5361df;
                    var _0x755b6d = this['subarray'](_0x5361df, _0x1ec666);
                    return Object['setPrototypeOf'](_0x755b6d, _0x30dd01['prototype']), _0x755b6d;
                };

                function _0x32d742(_0x47067d, _0x6be167, _0x545ace) {
                    if (_0x47067d % 0x1 !== 0x0 || _0x47067d < 0x0) throw new RangeError('offset is not uint');
                    if (_0x47067d + _0x6be167 > _0x545ace) throw new RangeError('Trying to access beyond buffer length');
                }
                _0x30dd01['prototype']['readUIntLE'] = function _0x1ab48b(_0x2fcd4b, _0x1987b2, _0x2153a6) {
                    _0x2fcd4b = _0x2fcd4b >>> 0x0, _0x1987b2 = _0x1987b2 >>> 0x0;
                    if (!_0x2153a6) _0x32d742(_0x2fcd4b, _0x1987b2, this['length']);
                    var _0x1d8779 = this[_0x2fcd4b],
                        _0x41255e = 0x1,
                        _0x222052 = 0x0;
                    while (++_0x222052 < _0x1987b2 && (_0x41255e *= 0x100)) {
                        _0x1d8779 += this[_0x2fcd4b + _0x222052] * _0x41255e;
                    }
                    return _0x1d8779;
                }, _0x30dd01['prototype']['readUIntBE'] = function _0x5d5147(_0x3646e0, _0x6f8409, _0x502546) {
                    _0x3646e0 = _0x3646e0 >>> 0x0, _0x6f8409 = _0x6f8409 >>> 0x0;
                    !_0x502546 && _0x32d742(_0x3646e0, _0x6f8409, this['length']);
                    var _0x3e76a8 = this[_0x3646e0 + --_0x6f8409],
                        _0x5230f2 = 0x1;
                    while (_0x6f8409 > 0x0 && (_0x5230f2 *= 0x100)) {
                        _0x3e76a8 += this[_0x3646e0 + --_0x6f8409] * _0x5230f2;
                    }
                    return _0x3e76a8;
                }, _0x30dd01['prototype']['readUInt8'] = function _0x5ef732(_0x5765a5, _0x39a4fe) {
                    _0x5765a5 = _0x5765a5 >>> 0x0;
                    if (!_0x39a4fe) _0x32d742(_0x5765a5, 0x1, this['length']);
                    return this[_0x5765a5];
                }, _0x30dd01['prototype']['readUInt16LE'] = function _0x4bc4d9(_0x49bf42, _0x149097) {
                    _0x49bf42 = _0x49bf42 >>> 0x0;
                    if (!_0x149097) _0x32d742(_0x49bf42, 0x2, this['length']);
                    return this[_0x49bf42] | this[_0x49bf42 + 0x1] << 0x8;
                }, _0x30dd01['prototype']['readUInt16BE'] = function _0x5be03a(_0x3ffdf7, _0xed5b8b) {
                    _0x3ffdf7 = _0x3ffdf7 >>> 0x0;
                    if (!_0xed5b8b) _0x32d742(_0x3ffdf7, 0x2, this['length']);
                    return this[_0x3ffdf7] << 0x8 | this[_0x3ffdf7 + 0x1];
                }, _0x30dd01['prototype']['readUInt32LE'] = function _0x1b25b8(_0x2f098a, _0x24f64e) {
                    _0x2f098a = _0x2f098a >>> 0x0;
                    if (!_0x24f64e) _0x32d742(_0x2f098a, 0x4, this['length']);
                    return (this[_0x2f098a] | this[_0x2f098a + 0x1] << 0x8 | this[_0x2f098a + 0x2] << 0x10) + this[_0x2f098a + 0x3] * 0x1000000;
                }, _0x30dd01['prototype']['readUInt32BE'] = function _0xf2e1ce(_0x824a79, _0x2c31f0) {
                    _0x824a79 = _0x824a79 >>> 0x0;
                    if (!_0x2c31f0) _0x32d742(_0x824a79, 0x4, this['length']);
                    return this[_0x824a79] * 0x1000000 + (this[_0x824a79 + 0x1] << 0x10 | this[_0x824a79 + 0x2] << 0x8 | this[_0x824a79 + 0x3]);
                }, _0x30dd01['prototype']['readIntLE'] = function _0x867fc9(_0x579ff4, _0x54c8e3, _0x386076) {
                    _0x579ff4 = _0x579ff4 >>> 0x0, _0x54c8e3 = _0x54c8e3 >>> 0x0;
                    if (!_0x386076) _0x32d742(_0x579ff4, _0x54c8e3, this['length']);
                    var _0xf72279 = this[_0x579ff4],
                        _0x51b7bc = 0x1,
                        _0x475c76 = 0x0;
                    while (++_0x475c76 < _0x54c8e3 && (_0x51b7bc *= 0x100)) {
                        _0xf72279 += this[_0x579ff4 + _0x475c76] * _0x51b7bc;
                    }
                    _0x51b7bc *= 0x80;
                    if (_0xf72279 >= _0x51b7bc) _0xf72279 -= Math['pow'](0x2, 0x8 * _0x54c8e3);
                    return _0xf72279;
                }, _0x30dd01['prototype']['readIntBE'] = function _0x384e4a(_0x3d2760, _0x226f0d, _0x5e2b68) {
                    _0x3d2760 = _0x3d2760 >>> 0x0, _0x226f0d = _0x226f0d >>> 0x0;
                    if (!_0x5e2b68) _0x32d742(_0x3d2760, _0x226f0d, this['length']);
                    var _0x2751e5 = _0x226f0d,
                        _0x51fc01 = 0x1,
                        _0x329e7c = this[_0x3d2760 + --_0x2751e5];
                    while (_0x2751e5 > 0x0 && (_0x51fc01 *= 0x100)) {
                        _0x329e7c += this[_0x3d2760 + --_0x2751e5] * _0x51fc01;
                    }
                    _0x51fc01 *= 0x80;
                    if (_0x329e7c >= _0x51fc01) _0x329e7c -= Math['pow'](0x2, 0x8 * _0x226f0d);
                    return _0x329e7c;
                }, _0x30dd01['prototype']['readInt8'] = function _0x5e478b(_0x1e5d36, _0x51a8ba) {
                    _0x1e5d36 = _0x1e5d36 >>> 0x0;
                    if (!_0x51a8ba) _0x32d742(_0x1e5d36, 0x1, this['length']);
                    if (!(this[_0x1e5d36] & 0x80)) return this[_0x1e5d36];
                    return (0xff - this[_0x1e5d36] + 0x1) * -0x1;
                }, _0x30dd01['prototype']['readInt16LE'] = function _0x1ab653(_0x454449, _0x290361) {
                    _0x454449 = _0x454449 >>> 0x0;
                    if (!_0x290361) _0x32d742(_0x454449, 0x2, this['length']);
                    var _0x2a77b2 = this[_0x454449] | this[_0x454449 + 0x1] << 0x8;
                    return _0x2a77b2 & 0x8000 ? _0x2a77b2 | 0xffff0000 : _0x2a77b2;
                }, _0x30dd01['prototype']['readInt16BE'] = function _0x4c3dac(_0x42625a, _0x56da89) {
                    _0x42625a = _0x42625a >>> 0x0;
                    if (!_0x56da89) _0x32d742(_0x42625a, 0x2, this['length']);
                    var _0x2bd0f2 = this[_0x42625a + 0x1] | this[_0x42625a] << 0x8;
                    return _0x2bd0f2 & 0x8000 ? _0x2bd0f2 | 0xffff0000 : _0x2bd0f2;
                }, _0x30dd01['prototype']['readInt32LE'] = function _0x436178(_0x2aa9ab, _0x133e20) {
                    _0x2aa9ab = _0x2aa9ab >>> 0x0;
                    if (!_0x133e20) _0x32d742(_0x2aa9ab, 0x4, this['length']);
                    return this[_0x2aa9ab] | this[_0x2aa9ab + 0x1] << 0x8 | this[_0x2aa9ab + 0x2] << 0x10 | this[_0x2aa9ab + 0x3] << 0x18;
                }, _0x30dd01['prototype']['readInt32BE'] = function _0xc2a570(_0x592ffd, _0x4a2e35) {
                    _0x592ffd = _0x592ffd >>> 0x0;
                    if (!_0x4a2e35) _0x32d742(_0x592ffd, 0x4, this['length']);
                    return this[_0x592ffd] << 0x18 | this[_0x592ffd + 0x1] << 0x10 | this[_0x592ffd + 0x2] << 0x8 | this[_0x592ffd + 0x3];
                }, _0x30dd01['prototype']['readFloatLE'] = function _0xf427(_0x29ec6d, _0x416e55) {
                    _0x29ec6d = _0x29ec6d >>> 0x0;
                    if (!_0x416e55) _0x32d742(_0x29ec6d, 0x4, this['length']);
                    return _0x3aef9b['read'](this, _0x29ec6d, !![], 0x17, 0x4);
                }, _0x30dd01['prototype']['readFloatBE'] = function _0x3def08(_0x5cb032, _0x4f27ca) {
                    _0x5cb032 = _0x5cb032 >>> 0x0;
                    if (!_0x4f27ca) _0x32d742(_0x5cb032, 0x4, this['length']);
                    return _0x3aef9b['read'](this, _0x5cb032, ![], 0x17, 0x4);
                }, _0x30dd01['prototype']['readDoubleLE'] = function _0x599f29(_0xf9b704, _0x50bdf3) {
                    _0xf9b704 = _0xf9b704 >>> 0x0;
                    if (!_0x50bdf3) _0x32d742(_0xf9b704, 0x8, this['length']);
                    return _0x3aef9b['read'](this, _0xf9b704, !![], 0x34, 0x8);
                }, _0x30dd01['prototype']['readDoubleBE'] = function _0x4a023c(_0x33027c, _0x8b2c56) {
                    _0x33027c = _0x33027c >>> 0x0;
                    if (!_0x8b2c56) _0x32d742(_0x33027c, 0x8, this['length']);
                    return _0x3aef9b['read'](this, _0x33027c, ![], 0x34, 0x8);
                };

                function _0x3e23a9(_0x5cc93e, _0x543f51, _0x16ae3b, _0x43b1a9, _0x4f3e22, _0x4dfbcd) {
                    if (!_0x30dd01['isBuffer'](_0x5cc93e)) throw new TypeError('\"buffer\" argument must be a Buffer instance');
                    if (_0x543f51 > _0x4f3e22 || _0x543f51 < _0x4dfbcd) throw new RangeError('\"value\" argument is out of bounds');
                    if (_0x16ae3b + _0x43b1a9 > _0x5cc93e['length']) throw new RangeError('Index out of range');
                }
                _0x30dd01['prototype']['writeUIntLE'] = function _0x30aae5(_0x29fb5e, _0x3d156d, _0x3d4829, _0x1a5a61) {
                    _0x29fb5e = +_0x29fb5e, _0x3d156d = _0x3d156d >>> 0x0, _0x3d4829 = _0x3d4829 >>> 0x0;
                    if (!_0x1a5a61) {
                        var _0x525931 = Math['pow'](0x2, 0x8 * _0x3d4829) - 0x1;
                        _0x3e23a9(this, _0x29fb5e, _0x3d156d, _0x3d4829, _0x525931, 0x0);
                    }
                    var _0x52398e = 0x1,
                        _0x3f25b9 = 0x0;
                    this[_0x3d156d] = _0x29fb5e & 0xff;
                    while (++_0x3f25b9 < _0x3d4829 && (_0x52398e *= 0x100)) {
                        this[_0x3d156d + _0x3f25b9] = _0x29fb5e / _0x52398e & 0xff;
                    }
                    return _0x3d156d + _0x3d4829;
                }, _0x30dd01['prototype']['writeUIntBE'] = function _0x340dab(_0x296cf3, _0x5c2071, _0x3be99c, _0x18452d) {
                    _0x296cf3 = +_0x296cf3, _0x5c2071 = _0x5c2071 >>> 0x0, _0x3be99c = _0x3be99c >>> 0x0;
                    if (!_0x18452d) {
                        var _0x3e24fd = Math['pow'](0x2, 0x8 * _0x3be99c) - 0x1;
                        _0x3e23a9(this, _0x296cf3, _0x5c2071, _0x3be99c, _0x3e24fd, 0x0);
                    }
                    var _0x5dc469 = _0x3be99c - 0x1,
                        _0x41b730 = 0x1;
                    this[_0x5c2071 + _0x5dc469] = _0x296cf3 & 0xff;
                    while (--_0x5dc469 >= 0x0 && (_0x41b730 *= 0x100)) {
                        this[_0x5c2071 + _0x5dc469] = _0x296cf3 / _0x41b730 & 0xff;
                    }
                    return _0x5c2071 + _0x3be99c;
                }, _0x30dd01['prototype']['writeUInt8'] = function _0xe98e13(_0x2b7f99, _0x12b5a1, _0x537aa5) {
                    _0x2b7f99 = +_0x2b7f99, _0x12b5a1 = _0x12b5a1 >>> 0x0;
                    if (!_0x537aa5) _0x3e23a9(this, _0x2b7f99, _0x12b5a1, 0x1, 0xff, 0x0);
                    return this[_0x12b5a1] = _0x2b7f99 & 0xff, _0x12b5a1 + 0x1;
                }, _0x30dd01['prototype']['writeUInt16LE'] = function _0x325a81(_0x57a052, _0xdb30bc, _0x576b48) {
                    _0x57a052 = +_0x57a052, _0xdb30bc = _0xdb30bc >>> 0x0;
                    if (!_0x576b48) _0x3e23a9(this, _0x57a052, _0xdb30bc, 0x2, 0xffff, 0x0);
                    return this[_0xdb30bc] = _0x57a052 & 0xff, this[_0xdb30bc + 0x1] = _0x57a052 >>> 0x8, _0xdb30bc + 0x2;
                }, _0x30dd01['prototype']['writeUInt16BE'] = function _0x14b156(_0x46bf2c, _0x6d87a4, _0x3849dd) {
                    _0x46bf2c = +_0x46bf2c, _0x6d87a4 = _0x6d87a4 >>> 0x0;
                    if (!_0x3849dd) _0x3e23a9(this, _0x46bf2c, _0x6d87a4, 0x2, 0xffff, 0x0);
                    return this[_0x6d87a4] = _0x46bf2c >>> 0x8, this[_0x6d87a4 + 0x1] = _0x46bf2c & 0xff, _0x6d87a4 + 0x2;
                }, _0x30dd01['prototype']['writeUInt32LE'] = function _0x4a4c40(_0x4280bc, _0x3e25f8, _0x5729a) {
                    _0x4280bc = +_0x4280bc, _0x3e25f8 = _0x3e25f8 >>> 0x0;
                    if (!_0x5729a) _0x3e23a9(this, _0x4280bc, _0x3e25f8, 0x4, 0xffffffff, 0x0);
                    return this[_0x3e25f8 + 0x3] = _0x4280bc >>> 0x18, this[_0x3e25f8 + 0x2] = _0x4280bc >>> 0x10, this[_0x3e25f8 + 0x1] = _0x4280bc >>> 0x8, this[_0x3e25f8] = _0x4280bc & 0xff, _0x3e25f8 + 0x4;
                }, _0x30dd01['prototype']['writeUInt32BE'] = function _0x299cc2(_0x535c59, _0x3b390d, _0x29ff63) {
                    _0x535c59 = +_0x535c59, _0x3b390d = _0x3b390d >>> 0x0;
                    if (!_0x29ff63) _0x3e23a9(this, _0x535c59, _0x3b390d, 0x4, 0xffffffff, 0x0);
                    return this[_0x3b390d] = _0x535c59 >>> 0x18, this[_0x3b390d + 0x1] = _0x535c59 >>> 0x10, this[_0x3b390d + 0x2] = _0x535c59 >>> 0x8, this[_0x3b390d + 0x3] = _0x535c59 & 0xff, _0x3b390d + 0x4;
                }, _0x30dd01['prototype']['writeIntLE'] = function _0x3df3fb(_0xad05a0, _0x40794f, _0x14b8fb, _0x38d984) {
                    _0xad05a0 = +_0xad05a0, _0x40794f = _0x40794f >>> 0x0;
                    if (!_0x38d984) {
                        var _0x5413f2 = Math['pow'](0x2, 0x8 * _0x14b8fb - 0x1);
                        _0x3e23a9(this, _0xad05a0, _0x40794f, _0x14b8fb, _0x5413f2 - 0x1, -_0x5413f2);
                    }
                    var _0x3720d4 = 0x0,
                        _0x4912f0 = 0x1,
                        _0x156462 = 0x0;
                    this[_0x40794f] = _0xad05a0 & 0xff;
                    while (++_0x3720d4 < _0x14b8fb && (_0x4912f0 *= 0x100)) {
                        _0xad05a0 < 0x0 && _0x156462 === 0x0 && this[_0x40794f + _0x3720d4 - 0x1] !== 0x0 && (_0x156462 = 0x1), this[_0x40794f + _0x3720d4] = (_0xad05a0 / _0x4912f0 >> 0x0) - _0x156462 & 0xff;
                    }
                    return _0x40794f + _0x14b8fb;
                }, _0x30dd01['prototype']['writeIntBE'] = function _0x55e656(_0x4b9052, _0x4008aa, _0x3af0c5, _0x455b0d) {
                    _0x4b9052 = +_0x4b9052, _0x4008aa = _0x4008aa >>> 0x0;
                    if (!_0x455b0d) {
                        var _0x53dbf3 = Math['pow'](0x2, 0x8 * _0x3af0c5 - 0x1);
                        _0x3e23a9(this, _0x4b9052, _0x4008aa, _0x3af0c5, _0x53dbf3 - 0x1, -_0x53dbf3);
                    }
                    var _0xf51b08 = _0x3af0c5 - 0x1,
                        _0x4d4463 = 0x1,
                        _0x37de28 = 0x0;
                    this[_0x4008aa + _0xf51b08] = _0x4b9052 & 0xff;
                    while (--_0xf51b08 >= 0x0 && (_0x4d4463 *= 0x100)) {
                        _0x4b9052 < 0x0 && _0x37de28 === 0x0 && this[_0x4008aa + _0xf51b08 + 0x1] !== 0x0 && (_0x37de28 = 0x1), this[_0x4008aa + _0xf51b08] = (_0x4b9052 / _0x4d4463 >> 0x0) - _0x37de28 & 0xff;
                    }
                    return _0x4008aa + _0x3af0c5;
                }, _0x30dd01['prototype']['writeInt8'] = function _0xcfd93a(_0x17c68, _0x3a05d9, _0x1fb5cd) {
                    _0x17c68 = +_0x17c68, _0x3a05d9 = _0x3a05d9 >>> 0x0;
                    if (!_0x1fb5cd) _0x3e23a9(this, _0x17c68, _0x3a05d9, 0x1, 0x7f, -0x80);
                    if (_0x17c68 < 0x0) _0x17c68 = 0xff + _0x17c68 + 0x1;
                    return this[_0x3a05d9] = _0x17c68 & 0xff, _0x3a05d9 + 0x1;
                }, _0x30dd01['prototype']['writeInt16LE'] = function _0x411754(_0x1e381c, _0x47d36c, _0x10d13e) {
                    _0x1e381c = +_0x1e381c, _0x47d36c = _0x47d36c >>> 0x0;
                    if (!_0x10d13e) _0x3e23a9(this, _0x1e381c, _0x47d36c, 0x2, 0x7fff, -0x8000);
                    return this[_0x47d36c] = _0x1e381c & 0xff, this[_0x47d36c + 0x1] = _0x1e381c >>> 0x8, _0x47d36c + 0x2;
                }, _0x30dd01['prototype']['writeInt16BE'] = function _0x52f005(_0x2a44d6, _0x37d52a, _0x4783db) {
                    _0x2a44d6 = +_0x2a44d6, _0x37d52a = _0x37d52a >>> 0x0;
                    if (!_0x4783db) _0x3e23a9(this, _0x2a44d6, _0x37d52a, 0x2, 0x7fff, -0x8000);
                    return this[_0x37d52a] = _0x2a44d6 >>> 0x8, this[_0x37d52a + 0x1] = _0x2a44d6 & 0xff, _0x37d52a + 0x2;
                }, _0x30dd01['prototype']['writeInt32LE'] = function _0x48a3fc(_0x3c0b63, _0xef3a19, _0x3b6f3e) {
                    _0x3c0b63 = +_0x3c0b63, _0xef3a19 = _0xef3a19 >>> 0x0;
                    if (!_0x3b6f3e) _0x3e23a9(this, _0x3c0b63, _0xef3a19, 0x4, 0x7fffffff, -0x80000000);
                    return this[_0xef3a19] = _0x3c0b63 & 0xff, this[_0xef3a19 + 0x1] = _0x3c0b63 >>> 0x8, this[_0xef3a19 + 0x2] = _0x3c0b63 >>> 0x10, this[_0xef3a19 + 0x3] = _0x3c0b63 >>> 0x18, _0xef3a19 + 0x4;
                }, _0x30dd01['prototype']['writeInt32BE'] = function _0x1fcaba(_0x30be9e, _0x4c3cff, _0x1b2a8b) {
                    _0x30be9e = +_0x30be9e, _0x4c3cff = _0x4c3cff >>> 0x0;
                    if (!_0x1b2a8b) _0x3e23a9(this, _0x30be9e, _0x4c3cff, 0x4, 0x7fffffff, -0x80000000);
                    if (_0x30be9e < 0x0) _0x30be9e = 0xffffffff + _0x30be9e + 0x1;
                    return this[_0x4c3cff] = _0x30be9e >>> 0x18, this[_0x4c3cff + 0x1] = _0x30be9e >>> 0x10, this[_0x4c3cff + 0x2] = _0x30be9e >>> 0x8, this[_0x4c3cff + 0x3] = _0x30be9e & 0xff, _0x4c3cff + 0x4;
                };

                function _0x1ecbdc(_0x15b0df, _0x3f6f45, _0x226cce, _0x59f799, _0x154d9b, _0x167ede) {
                    if (_0x226cce + _0x59f799 > _0x15b0df['length']) throw new RangeError('Index out of range');
                    if (_0x226cce < 0x0) throw new RangeError('Index out of range');
                }

                function _0x3c1e50(_0xe78476, _0x1e8243, _0x48f568, _0x3995e2, _0x4877b4) {
                    return _0x1e8243 = +_0x1e8243, _0x48f568 = _0x48f568 >>> 0x0, !_0x4877b4 && _0x1ecbdc(_0xe78476, _0x1e8243, _0x48f568, 0x4, 0xffffff00000000000000000000000000, -0xffffff00000000000000000000000000), _0x3aef9b['write'](_0xe78476, _0x1e8243, _0x48f568, _0x3995e2, 0x17, 0x4), _0x48f568 + 0x4;
                }
                _0x30dd01['prototype']['writeFloatLE'] = function _0x58ca8a(_0x13bcac, _0x534e65, _0x3fcbb8) {
                    return _0x3c1e50(this, _0x13bcac, _0x534e65, !![], _0x3fcbb8);
                }, _0x30dd01['prototype']['writeFloatBE'] = function _0x275635(_0x1d2bdd, _0x2e6259, _0x4f3ec6) {
                    return _0x3c1e50(this, _0x1d2bdd, _0x2e6259, ![], _0x4f3ec6);
                };

                function _0x39462e(_0x17375a, _0x20beac, _0x533478, _0x540078, _0x3f447b) {
                    return _0x20beac = +_0x20beac, _0x533478 = _0x533478 >>> 0x0, !_0x3f447b && _0x1ecbdc(_0x17375a, _0x20beac, _0x533478, 0x8, 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), _0x3aef9b['write'](_0x17375a, _0x20beac, _0x533478, _0x540078, 0x34, 0x8), _0x533478 + 0x8;
                }
                _0x30dd01['prototype']['writeDoubleLE'] = function _0x38da1c(_0x56e5e4, _0x1b8994, _0x13feb3) {
                    return _0x39462e(this, _0x56e5e4, _0x1b8994, !![], _0x13feb3);
                }, _0x30dd01['prototype']['writeDoubleBE'] = function _0x1fbd30(_0x398a9e, _0x40dafc, _0x4a74f6) {
                    return _0x39462e(this, _0x398a9e, _0x40dafc, ![], _0x4a74f6);
                }, _0x30dd01['prototype']['copy'] = function _0xeca0a4(_0x492aba, _0x188403, _0x1576bc, _0x3acbf6) {
                    if (!_0x30dd01['isBuffer'](_0x492aba)) throw new TypeError('argument should be a Buffer');
                    if (!_0x1576bc) _0x1576bc = 0x0;
                    if (!_0x3acbf6 && _0x3acbf6 !== 0x0) _0x3acbf6 = this['length'];
                    if (_0x188403 >= _0x492aba['length']) _0x188403 = _0x492aba['length'];
                    if (!_0x188403) _0x188403 = 0x0;
                    if (_0x3acbf6 > 0x0 && _0x3acbf6 < _0x1576bc) _0x3acbf6 = _0x1576bc;
                    if (_0x3acbf6 === _0x1576bc) return 0x0;
                    if (_0x492aba['length'] === 0x0 || this['length'] === 0x0) return 0x0;
                    if (_0x188403 < 0x0) throw new RangeError('targetStart out of bounds');
                    if (_0x1576bc < 0x0 || _0x1576bc >= this['length']) throw new RangeError('Index out of range');
                    if (_0x3acbf6 < 0x0) throw new RangeError('sourceEnd out of bounds');
                    if (_0x3acbf6 > this['length']) _0x3acbf6 = this['length'];
                    _0x492aba['length'] - _0x188403 < _0x3acbf6 - _0x1576bc && (_0x3acbf6 = _0x492aba['length'] - _0x188403 + _0x1576bc);
                    var _0x5f30a2 = _0x3acbf6 - _0x1576bc;
                    if (this === _0x492aba && typeof Uint8Array['prototype']['copyWithin'] === 'function') this['copyWithin'](_0x188403, _0x1576bc, _0x3acbf6);
                    else {
                        if (this === _0x492aba && _0x1576bc < _0x188403 && _0x188403 < _0x3acbf6)
                            for (var _0x3dc0c2 = _0x5f30a2 - 0x1; _0x3dc0c2 >= 0x0; --_0x3dc0c2) {
                                _0x492aba[_0x3dc0c2 + _0x188403] = this[_0x3dc0c2 + _0x1576bc];
                            } else Uint8Array['prototype']['set']['call'](_0x492aba, this['subarray'](_0x1576bc, _0x3acbf6), _0x188403);
                    }
                    return _0x5f30a2;
                }, _0x30dd01['prototype']['fill'] = function _0x1fd85b(_0x240524, _0x4da1c, _0x12bb74, _0x5e753d) {
                    if (typeof _0x240524 === 'string') {
                        if (typeof _0x4da1c === 'string') _0x5e753d = _0x4da1c, _0x4da1c = 0x0, _0x12bb74 = this['length'];
                        else typeof _0x12bb74 === 'string' && (_0x5e753d = _0x12bb74, _0x12bb74 = this['length']);
                        if (_0x5e753d !== undefined && typeof _0x5e753d !== 'string') throw new TypeError('encoding must be a string');
                        if (typeof _0x5e753d === 'string' && !_0x30dd01['isEncoding'](_0x5e753d)) throw new TypeError('Unknown encoding: ' + _0x5e753d);
                        if (_0x240524['length'] === 0x1) {
                            var _0x22fd7a = _0x240524['charCodeAt'](0x0);
                            (_0x5e753d === 'utf8' && _0x22fd7a < 0x80 || _0x5e753d === 'latin1') && (_0x240524 = _0x22fd7a);
                        }
                    } else {
                        if (typeof _0x240524 === 'number') _0x240524 = _0x240524 & 0xff;
                        else typeof _0x240524 === 'boolean' && (_0x240524 = Number(_0x240524));
                    }
                    if (_0x4da1c < 0x0 || this['length'] < _0x4da1c || this['length'] < _0x12bb74) throw new RangeError('Out of range index');
                    if (_0x12bb74 <= _0x4da1c) return this;
                    _0x4da1c = _0x4da1c >>> 0x0, _0x12bb74 = _0x12bb74 === undefined ? this['length'] : _0x12bb74 >>> 0x0;
                    if (!_0x240524) _0x240524 = 0x0;
                    var _0x2f0c1c;
                    if (typeof _0x240524 === 'number')
                        for (_0x2f0c1c = _0x4da1c; _0x2f0c1c < _0x12bb74; ++_0x2f0c1c) {
                            this[_0x2f0c1c] = _0x240524;
                        } else {
                            var _0xaa8ee0 = _0x30dd01['isBuffer'](_0x240524) ? _0x240524 : _0x30dd01['from'](_0x240524, _0x5e753d),
                                _0x410470 = _0xaa8ee0['length'];
                            if (_0x410470 === 0x0) throw new TypeError('The value \"' + _0x240524 + '\" is invalid for argument \"value\"');
                            for (_0x2f0c1c = 0x0; _0x2f0c1c < _0x12bb74 - _0x4da1c; ++_0x2f0c1c) {
                                this[_0x2f0c1c + _0x4da1c] = _0xaa8ee0[_0x2f0c1c % _0x410470];
                            }
                        }
                    return this;
                };
                var _0x280240 = /[^+/0-9A-Za-z-_]/g;

                function _0x5eff1c(_0x32c7fc) {
                    _0x32c7fc = _0x32c7fc['split']('=')[0x0], _0x32c7fc = _0x32c7fc['trim']()['replace'](_0x280240, '');
                    if (_0x32c7fc['length'] < 0x2) return '';
                    while (_0x32c7fc['length'] % 0x4 !== 0x0) {
                        _0x32c7fc = _0x32c7fc + '=';
                    }
                    return _0x32c7fc;
                }

                function _0x5654a4(_0x4096dc, _0x2dd3eb) {
                    _0x2dd3eb = _0x2dd3eb || Infinity;
                    var _0x57adc3, _0x8b5b4a = _0x4096dc['length'],
                        _0x152b0f = null,
                        _0x5eb231 = [];
                    for (var _0x59afff = 0x0; _0x59afff < _0x8b5b4a; ++_0x59afff) {
                        _0x57adc3 = _0x4096dc['charCodeAt'](_0x59afff);
                        if (_0x57adc3 > 0xd7ff && _0x57adc3 < 0xe000) {
                            if (!_0x152b0f) {
                                if (_0x57adc3 > 0xdbff) {
                                    if ((_0x2dd3eb -= 0x3) > -0x1) _0x5eb231['push'](0xef, 0xbf, 0xbd);
                                    continue;
                                } else {
                                    if (_0x59afff + 0x1 === _0x8b5b4a) {
                                        if ((_0x2dd3eb -= 0x3) > -0x1) _0x5eb231['push'](0xef, 0xbf, 0xbd);
                                        continue;
                                    }
                                }
                                _0x152b0f = _0x57adc3;
                                continue;
                            }
                            if (_0x57adc3 < 0xdc00) {
                                if ((_0x2dd3eb -= 0x3) > -0x1) _0x5eb231['push'](0xef, 0xbf, 0xbd);
                                _0x152b0f = _0x57adc3;
                                continue;
                            }
                            _0x57adc3 = (_0x152b0f - 0xd800 << 0xa | _0x57adc3 - 0xdc00) + 0x10000;
                        } else {
                            if (_0x152b0f) {
                                if ((_0x2dd3eb -= 0x3) > -0x1) _0x5eb231['push'](0xef, 0xbf, 0xbd);
                            }
                        }
                        _0x152b0f = null;
                        if (_0x57adc3 < 0x80) {
                            if ((_0x2dd3eb -= 0x1) < 0x0) break;
                            _0x5eb231['push'](_0x57adc3);
                        } else {
                            if (_0x57adc3 < 0x800) {
                                if ((_0x2dd3eb -= 0x2) < 0x0) break;
                                _0x5eb231['push'](_0x57adc3 >> 0x6 | 0xc0, _0x57adc3 & 0x3f | 0x80);
                            } else {
                                if (_0x57adc3 < 0x10000) {
                                    if ((_0x2dd3eb -= 0x3) < 0x0) break;
                                    _0x5eb231['push'](_0x57adc3 >> 0xc | 0xe0, _0x57adc3 >> 0x6 & 0x3f | 0x80, _0x57adc3 & 0x3f | 0x80);
                                } else {
                                    if (_0x57adc3 < 0x110000) {
                                        if ((_0x2dd3eb -= 0x4) < 0x0) break;
                                        _0x5eb231['push'](_0x57adc3 >> 0x12 | 0xf0, _0x57adc3 >> 0xc & 0x3f | 0x80, _0x57adc3 >> 0x6 & 0x3f | 0x80, _0x57adc3 & 0x3f | 0x80);
                                    } else throw new Error('Invalid code point');
                                }
                            }
                        }
                    }
                    return _0x5eb231;
                }

                function _0x551092(_0x239e47) {
                    var _0x3b8bf1 = [];
                    for (var _0x455eab = 0x0; _0x455eab < _0x239e47['length']; ++_0x455eab) {
                        _0x3b8bf1['push'](_0x239e47['charCodeAt'](_0x455eab) & 0xff);
                    }
                    return _0x3b8bf1;
                }

                function _0x220f98(_0x798242, _0x2842d2) {
                    var _0x594d85, _0x1f0ceb, _0x2e8f12, _0x193618 = [];
                    for (var _0x44d08a = 0x0; _0x44d08a < _0x798242['length']; ++_0x44d08a) {
                        if ((_0x2842d2 -= 0x2) < 0x0) break;
                        _0x594d85 = _0x798242['charCodeAt'](_0x44d08a), _0x1f0ceb = _0x594d85 >> 0x8, _0x2e8f12 = _0x594d85 % 0x100, _0x193618['push'](_0x2e8f12), _0x193618['push'](_0x1f0ceb);
                    }
                    return _0x193618;
                }

                function _0x2deb42(_0xea1378) {
                    return _0x3ce151['toByteArray'](_0x5eff1c(_0xea1378));
                }

                function _0x2646e4(_0x2cc434, _0x55ce07, _0x4f53a4, _0x2c5be9) {
                    for (var _0xab7ca7 = 0x0; _0xab7ca7 < _0x2c5be9; ++_0xab7ca7) {
                        if (_0xab7ca7 + _0x4f53a4 >= _0x55ce07['length'] || _0xab7ca7 >= _0x2cc434['length']) break;
                        _0x55ce07[_0xab7ca7 + _0x4f53a4] = _0x2cc434[_0xab7ca7];
                    }
                    return _0xab7ca7;
                }

                function _0x1fa220(_0x24509f, _0x388eaa) {
                    return _0x24509f instanceof _0x388eaa || _0x24509f != null && _0x24509f['constructor'] != null && _0x24509f['constructor']['name'] != null && _0x24509f['constructor']['name'] === _0x388eaa['name'];
                }

                function _0x1f9b25(_0x1bf3ad) {
                    return _0x1bf3ad !== _0x1bf3ad;
                }
                var _0x50b047 = function() {
                    var _0x4ca17a = '0123456789abcdef',
                        _0x968c78 = new Array(0x100);
                    for (var _0x5e7876 = 0x0; _0x5e7876 < 0x10; ++_0x5e7876) {
                        var _0x47d10f = _0x5e7876 * 0x10;
                        for (var _0x4a7a60 = 0x0; _0x4a7a60 < 0x10; ++_0x4a7a60) {
                            _0x968c78[_0x47d10f + _0x4a7a60] = _0x4ca17a[_0x5e7876] + _0x4ca17a[_0x4a7a60];
                        }
                    }
                    return _0x968c78;
                }();
            } ['call'](this, _0x485c27('buffer')['Buffer']));
        }, {
            'base64-js': 0x9,
            'buffer': 0xa,
            'ieee754': 0xb
        }],
        0xb: [function(_0x5a6329, _0x52fc09, _0x4b1a8d) {
            _0x4b1a8d['read'] = function(_0x4f018a, _0x1279bf, _0x188780, _0x4722bf, _0x23b51d) {
                var _0x5804d5, _0xf2589c, _0x8ebab7 = _0x23b51d * 0x8 - _0x4722bf - 0x1,
                    _0x2f0baf = (0x1 << _0x8ebab7) - 0x1,
                    _0x1a0789 = _0x2f0baf >> 0x1,
                    _0x3bd16e = -0x7,
                    _0x4f827a = _0x188780 ? _0x23b51d - 0x1 : 0x0,
                    _0x5b0950 = _0x188780 ? -0x1 : 0x1,
                    _0x31153b = _0x4f018a[_0x1279bf + _0x4f827a];
                _0x4f827a += _0x5b0950, _0x5804d5 = _0x31153b & (0x1 << -_0x3bd16e) - 0x1, _0x31153b >>= -_0x3bd16e, _0x3bd16e += _0x8ebab7;
                for (; _0x3bd16e > 0x0; _0x5804d5 = _0x5804d5 * 0x100 + _0x4f018a[_0x1279bf + _0x4f827a], _0x4f827a += _0x5b0950, _0x3bd16e -= 0x8) {}
                _0xf2589c = _0x5804d5 & (0x1 << -_0x3bd16e) - 0x1, _0x5804d5 >>= -_0x3bd16e, _0x3bd16e += _0x4722bf;
                for (; _0x3bd16e > 0x0; _0xf2589c = _0xf2589c * 0x100 + _0x4f018a[_0x1279bf + _0x4f827a], _0x4f827a += _0x5b0950, _0x3bd16e -= 0x8) {}
                if (_0x5804d5 === 0x0) _0x5804d5 = 0x1 - _0x1a0789;
                else {
                    if (_0x5804d5 === _0x2f0baf) return _0xf2589c ? NaN : (_0x31153b ? -0x1 : 0x1) * Infinity;
                    else _0xf2589c = _0xf2589c + Math['pow'](0x2, _0x4722bf), _0x5804d5 = _0x5804d5 - _0x1a0789;
                }
                return (_0x31153b ? -0x1 : 0x1) * _0xf2589c * Math['pow'](0x2, _0x5804d5 - _0x4722bf);
            }, _0x4b1a8d['write'] = function(_0x50055c, _0x21bd35, _0x113dcc, _0x11f7b3, _0x9f4911, _0x1ab6e6) {
                var _0x5bd45a, _0x2a35f8, _0x468dad, _0x49cd4e = _0x1ab6e6 * 0x8 - _0x9f4911 - 0x1,
                    _0x7e6a1c = (0x1 << _0x49cd4e) - 0x1,
                    _0x402c70 = _0x7e6a1c >> 0x1,
                    _0x14ae66 = _0x9f4911 === 0x17 ? Math['pow'](0x2, -0x18) - Math['pow'](0x2, -0x4d) : 0x0,
                    _0x5aded7 = _0x11f7b3 ? 0x0 : _0x1ab6e6 - 0x1,
                    _0x3d1113 = _0x11f7b3 ? 0x1 : -0x1,
                    _0x3b6258 = _0x21bd35 < 0x0 || _0x21bd35 === 0x0 && 0x1 / _0x21bd35 < 0x0 ? 0x1 : 0x0;
                _0x21bd35 = Math['abs'](_0x21bd35);
                if (isNaN(_0x21bd35) || _0x21bd35 === Infinity) _0x2a35f8 = isNaN(_0x21bd35) ? 0x1 : 0x0, _0x5bd45a = _0x7e6a1c;
                else {
                    _0x5bd45a = Math['floor'](Math['log'](_0x21bd35) / Math['LN2']);
                    _0x21bd35 * (_0x468dad = Math['pow'](0x2, -_0x5bd45a)) < 0x1 && (_0x5bd45a--, _0x468dad *= 0x2);
                    _0x5bd45a + _0x402c70 >= 0x1 ? _0x21bd35 += _0x14ae66 / _0x468dad : _0x21bd35 += _0x14ae66 * Math['pow'](0x2, 0x1 - _0x402c70);
                    _0x21bd35 * _0x468dad >= 0x2 && (_0x5bd45a++, _0x468dad /= 0x2);
                    if (_0x5bd45a + _0x402c70 >= _0x7e6a1c) _0x2a35f8 = 0x0, _0x5bd45a = _0x7e6a1c;
                    else _0x5bd45a + _0x402c70 >= 0x1 ? (_0x2a35f8 = (_0x21bd35 * _0x468dad - 0x1) * Math['pow'](0x2, _0x9f4911), _0x5bd45a = _0x5bd45a + _0x402c70) : (_0x2a35f8 = _0x21bd35 * Math['pow'](0x2, _0x402c70 - 0x1) * Math['pow'](0x2, _0x9f4911), _0x5bd45a = 0x0);
                }
                for (; _0x9f4911 >= 0x8; _0x50055c[_0x113dcc + _0x5aded7] = _0x2a35f8 & 0xff, _0x5aded7 += _0x3d1113, _0x2a35f8 /= 0x100, _0x9f4911 -= 0x8) {}
                _0x5bd45a = _0x5bd45a << _0x9f4911 | _0x2a35f8, _0x49cd4e += _0x9f4911;
                for (; _0x49cd4e > 0x0; _0x50055c[_0x113dcc + _0x5aded7] = _0x5bd45a & 0xff, _0x5aded7 += _0x3d1113, _0x5bd45a /= 0x100, _0x49cd4e -= 0x8) {}
                _0x50055c[_0x113dcc + _0x5aded7 - _0x3d1113] |= _0x3b6258 * 0x80;
            };
        }, {}],
        0xc: [function(_0x28f5ea, _0x2bc787, _0xd93d89) {
            'use strict';
            Object['defineProperty'](_0xd93d89, '__esModule', {
                'value': !![]
            });
            var _0x122cdf = function() {
                function _0x1adfda() {
                    this['_state'] = new Int32Array(0x4), this['_buffer'] = new ArrayBuffer(0x44), this['_buffer8'] = new Uint8Array(this['_buffer'], 0x0, 0x44), this['_buffer32'] = new Uint32Array(this['_buffer'], 0x0, 0x11), this['start']();
                }
                return _0x1adfda['hashStr'] = function(_0x50c996, _0x297b38) {
                    return _0x297b38 === void 0x0 && (_0x297b38 = ![]), this['onePassHasher']['start']()['appendStr'](_0x50c996)['end'](_0x297b38);
                }, _0x1adfda['hashAsciiStr'] = function(_0x32e067, _0x2e3c0c) {
                    return _0x2e3c0c === void 0x0 && (_0x2e3c0c = ![]), this['onePassHasher']['start']()['appendAsciiStr'](_0x32e067)['end'](_0x2e3c0c);
                }, _0x1adfda['_hex'] = function(_0x1d343a) {
                    var _0x28a874 = _0x1adfda['hexChars'],
                        _0x2aa8db = _0x1adfda['hexOut'],
                        _0xc478f7, _0x128566, _0x2a6c4a, _0xc36a5f;
                    for (_0xc36a5f = 0x0; _0xc36a5f < 0x4; _0xc36a5f += 0x1) {
                        _0x128566 = _0xc36a5f * 0x8, _0xc478f7 = _0x1d343a[_0xc36a5f];
                        for (_0x2a6c4a = 0x0; _0x2a6c4a < 0x8; _0x2a6c4a += 0x2) {
                            _0x2aa8db[_0x128566 + 0x1 + _0x2a6c4a] = _0x28a874['charAt'](_0xc478f7 & 0xf), _0xc478f7 >>>= 0x4, _0x2aa8db[_0x128566 + 0x0 + _0x2a6c4a] = _0x28a874['charAt'](_0xc478f7 & 0xf), _0xc478f7 >>>= 0x4;
                        }
                    }
                    return _0x2aa8db['join']('');
                }, _0x1adfda['_md5cycle'] = function(_0x490c55, _0x126a0c) {
                    var _0x2b07ad = _0x490c55[0x0],
                        _0x1588bd = _0x490c55[0x1],
                        _0x7ca1e3 = _0x490c55[0x2],
                        _0x3b5437 = _0x490c55[0x3];
                    _0x2b07ad += (_0x1588bd & _0x7ca1e3 | ~_0x1588bd & _0x3b5437) + _0x126a0c[0x0] - 0x28955b88 | 0x0, _0x2b07ad = (_0x2b07ad << 0x7 | _0x2b07ad >>> 0x19) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x1588bd | ~_0x2b07ad & _0x7ca1e3) + _0x126a0c[0x1] - 0x173848aa | 0x0, _0x3b5437 = (_0x3b5437 << 0xc | _0x3b5437 >>> 0x14) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x2b07ad | ~_0x3b5437 & _0x1588bd) + _0x126a0c[0x2] + 0x242070db | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x11 | _0x7ca1e3 >>> 0xf) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x3b5437 | ~_0x7ca1e3 & _0x2b07ad) + _0x126a0c[0x3] - 0x3e423112 | 0x0, _0x1588bd = (_0x1588bd << 0x16 | _0x1588bd >>> 0xa) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x7ca1e3 | ~_0x1588bd & _0x3b5437) + _0x126a0c[0x4] - 0xa83f051 | 0x0, _0x2b07ad = (_0x2b07ad << 0x7 | _0x2b07ad >>> 0x19) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x1588bd | ~_0x2b07ad & _0x7ca1e3) + _0x126a0c[0x5] + 0x4787c62a | 0x0, _0x3b5437 = (_0x3b5437 << 0xc | _0x3b5437 >>> 0x14) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x2b07ad | ~_0x3b5437 & _0x1588bd) + _0x126a0c[0x6] - 0x57cfb9ed | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x11 | _0x7ca1e3 >>> 0xf) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x3b5437 | ~_0x7ca1e3 & _0x2b07ad) + _0x126a0c[0x7] - 0x2b96aff | 0x0, _0x1588bd = (_0x1588bd << 0x16 | _0x1588bd >>> 0xa) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x7ca1e3 | ~_0x1588bd & _0x3b5437) + _0x126a0c[0x8] + 0x698098d8 | 0x0, _0x2b07ad = (_0x2b07ad << 0x7 | _0x2b07ad >>> 0x19) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x1588bd | ~_0x2b07ad & _0x7ca1e3) + _0x126a0c[0x9] - 0x74bb0851 | 0x0, _0x3b5437 = (_0x3b5437 << 0xc | _0x3b5437 >>> 0x14) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x2b07ad | ~_0x3b5437 & _0x1588bd) + _0x126a0c[0xa] - 0xa44f | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x11 | _0x7ca1e3 >>> 0xf) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x3b5437 | ~_0x7ca1e3 & _0x2b07ad) + _0x126a0c[0xb] - 0x76a32842 | 0x0, _0x1588bd = (_0x1588bd << 0x16 | _0x1588bd >>> 0xa) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x7ca1e3 | ~_0x1588bd & _0x3b5437) + _0x126a0c[0xc] + 0x6b901122 | 0x0, _0x2b07ad = (_0x2b07ad << 0x7 | _0x2b07ad >>> 0x19) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x1588bd | ~_0x2b07ad & _0x7ca1e3) + _0x126a0c[0xd] - 0x2678e6d | 0x0, _0x3b5437 = (_0x3b5437 << 0xc | _0x3b5437 >>> 0x14) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x2b07ad | ~_0x3b5437 & _0x1588bd) + _0x126a0c[0xe] - 0x5986bc72 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x11 | _0x7ca1e3 >>> 0xf) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x3b5437 | ~_0x7ca1e3 & _0x2b07ad) + _0x126a0c[0xf] + 0x49b40821 | 0x0, _0x1588bd = (_0x1588bd << 0x16 | _0x1588bd >>> 0xa) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x3b5437 | _0x7ca1e3 & ~_0x3b5437) + _0x126a0c[0x1] - 0x9e1da9e | 0x0, _0x2b07ad = (_0x2b07ad << 0x5 | _0x2b07ad >>> 0x1b) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x7ca1e3 | _0x1588bd & ~_0x7ca1e3) + _0x126a0c[0x6] - 0x3fbf4cc0 | 0x0, _0x3b5437 = (_0x3b5437 << 0x9 | _0x3b5437 >>> 0x17) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x1588bd | _0x2b07ad & ~_0x1588bd) + _0x126a0c[0xb] + 0x265e5a51 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xe | _0x7ca1e3 >>> 0x12) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x2b07ad | _0x3b5437 & ~_0x2b07ad) + _0x126a0c[0x0] - 0x16493856 | 0x0, _0x1588bd = (_0x1588bd << 0x14 | _0x1588bd >>> 0xc) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x3b5437 | _0x7ca1e3 & ~_0x3b5437) + _0x126a0c[0x5] - 0x29d0efa3 | 0x0, _0x2b07ad = (_0x2b07ad << 0x5 | _0x2b07ad >>> 0x1b) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x7ca1e3 | _0x1588bd & ~_0x7ca1e3) + _0x126a0c[0xa] + 0x2441453 | 0x0, _0x3b5437 = (_0x3b5437 << 0x9 | _0x3b5437 >>> 0x17) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x1588bd | _0x2b07ad & ~_0x1588bd) + _0x126a0c[0xf] - 0x275e197f | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xe | _0x7ca1e3 >>> 0x12) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x2b07ad | _0x3b5437 & ~_0x2b07ad) + _0x126a0c[0x4] - 0x182c0438 | 0x0, _0x1588bd = (_0x1588bd << 0x14 | _0x1588bd >>> 0xc) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x3b5437 | _0x7ca1e3 & ~_0x3b5437) + _0x126a0c[0x9] + 0x21e1cde6 | 0x0, _0x2b07ad = (_0x2b07ad << 0x5 | _0x2b07ad >>> 0x1b) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x7ca1e3 | _0x1588bd & ~_0x7ca1e3) + _0x126a0c[0xe] - 0x3cc8f82a | 0x0, _0x3b5437 = (_0x3b5437 << 0x9 | _0x3b5437 >>> 0x17) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x1588bd | _0x2b07ad & ~_0x1588bd) + _0x126a0c[0x3] - 0xb2af279 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xe | _0x7ca1e3 >>> 0x12) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x2b07ad | _0x3b5437 & ~_0x2b07ad) + _0x126a0c[0x8] + 0x455a14ed | 0x0, _0x1588bd = (_0x1588bd << 0x14 | _0x1588bd >>> 0xc) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd & _0x3b5437 | _0x7ca1e3 & ~_0x3b5437) + _0x126a0c[0xd] - 0x561c16fb | 0x0, _0x2b07ad = (_0x2b07ad << 0x5 | _0x2b07ad >>> 0x1b) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad & _0x7ca1e3 | _0x1588bd & ~_0x7ca1e3) + _0x126a0c[0x2] - 0x3105c08 | 0x0, _0x3b5437 = (_0x3b5437 << 0x9 | _0x3b5437 >>> 0x17) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 & _0x1588bd | _0x2b07ad & ~_0x1588bd) + _0x126a0c[0x7] + 0x676f02d9 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xe | _0x7ca1e3 >>> 0x12) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 & _0x2b07ad | _0x3b5437 & ~_0x2b07ad) + _0x126a0c[0xc] - 0x72d5b376 | 0x0, _0x1588bd = (_0x1588bd << 0x14 | _0x1588bd >>> 0xc) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd ^ _0x7ca1e3 ^ _0x3b5437) + _0x126a0c[0x5] - 0x5c6be | 0x0, _0x2b07ad = (_0x2b07ad << 0x4 | _0x2b07ad >>> 0x1c) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad ^ _0x1588bd ^ _0x7ca1e3) + _0x126a0c[0x8] - 0x788e097f | 0x0, _0x3b5437 = (_0x3b5437 << 0xb | _0x3b5437 >>> 0x15) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 ^ _0x2b07ad ^ _0x1588bd) + _0x126a0c[0xb] + 0x6d9d6122 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x10 | _0x7ca1e3 >>> 0x10) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 ^ _0x3b5437 ^ _0x2b07ad) + _0x126a0c[0xe] - 0x21ac7f4 | 0x0, _0x1588bd = (_0x1588bd << 0x17 | _0x1588bd >>> 0x9) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd ^ _0x7ca1e3 ^ _0x3b5437) + _0x126a0c[0x1] - 0x5b4115bc | 0x0, _0x2b07ad = (_0x2b07ad << 0x4 | _0x2b07ad >>> 0x1c) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad ^ _0x1588bd ^ _0x7ca1e3) + _0x126a0c[0x4] + 0x4bdecfa9 | 0x0, _0x3b5437 = (_0x3b5437 << 0xb | _0x3b5437 >>> 0x15) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 ^ _0x2b07ad ^ _0x1588bd) + _0x126a0c[0x7] - 0x944b4a0 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x10 | _0x7ca1e3 >>> 0x10) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 ^ _0x3b5437 ^ _0x2b07ad) + _0x126a0c[0xa] - 0x41404390 | 0x0, _0x1588bd = (_0x1588bd << 0x17 | _0x1588bd >>> 0x9) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd ^ _0x7ca1e3 ^ _0x3b5437) + _0x126a0c[0xd] + 0x289b7ec6 | 0x0, _0x2b07ad = (_0x2b07ad << 0x4 | _0x2b07ad >>> 0x1c) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad ^ _0x1588bd ^ _0x7ca1e3) + _0x126a0c[0x0] - 0x155ed806 | 0x0, _0x3b5437 = (_0x3b5437 << 0xb | _0x3b5437 >>> 0x15) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 ^ _0x2b07ad ^ _0x1588bd) + _0x126a0c[0x3] - 0x2b10cf7b | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x10 | _0x7ca1e3 >>> 0x10) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 ^ _0x3b5437 ^ _0x2b07ad) + _0x126a0c[0x6] + 0x4881d05 | 0x0, _0x1588bd = (_0x1588bd << 0x17 | _0x1588bd >>> 0x9) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x1588bd ^ _0x7ca1e3 ^ _0x3b5437) + _0x126a0c[0x9] - 0x262b2fc7 | 0x0, _0x2b07ad = (_0x2b07ad << 0x4 | _0x2b07ad >>> 0x1c) + _0x1588bd | 0x0, _0x3b5437 += (_0x2b07ad ^ _0x1588bd ^ _0x7ca1e3) + _0x126a0c[0xc] - 0x1924661b | 0x0, _0x3b5437 = (_0x3b5437 << 0xb | _0x3b5437 >>> 0x15) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x3b5437 ^ _0x2b07ad ^ _0x1588bd) + _0x126a0c[0xf] + 0x1fa27cf8 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0x10 | _0x7ca1e3 >>> 0x10) + _0x3b5437 | 0x0, _0x1588bd += (_0x7ca1e3 ^ _0x3b5437 ^ _0x2b07ad) + _0x126a0c[0x2] - 0x3b53a99b | 0x0, _0x1588bd = (_0x1588bd << 0x17 | _0x1588bd >>> 0x9) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x7ca1e3 ^ (_0x1588bd | ~_0x3b5437)) + _0x126a0c[0x0] - 0xbd6ddbc | 0x0, _0x2b07ad = (_0x2b07ad << 0x6 | _0x2b07ad >>> 0x1a) + _0x1588bd | 0x0, _0x3b5437 += (_0x1588bd ^ (_0x2b07ad | ~_0x7ca1e3)) + _0x126a0c[0x7] + 0x432aff97 | 0x0, _0x3b5437 = (_0x3b5437 << 0xa | _0x3b5437 >>> 0x16) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x2b07ad ^ (_0x3b5437 | ~_0x1588bd)) + _0x126a0c[0xe] - 0x546bdc59 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xf | _0x7ca1e3 >>> 0x11) + _0x3b5437 | 0x0, _0x1588bd += (_0x3b5437 ^ (_0x7ca1e3 | ~_0x2b07ad)) + _0x126a0c[0x5] - 0x36c5fc7 | 0x0, _0x1588bd = (_0x1588bd << 0x15 | _0x1588bd >>> 0xb) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x7ca1e3 ^ (_0x1588bd | ~_0x3b5437)) + _0x126a0c[0xc] + 0x655b59c3 | 0x0, _0x2b07ad = (_0x2b07ad << 0x6 | _0x2b07ad >>> 0x1a) + _0x1588bd | 0x0, _0x3b5437 += (_0x1588bd ^ (_0x2b07ad | ~_0x7ca1e3)) + _0x126a0c[0x3] - 0x70f3336e | 0x0, _0x3b5437 = (_0x3b5437 << 0xa | _0x3b5437 >>> 0x16) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x2b07ad ^ (_0x3b5437 | ~_0x1588bd)) + _0x126a0c[0xa] - 0x100b83 | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xf | _0x7ca1e3 >>> 0x11) + _0x3b5437 | 0x0, _0x1588bd += (_0x3b5437 ^ (_0x7ca1e3 | ~_0x2b07ad)) + _0x126a0c[0x1] - 0x7a7ba22f | 0x0, _0x1588bd = (_0x1588bd << 0x15 | _0x1588bd >>> 0xb) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x7ca1e3 ^ (_0x1588bd | ~_0x3b5437)) + _0x126a0c[0x8] + 0x6fa87e4f | 0x0, _0x2b07ad = (_0x2b07ad << 0x6 | _0x2b07ad >>> 0x1a) + _0x1588bd | 0x0, _0x3b5437 += (_0x1588bd ^ (_0x2b07ad | ~_0x7ca1e3)) + _0x126a0c[0xf] - 0x1d31920 | 0x0, _0x3b5437 = (_0x3b5437 << 0xa | _0x3b5437 >>> 0x16) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x2b07ad ^ (_0x3b5437 | ~_0x1588bd)) + _0x126a0c[0x6] - 0x5cfebcec | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xf | _0x7ca1e3 >>> 0x11) + _0x3b5437 | 0x0, _0x1588bd += (_0x3b5437 ^ (_0x7ca1e3 | ~_0x2b07ad)) + _0x126a0c[0xd] + 0x4e0811a1 | 0x0, _0x1588bd = (_0x1588bd << 0x15 | _0x1588bd >>> 0xb) + _0x7ca1e3 | 0x0, _0x2b07ad += (_0x7ca1e3 ^ (_0x1588bd | ~_0x3b5437)) + _0x126a0c[0x4] - 0x8ac817e | 0x0, _0x2b07ad = (_0x2b07ad << 0x6 | _0x2b07ad >>> 0x1a) + _0x1588bd | 0x0, _0x3b5437 += (_0x1588bd ^ (_0x2b07ad | ~_0x7ca1e3)) + _0x126a0c[0xb] - 0x42c50dcb | 0x0, _0x3b5437 = (_0x3b5437 << 0xa | _0x3b5437 >>> 0x16) + _0x2b07ad | 0x0, _0x7ca1e3 += (_0x2b07ad ^ (_0x3b5437 | ~_0x1588bd)) + _0x126a0c[0x2] + 0x2ad7d2bb | 0x0, _0x7ca1e3 = (_0x7ca1e3 << 0xf | _0x7ca1e3 >>> 0x11) + _0x3b5437 | 0x0, _0x1588bd += (_0x3b5437 ^ (_0x7ca1e3 | ~_0x2b07ad)) + _0x126a0c[0x9] - 0x14792c6f | 0x0, _0x1588bd = (_0x1588bd << 0x15 | _0x1588bd >>> 0xb) + _0x7ca1e3 | 0x0, _0x490c55[0x0] = _0x2b07ad + _0x490c55[0x0] | 0x0, _0x490c55[0x1] = _0x1588bd + _0x490c55[0x1] | 0x0, _0x490c55[0x2] = _0x7ca1e3 + _0x490c55[0x2] | 0x0, _0x490c55[0x3] = _0x3b5437 + _0x490c55[0x3] | 0x0;
                }, _0x1adfda['prototype']['start'] = function() {
                    return this['_dataLength'] = 0x0, this['_bufferLength'] = 0x0, this['_state']['set'](_0x1adfda['stateIdentity']), this;
                }, _0x1adfda['prototype']['appendStr'] = function(_0x44d269) {
                    var _0x60acde = this['_buffer8'],
                        _0x3a8359 = this['_buffer32'],
                        _0x3a4a3f = this['_bufferLength'],
                        _0x13a67a, _0x4b86dd;
                    for (_0x4b86dd = 0x0; _0x4b86dd < _0x44d269['length']; _0x4b86dd += 0x1) {
                        _0x13a67a = _0x44d269['charCodeAt'](_0x4b86dd);
                        if (_0x13a67a < 0x80) _0x60acde[_0x3a4a3f++] = _0x13a67a;
                        else {
                            if (_0x13a67a < 0x800) _0x60acde[_0x3a4a3f++] = (_0x13a67a >>> 0x6) + 0xc0, _0x60acde[_0x3a4a3f++] = _0x13a67a & 0x3f | 0x80;
                            else {
                                if (_0x13a67a < 0xd800 || _0x13a67a > 0xdbff) _0x60acde[_0x3a4a3f++] = (_0x13a67a >>> 0xc) + 0xe0, _0x60acde[_0x3a4a3f++] = _0x13a67a >>> 0x6 & 0x3f | 0x80, _0x60acde[_0x3a4a3f++] = _0x13a67a & 0x3f | 0x80;
                                else {
                                    _0x13a67a = (_0x13a67a - 0xd800) * 0x400 + (_0x44d269['charCodeAt'](++_0x4b86dd) - 0xdc00) + 0x10000;
                                    if (_0x13a67a > 0x10ffff) throw new Error('Unicode standard supports code points up to U+10FFFF');
                                    _0x60acde[_0x3a4a3f++] = (_0x13a67a >>> 0x12) + 0xf0, _0x60acde[_0x3a4a3f++] = _0x13a67a >>> 0xc & 0x3f | 0x80, _0x60acde[_0x3a4a3f++] = _0x13a67a >>> 0x6 & 0x3f | 0x80, _0x60acde[_0x3a4a3f++] = _0x13a67a & 0x3f | 0x80;
                                }
                            }
                        }
                        _0x3a4a3f >= 0x40 && (this['_dataLength'] += 0x40, _0x1adfda['_md5cycle'](this['_state'], _0x3a8359), _0x3a4a3f -= 0x40, _0x3a8359[0x0] = _0x3a8359[0x10]);
                    }
                    return this['_bufferLength'] = _0x3a4a3f, this;
                }, _0x1adfda['prototype']['appendAsciiStr'] = function(_0x556675) {
                    var _0x3ba9dd = this['_buffer8'],
                        _0x5082a4 = this['_buffer32'],
                        _0x4dcacd = this['_bufferLength'],
                        _0x4ca8ee, _0x4a88ec = 0x0;
                    for (;;) {
                        _0x4ca8ee = Math['min'](_0x556675['length'] - _0x4a88ec, 0x40 - _0x4dcacd);
                        while (_0x4ca8ee--) {
                            _0x3ba9dd[_0x4dcacd++] = _0x556675['charCodeAt'](_0x4a88ec++);
                        }
                        if (_0x4dcacd < 0x40) break;
                        this['_dataLength'] += 0x40, _0x1adfda['_md5cycle'](this['_state'], _0x5082a4), _0x4dcacd = 0x0;
                    }
                    return this['_bufferLength'] = _0x4dcacd, this;
                }, _0x1adfda['prototype']['appendByteArray'] = function(_0x301a37) {
                    var _0x38c72b = this['_buffer8'],
                        _0x36d365 = this['_buffer32'],
                        _0xd32b99 = this['_bufferLength'],
                        _0xae8dda, _0x123e8f = 0x0;
                    for (;;) {
                        _0xae8dda = Math['min'](_0x301a37['length'] - _0x123e8f, 0x40 - _0xd32b99);
                        while (_0xae8dda--) {
                            _0x38c72b[_0xd32b99++] = _0x301a37[_0x123e8f++];
                        }
                        if (_0xd32b99 < 0x40) break;
                        this['_dataLength'] += 0x40, _0x1adfda['_md5cycle'](this['_state'], _0x36d365), _0xd32b99 = 0x0;
                    }
                    return this['_bufferLength'] = _0xd32b99, this;
                }, _0x1adfda['prototype']['getState'] = function() {
                    var _0x37d93d = this,
                        _0x20fc89 = _0x37d93d['_state'];
                    return {
                        'buffer': String['fromCharCode']['apply'](null, _0x37d93d['_buffer8']),
                        'buflen': _0x37d93d['_bufferLength'],
                        'length': _0x37d93d['_dataLength'],
                        'state': [_0x20fc89[0x0], _0x20fc89[0x1], _0x20fc89[0x2], _0x20fc89[0x3]]
                    };
                }, _0x1adfda['prototype']['setState'] = function(_0x5737bc) {
                    var _0x5823af = _0x5737bc['buffer'],
                        _0x43c7c2 = _0x5737bc['state'],
                        _0x7cbf0e = this['_state'],
                        _0x2fde85;
                    this['_dataLength'] = _0x5737bc['length'], this['_bufferLength'] = _0x5737bc['buflen'], _0x7cbf0e[0x0] = _0x43c7c2[0x0], _0x7cbf0e[0x1] = _0x43c7c2[0x1], _0x7cbf0e[0x2] = _0x43c7c2[0x2], _0x7cbf0e[0x3] = _0x43c7c2[0x3];
                    for (_0x2fde85 = 0x0; _0x2fde85 < _0x5823af['length']; _0x2fde85 += 0x1) {
                        this['_buffer8'][_0x2fde85] = _0x5823af['charCodeAt'](_0x2fde85);
                    }
                }, _0x1adfda['prototype']['end'] = function(_0x14a5fb) {
                    _0x14a5fb === void 0x0 && (_0x14a5fb = ![]);
                    var _0x3d099d = this['_bufferLength'],
                        _0x108e4a = this['_buffer8'],
                        _0xbb0346 = this['_buffer32'],
                        _0x191faf = (_0x3d099d >> 0x2) + 0x1,
                        _0x55fbde;
                    this['_dataLength'] += _0x3d099d, _0x108e4a[_0x3d099d] = 0x80, _0x108e4a[_0x3d099d + 0x1] = _0x108e4a[_0x3d099d + 0x2] = _0x108e4a[_0x3d099d + 0x3] = 0x0, _0xbb0346['set'](_0x1adfda['buffer32Identity']['subarray'](_0x191faf), _0x191faf);
                    _0x3d099d > 0x37 && (_0x1adfda['_md5cycle'](this['_state'], _0xbb0346), _0xbb0346['set'](_0x1adfda['buffer32Identity']));
                    _0x55fbde = this['_dataLength'] * 0x8;
                    if (_0x55fbde <= 0xffffffff) _0xbb0346[0xe] = _0x55fbde;
                    else {
                        var _0x51c26c = _0x55fbde['toString'](0x10)['match'](/(.*?)(.{0,8})$/);
                        if (_0x51c26c === null) return;
                        var _0x15dbb3 = parseInt(_0x51c26c[0x2], 0x10),
                            _0x2203e2 = parseInt(_0x51c26c[0x1], 0x10) || 0x0;
                        _0xbb0346[0xe] = _0x15dbb3, _0xbb0346[0xf] = _0x2203e2;
                    }
                    return _0x1adfda['_md5cycle'](this['_state'], _0xbb0346), _0x14a5fb ? this['_state'] : _0x1adfda['_hex'](this['_state']);
                }, _0x1adfda['stateIdentity'] = new Int32Array([0x67452301, -0x10325477, -0x67452302, 0x10325476]), _0x1adfda['buffer32Identity'] = new Int32Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]), _0x1adfda['hexChars'] = '0123456789abcdef', _0x1adfda['hexOut'] = [], _0x1adfda['onePassHasher'] = new _0x1adfda(), _0x1adfda;
            }();
            _0xd93d89['Md5'] = _0x122cdf, _0x122cdf['hashStr']('hello') !== '5d41402abc4b2a76b9719d911017c592' && console['error']('Md5 self test failed.');
        }, {}],
        0xd: [function(_0x32e88f, _0x3cecc3, _0xea3e31) {
            'use strict';
            Object['defineProperty'](_0xea3e31, '__esModule', {
                'value': !![]
            });
            const _0x266bf6 = _0x32e88f('./nxu16_watchdog'),
                _0x519fb0 = _0x32e88f('./nxu16_timer'),
                _0x3acbd7 = _0x32e88f('../../emulators_ts/Constants');
            class _0x115112 {
                constructor(_0x52df45) {
                    this['SEGMENT_SHIFT_AMOUNT'] = 0x10, this['DEVICE_ADDRESS_FCON0'] = 0xf002, this['DEVICE_ADDRESS_FCON1'] = 0xf003, this['DEVICE_ADDRESS_FCON2'] = 0xf004, this['DEVICE_ADDRESS_FCON3'] = 0xf005, this['DEVICE_ADDRESS_FSTAT'] = 0xf00a, this['DEVICE_ADDRESS_WDTCON'] = 0xf00e, this['DEVICE_ADDRESS_WDTMOD'] = 0xf00f, this['DEVICE_ADDRESS_LTBINTL'] = 0xf064, this['DEVICE_ADDRESS_LTBINTH'] = 0xf065, this['DEVICE_ADDRESS_VLSCONL'] = 0xf900, this['DEVICE_ADDRESS_VLSCONH'] = 0xf901, this['INTERRUPT_IE01'] = 0xf010, this['INTERRUPT_IE0'] = 0xf010, this['INTERRUPT_IRQ0'] = 0xf018, this['INTERRUPT_IRQ7'] = 0xf01f, this['LTBR_COUNTER'] = 0xf060, this['INTERRUPT_QWDT_IRQ0_0_ADDRESS'] = 0x8;
                    var _0x3ac4f9 = this;
                    this['mem'] = new Uint8Array(_0x52df45), this['mem']['fill'](0xff, 0x0), this['watchdog'] = new _0x266bf6['NXU16_Watchdog'](function() {
                        _0x3ac4f9['mem'][_0x3ac4f9['INTERRUPT_IE0']] = 0x1;
                    }), this['timers'] = [], this['timers'][0x0] = new _0x519fb0['NXU16_Timer'](function() {
                        _0x3ac4f9['mem'][_0x3ac4f9['INTERRUPT_IRQ7']] |= 0x1;
                    }), this['timers'][0x1] = new _0x519fb0['NXU16_Timer'](function() {
                        _0x3ac4f9['mem'][_0x3ac4f9['INTERRUPT_IRQ7']] |= 0x2;
                    }), this['timers'][0x2] = new _0x519fb0['NXU16_Timer'](function() {
                        _0x3ac4f9['mem'][_0x3ac4f9['INTERRUPT_IRQ7']] |= 0x4;
                    });
                } ['setData'](_0x507156) {
                    this['mem']['fill'](0xff, 0x0);
                    for (var _0x1e8961 in _0x507156) {
                        this['mem'][_0x1e8961] = _0x507156[_0x1e8961];
                    }
                } ['getLength']() {
                    return this['mem']['length'];
                } ['getNumOfTimers']() {
                    return this['timers']['length'];
                } ['clear']() {
                    this['mem'] = new Uint8Array(this['mem']), this['mem']['fill'](0xff, 0x0);
                } ['resetRegisters']() {
                    for (let _0x5509ca = 0xf000; _0x5509ca < 0xffff; _0x5509ca++) {
                        this['mem'][_0x5509ca] = 0xff;
                    }
                    this['mem'][this['DEVICE_ADDRESS_FCON0']] = 0x13, this['mem'][this['DEVICE_ADDRESS_FCON1']] = 0x3, this['mem'][this['DEVICE_ADDRESS_FCON2']] = 0x2, this['mem'][this['DEVICE_ADDRESS_FCON3']] = 0x40, this['mem'][this['DEVICE_ADDRESS_FSTAT']] = 0x3, this['mem'][this['DEVICE_ADDRESS_WDTCON']] = 0x0, this['mem'][this['DEVICE_ADDRESS_WDTMOD']] = 0x82, this['mem'][this['DEVICE_ADDRESS_LTBINTH']] = 0x6, this['mem'][this['DEVICE_ADDRESS_LTBINTL']] = 0x30;
                    for (let _0x240eba = this['INTERRUPT_IE01']; _0x240eba < 0xf04f; _0x240eba++) {
                        this['mem'][_0x240eba] = 0x0;
                    }
                } ['set8'](_0x327f25, _0x2075c4, _0x452b41) {
                    _0x3acbd7['Constants']['DEBUG_PORT_ADDRESSES'] && _0x452b41 > _0x3acbd7['Constants']['PORT_BEGIN_ADDRESS'] && _0x452b41 < _0x3acbd7['Constants']['PORT_END_ADDRESS'] && console['log']('wrote 0x' + _0x2075c4['toString'](0x10) + ' to port 0x' + _0x452b41['toString'](0x10));
                    if (_0x3acbd7['Constants']['DEBUG_MEMORY_ADDRESSES'] && _0x452b41 > 0xffff) debugger;
                    _0x452b41 = _0x327f25 << this['SEGMENT_SHIFT_AMOUNT'] | _0x452b41;
                    if ((_0x452b41 & 0xf000) !== 0x0) switch (_0x452b41) {
                        case this['DEVICE_ADDRESS_WDTCON']:
                            _0x2075c4 === 0x5a ? this['mem'][_0x452b41] = 0x1 : this['mem'][_0x452b41] = 0x0;
                            break;
                        case this['DEVICE_ADDRESS_WDTMOD']:
                            this['watchdog']['setMode'](_0x2075c4 & 0x3);
                            break;
                        case this['DEVICE_ADDRESS_LTBINTL']:
                            const _0x2d44a3 = _0x2075c4 & 0xf,
                                _0x2e45fe = _0x2075c4 >> 0x4 & 0xf;
                            this['timers'][0x0]['setMode'](_0x2d44a3), this['timers'][0x1]['setMode'](_0x2e45fe);
                            break;
                        case this['DEVICE_ADDRESS_VLSCONL']:
                            this['mem'][_0x452b41] = 0x34;
                            break;
                        case this['DEVICE_ADDRESS_VLSCONH']:
                            _0x2075c4 === 0x0 ? this['mem'][_0x452b41] = 0x1 : this['mem'][_0x452b41] = 0x0;
                            break;
                        default:
                            this['mem'][_0x452b41] = _0x2075c4;
                    } else this['mem'][_0x452b41] = _0x2075c4;
                } ['get8'](_0x2cd750, _0x3a80df) {
                    return _0x3a80df = _0x2cd750 << this['SEGMENT_SHIFT_AMOUNT'] | _0x3a80df, this['mem'][_0x3a80df];
                } ['set16'](_0x42f43b, _0x3e9bf6, _0x3f0049) {
                    _0x3acbd7['Constants']['DEBUG_PORT_ADDRESSES'] && _0x3f0049 > _0x3acbd7['Constants']['PORT_BEGIN_ADDRESS'] && _0x3f0049 < _0x3acbd7['Constants']['PORT_END_ADDRESS'] && console['log']('wrote 0x' + _0x3e9bf6['toString'](0x10) + ' to port 0x' + _0x3f0049['toString'](0x10));
                    if (_0x3acbd7['Constants']['DEBUG_MEMORY_ADDRESSES'] && _0x3f0049 > 0xffff) debugger;
                    _0x3f0049 = _0x42f43b << this['SEGMENT_SHIFT_AMOUNT'] | _0x3f0049, this['mem'][_0x3f0049] = _0x3e9bf6 & 0xff, this['mem'][_0x3f0049 + 0x1] = _0x3e9bf6 >> 0x8 & 0xff;
                } ['get16'](_0x1a72ee, _0x33c1f3) {
                    if (_0x3acbd7['Constants']['DEBUG_MEMORY_ADDRESSES'] && _0x33c1f3 > 0xffff) debugger;
                    _0x33c1f3 = _0x1a72ee << this['SEGMENT_SHIFT_AMOUNT'] | _0x33c1f3;
                    let _0x555285 = this['mem'][_0x33c1f3];
                    return _0x555285 |= this['mem'][_0x33c1f3 + 0x1] << 0x8, _0x555285;
                } ['get32'](_0x171b5d, _0x1974b) {
                    if (_0x3acbd7['Constants']['DEBUG_MEMORY_ADDRESSES'] && _0x1974b > 0xffff) debugger;
                    _0x1974b = _0x171b5d << this['SEGMENT_SHIFT_AMOUNT'] | _0x1974b;
                    let _0x23d14e = this['mem'][_0x1974b];
                    return _0x23d14e |= this['mem'][_0x1974b + 0x1] << 0x8, _0x23d14e |= this['mem'][_0x1974b + 0x2] << 0x10, _0x23d14e |= this['mem'][_0x1974b + 0x3] << 0x18, _0x23d14e;
                } ['get64'](_0x1979c5, _0x50a28d) {
                    let _0x1da816 = [];
                    if (_0x3acbd7['Constants']['DEBUG_MEMORY_ADDRESSES'] && _0x50a28d > 0xffff) debugger;
                    return _0x50a28d = _0x1979c5 << this['SEGMENT_SHIFT_AMOUNT'] | _0x50a28d, _0x1da816[0x0] = this['mem'][_0x50a28d], _0x1da816[0x0] |= this['mem'][_0x50a28d + 0x1] << 0x8, _0x1da816[0x0] |= this['mem'][_0x50a28d + 0x2] << 0x10, _0x1da816[0x0] |= this['mem'][_0x50a28d + 0x3] << 0x18, _0x1da816[0x1] = this['mem'][_0x50a28d + 0x4], _0x1da816[0x1] |= this['mem'][_0x50a28d + 0x5] << 0x8, _0x1da816[0x1] |= this['mem'][_0x50a28d + 0x6] << 0x10, _0x1da816[0x1] |= this['mem'][_0x50a28d + 0x7] << 0x18, _0x1da816;
                } ['getSubArray'](_0x4601b6, _0x52ba55) {
                    return this['mem']['subarray'](_0x4601b6, _0x52ba55);
                } ['getState']() {
                    let _0x54e87c = new Uint8Array(this['getLength']() + this['timers']['length']);
                    _0x54e87c['set'](this['mem']);
                    for (let _0x4f1a37 in this['timers']) {
                        _0x54e87c['set'](this['timers'][_0x4f1a37]['getState'](), this['getLength']() + parseInt(_0x4f1a37, 0xa));
                    }
                    return _0x54e87c;
                } ['setState'](_0x30ad91) {
                    this['setData'](_0x30ad91['subarray'](0x0, this['getLength']()));
                    for (let _0x256134 = 0x0; _0x256134 < this['timers']['length']; _0x256134++) {
                        this['timers'][_0x256134]['setState'](Uint8Array['from']([_0x30ad91[this['getLength']() + _0x256134]]));
                    }
                } ['start']() {
                    for (let _0x2cec37 of this['timers']) {
                        _0x2cec37['start']();
                    }
                    return;
                } ['reset']() {
                    for (let _0x25a4db of this['timers']) {
                        _0x25a4db['reset']();
                    }
                    return;
                } ['stop']() {
                    for (let _0x405e1b of this['timers']) {
                        _0x405e1b['stop']();
                    }
                    return;
                }
            }
            _0xea3e31['NXU16_DataMemory'] = _0x115112;
        }, {
            '../../emulators_ts/Constants': 0x14,
            './nxu16_timer': 0x10,
            './nxu16_watchdog': 0x11
        }],
        0xe: [function(_0x45df19, _0x11b31d, _0x324694) {
            'use strict';
            Object['defineProperty'](_0x324694, '__esModule', {
                'value': !![]
            });
            const _0x2a91a8 = _0x45df19('./nxu16_memory'),
                _0x5d1377 = _0x45df19('./nxu16_data_memory'),
                _0x4ea2af = _0x45df19('../../emulators_ts/Constants'),
                _0x1d617d = _0x45df19('../../emulators_ts/GenericKeypad');
            class _0x1d6859 {
                constructor(_0x26c460) {
                    this['DATA_MEMORY_SIZE'] = 0x40000, this['CODE_MEMORY_SIZE'] = 0x40000, this['REGISTERS_SIZE'] = 0x2a, this['NXU16_MASK_C_FLAG'] = 0x1 << 0x7, this['NXU16_MASK_Z_FLAG'] = 0x1 << 0x6, this['NXU16_MASK_S_FLAG'] = 0x1 << 0x5, this['NXU16_MASK_OV_FLAG'] = 0x1 << 0x4, this['NXU16_MASK_MIE_FLAG'] = 0x1 << 0x3, this['NXU16_MASK_HC_FLAG'] = 0x1 << 0x2, this['NXU16_MASK_ELEVEL'] = 0x3, this['NXU16_MASK_DAA_FLAG'] = this['NXU16_MASK_C_FLAG'] | this['NXU16_MASK_Z_FLAG'] | this['NXU16_MASK_S_FLAG'] | this['NXU16_MASK_HC_FLAG'], this['NXU16_PUSH_REGISTER_LIST_EA'] = 0x1, this['NXU16_PUSH_REGISTER_LIST_ELR'] = 0x1 << 0x1, this['NXU16_PUSH_REGISTER_LIST_PSW'] = 0x1 << 0x2, this['NXU16_PUSH_REGISTER_LIST_LR'] = 0x1 << 0x3, this['NXU16_POP_REGISTER_LIST_EA'] = 0x1, this['NXU16_POP_REGISTER_LIST_PC'] = 0x1 << 0x1, this['NXU16_POP_REGISTER_LIST_PSW'] = 0x1 << 0x2, this['NXU16_POP_REGISTER_LIST_LR'] = 0x1 << 0x3, this['r0'] = 0x0, this['r1'] = 0x0, this['r2'] = 0x0, this['r3'] = 0x0, this['r4'] = 0x0, this['r5'] = 0x0, this['r6'] = 0x0, this['r7'] = 0x0, this['r8'] = 0x0, this['r9'] = 0x0, this['r10'] = 0x0, this['r11'] = 0x0, this['r12'] = 0x0, this['r13'] = 0x0, this['r14'] = 0x0, this['r15'] = 0x0, this['psw'] = 0x0, this['psw1'] = 0x0, this['psw2'] = 0x0, this['psw3'] = 0x0, this['ea'] = 0x0, this['pc'] = 0x0, this['sp'] = 0x0, this['ecsr'] = 0x0, this['lcsr'] = 0x0, this['ecsr1'] = 0x0, this['ecsr2'] = 0x0, this['ecsr3'] = 0x0, this['lr'] = 0x0, this['elr1'] = 0x0, this['elr2'] = 0x0, this['elr3'] = 0x0, this['dsr'] = 0x0, this['currentDSR'] = 0x0, this['operation'] = [], this['keyEventProcessor'] = new _0x1d617d['KeyEventProcessor'](), this['showConsole'] = ![], this['taRspBuffer'] = null, this['taRspLength'] = 0x0, this['taRspIndex'] = 0x0;
                    let _0x5a123b = this,
                        _0x35be4e, _0x2a6fa8, _0x479fef;
                    this['codeMemory'] = new _0x2a91a8['NXU16_Memory'](this['CODE_MEMORY_SIZE']), this['dataMemory'] = new _0x5d1377['NXU16_DataMemory'](this['DATA_MEMORY_SIZE']), this['pendingEI'] = 0x0;
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e++) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x10; _0x2a6fa8++) {
                            _0x479fef = 0x8001 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['add_Rn_Rm'], _0x479fef = 0xf006 | _0x35be4e << 0x9 | _0x2a6fa8 << 0x5, this['operation'][_0x479fef] = this['add_ERn_ERm'], _0x479fef = 0x8006 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['addc_Rn_Rm'], _0x479fef = 0x8002 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['and_Rn_Rm'], _0x479fef = 0x8008 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['sub_Rn_Rm'], _0x479fef = 0x8007 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['sub_Rn_Rm'], _0x479fef = 0x8005 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['subc_Rn_Rm'], _0x479fef = 0x8009 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['subc_Rn_Rm'], _0x479fef = 0x8000 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xf005 | _0x35be4e << 0x9 | _0x2a6fa8 << 0x5, this['operation'][_0x479fef] = this['mov_ERn_ERm'], _0x479fef = 0x8003 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['or_Rn_Rm'], _0x479fef = 0x8004 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['xor_Rn_Rm'], _0x479fef = 0xf007 | _0x35be4e << 0x9 | _0x2a6fa8 << 0x5, this['operation'][_0x479fef] = this['sub_ERn_ERm'], _0x479fef = 0x800a | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['sll_Rn_Rm'], _0x479fef = 0x800b | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['sllc_Rn_Rm'], _0x479fef = 0x800e | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['sra_Rn_Rm'], _0x479fef = 0x800c | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['srl_Rn_Rm'], _0x479fef = 0x800d | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['srlc_Rn_Rm'], _0x479fef = 0x9002 | _0x35be4e << 0x9 | _0x2a6fa8 << 0x5, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9030 | (_0x35be4e & 0xf) << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9050 | (_0x35be4e & 0xf) << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xf004 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['mul_ERn_Rm'], _0x479fef = 0xf009 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0xf) << 0x4, this['operation'][_0x479fef] = this['div_ERn_Rm'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e++) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 <= 0xff; _0x2a6fa8++) {
                            _0x479fef = 0x1000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['add_Rn_Imm8'], _0x479fef = 0x6000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['addc_Rn_Rm'], _0x479fef = 0x2000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['and_Rn_imm8'], _0x479fef = 0x7000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['sub_Rn_Rm'], _0x479fef = 0x5000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['subc_Rn_Rm'], _0x479fef = 0x0 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0x3000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['or_Rn_Rm'], _0x479fef = 0x4000 | (_0x35be4e & 0xf) << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['xor_Rn_Rm'], _0x479fef = 0x900a | _0x35be4e << 0x8 | (_0x2a6fa8 & 0x7) << 0x4, this['operation'][_0x479fef] = this['sll_Rn_Rm'], _0x479fef = 0x900b | _0x35be4e << 0x8 | (_0x2a6fa8 & 0x7) << 0x4, this['operation'][_0x479fef] = this['sllc_Rn_Rm'], _0x479fef = 0x900e | _0x35be4e << 0x8 | (_0x2a6fa8 & 0x7) << 0x4, this['operation'][_0x479fef] = this['sra_Rn_Rm'], _0x479fef = 0x900c | _0x35be4e << 0x8 | (_0x2a6fa8 & 0x7) << 0x4, this['operation'][_0x479fef] = this['srl_Rn_Rm'], _0x479fef = 0x900d | _0x35be4e << 0x8 | (_0x2a6fa8 & 0x7) << 0x4, this['operation'][_0x479fef] = this['srlc_Rn_Rm'], _0x479fef = 0x9032 | _0x35be4e << 0x9, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9052 | _0x35be4e << 0x9, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xe900 | _0x2a6fa8, this['operation'][_0x479fef] = this['mov_Rn_Rm'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x8; _0x35be4e++) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 <= 0x7f; _0x2a6fa8++) {
                            _0x479fef = 0xe080, _0x479fef |= _0x35be4e << 0x9, _0x479fef |= _0x2a6fa8 & 0x7f, this['operation'][_0x479fef] = this['add_ERn_imm7'], _0x479fef = 0xe000, _0x479fef |= _0x35be4e << 0x9, _0x479fef |= _0x2a6fa8 & 0x7f, this['operation'][_0x479fef] = this['mov_ERn_ERm'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x8; _0x35be4e++) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x8; _0x2a6fa8++) {
                            _0x479fef = 0x9003 | (_0x35be4e & 0x7) << 0x9 | (_0x2a6fa8 & 0x7) << 0x5, this['operation'][_0x479fef] = this['st_ERn_obj'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e += 0x2) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x10; _0x2a6fa8 += 0x2) {
                            _0x479fef = 0xa008 | _0x35be4e << 0x8 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9012 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xa009 | _0x35be4e << 0x8 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['st_ERn_obj'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e += 0x2) {
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x3f; _0x2a6fa8++) {
                            _0x479fef = 0xb000 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xb040 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xb080 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xb0c0 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['st_ERn_obj'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e++) {
                        _0x479fef = 0x9010 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9011 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xf000 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['b_cadr'], _0x479fef = 0xf001 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['b_cadr'];
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 <= 0x3f; _0x2a6fa8++) {
                            _0x479fef = 0xd000 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xd040 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0xd080 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xd0c0 | _0x35be4e << 0x8 | _0x2a6fa8, this['operation'][_0x479fef] = this['st_ERn_obj'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e++) {
                        _0x479fef = 0x900f | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['use_DSR_fromRegister'], _0x479fef = 0x9031 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0x9051 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xa00f | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa00d | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa005 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa00b | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa01a | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa00c | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa007 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa004 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xa003 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xf04e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['push_obj'], _0x479fef = 0xf00e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['pop_obj'], _0x479fef = 0xf0ce | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['push_obj'], _0x479fef = 0xf08e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['pop_obj'], _0x479fef = 0x801f | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['daa_obj'], _0x479fef = 0x803f | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['das_obj'], _0x479fef = 0x805f | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['neg_obj'];
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x8; _0x2a6fa8++) {
                            _0x479fef = 0x9000 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0x7) << 0x5, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9001 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0x7) << 0x5, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0x9008 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0x7) << 0x5, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9009 | (_0x35be4e & 0xf) << 0x8 | (_0x2a6fa8 & 0x7) << 0x5, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xa000 | _0x35be4e << 0x8 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['sb_rn'], _0x479fef = 0xa080 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['sb_rn'], _0x479fef = 0xa082 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['rb_rn'], _0x479fef = 0xa002 | _0x35be4e << 0x8 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['rb_rn'], _0x479fef = 0xa001 | _0x35be4e << 0x8 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['tb_rn'], _0x479fef = 0xa081 | _0x2a6fa8 << 0x4, this['operation'][_0x479fef] = this['tb_rn'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e += 0x2) {
                        _0x479fef = 0x9033 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0x9013 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0x9053 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xa10a | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['mov_Rn_Rm'], _0x479fef = 0xf05e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['push_obj'], _0x479fef = 0xf01e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['pop_obj'], _0x479fef = 0xf00a | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['lea_obj'], _0x479fef = 0xf00b | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['lea_obj'], _0x479fef = 0x800f | _0x35be4e + 0x1 << 0x8 | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['extbw_rn'], _0x479fef = 0xf002 | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['b_cadr'], _0x479fef = 0xf003 | _0x35be4e << 0x4, this['operation'][_0x479fef] = this['b_cadr'];
                    }
                    for (_0x35be4e = 0x0; _0x35be4e < 0x10; _0x35be4e += 0x4) {
                        _0x479fef = 0x9034 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9054 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['l_ERn_obj'], _0x479fef = 0x9035 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0x9055 | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['st_ERn_obj'], _0x479fef = 0xf06e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['push_obj'], _0x479fef = 0xf02e | _0x35be4e << 0x8, this['operation'][_0x479fef] = this['pop_obj'];
                    }
                    for (_0x35be4e = 0x0; _0x35be4e <= 0xff; _0x35be4e++) {
                        _0x479fef = 0xe300 | _0x35be4e & 0xff, this['operation'][_0x479fef] = this['use_DSR'], _0x479fef = 0xe100 | _0x35be4e, this['operation'][_0x479fef] = this['add_SP_imm8'];
                        for (_0x2a6fa8 = 0x0; _0x2a6fa8 < 0x10; _0x2a6fa8++) {
                            _0x479fef = 0xc000 | _0x2a6fa8 << 0x8 | _0x35be4e, this['operation'][_0x479fef] = this['b_conditional'];
                        }
                    }
                    for (_0x35be4e = 0x0; _0x35be4e <= 0x3f; _0x35be4e++) {
                        _0x479fef = 0xe500 | _0x35be4e, this['operation'][_0x479fef] = this['swi_snum'];
                    }
                    this['operation'][0x9036] = this['l_ERn_obj'], this['operation'][0x9836] = this['l_ERn_obj'], this['operation'][0x9056] = this['l_ERn_obj'], this['operation'][0x9856] = this['l_ERn_obj'], this['operation'][0x9037] = this['st_ERn_obj'], this['operation'][0x9837] = this['st_ERn_obj'], this['operation'][0x9057] = this['st_ERn_obj'], this['operation'][0x9857] = this['st_ERn_obj'], this['operation'][0xf07e] = this['push_obj'], this['operation'][0xf87e] = this['push_obj'], this['operation'][0xf03e] = this['pop_obj'], this['operation'][0xf83e] = this['pop_obj'], this['operation'][0xfe9f] = this['use_DSR'], this['operation'][0xf00c] = this['lea_obj'], this['operation'][0xffff] = this['brk'], this['operation'][0xfe2f] = function(_0x5170c6, _0x2ea7ad) {
                        let _0x148f10 = _0x5170c6['dataMemory']['get8'](_0x5170c6['dsr'], _0x5170c6['ea']),
                            _0x2ebb1 = _0x148f10 + 0x1 & 0xff;
                        _0x2ebb1 = _0x5170c6['setFlagsFor8bitInc'](_0x5170c6, _0x148f10, 0x1, _0x2ebb1), _0x5170c6['dataMemory']['set8'](_0x5170c6['dsr'], _0x2ebb1, _0x5170c6['ea']);
                    }, this['operation'][0xfe3f] = function(_0x2a3c36, _0x4271ed) {
                        let _0x3479de = _0x2a3c36['dataMemory']['get8'](_0x2a3c36['dsr'], _0x2a3c36['ea']),
                            _0x48e14e = _0x3479de - 0x1;
                        _0x48e14e = _0x2a3c36['setFlagsFor8bitDec'](_0x2a3c36, _0x3479de, 0x1, _0x48e14e), _0x2a3c36['dataMemory']['set8'](_0x2a3c36['dsr'], _0x48e14e, _0x2a3c36['ea']);
                    }, this['operation'][0xfe8f] = function(_0x1c852c, _0x1ddae9) {}, this['operation'][0xed08] = function(_0x3d6944, _0x2ee167) {
                        _0x3d6944['psw'] |= _0x3d6944['NXU16_MASK_MIE_FLAG'], _0x3d6944['pendingEI']++;
                    }, this['operation'][0xed80] = function(_0x189064, _0x373bfd) {
                        _0x189064['psw'] |= _0x189064['NXU16_MASK_C_FLAG'];
                    }, this['operation'][0xeb7f] = function(_0x22fbbc, _0xc6409f) {
                        _0x22fbbc['psw'] &= ~_0x22fbbc['NXU16_MASK_C_FLAG'];
                    }, this['operation'][0xebf7] = function(_0x57165a, _0x22ba7d) {
                        _0x57165a['psw'] &= ~_0x57165a['NXU16_MASK_MIE_FLAG'];
                    }, this['operation'][0xfecf] = function(_0x16076a, _0xb3b512) {
                        (_0x16076a['psw'] & _0x16076a['NXU16_MASK_C_FLAG']) === 0x0 ? _0x16076a['psw'] |= _0x16076a['NXU16_MASK_C_FLAG'] : _0x16076a['psw'] &= ~_0x16076a['NXU16_MASK_C_FLAG'];
                    }, this['operation'][0xfe0f] = function(_0x20f6d4, _0x38ba5e) {
                        _0x20f6d4['ecsr'] = _0x20f6d4['getECSRForELevel'](_0x20f6d4), _0x20f6d4['pc'] = _0x20f6d4['ecsr'] << 0x10 | _0x20f6d4['getELRForELevel'](_0x20f6d4), _0x20f6d4['psw'] = _0x20f6d4['getEPSWForELevel'](_0x20f6d4);
                    }, this['operation'][0xfe1f] = function(_0x4b7e0b, _0x2c8e3f) {
                        _0x4b7e0b['ecsr'] = _0x4b7e0b['lcsr'], _0x4b7e0b['pc'] = _0x4b7e0b['ecsr'] << 0x10 | _0x4b7e0b['lr'];
                    }, _0x26c460 && _0x26c460['parent'] && (this['parent'] = _0x26c460['parent']), this['isBusy'] = !![];
                } ['getStack'](_0x594a9b) {
                    let _0x2a5689 = [];
                    for (let _0x2f1468 = -0x1; _0x2f1468 < 0xa; _0x2f1468++) {
                        _0x2a5689['push'](_0x594a9b['dataMemory']['get16'](0x0, _0x594a9b['sp'] + 0x2 * _0x2f1468)['toString'](0x10));
                    }
                    return 'Stack contents: [' + _0x2a5689['join'](', ') + ']';
                } ['initialize'](_0x31ac7d) {
                    this['codeMemory']['setData'](_0x31ac7d), this['dataMemory']['setData'](_0x31ac7d), this['resetAll'](this), this['dataMemory']['resetRegisters'](), this['sp'] = this['codeMemory']['get16'](0x0), this['pc'] = this['codeMemory']['get16'](0x2);
                } ['resetAll'](_0x4b65a4) {
                    _0x4b65a4['r0'] = 0x0, _0x4b65a4['r1'] = 0x0, _0x4b65a4['r2'] = 0x0, _0x4b65a4['r3'] = 0x0, _0x4b65a4['r4'] = 0x0, _0x4b65a4['r5'] = 0x0, _0x4b65a4['r6'] = 0x0, _0x4b65a4['r7'] = 0x0, _0x4b65a4['r8'] = 0x0, _0x4b65a4['r9'] = 0x0, _0x4b65a4['r10'] = 0x0, _0x4b65a4['r11'] = 0x0, _0x4b65a4['r12'] = 0x0, _0x4b65a4['r13'] = 0x0, _0x4b65a4['r14'] = 0x0, _0x4b65a4['r15'] = 0x0, _0x4b65a4['psw'] = 0x0, _0x4b65a4['psw1'] = 0x0, _0x4b65a4['psw2'] = 0x0, _0x4b65a4['psw3'] = 0x0, _0x4b65a4['ea'] = 0x0, _0x4b65a4['pc'] = 0x0, _0x4b65a4['sp'] = 0x0, _0x4b65a4['dsr'] = 0x0, _0x4b65a4['currentDSR'] = 0x0, _0x4b65a4['ecsr'] = 0x0, _0x4b65a4['lcsr'] = 0x0, _0x4b65a4['ecsr1'] = 0x0, _0x4b65a4['ecsr2'] = 0x0, _0x4b65a4['ecsr3'] = 0x0, _0x4b65a4['lr'] = 0x0, _0x4b65a4['elr1'] = 0x0, _0x4b65a4['elr2'] = 0x0, _0x4b65a4['elr3'] = 0x0, _0x4b65a4['pendingEI'] = 0x0;
                } ['isCSet'](_0x13872b) {
                    return (_0x13872b['psw'] & _0x13872b['NXU16_MASK_C_FLAG']) !== 0x0;
                } ['setC'](_0x3a17b5, _0x2bcbf4) {
                    _0x2bcbf4 ? _0x3a17b5['psw'] |= _0x3a17b5['NXU16_MASK_C_FLAG'] : _0x3a17b5['psw'] &= ~_0x3a17b5['NXU16_MASK_C_FLAG'];
                } ['isZSet'](_0x168c78) {
                    return (_0x168c78['psw'] & _0x168c78['NXU16_MASK_Z_FLAG']) !== 0x0;
                } ['setZ'](_0x10858a, _0x4f681e) {
                    _0x4f681e ? _0x10858a['psw'] |= _0x10858a['NXU16_MASK_Z_FLAG'] : _0x10858a['psw'] &= ~_0x10858a['NXU16_MASK_Z_FLAG'];
                } ['isSSet'](_0x43ced9) {
                    return (_0x43ced9['psw'] & _0x43ced9['NXU16_MASK_S_FLAG']) !== 0x0;
                } ['setS'](_0x307be3, _0x2399ae) {
                    _0x2399ae ? _0x307be3['psw'] |= _0x307be3['NXU16_MASK_S_FLAG'] : _0x307be3['psw'] &= ~_0x307be3['NXU16_MASK_S_FLAG'];
                } ['isOVSet'](_0x112e24) {
                    return (_0x112e24['psw'] & _0x112e24['NXU16_MASK_OV_FLAG']) !== 0x0;
                } ['setOV'](_0x3b4746, _0x309ce3) {
                    _0x309ce3 ? _0x3b4746['psw'] |= _0x3b4746['NXU16_MASK_OV_FLAG'] : _0x3b4746['psw'] &= ~_0x3b4746['NXU16_MASK_OV_FLAG'];
                } ['isHCSet'](_0x4fb49a) {
                    return (_0x4fb49a['psw'] & _0x4fb49a['NXU16_MASK_HC_FLAG']) !== 0x0;
                } ['setHC'](_0xaf4ff5, _0x59cd57) {
                    _0x59cd57 ? _0xaf4ff5['psw'] |= _0xaf4ff5['NXU16_MASK_HC_FLAG'] : _0xaf4ff5['psw'] &= ~_0xaf4ff5['NXU16_MASK_HC_FLAG'];
                } ['isMIESet'](_0x4bbce1) {
                    return (_0x4bbce1['psw'] & _0x4bbce1['NXU16_MASK_MIE_FLAG']) !== 0x0;
                } ['setMIE'](_0x4f5fc8, _0x25c7bf) {
                    _0x25c7bf ? _0x4f5fc8['psw'] |= _0x4f5fc8['NXU16_MASK_MIE_FLAG'] : _0x4f5fc8['psw'] &= ~_0x4f5fc8['NXU16_MASK_MIE_FLAG'];
                } ['getECSRForELevel'](_0x18264b) {
                    let _0x1719ff;
                    switch (_0x18264b['psw'] & 0x3) {
                        case 0x0:
                            return _0x18264b['ecsr'];
                        case 0x1:
                            return _0x18264b['ecsr1'];
                        case 0x2:
                            return _0x18264b['ecsr2'];
                        case 0x3:
                            return _0x18264b['ecsr3'];
                    }
                } ['setECSRForELevel'](_0x43567a, _0x211287) {
                    let _0x7b3a33;
                    switch (_0x43567a['psw'] & 0x3) {
                        case 0x0:
                            _0x43567a['ecsr'] = _0x211287;
                            break;
                        case 0x1:
                            _0x43567a['ecsr1'] = _0x211287;
                            break;
                        case 0x2:
                            _0x43567a['ecsr2'] = _0x211287;
                            break;
                        case 0x3:
                            _0x43567a['ecsr3'] = _0x211287;
                            break;
                    }
                } ['getELRForELevel'](_0x1148f8) {
                    let _0x364ef8;
                    switch (_0x1148f8['psw'] & 0x3) {
                        case 0x0:
                            return _0x1148f8['lr'];
                        case 0x1:
                            return _0x1148f8['elr1'];
                        case 0x2:
                            return _0x1148f8['elr2'];
                        case 0x3:
                            return _0x1148f8['elr3'];
                    }
                } ['setELRForELevel'](_0x56bdf1, _0x3c804f) {
                    let _0x137d72;
                    switch (_0x56bdf1['psw'] & 0x3) {
                        case 0x0:
                            _0x56bdf1['lr'] = _0x3c804f;
                            break;
                        case 0x1:
                            _0x56bdf1['elr1'] = _0x3c804f;
                            break;
                        case 0x2:
                            _0x56bdf1['elr2'] = _0x3c804f;
                            break;
                        case 0x3:
                            _0x56bdf1['elr3'] = _0x3c804f;
                            break;
                    }
                } ['getEPSWForELevel'](_0x49c2dc) {
                    let _0x1878a8;
                    switch (_0x49c2dc['psw'] & 0x3) {
                        case 0x0:
                            return _0x49c2dc['psw'];
                        case 0x1:
                            return _0x49c2dc['psw1'];
                        case 0x2:
                            return _0x49c2dc['psw2'];
                        case 0x3:
                            return _0x49c2dc['psw3'];
                    }
                } ['setEPSWForELevel'](_0x50f7e, _0x42f088) {
                    let _0x5c3ef6;
                    switch (_0x50f7e['psw'] & 0x3) {
                        case 0x0:
                            _0x50f7e['psw'] = _0x42f088;
                            break;
                        case 0x1:
                            _0x50f7e['psw1'] = _0x42f088;
                            break;
                        case 0x2:
                            _0x50f7e['psw2'] = _0x42f088;
                            break;
                        case 0x3:
                            _0x50f7e['psw3'] = _0x42f088;
                            break;
                    }
                } ['getInterruptHandlerAddress'](_0x196d27, _0x5c800a, _0x3583ec) {
                    const _0x1bbda7 = _0x196d27['dataMemory'];
                    var _0x2cd263 = _0x1bbda7['get8'](_0x196d27['dsr'], _0x1bbda7['INTERRUPT_IE0'] + _0x5c800a),
                        _0x38a6fd = _0x1bbda7['get8'](_0x196d27['dsr'], _0x1bbda7['INTERRUPT_IRQ0'] + _0x5c800a),
                        _0x40b8e4 = 0x0,
                        _0x53b127 = 0x0;
                    if (_0x5c800a === 0x0) return _0x1bbda7['set8'](0x0, _0x38a6fd & 0xfe, _0x1bbda7['INTERRUPT_IRQ0']), _0x1bbda7['get16'](0x0, _0x1bbda7['INTERRUPT_QWDT_IRQ0_0_ADDRESS']);
                    for (; _0x53b127 < 0x8; _0x53b127++) {
                        _0x3583ec ? _0x40b8e4 = _0x2cd263 >> _0x53b127 & _0x38a6fd >> _0x53b127 & 0x1 : _0x40b8e4 = _0x38a6fd >> _0x53b127 & 0x1;
                        if (_0x40b8e4 !== 0x0) {
                            _0x38a6fd &= ~(_0x40b8e4 << _0x53b127), _0x1bbda7['set8'](0x0, _0x38a6fd, _0x1bbda7['INTERRUPT_IRQ0'] + _0x5c800a);
                            break;
                        }
                    }
                    return _0x196d27['codeMemory']['get16'](0x2 * (0x8 * _0x5c800a + _0x53b127));
                } ['get8BitRegister'](_0x35f583, _0x16d678) {
                    let _0x116020, _0x3ccab8;
                    switch (_0x16d678) {
                        case 0x0:
                            return _0x35f583['r0'];
                        case 0x1:
                            return _0x35f583['r1'];
                        case 0x2:
                            return _0x35f583['r2'];
                        case 0x3:
                            return _0x35f583['r3'];
                        case 0x4:
                            return _0x35f583['r4'];
                        case 0x5:
                            return _0x35f583['r5'];
                        case 0x6:
                            return _0x35f583['r6'];
                        case 0x7:
                            return _0x35f583['r7'];
                        case 0x8:
                            return _0x35f583['r8'];
                        case 0x9:
                            return _0x35f583['r9'];
                        case 0xa:
                            return _0x35f583['r10'];
                        case 0xb:
                            return _0x35f583['r11'];
                        case 0xc:
                            return _0x35f583['r12'];
                        case 0xd:
                            return _0x35f583['r13'];
                        case 0xe:
                            return _0x35f583['r14'];
                        case 0xf:
                            return _0x35f583['r15'];
                    }
                } ['get16BitRegister'](_0x233290, _0x2975d2) {
                    switch (_0x2975d2) {
                        case 0x0:
                            return _0x233290['r0'] | _0x233290['r1'] << 0x8;
                        case 0x1:
                            return _0x233290['r1'] | _0x233290['r2'] << 0x8;
                        case 0x2:
                            return _0x233290['r2'] | _0x233290['r3'] << 0x8;
                        case 0x3:
                            return _0x233290['r3'] | _0x233290['r4'] << 0x8;
                        case 0x4:
                            return _0x233290['r4'] | _0x233290['r5'] << 0x8;
                        case 0x5:
                            return _0x233290['r5'] | _0x233290['r6'] << 0x8;
                        case 0x6:
                            return _0x233290['r6'] | _0x233290['r7'] << 0x8;
                        case 0x7:
                            return _0x233290['r7'] | _0x233290['r8'] << 0x8;
                        case 0x8:
                            return _0x233290['r8'] | _0x233290['r9'] << 0x8;
                        case 0x9:
                            return _0x233290['r9'] | _0x233290['r10'] << 0x8;
                        case 0xa:
                            return _0x233290['r10'] | _0x233290['r11'] << 0x8;
                        case 0xb:
                            return _0x233290['r11'] | _0x233290['r12'] << 0x8;
                        case 0xc:
                            return _0x233290['r12'] | _0x233290['r13'] << 0x8;
                        case 0xd:
                            return _0x233290['r13'] | _0x233290['r14'] << 0x8;
                        case 0xe:
                            return _0x233290['r14'] | _0x233290['r15'] << 0x8;
                        case 0xf:
                            return _0x233290['r15'] | _0x233290['r0'] << 0x8;
                    }
                } ['get32BitRegister'](_0x1cf556, _0x46413c) {
                    switch (_0x46413c) {
                        case 0x0:
                            return _0x1cf556['r0'] | _0x1cf556['r1'] << 0x8 | _0x1cf556['r2'] << 0x10 | _0x1cf556['r3'] << 0x18;
                        case 0x4:
                            return _0x1cf556['r4'] | _0x1cf556['r5'] << 0x8 | _0x1cf556['r6'] << 0x10 | _0x1cf556['r7'] << 0x18;
                        case 0x8:
                            return _0x1cf556['r8'] | _0x1cf556['r9'] << 0x8 | _0x1cf556['r10'] << 0x10 | _0x1cf556['r11'] << 0x18;
                        case 0xc:
                            return _0x1cf556['r12'] | _0x1cf556['r13'] << 0x8 | _0x1cf556['r14'] << 0x10 | _0x1cf556['r15'] << 0x18;;
                    }
                } ['get64BitRegister'](_0x3c3a5, _0x3909ae) {
                    let _0x19cf7d, _0x455f98;
                    switch (_0x3909ae) {
                        case 0x0:
                            _0x19cf7d = _0x3c3a5['r0'] | _0x3c3a5['r1'] << 0x8 | _0x3c3a5['r2'] << 0x10 | _0x3c3a5['r3'] << 0x18, _0x455f98 = _0x3c3a5['r4'] | _0x3c3a5['r5'] << 0x8 | _0x3c3a5['r6'] << 0x10 | _0x3c3a5['r7'] << 0x18;
                            break;
                        case 0x8:
                            _0x19cf7d = _0x3c3a5['r8'] | _0x3c3a5['r9'] << 0x8 | _0x3c3a5['r10'] << 0x10 | _0x3c3a5['r11'] << 0x18, _0x455f98 = _0x3c3a5['r12'] | _0x3c3a5['r13'] << 0x8 | _0x3c3a5['r14'] << 0x10 | _0x3c3a5['r15'] << 0x18;
                            break;
                    }
                    return [_0x19cf7d, _0x455f98];
                } ['get16BitRegisterReverse'](_0x59bd84, _0x29f506) {
                    switch (_0x29f506) {
                        case 0x0:
                            return _0x59bd84['r15'] | _0x59bd84['r0'] << 0x8;
                        case 0x1:
                            return _0x59bd84['r0'] | _0x59bd84['r1'] << 0x8;
                        case 0x2:
                            return _0x59bd84['r1'] | _0x59bd84['r2'] << 0x8;
                        case 0x3:
                            return _0x59bd84['r2'] | _0x59bd84['r3'] << 0x8;
                        case 0x4:
                            return _0x59bd84['r3'] | _0x59bd84['r4'] << 0x8;
                        case 0x5:
                            return _0x59bd84['r4'] | _0x59bd84['r5'] << 0x8;
                        case 0x6:
                            return _0x59bd84['r5'] | _0x59bd84['r6'] << 0x8;
                        case 0x7:
                            return _0x59bd84['r6'] | _0x59bd84['r7'] << 0x8;
                        case 0x8:
                            return _0x59bd84['r7'] | _0x59bd84['r8'] << 0x8;
                        case 0x9:
                            return _0x59bd84['r8'] | _0x59bd84['r9'] << 0x8;
                        case 0xa:
                            return _0x59bd84['r9'] | _0x59bd84['r10'] << 0x8;
                        case 0xb:
                            return _0x59bd84['r10'] | _0x59bd84['r11'] << 0x8;
                        case 0xc:
                            return _0x59bd84['r11'] | _0x59bd84['r12'] << 0x8;
                        case 0xd:
                            return _0x59bd84['r12'] | _0x59bd84['r13'] << 0x8;
                        case 0xe:
                            return _0x59bd84['r13'] | _0x59bd84['r14'] << 0x8;
                        case 0xf:
                            return _0x59bd84['r14'] | _0x59bd84['r15'] << 0x8;
                    }
                } ['setOperationResult8bit'](_0x214771, _0x4c5382, _0x305b6e) {
                    switch (_0x4c5382) {
                        case 0x0:
                            _0x214771['r0'] = _0x305b6e;
                            break;
                        case 0x1:
                            _0x214771['r1'] = _0x305b6e;
                            break;
                        case 0x2:
                            _0x214771['r2'] = _0x305b6e;
                            break;
                        case 0x3:
                            _0x214771['r3'] = _0x305b6e;
                            break;
                        case 0x4:
                            _0x214771['r4'] = _0x305b6e;
                            break;
                        case 0x5:
                            _0x214771['r5'] = _0x305b6e;
                            break;
                        case 0x6:
                            _0x214771['r6'] = _0x305b6e;
                            break;
                        case 0x7:
                            _0x214771['r7'] = _0x305b6e;
                            break;
                        case 0x8:
                            _0x214771['r8'] = _0x305b6e;
                            break;
                        case 0x9:
                            _0x214771['r9'] = _0x305b6e;
                            break;
                        case 0xa:
                            _0x214771['r10'] = _0x305b6e;
                            break;
                        case 0xb:
                            _0x214771['r11'] = _0x305b6e;
                            break;
                        case 0xc:
                            _0x214771['r12'] = _0x305b6e;
                            break;
                        case 0xd:
                            _0x214771['r13'] = _0x305b6e;
                            break;
                        case 0xe:
                            _0x214771['r14'] = _0x305b6e;
                            break;
                        case 0xf:
                            _0x214771['r15'] = _0x305b6e;
                            break;
                    }
                } ['setOperationResult16bit'](_0x5e84a4, _0x10e011, _0x11ee4c) {
                    switch (_0x10e011) {
                        case 0x0:
                            _0x5e84a4['r0'] = _0x11ee4c & 0xff, _0x5e84a4['r1'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0x2:
                            _0x5e84a4['r2'] = _0x11ee4c & 0xff, _0x5e84a4['r3'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0x4:
                            _0x5e84a4['r4'] = _0x11ee4c & 0xff, _0x5e84a4['r5'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0x6:
                            _0x5e84a4['r6'] = _0x11ee4c & 0xff, _0x5e84a4['r7'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0x8:
                            _0x5e84a4['r8'] = _0x11ee4c & 0xff, _0x5e84a4['r9'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0xa:
                            _0x5e84a4['r10'] = _0x11ee4c & 0xff, _0x5e84a4['r11'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0xc:
                            _0x5e84a4['r12'] = _0x11ee4c & 0xff, _0x5e84a4['r13'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                        case 0xe:
                            _0x5e84a4['r14'] = _0x11ee4c & 0xff, _0x5e84a4['r15'] = _0x11ee4c >> 0x8 & 0xff;
                            break;
                    }
                } ['setOperationResult32bit'](_0x1a7996, _0xdbdbdb, _0x26653e) {
                    switch (_0xdbdbdb) {
                        case 0x0:
                            _0x1a7996['r0'] = _0x26653e & 0xff, _0x1a7996['r1'] = _0x26653e >> 0x8 & 0xff, _0x1a7996['r2'] = _0x26653e >> 0x10 & 0xff, _0x1a7996['r3'] = _0x26653e >> 0x18 & 0xff;
                            break;
                        case 0x4:
                            _0x1a7996['r4'] = _0x26653e & 0xff, _0x1a7996['r5'] = _0x26653e >> 0x8 & 0xff, _0x1a7996['r6'] = _0x26653e >> 0x10 & 0xff, _0x1a7996['r7'] = _0x26653e >> 0x18 & 0xff;
                            break;
                        case 0x8:
                            _0x1a7996['r8'] = _0x26653e & 0xff, _0x1a7996['r9'] = _0x26653e >> 0x8 & 0xff, _0x1a7996['r10'] = _0x26653e >> 0x10 & 0xff, _0x1a7996['r11'] = _0x26653e >> 0x18 & 0xff;
                            break;
                        case 0xc:
                            _0x1a7996['r12'] = _0x26653e & 0xff, _0x1a7996['r13'] = _0x26653e >> 0x8 & 0xff, _0x1a7996['r14'] = _0x26653e >> 0x10 & 0xff, _0x1a7996['r15'] = _0x26653e >> 0x18 & 0xff;
                            break;
                    }
                } ['setOperationResult64bit'](_0x382b71, _0x19a0e3, _0x4e57a3, _0x328ee2) {
                    switch (_0x19a0e3) {
                        case 0x0:
                            _0x382b71['r0'] = _0x4e57a3 & 0xff, _0x382b71['r1'] = _0x4e57a3 >> 0x8 & 0xff, _0x382b71['r2'] = _0x4e57a3 >> 0x10 & 0xff, _0x382b71['r3'] = _0x4e57a3 >> 0x18 & 0xff, _0x382b71['r4'] = _0x328ee2 & 0xff, _0x382b71['r5'] = _0x328ee2 >> 0x8 & 0xff, _0x382b71['r6'] = _0x328ee2 >> 0x10 & 0xff, _0x382b71['r7'] = _0x328ee2 >> 0x18 & 0xff;
                            break;
                        case 0x8:
                            _0x382b71['r8'] = _0x4e57a3 & 0xff, _0x382b71['r9'] = _0x4e57a3 >> 0x8 & 0xff, _0x382b71['r10'] = _0x4e57a3 >> 0x10 & 0xff, _0x382b71['r11'] = _0x4e57a3 >> 0x18 & 0xff, _0x382b71['r12'] = _0x328ee2 & 0xff, _0x382b71['r13'] = _0x328ee2 >> 0x8 & 0xff, _0x382b71['r14'] = _0x328ee2 >> 0x10 & 0xff, _0x382b71['r15'] = _0x328ee2 >> 0x18 & 0xff;
                            break;
                    }
                } ['setFlagsFor8bitAdd'](_0x297b3e, _0xc233e9, _0x28d9b6, _0x402468) {
                    let _0xc8f646 = _0x297b3e['psw'] & ~(_0x297b3e['NXU16_MASK_C_FLAG'] | _0x297b3e['NXU16_MASK_Z_FLAG'] | _0x297b3e['NXU16_MASK_S_FLAG'] | _0x297b3e['NXU16_MASK_OV_FLAG'] | _0x297b3e['NXU16_MASK_HC_FLAG']);
                    _0x402468 > 0xff && (_0xc8f646 |= _0x297b3e['NXU16_MASK_C_FLAG'], _0x402468 &= 0xff);
                    if (_0x402468 === 0x0) _0xc8f646 |= _0x297b3e['NXU16_MASK_Z_FLAG'];
                    else _0x402468 & 0x80 && (_0xc8f646 |= _0x297b3e['NXU16_MASK_S_FLAG']);
                    return (_0x402468 ^ _0xc233e9 ^ _0x28d9b6) & 0x10 && (_0xc8f646 |= _0x297b3e['NXU16_MASK_HC_FLAG']), !((_0xc233e9 ^ _0x28d9b6) & 0x80) && (_0x28d9b6 ^ _0x402468) & 0x80 && (_0xc8f646 |= _0x297b3e['NXU16_MASK_OV_FLAG']), _0x297b3e['psw'] = _0xc8f646, _0x402468;
                } ['setFlagsFor8bitAddc'](_0x44dbdb, _0xf8f756, _0x3c3d2a, _0x21597a, _0x333325) {
                    let _0x351740 = _0x44dbdb['psw'] & ~(_0x44dbdb['NXU16_MASK_C_FLAG'] | _0x44dbdb['NXU16_MASK_Z_FLAG'] | _0x44dbdb['NXU16_MASK_S_FLAG'] | _0x44dbdb['NXU16_MASK_OV_FLAG'] | _0x44dbdb['NXU16_MASK_HC_FLAG']);
                    _0x21597a > 0xff && (_0x351740 |= _0x44dbdb['NXU16_MASK_C_FLAG'], _0x21597a &= 0xff);
                    if (_0x333325 && _0x21597a === 0x0) _0x351740 |= _0x44dbdb['NXU16_MASK_Z_FLAG'];
                    else _0x21597a & 0x80 && (_0x351740 |= _0x44dbdb['NXU16_MASK_S_FLAG']);
                    return (_0x21597a ^ _0xf8f756 ^ _0x3c3d2a) & 0x10 && (_0x351740 |= _0x44dbdb['NXU16_MASK_HC_FLAG']), !((_0xf8f756 ^ _0x3c3d2a) & 0x80) && (_0x3c3d2a ^ _0x21597a) & 0x80 && (_0x351740 |= _0x44dbdb['NXU16_MASK_OV_FLAG']), _0x44dbdb['psw'] = _0x351740, _0x21597a;
                } ['setZeroAndSignFlags_8bit'](_0x4a47c7, _0x40f03d, _0xe398e5, _0x29cea9) {
                    let _0x5336cb = _0x4a47c7['psw'] & ~(_0x4a47c7['NXU16_MASK_Z_FLAG'] | _0x4a47c7['NXU16_MASK_S_FLAG']);
                    if (_0x29cea9 === 0x0) _0x5336cb |= _0x4a47c7['NXU16_MASK_Z_FLAG'];
                    else _0x29cea9 & 0x80 && (_0x5336cb |= _0x4a47c7['NXU16_MASK_S_FLAG']);
                    return _0x4a47c7['psw'] = _0x5336cb, _0x29cea9;
                } ['setFlagsFor8bitSub'](_0x4a956f, _0x503451, _0x1dfca0, _0x253e65) {
                    let _0x3aa6b9 = _0x4a956f['psw'] & ~(_0x4a956f['NXU16_MASK_C_FLAG'] | _0x4a956f['NXU16_MASK_Z_FLAG'] | _0x4a956f['NXU16_MASK_S_FLAG'] | _0x4a956f['NXU16_MASK_OV_FLAG'] | _0x4a956f['NXU16_MASK_HC_FLAG']);
                    _0x253e65 < 0x0 && (_0x3aa6b9 |= _0x4a956f['NXU16_MASK_C_FLAG'], _0x253e65 &= 0xff);
                    if (_0x253e65 === 0x0) _0x3aa6b9 |= _0x4a956f['NXU16_MASK_Z_FLAG'];
                    else _0x253e65 & 0x80 && (_0x3aa6b9 |= _0x4a956f['NXU16_MASK_S_FLAG']);
                    return (_0x503451 & 0xf) - (_0x1dfca0 & 0xf) & ~0xf && (_0x3aa6b9 |= _0x4a956f['NXU16_MASK_HC_FLAG']), (_0x503451 ^ _0x1dfca0) & 0x80 && ((_0x1dfca0 ^ _0x253e65) & 0x80) === 0x0 && (_0x3aa6b9 |= _0x4a956f['NXU16_MASK_OV_FLAG']), _0x4a956f['psw'] = _0x3aa6b9, _0x253e65;
                } ['setFlagsFor8bitSubc'](_0x53a91a, _0x24eb8b, _0x10b6a3, _0xb10d2, _0x170534) {
                    let _0x38082a = _0x53a91a['psw'] & ~(_0x53a91a['NXU16_MASK_C_FLAG'] | _0x53a91a['NXU16_MASK_Z_FLAG'] | _0x53a91a['NXU16_MASK_S_FLAG'] | _0x53a91a['NXU16_MASK_OV_FLAG'] | _0x53a91a['NXU16_MASK_HC_FLAG']);
                    _0xb10d2 < 0x0 && (_0x38082a |= _0x53a91a['NXU16_MASK_C_FLAG'], _0xb10d2 &= 0xff);
                    if (_0x170534 && _0xb10d2 === 0x0) _0x38082a |= _0x53a91a['NXU16_MASK_Z_FLAG'];
                    else _0xb10d2 & 0x80 && (_0x38082a |= _0x53a91a['NXU16_MASK_S_FLAG']);
                    return (_0x24eb8b & 0xf) - (_0x10b6a3 & 0xf) & ~0xf && (_0x38082a |= _0x53a91a['NXU16_MASK_HC_FLAG']), (_0x24eb8b ^ _0x10b6a3) & 0x80 && ((_0x10b6a3 ^ _0xb10d2) & 0x80) === 0x0 && (_0x38082a |= _0x53a91a['NXU16_MASK_OV_FLAG']), _0x53a91a['psw'] = _0x38082a, _0xb10d2;
                } ['setFlagsFor16bitAdd'](_0x6d67bd, _0x5a900c, _0x3adea6, _0x5d9303) {
                    let _0x16465a = _0x6d67bd['psw'] & ~(_0x6d67bd['NXU16_MASK_C_FLAG'] | _0x6d67bd['NXU16_MASK_Z_FLAG'] | _0x6d67bd['NXU16_MASK_S_FLAG'] | _0x6d67bd['NXU16_MASK_OV_FLAG'] | _0x6d67bd['NXU16_MASK_HC_FLAG']);
                    _0x5d9303 > 0xffff && (_0x16465a |= _0x6d67bd['NXU16_MASK_C_FLAG'], _0x5d9303 &= 0xffff);
                    if (_0x5d9303 === 0x0) _0x16465a |= _0x6d67bd['NXU16_MASK_Z_FLAG'];
                    else _0x5d9303 & 0x8000 && (_0x16465a |= _0x6d67bd['NXU16_MASK_S_FLAG']);
                    return (_0x3adea6 & 0xfff) + (_0x5a900c & 0xfff) > 0xfff && (_0x16465a |= _0x6d67bd['NXU16_MASK_HC_FLAG']), ((_0x5a900c ^ _0x3adea6) & 0x8000) === 0x0 && (((_0x3adea6 ^ _0x5d9303) & 0x8000) !== 0x0 && (_0x16465a |= _0x6d67bd['NXU16_MASK_OV_FLAG'])), _0x6d67bd['psw'] = _0x16465a, _0x5d9303;
                } ['setFlagsFor8bitInc'](_0x3150ba, _0x3290cf, _0x3a1ccc, _0x3a44dd) {
                    let _0x253e09 = _0x3150ba['psw'] & ~(_0x3150ba['NXU16_MASK_Z_FLAG'] | _0x3150ba['NXU16_MASK_S_FLAG'] | _0x3150ba['NXU16_MASK_OV_FLAG'] | _0x3150ba['NXU16_MASK_HC_FLAG']);
                    if (_0x3a44dd === 0x0) _0x253e09 |= _0x3150ba['NXU16_MASK_Z_FLAG'];
                    else _0x3a44dd & 0x80 && (_0x253e09 |= _0x3150ba['NXU16_MASK_S_FLAG']);
                    return (_0x3a1ccc & 0xf) + (_0x3290cf & 0xf) > 0xf && (_0x253e09 |= _0x3150ba['NXU16_MASK_HC_FLAG']), ((_0x3290cf ^ _0x3a1ccc) & 0x80) === 0x0 && (((_0x3a1ccc ^ _0x3a44dd) & 0x80) !== 0x0 && (_0x253e09 |= _0x3150ba['NXU16_MASK_OV_FLAG'])), _0x3150ba['psw'] = _0x253e09, _0x3a44dd;
                } ['setFlagsFor16bitSub'](_0x2036d9, _0x15b78b, _0x5e5183, _0x44d9a7) {
                    let _0x41fca8 = _0x2036d9['psw'] & ~(_0x2036d9['NXU16_MASK_C_FLAG'] | _0x2036d9['NXU16_MASK_Z_FLAG'] | _0x2036d9['NXU16_MASK_S_FLAG'] | _0x2036d9['NXU16_MASK_OV_FLAG'] | _0x2036d9['NXU16_MASK_HC_FLAG']);
                    _0x5e5183 > _0x15b78b && (_0x41fca8 |= _0x2036d9['NXU16_MASK_C_FLAG']);
                    _0x44d9a7 &= 0xffff;
                    if (_0x44d9a7 === 0x0) _0x41fca8 |= _0x2036d9['NXU16_MASK_Z_FLAG'];
                    else _0x44d9a7 & 0x8000 && (_0x41fca8 |= _0x2036d9['NXU16_MASK_S_FLAG']);
                    return (_0x15b78b & 0xfff) - (_0x5e5183 & 0xfff) & ~0xfff && (_0x41fca8 |= _0x2036d9['NXU16_MASK_HC_FLAG']), (_0x15b78b ^ _0x5e5183) & 0x8000 && ((_0x5e5183 ^ _0x44d9a7) & 0x8000) === 0x0 && (_0x41fca8 |= _0x2036d9['NXU16_MASK_OV_FLAG']), _0x2036d9['psw'] = _0x41fca8, _0x44d9a7;
                } ['setFlagsFor8bitDec'](_0x331dc6, _0x510198, _0x3b0714, _0x25ff89) {
                    let _0x249084 = _0x331dc6['psw'] & ~(_0x331dc6['NXU16_MASK_Z_FLAG'] | _0x331dc6['NXU16_MASK_S_FLAG'] | _0x331dc6['NXU16_MASK_OV_FLAG'] | _0x331dc6['NXU16_MASK_HC_FLAG']);
                    _0x25ff89 &= 0xff;
                    if (_0x25ff89 === 0x0) _0x249084 |= _0x331dc6['NXU16_MASK_Z_FLAG'];
                    else _0x25ff89 & 0x80 && (_0x249084 |= _0x331dc6['NXU16_MASK_S_FLAG']);
                    return (_0x510198 & 0xf) - (_0x3b0714 & 0xf) & ~0xf && (_0x249084 |= _0x331dc6['NXU16_MASK_HC_FLAG']), (_0x510198 ^ _0x3b0714) & 0x80 && ((_0x3b0714 ^ _0x25ff89) & 0x80) === 0x0 && (_0x249084 |= _0x331dc6['NXU16_MASK_OV_FLAG']), _0x331dc6['psw'] = _0x249084, _0x25ff89;
                } ['setZeroAndSignFlags_16bit'](_0x334c2f, _0x201244, _0xcc4651, _0x5d36f0) {
                    let _0x2b9b98 = _0x334c2f['psw'] & ~(_0x334c2f['NXU16_MASK_Z_FLAG'] | _0x334c2f['NXU16_MASK_S_FLAG']);
                    if (_0x5d36f0 === 0x0) _0x2b9b98 |= _0x334c2f['NXU16_MASK_Z_FLAG'];
                    else _0x5d36f0 & 0x8000 && (_0x2b9b98 |= _0x334c2f['NXU16_MASK_S_FLAG']);
                    return _0x334c2f['psw'] = _0x2b9b98, _0x5d36f0 & 0xffff;
                } ['setZeroAndSignFlags_32bit'](_0x1dfa93, _0x5af159, _0x5c5f3b, _0x89f0e2) {
                    let _0x39b77f = _0x1dfa93['psw'] & ~(_0x1dfa93['NXU16_MASK_Z_FLAG'] | _0x1dfa93['NXU16_MASK_S_FLAG']);
                    if (_0x89f0e2 === 0x0) _0x39b77f |= _0x1dfa93['NXU16_MASK_Z_FLAG'];
                    else _0x89f0e2 & 0x80000000 && (_0x39b77f |= _0x1dfa93['NXU16_MASK_S_FLAG']);
                    return _0x1dfa93['psw'] = _0x39b77f, _0x89f0e2 & 0xffffffff;
                } ['setZeroAndSignFlags_64bit'](_0x45d628, _0x1a036a, _0x13905e, _0x29f566) {
                    let _0x3afae5 = _0x45d628['psw'] & ~(_0x45d628['NXU16_MASK_Z_FLAG'] | _0x45d628['NXU16_MASK_S_FLAG']);
                    if (_0x1a036a === 0x0 && _0x13905e === 0x0) _0x3afae5 |= _0x45d628['NXU16_MASK_Z_FLAG'];
                    else _0x13905e & 0x80000000 && (_0x3afae5 |= _0x45d628['NXU16_MASK_S_FLAG']);
                    _0x45d628['psw'] = _0x3afae5;
                } ['callScreenChanged'](_0xcf6ab, _0x34d97e) {
                    if (_0xcf6ab['parent'] !== null) {
                        let _0x2f63b7 = this['dataMemory']['getSubArray'](_0x34d97e, _0x34d97e + 0x600);
                        _0xcf6ab['parent']['notifyScreenListeners'](_0x2f63b7);
                    }
                } ['callTopIconsChanged'](_0x28b347, _0x1813ad) {
                    if (_0x28b347['parent'] !== null) {
                        let _0x2b27d8 = this['dataMemory']['get32'](0x0, _0x1813ad);
                        this['is2ndMode'] = (_0x2b27d8 & 0x2) !== 0x0, _0x28b347['parent']['notifyTopIconScreenListeners'](_0x2b27d8);
                    }
                } ['add_Rn_Rm'](_0x104d55, _0x489723) {
                    let _0x46a9f9, _0x51f9d4 = _0x104d55['get8BitRegister'](_0x104d55, _0x489723 >> 0x8 & 0xf),
                        _0x36ef5c = _0x104d55['get8BitRegister'](_0x104d55, _0x489723 >> 0x4 & 0xf);;
                    _0x46a9f9 = _0x51f9d4 + _0x36ef5c, _0x46a9f9 = _0x104d55['setFlagsFor8bitAdd'](_0x104d55, _0x51f9d4, _0x36ef5c, _0x46a9f9), _0x104d55['setOperationResult8bit'](_0x104d55, _0x489723 >> 0x8 & 0xf, _0x46a9f9);
                } ['addc_Rn_Rm'](_0x31ed26, _0x5aea94) {
                    let _0x514010, _0x10885d = (_0x31ed26['psw'] & _0x31ed26['NXU16_MASK_Z_FLAG']) !== 0x0,
                        _0x186071, _0x54d935 = _0x31ed26['get8BitRegister'](_0x31ed26, _0x5aea94 >> 0x8 & 0xf);
                    (_0x5aea94 & 0xf000) === 0x6000 ? _0x186071 = _0x5aea94 & 0xff : _0x186071 = _0x31ed26['get8BitRegister'](_0x31ed26, _0x5aea94 >> 0x4 & 0xf), (_0x31ed26['psw'] & _0x31ed26['NXU16_MASK_C_FLAG']) !== 0x0 ? _0x514010 = _0x54d935 + _0x186071 + 0x1 : _0x514010 = _0x54d935 + _0x186071, _0x514010 = _0x31ed26['setFlagsFor8bitAddc'](_0x31ed26, _0x54d935, _0x186071, _0x514010, _0x10885d), _0x31ed26['setOperationResult8bit'](_0x31ed26, _0x5aea94 >> 0x8 & 0xf, _0x514010);
                } ['add_Rn_Imm8'](_0x17bef, _0x119af4) {
                    let _0x7d7fcd = _0x17bef['get8BitRegister'](_0x17bef, _0x119af4 >> 0x8 & 0xf);;
                    let _0x818aad = _0x119af4 & 0xff,
                        _0x5ad35d;
                    (_0x119af4 & 0x6000) !== 0x0 && (_0x17bef['psw'] & _0x17bef['NXU16_MASK_C_FLAG']) !== 0x0 ? _0x5ad35d = _0x7d7fcd + _0x818aad + 0x1 : _0x5ad35d = _0x7d7fcd + _0x818aad, _0x5ad35d = _0x17bef['setFlagsFor8bitAdd'](_0x17bef, _0x7d7fcd, _0x818aad, _0x5ad35d), _0x17bef['setOperationResult8bit'](_0x17bef, _0x119af4 >> 0x8 & 0xf, _0x5ad35d);
                } ['add_ERn_ERm'](_0x366d6b, _0x5624dc) {
                    let _0x492634 = _0x366d6b['get16BitRegister'](_0x366d6b, _0x5624dc >> 0x8 & 0xf),
                        _0x594202 = _0x366d6b['get16BitRegister'](_0x366d6b, _0x5624dc >> 0x4 & 0xf);;
                    let _0x44ac3c = _0x492634 + _0x594202;
                    _0x44ac3c = _0x366d6b['setFlagsFor16bitAdd'](_0x366d6b, _0x492634, _0x594202, _0x44ac3c), _0x366d6b['setOperationResult16bit'](_0x366d6b, _0x5624dc >> 0x8 & 0xf, _0x44ac3c);
                } ['add_ERn_imm7'](_0x56c357, _0x864030) {
                    let _0x4a169a = _0x56c357['get16BitRegister'](_0x56c357, _0x864030 >> 0x8 & 0xe),
                        _0x1f9e7e = _0x864030 & 0x7f;
                    (_0x1f9e7e & 0x1 << 0x6) === 0x0 ? _0x1f9e7e &= 0x3f : _0x1f9e7e |= 0xffc0;
                    let _0x195df1 = _0x4a169a + _0x1f9e7e;
                    _0x195df1 = _0x56c357['setFlagsFor16bitAdd'](_0x56c357, _0x4a169a, _0x1f9e7e, _0x195df1), _0x56c357['setOperationResult16bit'](_0x56c357, _0x864030 >> 0x8 & 0xf, _0x195df1);
                } ['and_Rn_Rm'](_0x301bde, _0xf50729) {
                    let _0x302054 = _0x301bde['get8BitRegister'](_0x301bde, _0xf50729 >> 0x8 & 0xf),
                        _0x247b96 = _0x301bde['get8BitRegister'](_0x301bde, _0xf50729 >> 0x4 & 0xf),
                        _0x25c1d9 = _0x302054 & _0x247b96;
                    _0x25c1d9 = _0x301bde['setZeroAndSignFlags_8bit'](_0x301bde, _0x302054, _0x247b96, _0x25c1d9), _0x301bde['setOperationResult8bit'](_0x301bde, _0xf50729 >> 0x8 & 0xf, _0x25c1d9);
                } ['and_Rn_imm8'](_0x29073b, _0x36dd84) {
                    let _0x4412a2, _0x59bcd9 = _0x29073b['get8BitRegister'](_0x29073b, _0x36dd84 >> 0x8 & 0xf),
                        _0x3775ad = _0x36dd84 & 0xff;
                    _0x4412a2 = _0x59bcd9 & _0x3775ad, _0x4412a2 = _0x29073b['setZeroAndSignFlags_8bit'](_0x29073b, _0x59bcd9, _0x3775ad, _0x4412a2), _0x29073b['setOperationResult8bit'](_0x29073b, _0x36dd84 >> 0x8 & 0xf, _0x4412a2);
                } ['sub_Rn_Rm'](_0x4a9385, _0x216cfc) {
                    let _0x23cc7d, _0x4d2887, _0x47d2e9 = _0x216cfc & 0xf00f,
                        _0x5a3076, _0x22ffa2;
                    (_0x47d2e9 & 0xf000) === 0x7000 ? (_0x5a3076 = _0x4a9385['get8BitRegister'](_0x4a9385, _0x216cfc >> 0x8 & 0xf), _0x22ffa2 = _0x216cfc & 0xff) : (_0x5a3076 = _0x4a9385['get8BitRegister'](_0x4a9385, _0x216cfc >> 0x8 & 0xf), _0x22ffa2 = _0x4a9385['get8BitRegister'](_0x4a9385, _0x216cfc >> 0x4 & 0xf)), _0x23cc7d = _0x5a3076 - _0x22ffa2, _0x23cc7d = _0x4a9385['setFlagsFor8bitSub'](_0x4a9385, _0x5a3076, _0x22ffa2, _0x23cc7d), _0x47d2e9 === 0x8008 && _0x4a9385['setOperationResult8bit'](_0x4a9385, _0x216cfc >> 0x8 & 0xf, _0x23cc7d);
                } ['subc_Rn_Rm'](_0x58be79, _0x50098a) {
                    let _0x117ec5, _0x21f462, _0x1b5be2 = _0x50098a & 0xf00f,
                        _0x21c86e, _0x52a83e, _0x386a9f = (_0x58be79['psw'] & _0x58be79['NXU16_MASK_C_FLAG']) !== 0x0,
                        _0x110bac = (_0x58be79['psw'] & _0x58be79['NXU16_MASK_Z_FLAG']) !== 0x0;
                    (_0x1b5be2 & 0xf000) === 0x5000 || (_0x1b5be2 & 0xf000) === 0x7000 ? (_0x21c86e = _0x58be79['get8BitRegister'](_0x58be79, _0x50098a >> 0x8 & 0xf), _0x52a83e = _0x50098a & 0xff) : (_0x21c86e = _0x58be79['get8BitRegister'](_0x58be79, _0x50098a >> 0x8 & 0xf), _0x52a83e = _0x58be79['get8BitRegister'](_0x58be79, _0x50098a >> 0x4 & 0xf)), _0x117ec5 = _0x21c86e - _0x52a83e - (_0x386a9f ? 0x1 : 0x0), _0x117ec5 = _0x58be79['setFlagsFor8bitSubc'](_0x58be79, _0x21c86e, _0x52a83e, _0x117ec5, _0x110bac), _0x1b5be2 === 0x8009 && _0x58be79['setOperationResult8bit'](_0x58be79, _0x50098a >> 0x8 & 0xf, _0x117ec5);
                } ['mov_Rn_Rm'](_0x31d32c, _0x35adbc) {
                    let _0x2bac08, _0xe44ba3, _0x51f5d1 = _0x35adbc & 0xf00f,
                        _0x3de87b, _0x1fc284;
                    if (_0x51f5d1 >> 0xc === 0x0) _0x3de87b = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x8 & 0xf), _0x1fc284 = _0x35adbc & 0xff;
                    else {
                        if (_0x51f5d1 === 0xa00f) _0x3de87b = _0x31d32c['getECSRForELevel'](_0x31d32c), _0x1fc284 = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x4 & 0xf);
                        else {
                            if (_0x51f5d1 === 0xa00d) _0x3de87b = _0x31d32c['getELRForELevel'](_0x31d32c), _0x1fc284 = _0x31d32c['get16BitRegister'](_0x31d32c, _0x35adbc >> 0x8 & 0xf);
                            else {
                                if (_0x51f5d1 === 0xa00c) _0x1fc284 = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x4 & 0xf);
                                else {
                                    if (_0x51f5d1 === 0xa005) _0x3de87b = _0x31d32c['get16BitRegister'](_0x31d32c, _0x35adbc >> 0x8 & 0xf), _0x1fc284 = _0x31d32c['getELRForELevel'](_0x31d32c);
                                    else {
                                        if (_0x51f5d1 === 0xa00b) _0x1fc284 = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x4 & 0xf);
                                        else {
                                            if (_0x51f5d1 === 0xa007) _0x1fc284 = _0x31d32c['getECSRForELevel'](_0x31d32c);
                                            else {
                                                if (_0x51f5d1 === 0xa004) _0x1fc284 = _0x31d32c['getEPSWForELevel'](_0x31d32c);
                                                else {
                                                    if (_0x51f5d1 === 0xa003) _0x1fc284 = _0x31d32c['psw'];
                                                    else {
                                                        if ((_0x35adbc & 0xf0ff) === 0xa01a) _0x1fc284 = _0x31d32c['sp'];
                                                        else {
                                                            if ((_0x35adbc & 0xff00) === 0xe900) _0x1fc284 = _0x35adbc & 0xff;
                                                            else(_0x35adbc & 0xff0f) === 0xa10a ? _0x1fc284 = _0x31d32c['get16BitRegister'](_0x31d32c, _0x35adbc >> 0x4 & 0xf) : (_0x3de87b = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x8 & 0xf), _0x1fc284 = _0x31d32c['get8BitRegister'](_0x31d32c, _0x35adbc >> 0x4 & 0xf));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _0x2bac08 = _0x1fc284;
                    if (_0x51f5d1 === 0xa00f) _0x2bac08 &= 0xf, _0x31d32c['setECSRForELevel'](_0x31d32c, _0x2bac08);
                    else {
                        if (_0x51f5d1 === 0xa00d) _0x31d32c['setELRForELevel'](_0x31d32c, _0x2bac08);
                        else {
                            if (_0x51f5d1 === 0xa00c) _0x31d32c['setEPSWForELevel'](_0x31d32c, _0x2bac08);
                            else {
                                if (_0x51f5d1 === 0xa00b || (_0x35adbc & 0xff00) === 0xe900) _0x31d32c['psw'] = _0x2bac08;
                                else {
                                    if ((_0x35adbc & 0xf0ff) === 0xa01a || _0x51f5d1 === 0xa005) _0x31d32c['setOperationResult16bit'](_0x31d32c, _0x35adbc >> 0x8 & 0xf, _0x2bac08);
                                    else {
                                        if (_0x51f5d1 === 0xa003 || _0x51f5d1 === 0xa007 || _0x51f5d1 === 0xa004) _0x31d32c['setOperationResult8bit'](_0x31d32c, _0x35adbc >> 0x8 & 0xf, _0x2bac08);
                                        else(_0x35adbc & 0xff0f) === 0xa10a ? _0x31d32c['sp'] = _0x2bac08 & 0xfffe : (_0x2bac08 = _0x31d32c['setZeroAndSignFlags_8bit'](_0x31d32c, _0x3de87b, _0x1fc284, _0x2bac08), _0x31d32c['setOperationResult8bit'](_0x31d32c, _0x35adbc >> 0x8 & 0xf, _0x2bac08));
                                    }
                                }
                            }
                        }
                    }
                } ['mov_ERn_ERm'](_0x18af0d, _0x5d0841) {
                    let _0x1bbbf2, _0x47c977;
                    (_0x5d0841 & 0xf00f) === 0xf005 ? (_0x1bbbf2 = _0x18af0d['get16BitRegister'](_0x18af0d, _0x5d0841 >> 0x8 & 0xf), _0x47c977 = _0x18af0d['get16BitRegister'](_0x18af0d, _0x5d0841 >> 0x4 & 0xf)) : (_0x1bbbf2 = _0x18af0d['get16BitRegister'](_0x18af0d, _0x5d0841 >> 0x8 & 0xe), _0x47c977 = _0x5d0841 & 0x7f);
                    (_0x5d0841 & 0xf000) === 0xe000 && (_0x47c977 & 0x40) !== 0x0 && (_0x47c977 |= 0xff80);
                    let _0x2a1e26 = _0x1bbbf2 = _0x47c977;
                    _0x2a1e26 = _0x18af0d['setZeroAndSignFlags_16bit'](_0x18af0d, _0x1bbbf2, _0x47c977, _0x2a1e26), _0x18af0d['setOperationResult16bit'](_0x18af0d, _0x5d0841 >> 0x8 & 0xf, _0x2a1e26);
                } ['or_Rn_Rm'](_0x1e83d1, _0x18d2d1) {
                    let _0x1ee6dc, _0x124c83, _0x383aa;
                    (_0x18d2d1 & 0xf00f) === 0x8003 ? (_0x1ee6dc = _0x1e83d1['get8BitRegister'](_0x1e83d1, _0x18d2d1 >> 0x8 & 0xf), _0x124c83 = _0x1e83d1['get8BitRegister'](_0x1e83d1, _0x18d2d1 >> 0x4 & 0xf)) : (_0x1ee6dc = _0x1e83d1['get8BitRegister'](_0x1e83d1, _0x18d2d1 >> 0x8 & 0xf), _0x124c83 = _0x18d2d1 & 0xff), _0x383aa = _0x1ee6dc | _0x124c83, _0x383aa = _0x1e83d1['setZeroAndSignFlags_8bit'](_0x1e83d1, _0x1ee6dc, _0x124c83, _0x383aa), _0x1e83d1['setOperationResult8bit'](_0x1e83d1, _0x18d2d1 >> 0x8 & 0xf, _0x383aa);
                } ['xor_Rn_Rm'](_0x208cf3, _0x26b151) {
                    let _0x273490, _0x10c242, _0xbb6be1;
                    (_0x26b151 & 0xf00f) === 0x8004 ? (_0x273490 = _0x208cf3['get8BitRegister'](_0x208cf3, _0x26b151 >> 0x8 & 0xf), _0x10c242 = _0x208cf3['get8BitRegister'](_0x208cf3, _0x26b151 >> 0x4 & 0xf)) : (_0x273490 = _0x208cf3['get8BitRegister'](_0x208cf3, _0x26b151 >> 0x8 & 0xf), _0x10c242 = _0x26b151 & 0xff), _0xbb6be1 = _0x273490 ^ _0x10c242, _0xbb6be1 = _0x208cf3['setZeroAndSignFlags_8bit'](_0x208cf3, _0x273490, _0x10c242, _0xbb6be1), _0x208cf3['setOperationResult8bit'](_0x208cf3, _0x26b151 >> 0x8 & 0xf, _0xbb6be1);
                } ['sub_ERn_ERm'](_0xb8892a, _0xba763c) {
                    let _0xe2614e = _0xb8892a['get16BitRegister'](_0xb8892a, _0xba763c >> 0x8 & 0xf),
                        _0x2551cc = _0xb8892a['get16BitRegister'](_0xb8892a, _0xba763c >> 0x4 & 0xf),
                        _0x28f24c = _0xe2614e - _0x2551cc;
                    _0x28f24c = _0xb8892a['setFlagsFor16bitSub'](_0xb8892a, _0xe2614e, _0x2551cc, _0x28f24c);
                } ['sll_Rn_Rm'](_0x86e50c, _0x539557) {
                    let _0x5d9a4d, _0x5abaaa, _0x2fcfe6;
                    (_0x539557 & 0xf00f) === 0x800a ? (_0x5d9a4d = _0x86e50c['get8BitRegister'](_0x86e50c, _0x539557 >> 0x8 & 0xf), _0x5abaaa = _0x86e50c['get8BitRegister'](_0x86e50c, _0x539557 >> 0x4 & 0xf) & 0x7) : (_0x5d9a4d = _0x86e50c['get8BitRegister'](_0x86e50c, _0x539557 >> 0x8 & 0xf), _0x5abaaa = _0x539557 >> 0x4 & 0x7), _0x2fcfe6 = _0x5d9a4d << _0x5abaaa, _0x5abaaa > 0x0 && ((_0x2fcfe6 & 0x100) !== 0x0 ? _0x86e50c['psw'] |= _0x86e50c['NXU16_MASK_C_FLAG'] : _0x86e50c['psw'] &= ~_0x86e50c['NXU16_MASK_C_FLAG']), _0x2fcfe6 &= 0xff, _0x86e50c['setOperationResult8bit'](_0x86e50c, _0x539557 >> 0x8 & 0xf, _0x2fcfe6);
                } ['sllc_Rn_Rm'](_0x248e6c, _0xf0252c) {
                    let _0x78f75b, _0x3e2491, _0x1ecbae;
                    (_0xf0252c & 0xf00f) === 0x800b ? (_0x78f75b = _0x248e6c['get16BitRegisterReverse'](_0x248e6c, _0xf0252c >> 0x8 & 0xf), _0x3e2491 = _0x248e6c['get8BitRegister'](_0x248e6c, _0xf0252c >> 0x4 & 0xf) & 0x7) : (_0x78f75b = _0x248e6c['get16BitRegisterReverse'](_0x248e6c, _0xf0252c >> 0x8 & 0xf), _0x3e2491 = _0xf0252c >> 0x4 & 0x7), _0x1ecbae = _0x78f75b << _0x3e2491, _0x3e2491 > 0x0 && ((_0x1ecbae & 0x10000) !== 0x0 ? _0x248e6c['psw'] |= _0x248e6c['NXU16_MASK_C_FLAG'] : _0x248e6c['psw'] &= ~_0x248e6c['NXU16_MASK_C_FLAG']), _0x1ecbae = (_0x1ecbae & 0xff00) >> 0x8, _0x248e6c['setOperationResult8bit'](_0x248e6c, _0xf0252c >> 0x8 & 0xf, _0x1ecbae);
                } ['sra_Rn_Rm'](_0x3abb89, _0x497b64) {
                    let _0x270404, _0x20e581, _0x44df74, _0x34b7f8;
                    (_0x497b64 & 0xf00f) === 0x800e ? (_0x270404 = _0x3abb89['get8BitRegister'](_0x3abb89, _0x497b64 >> 0x8 & 0xf), _0x20e581 = _0x3abb89['get8BitRegister'](_0x3abb89, _0x497b64 >> 0x4 & 0xf) & 0x7) : (_0x270404 = _0x3abb89['get8BitRegister'](_0x3abb89, _0x497b64 >> 0x8 & 0xf), _0x20e581 = _0x497b64 >> 0x4 & 0x7);
                    _0x44df74 = _0x270404 & 0x80;
                    for (let _0xce9eba = 0x0; _0xce9eba < _0x20e581; _0xce9eba++) {
                        _0x44df74 |= _0x44df74 >> 0x1;
                    }
                    _0x34b7f8 = _0x270404 >> _0x20e581, _0x34b7f8 |= _0x44df74, _0x20e581 > 0x0 && (_0x20e581 = _0x20e581 - 0x1, _0x3abb89['setC'](_0x3abb89, ![]), _0x3abb89['psw'] |= (_0x270404 >> _0x20e581 & 0x1) << 0x7), _0x34b7f8 &= 0xff, _0x3abb89['setOperationResult8bit'](_0x3abb89, _0x497b64 >> 0x8 & 0xf, _0x34b7f8);
                } ['srl_Rn_Rm'](_0x434f09, _0x364b42) {
                    let _0x3929ae, _0x518214, _0x42cce9;
                    (_0x364b42 & 0xf00f) === 0x800c ? (_0x3929ae = _0x434f09['get8BitRegister'](_0x434f09, _0x364b42 >> 0x8 & 0xf), _0x518214 = _0x434f09['get8BitRegister'](_0x434f09, _0x364b42 >> 0x4 & 0xf) & 0x7) : (_0x3929ae = _0x434f09['get8BitRegister'](_0x434f09, _0x364b42 >> 0x8 & 0xf), _0x518214 = _0x364b42 >> 0x4 & 0x7), _0x42cce9 = _0x3929ae >> _0x518214, _0x518214 > 0x0 && (_0x518214 = _0x518214 - 0x1, _0x3929ae >> _0x518214 & 0x1 ? _0x434f09['setC'](_0x434f09, !![]) : _0x434f09['setC'](_0x434f09, ![])), _0x42cce9 &= 0xff, _0x434f09['setOperationResult8bit'](_0x434f09, _0x364b42 >> 0x8 & 0xf, _0x42cce9);
                } ['srlc_Rn_Rm'](_0x50afdb, _0x29b06a) {
                    let _0x384532, _0xc1f8e, _0xb5029b;
                    (_0x29b06a & 0xf00f) === 0x800d ? (_0x384532 = _0x50afdb['get16BitRegister'](_0x50afdb, _0x29b06a >> 0x8 & 0xf), _0xc1f8e = _0x50afdb['get8BitRegister'](_0x50afdb, _0x29b06a >> 0x4 & 0xf) & 0x7) : (_0x384532 = _0x50afdb['get16BitRegister'](_0x50afdb, _0x29b06a >> 0x8 & 0xf), _0xc1f8e = _0x29b06a >> 0x4 & 0x7), _0xb5029b = _0x384532 >> _0xc1f8e, _0xc1f8e > 0x0 && (_0xc1f8e = _0xc1f8e - 0x1, _0x384532 >> _0xc1f8e & 0x1 ? _0x50afdb['setC'](_0x50afdb, !![]) : _0x50afdb['setC'](_0x50afdb, ![])), _0xb5029b &= 0xff, _0x50afdb['setOperationResult8bit'](_0x50afdb, _0x29b06a >> 0x8 & 0xf, _0xb5029b);
                } ['l_ERn_obj'](_0x5752cd, _0x5b98e9) {
                    let _0x4fb1fc, _0xf58de3, _0x439d06, _0x5f24a6 = _0x5b98e9 & 0xf0ff,
                        _0x568d7f;
                    if (_0x5f24a6 === 0x9032) _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x5752cd['ea'] & 0xfffe);
                    else {
                        if (_0x5f24a6 === 0x9052) _0x5752cd['ea'] &= 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x5752cd['ea']), _0x439d06 = 0x2;
                        else {
                            if (_0x5f24a6 === 0x9012) _0x4fb1fc = _0x5752cd['codeMemory']['get16'](_0x5752cd['pc']), _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x4fb1fc & 0xffff), _0x5752cd['pc'] += 0x2;
                            else {
                                if ((_0x5b98e9 & 0xf00f) === 0x9002) {
                                    let _0x37f055 = _0x5752cd['get16BitRegister'](_0x5752cd, _0x5b98e9 >> 0x4 & 0xf);
                                    _0x37f055 &= 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x37f055);
                                } else {
                                    if (_0x5f24a6 === 0x9030 || _0x5f24a6 === 0x9050) _0xf58de3 = _0x5752cd['dataMemory']['get8'](_0x5752cd['dsr'], _0x5752cd['ea']), _0x439d06 = 0x1;
                                    else {
                                        if (_0x5f24a6 === 0x9010) _0x4fb1fc = _0x5752cd['codeMemory']['get16'](_0x5752cd['pc']), _0xf58de3 = _0x5752cd['dataMemory']['get8'](_0x5752cd['dsr'], _0x4fb1fc), _0x5752cd['pc'] += 0x2;
                                        else {
                                            if ((_0x5b98e9 & 0xf00f) === 0x9000) {
                                                let _0x12178e = _0x5752cd['get16BitRegister'](_0x5752cd, _0x5b98e9 >> 0x4 & 0xf);
                                                _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x12178e);
                                            } else {
                                                if (_0x5f24a6 === 0x9034) _0xf58de3 = _0x5752cd['dataMemory']['get32'](_0x5752cd['dsr'], _0x5752cd['ea'] & 0xfffe), _0x439d06 = 0x4;
                                                else {
                                                    if (_0x5f24a6 === 0x9054) _0x5752cd['ea'] &= 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get32'](_0x5752cd['dsr'], _0x5752cd['ea']), _0x439d06 = 0x4;
                                                    else {
                                                        if (_0x5f24a6 === 0x9036) {
                                                            let _0x4bbb7f = _0x5752cd['dataMemory']['get64'](_0x5752cd['dsr'], _0x5752cd['ea'] & 0xfffe);
                                                            _0x4fb1fc = _0x4bbb7f[0x0], _0xf58de3 = _0x4bbb7f[0x1], _0x439d06 = 0x8;
                                                        } else {
                                                            if (_0x5f24a6 === 0x9056) {
                                                                _0x5752cd['ea'] &= 0xfffe;
                                                                let _0x4b763e = _0x5752cd['dataMemory']['get64'](_0x5752cd['dsr'], _0x5752cd['ea']);
                                                                _0x4fb1fc = _0x4b763e[0x0], _0xf58de3 = _0x4b763e[0x1], _0x439d06 = 0x8;
                                                            } else {
                                                                if ((_0x5b98e9 & 0xf00f) === 0xa008) {
                                                                    let _0x411c0a = _0x5752cd['get16BitRegister'](_0x5752cd, _0x5b98e9 >> 0x4 & 0xf);
                                                                    _0x4fb1fc = _0x5752cd['codeMemory']['get16'](_0x5752cd['pc']), _0x411c0a = _0x411c0a + _0x4fb1fc & 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x411c0a), _0x5752cd['pc'] += 0x2;
                                                                } else {
                                                                    if ((_0x5b98e9 & 0xf0c0) === 0xb040) {
                                                                        let _0x8ffd00 = _0x5752cd['get16BitRegister'](_0x5752cd, 0xe);
                                                                        _0x4fb1fc = _0x5b98e9 & 0x3f, (_0x4fb1fc & 0x20) !== 0x0 && (_0x4fb1fc |= 0xffffffe0), _0x8ffd00 = _0x8ffd00 + _0x4fb1fc & 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x8ffd00);
                                                                    } else {
                                                                        if ((_0x5b98e9 & 0xf0c0) === 0xd040) {
                                                                            let _0x404d9f = _0x5752cd['get16BitRegister'](_0x5752cd, 0xe);
                                                                            _0x4fb1fc = _0x5b98e9 & 0x3f, (_0x4fb1fc & 0x20) !== 0x0 && (_0x4fb1fc |= 0xffffffe0), _0x404d9f = _0x404d9f + _0x4fb1fc & 0xffff, _0xf58de3 = _0x5752cd['dataMemory']['get8'](_0x5752cd['dsr'], _0x404d9f);
                                                                        } else {
                                                                            if ((_0x5b98e9 & 0xf000) === 0xb000) {
                                                                                let _0x1a5c4f = _0x5752cd['get16BitRegister'](_0x5752cd, 0xc);
                                                                                _0x4fb1fc = _0x5b98e9 & 0x3f, (_0x4fb1fc & 0x20) !== 0x0 && (_0x4fb1fc |= 0xffffffe0), _0x1a5c4f = _0x1a5c4f + _0x4fb1fc & 0xfffe, _0xf58de3 = _0x5752cd['dataMemory']['get16'](_0x5752cd['dsr'], _0x1a5c4f);
                                                                            } else {
                                                                                if ((_0x5b98e9 & 0xf000) === 0xd000) {
                                                                                    let _0x40a550 = _0x5752cd['get16BitRegister'](_0x5752cd, 0xc);
                                                                                    _0x4fb1fc = _0x5b98e9 & 0x3f, (_0x4fb1fc & 0x20) !== 0x0 && (_0x4fb1fc |= 0xffffffe0), _0x40a550 = _0x40a550 + _0x4fb1fc & 0xffff, _0xf58de3 = _0x5752cd['dataMemory']['get8'](_0x5752cd['dsr'], _0x40a550);
                                                                                } else {
                                                                                    if ((_0x5b98e9 & 0xf00f) === 0x9008) {
                                                                                        let _0x3a25db = _0x5752cd['get16BitRegister'](_0x5752cd, _0x5b98e9 >> 0x4 & 0xf);
                                                                                        _0x4fb1fc = _0x5752cd['codeMemory']['get16'](_0x5752cd['pc']), _0x3a25db = _0x3a25db + _0x4fb1fc & 0xffff, _0xf58de3 = _0x5752cd['dataMemory']['get8'](_0x5752cd['dsr'], _0x3a25db), _0x5752cd['pc'] += 0x2;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _0x568d7f = _0xf58de3;
                    if (_0x5f24a6 === 0x9032 || _0x5f24a6 === 0x9052 || (_0x5b98e9 & 0xf00f) === 0x9002 || (_0x5b98e9 & 0xf00f) === 0xa008 || (_0x5b98e9 & 0xf0c0) === 0xb040 || (_0x5b98e9 & 0xf000) === 0xb000) _0x568d7f = _0x5752cd['setZeroAndSignFlags_16bit'](_0x5752cd, _0x4fb1fc, _0xf58de3, _0x568d7f), _0x5752cd['setOperationResult16bit'](_0x5752cd, _0x5b98e9 >> 0x8 & 0xf, _0x568d7f);
                    else {
                        if (_0x5f24a6 === 0x9030 || _0x5f24a6 === 0x9050 || (_0x5b98e9 & 0xf00f) === 0x9000 || _0x5f24a6 === 0x9010 || _0x5f24a6 === 0x9012 || (_0x5b98e9 & 0xf00f) === 0x9008 || (_0x5b98e9 & 0xf000) === 0xd000 || (_0x5b98e9 & 0xf0c0) === 0xd040) _0x568d7f &= 0xff, _0x568d7f = _0x5752cd['setZeroAndSignFlags_8bit'](_0x5752cd, _0x4fb1fc, _0xf58de3, _0x568d7f), _0x5752cd['setOperationResult8bit'](_0x5752cd, _0x5b98e9 >> 0x8 & 0xf, _0x568d7f);
                        else {
                            if (_0x5f24a6 === 0x9034 || _0x5f24a6 === 0x9054) _0x568d7f = _0x5752cd['setZeroAndSignFlags_32bit'](_0x5752cd, _0x4fb1fc, _0xf58de3, _0x568d7f), _0x5752cd['setOperationResult32bit'](_0x5752cd, _0x5b98e9 >> 0x8 & 0xf, _0x568d7f);
                            else(_0x5f24a6 === 0x9036 || _0x5f24a6 === 0x9056) && (_0x5752cd['setZeroAndSignFlags_64bit'](_0x5752cd, _0x4fb1fc, _0xf58de3, _0x568d7f), _0x5752cd['setOperationResult64bit'](_0x5752cd, _0x5b98e9 >> 0x8 & 0xf, _0x4fb1fc, _0xf58de3));
                        }
                    }(_0x5f24a6 === 0x9052 || _0x5f24a6 === 0x9050 || _0x5f24a6 === 0x9054 || _0x5f24a6 === 0x9056) && (_0x5752cd['ea'] += _0x439d06);
                } ['st_ERn_obj'](_0x220031, _0x3296c4) {
                    let _0x1f4b39, _0x53e9ae, _0x36a9a8 = _0x3296c4 & 0xf0ff,
                        _0x29d792, _0x7cfa56;
                    if (_0x36a9a8 === 0x9033) _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['ea'] & 0xfffe, _0x7cfa56 = 0x2;
                    else {
                        if (_0x36a9a8 === 0x9053) _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x220031['ea'] &= 0xfffe, _0x53e9ae = _0x220031['ea'], _0x7cfa56 = 0x2;
                        else {
                            if (_0x36a9a8 === 0x9013) _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['codeMemory']['get16'](_0x220031['pc']), _0x7cfa56 = 0x2, _0x220031['pc'] += 0x2;
                            else {
                                if ((_0x3296c4 & 0xf00f) === 0x9003) _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x4 & 0xf), _0x7cfa56 = 0x2;
                                else {
                                    if (_0x36a9a8 === 0x9031 || _0x36a9a8 === 0x9051) _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['ea'], _0x7cfa56 = 0x1;
                                    else {
                                        if (_0x36a9a8 === 0x9011) _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['codeMemory']['get16'](_0x220031['pc']), _0x7cfa56 = 0x1, _0x220031['pc'] += 0x2;
                                        else {
                                            if ((_0x3296c4 & 0xf00f) === 0x9001) _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x4 & 0xf), _0x7cfa56 = 0x1;
                                            else {
                                                if ((_0x3296c4 & 0xf00f) === 0xa009) {
                                                    _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                    let _0x43f680 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x4 & 0xf);
                                                    _0x53e9ae = _0x220031['codeMemory']['get16'](_0x220031['pc']), _0x53e9ae = _0x43f680 + _0x53e9ae & 0xfffe, _0x7cfa56 = 0x2, _0x220031['pc'] += 0x2;
                                                } else {
                                                    if ((_0x3296c4 & 0xf00f) === 0x9009) {
                                                        _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                        let _0x5e2b03 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x4 & 0xf);
                                                        _0x53e9ae = _0x220031['codeMemory']['get16'](_0x220031['pc']), _0x53e9ae = _0x5e2b03 + _0x53e9ae & 0xffff, _0x7cfa56 = 0x1, _0x220031['pc'] += 0x2;
                                                    } else {
                                                        if ((_0x3296c4 & 0xf0c0) === 0xb080) {
                                                            _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                            let _0x57f7ec = _0x220031['get16BitRegister'](_0x220031, 0xc);
                                                            _0x53e9ae = _0x3296c4 & 0x3f, (_0x53e9ae & 0x20) !== 0x0 && (_0x53e9ae |= 0xffffffe0), _0x53e9ae = _0x57f7ec + _0x53e9ae & 0xfffe, _0x7cfa56 = 0x2;
                                                        } else {
                                                            if ((_0x3296c4 & 0xf0c0) === 0xd080) {
                                                                _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                                let _0x182d66 = _0x220031['get16BitRegister'](_0x220031, 0xc);
                                                                _0x53e9ae = _0x3296c4 & 0x3f, (_0x53e9ae & 0x20) !== 0x0 && (_0x53e9ae |= 0xffffffe0), _0x53e9ae = _0x182d66 + _0x53e9ae & 0xffff, _0x7cfa56 = 0x1;
                                                            } else {
                                                                if ((_0x3296c4 & 0xf0c0) === 0xd0c0) {
                                                                    _0x1f4b39 = _0x220031['get8BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                                    let _0x271fce = _0x220031['get16BitRegister'](_0x220031, 0xe);
                                                                    _0x53e9ae = _0x3296c4 & 0x3f, (_0x53e9ae & 0x20) !== 0x0 && (_0x53e9ae |= 0xffffffe0), _0x53e9ae = _0x271fce + _0x53e9ae & 0xffff, _0x7cfa56 = 0x1;
                                                                } else {
                                                                    if ((_0x3296c4 & 0xf0c0) === 0xb0c0) {
                                                                        _0x1f4b39 = _0x220031['get16BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf);
                                                                        let _0x49eaab = _0x220031['get16BitRegister'](_0x220031, 0xe);
                                                                        _0x53e9ae = _0x3296c4 & 0x3f, (_0x53e9ae & 0x20) !== 0x0 && (_0x53e9ae |= 0xffffffe0), _0x53e9ae = _0x49eaab + _0x53e9ae & 0xfffe, _0x7cfa56 = 0x2;
                                                                    } else {
                                                                        if (_0x36a9a8 === 0x9035) _0x1f4b39 = _0x220031['get32BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['ea'] & 0xfffe, _0x7cfa56 = 0x4;
                                                                        else {
                                                                            if (_0x36a9a8 === 0x9055) _0x1f4b39 = _0x220031['get32BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x220031['ea'] &= 0xfffe, _0x53e9ae = _0x220031['ea'], _0x7cfa56 = 0x4;
                                                                            else {
                                                                                if (_0x36a9a8 === 0x9037) _0x1f4b39 = _0x220031['get64BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x53e9ae = _0x220031['ea'] & 0xfffe, _0x7cfa56 = 0x8;
                                                                                else _0x36a9a8 === 0x9057 && (_0x1f4b39 = _0x220031['get64BitRegister'](_0x220031, _0x3296c4 >> 0x8 & 0xf), _0x220031['ea'] &= 0xfffe, _0x53e9ae = _0x220031['ea'], _0x7cfa56 = 0x8);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (typeof _0x1f4b39 === 'number') {
                        for (let _0x4fa6b3 = 0x0; _0x4fa6b3 < _0x7cfa56; _0x4fa6b3++) {
                            _0x220031['dataMemory']['set8'](_0x220031['dsr'], _0x1f4b39 >> 0x8 * _0x4fa6b3 & 0xff, _0x53e9ae + _0x4fa6b3);
                        }
                        _0x4ea2af['Constants']['DEBUG_DISPLAY_ADDRESSES'] && _0x53e9ae > _0x4ea2af['Constants']['DISPLAY_BUFFER_START_ADDRESS'] && _0x53e9ae < _0x4ea2af['Constants']['DISPLAY_BUFFER_END_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10)), _0x4ea2af['Constants']['DEBUG_ARBITRARY_ADDRESSES'] && _0x53e9ae === _0x4ea2af['Constants']['DEBUG_ARBITRARY_MEMORY_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10));
                    } else {
                        for (let _0x1b6cc8 = 0x0; _0x1b6cc8 < 0x4; _0x1b6cc8++) {
                            _0x220031['dataMemory']['set8'](_0x220031['dsr'], _0x1f4b39[0x0] >> 0x8 * _0x1b6cc8 & 0xff, _0x53e9ae + _0x1b6cc8);
                        }
                        _0x4ea2af['Constants']['DEBUG_DISPLAY_ADDRESSES'] && _0x53e9ae > _0x4ea2af['Constants']['DISPLAY_BUFFER_START_ADDRESS'] && _0x53e9ae < _0x4ea2af['Constants']['DISPLAY_BUFFER_END_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39[0x0]['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10));
                        _0x4ea2af['Constants']['DEBUG_ARBITRARY_ADDRESSES'] && _0x53e9ae === _0x4ea2af['Constants']['DEBUG_ARBITRARY_MEMORY_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10));
                        for (let _0xde2a0a = 0x4; _0xde2a0a < 0x8; _0xde2a0a++) {
                            _0x220031['dataMemory']['set8'](_0x220031['dsr'], _0x1f4b39[0x1] >> 0x8 * _0xde2a0a & 0xff, _0x53e9ae + _0xde2a0a);
                        }
                        _0x4ea2af['Constants']['DEBUG_DISPLAY_ADDRESSES'] && _0x53e9ae > _0x4ea2af['Constants']['DISPLAY_BUFFER_START_ADDRESS'] && _0x53e9ae < _0x4ea2af['Constants']['DISPLAY_BUFFER_END_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39[0x1]['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10)), _0x4ea2af['Constants']['DEBUG_ARBITRARY_ADDRESSES'] && _0x53e9ae === _0x4ea2af['Constants']['DEBUG_ARBITRARY_MEMORY_ADDRESS'] && console['log']('wrote 0x' + _0x1f4b39['toString'](0x10) + ' to display address 0x' + _0x53e9ae['toString'](0x10));
                    }(_0x36a9a8 === 0x9053 || _0x36a9a8 === 0x9051 || _0x36a9a8 === 0x9055 || _0x36a9a8 === 0x9057) && (_0x220031['ea'] += _0x7cfa56);
                } ['add_SP_imm8'](_0x2a0e6b, _0x5b3b88) {
                    let _0x352a73 = _0x2a0e6b['sp'],
                        _0x3bda4c = _0x5b3b88 & 0xff;
                    (_0x3bda4c & 0x1 << 0x7) === 0x0 ? _0x3bda4c &= 0x7f : _0x3bda4c |= 0xff80;
                    let _0x566ef1 = _0x352a73 + _0x3bda4c;
                    _0x566ef1 &= 0xffff, _0x2a0e6b['sp'] = _0x566ef1 & 0xfffe;
                } ['pushValueToStack'](_0x1b7a7b, _0x42f96, _0x2a57fb) {
                    let _0x159ef8;
                    for (_0x159ef8 = 0x0; _0x159ef8 < _0x2a57fb; _0x159ef8++) {
                        _0x1b7a7b['sp']--, _0x1b7a7b['dataMemory']['set8'](0x0, _0x42f96 >> 0x8 * (_0x2a57fb - _0x159ef8 - 0x1) & 0xff, _0x1b7a7b['sp']);
                    }
                    _0x4ea2af['Constants']['DEBUG_PUSH_POP'] && console['log']('*****-*-*-*-*-*-*-*-*-*-*-*-*-  pushed something ' + _0x42f96['toString'](0x10));
                } ['popValueFromStack'](_0x4223dd, _0x364aca) {
                    var _0x496667 = 0x0;
                    for (let _0x1ca63c = _0x364aca - 0x1; _0x1ca63c >= 0x0; _0x1ca63c--) {
                        _0x496667 |= _0x4223dd['dataMemory']['get8'](0x0, _0x4223dd['sp']) << 0x8 * (_0x364aca - _0x1ca63c - 0x1), _0x4223dd['sp']++;
                    }
                    return _0x4ea2af['Constants']['DEBUG_PUSH_POP'] && console['log']('*****-*-*-*-*-*-*-*-*-*-*-*-*-  popped something ' + _0x496667['toString'](0x10)), _0x496667;
                } ['push_obj'](_0x5e6414, _0x49d381) {
                    let _0x59abec, _0x275ad1, _0x2f6dd1 = _0x49d381 & 0xf0ff,
                        _0x9e56b;
                    if (_0x2f6dd1 === 0xf04e) _0x275ad1 = _0x5e6414['get8BitRegister'](_0x5e6414, _0x49d381 >> 0x8 & 0xf), _0x5e6414['pushValueToStack'](_0x5e6414, _0x275ad1, 0x2);
                    else {
                        if (_0x2f6dd1 === 0xf05e) _0x275ad1 = _0x5e6414['get16BitRegister'](_0x5e6414, _0x49d381 >> 0x8 & 0xf), _0x5e6414['pushValueToStack'](_0x5e6414, _0x275ad1, 0x2);
                        else {
                            if (_0x2f6dd1 === 0xf06e) _0x275ad1 = _0x5e6414['get32BitRegister'](_0x5e6414, _0x49d381 >> 0x8 & 0xf), _0x5e6414['pushValueToStack'](_0x5e6414, _0x275ad1, 0x4);
                            else {
                                if (_0x2f6dd1 === 0xf07e) _0x275ad1 = _0x5e6414['get64BitRegister'](_0x5e6414, _0x49d381 >> 0x8 & 0xf), _0x5e6414['pushValueToStack'](_0x5e6414, _0x275ad1[0x1], 0x4), _0x5e6414['pushValueToStack'](_0x5e6414, _0x275ad1[0x0], 0x4);
                                else _0x2f6dd1 === 0xf0ce && (_0x59abec = _0x49d381 >> 0x8 & 0xff, (_0x59abec & _0x5e6414['NXU16_PUSH_REGISTER_LIST_ELR']) !== 0x0 && (_0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['ecsr1'], 0x2), _0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['elr1'], 0x2)), (_0x59abec & _0x5e6414['NXU16_PUSH_REGISTER_LIST_PSW']) !== 0x0 && _0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['psw'], 0x2), (_0x59abec & _0x5e6414['NXU16_PUSH_REGISTER_LIST_LR']) !== 0x0 && (_0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['lcsr'], 0x2), _0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['lr'] & 0xffff, 0x2), _0x4ea2af['Constants']['DEBUG_PUSH_POP'] && console['log']('*****-*-*-*-*-*-*-*-*-*-*-*-*-  pushed lr=0x' + _0x5e6414['lr']['toString'](0x10))), (_0x59abec & _0x5e6414['NXU16_PUSH_REGISTER_LIST_EA']) !== 0x0 && _0x5e6414['pushValueToStack'](_0x5e6414, _0x5e6414['ea'], 0x2));
                            }
                        }
                    }
                } ['use_DSR'](_0x175c19, _0x4b92a6) {
                    _0x4b92a6 === 0xfe9f ? _0x175c19['dsr'] = _0x175c19['currentDSR'] : (_0x175c19['currentDSR'] = _0x4b92a6 & 0xff, _0x175c19['dsr'] = _0x175c19['currentDSR']);
                    let _0x954c9f = _0x175c19['codeMemory']['get16'](_0x175c19['pc']);
                    _0x175c19['pc'] += 0x2, _0x175c19['operation'][_0x954c9f](_0x175c19, _0x954c9f), _0x175c19['dsr'] = 0x0;
                } ['use_DSR_fromRegister'](_0x1dc81e, _0x5d5e0c) {
                    let _0x579dda = _0x5d5e0c >> 0x4 & 0xf;
                    _0x1dc81e['currentDSR'] = _0x1dc81e['get8BitRegister'](_0x1dc81e, _0x579dda), _0x1dc81e['dsr'] = _0x1dc81e['currentDSR'];
                    let _0xdd4f1e = _0x1dc81e['codeMemory']['get16'](_0x1dc81e['pc']);
                    _0x1dc81e['pc'] += 0x2, _0x1dc81e['operation'][_0xdd4f1e](_0x1dc81e, _0xdd4f1e), _0x1dc81e['dsr'] = 0x0;
                } ['pop_obj'](_0x2098e1, _0x463759) {
                    let _0x3d2372, _0x1d0531, _0x4bcfa7, _0x391feb = _0x463759 & 0xf0ff,
                        _0x287379;
                    if (_0x391feb === 0xf01e) _0x1d0531 = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2), _0x2098e1['setOperationResult16bit'](_0x2098e1, _0x463759 >> 0x8 & 0xf, _0x1d0531);
                    else {
                        if (_0x391feb === 0xf00e) _0x1d0531 = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2), _0x2098e1['setOperationResult8bit'](_0x2098e1, _0x463759 >> 0x8 & 0xf, _0x1d0531 & 0xff);
                        else {
                            if (_0x391feb === 0xf02e) _0x1d0531 = _0x2098e1['popValueFromStack'](_0x2098e1, 0x4), _0x2098e1['setOperationResult32bit'](_0x2098e1, _0x463759 >> 0x8 & 0xf, _0x1d0531);
                            else {
                                if (_0x391feb === 0xf03e)(_0x463759 >> 0x8 & 0xf) === 0x0 ? (_0x2098e1['r0'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r1'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r2'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r3'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r4'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r5'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r6'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r7'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++)) : (_0x2098e1['r8'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r9'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r10'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r11'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r12'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r13'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r14'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++), _0x2098e1['r15'] = _0x2098e1['dataMemory']['get8'](_0x2098e1['dsr'], _0x2098e1['sp']++));
                                else {
                                    if (_0x391feb === 0xf08e) {
                                        _0x3d2372 = _0x463759 >> 0x8 & 0xff;
                                        (_0x3d2372 & _0x2098e1['NXU16_POP_REGISTER_LIST_EA']) !== 0x0 && (_0x2098e1['ea'] = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2));
                                        (_0x3d2372 & _0x2098e1['NXU16_POP_REGISTER_LIST_LR']) !== 0x0 && (_0x2098e1['ecsr'] = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2) & 0x3, _0x2098e1['pc'] = _0x2098e1['ecsr'] << 0x10 | _0x2098e1['popValueFromStack'](_0x2098e1, 0x2));
                                        (_0x3d2372 & _0x2098e1['NXU16_POP_REGISTER_LIST_PSW']) !== 0x0 && (_0x2098e1['psw'] = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2) & 0xff);
                                        if ((_0x3d2372 & _0x2098e1['NXU16_POP_REGISTER_LIST_PC']) !== 0x0) {
                                            let _0x540fb1 = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2);
                                            _0x4ea2af['Constants']['DEBUG_PUSH_POP'] && (console['log']('*****-*-*-*-*-*-*-*-*-*-*-*-*-  popped pc=' + _0x2098e1['ecsr'] + ':' + _0x2098e1['pc']['toString'](0x10)), console['log']('writing pc= 0x' + _0x540fb1['toString'](0x10))), _0x2098e1['pc'] = _0x540fb1, _0x2098e1['ecsr'] = _0x2098e1['popValueFromStack'](_0x2098e1, 0x2) & 0x3, _0x2098e1['pc'] = _0x2098e1['ecsr'] << 0x10 | _0x2098e1['pc'];
                                        }
                                    }
                                }
                            }
                        }
                    }
                } ['lea_obj'](_0x3868ff, _0x36eb50) {
                    let _0x492a93 = _0x36eb50 & 0xf00f;
                    if (_0x492a93 === 0xf00a) {
                        let _0x2dba04 = _0x3868ff['get16BitRegister'](_0x3868ff, _0x36eb50 >> 0x4 & 0xf);
                        _0x3868ff['ea'] = _0x2dba04;
                    } else {
                        if (_0x492a93 === 0xf00b) {
                            let _0xdd6c74 = _0x3868ff['get16BitRegister'](_0x3868ff, _0x36eb50 >> 0x4 & 0xf),
                                _0x4c4089 = _0x3868ff['codeMemory']['get16'](_0x3868ff['pc']);
                            _0xdd6c74 = _0xdd6c74 + _0x4c4089 & 0xffff, _0x3868ff['ea'] = _0xdd6c74, _0x3868ff['pc'] += 0x2;
                        } else {
                            if (_0x492a93 === 0xf00c) {
                                let _0x28a11a = _0x3868ff['codeMemory']['get16'](_0x3868ff['pc']);
                                _0x3868ff['ea'] = _0x28a11a, _0x3868ff['pc'] += 0x2;
                            }
                        }
                    }
                } ['daa_obj'](_0x3b1e0b, _0x59caec) {
                    const _0x2d8526 = (_0x3b1e0b['psw'] & _0x3b1e0b['NXU16_MASK_C_FLAG']) !== 0x0,
                        _0x46beb1 = (_0x3b1e0b['psw'] & _0x3b1e0b['NXU16_MASK_HC_FLAG']) !== 0x0,
                        _0x1f9db4 = _0x59caec >> 0x8 & 0xf,
                        _0xc873d1 = _0x3b1e0b['get8BitRegister'](_0x3b1e0b, _0x1f9db4),
                        _0x1169ac = (_0xc873d1 & 0xf0) >> 0x4,
                        _0x1bd747 = _0xc873d1 & 0xf;
                    let _0x17ad5c;
                    if (!_0x2d8526 && !_0x46beb1 && _0x1169ac <= 0x9 && _0x1bd747 <= 0x9) _0x17ad5c = 0x0;
                    else {
                        if (!_0x2d8526 && (_0x1169ac <= 0x8 && _0x1bd747 > 0x9 || _0x1169ac <= 0x9 && _0x46beb1)) _0x17ad5c = 0x6;
                        else !_0x46beb1 && _0x1bd747 <= 0x9 && (!_0x2d8526 && _0x1169ac > 0x9 || _0x2d8526) ? _0x17ad5c = 0x60 : _0x17ad5c = 0x66;
                    }
                    const _0x35a96c = _0xc873d1 + _0x17ad5c & 0xff;
                    _0x35a96c & 0x80 ? _0x3b1e0b['psw'] |= _0x3b1e0b['NXU16_MASK_S_FLAG'] : _0x3b1e0b['psw'] &= ~_0x3b1e0b['NXU16_MASK_S_FLAG'], _0x35a96c === 0x0 ? _0x3b1e0b['psw'] |= _0x3b1e0b['NXU16_MASK_Z_FLAG'] : _0x3b1e0b['psw'] &= ~_0x3b1e0b['NXU16_MASK_Z_FLAG'], !_0x2d8526 && (_0x1169ac > 0x9 || !_0x46beb1 && _0x1169ac >= 0x9 && _0x1bd747 > 0x9) && (_0x3b1e0b['psw'] |= _0x3b1e0b['NXU16_MASK_C_FLAG']), (_0x35a96c ^ _0xc873d1 ^ _0x17ad5c) & 0x10 ? _0x3b1e0b['psw'] |= _0x3b1e0b['NXU16_MASK_HC_FLAG'] : _0x3b1e0b['psw'] &= ~_0x3b1e0b['NXU16_MASK_HC_FLAG'], _0x3b1e0b['setOperationResult8bit'](_0x3b1e0b, _0x1f9db4, _0x35a96c);
                } ['das_obj'](_0x5e963f, _0x471838) {
                    const _0x359b4c = (_0x5e963f['psw'] & _0x5e963f['NXU16_MASK_C_FLAG']) !== 0x0,
                        _0x114fc0 = (_0x5e963f['psw'] & _0x5e963f['NXU16_MASK_HC_FLAG']) !== 0x0,
                        _0x2a9177 = _0x471838 >> 0x8 & 0xf,
                        _0x5f3bb1 = _0x5e963f['get8BitRegister'](_0x5e963f, _0x2a9177),
                        _0x18240e = (_0x5f3bb1 & 0xf0) >> 0x4,
                        _0xd6c5a9 = _0x5f3bb1 & 0xf;
                    let _0x247c4c;
                    if (!_0x359b4c && !_0x114fc0 && _0x18240e <= 0x9 && _0xd6c5a9 <= 0x9) _0x247c4c = 0x0;
                    else {
                        if (!_0x359b4c && (_0x18240e <= 0x9 && _0xd6c5a9 > 0x9 || _0x18240e <= 0x9 && _0x114fc0)) _0x247c4c = 0x6;
                        else !_0x114fc0 && _0xd6c5a9 <= 0x9 && (!_0x359b4c && _0x18240e > 0x9 || _0x359b4c) ? _0x247c4c = 0x60 : _0x247c4c = 0x66;
                    }
                    const _0x1ff252 = _0x5f3bb1 - _0x247c4c & 0xff;
                    _0x1ff252 & 0x80 ? _0x5e963f['psw'] |= _0x5e963f['NXU16_MASK_S_FLAG'] : _0x5e963f['psw'] &= ~_0x5e963f['NXU16_MASK_S_FLAG'], _0x1ff252 === 0x0 ? _0x5e963f['psw'] |= _0x5e963f['NXU16_MASK_Z_FLAG'] : _0x5e963f['psw'] &= ~_0x5e963f['NXU16_MASK_Z_FLAG'], (_0x5f3bb1 & 0xf) - (_0x247c4c & 0xf) & ~0xf ? _0x5e963f['psw'] |= _0x5e963f['NXU16_MASK_HC_FLAG'] : _0x5e963f['psw'] &= ~_0x5e963f['NXU16_MASK_HC_FLAG'], _0x5e963f['setOperationResult8bit'](_0x5e963f, _0x2a9177, _0x1ff252);
                } ['neg_obj'](_0x487415, _0x5c0f98) {
                    const _0x6ce843 = _0x5c0f98 >> 0x8 & 0xf,
                        _0x27c85d = _0x487415['get8BitRegister'](_0x487415, _0x6ce843);
                    let _0x29514e = 0x0 - _0x27c85d;
                    _0x29514e = _0x487415['setFlagsFor8bitSub'](_0x487415, 0x0, _0x27c85d, _0x29514e), _0x487415['setOperationResult8bit'](_0x487415, _0x6ce843, _0x29514e);
                } ['mul_ERn_Rm'](_0x56e347, _0x503284) {
                    const _0x58478d = _0x503284 >> 0x8 & 0xf,
                        _0x2c3e33 = _0x503284 >> 0x4 & 0xf,
                        _0x1e5707 = _0x56e347['get8BitRegister'](_0x56e347, _0x58478d),
                        _0x29f9c6 = _0x56e347['get8BitRegister'](_0x56e347, _0x2c3e33),
                        _0x8d200c = _0x1e5707 * _0x29f9c6;
                    _0x8d200c === 0x0 ? _0x56e347['psw'] |= _0x56e347['NXU16_MASK_Z_FLAG'] : _0x56e347['psw'] &= ~_0x56e347['NXU16_MASK_Z_FLAG'], _0x56e347['setOperationResult16bit'](_0x56e347, _0x503284 >> 0x8 & 0xf, _0x8d200c);
                } ['div_ERn_Rm'](_0x520355, _0x4f3765) {
                    const _0x1f7e7e = _0x4f3765 >> 0x8 & 0xf,
                        _0x405bd5 = _0x4f3765 >> 0x4 & 0xf,
                        _0x101915 = _0x520355['get16BitRegister'](_0x520355, _0x1f7e7e),
                        _0x22918a = _0x520355['get8BitRegister'](_0x520355, _0x405bd5);
                    if (_0x22918a === 0x0) _0x520355['setC'](_0x520355, !![]);
                    else {
                        const _0x4087e9 = Math['floor'](_0x101915 / _0x22918a),
                            _0x772cc3 = _0x101915 % _0x22918a >>> 0x0;
                        _0x520355['setC'](_0x520355, ![]), _0x4087e9 === 0x0 ? _0x520355['psw'] |= _0x520355['NXU16_MASK_Z_FLAG'] : _0x520355['psw'] &= ~_0x520355['NXU16_MASK_Z_FLAG'], _0x520355['setOperationResult16bit'](_0x520355, _0x4f3765 >> 0x8 & 0xf, _0x4087e9), _0x520355['setOperationResult8bit'](_0x520355, _0x405bd5, _0x772cc3);
                    }
                } ['sb_rn'](_0x3de138, _0x703974) {
                    let _0x5cbdaa = _0x703974 >> 0x4 & 0x7,
                        _0x2cd81d, _0x5da366, _0x58a168 = _0x703974 & 0xf08f;
                    if (_0x58a168 === 0xa000) _0x2cd81d = _0x703974 >> 0x8 & 0xf, _0x5da366 = _0x3de138['get8BitRegister'](_0x3de138, _0x2cd81d);
                    else _0x58a168 === 0xa080 && (_0x2cd81d = _0x3de138['codeMemory']['get16'](_0x3de138['pc']), _0x5da366 = _0x3de138['dataMemory']['get8'](_0x3de138['dsr'], _0x2cd81d), _0x3de138['pc'] += 0x2);
                    let _0x54d8bf = 0x1 << _0x5cbdaa;
                    (_0x5da366 & _0x54d8bf) === 0x0 ? _0x3de138['setZ'](_0x3de138, !![]) : _0x3de138['setZ'](_0x3de138, ![]);
                    _0x5da366 |= _0x54d8bf;
                    if (_0x58a168 === 0xa000) _0x3de138['setOperationResult8bit'](_0x3de138, _0x2cd81d, _0x5da366);
                    else _0x58a168 === 0xa080 && _0x3de138['dataMemory']['set8'](_0x3de138['dsr'], _0x5da366, _0x2cd81d);
                } ['rb_rn'](_0x362164, _0x3e992f) {
                    let _0x476fe0 = _0x3e992f >> 0x4 & 0x7,
                        _0x212a4a, _0x37eef5, _0x5a7261 = _0x3e992f & 0xf08f;
                    if (_0x5a7261 === 0xa002) _0x212a4a = _0x3e992f >> 0x8 & 0xf, _0x37eef5 = _0x362164['get8BitRegister'](_0x362164, _0x212a4a);
                    else _0x5a7261 === 0xa082 && (_0x212a4a = _0x362164['codeMemory']['get16'](_0x362164['pc']), _0x37eef5 = _0x362164['dataMemory']['get8'](_0x362164['dsr'], _0x212a4a), _0x362164['pc'] += 0x2);
                    (_0x37eef5 >> _0x476fe0 & 0x1) === 0x0 ? _0x362164['psw'] |= _0x362164['NXU16_MASK_Z_FLAG'] : _0x362164['psw'] &= ~_0x362164['NXU16_MASK_Z_FLAG'];
                    _0x37eef5 &= ~(0x1 << _0x476fe0) & 0xff;
                    if (_0x5a7261 === 0xa002) _0x362164['setOperationResult8bit'](_0x362164, _0x212a4a, _0x37eef5);
                    else _0x5a7261 === 0xa082 && _0x362164['dataMemory']['set8'](_0x362164['dsr'], _0x37eef5, _0x212a4a);
                } ['tb_rn'](_0x402463, _0xbd757c) {
                    let _0x210d17 = _0xbd757c >> 0x4 & 0x7,
                        _0x284fc6, _0xb3eeb2, _0x21c156 = _0xbd757c & 0xf08f;
                    if (_0x21c156 === 0xa001) _0x284fc6 = _0xbd757c >> 0x8 & 0xf, _0xb3eeb2 = _0x402463['get8BitRegister'](_0x402463, _0x284fc6);
                    else _0x21c156 === 0xa081 && (_0x284fc6 = _0x402463['codeMemory']['get16'](_0x402463['pc']), _0xb3eeb2 = _0x402463['dataMemory']['get8'](_0x402463['dsr'], _0x284fc6), _0x402463['pc'] += 0x2);
                    (_0xb3eeb2 >> _0x210d17 & 0x1) === 0x0 ? _0x402463['psw'] |= _0x402463['NXU16_MASK_Z_FLAG'] : _0x402463['psw'] &= ~_0x402463['NXU16_MASK_Z_FLAG'];
                } ['b_conditional'](_0x5fe022, _0x3b8700) {
                    var _0xb2f8a5 = ![],
                        _0x184e77 = _0x3b8700 & 0xff,
                        _0xd82b6b = _0x3b8700 >> 0x8 & 0xf;
                    (_0x184e77 & 0x80) !== 0x0 && (_0x184e77 |= 0xffffff80);
                    _0x184e77 *= 0x2;
                    switch (_0xd82b6b) {
                        case 0x0:
                            _0xb2f8a5 = !_0x5fe022['isCSet'](_0x5fe022);
                            break;
                        case 0x1:
                            _0xb2f8a5 = _0x5fe022['isCSet'](_0x5fe022);
                            break;
                        case 0x2:
                            _0xb2f8a5 = _0x5fe022['isCSet'](_0x5fe022) === ![] && _0x5fe022['isZSet'](_0x5fe022) === ![];
                            break;
                        case 0x3:
                            _0xb2f8a5 = _0x5fe022['isCSet'](_0x5fe022) === !![] || _0x5fe022['isZSet'](_0x5fe022) === !![];
                            break;
                        case 0x4:
                            var _0x2bb92c = _0x5fe022['isOVSet'](_0x5fe022),
                                _0x238e4c = _0x5fe022['isSSet'](_0x5fe022);
                            _0xb2f8a5 = !(_0x238e4c !== _0x2bb92c);
                            break;
                        case 0x5:
                            var _0x2bb92c = _0x5fe022['isOVSet'](_0x5fe022),
                                _0x238e4c = _0x5fe022['isSSet'](_0x5fe022);
                            _0xb2f8a5 = _0x238e4c !== _0x2bb92c;
                            break;
                        case 0x6:
                            var _0x2bb92c = _0x5fe022['isOVSet'](_0x5fe022),
                                _0x238e4c = _0x5fe022['isSSet'](_0x5fe022),
                                _0x1f29e0 = _0x5fe022['isZSet'](_0x5fe022);
                            _0xb2f8a5 = !(_0x238e4c !== _0x2bb92c || _0x1f29e0);
                            break;
                        case 0x7:
                            var _0x1f29e0 = _0x5fe022['isZSet'](_0x5fe022),
                                _0x2bb92c = _0x5fe022['isOVSet'](_0x5fe022),
                                _0x238e4c = _0x5fe022['isSSet'](_0x5fe022);
                            _0xb2f8a5 = _0x238e4c !== _0x2bb92c || _0x1f29e0;
                            break;
                        case 0x8:
                            var _0x1f29e0 = _0x5fe022['isZSet'](_0x5fe022);
                            _0xb2f8a5 = !_0x1f29e0;
                            break;
                        case 0x9:
                            var _0x1f29e0 = _0x5fe022['isZSet'](_0x5fe022);
                            _0xb2f8a5 = _0x1f29e0;
                            break;
                        case 0xa:
                            _0xb2f8a5 = !_0x5fe022['isOVSet'](_0x5fe022);
                            break;
                        case 0xb:
                            _0xb2f8a5 = _0x5fe022['isOVSet'](_0x5fe022);
                            break;
                        case 0xc:
                            var _0x238e4c = _0x5fe022['isSSet'](_0x5fe022);
                            _0xb2f8a5 = !_0x238e4c;
                            break;
                        case 0xd:
                            var _0x238e4c = _0x5fe022['isSSet'](_0x5fe022);
                            _0xb2f8a5 = _0x238e4c;
                            break;
                        case 0xe:
                            _0xb2f8a5 = !![];
                            break;
                    }
                    _0xb2f8a5 && (_0x5fe022['pc'] += _0x184e77);
                } ['extbw_rn'](_0x26e073, _0x26c7f0) {
                    let _0xef06c4 = _0x26e073['get8BitRegister'](_0x26e073, _0x26c7f0 >> 0x4 & 0xf);
                    (_0xef06c4 & 0x80) !== 0x0 ? (_0xef06c4 |= 0xff80, _0x26e073['setS'](_0x26e073, !![])) : _0x26e073['setS'](_0x26e073, ![]), _0xef06c4 === 0x0 ? _0x26e073['setZ'](_0x26e073, !![]) : _0x26e073['setZ'](_0x26e073, ![]), _0x26e073['setOperationResult16bit'](_0x26e073, (_0x26c7f0 >> 0x9 & 0x7) << 0x1, _0xef06c4);
                } ['swi_snum'](_0x6b4d02, _0x17fc70) {
                    let _0x5eaf39 = _0x17fc70 & 0x3f,
                        _0x25fc7a = function() {
                            if (_0x5eaf39 === 0x1) {
                                if (typeof _0x6b4d02['parent'] !== 'undefined') {
                                    let _0x13fcd0 = _0x6b4d02['get16BitRegister'](_0x6b4d02, 0x0);
                                    _0x6b4d02['callScreenChanged'](_0x6b4d02, _0x13fcd0), _0x6b4d02['r0'] = 0x0, _0x6b4d02['r1'] = 0x0;
                                }
                            } else {
                                if (_0x5eaf39 === 0x2) {
                                    let _0xd400f2 = _0x6b4d02['keyEventProcessor']['getNextKeyCode']();
                                    _0xd400f2 === 0x29 && _0x6b4d02['is2ndMode'] && (_0xd400f2 = 0x0), _0x6b4d02['r1'] = 0x0, _0x6b4d02['r0'] = _0xd400f2 & 0xff, _0x6b4d02['isBusy'] = !![], _0x6b4d02['r0'] === 0xff && (_0x6b4d02['r2'] = _0x6b4d02['uartStartAddress'] & 0xff, _0x6b4d02['r3'] = _0x6b4d02['uartStartAddress'] >> 0x8 & 0xff);
                                } else {
                                    if (_0x5eaf39 === 0x3) {
                                        if (typeof _0x6b4d02['automationResolve'] === 'function') {
                                            let _0x52288d = _0x6b4d02['get16BitRegister'](_0x6b4d02, 0x0),
                                                _0x39184d = _0x6b4d02['get16BitRegister'](_0x6b4d02, 0x2);
                                            if (_0x6b4d02['taRspBuffer'] === null) {
                                                let _0x4262a5 = _0x6b4d02['dataMemory']['get8'](0x0, _0x52288d) | _0x6b4d02['dataMemory']['get8'](0x0, _0x52288d + 0x1) << 0x8;
                                                _0x6b4d02['taRspLength'] = _0x4262a5 + 0x2, _0x6b4d02['taRspBuffer'] = new Uint8Array(_0x6b4d02['taRspLength']);
                                            }
                                            for (let _0x57b664 = 0x0; _0x57b664 < _0x39184d; _0x57b664++) {
                                                _0x6b4d02['taRspBuffer'][_0x6b4d02['taRspIndex']++] = _0x6b4d02['dataMemory']['get8'](0x0, _0x52288d + _0x57b664);
                                            }
                                            if (_0x6b4d02['taRspIndex'] === _0x6b4d02['taRspLength']) _0x6b4d02['automationResolve'](_0x6b4d02['taRspBuffer']), _0x6b4d02['taRspBuffer'] = null, _0x6b4d02['taRspLength'] = 0x0, _0x6b4d02['taRspIndex'] = 0x0, _0x6b4d02['automationResolve'] = undefined;
                                            else _0x6b4d02['taRspIndex'] > _0x6b4d02['taRspLength'] && (_0x6b4d02['automationReject']('Failed to create response.'), _0x6b4d02['taRspBuffer'] = null, _0x6b4d02['taRspLength'] = 0x0, _0x6b4d02['taRspIndex'] = 0x0);
                                        } else typeof _0x6b4d02['uartReady'] === 'function' && (typeof _0x6b4d02['uartBufLenLocation'] === 'undefined' ? (_0x6b4d02['uartBufLenLocation'] = _0x6b4d02['dataMemory']['get16'](0x0, 0x106), _0x6b4d02['uartStartAddress'] = _0x6b4d02['uartBufLenLocation'] + 0x2, console['log']('TA framework is ready.'), _0x6b4d02['uartReady']('TA framework is ready.')) : console['log']('TA initialized already.'));
                                    } else {
                                        if (_0x5eaf39 === 0x4) {
                                            if (typeof _0x6b4d02['parent'] !== 'undefined') {
                                                let _0x3492b1 = _0x6b4d02['get16BitRegister'](_0x6b4d02, 0x0);
                                                _0x6b4d02['callTopIconsChanged'](_0x6b4d02, _0x3492b1), _0x6b4d02['r0'] = 0x0, _0x6b4d02['r1'] = 0x0;
                                            }
                                        } else _0x5eaf39 === 0x5 && _0x6b4d02['keyEventProcessor']['notifyKeyCanRepeat']();
                                    }
                                }
                            }
                            let _0x6360bc = (_0x5eaf39 << 0x1) + 0x80;
                            return _0x6b4d02['codeMemory']['get16'](_0x6360bc);
                        };
                    _0x6b4d02['psw1'] = _0x6b4d02['psw'], _0x6b4d02['psw'] |= 0x1, _0x6b4d02['elr1'] = _0x6b4d02['pc'] & 0xffff, _0x6b4d02['ecsr1'] = _0x6b4d02['ecsr'], _0x6b4d02['psw'] &= ~_0x6b4d02['NXU16_MASK_MIE_FLAG'], _0x6b4d02['pc'] = _0x25fc7a();
                } ['brk'](_0x3c3058, _0x2446a8) {
                    const _0x559909 = _0x3c3058['psw'] & _0x3c3058['NXU16_MASK_ELEVEL'];
                    _0x559909 > 0x1 && (_0x3c3058['resetAll'](_0x3c3058), _0x3c3058['sp'] = _0x3c3058['codeMemory']['get16'](0x0), _0x3c3058['pc'] = _0x3c3058['codeMemory']['get16'](0x2)), _0x559909 < 0x2 && (_0x3c3058['elr2'] = _0x3c3058['pc'] & 0xffff, _0x3c3058['ecsr2'] = _0x3c3058['ecsr'], _0x3c3058['psw2'] = _0x3c3058['psw'], _0x3c3058['psw'] |= 0x2, _0x3c3058['pc'] = _0x3c3058['codeMemory']['get16'](0x4));
                } ['b_cadr'](_0x4619be, _0x2c39b5) {
                    let _0x2ec91a;
                    if ((_0x2c39b5 & 0xf00f) === 0xf000) _0x4619be['ecsr'] = _0x2c39b5 >> 0x8 & 0x3, _0x2ec91a = _0x4619be['codeMemory']['get16'](_0x4619be['pc']);
                    else {
                        if ((_0x2c39b5 & 0xf00f) === 0xf001) _0x4619be['lr'] = _0x4619be['pc'] + 0x2 & 0xffff, _0x4619be['lcsr'] = _0x4619be['ecsr'], _0x4619be['ecsr'] = _0x2c39b5 >> 0x8 & 0xf, _0x2ec91a = _0x4619be['codeMemory']['get16'](_0x4619be['pc']);
                        else {
                            if ((_0x2c39b5 & 0xf00f) === 0xf002) _0x2ec91a = _0x4619be['get16BitRegister'](_0x4619be, _0x2c39b5 >> 0x4 & 0xf);
                            else(_0x2c39b5 & 0xf00f) === 0xf003 && (_0x4619be['lr'] = _0x4619be['pc'] + 0x2 & 0xffff, _0x4619be['lcsr'] = _0x4619be['ecsr'], _0x2ec91a = _0x4619be['get16BitRegister'](_0x4619be, _0x2c39b5 >> 0x4 & 0xf));
                        }
                    }
                    _0x4619be['pc'] = _0x4619be['ecsr'] << 0x10 | _0x2ec91a;
                } ['checkForInterrupt']() {
                    const _0x417aba = this,
                        _0x4435e8 = 0x1,
                        _0x28a574 = _0x417aba['dataMemory'];
                    if (_0x417aba['pendingEI'] > 0x0) _0x417aba['pendingEI']--;
                    else {
                        for (let _0x38468f = 0x0; _0x38468f < _0x4435e8; _0x38468f++) {
                            if (_0x28a574['get8'](0x0, _0x28a574['INTERRUPT_IRQ0'] + _0x38468f) !== 0x0) {
                                _0x417aba['elr2'] = _0x417aba['pc'] & 0xffff, _0x417aba['ecsr2'] = _0x417aba['ecsr'], _0x417aba['psw2'] = _0x417aba['psw'], _0x417aba['psw'] = 0x2, _0x417aba['ecsr'] = 0x0, _0x417aba['pc'] = _0x417aba['getInterruptHandlerAddress'](_0x417aba, _0x38468f, ![]);
                                break;
                            }
                        }
                        if (_0x417aba['isMIESet'](_0x417aba))
                            for (let _0xb159d4 = _0x4435e8; _0xb159d4 < 0x8; _0xb159d4++) {
                                if (_0x28a574['get8'](0x0, _0x28a574['INTERRUPT_IE0'] + _0xb159d4) !== 0x0 && _0x28a574['get8'](0x0, _0x28a574['INTERRUPT_IRQ0'] + _0xb159d4) !== 0x0) {
                                    if ((_0x417aba['psw'] & _0x417aba['NXU16_MASK_ELEVEL']) < 0x2) {
                                        _0x417aba['elr1'] = _0x417aba['pc'] & 0xffff, _0x417aba['ecsr1'] = _0x417aba['ecsr'], _0x417aba['psw1'] = _0x417aba['psw'], _0x417aba['psw'] = 0x1, _0x417aba['setMIE'](_0x417aba, ![]), _0x417aba['ecsr'] = 0x0, _0x417aba['pc'] = _0x417aba['getInterruptHandlerAddress'](_0x417aba, _0xb159d4, !![]);
                                        break;
                                    }
                                }
                            }
                    }
                } ['run']() {
                    let _0x23b851 = this,
                        _0x25e96f, _0xbd1a31;
                    const _0x7e0126 = 0x32,
                        _0x1e250f = 0x1388,
                        _0x129df9 = this['isBusy'] ? _0x1e250f : _0x7e0126;
                    for (let _0x2f8ac5 = 0x0; _0x2f8ac5 < _0x129df9; _0x2f8ac5++) {
                        _0x25e96f = this['pc'], _0xbd1a31 = this['codeMemory']['get16'](_0x25e96f);
                        if (_0xbd1a31 === 0xe502 && _0x23b851['keyEventProcessor']['isQueueEmpty']()) {
                            this['isBusy'] = ![];
                            break;
                        }
                        if (_0x4ea2af['Constants']['SHOW_C_TRACE'] && typeof dolphinMapData[_0x25e96f] !== 'undefined') {
                            console['log']('pc= 0x' + _0x25e96f['toString'](0x10) + ' - ' + dolphinMapData[_0x25e96f]);
                            if (dolphinMapData[_0x25e96f]['includes']('memClearedDialog')) {
                                _0x23b851['showConsole'] = !![];
                                debugger;
                            }
                        }
                        this['pc'] += 0x2;
                        if (typeof this['operation'][_0xbd1a31] === 'function' || _0x25e96f > this['CODE_MEMORY_SIZE']) this['operation'][_0xbd1a31](this, _0xbd1a31);
                        else {
                            console['log']('ERROR!!!, tried to call an unsupported opcode!'), console['log']('pc= 0x' + _0x25e96f['toString'](0x10)), console['log']('opcode= 0x' + _0xbd1a31['toString'](0x10));
                            debugger;
                        }
                    }
                    let _0x2380ce = _0x23b851['dataMemory']['get8'](0x0, _0x23b851['dataMemory']['INTERRUPT_IRQ7']);
                    (_0x2380ce & 0x1) !== 0x0 && (_0x2380ce = _0x2380ce ^ 0x1, _0x23b851['dataMemory']['set8'](0x0, _0x2380ce, _0x23b851['dataMemory']['INTERRUPT_IRQ7']), _0x23b851['keyEventProcessor']['isQueueEmpty']() && !_0x23b851['keyEventProcessor']['isPotentialAutoRepeat']() && _0x23b851['setLastKeyPressed'](0x0)), this['checkForInterrupt']();
                } ['interp1']() {
                    var _0x907c4e = this,
                        _0x239419 = this['pc'],
                        _0xc937e1 = this['codeMemory']['get16'](_0x239419);
                    this['pc'] += 0x2;
                    if (typeof this['operation'][_0xc937e1] === 'function') this['operation'][_0xc937e1](this, _0xc937e1);
                    else debugger;
                } ['setLastKeyPressed'](_0xf11c17) {
                    if (_0xf11c17 === 0x29 && this['isBusy']) {
                        let _0x4d0326 = this['dataMemory']['get16'](0x0, 0x102),
                            _0x4456c5 = 0x1 << this['dataMemory']['get8'](0x0, 0x104),
                            _0x901b90 = this['dataMemory']['get8'](0x0, _0x4d0326) | _0x4456c5;
                        this['dataMemory']['set8'](0x0, _0x901b90, _0x4d0326);
                    }
                    this['keyEventProcessor']['addKeyDown'](_0xf11c17);
                } ['setLastKeyReleased'](_0x212be5) {
                    this['keyEventProcessor']['addKeyUp'](_0x212be5);
                } ['initUART']() {
                    return new Promise((_0x18bfff, _0x1df986) => {
                        this['uartReady'] = _0x18bfff;
                    });
                } ['setTestAutomationBuffer'](_0x2ffaa3, _0x58b7dc) {
                    console['log'](' Setting TA buffer...');
                    let _0x35e150 = new Promise((_0x585567, _0x2c8f87) => {
                        typeof _0x58b7dc !== 'undefined' && (_0x58b7dc < 0xff ? this['dataMemory']['set8'](0x0, _0x58b7dc, this['uartBufLenLocation']) : (console['log']('Bad length designation.'), _0x2c8f87()));
                        this['automationResolve'] = _0x585567, this['automationReject'] = _0x2c8f87;
                        for (let _0x4c73f1 in _0x2ffaa3) {
                            this['dataMemory']['set8'](0x0, _0x2ffaa3[_0x4c73f1], this['uartStartAddress'] + parseInt(_0x4c73f1, 0xa));
                        }
                        this['setLastKeyPressed'](0xff), this['setLastKeyReleased'](0xff);
                    });
                    return _0x35e150;
                } ['getState']() {
                    let _0x2b3826 = this['DATA_MEMORY_SIZE'] + this['dataMemory']['getNumOfTimers'](),
                        _0x2a54e8 = new Uint8Array(_0x2b3826 + this['CODE_MEMORY_SIZE'] + this['REGISTERS_SIZE']),
                        _0x31e884 = 0x0;
                    return _0x2a54e8[_0x31e884++] = this['r0'], _0x2a54e8[_0x31e884++] = this['r1'], _0x2a54e8[_0x31e884++] = this['r2'], _0x2a54e8[_0x31e884++] = this['r3'], _0x2a54e8[_0x31e884++] = this['r4'], _0x2a54e8[_0x31e884++] = this['r5'], _0x2a54e8[_0x31e884++] = this['r6'], _0x2a54e8[_0x31e884++] = this['r7'], _0x2a54e8[_0x31e884++] = this['r8'], _0x2a54e8[_0x31e884++] = this['r9'], _0x2a54e8[_0x31e884++] = this['r10'], _0x2a54e8[_0x31e884++] = this['r11'], _0x2a54e8[_0x31e884++] = this['r12'], _0x2a54e8[_0x31e884++] = this['r13'], _0x2a54e8[_0x31e884++] = this['r14'], _0x2a54e8[_0x31e884++] = this['r15'], _0x2a54e8[_0x31e884++] = this['psw'], _0x2a54e8[_0x31e884++] = this['psw1'], _0x2a54e8[_0x31e884++] = this['psw2'], _0x2a54e8[_0x31e884++] = this['psw3'], _0x2a54e8[_0x31e884++] = this['dsr'], _0x2a54e8[_0x31e884++] = this['currentDSR'], _0x2a54e8[_0x31e884++] = this['ecsr'], _0x2a54e8[_0x31e884++] = this['lcsr'], _0x2a54e8[_0x31e884++] = this['ecsr1'], _0x2a54e8[_0x31e884++] = this['ecsr2'], _0x2a54e8[_0x31e884++] = this['ecsr3'], _0x2a54e8[_0x31e884++] = this['pendingEI'], _0x2a54e8[_0x31e884++] = this['ea'] & 0xff, _0x2a54e8[_0x31e884++] = this['ea'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['pc'] & 0xff, _0x2a54e8[_0x31e884++] = this['pc'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['sp'] & 0xff, _0x2a54e8[_0x31e884++] = this['sp'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['lr'] & 0xff, _0x2a54e8[_0x31e884++] = this['lr'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['elr1'] & 0xff, _0x2a54e8[_0x31e884++] = this['elr1'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['elr2'] & 0xff, _0x2a54e8[_0x31e884++] = this['elr2'] >> 0x8 & 0xff, _0x2a54e8[_0x31e884++] = this['elr3'] & 0xff, _0x2a54e8[_0x31e884++] = this['elr3'] >> 0x8 & 0xff, _0x2a54e8['set'](this['dataMemory']['getState'](), _0x31e884), _0x31e884 += _0x2b3826, _0x2a54e8['set'](this['codeMemory']['getSubArray'](0x0, this['CODE_MEMORY_SIZE']), _0x31e884), _0x2a54e8;
                } ['setState'](_0x2c22d2) {
                    let _0x1b3b37 = 0x0;
                    this['r0'] = _0x2c22d2[_0x1b3b37++], this['r1'] = _0x2c22d2[_0x1b3b37++], this['r2'] = _0x2c22d2[_0x1b3b37++], this['r3'] = _0x2c22d2[_0x1b3b37++], this['r4'] = _0x2c22d2[_0x1b3b37++], this['r5'] = _0x2c22d2[_0x1b3b37++], this['r6'] = _0x2c22d2[_0x1b3b37++], this['r7'] = _0x2c22d2[_0x1b3b37++], this['r8'] = _0x2c22d2[_0x1b3b37++], this['r9'] = _0x2c22d2[_0x1b3b37++], this['r10'] = _0x2c22d2[_0x1b3b37++], this['r11'] = _0x2c22d2[_0x1b3b37++], this['r12'] = _0x2c22d2[_0x1b3b37++], this['r13'] = _0x2c22d2[_0x1b3b37++], this['r14'] = _0x2c22d2[_0x1b3b37++], this['r15'] = _0x2c22d2[_0x1b3b37++], this['psw'] = _0x2c22d2[_0x1b3b37++], this['psw1'] = _0x2c22d2[_0x1b3b37++], this['psw2'] = _0x2c22d2[_0x1b3b37++], this['psw3'] = _0x2c22d2[_0x1b3b37++], this['dsr'] = _0x2c22d2[_0x1b3b37++], this['currentDSR'] = _0x2c22d2[_0x1b3b37++], this['ecsr'] = _0x2c22d2[_0x1b3b37++], this['lcsr'] = _0x2c22d2[_0x1b3b37++], this['ecsr1'] = _0x2c22d2[_0x1b3b37++], this['ecsr2'] = _0x2c22d2[_0x1b3b37++], this['ecsr3'] = _0x2c22d2[_0x1b3b37++], this['pendingEI'] = _0x2c22d2[_0x1b3b37++], this['ea'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['pc'] = this['ecsr'] << 0x10 | _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['sp'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['lr'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['elr1'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['elr2'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8, this['elr3'] = _0x2c22d2[_0x1b3b37++] | _0x2c22d2[_0x1b3b37++] << 0x8;
                    let _0x4454c1 = this['DATA_MEMORY_SIZE'] + this['dataMemory']['getNumOfTimers']();
                    this['dataMemory']['setState'](_0x2c22d2['subarray'](_0x1b3b37, _0x1b3b37 + _0x4454c1)), _0x1b3b37 += _0x4454c1, this['codeMemory']['setData'](_0x2c22d2['subarray'](_0x1b3b37, _0x1b3b37 + this['CODE_MEMORY_SIZE']));
                }
            }
            _0x324694['NXU16_MCU'] = _0x1d6859;
        }, {
            '../../emulators_ts/Constants': 0x14,
            '../../emulators_ts/GenericKeypad': 0x17,
            './nxu16_data_memory': 0xd,
            './nxu16_memory': 0xf
        }],
        0xf: [function(_0x4284da, _0x4f1140, _0x5ee614) {
            'use strict';
            Object['defineProperty'](_0x5ee614, '__esModule', {
                'value': !![]
            });
            class _0x4a82c5 {
                constructor(_0x486442) {
                    this['SEGMENT_SHIFT_AMOUNT'] = 0x10, this['DEBUG_MEMORY_ADDRESSES'] = ![];
                    var _0x4d1104 = this;
                    this['mem'] = new Uint8Array(_0x486442), this['mem']['fill'](0xff, 0x0);
                } ['getLength']() {
                    return this['mem']['length'];
                } ['clear']() {
                    this['mem'] = new Uint8Array(this['mem']);
                } ['setData'](_0x4bdb34) {
                    this['mem']['fill'](0xff, 0x0);
                    for (var _0x3df0b4 in _0x4bdb34) {
                        this['mem'][_0x3df0b4] = _0x4bdb34[_0x3df0b4];
                    }
                } ['set8'](_0x22adfe, _0x548864) {
                    this['mem'][_0x548864] = _0x22adfe;
                } ['get8'](_0x376021) {
                    return this['mem'][_0x376021];
                } ['set16'](_0x3443b2, _0x1401cb) {
                    this['mem'][_0x1401cb] = _0x3443b2 & 0xff, this['mem'][_0x1401cb + 0x1] = _0x3443b2 >> 0x8 & 0xff;
                } ['get16'](_0x4523ec) {
                    let _0x22e84c = this['mem'][_0x4523ec];
                    return _0x22e84c |= this['mem'][_0x4523ec + 0x1] << 0x8, _0x22e84c;
                } ['get32'](_0x5ec3fb) {
                    let _0x1c2d84 = this['mem'][_0x5ec3fb];
                    return _0x1c2d84 |= this['mem'][_0x5ec3fb + 0x1] << 0x8, _0x1c2d84 |= this['mem'][_0x5ec3fb + 0x2] << 0x10, _0x1c2d84 |= this['mem'][_0x5ec3fb + 0x3] << 0x18, _0x1c2d84;
                } ['get64'](_0x4f565f) {
                    let _0x34deea = [];
                    return _0x34deea[0x0] = this['mem'][_0x4f565f], _0x34deea[0x0] |= this['mem'][_0x4f565f + 0x1] << 0x8, _0x34deea[0x0] |= this['mem'][_0x4f565f + 0x2] << 0x10, _0x34deea[0x0] |= this['mem'][_0x4f565f + 0x3] << 0x18, _0x34deea[0x1] = this['mem'][_0x4f565f + 0x4], _0x34deea[0x1] |= this['mem'][_0x4f565f + 0x5] << 0x8, _0x34deea[0x1] |= this['mem'][_0x4f565f + 0x6] << 0x10, _0x34deea[0x1] |= this['mem'][_0x4f565f + 0x7] << 0x18, _0x34deea;
                } ['getSubArray'](_0x8965a, _0x12036c) {
                    return this['mem']['subarray'](_0x8965a, _0x12036c);
                }
            }
            _0x5ee614['NXU16_Memory'] = _0x4a82c5;
        }, {}],
        0x10: [function(_0x3e6731, _0x115eb5, _0x56026d) {
            'use strict';
            Object['defineProperty'](_0x56026d, '__esModule', {
                'value': !![]
            });
            class _0x4cf56f {
                constructor(_0x36bf71) {
                    this['initialized'] = ![], this['callback'] = _0x36bf71, this['mode'] = 0x6;
                } ['setMode'](_0x9644e9) {
                    this['initialized'] = !![], this['mode'] = _0x9644e9, this['reset']();
                } ['start']() {
                    var _0x10bd7c = 0x186a0;
                    switch (this['mode']) {
                        case 0x0:
                            _0x10bd7c = 0x8;
                            break;
                        case 0x1:
                            _0x10bd7c = 0x10;
                            break;
                        case 0x2:
                            _0x10bd7c = 0x1f;
                            break;
                        case 0x3:
                            _0x10bd7c = 0x3f;
                            break;
                        case 0x4:
                            _0x10bd7c = 0x7d;
                            break;
                        case 0x5:
                            _0x10bd7c = 0xfa;
                            break;
                        case 0x6:
                            _0x10bd7c = 0x1f4;
                            break;
                        case 0x7:
                            _0x10bd7c = 0x3e8;
                            break;
                    }
                    this['intervalReference'] = setInterval(this['callback'], _0x10bd7c);
                    return;
                } ['stop']() {
                    clearInterval(this['intervalReference']);
                    return;
                } ['reset']() {
                    this['stop'](), this['start']();
                    return;
                } ['setState'](_0x1369cb) {
                    this['mode'] = _0x1369cb[0x0];
                } ['getState']() {
                    return Uint8Array['from']([this['mode']]);
                }
            }
            _0x56026d['NXU16_Timer'] = _0x4cf56f;;
        }, {}],
        0x11: [function(_0x3cd0f0, _0x3ce4be, _0xff5595) {
            'use strict';
            Object['defineProperty'](_0xff5595, '__esModule', {
                'value': !![]
            });
            class _0x34e0e3 {
                constructor(_0x1da0ec) {
                    this['STATE_INITIALIZED'] = 0x0, this['STATE_RESET_STEP_1'] = 0x1, this['STATE_RESET_STEP_2'] = 0x2, this['STATE_DONE'] = 0x3, this['state'] = this['STATE_INITIALIZED'], this['callback'] = _0x1da0ec, this['mode'] = 0x3;
                } ['setMode'](_0x1d8ed3) {
                    this['mode'] = _0x1d8ed3;
                } ['start']() {
                    var _0xe4d586 = 0x186a0;
                    switch (this['mode']) {
                        case 0x0:
                            _0xe4d586 = 0x7d;
                            break;
                        case 0x1:
                            _0xe4d586 = 0x1f4;
                            break;
                        case 0x2:
                            _0xe4d586 = 0x7d0;
                            break;
                        case 0x3:
                            _0xe4d586 = 0x1f40;
                            break;
                    }
                    this['intervalReference'] = setInterval(this['callback'], _0xe4d586);
                } ['stop']() {
                    clearInterval(this['intervalReference']);
                }
            }
            _0xff5595['NXU16_Watchdog'] = _0x34e0e3;;
        }, {}],
        0x12: [function(_0x33bf7e, _0x4445a6, _0x147f49) {
            'use strict';
            Object['defineProperty'](_0x147f49, '__esModule', {
                'value': !![]
            });
            var _0x20850e;
            (function(_0x5b7360) {
                _0x5b7360[_0x5b7360['NORMAL'] = 0x0] = 'NORMAL', _0x5b7360[_0x5b7360['SECOND'] = 0x1] = 'SECOND', _0x5b7360[_0x5b7360['ALPHA'] = 0x2] = 'ALPHA';
            }(_0x20850e = _0x147f49['KeypadMetaState'] || (_0x147f49['KeypadMetaState'] = {})));
            var _0x20c993;
            (function(_0xaad69c) {
                _0xaad69c[_0xaad69c['STOPPED'] = 0x0] = 'STOPPED', _0xaad69c[_0xaad69c['INITIALIZING'] = 0x1] = 'INITIALIZING', _0xaad69c[_0xaad69c['BUSY'] = 0x2] = 'BUSY', _0xaad69c[_0xaad69c['IDLE'] = 0x3] = 'IDLE', _0xaad69c[_0xaad69c['PAUSED'] = 0x4] = 'PAUSED';
            }(_0x20c993 = _0x147f49['ASICState'] || (_0x147f49['ASICState'] = {})));
        }, {}],
        0x13: [function(_0x395fac, _0x690388, _0x235e3a) {
            'use strict';
            Object['defineProperty'](_0x235e3a, '__esModule', {
                'value': !![]
            });
            const _0x9a0db6 = _0x395fac('./ASIC'),
                _0x56f082 = _0x395fac('./Utilities'),
                _0xfcc481 = _0x395fac('./Statefiles'),
                _0x5d3ddb = 'ti_calcscale_';
            var _0x13a06e;
            (function(_0x20ee44) {
                _0x20ee44[_0x20ee44['SEVERE'] = 0x0] = 'SEVERE', _0x20ee44[_0x20ee44['WARNING'] = 0x1] = 'WARNING', _0x20ee44[_0x20ee44['INFO'] = 0x2] = 'INFO';
            }(_0x13a06e || (_0x13a06e = {})));
            class _0x59b578 {
                constructor(_0x11ca46, _0x4e7aa6, _0x5600ac, _0x5292bf, _0x154f66) {
                    this['originalSizeW'] = 0x0, this['originalSizeH'] = 0x0, this['divID'] = 'calculatorDiv', console['log']('Starting ' + _0x154f66);
                    if (_0x11ca46 != null) {
                        this['settings'] = _0x11ca46, this['keypad'] = _0x4e7aa6, this['lcd'] = _0x5600ac, this['asic'] = _0x5292bf, this['calcModel'] = _0x154f66;
                        _0x11ca46['elementId'] && (this['divID'] = _0x11ca46['elementId']);
                        _0x5292bf['addStateListener'](this);
                        let _0x19524c = [this['lcd']['stop'](), this['keypad']['stop'](), this['asic']['stop']()];
                        Promise['all'](_0x19524c)['then'](() => {
                            this['getOrSetStatefile']()['then'](() => {
                                this['keypad']['start']()['then'](() => {
                                    this['lcd']['start']()['then'](() => {
                                        this['resize']('medium'), this['initPromise'] = this['asic']['start']()['then'](() => {
                                            this['asic']['onIdle']()['then'](() => {
                                                let _0x25cee2 = new _0xfcc481['StatefileManager']();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    }
                } ['errorHandler'](_0x403f41, _0xe18db7) {
                    switch (_0x403f41) {
                        case _0x13a06e['SEVERE']:
                            console['error'](_0xe18db7);
                            break;
                        case _0x13a06e['WARNING']:
                            console['warn'](_0xe18db7);
                            break;
                        case _0x13a06e['INFO']:
                        default:
                            console['log'](_0xe18db7);
                    }
                } ['initializeFromDefaultArray']() {
                    return new Promise((_0x5f0c61, _0x13a19e) => {
                        this['asic']['initializeMCU'](dolphinTestData), _0x5f0c61();
                    });
                } ['initializeFromStatefile'](_0x43f1df) {
                    return new Promise((_0xaf228, _0x32e229) => {
                        _0x56f082['Utilities']['loadROM'](this['settings']['ROMLocation'])['then'](_0x4495f5 => {
                            this['statefile'] = _0x4495f5;
                            let _0x1f19c9 = new _0xfcc481['StatefileManager']();
                            _0x1f19c9['setState']([this['asic'], this['lcd']], this['statefile'])['then'](() => {
                                _0xaf228();
                            })['catch'](_0x244a49 => {
                                console['log']('Could not load emulator state'), _0x32e229();
                            });
                        });
                    });
                } ['getOrSetStatefile']() {
                    return typeof dolphinTestData !== 'undefined' ? this['initializeFromDefaultArray']() : this['initializeFromStatefile']();
                } ['asicStateChanged'](_0x1a6efd) {
                    this['asicState'] = _0x1a6efd;
                } ['isInstanceRunning']() {
                    return this['asicState'] !== _0x9a0db6['ASICState']['STOPPED'] && this['asicState'] !== _0x9a0db6['ASICState']['PAUSED'];
                } ['getCalculatorDivElement']() {
                    return window['document']['getElementById'](this['divID']);
                } ['resize'](_0x2c30b8) {
                    _0x2c30b8 = _0x2c30b8['toLowerCase'](), _0x2c30b8 = _0x2c30b8['replace'](/\s/g, '');
                    let _0x30a44e = /[^a-z\d]/i;
                    if (!_0x30a44e['test'](_0x2c30b8)) {
                        let _0x30fe7f = document['getElementById'](this['divID']);
                        _0x56f082['Utilities']['removePrefixedClass'](_0x30fe7f, _0x5d3ddb), _0x2c30b8 !== undefined && _0x2c30b8 !== '' && _0x56f082['Utilities']['addClass'](_0x30fe7f, _0x5d3ddb + _0x2c30b8), this['lcd']['align']();
                    }
                } ['resetEmulator']() {
                    return new Promise((_0x3ae8f4, _0x4cf5f5) => {
                        this['deleteKeyHistory'](), this['deleteKeyPressed'](), this['asic']['stop']()['then'](() => {
                            this['asic']['start']()['then'](() => {
                                _0x3ae8f4();
                            }, () => {
                                _0x4cf5f5();
                            });
                        }, () => {
                            _0x4cf5f5();
                        });
                    });
                } ['disableAllKeys']() {
                    this['isInstanceRunning'](), this['keypad']['disableAllKeys']();
                } ['enableAllKeys']() {
                    this['isInstanceRunning'](), this['keypad']['enableAllKeys']();
                } ['disableKeys'](_0x3e13ac) {
                    return new Promise((_0xe60403, _0xe55bcf) => {
                        _0xe55bcf('disableKeys has not been implemented');
                    });
                } ['getKeyHistory']() {
                    return this['keypad']['getKeyPressHistory']();
                } ['hasBeenUsed']() {
                    return this['keypad']['getKeyPressHistory']()['length'] > 0x0;
                } ['deleteKeyPressed']() {
                    return this['keypad']['deleteKeyPressHistory'](), !![];
                } ['deleteKeyHistory']() {
                    this['keypad']['deleteKeyPressHistory']();
                } ['hideCalculator']() {
                    let _0x535efa = ![],
                        _0x26830b = 'hidden',
                        _0x1e597a = document['getElementById'](this['divID']);
                    return this['isInstanceRunning'](), _0x1e597a && (_0x1e597a['style']['visibility'] !== _0x26830b && (_0x1e597a['style']['visibility'] = _0x26830b, this['zIndexValue'] = document['defaultView']['getComputedStyle'](_0x1e597a, null)['getPropertyValue']('z-index'), _0x1e597a['style']['zIndex'] = '-1000', _0x535efa = !![])), _0x535efa;
                } ['showCalculator']() {
                    let _0x3fdc6c = 'visible',
                        _0x3fedb2 = document['getElementById'](this['divID']);
                    this['isInstanceRunning'](), _0x3fedb2 && (_0x3fedb2['style']['visibility'] !== _0x3fdc6c && (_0x3fedb2['style']['visibility'] = _0x3fdc6c, _0x3fedb2['style']['zIndex'] = this['zIndexValue']));
                } ['isInitialized']() {
                    return this['asicState'] !== _0x9a0db6['ASICState']['STOPPED'] && this['asicState'] !== _0x9a0db6['ASICState']['PAUSED'];
                } ['isBusy']() {
                    return this['asicState'] !== _0x9a0db6['ASICState']['IDLE'];
                } ['isInitializing']() {
                    return this['asicState'] === _0x9a0db6['ASICState']['INITIALIZING'];
                } ['getScreen']() {
                    return this['lcd']['getScreen']();
                } ['getFullPrecisionAnswer']() {
                    return '';
                } ['getDisplayedAnswer']() {
                    return '';
                } ['switchFaceplate'](_0x21b7c4) {} ['switchTheme'](_0x44e539) {
                    this['isInstanceRunning'](), this['keypad']['switchTheme'](_0x44e539, this['calcModel']);
                } ['killInstance']() {
                    return new Promise((_0x976b83, _0x5774d3) => {
                        let _0x1e9db2 = [this['lcd']['stop'](), this['keypad']['stop'](), this['asic']['stop']()];
                        Promise['all'](_0x1e9db2)['then'](() => {
                            _0x976b83();
                        });
                    });
                }
            }
            _0x235e3a['AbstractBaseEmulator'] = _0x59b578;
        }, {
            './ASIC': 0x12,
            './Statefiles': 0x1b,
            './Utilities': 0x1d
        }],
        0x14: [function(_0x4b2fb2, _0x5d64d0, _0x3ffb81) {
            'use strict';
            Object['defineProperty'](_0x3ffb81, '__esModule', {
                'value': !![]
            });
            class _0x1eaa25 {}
            _0x1eaa25['DEBUG_PORT_ADDRESSES'] = ![], _0x1eaa25['DEBUG_DISPLAY_ADDRESSES'] = ![], _0x1eaa25['DEBUG_MEMORY_ADDRESSES'] = ![], _0x1eaa25['DEBUG_ARBITRARY_ADDRESSES'] = ![], _0x1eaa25['DEBUG_PUSH_POP'] = ![], _0x1eaa25['SHOW_C_TRACE'] = ![], _0x1eaa25['DISPLAY_BUFFER_START_ADDRESS'] = 0xdcf4, _0x1eaa25['DISPLAY_BUFFER_END_ADDRESS'] = 0xdcf4 + 0x600, _0x1eaa25['PORT_BEGIN_ADDRESS'] = 0xf000, _0x1eaa25['PORT_END_ADDRESS'] = 0xfaff, _0x1eaa25['DEBUG_ARBITRARY_MEMORY_ADDRESS'] = 0xd851, _0x3ffb81['Constants'] = _0x1eaa25;
        }, {}],
        0x15: [function(_0x5235ac, _0x56e98b, _0x3b6d73) {
            'use strict';
            Object['defineProperty'](_0x3b6d73, '__esModule', {
                'value': !![]
            }), _0x3b6d73['ERROR_FACEPLATE_NOT_AVAILABLE'] = 'The requested faceplate is not available.', _0x3b6d73['ERROR_FACEPLATE_NOT_VALID'] = 'Unable to download the SVG. The SVG may be damaged or has a wrong format.', _0x3b6d73['ERROR_FACEPLATE_DOM_INSERTION'] = 'Unable to insert the SVG into the DOM.', _0x3b6d73['ERROR_FACEPLATE_SERVER_RESPONSE'] = 'Unable to connect with the server, or the requested faceplate is not available.', _0x3b6d73['ERROR_ROM_SERVER_RESPONSE'] = 'Unable to connect with the server, or the requested ROM file is not available.', _0x3b6d73['ERROR_STATEFILE_NOT_AVAILABLE'] = 'The requested state file is not available.', _0x3b6d73['ERROR_CONF_FILE_CONST'] = 'You must provide a valid JSON object or a path to a configuration file.', _0x3b6d73['ERROR_CONF_SETT_CONST'] = 'You must specify initial configuration settings.', _0x3b6d73['ERROR_SERVER_CONNECTION'] = 'Unable to connect with the server.', _0x3b6d73['ERROR_CONF_FILE_DAMAGED'] = 'The configuration file is damaged, or is not a JSON file.', _0x3b6d73['ERROR_CONF_FILE_NA'] = 'The configuration file cannot be found.', _0x3b6d73['ERROR_ROM_URL_NEEDED'] = 'You must specify a URL for the ROM file.', _0x3b6d73['ERROR_FACEPLATE_URL_NEEDED'] = 'You must specify a URL for the faceplates.', _0x3b6d73['ERROR_EXT_FOR_CONF_FILE'] = 'The configuration file extension must be ', _0x3b6d73['ERROR_EXT_FOR_ROM'] = 'The ROM extension must be ', _0x3b6d73['ERROR_EXT_FOR_FACEPLATE'] = 'The faceplate extension must be ', _0x3b6d73['ERROR_EXT_FOR_KEYMAPPING'] = 'The key mapping file extension must be ', _0x3b6d73['ERROR_KEY_MAPPING_DAMAGED'] = 'The key mapping file is damaged or not a valid key mapping file.', _0x3b6d73['WARN_KEY_HIST_BUFFER_TO_DEFAULT'] = 'Unable to read a key history buffer length value. A value of 100 will be set.', _0x3b6d73['ERROR_EMU_HIDDEN_RESIZE'] = 'The calculator cannot be resized when it is hidden.', _0x3b6d73['ERROR_EMU_HIDDEN_SWITCH_FACEPLATE'] = 'The faceplate cannot be switched when the calculator is hidden.', _0x3b6d73['ERROR_TI84P_RESIZE_VALID_VALUES'] = 'The calculator scale must be specified by its string name representation (small, medium, large or extra large).', _0x3b6d73['ERROR_EMU_RESIZE_VALID_VALUES'] = 'The calculator scale must be specified by its string name representation (small, medium, large or extra large).', _0x3b6d73['ERROR_RESIZE_CALCULATOR_LOADING'] = 'The calculator cannot be resized while it is loading.', _0x3b6d73['ERROR_TI30MV_RESIZE_VALID_VALUES'] = 'The calculator scale must be specified by its string name representation (small, medium, large or extra large).', _0x3b6d73['ERROR_TI108_RESIZE_VALID_VALUES'] = 'The calculator scale must be specified by its string name representation (small, medium, large or extra large).', _0x3b6d73['ERROR_EMU_HIDDEN_LOAD_STATE'] = 'A calculator state file cannot be loaded when the calculator is hidden.', _0x3b6d73['ERROR_EMU_HIDDEN_KEYS_ENABLED'] = 'The keys cannot be enabled when the calculator is hidden.', _0x3b6d73['ERROR_EMU_HIDDEN_KEYS_DISABLED'] = 'The keys cannot be disabled when the calculator is hidden.', _0x3b6d73['ERROR_EMU_WAS_USED'] = 'Cannot determine if the calculator has been used.', _0x3b6d73['ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA'] = 'Unable to connect with the server, or the requested key mapping file is not available.', _0x3b6d73['ERROR_NOT_VALID_URL'] = 'You must provide a valid URL beginning with http:// or https://', _0x3b6d73['ERROR_NOT_VALID_KEY_CONFIGURATION_URL'] = 'You must provide a non-empty JSON object or a valid URL beginning with http:// or https://', _0x3b6d73['ERROR_FILE_EXT_JSON'] = 'The key configuration file extension must be .json', _0x3b6d73['ERROR_FILE_NA_IN_SERVER'] = 'The requested file must be in the same server as the TI ExamCalc application', _0x3b6d73['ERROR_INVALID_KEY_CONFIGURATION_FILE'] = 'You must provide a valid JSON object or a path to a valid key configuration file.', _0x3b6d73['ERROR_BROWSER_NOT_SUPPORTED'] = 'This browser version may not support all TI ExamCalc functionality. It is recommended that you use a fully supported browser version. For more information visit education.ti.com', _0x3b6d73['ERROR_FILE_WRITER_API_NOT_SUPPORTED'] = 'This browser does not support the File Writer property.', _0x3b6d73['ERROR_FILE_NAME_IS_REQUESTED'] = 'You must provide a file name.', _0x3b6d73['ERROR_INVALID_FILE_NAME'] = 'Invalid filename. Valid characters are alpha-numeric, underscore, dash, dot and space.', _0x3b6d73['ERROR_INVALID_SVG_FORMAT'] = 'Invalid SVG. The SVG must be a non empty string.', _0x3b6d73['ERROR_FAIL_TO_DESTROY_INSTANCE'] = 'Unable to destroy the XXX ExamCalc instance.', _0x3b6d73['ERROR_NO_AVAILABLE_ANGLE'] = 'The specified angle mode XXX is not supported.', _0x3b6d73['ERROR_EMPTY_ANGLE'] = 'The angle mode has not been specified. XXX will be set as the default mode.', _0x3b6d73['ERROR_EMPTY_DISPLAY_MODE'] = 'The display mode has not been specified. XXX will be set as the default mode.', _0x3b6d73['ERROR_NO_AVAILABLE_DISPLAY_MODE'] = 'The specified display mode XXX is not supported.', _0x3b6d73['ERROR_CALCULATOR_DIV'] = 'The div with ID XXX does not exist in the DOM.', _0x3b6d73['ERROR_DESTROYED_EMULATOR'] = 'The emulator has been destroyed.';
        }, {}],
        0x16: [function(_0x5c6617, _0x5ae951, _0x457ff7) {
            'use strict';
            Object['defineProperty'](_0x457ff7, '__esModule', {
                'value': !![]
            });
            const _0x11ce2c = _0x5c6617('./ASIC');
            class _0x45b245 {
                constructor() {
                    this['screenListeners'] = [], this['keypadMetaStateListeners'] = [], this['stateListeners'] = [], this['state'] = _0x11ce2c['ASICState']['INITIALIZING'];
                } ['addScreenListener'](_0x371949) {
                    this['removeScreenListener'](_0x371949), this['screenListeners']['push'](_0x371949);
                } ['removeScreenListener'](_0x1b1642) {
                    this['screenListeners'] = this['screenListeners']['filter'](_0x4de68a => _0x4de68a !== _0x1b1642);
                } ['notifyScreenListeners'](_0x21aa7c) {
                    for (let _0x38d0ec of this['screenListeners']) {
                        _0x38d0ec['screenChanged'](_0x21aa7c);
                    }
                } ['notifyTopIconScreenListeners'](_0x29e661) {
                    for (let _0x2c0da7 of this['screenListeners']) {
                        _0x2c0da7['topIconsChanged'](_0x29e661);
                    }
                } ['addKeypadMetaStateListener'](_0x76b127) {
                    this['removeKeypadMetaStateListener'](_0x76b127), this['keypadMetaStateListeners']['push'](_0x76b127);
                } ['removeKeypadMetaStateListener'](_0x10bea1) {
                    this['keypadMetaStateListeners'] = this['keypadMetaStateListeners']['filter'](_0xdd5e31 => _0xdd5e31 !== _0x10bea1);
                } ['notifyKeypadMetaStateListeners'](_0x1477c2) {
                    this['keypadMetaState'] = _0x1477c2;
                    for (let _0x5ae83c of this['keypadMetaStateListeners']) {
                        _0x5ae83c['keypadMetaStateChanged'](_0x1477c2);
                    }
                } ['addStateListener'](_0x2a9d4d) {
                    this['removeStateListener'](_0x2a9d4d), this['stateListeners']['push'](_0x2a9d4d);
                } ['removeStateListener'](_0x516caf) {
                    this['stateListeners'] = this['stateListeners']['filter'](_0x243e2c => _0x243e2c !== _0x516caf);
                } ['notifyStateListeners'](_0x115184) {
                    this['state'] = _0x115184;
                    for (let _0x40af5d of this['stateListeners']) {
                        _0x40af5d['asicStateChanged'](_0x115184);
                    }
                } ['getASICState']() {
                    return new Promise((_0x39ef30, _0x5a63b7) => {
                        _0x39ef30(this['state']);
                    });
                } ['getKeypadMetaState']() {
                    return new Promise((_0x4f9af6, _0x28cc64) => {
                        _0x4f9af6(this['keypadMetaState']);
                    });
                }
            }
            _0x457ff7['GenericASIC'] = _0x45b245;
        }, {
            './ASIC': 0x12
        }],
        0x17: [function(_0x48dfd0, _0x5a79f1, _0x5daea3) {
            'use strict';
            Object['defineProperty'](_0x5daea3, '__esModule', {
                'value': !![]
            });
            const _0x17b55e = _0x48dfd0('./ErrorStrings'),
                _0x4ffc18 = _0x48dfd0('./ASIC'),
                _0x170c95 = _0x48dfd0('./Utilities'),
                _0x550ee3 = 'fill',
                _0x44896a = 'stroke',
                _0xe5dfed = 0x9,
                _0x1403d7 = 0x10,
                _0x169ca7 = 0x12,
                _0x49a1d4 = 0x11,
                _0x232d85 = 0x5b,
                _0x57c10b = -0x1,
                _0x153928 = 'ti_theme_',
                _0x541e8d = 0x3,
                _0x5bd7f5 = 0xc8,
                _0x582125 = 0x194;
            class _0x18722c {
                constructor(_0x114dc4, _0x39f80b, _0x173ddf) {
                    this['hasAKeyBeenPressed'] = ![], this['keyHistoryPointer'] = 0x0, this['keyHistBufferMaxLength'] = 0x0, this['hasBeenInitialized'] = ![], this['isOutOfFocus'] = ![], this['isSVGKeyPressed'] = ![], this['defaultNoStrokeColor'] = 'none', this['defaultNoFillColor'] = 'none', this['defaultTrFillColor'] = 'transparent', this['ErrorMessages'] = {
                        'BUTTON_LACKS_FILL': 'Button has no Fill Attribute',
                        'BUTTON_LACKS_STROKE_OR_IS_TR': 'Button has no Stroke Attribute or its Fill is Transparent'
                    }, this['allKeys'] = [], this['allPrimaryKeyCodes'] = [], this['allAltKeyCodes'] = [], this['allCodes'] = [], this['highlightClass'] = 'ti_highlight_keys', this['disableClass'] = 'ti_disabled_keys', this['currentDisabledKeys'] = [], this['disabledKeys'] = [], this['disabled2ndKeys'] = [], this['disabledAlphaKeys'] = [], this['calcMode'] = _0x4ffc18['KeypadMetaState']['NORMAL'], this['shouldAcceptInput'] = ![], this['useScancodes'] = ![], this['keyHistoryBuffer'] = [], this['DOMKeys'] = [], this['divId'] = _0x114dc4, this['settings'] = _0x39f80b, this['asic'] = _0x173ddf;
                } ['start']() {
                    let _0x4914ed = document['getElementById'](this['divId']);
                    return _0x170c95['Utilities']['loadSVG'](this['settings']['svgUrl'])['then'](_0x40e854 => {
                        this['svg'] = _0x40e854, _0x4914ed['appendChild'](_0x40e854), this['initKeysFromDOM'](), this['acceptInput'](!![]);
                    });
                } ['stop']() {
                    return new Promise((_0x5d378d, _0x2e8fba) => {
                        _0x5d378d();
                    });
                } ['reset']() {
                    return new Promise((_0x5deb58, _0x20639f) => {
                        _0x5deb58();
                    });
                } ['getState']() {
                    return null;
                } ['setState'](_0x599d82) {} ['updateKeyPressHistory'](_0x2675b6) {
                    this['keyHistBufferMaxLength'] > 0x0 && (this['keyHistoryBuffer'][this['keyHistoryPointer']] = _0x2675b6, this['keyHistoryPointer'] = (this['keyHistoryPointer'] + 0x1) % this['keyHistBufferMaxLength']);
                } ['deleteKeyPressHistory']() {
                    this['keyHistoryBuffer']['length'] = 0x0, this['keyHistoryPointer'] = 0x0;
                } ['getKeyPressHistory']() {
                    let _0x4a4d3f = [];
                    if (this['keyHistoryBuffer']['length'] === this['keyHistBufferMaxLength'] && this['keyHistoryPointer'] !== 0x0) {
                        let _0x1f6806 = this['keyHistoryPointer'],
                            _0x3d7216 = this['keyHistoryBuffer']['slice'](0x0, _0x1f6806),
                            _0xec18f2 = this['keyHistoryBuffer']['slice'](_0x1f6806);
                        return _0x4a4d3f['concat'](_0xec18f2, _0x3d7216);
                    }
                    return this['keyHistoryBuffer'];
                } ['mouseDownHandler'](_0x36a9f1) {
                    if (this['shouldAcceptInput']) {
                        if (_0x36a9f1['currentTarget'] instanceof Element) {
                            let _0x2e8c51 = _0x36a9f1['currentTarget'];
                            if (_0x36a9f1 instanceof TouchEvent || _0x36a9f1['buttons'] === 0x1 || _0x36a9f1['button'] === 0x0) {
                                if (!this['isSVGKeyPressed'] && this['isKeyEnabled'](_0x2e8c51['id'])) {
                                    this['div']['focus'](), _0x36a9f1['stopPropagation'](), _0x36a9f1['preventDefault'](), this['lastButtonPressed'] = _0x2e8c51, this['hasAKeyBeenPressed'] = !![], this['isSVGKeyPressed'] = !![], _0x170c95['Utilities']['addClass'](_0x2e8c51, this['highlightClass']);
                                    let _0x15861f = this['allKeys']['indexOf'](_0x2e8c51['id']);
                                    this['setKey'](this['allCodes'][_0x15861f]), this['updateKeyPressHistory'](_0x2e8c51['id']);
                                }
                            }
                        }
                    }
                } ['mouseUpHandler'](_0x53380c) {
                    if (_0x53380c['currentTarget'] instanceof Element) {
                        let _0x1013e8 = _0x53380c['currentTarget'];
                        if (this['isSVGKeyPressed'] && this['lastButtonPressed'] === _0x1013e8) {
                            _0x53380c['preventDefault']();
                            let _0x3dc901 = this['allKeys']['indexOf'](_0x1013e8['id']);
                            this['releaseKey'](this['allCodes'][_0x3dc901]), _0x170c95['Utilities']['removeClass'](_0x1013e8, this['highlightClass']), this['lastPressedKey'] = undefined, this['isSVGKeyPressed'] = ![], this['updateDisabledKeys']();
                        }
                    }
                } ['mouseOutHandler'](_0x5b3b1b) {
                    var _0x5a1d53 = _0x5b3b1b['currentTarget'] || _0x5b3b1b['target'] || _0x5b3b1b['srcElement'];
                    this['isSVGKeyPressed'] && this['lastButtonPressed'] === _0x5a1d53 && this['mouseUpHandler'](_0x5b3b1b);
                } ['mouseLeaveHandler'](_0x4f7084) {
                    var _0x596d42 = _0x4f7084['currentTarget'] || _0x4f7084['target'] || _0x4f7084['srcElement'];
                    this['isSVGKeyPressed'] && this['lastButtonPressed'] === _0x596d42 && this['mouseUpHandler'](_0x4f7084);
                } ['toggleEnableKeyButtons'](_0x39f0e, _0x202ab2) {
                    let _0x367f34 = -0x1,
                        _0x159b49 = function(_0x3a9c9b) {
                            return _0x39f0e['indexOf'](_0x3a9c9b) === _0x57c10b;
                        },
                        _0x506006 = function(_0x32b370) {
                            return _0x170c95['Utilities']['addClass'](document['getElementById'](_0x32b370), this['disableClass']), this['isSVGKeyPressed'] && (_0x170c95['Utilities']['removeClass'](document['getElementById'](_0x32b370), this['highlightClass']), this['userOnBlurHandler']()), !![];
                        },
                        _0x496438 = function(_0x551f37) {
                            var _0x9c6762 = this['allKeys']['indexOf'](_0x551f37);
                            return _0x170c95['Utilities']['removeClass'](document['getElementById'](_0x551f37), this['disableClass']), !![];
                        };
                    return _0x39f0e && (_0x202ab2 ? (_0x39f0e['forEach'](_0x496438, this), this['currentDisabledKeys'] = this['currentDisabledKeys']['filter'](_0x159b49, this)) : (_0x39f0e['forEach'](_0x506006, this), this['currentDisabledKeys'] = _0x39f0e), _0x367f34 = _0x39f0e['length']), _0x159b49 = undefined, _0x506006 = undefined, _0x496438 = undefined, _0x367f34;
                } ['initKeysFromDOM']() {
                    let _0x5d571e = this,
                        _0x5592cf = ![],
                        _0x3bd706 = ![],
                        _0x109dae;
                    this['hasBeenInitialized'] && this['finalize']();
                    this['keyHistoryBuffer'] = [], this['DOMKeys'] = [], this['allKeys'] = this['settings']['SVGKeys']['map'](function(_0x159127) {
                        return _0x159127['SVGKey'];
                    }), this['allPrimaryKeyCodes'] = this['settings']['SVGKeys']['map'](function(_0x42649f) {
                        return _0x42649f['keyCode'][0x0];
                    }), this['allAltKeyCodes'] = this['settings']['SVGKeys']['map'](function(_0x4032aa) {
                        return _0x4032aa['keyCode'][0x1];
                    }), this['allCodes'] = this['settings']['SVGKeys']['map'](function(_0x64419a) {
                        return _0x64419a['code'];
                    });
                    if (navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator['userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/Windows Phone/i) || ('ontouchstart' in window || navigator['msMaxTouchPoints'] > 0x0)) {
                        let _0x1f2192 = window['orientation'];
                        _0x109dae = function() {
                            window['orientation'] !== _0x1f2192 && (_0x1f2192 = window['orientation'], _0x5d571e['userOnBlurHandler']());
                        }, window['addEventListener']('resize', _0x109dae, ![]), window['addEventListener']('orientationchange', _0x109dae, ![]);
                    }
                    this['div'] = document['getElementById'](this['divId']), this['div']['onkeydown'] = function(_0x4b4192) {
                        _0x4b4192['preventDefault'](), _0x5d571e['userKeyDownHandler'](_0x4b4192);
                    }, this['div']['onkeyup'] = function(_0x1c703c) {
                        _0x1c703c['preventDefault'](), _0x5d571e['userKeyUpHandler'](_0x1c703c);
                    }, this['div']['onmousedown'] = function(_0xa94e99) {
                        _0xa94e99['preventDefault'](), _0x5d571e['div']['focus']();
                    }, this['div']['onblur'] = function(_0x3afc32) {
                        _0x5d571e['userOnBlurHandler']();
                    }, this['div']['oncontextmenu'] = function(_0x51b2ee) {
                        _0x51b2ee['preventDefault']();
                    };
                    let _0x20765b = function(_0x1a98a4) {
                            _0x5d571e['mouseDownHandler'](_0x1a98a4);
                        },
                        _0x39506d = function(_0x512fa0) {
                            _0x5d571e['mouseUpHandler'](_0x512fa0);
                        },
                        _0x5f34a2 = function(_0x51dc30) {
                            _0x51dc30['preventDefault']();
                        },
                        _0x5aafae = function(_0x89efd) {
                            _0x5d571e['mouseOutHandler'](_0x89efd);
                        },
                        _0x25e9b9 = function(_0x310844) {
                            _0x5d571e['mouseLeaveHandler'](_0x310844);
                        },
                        _0x1b3b1d = function(_0x2421b3) {
                            _0x2421b3['targetTouches']['length'] === 0x1 && _0x2421b3['preventDefault']();
                        },
                        _0x417984 = this['getInputPlatform']();
                    _0x417984 === 0x1 && ('ontouchleave' in window && (_0x5592cf = !![]), _0x3bd706 = !![]);
                    let _0x3c534a = this['allKeys']['length'];
                    for (let _0x2cbff2 = 0x0; _0x2cbff2 < _0x3c534a; _0x2cbff2 += 0x1) {
                        this['DOMKeys']['push'](document['getElementById'](this['allKeys'][_0x2cbff2]));
                        if (!this['DOMKeys'][_0x2cbff2]) throw new Error('SVG is missing Key ' + this['settings']['SVGKeys'][_0x2cbff2]['SVGKey']);
                        switch (_0x417984) {
                            case 0x0:
                                this['DOMKeys'][_0x2cbff2]['addEventListener']('MSPointerDown', _0x20765b), this['DOMKeys'][_0x2cbff2]['addEventListener']('MSPointerUp', _0x39506d), this['DOMKeys'][_0x2cbff2]['addEventListener']('MSPointerOut', _0x5aafae);
                                break;
                            case 0x1:
                                this['DOMKeys'][_0x2cbff2]['addEventListener']('touchstart', _0x20765b), this['DOMKeys'][_0x2cbff2]['addEventListener']('touchmove', _0x1b3b1d), this['DOMKeys'][_0x2cbff2]['addEventListener']('contextmenu', _0x5f34a2), this['DOMKeys'][_0x2cbff2]['addEventListener']('touchend', _0x39506d);
                                _0x5592cf && this['DOMKeys'][_0x2cbff2]['addEventListener']('touchleave', _0x5aafae);
                                if (!_0x3bd706) break;
                            default:
                                this['DOMKeys'][_0x2cbff2]['onmousedown'] = _0x20765b, this['DOMKeys'][_0x2cbff2]['onmouseup'] = _0x39506d;
                                if (navigator['userAgent']['indexOf']('Edge') !== -0x1) this['DOMKeys'][_0x2cbff2]['onmouseout'] = _0x5aafae;
                                else {
                                    let _0x4c4b53 = this['DOMKeys'][_0x2cbff2];
                                    _0x4c4b53['onmouseleave'] = _0x25e9b9;
                                }
                                break;
                        }
                    }
                    this['hasBeenInitialized'] = !![];
                } ['getInputPlatform']() {
                    var _0x42ca37;
                    if (window['navigator']['msPointerEnabled']) _0x42ca37 = 0x0;
                    else 'ontouchstart' in window ? _0x42ca37 = 0x1 : _0x42ca37 = 0x2;
                    return _0x42ca37;
                } ['finalize']() {
                    this['allKeys']['length'] = 0x0, this['allPrimaryKeyCodes']['length'] = 0x0, this['allAltKeyCodes']['length'] = 0x0, this['allCodes']['length'] = 0x0, this['DOMKeys']['length'] = 0x0, this['currentDisabledKeys']['length'] = 0x0, this['lastPressedKey'] = undefined, this['isSVGKeyPressed'] = ![], this['hasBeenInitialized'] = ![], this['calcMode'] = _0x4ffc18['KeypadMetaState']['NORMAL'];
                } ['userOnBlurHandler']() {
                    let _0x20a064 = 0x0,
                        _0x5f0939 = 0x0,
                        _0x124749 = 0x0,
                        _0x29f523 = ![],
                        _0x216f73, _0xf6c42 = document;
                    _0xf6c42['onhelp'] = function() {
                        return !![];
                    }, this['isOutOfFocus'] = !![];
                    this['lastPressedKey'] === undefined && (this['isOutOfFocus'] = ![]);
                    if ((this['lastButtonPressed'] || this['lastPressedKey']) && this['isSVGKeyPressed']) {
                        this['lastButtonPressed'] && (_0x216f73 = this['lastButtonPressed']['id'], _0x20a064 = this['allKeys']['indexOf'](_0x216f73), this['releaseKey'](this['allCodes'][_0x20a064]), _0x170c95['Utilities']['removeClass'](document['getElementById'](_0x216f73), this['highlightClass']), this['lastButtonPressed'] = undefined, this['isSVGKeyPressed'] = ![], this['updateDisabledKeys']());
                        if (this['lastPressedKey']) {
                            let _0x38dd80 = this['lastPressedKey'];
                            while (!_0x29f523 && _0x20a064 !== _0x57c10b) {
                                _0x20a064 = this['allPrimaryKeyCodes']['indexOf'](_0x38dd80['keyboardCode'], _0x5f0939);
                                if (_0x20a064 !== _0x57c10b && this['settings']['SVGKeys'][_0x20a064]['shiftKey'][0x0] === _0x38dd80['shiftKey']) {
                                    _0x216f73 = this['allKeys'][_0x20a064], _0x29f523 = !![];
                                    break;
                                }
                                if (_0x20a064 === this['allPrimaryKeyCodes']['length'] - 0x1) {
                                    _0x20a064 = _0x57c10b;
                                    break;
                                }
                                _0x5f0939 = _0x20a064 + 0x1;
                            }!_0x29f523 && (_0x124749 = 0x1, _0x5f0939 = 0x0, _0x20a064 = 0x0);
                            while (!_0x29f523 && _0x20a064 !== _0x57c10b) {
                                _0x20a064 = this['allAltKeyCodes']['indexOf'](_0x38dd80['keyboardCode'], _0x5f0939);
                                if (_0x20a064 !== _0x57c10b && this['settings']['SVGKeys'][_0x20a064]['shiftKey'][_0x124749] === _0x38dd80['shiftKey']) {
                                    _0x216f73 = this['allKeys'][_0x20a064], _0x29f523 = !![];
                                    break;
                                }
                                if (_0x20a064 === this['allPrimaryKeyCodes']['length'] - 0x1) {
                                    _0x20a064 = _0x57c10b;
                                    break;
                                }
                                _0x5f0939 = _0x20a064 + 0x1;
                            }
                            _0x20a064 !== _0x57c10b && _0x29f523 && (this['releaseKey'](this['allCodes'][_0x20a064]), _0x170c95['Utilities']['removeClass'](document['getElementById'](_0x216f73), this['highlightClass']), this['lastPressedKey'] = undefined, this['isSVGKeyPressed'] = ![], this['updateDisabledKeys']());
                        }
                    }
                } ['userKeyUpHandler'](_0x5d0a8d) {
                    this['isOutOfFocus'] = ![];
                    if (!this['isHidden']() && this['isSVGKeyPressed'] && _0x5d0a8d['keyCode'] !== _0xe5dfed) {
                        let _0x3a0e8d, _0x38174f = ![],
                            _0x40c120 = 0x0,
                            _0x2e6798 = 0x0,
                            _0x3f2dcd = this['browserKeymapping'](_0x5d0a8d);
                        (_0x3f2dcd['keyboardCode'] === _0x169ca7 || _0x3f2dcd['keyboardCode'] === _0x232d85 || _0x3f2dcd['keyboardCode'] === _0x1403d7) && (_0x3f2dcd = this['lastPressedKey']);
                        let _0x39abd4 = 0x0;
                        while (!_0x38174f && _0x39abd4 !== _0x57c10b) {
                            _0x39abd4 = this['allPrimaryKeyCodes']['indexOf'](_0x3f2dcd['keyboardCode'], _0x2e6798);
                            if (_0x39abd4 !== _0x57c10b && this['settings']['SVGKeys'][_0x39abd4]['shiftKey'][0x0] === _0x3f2dcd['shiftKey']) {
                                _0x3a0e8d = this['allKeys'][_0x39abd4], _0x38174f = !![];
                                break;
                            }
                            if (_0x39abd4 === this['allPrimaryKeyCodes']['length'] - 0x1) {
                                _0x39abd4 = _0x57c10b;
                                break;
                            }
                            _0x2e6798 = _0x39abd4 + 0x1;
                        }!_0x38174f && (_0x40c120 = 0x1, _0x2e6798 = 0x0, _0x39abd4 = 0x0);
                        while (!_0x38174f && _0x39abd4 !== _0x57c10b) {
                            _0x39abd4 = this['allAltKeyCodes']['indexOf'](_0x3f2dcd['keyboardCode'], _0x2e6798);
                            if (_0x39abd4 !== _0x57c10b && this['settings']['SVGKeys'][_0x39abd4]['shiftKey'][_0x40c120] === _0x3f2dcd['shiftKey']) {
                                _0x3a0e8d = this['allKeys'][_0x39abd4], _0x38174f = !![];
                                break;
                            }
                            if (_0x39abd4 === this['allPrimaryKeyCodes']['length'] - 0x1) {
                                _0x39abd4 = _0x57c10b;
                                break;
                            }
                            _0x2e6798 = _0x39abd4 + 0x1;
                        }
                        _0x38174f && this['lastPressedKey']['hasOwnProperty']('keyboardCode') && this['lastPressedKey']['keyboardCode'] === _0x3f2dcd['keyboardCode'] && this['lastPressedKey']['hasOwnProperty']('shiftKey') && this['lastPressedKey']['shiftKey'] === _0x3f2dcd['shiftKey'] && this['isKeyEnabled'](_0x3a0e8d) && (_0x5d0a8d['preventDefault'](), this['releaseKey'](this['allCodes'][_0x39abd4]), _0x170c95['Utilities']['removeClass'](document['getElementById'](_0x3a0e8d), this['highlightClass']), this['lastPressedKey'] = undefined, this['isSVGKeyPressed'] = ![], this['updateDisabledKeys']());
                    }
                } ['userKeyDownHandler'](_0x15ec39) {
                    if (this['shouldAcceptInput'] && !this['isOutOfFocus']) {
                        let _0x324ef9 = -0x2,
                            _0x45f1ad = 0x0,
                            _0x5d5834 = 0x0,
                            _0xa1c2d9 = this['browserKeymapping'](_0x15ec39),
                            _0x4065d2 = ![];
                        while (!_0x4065d2 && _0x324ef9 !== _0x57c10b) {
                            _0x324ef9 = this['allPrimaryKeyCodes']['indexOf'](_0xa1c2d9['keyboardCode'], _0x5d5834);
                            if (_0x324ef9 !== _0x57c10b && this['settings']['SVGKeys'][_0x324ef9]['shiftKey'][_0x45f1ad] === _0xa1c2d9['shiftKey'] && this['isKeyEnabled'](this['allKeys'][_0x324ef9])) {
                                _0x15ec39['preventDefault']();
                                let _0x15eef4 = document;
                                _0x15eef4['onhelp'] = function() {
                                    return ![];
                                }, !this['isSVGKeyPressed'] && !this['isHidden']() && (_0x15ec39['keyCode'] !== _0x1403d7 && _0x15ec39['keyCode'] !== _0xe5dfed && (this['lastPressedKey'] = _0xa1c2d9, _0x170c95['Utilities']['addClass'](document['getElementById'](this['allKeys'][_0x324ef9]), this['highlightClass']), this['setKey'](this['allCodes'][_0x324ef9]), this['updateKeyPressHistory'](this['allKeys'][_0x324ef9]), this['isSVGKeyPressed'] = !![], this['hasAKeyBeenPressed'] = !![], _0x4065d2 = !![]));
                            }
                            _0x324ef9 === this['allPrimaryKeyCodes']['length'] - 0x1 ? _0x324ef9 = -0x1 : _0x5d5834 = _0x324ef9 + 0x1;
                        }!_0x4065d2 && (_0x5d5834 = 0x0, _0x324ef9 = -0x2, _0x45f1ad = 0x1);
                        while (!_0x4065d2 && _0x324ef9 !== _0x57c10b) {
                            _0x324ef9 = this['allAltKeyCodes']['indexOf'](_0xa1c2d9['keyboardCode'], _0x5d5834);
                            if (_0x324ef9 !== _0x57c10b && this['settings']['SVGKeys'][_0x324ef9]['shiftKey'][_0x45f1ad] === _0xa1c2d9['shiftKey'] && this['isKeyEnabled'](this['allKeys'][_0x324ef9])) {
                                _0x15ec39['preventDefault']();
                                let _0x3d2bd4 = document;
                                _0x3d2bd4['onhelp'] = function() {
                                    return ![];
                                }, !this['isSVGKeyPressed'] && !this['isHidden']() && (_0x15ec39['keyCode'] !== _0x1403d7 && _0x15ec39['keyCode'] !== _0xe5dfed && (this['lastPressedKey'] = _0xa1c2d9, _0x170c95['Utilities']['addClass'](document['getElementById'](this['allKeys'][_0x324ef9]), this['highlightClass']), this['setKey'](this['allCodes'][_0x324ef9]), this['updateKeyPressHistory'](this['allKeys'][_0x324ef9]), this['isSVGKeyPressed'] = !![], this['hasAKeyBeenPressed'] = !![]));
                            }
                            _0x324ef9 === this['allPrimaryKeyCodes']['length'] - 0x1 ? _0x324ef9 = -0x1 : _0x5d5834 = _0x324ef9 + 0x1;
                        }
                    }
                } ['browserKeymapping'](_0x2374d8) {
                    let _0x59b61d = _0x2374d8['keyCode'],
                        _0x358aea = _0x2374d8['shiftKey'],
                        _0x425cdf = _0x2374d8['key'],
                        _0x23acf3 = _0x2374d8['location'];
                    switch (_0x59b61d) {
                        case 0x3b:
                            _0x59b61d = 0xba;
                            break;
                        case 0x3d:
                            _0x59b61d = 0xbb;
                            _0x23acf3 === _0x541e8d && (_0x358aea = ![]);
                            break;
                        case 0x60:
                            _0x59b61d = 0x30;
                            break;
                        case 0x61:
                            _0x59b61d = 0x31;
                            break;
                        case 0x62:
                            _0x59b61d = 0x32;
                            break;
                        case 0x63:
                            _0x59b61d = 0x33;
                            break;
                        case 0x64:
                            _0x59b61d = 0x34;
                            break;
                        case 0x65:
                            _0x59b61d = 0x35;
                            break;
                        case 0x66:
                            _0x59b61d = 0x36;
                            break;
                        case 0x67:
                            _0x59b61d = 0x37;
                            break;
                        case 0x68:
                            _0x59b61d = 0x38;
                            break;
                        case 0x69:
                            _0x59b61d = 0x39;
                            break;
                        case 0x6a:
                            _0x59b61d = 0x38, _0x358aea = !![];
                            break;
                        case 0x6b:
                            _0x59b61d = 0xbb, _0x358aea = !![];
                            break;
                        case 0x6d:
                            _0x59b61d = 0xbd;
                            break;
                        case 0x6e:
                            _0x59b61d = 0xbe;
                            break;
                        case 0x6f:
                            _0x59b61d = 0xbf;
                            break;
                        case 0xad:
                            _0x59b61d = 0xbd;
                            break;
                        case 0xbb:
                            _0x23acf3 === _0x541e8d && (_0x425cdf === 'U+002B' ? _0x358aea = !![] : _0x358aea = ![]);
                            break;
                        case 0xe0:
                            _0x59b61d = 0x5b;
                            break;
                        default:
                            break;
                    }
                    return {
                        'keyboardCode': _0x59b61d,
                        'shiftKey': _0x358aea
                    };
                } ['isKeyEnabled'](_0x46463b) {
                    return _0x46463b['includes']('_KEY_') && (this['currentDisabledKeys']['length'] === 0x0 || this['currentDisabledKeys']['toString']()['indexOf'](_0x46463b) === _0x57c10b);
                } ['getCodeIndex'](_0x33f919) {
                    return this['allCodes']['indexOf'](_0x33f919);
                } ['setKeyMapping']() {
                    let _0x3e4060 = [],
                        _0x3093fe = this;
                    if (!this['keyMappingFile']) throw new Error(_0x17b55e['ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA']);
                    if (this['keyMappingFile']['split']('.')['pop']() === this['keyMappingFileExtension']) {
                        let _0x48076e = new XMLHttpRequest(),
                            _0xe71dc = ![],
                            _0x1fc12d = setTimeout(function() {
                                _0xe71dc = !![], _0x48076e['abort']();
                                throw new Error(_0x17b55e['ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA']);
                            }, 0x1388);
                        _0x48076e['open']('GET', this['keyMappingFile'], !![]), _0x48076e['onreadystatechange'] = function() {
                            if (_0x48076e['readyState'] !== 0x4) return ![];
                            if (_0xe71dc) return ![];
                            clearTimeout(_0x1fc12d);
                            if (_0x48076e['status'] === 0xc8) {
                                try {
                                    _0x3e4060 = JSON['parse'](_0x48076e['responseText']);
                                } catch (_0xacbd92) {
                                    throw new Error(_0x17b55e['ERROR_KEY_MAPPING_DAMAGED']);
                                }
                                _0x3e4060['length'] > 0x0 && (_0x3e4060['forEach'](function(_0x983953) {
                                    let _0x660111 = this['getCodeIndex'](_0x983953['code']);
                                    if (_0x660111 !== -0x1) {
                                        for (let _0x59101d = 0x0; _0x59101d < 0x2; _0x59101d += 0x1) {
                                            let _0x9cb354 = this['allPrimaryKeyCodes']['indexOf'](_0x983953['keyCode'][_0x59101d]);
                                            _0x9cb354 !== -0x1 && this['settings']['SVGKeys'][_0x9cb354]['shiftKey'][0x0] === _0x983953['shiftKey'][0x0] && (delete this['allPrimaryKeyCodes'][_0x9cb354], delete this['settings']['SVGKeys'][_0x9cb354]['keyCode'][0x0], delete this['settings']['SVGKeys'][_0x9cb354]['shiftKey'][0x0]), _0x9cb354 = this['allAltKeyCodes']['indexOf'](_0x983953['keyCode'][_0x59101d]), _0x9cb354 !== -0x1 && this['settings']['SVGKeys'][_0x9cb354]['shiftKey'][0x1] === _0x983953['shiftKey'][0x1] && (delete this['allAltKeyCodes'][_0x9cb354], delete this['settings']['SVGKeys'][_0x9cb354]['keyCode'][0x1], delete this['settings']['SVGKeys'][_0x9cb354]['shiftKey'][0x1]);
                                        }
                                        this['settings']['SVGKeys'][_0x660111]['keyCode'] = _0x983953['keyCode'], this['allPrimaryKeyCodes'][_0x660111] = _0x983953['keyCode'][0x0], this['allAltKeyCodes'][_0x660111] = _0x983953['keyCode'][0x1], this['settings']['SVGKeys'][_0x660111]['shiftKey'] = _0x983953['shiftKey'];
                                    }
                                }, _0x3093fe), _0x3093fe['settings']['SVGKeys']['forEach'](function(_0x1f9dfc) {
                                    if (!_0x1f9dfc['keyCode'][0x0] && !_0x1f9dfc['keyCode'][0x1]) throw new Error('The key ' + _0x1f9dfc['SVGKey'] + ' doesn\'t have a keyboard code associated.');
                                }));
                            } else {
                                _0x3093fe = undefined;
                                if (_0x48076e['status'] === _0x582125) throw new Error(_0x17b55e['ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA']);
                            }
                            _0x3e4060 = undefined, _0x3093fe = undefined;
                        };
                        try {
                            _0x48076e['send'](undefined);
                        } catch (_0x19b925) {
                            throw new Error(_0x19b925['message']);
                        }
                    } else throw new Error(_0x17b55e['ERROR_EXT_FOR_KEYMAPPING'] + this['keyMappingFileExtension']);
                    return !![];
                } ['disableKeys'](_0x28a700) {
                    return new Promise((_0x52256b, _0x5cb69b) => {
                        var _0x3fcbd1 = typeof _0x28a700;
                        if (!this['isHidden']()) {
                            if (_0x3fcbd1 === 'string') this['readDisableKeyFile'](_0x28a700)['then'](() => {
                                _0x52256b();
                            }, () => {
                                _0x5cb69b();
                            });
                            else _0x3fcbd1 === 'object' ? (this['disableKeysAPI'](_0x28a700), _0x52256b()) : _0x5cb69b();
                        } else throw new Error(_0x17b55e['ERROR_EMU_HIDDEN_KEYS_DISABLED']);
                    });
                } ['disableKeysAPI'](_0xe20a9d) {
                    var _0x559455;
                    _0xe20a9d['keys'] && _0xe20a9d['hasOwnProperty']('secondKeys') && _0xe20a9d['hasOwnProperty']('alphaKeys') && _0xe20a9d['keys'] instanceof Array && _0xe20a9d['secondKeys'] instanceof Array && _0xe20a9d['alphaKeys'] instanceof Array && (_0x559455 = function(_0x36207b) {
                        var _0x1cfeb6 = this['getCodeIndex'](_0x36207b);
                        if (_0x1cfeb6 !== _0x57c10b) return this['allKeys'][_0x1cfeb6];
                        throw new Error(_0x17b55e['ERROR_INVALID_KEY_CONFIGURATION_FILE']);
                    }, this['disabledKeys'] = _0xe20a9d['keys']['map'](_0x559455, this), this['disabled2ndKeys'] = _0xe20a9d['secondKeys']['map'](_0x559455, this), this['disabledAlphaKeys'] = _0xe20a9d['alphaKeys']['map'](_0x559455, this), this['toggleEnableKeyButtons'](this['allKeys'], !![]), this['calcMode'] !== _0x4ffc18['KeypadMetaState']['SECOND'] && this['calcMode'] !== _0x4ffc18['KeypadMetaState']['ALPHA'] && this['toggleEnableKeyButtons'](this['disabledKeys'], ![]), this['calcMode'] === _0x4ffc18['KeypadMetaState']['SECOND'] && this['toggleEnableKeyButtons'](this['disabled2ndKeys'], ![]), this['calcMode'] === _0x4ffc18['KeypadMetaState']['ALPHA'] && this['toggleEnableKeyButtons'](this['disabledAlphaKeys'], ![]));
                } ['readDisableKeyFile'](_0x44ad80) {
                    return new Promise((_0x54c4dd, _0xc620a7) => {
                        _0x44ad80 = _0x44ad80['trim']();
                        let _0x17c485 = window['location']['host'],
                            _0x28cdab = _0x44ad80['split']('/');
                        if (_0x44ad80['indexOf']('http://') === 0x0 || _0x44ad80['indexOf']('https://') === 0x0) {
                            if (_0x44ad80['split']('.')['pop']() === 'json') {
                                if (_0x28cdab[0x2] === _0x17c485) {
                                    let _0x4d1a6f = new XMLHttpRequest(),
                                        _0x32d4d5 = this;
                                    _0x4d1a6f['addEventListener']('load', function() {
                                        if (_0x4d1a6f['status'] === _0x5bd7f5) {
                                            try {
                                                let _0x41ec65 = JSON['parse'](_0x4d1a6f['responseText']);
                                                _0x32d4d5['disableKeysAPI'](_0x41ec65);
                                            } catch (_0x31ce21) {
                                                _0x32d4d5['enableAllKeys'](), _0x32d4d5 = undefined;
                                                throw new Error(_0x17b55e['ERROR_INVALID_KEY_CONFIGURATION_FILE']);
                                            }
                                            _0x32d4d5 = undefined, _0x54c4dd();
                                        } else {
                                            _0x32d4d5 = undefined;
                                            throw new Error(_0x17b55e['ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA']);
                                        }
                                    }), _0x4d1a6f['open']('GET', _0x44ad80 + '?r=' + Math['random'](), ![]), _0x4d1a6f['send']();
                                } else throw new Error(_0x17b55e['ERROR_FILE_NA_IN_SERVER']);
                            } else throw new Error(_0x17b55e['ERROR_FILE_EXT_JSON']);
                        } else throw new Error(_0x17b55e['ERROR_NOT_VALID_KEY_CONFIGURATION_URL']);
                    });
                } ['enableAllKeys']() {
                    if (!this['isHidden']()) this['disabledKeys']['length'] = 0x0, this['disabled2ndKeys']['length'] = 0x0, this['disabledAlphaKeys']['length'] = 0x0, this['toggleEnableKeyButtons'](this['allKeys'], !![]);
                    else throw new Error(_0x17b55e['ERROR_EMU_HIDDEN_KEYS_ENABLED']);
                } ['disableAllKeys']() {
                    if (!this['isHidden']()) this['toggleEnableKeyButtons'](this['allKeys'], ![]);
                    else throw new Error(_0x17b55e['ERROR_EMU_HIDDEN_KEYS_DISABLED']);
                } ['getMetaState']() {
                    return this['asic']['getKeypadMetaState']();
                } ['updateDisabledKeys']() {
                    this['getMetaState']()['then'](_0x5a629c => {
                        if (!this['isHidden']()) {
                            if (this['calcMode'] !== _0x5a629c) {
                                this['toggleEnableKeyButtons'](this['currentDisabledKeys'], !![]);
                                if (_0x5a629c === _0x4ffc18['KeypadMetaState']['SECOND']) this['toggleEnableKeyButtons'](this['disabled2ndKeys'], ![]);
                                else _0x5a629c === _0x4ffc18['KeypadMetaState']['ALPHA'] ? this['toggleEnableKeyButtons'](this['disabledAlphaKeys'], ![]) : this['toggleEnableKeyButtons'](this['disabledKeys'], ![]);
                                this['calcMode'] = _0x5a629c;
                            }
                        }
                    });
                } ['setKey'](_0x2cf79a) {
                    return this['asic']['keyDown'](_0x2cf79a);
                } ['setKeySVG'](_0xb2f6a2) {
                    let _0x2bb3f6 = 0x0;
                    return _0x2bb3f6 = this['allCodes'][this['allKeys']['indexOf'](_0xb2f6a2)], this['setKey'](_0x2bb3f6);
                } ['releaseKey'](_0x1ffc30) {
                    return this['asic']['keyUp'](_0x1ffc30);
                } ['acceptInput'](_0x552199) {
                    this['shouldAcceptInput'] = _0x552199;
                } ['getAcceptInput']() {
                    return this['shouldAcceptInput'];
                } ['switchTheme'](_0x4c41b9, _0x5e96d5) {
                    var _0x8dcbc8 = /[^a-z\d]/i;
                    if (!_0x8dcbc8['test'](_0x4c41b9)) {
                        var _0x2ee78d = document['getElementById'](_0x5e96d5),
                            _0x5676a8 = document['getElementById']('display');
                        _0x170c95['Utilities']['removePrefixedClass'](_0x5676a8, _0x153928), _0x170c95['Utilities']['removePrefixedClass'](_0x2ee78d, _0x153928), _0x4c41b9 !== undefined && _0x4c41b9 !== '' && (_0x4c41b9 = _0x153928 + _0x4c41b9, _0x170c95['Utilities']['addClass'](_0x2ee78d, _0x4c41b9), _0x170c95['Utilities']['addClass'](_0x5676a8, _0x4c41b9));
                    }
                } ['isHidden']() {
                    var _0x30c2e7 = !![],
                        _0x2e2558 = document['getElementById'](this['divId']),
                        _0x3ba653 = window['getComputedStyle'](_0x2e2558);
                    return _0x3ba653['display'] !== 'none' && (_0x3ba653['visibility'] !== 'hidden' && (_0x30c2e7 = ![])), _0x30c2e7;
                }
            }
            _0x5daea3['GenericKeypad'] = _0x18722c;
            var _0x2e026b;
            (function(_0x2d5e33) {
                _0x2d5e33[_0x2d5e33['KeyDown'] = 0x0] = 'KeyDown', _0x2d5e33[_0x2d5e33['KeyUp'] = 0x1] = 'KeyUp';
            }(_0x2e026b || (_0x2e026b = {})));
            class _0x39f652 {
                constructor(_0x219bea, _0x419a38) {
                    this['eventType'] = _0x219bea, this['keyCode'] = _0x419a38;
                } ['getEventType']() {
                    return this['eventType'];
                } ['getKeyCode']() {
                    return this['keyCode'];
                }
            }
            class _0x153d41 {
                constructor() {
                    this['keyCurrentlyHeldDown'] = 0x0, this['potentialAutoRepeatKeyCode'] = 0x0, this['autoRepeatTimer'] = -0x1, this['autoRepeatInterval'] = 0x1f4, this['clearQueue']();
                } ['clearQueue']() {
                    this['keyEvents'] = [];
                } ['isQueueEmpty']() {
                    return this['keyEvents']['length'] === 0x0;
                } ['isPotentialAutoRepeat']() {
                    return this['potentialAutoRepeatKeyCode'] !== 0x0;
                } ['addKeyDown'](_0x17481d) {
                    this['keyEvents']['push'](new _0x39f652(_0x2e026b['KeyDown'], _0x17481d));
                } ['addKeyUp'](_0x4e7014) {
                    this['keyEvents']['push'](new _0x39f652(_0x2e026b['KeyUp'], _0x4e7014));
                } ['getNextKeyCode']() {
                    let _0x192a4a = this['keyEvents']['shift'](),
                        _0x2fd1fe = 0x0;
                    if (_0x192a4a !== undefined) {
                        _0x2fd1fe = _0x192a4a['getKeyCode']();
                        if (_0x192a4a['getEventType']() === _0x2e026b['KeyUp']) this['keyCurrentlyHeldDown'] = 0x0, this['autoRepeatInterval'] = 0x1f4, _0x192a4a = this['keyEvents']['shift'](), _0x2fd1fe = 0x0, _0x192a4a !== undefined && (_0x192a4a['getEventType']() !== _0x2e026b['KeyDown'] ? console['log']('ERROR: Why is there a keyUp after a keyUp!') : _0x2fd1fe = _0x192a4a['getKeyCode'](), _0x2fd1fe !== 0x0 && (this['keyCurrentlyHeldDown'] = _0x2fd1fe));
                        else _0x2fd1fe !== 0x0 && (this['keyCurrentlyHeldDown'] = _0x2fd1fe);
                    }
                    return _0x2fd1fe;
                } ['notifyKeyCanRepeat']() {
                    this['keyCurrentlyHeldDown'] !== 0x0 && (this['potentialAutoRepeatKeyCode'] = this['keyCurrentlyHeldDown'], this['autoRepeatTimer'] !== -0x1 && window['clearTimeout'](this['autoRepeatTimer']), this['autoRepeatTimer'] = window['setTimeout'](() => {
                        this['keyCurrentlyHeldDown'] === this['potentialAutoRepeatKeyCode'] && !this['isKeyUpInQueue']() && this['addKeyDown'](this['keyCurrentlyHeldDown']), this['potentialAutoRepeatKeyCode'] = 0x0;
                    }, this['autoRepeatInterval']), this['autoRepeatInterval'] = 0x7d);
                } ['isKeyUpInQueue']() {
                    if (this['keyEvents']['length'] === 0x0) return ![];
                    else
                        for (var _0x5a33d6 of this['keyEvents']) {
                            if (_0x5a33d6['getEventType']() === _0x2e026b['KeyUp']) return !![];
                        }
                    return ![];
                }
            }
            _0x5daea3['KeyEventProcessor'] = _0x153d41;
        }, {
            './ASIC': 0x12,
            './ErrorStrings': 0x15,
            './Utilities': 0x1d
        }],
        0x18: [function(_0x242fc6, _0x5b4f13, _0x30b316) {
            'use strict';
            Object['defineProperty'](_0x30b316, '__esModule', {
                'value': !![]
            });
            const _0x5bb64d = 'display';
            class _0x50f85c {
                constructor(_0x32d9b5, _0x5eb118, _0x3b9edc, _0x5b6940) {
                    this['created'] = ![], this['SCREEN_SIZE'] = 0x600, this['INDICARTORS_STATUS_LENGTH'] = 0x3, this['calcModel'] = _0x32d9b5, this['calcDivId'] = _0x5eb118, this['width'] = _0x3b9edc, this['height'] = _0x5b6940, this['lastScreenData'] = new Uint8Array(this['SCREEN_SIZE']), this['topIconsStatus'] = 0x0;
                } ['saveScreenData'](_0x314002) {
                    this['lastScreenData'] = _0x314002;
                } ['saveTopIconsData'](_0xb9cdd4) {
                    this['topIconsStatus'] = _0xb9cdd4;
                } ['getScreen']() {
                    return document['getElementById'](_0x5bb64d)['toDataURL']();
                } ['start']() {
                    return new Promise((_0x3e3a91, _0x790746) => {
                        this['create'](), this['created'] && (this['screenChanged'](this['lastScreenData']), this['topIconsChanged'](this['topIconsStatus'])), _0x3e3a91();
                    });
                } ['stop']() {
                    return new Promise((_0x398eb6, _0x5b0939) => {
                        _0x398eb6();
                    });
                } ['reset']() {
                    return new Promise((_0x24bd15, _0x447144) => {
                        _0x24bd15();
                    });
                } ['getState']() {
                    let _0x15d9c1 = this['SCREEN_SIZE'],
                        _0x272853 = _0x15d9c1 + this['INDICARTORS_STATUS_LENGTH'],
                        _0x40d40f = new Uint8Array(_0x272853);
                    return typeof this['lastScreenData'] === 'undefined' && (this['lastScreenData'] = new Uint8Array(this['SCREEN_SIZE'])), _0x40d40f['set'](this['lastScreenData']), _0x40d40f[_0x15d9c1++] = this['topIconsStatus'] & 0xff, _0x40d40f[_0x15d9c1++] = this['topIconsStatus'] >> 0x8 & 0xff, _0x40d40f[_0x15d9c1] = this['topIconsStatus'] >> 0x10 & 0xff, _0x40d40f;
                } ['setState'](_0x2f664c) {
                    if (typeof _0x2f664c !== 'undefined') {
                        let _0x3ff60c = _0x2f664c['length'] - this['INDICARTORS_STATUS_LENGTH'],
                            _0x2a7b62 = _0x2f664c[_0x3ff60c++] | _0x2f664c[_0x3ff60c++] << 0x8 | _0x2f664c[_0x3ff60c] << 0x10;
                        this['lastScreenData'] = _0x2f664c['subarray'](0x0, _0x2f664c['length'] - this['INDICARTORS_STATUS_LENGTH']);
                    }
                } ['create']() {
                    if (!this['created']) {
                        let _0x3ad71b = document['createElement']('div'),
                            _0x501741 = document['createElement']('canvas'),
                            _0x4d754e = document['getElementById'](this['calcModel']),
                            _0x332a7b = document['getElementById'](this['calcDivId']),
                            _0x293e77 = document['querySelectorAll']('*[id^=\"' + this['calcModel'] + '_CALCSCREEN\"]'),
                            _0x29d56, _0x2e199a, _0x279c7a, _0x321cdc;
                        if (_0x4d754e !== null && _0x293e77['length'] > 0x0 && _0x332a7b !== null) {
                            _0x321cdc = _0x4d754e['getAttribute']('viewBox')['split'](/\s*,\s*|\s+/);
                            while (_0x332a7b['firstChild']) {
                                _0x332a7b['removeChild'](_0x332a7b['firstChild']);
                            }
                            _0x332a7b['insertBefore'](_0x4d754e, _0x332a7b['firstChild']), _0x332a7b['className'] = 'calculatorDiv', _0x332a7b['tabIndex'] = 0x0, _0x3ad71b['id'] = 'displayDiv', _0x3ad71b['className'] = 'displayDiv', _0x332a7b['appendChild'](_0x3ad71b), _0x501741['id'] = 'display', _0x501741['className'] = 'display', _0x501741['width'] = this['width'], _0x501741['height'] = this['height'], _0x3ad71b['appendChild'](_0x501741), this['canvasContext'] = _0x501741['getContext']('2d'), this['align'](), this['created'] = !![];
                        }
                    }
                } ['align']() {
                    if (this['created']) {
                        let _0x4fc649 = document['getElementById'](this['calcModel']),
                            _0x3a47e7 = document['getElementById']('displayDiv'),
                            _0x26fb20 = document['querySelectorAll']('*[id^=\"' + this['calcModel'] + '_CALCSCREEN\"] rect');
                        if (_0x4fc649 !== null && _0x26fb20['length'] > 0x0) {
                            let _0x78eafd = _0x4fc649['getAttribute']('viewBox')['split'](/\s*,\s*|\s+/),
                                _0x526a58 = parseFloat(_0x78eafd[0x0]),
                                _0x3d9df4 = parseFloat(_0x78eafd[0x1]),
                                _0xb5a68b = parseFloat(_0x78eafd[0x2]),
                                _0x332503 = parseFloat(_0x78eafd[0x3]),
                                _0x4b925a = _0x26fb20[0x0],
                                _0x64bf84 = _0x4b925a['x']['baseVal']['value'] + 0x2,
                                _0x41f9a2 = _0x4b925a['y']['baseVal']['value'] + 0x2,
                                _0x5f0a55 = _0x4b925a['width']['baseVal']['value'] - 0x4,
                                _0x22440a = _0x4b925a['height']['baseVal']['value'] - 0x4;
                            _0x3a47e7['style']['left'] = (_0x64bf84 - _0x526a58) / _0xb5a68b * 0x64 + '%', _0x3a47e7['style']['top'] = (_0x41f9a2 - _0x3d9df4) / _0x332503 * 0x64 + '%', _0x3a47e7['style']['width'] = _0x5f0a55 / _0xb5a68b * 0x64 + '%', _0x3a47e7['style']['height'] = _0x22440a / _0x332503 * 0x64 + '%';
                        }
                    }
                }
            }
            _0x30b316['GenericLCD'] = _0x50f85c;
        }, {}],
        0x19: [function(_0xd3b6dc, _0x3869eb, _0xc6d0bd) {
            'use strict';
            Object['defineProperty'](_0xc6d0bd, '__esModule', {
                'value': !![]
            });
            const _0x4b5c54 = _0xd3b6dc('./GenericLCD'),
                _0x417a7f = 0xc0,
                _0x4edfea = 0x40,
                _0x135662 = 0x8,
                _0x3af4a5 = 0x2,
                _0x391ae6 = 0x2,
                _0x19f643 = _0x135662 * _0x3af4a5,
                _0xa31a52 = _0x417a7f * _0x3af4a5,
                _0x193bb9 = (_0x4edfea + _0x135662) * _0x3af4a5,
                _0x4b2556 = 0x13,
                _0x540e09 = new Uint8Array([0x7f, 0x41, 0x5f, 0x5f, 0x7f, 0x7b, 0x41, 0x7f]),
                _0x1bbdc2 = new Uint8Array([0x3a, 0x2a, 0x2e, 0x0, 0x3e, 0x4, 0x8, 0x3e, 0x0, 0x3e, 0x22, 0x22, 0x1c]),
                _0x55697e = new Uint8Array([0x3e, 0xa, 0xa, 0x0, 0x3e, 0x0, 0x36, 0x8, 0x36]),
                _0x2cc049 = new Uint8Array([0x3e, 0x8, 0x8, 0x3e]),
                _0x9611ee = new Uint8Array([0x3e, 0x2a, 0x2a, 0x14]),
                _0xd0712 = new Uint8Array([0x1c, 0x22, 0x22, 0x1c]),
                _0x322ef3 = new Uint8Array([0x7f, 0x41, 0x5f, 0x5f, 0x7f, 0x45, 0x55, 0x51, 0x7f]),
                _0x486342 = new Uint8Array([0x2e, 0x2a, 0x3a, 0x0, 0x3e, 0x22, 0x22, 0x0, 0x3e]),
                _0x243c8b = new Uint8Array([0x3e, 0x2a, 0x2a, 0x0, 0x3e, 0x4, 0x8, 0x3e, 0x0, 0x1c, 0x22, 0x2a, 0x3a]),
                _0x4b68d6 = new Uint8Array([0x3e, 0x22, 0x22, 0x1c, 0x0, 0x3e, 0x2a, 0x2a]),
                _0x4c6f28 = new Uint8Array([0x1c, 0x22, 0x2a, 0x3a]),
                _0x3039bc = new Uint8Array([0x3e, 0xa, 0x1a, 0x2e, 0x0, 0x3c, 0xa, 0xa, 0x3c, 0x0, 0x3e, 0x22, 0x22, 0x1c]),
                _0x172ada = new Uint8Array([0x7f, 0x41, 0x5f, 0x5f, 0x7f, 0x55, 0x55, 0x41, 0x7f]),
                _0x4787eb = new Uint8Array([0x1c, 0x36, 0x22, 0x22, 0x22, 0x2a, 0x2a, 0x22, 0x3e]),
                _0x23b57f = new Uint8Array([0x63, 0x55, 0x69, 0x55, 0x63]),
                _0x4bceee = new Uint8Array([0x8, 0x1c, 0x3e]),
                _0x48f354 = new Uint8Array([0x8, 0xc, 0xe, 0xc, 0x8]),
                _0x1cb651 = new Uint8Array([0x8, 0x18, 0x38, 0x18, 0x8]),
                _0x243e06 = new Uint8Array([0x3e, 0x1c, 0x8]);
            class _0x399268 extends _0x4b5c54['GenericLCD'] {
                constructor(_0x5d6426, _0x176547) {
                    super(_0x5d6426, _0x176547, _0xa31a52, _0x193bb9), this['cachedIconsStatus'] = 0x0, this['x_l1'] = 0x0, this['x_2nd'] = this['x_l1'] + (_0x540e09['length'] + 0x3) * _0x3af4a5, this['x_fix'] = this['x_2nd'] + (_0x1bbdc2['length'] + 0x4) * _0x3af4a5, this['x_h'] = this['x_fix'] + (_0x55697e['length'] + 0x4) * _0x3af4a5, this['x_b'] = this['x_h'] + (_0x2cc049['length'] + 0x1) * _0x3af4a5, this['x_o'] = this['x_b'] + (_0x9611ee['length'] + 0x1) * _0x3af4a5, this['x_l2'] = this['x_o'] + (_0xd0712['length'] + 0x8) * _0x3af4a5, this['x_sci'] = this['x_l2'] + (_0x322ef3['length'] + 0x2) * _0x3af4a5, this['x_eng'] = this['x_sci'] + (_0x486342['length'] + 0x1) * _0x3af4a5, this['x_de'] = this['x_eng'] + (_0x243c8b['length'] + 0x3) * _0x3af4a5, this['x_g'] = this['x_de'] + (_0x4b68d6['length'] + 0x1) * _0x3af4a5, this['x_rad'] = this['x_g'] + (_0x4c6f28['length'] + 0x1) * _0x3af4a5, this['x_l3'] = this['x_rad'] + (_0x3039bc['length'] + 0x2) * _0x3af4a5, this['x_battery'] = this['x_l3'] + (_0x172ada['length'] + 0x8) * _0x3af4a5, this['x_busy'] = this['x_battery'] + (_0x4787eb['length'] + 0x5) * _0x3af4a5, this['x_left_arrow'] = this['x_busy'] + (_0x23b57f['length'] + 0x4) * _0x3af4a5, this['x_up_arrow'] = this['x_left_arrow'] + (_0x4bceee['length'] + 0x2) * _0x3af4a5, this['x_down_arrow'] = this['x_up_arrow'] + (_0x48f354['length'] + 0x2) * _0x3af4a5, this['x_right_arrow'] = this['x_down_arrow'] + (_0x1cb651['length'] + 0x2) * _0x3af4a5;
                } ['screenChanged'](_0x3b24ec) {
                    super['saveScreenData'](_0x3b24ec), this['canvasContext']['fillStyle'] = 'white', this['canvasContext']['fillRect'](0x0, _0x19f643, this['width'], this['height']), this['canvasContext']['fillStyle'] = '#000000';
                    let _0x4d7a92 = 0x0,
                        _0x3150d5 = _0x19f643;
                    for (let _0x5750dc = 0x0; _0x5750dc < _0x417a7f * _0x4edfea / 0x8; _0x5750dc++) {
                        let _0x3d6c75 = _0x3b24ec[_0x5750dc];
                        for (let _0x233e99 = 0x0; _0x233e99 < 0x8; _0x233e99++) {
                            let _0x4041a8 = _0x3d6c75 >> _0x233e99 & 0x1;
                            _0x4041a8 === 0x1 && this['canvasContext']['fillRect'](_0x4d7a92, _0x3150d5, _0x391ae6, _0x391ae6), _0x3150d5 += _0x391ae6, _0x3150d5 >= this['height'] && (_0x3150d5 = _0x19f643, _0x4d7a92 += _0x391ae6);
                        }
                    }
                } ['topIconsChanged'](_0x12c47b) {
                    super['saveTopIconsData'](_0x12c47b);
                    let _0x52ec6a = _0x12c47b ^ this['cachedIconsStatus'];
                    if (_0x52ec6a !== 0x0) {
                        for (let _0x29c8b5 = 0x0; _0x29c8b5 < _0x4b2556; _0x29c8b5++) {
                            (_0x52ec6a >> _0x29c8b5 & 0x1) === 0x1 && this['updateIcon'](_0x29c8b5, (_0x12c47b >> _0x29c8b5 & 0x1) === 0x1 ? !![] : ![]);
                        }
                        this['cachedIconsStatus'] = _0x12c47b;
                    }
                } ['updateIcon'](_0x14a0c3, _0x302f8d) {
                    switch (_0x14a0c3) {
                        case 0x0:
                            this['drawIcon'](this['x_l1'], 0x0, _0x540e09, _0x302f8d);
                            break;
                        case 0x1:
                            this['drawIcon'](this['x_2nd'], 0x0, _0x1bbdc2, _0x302f8d);
                            break;
                        case 0x2:
                            this['drawIcon'](this['x_fix'], 0x0, _0x55697e, _0x302f8d);
                            break;
                        case 0x3:
                            this['drawIcon'](this['x_h'], 0x0, _0x2cc049, _0x302f8d);
                            break;
                        case 0x4:
                            this['drawIcon'](this['x_b'], 0x0, _0x9611ee, _0x302f8d);
                            break;
                        case 0x5:
                            this['drawIcon'](this['x_o'], 0x0, _0xd0712, _0x302f8d);
                            break;
                        case 0x6:
                            this['drawIcon'](this['x_l2'], 0x0, _0x322ef3, _0x302f8d);
                            break;
                        case 0x7:
                            this['drawIcon'](this['x_sci'], 0x0, _0x486342, _0x302f8d);
                            break;
                        case 0x8:
                            this['drawIcon'](this['x_eng'], 0x0, _0x243c8b, _0x302f8d);
                            break;
                        case 0x9:
                            this['drawIcon'](this['x_de'], 0x0, _0x4b68d6, _0x302f8d);
                            break;
                        case 0xa:
                            this['drawIcon'](this['x_g'], 0x0, _0x4c6f28, _0x302f8d);
                            break;
                        case 0xb:
                            this['drawIcon'](this['x_rad'], 0x0, _0x3039bc, _0x302f8d);
                            break;
                        case 0xc:
                            this['drawIcon'](this['x_l3'], 0x0, _0x172ada, _0x302f8d);
                            break;
                        case 0xd:
                            this['drawIcon'](this['x_battery'], 0x0, _0x4787eb, _0x302f8d);
                            break;
                        case 0xe:
                            this['drawIcon'](this['x_busy'], 0x0, _0x23b57f, _0x302f8d);
                            break;
                        case 0xf:
                            this['drawIcon'](this['x_left_arrow'], 0x0, _0x4bceee, _0x302f8d);
                            break;
                        case 0x10:
                            this['drawIcon'](this['x_up_arrow'], 0x0, _0x48f354, _0x302f8d);
                            break;
                        case 0x11:
                            this['drawIcon'](this['x_down_arrow'], 0x0, _0x1cb651, _0x302f8d);
                            break;
                        case 0x12:
                            this['drawIcon'](this['x_right_arrow'], 0x0, _0x243e06, _0x302f8d);
                            break;
                        default:
                            console['log']('ERROR icon index does Not exists! idx=' + _0x14a0c3);
                            break;
                    }
                } ['drawIcon'](_0x348b87, _0x1021fd, _0x40ea2e, _0x5e295e) {
                    if (_0x5e295e) {
                        this['canvasContext']['fillStyle'] = '#000000';
                        let _0x5d975f = _0x1021fd;
                        for (let _0x3818a0 = 0x0; _0x3818a0 < _0x40ea2e['length']; _0x3818a0++) {
                            let _0x1f5799 = _0x40ea2e[_0x3818a0];
                            if (_0x1f5799 !== 0x0) {
                                _0x1021fd = _0x5d975f;
                                for (let _0x58aae9 = 0x0; _0x58aae9 < 0x8; _0x58aae9++) {
                                    let _0x194dae = _0x1f5799 >> _0x58aae9 & 0x1;
                                    _0x194dae !== 0x0 && this['canvasContext']['fillRect'](_0x348b87, _0x1021fd, _0x391ae6, _0x391ae6), _0x1021fd += _0x391ae6;
                                }
                            }
                            _0x348b87 += _0x391ae6;
                        }
                    } else this['canvasContext']['fillStyle'] = 'white', this['canvasContext']['fillRect'](_0x348b87, _0x1021fd, _0x40ea2e['length'] * _0x3af4a5, _0x19f643);
                }
            }
            _0xc6d0bd['GenericLCDColumnMajor'] = _0x399268;
        }, {
            './GenericLCD': 0x18
        }],
        0x1a: [function(_0x7cda87, _0x1036f5, _0x488087) {
            'use strict';
            Object['defineProperty'](_0x488087, '__esModule', {
                'value': !![]
            });
            const _0x4f53f2 = _0x7cda87('./ASIC'),
                _0x47dca6 = _0x7cda87('./GenericASIC'),
                _0x41374c = _0x7cda87('../asics/nxu16/nxu16_mcu');
            class _0xb1fbb3 extends _0x47dca6['GenericASIC'] {
                ['start']() {
                    return new Promise((_0x2553cf, _0x474962) => {
                        this['state'] === _0x4f53f2['ASICState']['STOPPED'] || this['state'] === _0x4f53f2['ASICState']['INITIALIZING'] ? (this['notifyStateListeners'](_0x4f53f2['ASICState']['BUSY']), this['mcu']['dataMemory']['start'](), this['startMCU'](), _0x2553cf()) : (console['log']('asic is not stopped!, state=' + this['state']), _0x474962('asic is not stopped!, state=' + this['state']));
                    });
                } ['startMCU']() {
                    const _0x230115 = 0x0;
                    let _0x313c02 = undefined;
                    this['mcuInterval'] = setInterval(() => {
                        this['mcu']['run']();
                        if ((_0x313c02 === undefined || _0x313c02) && this['mcu']['isBusy'] === ![]) this['notifyStateListeners'](_0x4f53f2['ASICState']['IDLE']);
                        else(_0x313c02 === undefined || !_0x313c02) && this['mcu']['isBusy'] && this['notifyStateListeners'](_0x4f53f2['ASICState']['BUSY']);
                        _0x313c02 = this['mcu']['isBusy'];
                    }, _0x230115);
                } ['stop']() {
                    return new Promise((_0xa58cbb, _0x1c6a9a) => {
                        this['state'] !== _0x4f53f2['ASICState']['PAUSED'] && this['state'] !== _0x4f53f2['ASICState']['STOPPED'] ? (clearInterval(this['mcuInterval']), this['mcu']['dataMemory']['stop'](), this['notifyStateListeners'](_0x4f53f2['ASICState']['STOPPED']), _0xa58cbb()) : _0x1c6a9a();
                    });
                } ['pause']() {
                    return new Promise((_0x39d724, _0x5e7a1c) => {
                        this['state'] !== _0x4f53f2['ASICState']['PAUSED'] ? (this['notifyStateListeners'](_0x4f53f2['ASICState']['PAUSED']), _0x39d724()) : _0x5e7a1c();
                    });
                } ['resume']() {
                    return new Promise((_0x184fb4, _0x24b524) => {
                        _0x184fb4();
                    });
                } ['reset']() {
                    return new Promise((_0x1458a7, _0x305996) => {
                        _0x1458a7();
                    });
                } ['onIdle']() {
                    return new Promise((_0x2d7b2d, _0x2560c7) => {
                        let _0x460bd5 = setInterval(() => {
                            this['state'] === _0x4f53f2['ASICState']['IDLE'] && (clearInterval(_0x460bd5), _0x2d7b2d());
                        }, 0x0);
                    });
                } ['getState']() {
                    let _0x396a93 = this['mcu']['getState']();
                    return _0x396a93;
                } ['setState'](_0x709924) {
                    this['mcu']['setState'](_0x709924);
                } ['initializeMCU'](_0x3b4d92) {
                    this['mcu']['initialize'](_0x3b4d92);
                } ['keyDown'](_0x692bcd) {
                    return new Promise((_0xefd789, _0x362370) => {
                        this['mcu']['setLastKeyPressed'](_0x692bcd), _0xefd789();
                    });
                } ['keyUp'](_0x21084c) {
                    return new Promise((_0x339e46, _0x47c51b) => {
                        this['mcu']['setLastKeyReleased'](_0x21084c), _0x339e46();
                    });
                } ['keyPress'](_0x151c4f) {
                    return new Promise((_0x250f9b, _0x25cd7a) => {
                        _0x250f9b();
                    });
                }
                constructor(_0x9cd837) {
                    super();
                    let _0x5d5a9a = this;
                    this['settings'] = _0x9cd837, this['mcu'] = new _0x41374c['NXU16_MCU']({
                        'parent': _0x5d5a9a
                    });
                }
            }
            _0x488087['LapisASIC'] = _0xb1fbb3;
        }, {
            '../asics/nxu16/nxu16_mcu': 0xe,
            './ASIC': 0x12,
            './GenericASIC': 0x16
        }],
        0x1b: [function(_0x5a2883, _0x2b43e5, _0x4dd0e1) {
            'use strict';
            Object['defineProperty'](_0x4dd0e1, '__esModule', {
                'value': !![]
            });
            const _0x4b5d1f = _0x5a2883('./Utilities'),
                _0x89db6f = _0x5a2883('ts-md5/dist/md5');
            var _0x5db0ed;
            (function(_0x57dc63) {
                _0x57dc63['SV_CURRENT'] = 'SV_CURRENT', _0x57dc63['SV_USER'] = 'SV_USER', _0x57dc63['SV_OS'] = 'SV_OS', _0x57dc63['EC_OS'] = 'EC_OS';
            }(_0x5db0ed || (_0x5db0ed = {})));
            var _0x5d83fe;
            (function(_0x3c5641) {
                _0x3c5641['SV_84'] = '84', _0x3c5641['SV_83'] = '83', _0x3c5641['SV_MATHPRINT'] = 'MathPrint';
            }(_0x5d83fe || (_0x5d83fe = {})));
            class _0x540fbf {
                ['toCommands']() {
                    let _0x550370 = {
                        'statefileversion': this['statefileversion'],
                        'osversion': this['osversion'],
                        'statefiletype': this['statefiletype'],
                        'checksum': this['checksum'],
                        'compatibility': String(this['compatibility']),
                        'productflavor': this['productflavor']
                    };
                    return _0x550370;
                }
                constructor() {
                    this['statefileversion'] = '1', this['osversion'] = '1.0.0', this['statefiletype'] = 'SV_OS', this['checksum'] = '', this['compatibility'] = 0x1, this['productflavor'] = 'MathPrint';
                }
            }
            _0x4dd0e1['StatefileInfo'] = _0x540fbf;
            class _0xda1a99 {}
            _0x4dd0e1['Statefile'] = _0xda1a99;
            class _0x21ed97 {}
            _0x4dd0e1['StatefileManagerSettings'] = _0x21ed97;
            class _0x2b95a2 {
                ['getCurrentStatefileInfo']() {
                    return this['currentStatefileInfo'];
                } ['getMd5String'](_0x1fd59c) {
                    let _0x4b9897 = new _0x89db6f['Md5']();
                    for (let _0x15313d of _0x1fd59c['data']) {
                        _0x4b9897['appendStr'](_0x15313d);
                    }
                    return _0x4b9897['appendStr'](_0x1fd59c['info']['compatibility']['toString']()), _0x4b9897['appendStr'](_0x1fd59c['info']['osversion']), _0x4b9897['appendStr'](_0x1fd59c['info']['productflavor']), _0x4b9897['appendStr'](_0x1fd59c['info']['statefiletype']), _0x4b9897['appendStr'](_0x1fd59c['info']['statefileversion']), _0x4b9897['end']();
                } ['getState'](_0x3e3635, _0x58560e) {
                    return new Promise((_0x4b47c7, _0x12df90) => {
                        let _0x12f996 = [];
                        for (let _0x1f0fa4 of _0x3e3635) {
                            let _0x3f45b7 = _0x1f0fa4['getState'](),
                                _0x3e703d = _0x4b5d1f['Utilities']['arrayToRLEPlusString'](_0x3f45b7);
                            _0x12f996['push'](_0x3e703d);
                        }
                        let _0x23727d = new _0xda1a99();
                        _0x23727d['data'] = _0x12f996, _0x23727d['info'] = new _0x540fbf(), _0x23727d['info']['statefiletype'] = _0x58560e['statefiletype'], _0x23727d['info']['osversion'] = _0x58560e['osversion'], _0x23727d['info']['statefileversion'] = '1.2.0', _0x23727d['info']['compatibility'] = 0x1, _0x23727d['info']['productflavor'] = _0x58560e['productflavor'], _0x23727d['info']['checksum'] = this['getMd5String'](_0x23727d), _0x4b47c7(JSON['stringify'](_0x23727d));
                    });
                } ['setStateFromStatefile'](_0x46f258, _0x378984) {
                    return new Promise((_0xee1fb0, _0x47067c) => {
                        let _0x59d872 = this['getMd5String'](_0x378984);
                        _0x378984['info']['checksum'] !== _0x59d872 && _0x47067c('Invalid checksum.');
                        for (let _0x252188 = 0x0; _0x252188 < _0x378984['data']['length']; _0x252188++) {
                            let _0x5f3d12 = _0x378984['data'][_0x252188],
                                _0x135b99 = _0x4b5d1f['Utilities']['rlePlusStringToArray'](_0x5f3d12);
                            _0x46f258[_0x252188]['setState'](_0x135b99);
                        }
                        this['currentStatefileInfo'] = _0x378984['info'], _0xee1fb0();
                    });
                } ['setState'](_0x22fe0a, _0x10928f) {
                    return new Promise((_0x4607bd, _0x46d7f4) => {
                        let _0xd1a76b = new _0xda1a99();
                        try {
                            _0xd1a76b = JSON['parse'](_0x10928f);
                        } catch (_0x484f29) {
                            _0x46d7f4(_0x484f29);
                        }
                        this['setStateFromStatefile'](_0x22fe0a, _0xd1a76b)['then'](() => {
                            _0x4607bd();
                        });
                    });
                }
            }
            _0x4dd0e1['StatefileManager'] = _0x2b95a2;
        }, {
            './Utilities': 0x1d,
            'ts-md5/dist/md5': 0xc
        }],
        0x1c: [function(_0x976e9e, _0x237d0a, _0x1d913e) {
            'use strict';
            Object['defineProperty'](_0x1d913e, '__esModule', {
                'value': !![]
            });
            const _0x21c59f = _0x976e9e('../../GenericKeypad'),
                _0x3e9c24 = 'TI30XPRO';
            class _0x50c281 extends _0x21c59f['GenericKeypad'] {
                constructor(_0x14d2b7, _0x34064a) {
                    let _0x3bfa02 = {
                            'svgUrl': _0x14d2b7['FaceplateLocation'],
                            'keymapExtension': '',
                            'SVGKeys': [{
                                'SVGKey': _0x3e9c24 + '_KEY_2ND_NONE',
                                'code': 0x8,
                                'keyCode': [0x32],
                                'shiftKey': [!![]],
                                'keyGroup': 0x1,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_MODE_NONE',
                                'code': 0x20,
                                'keyCode': [0x4d],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_DELETE_INSERT',
                                'code': 0x28,
                                'keyCode': [0x2e],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_LN-LOG_DERIVITIVE',
                                'code': 0x7,
                                'keyCode': [0x4c],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_MATH_MATRIX',
                                'code': 0x10,
                                'keyCode': [0x52],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_DATA_STAT-REGDISTR',
                                'code': 0x18,
                                'keyCode': [0x44],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_LEFTARROW_NONE',
                                'code': 0x2f,
                                'keyCode': [0x25],
                                'shiftKey': [![]],
                                'keyGroup': 0x6,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_UPARROW_NONE',
                                'code': 0x30,
                                'keyCode': [0x26],
                                'shiftKey': [![]],
                                'keyGroup': 0x6,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_RIGHTARROW_NONE',
                                'code': 0x2e,
                                'keyCode': [0x27],
                                'shiftKey': [![]],
                                'keyGroup': 0x6,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_DOWNARROW_NONE',
                                'code': 0x2d,
                                'keyCode': [0x28],
                                'shiftKey': [![]],
                                'keyGroup': 0x6,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_ENTH-10NTH_INTEGRAL',
                                'code': 0x6,
                                'keyCode': [0x4e],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_EE_VECTOR',
                                'code': 0xf,
                                'keyCode': [0x46],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_NCR-NPR_RANDOM',
                                'code': 0x17,
                                'keyCode': [0xde],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_TABLE_EXPR-EVAL',
                                'code': 0x1f,
                                'keyCode': [0x41],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_CLEAR_NONE',
                                'code': 0x27,
                                'keyCode': [0x8],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_PI-E-I_COMPLEX',
                                'code': 0x5,
                                'keyCode': [0x50],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_SIN-SIN-1_NUM-SOLV',
                                'code': 0xe,
                                'keyCode': [0x53],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_COS-COS-1_POLY-SOLV',
                                'code': 0x16,
                                'keyCode': [0x43],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_TAN-TAN-1_SYS-SOLV',
                                'code': 0x1e,
                                'keyCode': [0x54],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_DIVIDE_PERCENT',
                                'code': 0x26,
                                'keyCode': [0x6f, 0xbf],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x3,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_XNTH_NTHSQRT',
                                'code': 0x4,
                                'keyCode': [0x36],
                                'shiftKey': [!![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_FRACTION_RECIPRICAL',
                                'code': 0xd,
                                'keyCode': [0x49],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_LEFTPAREN_CONSTANTS',
                                'code': 0x15,
                                'keyCode': [0x39],
                                'shiftKey': [!![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_RIGHTPAREN_OP',
                                'code': 0x1d,
                                'keyCode': [0x30],
                                'shiftKey': [!![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_MULTIPLY_SETOP',
                                'code': 0x25,
                                'keyCode': [0x6a, 0x38],
                                'shiftKey': [![], !![]],
                                'keyGroup': 0x3,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_X2_SQRT',
                                'code': 0x3,
                                'keyCode': [0x58],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_7_MIXEDFRACTION',
                                'code': 0xc,
                                'keyCode': [0x67, 0x37],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_8_CONVERT',
                                'code': 0x14,
                                'keyCode': [0x68, 0x38],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_9_BASEN',
                                'code': 0x1c,
                                'keyCode': [0x69, 0x39],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_SUBTRACT_NONE',
                                'code': 0x24,
                                'keyCode': [0x6d, 0xbd],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x3,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_XVAR_CLEARVAR',
                                'code': 0x2,
                                'keyCode': [0x59],
                                'shiftKey': [![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_4_D',
                                'code': 0xb,
                                'keyCode': [0x64, 0x34],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_5_E',
                                'code': 0x13,
                                'keyCode': [0x65, 0x35],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_6_F',
                                'code': 0x1b,
                                'keyCode': [0x66, 0x36],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_ADD_NONE',
                                'code': 0x23,
                                'keyCode': [0x6b, 0xbb],
                                'shiftKey': [![], !![]],
                                'keyGroup': 0x3,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_STO_RECALL',
                                'code': 0x1,
                                'keyCode': [0xba],
                                'shiftKey': [!![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_1_A',
                                'code': 0xa,
                                'keyCode': [0x61, 0x31],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_2_B',
                                'code': 0x12,
                                'keyCode': [0x62, 0x32],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_3_C',
                                'code': 0x1a,
                                'keyCode': [0x63, 0x33],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_TOGGLE_FTOD',
                                'code': 0x22,
                                'keyCode': [0xc0],
                                'shiftKey': [!![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_ON_OFF',
                                'code': 0x29,
                                'keyCode': [0xc0],
                                'shiftKey': [!![]],
                                'keyGroup': 0x5,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_0_RESET',
                                'code': 0x9,
                                'keyCode': [0x60, 0x30],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_DECIMAL_COMMA',
                                'code': 0x11,
                                'keyCode': [0x6e, 0xbe],
                                'shiftKey': [![], ![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_NEGATIVE_ANS',
                                'code': 0x19,
                                'keyCode': [0xbd],
                                'shiftKey': [!![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }, {
                                'SVGKey': _0x3e9c24 + '_KEY_ENTER_NONE',
                                'code': 0x21,
                                'keyCode': [0xd],
                                'shiftKey': [![]],
                                'keyGroup': 0x4,
                                'enabled': !![]
                            }],
                            'blockedKeyCommands': ['ON', 'OFF']
                        },
                        _0x23f424 = _0x14d2b7['elementId'] || 'calculatorDiv';
                    super(_0x23f424, _0x3bfa02, _0x34064a);
                }
            }
            _0x1d913e['TI30XProKeypad'] = _0x50c281;
        }, {
            '../../GenericKeypad': 0x17
        }],
        0x1d: [function(_0xda6ca0, _0x549351, _0x263062) {
            (function(_0x756f44) {
                'use strict';
                Object['defineProperty'](_0x263062, '__esModule', {
                    'value': !![]
                });
                class _0x337802 {
                    static['hasClass'](_0x382ef6, _0x21d7af) {
                        var _0x36baf1 = ![];
                        if (_0x382ef6 instanceof SVGElement) {
                            let _0x39a670 = _0x382ef6;
                            _0x39a670['className']['baseVal'] !== undefined && (_0x36baf1 = _0x39a670['className']['baseVal']['indexOf'](_0x21d7af) > -0x1);
                        } else _0x382ef6['className'] !== undefined && _0x382ef6['className'] !== '' && (_0x36baf1 = _0x382ef6['className']['indexOf'](_0x21d7af) > -0x1);
                        return _0x36baf1;
                    }
                    static['addClass'](_0x28b6c2, _0x3008ca) {
                        if (!_0x337802['hasClass'](_0x28b6c2, _0x3008ca)) {
                            if (_0x28b6c2['classList'] !== undefined) _0x28b6c2['classList']['add'](_0x3008ca);
                            else {
                                if (_0x28b6c2 instanceof SVGElement) {
                                    let _0x58cd9e = _0x28b6c2;
                                    _0x28b6c2['className']['baseVal'] += ' ' + _0x3008ca;
                                } else _0x28b6c2['className'] += ' ' + _0x3008ca;
                            }
                        }
                    }
                    static['removeClass'](_0x5aa55b, _0x59d3d2) {
                        if (this['hasClass'](_0x5aa55b, _0x59d3d2)) {
                            var _0x88bf95 = new RegExp('(\\s|^)' + _0x59d3d2 + '(\\s|$)');
                            if (_0x5aa55b['classList'] !== undefined) _0x5aa55b['classList']['remove'](_0x59d3d2);
                            else {
                                if (_0x5aa55b instanceof SVGElement) {
                                    let _0x50acc0 = _0x5aa55b;
                                    _0x50acc0['className']['baseVal'] = _0x50acc0['className']['baseVal']['replace'](_0x88bf95, ' ');
                                } else _0x5aa55b['className'] !== undefined && _0x5aa55b['className'] !== '' && (_0x5aa55b['className'] = _0x5aa55b['className']['replace'](_0x88bf95, ' '));
                            }
                        }
                    }
                    static['removePrefixedClass'](_0x1ae89d, _0x1bd60a) {
                        let _0x5282fe;
                        if (_0x1ae89d instanceof SVGElement) {
                            let _0x122cf0 = _0x1ae89d;
                            _0x5282fe = _0x122cf0['className']['baseVal']['split'](' ');
                        } else _0x1ae89d['className'] !== undefined && (_0x5282fe = _0x1ae89d['className']['split'](' '));
                        for (var _0x91f68f = _0x5282fe['length'] - 0x1; _0x91f68f >= 0x0; _0x91f68f--) {
                            _0x5282fe[_0x91f68f] && _0x5282fe[_0x91f68f]['indexOf'](_0x1bd60a) === 0x0 && this['removeClass'](_0x1ae89d, _0x5282fe[_0x91f68f]);
                        }
                    }
                    static['loadSVG'](_0x1a3a0d) {
                        return new Promise((_0x17fee5, _0x4e99b9) => {
                            let _0x57b763 = new XMLHttpRequest();
                            _0x57b763['onerror'] = function(_0x508ddc) {
                                _0x4e99b9(_0x508ddc['error']);
                            }, _0x57b763['onload'] = function(_0x561037) {
                                var _0x2caf6 = ![];
                                if (_0x57b763['status'] === 0xc8) {
                                    let _0x54824f = _0x57b763['responseXML'],
                                        _0x112be4 = typeof _0x54824f;
                                    (_0x112be4 === 'undefined' || _0x54824f === null) && _0x4e99b9('SVG was undefined or null');
                                    let _0x59f8ca = _0x54824f['documentElement'],
                                        _0x2c29cf = document['importNode'](_0x59f8ca, !![]);
                                    _0x112be4 = typeof _0x2c29cf, (_0x112be4 === 'undefined' || _0x2c29cf === null) && _0x4e99b9('SVG (after importNode) was undefined or null'), _0x2c29cf['getAttribute']('viewBox') === undefined && _0x4e99b9('SVG viewBox attribute not found!'), _0x17fee5(_0x2c29cf);
                                } else console['log']('agghhh'), _0x4e99b9();
                            }, _0x57b763['open']('GET', _0x1a3a0d, !![]), _0x57b763['responseType'] = 'document', _0x57b763['send']();
                        });
                    }
                    static['loadROM'](_0x5e5084) {
                        return new Promise((_0x267910, _0x3bcba0) => {
                            let _0x22fc2f = new XMLHttpRequest(),
                                _0x1b5713;
                            _0x22fc2f['timeout'] = this['DEFAULT_TIMEOUT'], _0x22fc2f['responseType'] = '', _0x22fc2f['ontimeout'] = () => {
                                _0x3bcba0(_0x22fc2f['statusText']);
                            }, _0x22fc2f['onerror'] = () => {
                                _0x3bcba0(_0x22fc2f['statusText']);
                            }, _0x22fc2f['onload'] = () => {
                                _0x22fc2f['status'] === 0xc8 ? (_0x1b5713 = _0x22fc2f['responseText'], _0x267910(_0x1b5713)) : _0x3bcba0(_0x22fc2f['statusText']);
                            }, _0x22fc2f['open']('GET', _0x5e5084, !![]), _0x22fc2f['send']();
                        });
                    }
                    static['pixelDataToString'](_0x4c0860) {
                        return _0x4c0860 === 0x0 ? String['fromCharCode'](0x100) : String['fromCharCode'](_0x4c0860);
                    }
                    static['arrayToRLEPlusString'](_0x5db2c7, _0x478182, _0x1fe1f6) {
                        let _0x129049 = typeof _0x478182,
                            _0x4f63be = typeof _0x1fe1f6,
                            _0x293a11 = 0x1,
                            _0x5764e0 = [],
                            _0x4cf82b = '#',
                            _0x4818c8, _0x127b68;
                        if (typeof _0x5db2c7 === 'undefined' || _0x5db2c7 === null) return '';
                        _0x129049 === 'undefined' && (_0x478182 = 0x0);
                        _0x4f63be === 'undefined' && (_0x1fe1f6 = _0x5db2c7['length']);
                        _0x4818c8 = _0x5db2c7[_0x478182++];
                        for (_0x478182; _0x478182 < _0x1fe1f6; _0x478182 += 0x1) {
                            if (_0x4818c8 !== _0x5db2c7[_0x478182]) {
                                _0x127b68 = typeof _0x4818c8;
                                if (_0x127b68 === 'undefined') debugger;
                                _0x4818c8 === 0x23 ? (_0x5764e0['push'](_0x4cf82b), _0x5764e0['push'](_0x4cf82b)) : _0x5764e0['push'](String['fromCharCode'](_0x4818c8)), _0x293a11 > 0x1 && (_0x5764e0['push'](_0x4cf82b), _0x5764e0['push'](_0x293a11), _0x5764e0['push'](_0x4cf82b)), _0x4818c8 = _0x5db2c7[_0x478182], _0x293a11 = 0x1;
                            } else _0x293a11++;
                        }
                        _0x4818c8 === 0x23 ? (_0x5764e0['push'](_0x4cf82b), _0x5764e0['push'](_0x4cf82b)) : _0x5764e0['push'](String['fromCharCode'](_0x4818c8));
                        _0x293a11 > 0x1 && (_0x5764e0['push'](_0x4cf82b), _0x5764e0['push'](_0x293a11), _0x5764e0['push'](_0x4cf82b));
                        var _0x45484c = _0x5764e0['join'](''),
                            _0x5edfa6;
                        try {
                            _0x5edfa6 = 'RLE_NUMERIC' + _0x756f44['from'](_0x45484c)['toString']('base64');
                        } catch (_0x5613c7) {
                            console['log']('EXCEPTION in arrayToRLEPlusString: ' + _0x5613c7 + ' name:' + _0x5613c7['name'] + ' message:' + _0x5613c7['message']), _0x5edfa6 = '';
                        }
                        return _0x5edfa6;
                    }
                    static['rlePlusStringToArray'](_0x812a13, _0xf818a9) {
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
                            _0x812a13 = _0x756f44['from'](_0x812a13['substring'](_0x31c760['length']), 'base64')['toString'](), _0x3324db = _0x812a13['length'], _0x16a4e8 = _0x812a13['charCodeAt'](_0x1a9902);
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
                }
                _0x337802['DEFAULT_TIMEOUT'] = 0xea60, _0x263062['Utilities'] = _0x337802;
            } ['call'](this, _0xda6ca0('buffer')['Buffer']));
        }, {
            'buffer': 0xa
        }]
    }, {}, [0x6])(0x6);
}));