/*! 
* Open Ordinal Stitch 0.9.1
*/
/******/ var __webpack_modules__ = ({

/***/ 654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*!
 * Open Ordinal Metadata
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOMD
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapMode = void 0;
var Bootstrap_1 = __webpack_require__(937);
Object.defineProperty(exports, "BootstrapMode", ({ enumerable: true, get: function () { return Bootstrap_1.BootstrapMode; } }));
//# sourceMappingURL=OOMD.js.map

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapMode = void 0;
/**
 * Bootstap Mode
 *
 * @category Bootstrap
 */
var BootstrapMode;
(function (BootstrapMode) {
    /**
     * Load Inscription Directly by Id and Boot
     */
    BootstrapMode[BootstrapMode["LoadByInscriptionIdAndBoot"] = 1] = "LoadByInscriptionIdAndBoot";
    /**
     * Load Inscription via Id and then via it's SAT and fetch Latest and Boot
     */
    BootstrapMode[BootstrapMode["LoadLatestByInscriptionIdAndBoot"] = 2] = "LoadLatestByInscriptionIdAndBoot";
    /**
     * Load specified index via SAT and Boot
     */
    BootstrapMode[BootstrapMode["LoadIndexBySatAndBoot"] = 3] = "LoadIndexBySatAndBoot";
    /**
     * Load Latest Inscription via SAT and Boot
     */
    BootstrapMode[BootstrapMode["LoadLatestBySatAndBoot"] = 4] = "LoadLatestBySatAndBoot";
})(BootstrapMode || (exports.BootstrapMode = BootstrapMode = {}));
//# sourceMappingURL=Bootstrap.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BootstrapMode: () => (/* reexport */ OOMD.BootstrapMode),
  StitchOptions: () => (/* reexport */ StitchOptions),
  __esModule: () => (/* reexport */ /* __esModule */true),
  stitchAsArrayBuffer: () => (/* reexport */ stitchAsArrayBuffer),
  stitchAsDataUrl: () => (/* reexport */ stitchAsDataUrl),
  stitchAsString: () => (/* reexport */ stitchAsString)
});

// NAMESPACE OBJECT: ./lib/browser/OOST.Core.js
var OOST_Core_namespaceObject = {};
__webpack_require__.r(OOST_Core_namespaceObject);
__webpack_require__.d(OOST_Core_namespaceObject, {
  BootstrapMode: () => (OOMD.BootstrapMode),
  StitchOptions: () => (StitchOptions),
  __esModule: () => (/* __esModule */true),
  stitchAsArrayBuffer: () => (stitchAsArrayBuffer),
  stitchAsDataUrl: () => (stitchAsDataUrl),
  stitchAsString: () => (stitchAsString)
});

;// ./lib/browser/models/StitchOptions.js
/**
 * Represents the options for stitch operations.
 *
 * @group Classes
 */
class StitchOptions {
    sat;
    parent;
    parts;
    contentType;
    /**
     * Creates an instance of StitchOptions.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options = {}) {
        this.sat = options.sat;
        this.parent = options.parent;
        this.parts = options.parts;
        this.contentType = options.contentType;
    }
}

;// ./node_modules/cbor-x/decode.js
let decoder
try {
	decoder = new TextDecoder()
} catch(error) {}
let src
let srcEnd
let position = 0
let alreadySet
const EMPTY_ARRAY = []
const LEGACY_RECORD_INLINE_ID = 105
const RECORD_DEFINITIONS_ID = 0xdffe
const RECORD_INLINE_ID = 0xdfff // temporary first-come first-serve tag // proposed tag: 0x7265 // 're'
const BUNDLED_STRINGS_ID = 0xdff9
const PACKED_TABLE_TAG_ID = 51
const PACKED_REFERENCE_TAG_ID = 6
const STOP_CODE = {}
let maxArraySize = 112810000 // This is the maximum array size in V8. We would potentially detect and set it higher
// for JSC, but this is pretty large and should be sufficient for most use cases
let maxMapSize = 16810000 // JavaScript has a fixed maximum map size of about 16710000, but JS itself enforces this,
// so we don't need to

let maxObjectSize = 16710000; // This is the maximum number of keys in a Map. It takes over a minute to create this
// many keys in an object, so also probably a reasonable choice there.
let strings = EMPTY_ARRAY
let stringPosition = 0
let currentDecoder = {}
let currentStructures
let srcString
let srcStringStart = 0
let srcStringEnd = 0
let bundledStrings
let referenceMap
let currentExtensions = []
let currentExtensionRanges = []
let packedValues
let dataView
let restoreMapsAsObject
let defaultOptions = {
	useRecords: false,
	mapsAsObjects: true
}
let sequentialMode = false
let inlineObjectReadThreshold = 2;
var BlockedFunction // we use search and replace to change the next call to BlockedFunction to avoid CSP issues for
// no-eval build
try {
	new Function('')
} catch(error) {
	// if eval variants are not supported, do not create inline object readers ever
	inlineObjectReadThreshold = Infinity
}



class Decoder {
	constructor(options) {
		if (options) {
			if ((options.keyMap || options._keyMap) && !options.useRecords) {
				options.useRecords = false
				options.mapsAsObjects = true
			}
			if (options.useRecords === false && options.mapsAsObjects === undefined)
				options.mapsAsObjects = true
			if (options.getStructures)
				options.getShared = options.getStructures
			if (options.getShared && !options.structures)
				(options.structures = []).uninitialized = true // this is what we use to denote an uninitialized structures
			if (options.keyMap) {
				this.mapKey = new Map()
				for (let [k,v] of Object.entries(options.keyMap)) this.mapKey.set(v,k)
			}
		}
		Object.assign(this, options)
	}
	/*
	decodeKey(key) {
		return this.keyMap
			? Object.keys(this.keyMap)[Object.values(this.keyMap).indexOf(key)] || key
			: key
	}
	*/
	decodeKey(key) {
		return this.keyMap ? this.mapKey.get(key) || key : key
	}
	
	encodeKey(key) {
		return this.keyMap && this.keyMap.hasOwnProperty(key) ? this.keyMap[key] : key
	}

	encodeKeys(rec) {
		if (!this._keyMap) return rec
		let map = new Map()
		for (let [k,v] of Object.entries(rec)) map.set((this._keyMap.hasOwnProperty(k) ? this._keyMap[k] : k), v)
		return map
	}

	decodeKeys(map) {
		if (!this._keyMap || map.constructor.name != 'Map') return map
		if (!this._mapKey) {
			this._mapKey = new Map()
			for (let [k,v] of Object.entries(this._keyMap)) this._mapKey.set(v,k)
		}
		let res = {}
		//map.forEach((v,k) => res[Object.keys(this._keyMap)[Object.values(this._keyMap).indexOf(k)] || k] = v)
		map.forEach((v,k) => res[safeKey(this._mapKey.has(k) ? this._mapKey.get(k) : k)] =  v)
		return res
	}
	
	mapDecode(source, end) {
	
		let res = this.decode(source)
		if (this._keyMap) { 
			//Experiemntal support for Optimised KeyMap  decoding 
			switch (res.constructor.name) {
				case 'Array': return res.map(r => this.decodeKeys(r))
				//case 'Map': return this.decodeKeys(res)
			}
		}
		return res
	}

	decode(source, end) {
		if (src) {
			// re-entrant execution, save the state and restore it after we do this decode
			return saveState(() => {
				clearSource()
				return this ? this.decode(source, end) : Decoder.prototype.decode.call(defaultOptions, source, end)
			})
		}
		srcEnd = end > -1 ? end : source.length
		position = 0
		stringPosition = 0
		srcStringEnd = 0
		srcString = null
		strings = EMPTY_ARRAY
		bundledStrings = null
		src = source
		// this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
		// technique for getting data from a database where it can be copied into an existing buffer instead of creating
		// new ones
		try {
			dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength))
		} catch(error) {
			// if it doesn't have a buffer, maybe it is the wrong type of object
			src = null
			if (source instanceof Uint8Array)
				throw error
			throw new Error('Source must be a Uint8Array or Buffer but was a ' + ((source && typeof source == 'object') ? source.constructor.name : typeof source))
		}
		if (this instanceof Decoder) {
			currentDecoder = this
			packedValues = this.sharedValues &&
				(this.pack ? new Array(this.maxPrivatePackedValues || 16).concat(this.sharedValues) :
				this.sharedValues)
			if (this.structures) {
				currentStructures = this.structures
				return checkedRead()
			} else if (!currentStructures || currentStructures.length > 0) {
				currentStructures = []
			}
		} else {
			currentDecoder = defaultOptions
			if (!currentStructures || currentStructures.length > 0)
				currentStructures = []
			packedValues = null
		}
		return checkedRead()
	}
	decodeMultiple(source, forEach) {
		let values, lastPosition = 0
		try {
			let size = source.length
			sequentialMode = true
			let value = this ? this.decode(source, size) : defaultDecoder.decode(source, size)
			if (forEach) {
				if (forEach(value) === false) {
					return
				}
				while(position < size) {
					lastPosition = position
					if (forEach(checkedRead()) === false) {
						return
					}
				}
			}
			else {
				values = [ value ]
				while(position < size) {
					lastPosition = position
					values.push(checkedRead())
				}
				return values
			}
		} catch(error) {
			error.lastPosition = lastPosition
			error.values = values
			throw error
		} finally {
			sequentialMode = false
			clearSource()
		}
	}
}
function getPosition() {
	return position
}
function checkedRead() {
	try {
		let result = read()
		if (bundledStrings) {
			if (position >= bundledStrings.postBundlePosition) {
				let error = new Error('Unexpected bundle position');
				error.incomplete = true;
				throw error
			}
			// bundled strings to skip past
			position = bundledStrings.postBundlePosition;
			bundledStrings = null;
		}

		if (position == srcEnd) {
			// finished reading this source, cleanup references
			currentStructures = null
			src = null
			if (referenceMap)
				referenceMap = null
		} else if (position > srcEnd) {
			// over read
			let error = new Error('Unexpected end of CBOR data')
			error.incomplete = true
			throw error
		} else if (!sequentialMode) {
			throw new Error('Data read, but end of buffer not reached')
		}
		// else more to read, but we are reading sequentially, so don't clear source yet
		return result
	} catch(error) {
		clearSource()
		if (error instanceof RangeError || error.message.startsWith('Unexpected end of buffer')) {
			error.incomplete = true
		}
		throw error
	}
}

function read() {
	let token = src[position++]
	let majorType = token >> 5
	token = token & 0x1f
	if (token > 0x17) {
		switch (token) {
			case 0x18:
				token = src[position++]
				break
			case 0x19:
				if (majorType == 7) {
					return getFloat16()
				}
				token = dataView.getUint16(position)
				position += 2
				break
			case 0x1a:
				if (majorType == 7) {
					let value = dataView.getFloat32(position)
					if (currentDecoder.useFloat32 > 2) {
						// this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
						let multiplier = mult10[((src[position] & 0x7f) << 1) | (src[position + 1] >> 7)]
						position += 4
						return ((multiplier * value + (value > 0 ? 0.5 : -0.5)) >> 0) / multiplier
					}
					position += 4
					return value
				}
				token = dataView.getUint32(position)
				position += 4
				break
			case 0x1b:
				if (majorType == 7) {
					let value = dataView.getFloat64(position)
					position += 8
					return value
				}
				if (majorType > 1) {
					if (dataView.getUint32(position) > 0)
						throw new Error('JavaScript does not support arrays, maps, or strings with length over 4294967295')
					token = dataView.getUint32(position + 4)
				} else if (currentDecoder.int64AsNumber) {
					token = dataView.getUint32(position) * 0x100000000
					token += dataView.getUint32(position + 4)
				} else
					token = dataView.getBigUint64(position)
				position += 8
				break
			case 0x1f: 
				// indefinite length
				switch(majorType) {
					case 2: // byte string
					case 3: // text string
						throw new Error('Indefinite length not supported for byte or text strings')
					case 4: // array
						let array = []
						let value, i = 0
						while ((value = read()) != STOP_CODE) {
							if (i >= maxArraySize) throw new Error(`Array length exceeds ${maxArraySize}`)
							array[i++] = value
						}
						return majorType == 4 ? array : majorType == 3 ? array.join('') : Buffer.concat(array)
					case 5: // map
						let key
						if (currentDecoder.mapsAsObjects) {
							let object = {}
							let i = 0;
							if (currentDecoder.keyMap) {
								while((key = read()) != STOP_CODE) {
									if (i++ >= maxMapSize) throw new Error(`Property count exceeds ${maxMapSize}`)
									object[safeKey(currentDecoder.decodeKey(key))] = read()
								}
							}
							else {
								while ((key = read()) != STOP_CODE) {
									if (i++ >= maxMapSize) throw new Error(`Property count exceeds ${maxMapSize}`)
									object[safeKey(key)] = read()
								}
							}
							return object
						} else {
							if (restoreMapsAsObject) {
								currentDecoder.mapsAsObjects = true
								restoreMapsAsObject = false
							}
							let map = new Map()
							if (currentDecoder.keyMap) {
								let i = 0;
								while((key = read()) != STOP_CODE) {
									if (i++ >= maxMapSize) {
										throw new Error(`Map size exceeds ${maxMapSize}`);
									}
									map.set(currentDecoder.decodeKey(key), read())
								}
							}
							else {
								let i = 0;
								while ((key = read()) != STOP_CODE) {
									if (i++ >= maxMapSize) {
										throw new Error(`Map size exceeds ${maxMapSize}`);
									}
									map.set(key, read())
								}
							}
							return map
						}
					case 7:
						return STOP_CODE
					default:
						throw new Error('Invalid major type for indefinite length ' + majorType)
				}
			default:
				throw new Error('Unknown token ' + token)
		}
	}
	switch (majorType) {
		case 0: // positive int
			return token
		case 1: // negative int
			return ~token
		case 2: // buffer
			return readBin(token)
		case 3: // string
			if (srcStringEnd >= position) {
				return srcString.slice(position - srcStringStart, (position += token) - srcStringStart)
			}
			if (srcStringEnd == 0 && srcEnd < 140 && token < 32) {
				// for small blocks, avoiding the overhead of the extract call is helpful
				let string = token < 16 ? shortStringInJS(token) : longStringInJS(token)
				if (string != null)
					return string
			}
			return readFixedString(token)
		case 4: // array
			if (token >= maxArraySize) throw new Error(`Array length exceeds ${maxArraySize}`)
			let array = new Array(token)
		  //if (currentDecoder.keyMap) for (let i = 0; i < token; i++) array[i] = currentDecoder.decodeKey(read())	
			//else 
			for (let i = 0; i < token; i++) array[i] = read()
			return array
		case 5: // map
			if (token >= maxMapSize) throw new Error(`Map size exceeds ${maxArraySize}`)
			if (currentDecoder.mapsAsObjects) {
				let object = {}
				if (currentDecoder.keyMap) for (let i = 0; i < token; i++) object[safeKey(currentDecoder.decodeKey(read()))] = read()
				else for (let i = 0; i < token; i++) object[safeKey(read())] = read()
				return object
			} else {
				if (restoreMapsAsObject) {
					currentDecoder.mapsAsObjects = true
					restoreMapsAsObject = false
				}
				let map = new Map()
				if (currentDecoder.keyMap) for (let i = 0; i < token; i++) map.set(currentDecoder.decodeKey(read()),read())
				else for (let i = 0; i < token; i++) map.set(read(), read())
				return map
			}
		case 6: // extension
			if (token >= BUNDLED_STRINGS_ID) {
				let structure = currentStructures[token & 0x1fff] // check record structures first
				// At some point we may provide an option for dynamic tag assignment with a range like token >= 8 && (token < 16 || (token > 0x80 && token < 0xc0) || (token > 0x130 && token < 0x4000))
				if (structure) {
					if (!structure.read) structure.read = createStructureReader(structure)
					return structure.read()
				}
				if (token < 0x10000) {
					if (token == RECORD_INLINE_ID) { // we do a special check for this so that we can keep the
						// currentExtensions as densely stored array (v8 stores arrays densely under about 3000 elements)
						let length = readJustLength()
						let id = read()
						let structure = read()
						recordDefinition(id, structure)
						let object = {}
						if (currentDecoder.keyMap) for (let i = 2; i < length; i++) {
							let key = currentDecoder.decodeKey(structure[i - 2])
							object[safeKey(key)] = read()
						}
						else for (let i = 2; i < length; i++) {
							let key = structure[i - 2]
							object[safeKey(key)] = read()
						}
						return object
					}
					else if (token == RECORD_DEFINITIONS_ID) {
						let length = readJustLength()
						let id = read()
						for (let i = 2; i < length; i++) {
							recordDefinition(id++, read())
						}
						return read()
					} else if (token == BUNDLED_STRINGS_ID) {
						return readBundleExt()
					}
					if (currentDecoder.getShared) {
						loadShared()
						structure = currentStructures[token & 0x1fff]
						if (structure) {
							if (!structure.read)
								structure.read = createStructureReader(structure)
							return structure.read()
						}
					}
				}
			}
			let extension = currentExtensions[token]
			if (extension) {
				if (extension.handlesRead)
					return extension(read)
				else
					return extension(read())
			} else {
				let input = read()
				for (let i = 0; i < currentExtensionRanges.length; i++) {
					let value = currentExtensionRanges[i](token, input)
					if (value !== undefined)
						return value
				}
				return new Tag(input, token)
			}
		case 7: // fixed value
			switch (token) {
				case 0x14: return false
				case 0x15: return true
				case 0x16: return null
				case 0x17: return; // undefined
				case 0x1f:
				default:
					let packedValue = (packedValues || getPackedValues())[token]
					if (packedValue !== undefined)
						return packedValue
					throw new Error('Unknown token ' + token)
			}
		default: // negative int
			if (isNaN(token)) {
				let error = new Error('Unexpected end of CBOR data')
				error.incomplete = true
				throw error
			}
			throw new Error('Unknown CBOR token ' + token)
	}
}
const validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/
function createStructureReader(structure) {
	if (!structure) throw new Error('Structure is required in record definition');
	function readObject() {
		// get the array size from the header
		let length = src[position++]
		//let majorType = token >> 5
		length = length & 0x1f
		if (length > 0x17) {
			switch (length) {
				case 0x18:
					length = src[position++]
					break
				case 0x19:
					length = dataView.getUint16(position)
					position += 2
					break
				case 0x1a:
					length = dataView.getUint32(position)
					position += 4
					break
				default:
					throw new Error('Expected array header, but got ' + src[position - 1])
			}
		}
		// This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
		let compiledReader = this.compiledReader // first look to see if we have the fast compiled function
		while(compiledReader) {
			// we have a fast compiled object literal reader
			if (compiledReader.propertyCount === length)
				return compiledReader(read) // with the right length, so we use it
			compiledReader = compiledReader.next // see if there is another reader with the right length
		}
		if (this.slowReads++ >= inlineObjectReadThreshold) { // create a fast compiled reader
			let array = this.length == length ? this : this.slice(0, length)
			compiledReader = currentDecoder.keyMap 
			? new Function('r', 'return {' + array.map(k => currentDecoder.decodeKey(k)).map(k => validName.test(k) ? safeKey(k) + ':r()' : ('[' + JSON.stringify(k) + ']:r()')).join(',') + '}')
			: new Function('r', 'return {' + array.map(key => validName.test(key) ? safeKey(key) + ':r()' : ('[' + JSON.stringify(key) + ']:r()')).join(',') + '}')
			if (this.compiledReader)
				compiledReader.next = this.compiledReader // if there is an existing one, we store multiple readers as a linked list because it is usually pretty rare to have multiple readers (of different length) for the same structure
			compiledReader.propertyCount = length
			this.compiledReader = compiledReader
			return compiledReader(read)
		}
		let object = {}
		if (currentDecoder.keyMap) for (let i = 0; i < length; i++) object[safeKey(currentDecoder.decodeKey(this[i]))] = read()
		else for (let i = 0; i < length; i++) {
			object[safeKey(this[i])] = read();
		}
		return object
	}
	structure.slowReads = 0
	return readObject
}

function safeKey(key) {
	// protect against prototype pollution
	if (typeof key === 'string') return key === '__proto__' ? '__proto_' : key
	if (typeof key === 'number' || typeof key === 'boolean' || typeof key === 'bigint') return key.toString();
	if (key == null) return key + '';
	// protect against expensive (DoS) string conversions
	throw new Error('Invalid property name type ' + typeof key);
}

let readFixedString = readStringJS
let readString8 = (/* unused pure expression or super */ null && (readStringJS))
let readString16 = (/* unused pure expression or super */ null && (readStringJS))
let readString32 = (/* unused pure expression or super */ null && (readStringJS))

let isNativeAccelerationEnabled = false
function setExtractor(extractStrings) {
	isNativeAccelerationEnabled = true
	readFixedString = readString(1)
	readString8 = readString(2)
	readString16 = readString(3)
	readString32 = readString(5)
	function readString(headerLength) {
		return function readString(length) {
			let string = strings[stringPosition++]
			if (string == null) {
				if (bundledStrings)
					return readStringJS(length)
				let extraction = extractStrings(position, srcEnd, length, src)
				if (typeof extraction == 'string') {
					string = extraction
					strings = EMPTY_ARRAY
				} else {
					strings = extraction
					stringPosition = 1
					srcStringEnd = 1 // even if a utf-8 string was decoded, must indicate we are in the midst of extracted strings and can't skip strings
					string = strings[0]
					if (string === undefined)
						throw new Error('Unexpected end of buffer')
				}
			}
			let srcStringLength = string.length
			if (srcStringLength <= length) {
				position += length
				return string
			}
			srcString = string
			srcStringStart = position
			srcStringEnd = position + srcStringLength
			position += length
			return string.slice(0, length) // we know we just want the beginning
		}
	}
}
function readStringJS(length) {
	let result
	if (length < 16) {
		if (result = shortStringInJS(length))
			return result
	}
	if (length > 64 && decoder)
		return decoder.decode(src.subarray(position, position += length))
	const end = position + length
	const units = []
	result = ''
	while (position < end) {
		const byte1 = src[position++]
		if ((byte1 & 0x80) === 0) {
			// 1 byte
			units.push(byte1)
		} else if ((byte1 & 0xe0) === 0xc0) {
			// 2 bytes
			const byte2 = src[position++] & 0x3f
			units.push(((byte1 & 0x1f) << 6) | byte2)
		} else if ((byte1 & 0xf0) === 0xe0) {
			// 3 bytes
			const byte2 = src[position++] & 0x3f
			const byte3 = src[position++] & 0x3f
			units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3)
		} else if ((byte1 & 0xf8) === 0xf0) {
			// 4 bytes
			const byte2 = src[position++] & 0x3f
			const byte3 = src[position++] & 0x3f
			const byte4 = src[position++] & 0x3f
			let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4
			if (unit > 0xffff) {
				unit -= 0x10000
				units.push(((unit >>> 10) & 0x3ff) | 0xd800)
				unit = 0xdc00 | (unit & 0x3ff)
			}
			units.push(unit)
		} else {
			units.push(byte1)
		}

		if (units.length >= 0x1000) {
			result += fromCharCode.apply(String, units)
			units.length = 0
		}
	}

	if (units.length > 0) {
		result += fromCharCode.apply(String, units)
	}

	return result
}
let fromCharCode = String.fromCharCode
function longStringInJS(length) {
	let start = position
	let bytes = new Array(length)
	for (let i = 0; i < length; i++) {
		const byte = src[position++];
		if ((byte & 0x80) > 0) {
			position = start
    			return
    		}
    		bytes[i] = byte
    	}
    	return fromCharCode.apply(String, bytes)
}
function shortStringInJS(length) {
	if (length < 4) {
		if (length < 2) {
			if (length === 0)
				return ''
			else {
				let a = src[position++]
				if ((a & 0x80) > 1) {
					position -= 1
					return
				}
				return fromCharCode(a)
			}
		} else {
			let a = src[position++]
			let b = src[position++]
			if ((a & 0x80) > 0 || (b & 0x80) > 0) {
				position -= 2
				return
			}
			if (length < 3)
				return fromCharCode(a, b)
			let c = src[position++]
			if ((c & 0x80) > 0) {
				position -= 3
				return
			}
			return fromCharCode(a, b, c)
		}
	} else {
		let a = src[position++]
		let b = src[position++]
		let c = src[position++]
		let d = src[position++]
		if ((a & 0x80) > 0 || (b & 0x80) > 0 || (c & 0x80) > 0 || (d & 0x80) > 0) {
			position -= 4
			return
		}
		if (length < 6) {
			if (length === 4)
				return fromCharCode(a, b, c, d)
			else {
				let e = src[position++]
				if ((e & 0x80) > 0) {
					position -= 5
					return
				}
				return fromCharCode(a, b, c, d, e)
			}
		} else if (length < 8) {
			let e = src[position++]
			let f = src[position++]
			if ((e & 0x80) > 0 || (f & 0x80) > 0) {
				position -= 6
				return
			}
			if (length < 7)
				return fromCharCode(a, b, c, d, e, f)
			let g = src[position++]
			if ((g & 0x80) > 0) {
				position -= 7
				return
			}
			return fromCharCode(a, b, c, d, e, f, g)
		} else {
			let e = src[position++]
			let f = src[position++]
			let g = src[position++]
			let h = src[position++]
			if ((e & 0x80) > 0 || (f & 0x80) > 0 || (g & 0x80) > 0 || (h & 0x80) > 0) {
				position -= 8
				return
			}
			if (length < 10) {
				if (length === 8)
					return fromCharCode(a, b, c, d, e, f, g, h)
				else {
					let i = src[position++]
					if ((i & 0x80) > 0) {
						position -= 9
						return
					}
					return fromCharCode(a, b, c, d, e, f, g, h, i)
				}
			} else if (length < 12) {
				let i = src[position++]
				let j = src[position++]
				if ((i & 0x80) > 0 || (j & 0x80) > 0) {
					position -= 10
					return
				}
				if (length < 11)
					return fromCharCode(a, b, c, d, e, f, g, h, i, j)
				let k = src[position++]
				if ((k & 0x80) > 0) {
					position -= 11
					return
				}
				return fromCharCode(a, b, c, d, e, f, g, h, i, j, k)
			} else {
				let i = src[position++]
				let j = src[position++]
				let k = src[position++]
				let l = src[position++]
				if ((i & 0x80) > 0 || (j & 0x80) > 0 || (k & 0x80) > 0 || (l & 0x80) > 0) {
					position -= 12
					return
				}
				if (length < 14) {
					if (length === 12)
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l)
					else {
						let m = src[position++]
						if ((m & 0x80) > 0) {
							position -= 13
							return
						}
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m)
					}
				} else {
					let m = src[position++]
					let n = src[position++]
					if ((m & 0x80) > 0 || (n & 0x80) > 0) {
						position -= 14
						return
					}
					if (length < 15)
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n)
					let o = src[position++]
					if ((o & 0x80) > 0) {
						position -= 15
						return
					}
					return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
				}
			}
		}
	}
}

function readBin(length) {
	return currentDecoder.copyBuffers ?
		// specifically use the copying slice (not the node one)
		Uint8Array.prototype.slice.call(src, position, position += length) :
		src.subarray(position, position += length)
}
function readExt(length) {
	let type = src[position++]
	if (currentExtensions[type]) {
		return currentExtensions[type](src.subarray(position, position += length))
	}
	else
		throw new Error('Unknown extension type ' + type)
}
let f32Array = new Float32Array(1)
let u8Array = new Uint8Array(f32Array.buffer, 0, 4)
function getFloat16() {
	let byte0 = src[position++]
	let byte1 = src[position++]
	let exponent = (byte0 & 0x7f) >> 2;
	if (exponent === 0x1f) { // specials
		if (byte1 || (byte0 & 3))
			return NaN;
		return (byte0 & 0x80) ? -Infinity : Infinity;
	}
	if (exponent === 0) { // sub-normals
		// significand with 10 fractional bits and divided by 2^14
		let abs = (((byte0 & 3) << 8) | byte1) / (1 << 24)
		return (byte0 & 0x80) ? -abs : abs
	}

	u8Array[3] = (byte0 & 0x80) | // sign bit
		((exponent >> 1) + 56) // 4 of 5 of the exponent bits, re-offset-ed
	u8Array[2] = ((byte0 & 7) << 5) | // last exponent bit and first two mantissa bits
		(byte1 >> 3) // next 5 bits of mantissa
	u8Array[1] = byte1 << 5; // last three bits of mantissa
	u8Array[0] = 0;
	return f32Array[0];
}

let keyCache = new Array(4096)
function readKey() {
	let length = src[position++]
	if (length >= 0x60 && length < 0x78) {
		// fixstr, potentially use key cache
		length = length - 0x60
		if (srcStringEnd >= position) // if it has been extracted, must use it (and faster anyway)
			return srcString.slice(position - srcStringStart, (position += length) - srcStringStart)
		else if (!(srcStringEnd == 0 && srcEnd < 180))
			return readFixedString(length)
	} else { // not cacheable, go back and do a standard read
		position--
		return read()
	}
	let key = ((length << 5) ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 0xfff
	let entry = keyCache[key]
	let checkPosition = position
	let end = position + length - 3
	let chunk
	let i = 0
	if (entry && entry.bytes == length) {
		while (checkPosition < end) {
			chunk = dataView.getUint32(checkPosition)
			if (chunk != entry[i++]) {
				checkPosition = 0x70000000
				break
			}
			checkPosition += 4
		}
		end += 3
		while (checkPosition < end) {
			chunk = src[checkPosition++]
			if (chunk != entry[i++]) {
				checkPosition = 0x70000000
				break
			}
		}
		if (checkPosition === end) {
			position = checkPosition
			return entry.string
		}
		end -= 3
		checkPosition = position
	}
	entry = []
	keyCache[key] = entry
	entry.bytes = length
	while (checkPosition < end) {
		chunk = dataView.getUint32(checkPosition)
		entry.push(chunk)
		checkPosition += 4
	}
	end += 3
	while (checkPosition < end) {
		chunk = src[checkPosition++]
		entry.push(chunk)
	}
	// for small blocks, avoiding the overhead of the extract call is helpful
	let string = length < 16 ? shortStringInJS(length) : longStringInJS(length)
	if (string != null)
		return entry.string = string
	return entry.string = readFixedString(length)
}

class Tag {
	constructor(value, tag) {
		this.value = value
		this.tag = tag
	}
}

currentExtensions[0] = (dateString) => {
	// string date extension
	return new Date(dateString)
}

currentExtensions[1] = (epochSec) => {
	// numeric date extension
	return new Date(Math.round(epochSec * 1000))
}

currentExtensions[2] = (buffer) => {
	// bigint extension
	let value = BigInt(0)
	for (let i = 0, l = buffer.byteLength; i < l; i++) {
		value = BigInt(buffer[i]) + (value << BigInt(8))
	}
	return value
}

currentExtensions[3] = (buffer) => {
	// negative bigint extension
	return BigInt(-1) - currentExtensions[2](buffer)
}
currentExtensions[4] = (fraction) => {
	// best to reparse to maintain accuracy
	return +(fraction[1] + 'e' + fraction[0])
}

currentExtensions[5] = (fraction) => {
	// probably not sufficiently accurate
	return fraction[1] * Math.exp(fraction[0] * Math.log(2))
}

// the registration of the record definition extension
const recordDefinition = (id, structure) => {
	id = id - 0xe000
	let existingStructure = currentStructures[id]
	if (existingStructure && existingStructure.isShared) {
		(currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure
	}
	currentStructures[id] = structure

	structure.read = createStructureReader(structure)
}
currentExtensions[LEGACY_RECORD_INLINE_ID] = (data) => {
	let length = data.length
	let structure = data[1]
	recordDefinition(data[0], structure)
	let object = {}
	for (let i = 2; i < length; i++) {
		let key = structure[i - 2]
		object[safeKey(key)] = data[i]
	}
	return object
}
currentExtensions[14] = (value) => {
	if (bundledStrings)
		return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 += value)
	return new Tag(value, 14)
}
currentExtensions[15] = (value) => {
	if (bundledStrings)
		return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value)
	return new Tag(value, 15)
}
let glbl = { Error, RegExp }
currentExtensions[27] = (data) => { // http://cbor.schmorp.de/generic-object
	return (glbl[data[0]] || Error)(data[1], data[2])
}
const packedTable = (read) => {
	if (src[position++] != 0x84) {
		let error = new Error('Packed values structure must be followed by a 4 element array')
		if (src.length < position)
			error.incomplete = true
		throw error
	}
	let newPackedValues = read() // packed values
	if (!newPackedValues || !newPackedValues.length) {
		let error = new Error('Packed values structure must be followed by a 4 element array')
		error.incomplete = true
		throw error
	}
	packedValues = packedValues ? newPackedValues.concat(packedValues.slice(newPackedValues.length)) : newPackedValues
	packedValues.prefixes = read()
	packedValues.suffixes = read()
	return read() // read the rump
}
packedTable.handlesRead = true
currentExtensions[51] = packedTable

currentExtensions[PACKED_REFERENCE_TAG_ID] = (data) => { // packed reference
	if (!packedValues) {
		if (currentDecoder.getShared)
			loadShared()
		else
			return new Tag(data, PACKED_REFERENCE_TAG_ID)
	}
	if (typeof data == 'number')
		return packedValues[16 + (data >= 0 ? 2 * data : (-2 * data - 1))]
	let error = new Error('No support for non-integer packed references yet')
	if (data === undefined)
		error.incomplete = true
	throw error
}

// The following code is an incomplete implementation of http://cbor.schmorp.de/stringref
// the real thing would need to implemennt more logic to populate the stringRefs table and
// maintain a stack of stringRef "namespaces".
//
// currentExtensions[25] = (id) => {
// 	return stringRefs[id]
// }
// currentExtensions[256] = (read) => {
// 	stringRefs = []
// 	try {
// 		return read()
// 	} finally {
// 		stringRefs = null
// 	}
// }
// currentExtensions[256].handlesRead = true

currentExtensions[28] = (read) => { 
	// shareable http://cbor.schmorp.de/value-sharing (for structured clones)
	if (!referenceMap) {
		referenceMap = new Map()
		referenceMap.id = 0
	}
	let id = referenceMap.id++
	let startingPosition = position
	let token = src[position]
	let target
	// TODO: handle Maps, Sets, and other types that can cycle; this is complicated, because you potentially need to read
	// ahead past references to record structure definitions
	if ((token >> 5) == 4)
		target = []
	else
		target = {}

	let refEntry = { target } // a placeholder object
	referenceMap.set(id, refEntry)
	let targetProperties = read() // read the next value as the target object to id
	if (refEntry.used) {// there is a cycle, so we have to assign properties to original target
		if (Object.getPrototypeOf(target) !== Object.getPrototypeOf(targetProperties)) {
			// this means that the returned target does not match the targetProperties, so we need rerun the read to
			// have the correctly create instance be assigned as a reference, then we do the copy the properties back to the
			// target
			// reset the position so that the read can be repeated
			position = startingPosition
			// the returned instance is our new target for references
			target = targetProperties
			referenceMap.set(id, { target })
			targetProperties = read()
		}
		return Object.assign(target, targetProperties)
	}
	refEntry.target = targetProperties // the placeholder wasn't used, replace with the deserialized one
	return targetProperties // no cycle, can just use the returned read object
}
currentExtensions[28].handlesRead = true

currentExtensions[29] = (id) => {
	// sharedref http://cbor.schmorp.de/value-sharing (for structured clones)
	let refEntry = referenceMap.get(id)
	refEntry.used = true
	return refEntry.target
}

currentExtensions[258] = (array) => new Set(array); // https://github.com/input-output-hk/cbor-sets-spec/blob/master/CBOR_SETS.md
(currentExtensions[259] = (read) => {
	// https://github.com/shanewholloway/js-cbor-codec/blob/master/docs/CBOR-259-spec
	// for decoding as a standard Map
	if (currentDecoder.mapsAsObjects) {
		currentDecoder.mapsAsObjects = false
		restoreMapsAsObject = true
	}
	return read()
}).handlesRead = true
function combine(a, b) {
	if (typeof a === 'string')
		return a + b
	if (a instanceof Array)
		return a.concat(b)
	return Object.assign({}, a, b)
}
function getPackedValues() {
	if (!packedValues) {
		if (currentDecoder.getShared)
			loadShared()
		else
			throw new Error('No packed values available')
	}
	return packedValues
}
const SHARED_DATA_TAG_ID = 0x53687264 // ascii 'Shrd'
currentExtensionRanges.push((tag, input) => {
	if (tag >= 225 && tag <= 255)
		return combine(getPackedValues().prefixes[tag - 224], input)
	if (tag >= 28704 && tag <= 32767)
		return combine(getPackedValues().prefixes[tag - 28672], input)
	if (tag >= 1879052288 && tag <= 2147483647)
		return combine(getPackedValues().prefixes[tag - 1879048192], input)
	if (tag >= 216 && tag <= 223)
		return combine(input, getPackedValues().suffixes[tag - 216])
	if (tag >= 27647 && tag <= 28671)
		return combine(input, getPackedValues().suffixes[tag - 27639])
	if (tag >= 1811940352 && tag <= 1879048191)
		return combine(input, getPackedValues().suffixes[tag - 1811939328])
	if (tag == SHARED_DATA_TAG_ID) {// we do a special check for this so that we can keep the currentExtensions as densely stored array (v8 stores arrays densely under about 3000 elements)
		return {
			packedValues: packedValues,
			structures: currentStructures.slice(0),
			version: input,
		}
	}
	if (tag == 55799) // self-descriptive CBOR tag, just return input value
		return input
})

const isLittleEndianMachine = new Uint8Array(new Uint16Array([1]).buffer)[0] == 1
const typedArrays = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array,
	typeof BigUint64Array == 'undefined' ? { name:'BigUint64Array' } : BigUint64Array, Int8Array, Int16Array, Int32Array,
	typeof BigInt64Array == 'undefined' ? { name:'BigInt64Array' } : BigInt64Array, Float32Array, Float64Array]
const typedArrayTags = [64, 68, 69, 70, 71, 72, 77, 78, 79, 85, 86]
for (let i = 0; i < typedArrays.length; i++) {
	registerTypedArray(typedArrays[i], typedArrayTags[i])
}
function registerTypedArray(TypedArray, tag) {
	let dvMethod = 'get' + TypedArray.name.slice(0, -5)
	let bytesPerElement;
	if (typeof TypedArray === 'function')
		bytesPerElement = TypedArray.BYTES_PER_ELEMENT;
	else
		TypedArray = null;
	for (let littleEndian = 0; littleEndian < 2; littleEndian++) {
		if (!littleEndian && bytesPerElement == 1)
			continue
		let sizeShift = bytesPerElement == 2 ? 1 : bytesPerElement == 4 ? 2 : bytesPerElement == 8 ? 3 : 0
		currentExtensions[littleEndian ? tag : (tag - 4)] = (bytesPerElement == 1 || littleEndian == isLittleEndianMachine) ? (buffer) => {
			if (!TypedArray)
				throw new Error('Could not find typed array for code ' + tag)
			if (!currentDecoder.copyBuffers) {
				// try provide a direct view, but will only work if we are byte-aligned
				if (bytesPerElement === 1 ||
					bytesPerElement === 2 && !(buffer.byteOffset & 1) ||
					bytesPerElement === 4 && !(buffer.byteOffset & 3) ||
					bytesPerElement === 8 && !(buffer.byteOffset & 7))
					return new TypedArray(buffer.buffer, buffer.byteOffset, buffer.byteLength >> sizeShift);
			}
			// we have to slice/copy here to get a new ArrayBuffer, if we are not word/byte aligned
			return new TypedArray(Uint8Array.prototype.slice.call(buffer, 0).buffer)
		} : buffer => {
			if (!TypedArray)
				throw new Error('Could not find typed array for code ' + tag)
			let dv = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength)
			let elements = buffer.length >> sizeShift
			let ta = new TypedArray(elements)
			let method = dv[dvMethod]
			for (let i = 0; i < elements; i++) {
				ta[i] = method.call(dv, i << sizeShift, littleEndian)
			}
			return ta
		}
	}
}

function readBundleExt() {
	let length = readJustLength()
	let bundlePosition = position + read()
	for (let i = 2; i < length; i++) {
		// skip past bundles that were already read
		let bundleLength = readJustLength() // this will increment position, so must add to position afterwards
		position += bundleLength
	}
	let dataPosition = position
	position = bundlePosition
	bundledStrings = [readStringJS(readJustLength()), readStringJS(readJustLength())]
	bundledStrings.position0 = 0
	bundledStrings.position1 = 0
	bundledStrings.postBundlePosition = position
	position = dataPosition
	return read()
}

function readJustLength() {
	let token = src[position++] & 0x1f
	if (token > 0x17) {
		switch (token) {
			case 0x18:
				token = src[position++]
				break
			case 0x19:
				token = dataView.getUint16(position)
				position += 2
				break
			case 0x1a:
				token = dataView.getUint32(position)
				position += 4
				break
		}
	}
	return token
}

function loadShared() {
	if (currentDecoder.getShared) {
		let sharedData = saveState(() => {
			// save the state in case getShared modifies our buffer
			src = null
			return currentDecoder.getShared()
		}) || {}
		let updatedStructures = sharedData.structures || []
		currentDecoder.sharedVersion = sharedData.version
		packedValues = currentDecoder.sharedValues = sharedData.packedValues
		if (currentStructures === true)
			currentDecoder.structures = currentStructures = updatedStructures
		else
			currentStructures.splice.apply(currentStructures, [0, updatedStructures.length].concat(updatedStructures))
	}
}

function saveState(callback) {
	let savedSrcEnd = srcEnd
	let savedPosition = position
	let savedStringPosition = stringPosition
	let savedSrcStringStart = srcStringStart
	let savedSrcStringEnd = srcStringEnd
	let savedSrcString = srcString
	let savedStrings = strings
	let savedReferenceMap = referenceMap
	let savedBundledStrings = bundledStrings

	// TODO: We may need to revisit this if we do more external calls to user code (since it could be slow)
	let savedSrc = new Uint8Array(src.slice(0, srcEnd)) // we copy the data in case it changes while external data is processed
	let savedStructures = currentStructures
	let savedDecoder = currentDecoder
	let savedSequentialMode = sequentialMode
	let value = callback()
	srcEnd = savedSrcEnd
	position = savedPosition
	stringPosition = savedStringPosition
	srcStringStart = savedSrcStringStart
	srcStringEnd = savedSrcStringEnd
	srcString = savedSrcString
	strings = savedStrings
	referenceMap = savedReferenceMap
	bundledStrings = savedBundledStrings
	src = savedSrc
	sequentialMode = savedSequentialMode
	currentStructures = savedStructures
	currentDecoder = savedDecoder
	dataView = new DataView(src.buffer, src.byteOffset, src.byteLength)
	return value
}
function clearSource() {
	src = null
	referenceMap = null
	currentStructures = null
}

function addExtension(extension) {
	currentExtensions[extension.tag] = extension.decode
}

function setSizeLimits(limits) {
	if (limits.maxMapSize) maxMapSize = limits.maxMapSize;
	if (limits.maxArraySize) maxArraySize = limits.maxArraySize;
	if (limits.maxObjectSize) maxObjectSize = limits.maxObjectSize;
}

const mult10 = new Array(147) // this is a table matching binary exponents to the multiplier to determine significant digit rounding
for (let i = 0; i < 256; i++) {
	mult10[i] = +('1e' + Math.floor(45.15 - i * 0.30103))
}
let defaultDecoder = new Decoder({ useRecords: false })
const decode = defaultDecoder.decode
const decodeMultiple = defaultDecoder.decodeMultiple
const FLOAT32_OPTIONS = {
	NEVER: 0,
	ALWAYS: 1,
	DECIMAL_ROUND: 3,
	DECIMAL_FIT: 4
}
function roundFloat32(float32Number) {
	f32Array[0] = float32Number
	let multiplier = mult10[((u8Array[3] & 0x7f) << 1) | (u8Array[2] >> 7)]
	return ((multiplier * float32Number + (float32Number > 0 ? 0.5 : -0.5)) >> 0) / multiplier
}

;// ./node_modules/cbor-x/encode.js

let textEncoder
try {
	textEncoder = new TextEncoder()
} catch (error) {}
let extensions, extensionClasses
const encode_Buffer = typeof globalThis === 'object' && globalThis.Buffer;
const hasNodeBuffer = typeof encode_Buffer !== 'undefined'
const ByteArrayAllocate = hasNodeBuffer ? encode_Buffer.allocUnsafeSlow : Uint8Array
const ByteArray = hasNodeBuffer ? encode_Buffer : Uint8Array
const MAX_STRUCTURES = 0x100
const MAX_BUFFER_SIZE = hasNodeBuffer ? 0x100000000 : 0x7fd00000
let serializationId = 1
let throwOnIterable
let target
let targetView
let encode_position = 0
let safeEnd
let encode_bundledStrings = null
const MAX_BUNDLE_SIZE = 0xf000
const hasNonLatin = /[\u0080-\uFFFF]/
const RECORD_SYMBOL = Symbol('record-id')
class Encoder extends Decoder {
	constructor(options) {
		super(options)
		this.offset = 0
		let typeBuffer
		let start
		let sharedStructures
		let hasSharedUpdate
		let structures
		let referenceMap
		options = options || {}
		let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position, maxBytes) {
			return target.utf8Write(string, position, maxBytes)
		} : (textEncoder && textEncoder.encodeInto) ?
			function(string, position) {
				return textEncoder.encodeInto(string, target.subarray(position)).written
			} : false

		let encoder = this
		let hasSharedStructures = options.structures || options.saveStructures
		let maxSharedStructures = options.maxSharedStructures
		if (maxSharedStructures == null)
			maxSharedStructures = hasSharedStructures ? 128 : 0
		if (maxSharedStructures > 8190)
			throw new Error('Maximum maxSharedStructure is 8190')
		let isSequential = options.sequential
		if (isSequential) {
			maxSharedStructures = 0
		}
		if (!this.structures)
			this.structures = []
		if (this.saveStructures)
			this.saveShared = this.saveStructures
		let samplingPackedValues, packedObjectMap, sharedValues = options.sharedValues
		let sharedPackedObjectMap
		if (sharedValues) {
			sharedPackedObjectMap = Object.create(null)
			for (let i = 0, l = sharedValues.length; i < l; i++) {
				sharedPackedObjectMap[sharedValues[i]] = i
			}
		}
		let recordIdsToRemove = []
		let transitionsCount = 0
		let serializationsSinceTransitionRebuild = 0
		
		this.mapEncode = function(value, encodeOptions) {
			// Experimental support for premapping keys using _keyMap instad of keyMap - not optiimised yet)
			if (this._keyMap && !this._mapped) {
				//console.log('encoding ', value)
				switch (value.constructor.name) {
					case 'Array': 
						value = value.map(r => this.encodeKeys(r))
						break
					//case 'Map': 
					//	value = this.encodeKeys(value)
					//	break
				}
				//this._mapped = true
			}
			return this.encode(value, encodeOptions)
		}
		
		this.encode = function(value, encodeOptions)	{
			if (!target) {
				target = new ByteArrayAllocate(8192)
				targetView = new DataView(target.buffer, 0, 8192)
				encode_position = 0
			}
			safeEnd = target.length - 10
			if (safeEnd - encode_position < 0x800) {
				// don't start too close to the end, 
				target = new ByteArrayAllocate(target.length)
				targetView = new DataView(target.buffer, 0, target.length)
				safeEnd = target.length - 10
				encode_position = 0
			} else if (encodeOptions === REUSE_BUFFER_MODE)
				encode_position = (encode_position + 7) & 0x7ffffff8 // Word align to make any future copying of this buffer faster
			start = encode_position
			if (encoder.useSelfDescribedHeader) {
				targetView.setUint32(encode_position, 0xd9d9f700) // tag two byte, then self-descriptive tag
				encode_position += 3
			}
			referenceMap = encoder.structuredClone ? new Map() : null
			if (encoder.bundleStrings && typeof value !== 'string') {
				encode_bundledStrings = []
				encode_bundledStrings.size = Infinity // force a new bundle start on first string
			} else
				encode_bundledStrings = null

			sharedStructures = encoder.structures
			if (sharedStructures) {
				if (sharedStructures.uninitialized) {
					let sharedData = encoder.getShared() || {}
					encoder.structures = sharedStructures = sharedData.structures || []
					encoder.sharedVersion = sharedData.version
					let sharedValues = encoder.sharedValues = sharedData.packedValues
					if (sharedValues) {
						sharedPackedObjectMap = {}
						for (let i = 0, l = sharedValues.length; i < l; i++)
							sharedPackedObjectMap[sharedValues[i]] = i
					}
				}
				let sharedStructuresLength = sharedStructures.length
				if (sharedStructuresLength > maxSharedStructures && !isSequential)
					sharedStructuresLength = maxSharedStructures
				if (!sharedStructures.transitions) {
					// rebuild our structure transitions
					sharedStructures.transitions = Object.create(null)
					for (let i = 0; i < sharedStructuresLength; i++) {
						let keys = sharedStructures[i]
						//console.log('shared struct keys:', keys)
						if (!keys)
							continue
						let nextTransition, transition = sharedStructures.transitions
						for (let j = 0, l = keys.length; j < l; j++) {
							if (transition[RECORD_SYMBOL] === undefined)
								transition[RECORD_SYMBOL] = i
							let key = keys[j]
							nextTransition = transition[key]
							if (!nextTransition) {
								nextTransition = transition[key] = Object.create(null)
							}
							transition = nextTransition
						}
						transition[RECORD_SYMBOL] = i | 0x100000
					}
				}
				if (!isSequential)
					sharedStructures.nextId = sharedStructuresLength
			}
			if (hasSharedUpdate)
				hasSharedUpdate = false
			structures = sharedStructures || []
			packedObjectMap = sharedPackedObjectMap
			if (options.pack) {
				let packedValues = new Map()
				packedValues.values = []
				packedValues.encoder = encoder
				packedValues.maxValues = options.maxPrivatePackedValues || (sharedPackedObjectMap ? 16 : Infinity)
				packedValues.objectMap = sharedPackedObjectMap || false
				packedValues.samplingPackedValues = samplingPackedValues
				findRepetitiveStrings(value, packedValues)
				if (packedValues.values.length > 0) {
					target[encode_position++] = 0xd8 // one-byte tag
					target[encode_position++] = 51 // tag 51 for packed shared structures https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
					writeArrayHeader(4)
					let valuesArray = packedValues.values
					encode(valuesArray)
					writeArrayHeader(0) // prefixes
					writeArrayHeader(0) // suffixes
					packedObjectMap = Object.create(sharedPackedObjectMap || null)
					for (let i = 0, l = valuesArray.length; i < l; i++) {
						packedObjectMap[valuesArray[i]] = i
					}
				}
			}
			throwOnIterable = encodeOptions & THROW_ON_ITERABLE;
			try {
				if (throwOnIterable)
					return;
				encode(value)
				if (encode_bundledStrings) {
					writeBundles(start, encode)
				}
				encoder.offset = encode_position // update the offset so next serialization doesn't write over our buffer, but can continue writing to same buffer sequentially
				if (referenceMap && referenceMap.idsToInsert) {
					encode_position += referenceMap.idsToInsert.length * 2
					if (encode_position > safeEnd)
						makeRoom(encode_position)
					encoder.offset = encode_position
					let serialized = insertIds(target.subarray(start, encode_position), referenceMap.idsToInsert)
					referenceMap = null
					return serialized
				}
				if (encodeOptions & REUSE_BUFFER_MODE) {
					target.start = start
					target.end = encode_position
					return target
				}
				return target.subarray(start, encode_position) // position can change if we call encode again in saveShared, so we get the buffer now
			} finally {
				if (sharedStructures) {
					if (serializationsSinceTransitionRebuild < 10)
						serializationsSinceTransitionRebuild++
					if (sharedStructures.length > maxSharedStructures)
						sharedStructures.length = maxSharedStructures
					if (transitionsCount > 10000) {
						// force a rebuild occasionally after a lot of transitions so it can get cleaned up
						sharedStructures.transitions = null
						serializationsSinceTransitionRebuild = 0
						transitionsCount = 0
						if (recordIdsToRemove.length > 0)
							recordIdsToRemove = []
					} else if (recordIdsToRemove.length > 0 && !isSequential) {
						for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
							recordIdsToRemove[i][RECORD_SYMBOL] = undefined
						}
						recordIdsToRemove = []
						//sharedStructures.nextId = maxSharedStructures
					}
				}
				if (hasSharedUpdate && encoder.saveShared) {
					if (encoder.structures.length > maxSharedStructures) {
						encoder.structures = encoder.structures.slice(0, maxSharedStructures)
					}
					// we can't rely on start/end with REUSE_BUFFER_MODE since they will (probably) change when we save
					let returnBuffer = target.subarray(start, encode_position)
					if (encoder.updateSharedData() === false)
						return encoder.encode(value) // re-encode if it fails
					return returnBuffer
				}
				if (encodeOptions & RESET_BUFFER_MODE)
					encode_position = start
			}
		}
		this.findCommonStringsToPack = () => {
			samplingPackedValues = new Map()
			if (!sharedPackedObjectMap)
				sharedPackedObjectMap = Object.create(null)
			return (options) => {
				let threshold = options && options.threshold || 4
				let position = this.pack ? options.maxPrivatePackedValues || 16 : 0
				if (!sharedValues)
					sharedValues = this.sharedValues = []
				for (let [ key, status ] of samplingPackedValues) {
					if (status.count > threshold) {
						sharedPackedObjectMap[key] = position++
						sharedValues.push(key)
						hasSharedUpdate = true
					}
				}
				while (this.saveShared && this.updateSharedData() === false) {}
				samplingPackedValues = null
			}
		}
		const encode = (value) => {
			if (encode_position > safeEnd)
				target = makeRoom(encode_position)

			var type = typeof value
			var length
			if (type === 'string') {
				if (packedObjectMap) {
					let packedPosition = packedObjectMap[value]
					if (packedPosition >= 0) {
						if (packedPosition < 16)
							target[encode_position++] = packedPosition + 0xe0 // simple values, defined in https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
						else {
							target[encode_position++] = 0xc6 // tag 6 defined in https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
							if (packedPosition & 1)
								encode((15 - packedPosition) >> 1)
							else
								encode((packedPosition - 16) >> 1)
						}
						return
/*						} else if (packedStatus.serializationId != serializationId) {
							packedStatus.serializationId = serializationId
							packedStatus.count = 1
							if (options.sharedPack) {
								let sharedCount = packedStatus.sharedCount = (packedStatus.sharedCount || 0) + 1
								if (shareCount > (options.sharedPack.threshold || 5)) {
									let sharedPosition = packedStatus.position = packedStatus.nextSharedPosition
									hasSharedUpdate = true
									if (sharedPosition < 16)
										target[position++] = sharedPosition + 0xc0

								}
							}
						} // else any in-doc incrementation?*/
					} else if (samplingPackedValues && !options.pack) {
						let status = samplingPackedValues.get(value)
						if (status)
							status.count++
						else
							samplingPackedValues.set(value, {
								count: 1,
							})
					}
				}
				let strLength = value.length
				if (encode_bundledStrings && strLength >= 4 && strLength < 0x400) {
					if ((encode_bundledStrings.size += strLength) > MAX_BUNDLE_SIZE) {
						let extStart
						let maxBytes = (encode_bundledStrings[0] ? encode_bundledStrings[0].length * 3 + encode_bundledStrings[1].length : 0) + 10
						if (encode_position + maxBytes > safeEnd)
							target = makeRoom(encode_position + maxBytes)
						target[encode_position++] = 0xd9 // tag 16-bit
						target[encode_position++] = 0xdf // tag 0xdff9
						target[encode_position++] = 0xf9
						// TODO: If we only have one bundle with any string data, only write one string bundle
						target[encode_position++] = encode_bundledStrings.position ? 0x84 : 0x82 // array of 4 or 2 elements depending on if we write bundles
						target[encode_position++] = 0x1a // 32-bit unsigned int
						extStart = encode_position - start
						encode_position += 4 // reserve for writing bundle reference
						if (encode_bundledStrings.position) {
							writeBundles(start, encode) // write the last bundles
						}
						encode_bundledStrings = ['', ''] // create new ones
						encode_bundledStrings.size = 0
						encode_bundledStrings.position = extStart
					}
					let twoByte = hasNonLatin.test(value)
					encode_bundledStrings[twoByte ? 0 : 1] += value
					target[encode_position++] = twoByte ? 0xce : 0xcf
					encode(strLength);
					return
				}
				let headerSize
				// first we estimate the header size, so we can write to the correct location
				if (strLength < 0x20) {
					headerSize = 1
				} else if (strLength < 0x100) {
					headerSize = 2
				} else if (strLength < 0x10000) {
					headerSize = 3
				} else {
					headerSize = 5
				}
				let maxBytes = strLength * 3
				if (encode_position + maxBytes > safeEnd)
					target = makeRoom(encode_position + maxBytes)

				if (strLength < 0x40 || !encodeUtf8) {
					let i, c1, c2, strPosition = encode_position + headerSize
					for (i = 0; i < strLength; i++) {
						c1 = value.charCodeAt(i)
						if (c1 < 0x80) {
							target[strPosition++] = c1
						} else if (c1 < 0x800) {
							target[strPosition++] = c1 >> 6 | 0xc0
							target[strPosition++] = c1 & 0x3f | 0x80
						} else if (
							(c1 & 0xfc00) === 0xd800 &&
							((c2 = value.charCodeAt(i + 1)) & 0xfc00) === 0xdc00
						) {
							c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff)
							i++
							target[strPosition++] = c1 >> 18 | 0xf0
							target[strPosition++] = c1 >> 12 & 0x3f | 0x80
							target[strPosition++] = c1 >> 6 & 0x3f | 0x80
							target[strPosition++] = c1 & 0x3f | 0x80
						} else {
							target[strPosition++] = c1 >> 12 | 0xe0
							target[strPosition++] = c1 >> 6 & 0x3f | 0x80
							target[strPosition++] = c1 & 0x3f | 0x80
						}
					}
					length = strPosition - encode_position - headerSize
				} else {
					length = encodeUtf8(value, encode_position + headerSize, maxBytes)
				}

				if (length < 0x18) {
					target[encode_position++] = 0x60 | length
				} else if (length < 0x100) {
					if (headerSize < 2) {
						target.copyWithin(encode_position + 2, encode_position + 1, encode_position + 1 + length)
					}
					target[encode_position++] = 0x78
					target[encode_position++] = length
				} else if (length < 0x10000) {
					if (headerSize < 3) {
						target.copyWithin(encode_position + 3, encode_position + 2, encode_position + 2 + length)
					}
					target[encode_position++] = 0x79
					target[encode_position++] = length >> 8
					target[encode_position++] = length & 0xff
				} else {
					if (headerSize < 5) {
						target.copyWithin(encode_position + 5, encode_position + 3, encode_position + 3 + length)
					}
					target[encode_position++] = 0x7a
					targetView.setUint32(encode_position, length)
					encode_position += 4
				}
				encode_position += length
			} else if (type === 'number') {
				if (!this.alwaysUseFloat && value >>> 0 === value) {// positive integer, 32-bit or less
					// positive uint
					if (value < 0x18) {
						target[encode_position++] = value
					} else if (value < 0x100) {
						target[encode_position++] = 0x18
						target[encode_position++] = value
					} else if (value < 0x10000) {
						target[encode_position++] = 0x19
						target[encode_position++] = value >> 8
						target[encode_position++] = value & 0xff
					} else {
						target[encode_position++] = 0x1a
						targetView.setUint32(encode_position, value)
						encode_position += 4
					}
				} else if (!this.alwaysUseFloat && value >> 0 === value) { // negative integer
					if (value >= -0x18) {
						target[encode_position++] = 0x1f - value
					} else if (value >= -0x100) {
						target[encode_position++] = 0x38
						target[encode_position++] = ~value
					} else if (value >= -0x10000) {
						target[encode_position++] = 0x39
						targetView.setUint16(encode_position, ~value)
						encode_position += 2
					} else {
						target[encode_position++] = 0x3a
						targetView.setUint32(encode_position, ~value)
						encode_position += 4
					}
				} else {
					let useFloat32
					if ((useFloat32 = this.useFloat32) > 0 && value < 0x100000000 && value >= -0x80000000) {
						target[encode_position++] = 0xfa
						targetView.setFloat32(encode_position, value)
						let xShifted
						if (useFloat32 < 4 ||
								// this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
								((xShifted = value * mult10[((target[encode_position] & 0x7f) << 1) | (target[encode_position + 1] >> 7)]) >> 0) === xShifted) {
							encode_position += 4
							return
						} else
							encode_position-- // move back into position for writing a double
					}
					target[encode_position++] = 0xfb
					targetView.setFloat64(encode_position, value)
					encode_position += 8
				}
			} else if (type === 'object') {
				if (!value)
					target[encode_position++] = 0xf6
				else {
					if (referenceMap) {
						let referee = referenceMap.get(value)
						if (referee) {
							target[encode_position++] = 0xd8
							target[encode_position++] = 29 // http://cbor.schmorp.de/value-sharing
							target[encode_position++] = 0x19 // 16-bit uint
							if (!referee.references) {
								let idsToInsert = referenceMap.idsToInsert || (referenceMap.idsToInsert = [])
								referee.references = []
								idsToInsert.push(referee)
							}
							referee.references.push(encode_position - start)
							encode_position += 2 // TODO: also support 32-bit
							return
						} else 
							referenceMap.set(value, { offset: encode_position - start })
					}
					let constructor = value.constructor
					if (constructor === Object) {
						writeObject(value)
					} else if (constructor === Array) {
						length = value.length
						if (length < 0x18) {
							target[encode_position++] = 0x80 | length
						} else {
							writeArrayHeader(length)
						}
						for (let i = 0; i < length; i++) {
							encode(value[i])
						}
					} else if (constructor === Map) {
						if (this.mapsAsObjects ? this.useTag259ForMaps !== false : this.useTag259ForMaps) {
							// use Tag 259 (https://github.com/shanewholloway/js-cbor-codec/blob/master/docs/CBOR-259-spec--explicit-maps.md) for maps if the user wants it that way
							target[encode_position++] = 0xd9
							target[encode_position++] = 1
							target[encode_position++] = 3
						}
						length = value.size
						if (length < 0x18) {
							target[encode_position++] = 0xa0 | length
						} else if (length < 0x100) {
							target[encode_position++] = 0xb8
							target[encode_position++] = length
						} else if (length < 0x10000) {
							target[encode_position++] = 0xb9
							target[encode_position++] = length >> 8
							target[encode_position++] = length & 0xff
						} else {
							target[encode_position++] = 0xba
							targetView.setUint32(encode_position, length)
							encode_position += 4
						}
						if (encoder.keyMap) { 
							for (let [ key, entryValue ] of value) {
								encode(encoder.encodeKey(key))
								encode(entryValue)
							} 
						} else { 
							for (let [ key, entryValue ] of value) {
								encode(key) 
								encode(entryValue)
							} 	
						}
					} else {
						for (let i = 0, l = extensions.length; i < l; i++) {
							let extensionClass = extensionClasses[i]
							if (value instanceof extensionClass) {
								let extension = extensions[i]
								let tag = extension.tag
								if (tag == undefined)
									tag = extension.getTag && extension.getTag.call(this, value)
								if (tag < 0x18) {
									target[encode_position++] = 0xc0 | tag
								} else if (tag < 0x100) {
									target[encode_position++] = 0xd8
									target[encode_position++] = tag
								} else if (tag < 0x10000) {
									target[encode_position++] = 0xd9
									target[encode_position++] = tag >> 8
									target[encode_position++] = tag & 0xff
								} else if (tag > -1) {
									target[encode_position++] = 0xda
									targetView.setUint32(encode_position, tag)
									encode_position += 4
								} // else undefined, don't write tag
								extension.encode.call(this, value, encode, makeRoom)
								return
							}
						}
						if (value[Symbol.iterator]) {
							if (throwOnIterable) {
								let error = new Error('Iterable should be serialized as iterator')
								error.iteratorNotHandled = true;
								throw error;
							}
							target[encode_position++] = 0x9f // indefinite length array
							for (let entry of value) {
								encode(entry)
							}
							target[encode_position++] = 0xff // stop-code
							return
						}
						if (value[Symbol.asyncIterator] || isBlob(value)) {
							let error = new Error('Iterable/blob should be serialized as iterator')
							error.iteratorNotHandled = true;
							throw error;
						}
						if (this.useToJSON && value.toJSON) {
							const json = value.toJSON()
							// if for some reason value.toJSON returns itself it'll loop forever
							if (json !== value)
								return encode(json)
						}

						// no extension found, write as a plain object
						writeObject(value)
					}
				}
			} else if (type === 'boolean') {
				target[encode_position++] = value ? 0xf5 : 0xf4
			} else if (type === 'bigint') {
				if (value < (BigInt(1)<<BigInt(64)) && value >= 0) {
					// use an unsigned int as long as it fits
					target[encode_position++] = 0x1b
					targetView.setBigUint64(encode_position, value)
				} else if (value > -(BigInt(1)<<BigInt(64)) && value < 0) {
					// if we can fit an unsigned int, use that
					target[encode_position++] = 0x3b
					targetView.setBigUint64(encode_position, -value - BigInt(1))
				} else {
					// overflow
					if (this.largeBigIntToFloat) {
						target[encode_position++] = 0xfb
						targetView.setFloat64(encode_position, Number(value))
					} else {
						if (value >= BigInt(0))
							target[encode_position++] = 0xc2 // tag 2
						else {
							target[encode_position++] = 0xc3 // tag 2
							value = BigInt(-1) - value;
						}
						let bytes = [];
						while (value) {
							bytes.push(Number(value & BigInt(0xff)));
							value >>= BigInt(8);
						}
						writeBuffer(new Uint8Array(bytes.reverse()), makeRoom);
						return;
					}
				}
				encode_position += 8
			} else if (type === 'undefined') {
				target[encode_position++] = 0xf7
			} else {
				throw new Error('Unknown type: ' + type)
			}
		}

		const writeObject = this.useRecords === false ? this.variableMapSize ? (object) => {
			// this method is slightly slower, but generates "preferred serialization" (optimally small for smaller objects)
			let keys = Object.keys(object)
			let vals = Object.values(object)
			let length = keys.length
			if (length < 0x18) {
				target[encode_position++] = 0xa0 | length
			} else if (length < 0x100) {
				target[encode_position++] = 0xb8
				target[encode_position++] = length
			} else if (length < 0x10000) {
				target[encode_position++] = 0xb9
				target[encode_position++] = length >> 8
				target[encode_position++] = length & 0xff
			} else {
				target[encode_position++] = 0xba
				targetView.setUint32(encode_position, length)
				encode_position += 4
			}
			let key
			if (encoder.keyMap) { 
				for (let i = 0; i < length; i++) {
					encode(encoder.encodeKey(keys[i]))
					encode(vals[i])
				}
			} else {
				for (let i = 0; i < length; i++) {
					encode(keys[i])
					encode(vals[i])
				}
			}
		} :
		(object) => {
			target[encode_position++] = 0xb9 // always use map 16, so we can preallocate and set the length afterwards
			let objectOffset = encode_position - start
			encode_position += 2
			let size = 0
			if (encoder.keyMap) {
				for (let key in object) if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					encode(encoder.encodeKey(key))
					encode(object[key])
					size++
				}
			} else { 
				for (let key in object) if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
						encode(key)
						encode(object[key])
					size++
				}
			}
			target[objectOffset++ + start] = size >> 8
			target[objectOffset + start] = size & 0xff
		} :
		(object, skipValues) => {
			let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null))
			let newTransitions = 0
			let length = 0
			let parentRecordId
			let keys
			if (this.keyMap) {
				keys = Object.keys(object).map(k => this.encodeKey(k))
				length = keys.length
				for (let i = 0; i < length; i++) {
					let key = keys[i]
					nextTransition = transition[key]
					if (!nextTransition) {
						nextTransition = transition[key] = Object.create(null)
						newTransitions++
					}
					transition = nextTransition
				}				
			} else {
				for (let key in object) if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					nextTransition = transition[key]
					if (!nextTransition) {
						if (transition[RECORD_SYMBOL] & 0x100000) {// this indicates it is a brancheable/extendable terminal node, so we will use this record id and extend it
							parentRecordId = transition[RECORD_SYMBOL] & 0xffff
						}
						nextTransition = transition[key] = Object.create(null)
						newTransitions++
					}
					transition = nextTransition
					length++
				}
			}
			let recordId = transition[RECORD_SYMBOL]
			if (recordId !== undefined) {
				recordId &= 0xffff
				target[encode_position++] = 0xd9
				target[encode_position++] = (recordId >> 8) | 0xe0
				target[encode_position++] = recordId & 0xff
			} else {
				if (!keys)
					keys = transition.__keys__ || (transition.__keys__ = Object.keys(object))
				if (parentRecordId === undefined) {
					recordId = structures.nextId++
					if (!recordId) {
						recordId = 0
						structures.nextId = 1
					}
					if (recordId >= MAX_STRUCTURES) {// cycle back around
						structures.nextId = (recordId = maxSharedStructures) + 1
					}
				} else {
					recordId = parentRecordId
				}
				structures[recordId] = keys
				if (recordId < maxSharedStructures) {
					target[encode_position++] = 0xd9
					target[encode_position++] = (recordId >> 8) | 0xe0
					target[encode_position++] = recordId & 0xff
					transition = structures.transitions
					for (let i = 0; i < length; i++) {
						if (transition[RECORD_SYMBOL] === undefined || (transition[RECORD_SYMBOL] & 0x100000))
							transition[RECORD_SYMBOL] = recordId
						transition = transition[keys[i]]
					}
					transition[RECORD_SYMBOL] = recordId | 0x100000 // indicates it is a extendable terminal
					hasSharedUpdate = true
				} else {
					transition[RECORD_SYMBOL] = recordId
					targetView.setUint32(encode_position, 0xd9dfff00) // tag two byte, then record definition id
					encode_position += 3
					if (newTransitions)
						transitionsCount += serializationsSinceTransitionRebuild * newTransitions
					// record the removal of the id, we can maintain our shared structure
					if (recordIdsToRemove.length >= MAX_STRUCTURES - maxSharedStructures)
						recordIdsToRemove.shift()[RECORD_SYMBOL] = undefined // we are cycling back through, and have to remove old ones
					recordIdsToRemove.push(transition)
					writeArrayHeader(length + 2)
					encode(0xe000 + recordId)
					encode(keys)
					if (skipValues) return; // special exit for iterator
					for (let key in object)
						if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key))
							encode(object[key])
					return
				}
			}
			if (length < 0x18) { // write the array header
				target[encode_position++] = 0x80 | length
			} else {
				writeArrayHeader(length)
			}
			if (skipValues) return; // special exit for iterator
			for (let key in object)
				if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key))
					encode(object[key])
		}
		const makeRoom = (end) => {
			let newSize
			if (end > 0x1000000) {
				// special handling for really large buffers
				if ((end - start) > MAX_BUFFER_SIZE)
					throw new Error('Encoded buffer would be larger than maximum buffer size')
				newSize = Math.min(MAX_BUFFER_SIZE,
					Math.round(Math.max((end - start) * (end > 0x4000000 ? 1.25 : 2), 0x400000) / 0x1000) * 0x1000)
			} else // faster handling for smaller buffers
				newSize = ((Math.max((end - start) << 2, target.length - 1) >> 12) + 1) << 12
			let newBuffer = new ByteArrayAllocate(newSize)
			targetView = new DataView(newBuffer.buffer, 0, newSize)
			if (target.copy)
				target.copy(newBuffer, 0, start, end)
			else
				newBuffer.set(target.slice(start, end))
			encode_position -= start
			start = 0
			safeEnd = newBuffer.length - 10
			return target = newBuffer
		}
		let chunkThreshold = 100;
		let continuedChunkThreshold = 1000;
		this.encodeAsIterable = function(value, options) {
			return startEncoding(value, options, encodeObjectAsIterable);
		}
		this.encodeAsAsyncIterable = function(value, options) {
			return startEncoding(value, options, encodeObjectAsAsyncIterable);
		}

		function* encodeObjectAsIterable(object, iterateProperties, finalIterable) {
			let constructor = object.constructor;
			if (constructor === Object) {
				let useRecords = encoder.useRecords !== false;
				if (useRecords)
					writeObject(object, true); // write the record identifier
				else
					writeEntityLength(Object.keys(object).length, 0xa0);
				for (let key in object) {
					let value = object[key];
					if (!useRecords) encode(key);
					if (value && typeof value === 'object') {
						if (iterateProperties[key])
							yield* encodeObjectAsIterable(value, iterateProperties[key]);
						else
							yield* tryEncode(value, iterateProperties, key);
					} else encode(value);
				}
			} else if (constructor === Array) {
				let length = object.length;
				writeArrayHeader(length);
				for (let i = 0; i < length; i++) {
					let value = object[i];
					if (value && (typeof value === 'object' || encode_position - start > chunkThreshold)) {
						if (iterateProperties.element)
							yield* encodeObjectAsIterable(value, iterateProperties.element);
						else
							yield* tryEncode(value, iterateProperties, 'element');
					} else encode(value);
				}
			} else if (object[Symbol.iterator] && !object.buffer) { // iterator, but exclude typed arrays
				target[encode_position++] = 0x9f; // start indefinite array
				for (let value of object) {
					if (value && (typeof value === 'object' || encode_position - start > chunkThreshold)) {
						if (iterateProperties.element)
							yield* encodeObjectAsIterable(value, iterateProperties.element);
						else
							yield* tryEncode(value, iterateProperties, 'element');
					} else encode(value);
				}
				target[encode_position++] = 0xff; // stop byte
			} else if (isBlob(object)){
				writeEntityLength(object.size, 0x40); // encode as binary data
				yield target.subarray(start, encode_position);
				yield object; // directly return blobs, they have to be encoded asynchronously
				restartEncoding();
			} else if (object[Symbol.asyncIterator]) {
				target[encode_position++] = 0x9f; // start indefinite array
				yield target.subarray(start, encode_position);
				yield object; // directly return async iterators, they have to be encoded asynchronously
				restartEncoding();
				target[encode_position++] = 0xff; // stop byte
			} else {
				encode(object);
			}
			if (finalIterable && encode_position > start) yield target.subarray(start, encode_position);
			else if (encode_position - start > chunkThreshold) {
				yield target.subarray(start, encode_position);
				restartEncoding();
			}
		}
		function* tryEncode(value, iterateProperties, key) {
			let restart = encode_position - start;
			try {
				encode(value);
				if (encode_position - start > chunkThreshold) {
					yield target.subarray(start, encode_position);
					restartEncoding();
				}
			} catch (error) {
				if (error.iteratorNotHandled) {
					iterateProperties[key] = {};
					encode_position = start + restart; // restart our position so we don't have partial data from last encode
					yield* encodeObjectAsIterable.call(this, value, iterateProperties[key]);
				} else throw error;
			}
		}
		function restartEncoding() {
			chunkThreshold = continuedChunkThreshold;
			encoder.encode(null, THROW_ON_ITERABLE); // restart encoding
		}
		function startEncoding(value, options, encodeIterable) {
			if (options && options.chunkThreshold) // explicitly specified chunk sizes
				chunkThreshold = continuedChunkThreshold = options.chunkThreshold;
			else // we start with a smaller threshold to get initial bytes sent quickly
				chunkThreshold = 100;
			if (value && typeof value === 'object') {
				encoder.encode(null, THROW_ON_ITERABLE); // start encoding
				return encodeIterable(value, encoder.iterateProperties || (encoder.iterateProperties = {}), true);
			}
			return [encoder.encode(value)];
		}

		async function* encodeObjectAsAsyncIterable(value, iterateProperties) {
			for (let encodedValue of encodeObjectAsIterable(value, iterateProperties, true)) {
				let constructor = encodedValue.constructor;
				if (constructor === ByteArray || constructor === Uint8Array)
					yield encodedValue;
				else if (isBlob(encodedValue)) {
					let reader = encodedValue.stream().getReader();
					let next;
					while (!(next = await reader.read()).done) {
						yield next.value;
					}
				} else if (encodedValue[Symbol.asyncIterator]) {
					for await (let asyncValue of encodedValue) {
						restartEncoding();
						if (asyncValue)
							yield* encodeObjectAsAsyncIterable(asyncValue, iterateProperties.async || (iterateProperties.async = {}));
						else yield encoder.encode(asyncValue);
					}
				} else {
					yield encodedValue;
				}
			}
		}
	}
	useBuffer(buffer) {
		// this means we are finished using our own buffer and we can write over it safely
		target = buffer
		targetView = new DataView(target.buffer, target.byteOffset, target.byteLength)
		encode_position = 0
	}
	clearSharedData() {
		if (this.structures)
			this.structures = []
		if (this.sharedValues)
			this.sharedValues = undefined
	}
	updateSharedData() {
		let lastVersion = this.sharedVersion || 0
		this.sharedVersion = lastVersion + 1
		let structuresCopy = this.structures.slice(0)
		let sharedData = new SharedData(structuresCopy, this.sharedValues, this.sharedVersion)
		let saveResults = this.saveShared(sharedData,
				existingShared => (existingShared && existingShared.version || 0) == lastVersion)
		if (saveResults === false) {
			// get updated structures and try again if the update failed
			sharedData = this.getShared() || {}
			this.structures = sharedData.structures || []
			this.sharedValues = sharedData.packedValues
			this.sharedVersion = sharedData.version
			this.structures.nextId = this.structures.length
		} else {
			// restore structures
			structuresCopy.forEach((structure, i) => this.structures[i] = structure)
		}
		// saveShared may fail to write and reload, or may have reloaded to check compatibility and overwrite saved data, either way load the correct shared data
		return saveResults
	}
}
function writeEntityLength(length, majorValue) {
	if (length < 0x18)
		target[encode_position++] = majorValue | length
	else if (length < 0x100) {
		target[encode_position++] = majorValue | 0x18
		target[encode_position++] = length
	} else if (length < 0x10000) {
		target[encode_position++] = majorValue | 0x19
		target[encode_position++] = length >> 8
		target[encode_position++] = length & 0xff
	} else {
		target[encode_position++] = majorValue | 0x1a
		targetView.setUint32(encode_position, length)
		encode_position += 4
	}

}
class SharedData {
	constructor(structures, values, version) {
		this.structures = structures
		this.packedValues = values
		this.version = version
	}
}

function writeArrayHeader(length) {
	if (length < 0x18)
		target[encode_position++] = 0x80 | length
	else if (length < 0x100) {
		target[encode_position++] = 0x98
		target[encode_position++] = length
	} else if (length < 0x10000) {
		target[encode_position++] = 0x99
		target[encode_position++] = length >> 8
		target[encode_position++] = length & 0xff
	} else {
		target[encode_position++] = 0x9a
		targetView.setUint32(encode_position, length)
		encode_position += 4
	}
}

const BlobConstructor = typeof Blob === 'undefined' ? function(){} : Blob;
function isBlob(object) {
	if (object instanceof BlobConstructor)
		return true;
	let tag = object[Symbol.toStringTag];
	return tag === 'Blob' || tag === 'File';
}
function findRepetitiveStrings(value, packedValues) {
	switch(typeof value) {
		case 'string':
			if (value.length > 3) {
				if (packedValues.objectMap[value] > -1 || packedValues.values.length >= packedValues.maxValues)
					return
				let packedStatus = packedValues.get(value)
				if (packedStatus) {
					if (++packedStatus.count == 2) {
						packedValues.values.push(value)
					}
				} else {
					packedValues.set(value, {
						count: 1,
					})
					if (packedValues.samplingPackedValues) {
						let status = packedValues.samplingPackedValues.get(value)
						if (status)
							status.count++
						else
							packedValues.samplingPackedValues.set(value, {
								count: 1,
							})
					}
				}
			}
			break
		case 'object':
			if (value) {
				if (value instanceof Array) {
					for (let i = 0, l = value.length; i < l; i++) {
						findRepetitiveStrings(value[i], packedValues)
					}

				} else {
					let includeKeys = !packedValues.encoder.useRecords
					for (var key in value) {
						if (value.hasOwnProperty(key)) {
							if (includeKeys)
								findRepetitiveStrings(key, packedValues)
							findRepetitiveStrings(value[key], packedValues)
						}
					}
				}
			}
			break
		case 'function': console.log(value)
	}
}
const encode_isLittleEndianMachine = new Uint8Array(new Uint16Array([1]).buffer)[0] == 1
extensionClasses = [ Date, Set, Error, RegExp, Tag, ArrayBuffer,
	Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array,
	typeof BigUint64Array == 'undefined' ? function() {} : BigUint64Array, Int8Array, Int16Array, Int32Array,
	typeof BigInt64Array == 'undefined' ? function() {} : BigInt64Array,
	Float32Array, Float64Array, SharedData ]

//Object.getPrototypeOf(Uint8Array.prototype).constructor /*TypedArray*/
extensions = [{ // Date
	tag: 1,
	encode(date, encode) {
		let seconds = date.getTime() / 1000
		if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 0x100000000) {
			// Timestamp 32
			target[encode_position++] = 0x1a
			targetView.setUint32(encode_position, seconds)
			encode_position += 4
		} else {
			// Timestamp float64
			target[encode_position++] = 0xfb
			targetView.setFloat64(encode_position, seconds)
			encode_position += 8
		}
	}
}, { // Set
	tag: 258, // https://github.com/input-output-hk/cbor-sets-spec/blob/master/CBOR_SETS.md
	encode(set, encode) {
		let array = Array.from(set)
		encode(array)
	}
}, { // Error
	tag: 27, // http://cbor.schmorp.de/generic-object
	encode(error, encode) {
		encode([ error.name, error.message ])
	}
}, { // RegExp
	tag: 27, // http://cbor.schmorp.de/generic-object
	encode(regex, encode) {
		encode([ 'RegExp', regex.source, regex.flags ])
	}
}, { // Tag
	getTag(tag) {
		return tag.tag
	},
	encode(tag, encode) {
		encode(tag.value)
	}
}, { // ArrayBuffer
	encode(arrayBuffer, encode, makeRoom) {
		writeBuffer(arrayBuffer, makeRoom)
	}
}, { // Uint8Array
	getTag(typedArray) {
		if (typedArray.constructor === Uint8Array) {
			if (this.tagUint8Array || hasNodeBuffer && this.tagUint8Array !== false)
				return 64;
		} // else no tag
	},
	encode(typedArray, encode, makeRoom) {
		writeBuffer(typedArray, makeRoom)
	}
},
	typedArrayEncoder(68, 1),
	typedArrayEncoder(69, 2),
	typedArrayEncoder(70, 4),
	typedArrayEncoder(71, 8),
	typedArrayEncoder(72, 1),
	typedArrayEncoder(77, 2),
	typedArrayEncoder(78, 4),
	typedArrayEncoder(79, 8),
	typedArrayEncoder(85, 4),
	typedArrayEncoder(86, 8),
{
	encode(sharedData, encode) { // write SharedData
		let packedValues = sharedData.packedValues || []
		let sharedStructures = sharedData.structures || []
		if (packedValues.values.length > 0) {
			target[encode_position++] = 0xd8 // one-byte tag
			target[encode_position++] = 51 // tag 51 for packed shared structures https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
			writeArrayHeader(4)
			let valuesArray = packedValues.values
			encode(valuesArray)
			writeArrayHeader(0) // prefixes
			writeArrayHeader(0) // suffixes
			packedObjectMap = Object.create(sharedPackedObjectMap || null)
			for (let i = 0, l = valuesArray.length; i < l; i++) {
				packedObjectMap[valuesArray[i]] = i
			}
		}
		if (sharedStructures) {
			targetView.setUint32(encode_position, 0xd9dffe00)
			encode_position += 3
			let definitions = sharedStructures.slice(0)
			definitions.unshift(0xe000)
			definitions.push(new Tag(sharedData.version, 0x53687264))
			encode(definitions)
		} else
			encode(new Tag(sharedData.version, 0x53687264))
		}
	}]
function typedArrayEncoder(tag, size) {
	if (!encode_isLittleEndianMachine && size > 1)
		tag -= 4 // the big endian equivalents are 4 less
	return {
		tag: tag,
		encode: function writeExtBuffer(typedArray, encode) {
			let length = typedArray.byteLength
			let offset = typedArray.byteOffset || 0
			let buffer = typedArray.buffer || typedArray
			encode(hasNodeBuffer ? encode_Buffer.from(buffer, offset, length) :
				new Uint8Array(buffer, offset, length))
		}
	}
}
function writeBuffer(buffer, makeRoom) {
	let length = buffer.byteLength
	if (length < 0x18) {
		target[encode_position++] = 0x40 + length
	} else if (length < 0x100) {
		target[encode_position++] = 0x58
		target[encode_position++] = length
	} else if (length < 0x10000) {
		target[encode_position++] = 0x59
		target[encode_position++] = length >> 8
		target[encode_position++] = length & 0xff
	} else {
		target[encode_position++] = 0x5a
		targetView.setUint32(encode_position, length)
		encode_position += 4
	}
	if (encode_position + length >= target.length) {
		makeRoom(encode_position + length)
	}
	// if it is already a typed array (has an ArrayBuffer), use that, but if it is an ArrayBuffer itself,
	// must wrap it to set it.
	target.set(buffer.buffer ? buffer : new Uint8Array(buffer), encode_position)
	encode_position += length
}

function insertIds(serialized, idsToInsert) {
	// insert the ids that need to be referenced for structured clones
	let nextId
	let distanceToMove = idsToInsert.length * 2
	let lastEnd = serialized.length - distanceToMove
	idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1)
	for (let id = 0; id < idsToInsert.length; id++) {
		let referee = idsToInsert[id]
		referee.id = id
		for (let position of referee.references) {
			serialized[position++] = id >> 8
			serialized[position] = id & 0xff
		}
	}
	while (nextId = idsToInsert.pop()) {
		let offset = nextId.offset
		serialized.copyWithin(offset + distanceToMove, offset, lastEnd)
		distanceToMove -= 2
		let position = offset + distanceToMove
		serialized[position++] = 0xd8
		serialized[position++] = 28 // http://cbor.schmorp.de/value-sharing
		lastEnd = offset
	}
	return serialized
}
function writeBundles(start, encode) {
	targetView.setUint32(encode_bundledStrings.position + start, encode_position - encode_bundledStrings.position - start + 1) // the offset to bundle
	let writeStrings = encode_bundledStrings
	encode_bundledStrings = null
	encode(writeStrings[0])
	encode(writeStrings[1])
}

function encode_addExtension(extension) {
	if (extension.Class) {
		if (!extension.encode)
			throw new Error('Extension has no encode function')
		extensionClasses.unshift(extension.Class)
		extensions.unshift(extension)
	}
	addExtension(extension)
}
let defaultEncoder = new Encoder({ useRecords: false })
const encode = defaultEncoder.encode
const encodeAsIterable = defaultEncoder.encodeAsIterable
const encodeAsAsyncIterable = defaultEncoder.encodeAsAsyncIterable

;
const { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS
const REUSE_BUFFER_MODE = 512
const RESET_BUFFER_MODE = 1024
const THROW_ON_ITERABLE = 2048



;// ./node_modules/cbor-x/iterators.js



/**
 * Given an Iterable first argument, returns an Iterable where each value is encoded as a Buffer
 * If the argument is only Async Iterable, the return value will be an Async Iterable.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterator} objectIterator - iterable source, like a Readable object stream, an array, Set, or custom object
 * @param {options} [options] - cbor-x Encoder options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator>}
 */
function encodeIter (objectIterator, options = {}) {
  if (!objectIterator || typeof objectIterator !== 'object') {
    throw new Error('first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable')
  } else if (typeof objectIterator[Symbol.iterator] === 'function') {
    return encodeIterSync(objectIterator, options)
  } else if (typeof objectIterator.then === 'function' || typeof objectIterator[Symbol.asyncIterator] === 'function') {
    return encodeIterAsync(objectIterator, options)
  } else {
    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise')
  }
}

function * encodeIterSync (objectIterator, options) {
  const encoder = new Encoder(options)
  for (const value of objectIterator) {
    yield encoder.encode(value)
  }
}

async function * encodeIterAsync (objectIterator, options) {
  const encoder = new Encoder(options)
  for await (const value of objectIterator) {
    yield encoder.encode(value)
  }
}

/**
 * Given an Iterable/Iterator input which yields buffers, returns an IterableIterator which yields sync decoded objects
 * Or, given an Async Iterable/Iterator which yields promises resolving in buffers, returns an AsyncIterableIterator.
 * @param {Iterable|Iterator|AsyncIterable|AsyncIterableIterator} bufferIterator
 * @param {object} [options] - Decoder options
 * @returns {IterableIterator|Promise.<AsyncIterableIterator}
 */
function decodeIter (bufferIterator, options = {}) {
  if (!bufferIterator || typeof bufferIterator !== 'object') {
    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise')
  }

  const decoder = new Decoder(options)
  let incomplete
  const parser = (chunk) => {
    let yields
    // if there's incomplete data from previous chunk, concatinate and try again
    if (incomplete) {
      chunk = Buffer.concat([incomplete, chunk])
      incomplete = undefined
    }

    try {
      yields = decoder.decodeMultiple(chunk)
    } catch (err) {
      if (err.incomplete) {
        incomplete = chunk.slice(err.lastPosition)
        yields = err.values
      } else {
        throw err
      }
    }
    return yields
  }

  if (typeof bufferIterator[Symbol.iterator] === 'function') {
    return (function * iter () {
      for (const value of bufferIterator) {
        yield * parser(value)
      }
    })()
  } else if (typeof bufferIterator[Symbol.asyncIterator] === 'function') {
    return (async function * iter () {
      for await (const value of bufferIterator) {
        yield * parser(value)
      }
    })()
  }
}

;// ./node_modules/cbor-x/index.js




// EXTERNAL MODULE: ./node_modules/@open-ordinal/metadata/lib/OOMD.js
var OOMD = __webpack_require__(654);
;// ./lib/browser/OOST.Core.js
/*!
 * Open Ordinal Stitch
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOST (Browser)
 */




//#endregion
//#region Privates
let _stitchOptions = new StitchOptions();
let _baseUrl = "";
let _id = "";
//#endregion
//#region Main Actions
/**
 * Stitches the provided options into a buffer.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<Buffer | undefined>} A promise that resolves to a Buffer if successful, or undefined if not.
 */
async function stitchAsArrayBuffer(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length == 0)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    return joinArrayBuffers(parts);
}
/**
 * Stitches the provided options into a data URL.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
async function stitchAsDataUrl(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length != options.parts?.length)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    var buffer = joinArrayBuffers(parts);
    return await arrayBufferToDataURL(buffer, contentType);
}
/**
 * Stitches the provided options into a string.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
async function stitchAsString(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length == 0)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    return parts.join("");
}
//#endregion
//#region Helpers
/**
 * Set the internal stored Ordinal Id.
 * @category Core
 * @param {string} id Ordinal Id
 */
function setId(id) { _id = id; }
/**
 * Get the internal stored Ordinal Id.
 * @category Core
 * @returns {string} Ordinal Id
 */
function getId() {
    if (_id == null || _id == "") {
        _id = getInscriptionIdFromUrl();
    }
    return _id;
}
/**
 * Asynchronously retrieves metadata for a given inscription ID.
 *
 * @category Core
 * @param {string} [inscriptionId=getId()] - The unique identifier for the inscription. Defaults to the result of getId().
 * @param {string} [baseUrl=_baseUrl] - The base URL for the API endpoint. Defaults to _baseUrl.
 * @returns {Promise<OOMD.Metadata>} - A promise that resolves to the metadata object.
 * @throws Will throw an error if the fetch operation fails or if the response is not OK.
 */
async function getInscriptionMetadata(inscriptionId = getId(), baseUrl = _baseUrl) {
    // Fetch the metadata for the given inscription ID from the API endpoint
    const response = await fetch(prepareUrl(`/r/metadata/${inscriptionId}`, baseUrl));
    // Check if the response is not OK (status code outside the range 200-299)
    if (!response.ok) {
        throw new Error("No inscription for Id");
    }
    // Parse the response as a JSON string containing hexadecimal data
    const dataCBORasHexString = await response.json();
    // Convert the hexadecimal string to a buffer
    var dataAsBuffer = new Uint8Array(dataCBORasHexString.match(/[\da-f]{2}/gi).map(function (hex) {
        return parseInt(hex, 16);
    }));
    // Decode the buffer into the metadata object
    const data = decode(dataAsBuffer);
    // Return the decoded metadata
    return data;
}
/**
 * Asynchronously fetches the page data for a specific SAT at a given page number.
 *
 * @category Core
 * @param {number} sat - The SAT number to fetch the page data for.
 * @param {number} [page=0] - The page number to fetch. Defaults to 0.
 * @param {string} [baseUrl=_baseUrl] - Optional base URL for the fetch. Defaults to _baseUrl.
 * @returns {Promise<{ids: Array<string>, more: boolean, page: number}>} - A promise that resolves to an object containing the IDs, a boolean indicating if there are more pages, and the current page number.
 * @throws Will throw an error if the fetch operation fails or if the response is not OK.
 */
async function getSatPage(sat, page = 0, baseUrl = _baseUrl) {
    try {
        // Fetch the page data for the given SAT number and page number from the API endpoint
        const response = await fetch(prepareUrl(`/r/sat/${sat}/${page}`, baseUrl));
        // Check if the response is not OK (status code outside the range 200-299)
        if (!response.ok) {
            throw new Error('Ord API call was unsuccessful');
        }
        // Parse the response as JSON
        const data = await response.json();
        // Extract the IDs, more flag, and page data from the response
        const ids = data.ids;
        const more = data.more;
        const pageData = data.page;
        // Return the extracted data as an object
        return { ids, more, page: pageData };
    }
    catch (error) {
        // Throw an error if the fetch operation fails
        throw error;
    }
}
/**
 * Asynchronously fetches all the inscriptions on a given SAT.
 * The function fetches the inscriptions in pages and continues fetching until there are no more pages.
 *
 * @category Core
 * @param {number} sat - The SAT number to fetch the inscriptions from.
 * @param {string} [baseUrl=_baseUrl] - Optional base URL for the fetch. Defaults to _baseUrl.
 * @returns {Promise<string[]>} - A promise that resolves with an array of the IDs of the inscriptions.
 */
async function getSatAll(sat, baseUrl = _baseUrl) {
    let ids = [];
    let more = true;
    let page = 0;
    while (more) {
        // Fetch the inscriptions for the current page
        await getSatPage(sat, page, baseUrl).then(data => {
            if (data != null) {
                // Concatenate the fetched IDs with the existing IDs
                ids = ids.concat(data.ids);
                // Check if there are more pages to fetch
                more = data.more;
                // Increment the page number for the next fetch
                page++;
            }
        }).catch(error => {
            // Stop fetching if an error occurs
            more = false;
        });
    }
    // Return the array of fetched IDs
    return ids;
}
/**
 * Asynchronously fetches the children of a given inscription.
 * If no inscription ID is provided, it defaults to using the ID obtained from `getId()`.
 *
 * @category Core
 * @param {string} inscriptionId - The ID of the inscription to get the children of.
 *                                 Defaults to the ID of the page running it if none is given.
 * @param {number} page - The page number to fetch the children from.
 * @param {string} [baseUrl=_baseUrl] - Optional baseUrl for the fetch.
 * @returns {Promise<{ids: Array<string>, more: boolean, page: number}>} - A promise that resolves to an object containing:
 *                                                                         - ids: An array of children IDs.
 *                                                                         - more: A boolean indicating if there are more pages.
 *                                                                         - page: The current page number.
 */
async function getChildrenPage(inscriptionId = getId(), page = 0, baseUrl = _baseUrl) {
    let ids = []; // Initialize an empty array to store children IDs
    let more = true; // Flag to indicate if there are more pages
    try {
        // Fetch the children data from the API endpoint
        const response = await fetch(prepareUrl(`/r/children/${inscriptionId}/${page}`, baseUrl));
        // Check if the response is not OK (status code outside the range 200-299)
        if (!response.ok) {
            throw new Error('Ord API call was unsuccessful'); // Throw an error if the API call fails
        }
        // Parse the response as JSON
        const data = await response.json();
        // Concatenate the fetched IDs with the existing array
        ids = ids.concat(data.ids);
        // Update the 'more' flag based on the response
        more = data.more;
        // Update the page number based on the response
        page = data.page;
    }
    catch (error) {
        // Set 'more' to false if an error occurs
        more = false;
    }
    // Return the result as an object
    return { ids, more, page };
}
;
/**
 * Asynchronously fetches all the children of a given inscription.
 *
 * @category Core
 * @param {string} inscriptionId - The ID of the inscription to get the children of.
 *                                 Defaults to the ID obtained from `getId()`.
 * @param {string} [baseUrl=_baseUrl] - Optional baseUrl for the fetch.
 * @returns {Promise<Array<string>>} - A promise that resolves with an array of the IDs of the children.
 */
async function getChildrenAll(inscriptionId = getId(), baseUrl = _baseUrl) {
    let ids = []; // Initialize an empty array to store children IDs
    let more = true; // Flag to indicate if there are more pages
    let page = 0; // Initialize the page number
    // Loop to fetch all pages of children IDs
    while (more) {
        await getChildrenPage(inscriptionId, page, baseUrl).then(data => {
            if (data != null) {
                ids = ids.concat(data.ids); // Concatenate the fetched IDs with the existing array
                more = data.more; // Update the 'more' flag based on the response
                page++; // Increment the page number
            }
        }).catch(error => {
            more = false; // Set 'more' to false if an error occurs
        });
    }
    return ids; // Return the array of children IDs
}
;
/**
 * Extracts the inscription ID from the current URL.
 *
 * @returns {string} - The inscription ID extracted from the URL, or an empty string if the URL is invalid.
 */
function getInscriptionIdFromUrl() {
    // Split the URL path into parts using "/" as the delimiter
    const parts = window.location.pathname.split("/");
    const lookFor = ['content', 'preview', 'inscription'];
    // Check if the URL contains any known parts and get ID
    if (parts.some(item => lookFor.includes(item))) {
        return parts[parts.length - 1]; // Return the last part as the inscription ID
    }
    else {
        // Log an error message if the URL does not contain a valid inscription ID
        return ""; // Return an empty string if the URL is invalid
    }
}
/**
 * Generates a content URL based on the provided ID.
 *
 * @group Main
 * @param {string} id - The ID to be used in the URL.
 * @returns {string} The generated content URL.
 */
function projectAsContentUrl(id) {
    let url = new String(`/content/${id}`); // Webpack workaround
    return url.toString();
}
/**
 * Fetches the content of the provided URL as a string.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchUrlAaString(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const content = await response.text();
    return content;
}
/**
 * Fetches the content of the provided URL as an ArrayBuffer.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<ArrayBuffer | undefined>} A promise that resolves to an ArrayBuffer if successful, or undefined if not.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchUrlAsBuffer(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
}
/**
 * Fetches the content of the provided URL as a data URL.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<string>} A promise that resolves to a data URL string if successful.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchAsDataURL(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
/**
 * Joins multiple ArrayBuffer objects into a single ArrayBuffer.
 *
 * @group Main
 * @param {ArrayBuffer[]} buffers - An array of ArrayBuffer objects to be joined.
 * @returns {ArrayBuffer} A single ArrayBuffer containing the concatenated data.
 */
function joinArrayBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
    const joinedBuffer = new Uint8Array(totalLength);
    let offset = 0;
    buffers.forEach(buffer => {
        joinedBuffer.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
    });
    return joinedBuffer.buffer;
}
/**
 * Converts an ArrayBuffer to a data URL.
 *
 * @group Main
 * @param {ArrayBuffer} buffer - The ArrayBuffer to be converted.
 * @param {string} contentType - The MIME type of the content.
 * @returns {Promise<string>} A promise that resolves to a data URL string if successful.
 * @throws {Error} If the conversion operation fails.
 */
function arrayBufferToDataURL(buffer, contentType) {
    const blob = new Blob([buffer], { type: contentType });
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
function getBaseUrl() {
    const parts = window.location.origin.split("/");
    const lookFor = ['content', 'preview', 'inscription', 'r'];
    let urlOut = [];
    if (parts.some(item => lookFor.includes(item))) {
        for (let index = 0; index < parts.length; index++) {
            if (lookFor.includes(parts[index]))
                break;
            urlOut.push(parts[index]);
        }
        return urlOut.join("/");
    }
    else {
        return window.location.origin;
    }
}
function prepareUrl(url, baseUrl) {
    if (url.includes("http"))
        return url;
    return `${baseUrl}${url}`;
}
//#endregion
//#region On Load Triggers
_baseUrl = getBaseUrl();
//#endregion

;// ./lib/browser/OOST.js
/**
 * @module OOST (Browser)
 */


/**
 * Assign OOST to window
 */
window.ooST = OOST_Core_namespaceObject;

var __webpack_exports__BootstrapMode = __webpack_exports__.BootstrapMode;
var __webpack_exports__StitchOptions = __webpack_exports__.StitchOptions;
var __webpack_exports___esModule = __webpack_exports__.__esModule;
var __webpack_exports__stitchAsArrayBuffer = __webpack_exports__.stitchAsArrayBuffer;
var __webpack_exports__stitchAsDataUrl = __webpack_exports__.stitchAsDataUrl;
var __webpack_exports__stitchAsString = __webpack_exports__.stitchAsString;
export { __webpack_exports__BootstrapMode as BootstrapMode, __webpack_exports__StitchOptions as StitchOptions, __webpack_exports___esModule as __esModule, __webpack_exports__stitchAsArrayBuffer as stitchAsArrayBuffer, __webpack_exports__stitchAsDataUrl as stitchAsDataUrl, __webpack_exports__stitchAsString as stitchAsString };
