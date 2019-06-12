{
  "resources": {
    "asn1.js": {
      "modules": {
        "bn.js": true,
        "vm-browserify": true,
        "inherits": true,
        "buffer": true,
        "minimalistic-assert": true
      }
    },
    "assert": {
      "modules": {
        "object-assign": true,
        "util": true
      },
      "globals": {
        "window": true
      }
    },
    "util": {
      "modules": {
        "process": true,
        "inherits": true
      },
      "globals": {
        "console.error": true,
        "console.log": true,
        "console.trace": true,
        "window": true
      }
    },
    "bn.js": {
      "modules": {
        "browser-resolve": true
      }
    },
    "brorand": {
      "modules": {
        "browser-resolve": true
      },
      "globals": {
        "crypto": true,
        "msCrypto": true
      }
    },
    "browserify-aes": {
      "modules": {
        "safe-buffer": true,
        "inherits": true,
        "cipher-base": true,
        "buffer-xor": true,
        "evp_bytestokey": true,
        "buffer": true
      }
    },
    "browserify-cipher": {
      "modules": {
        "browserify-des": true,
        "evp_bytestokey": true,
        "browserify-aes": true
      }
    },
    "browserify-des": {
      "modules": {
        "cipher-base": true,
        "inherits": true,
        "safe-buffer": true,
        "des.js": true
      }
    },
    "browserify-rsa": {
      "modules": {
        "buffer": true,
        "randombytes": true,
        "bn.js": true
      }
    },
    "browserify-sign": {
      "modules": {
        "stream-browserify": true,
        "buffer": true,
        "inherits": true,
        "create-hash": true,
        "browserify-rsa": true,
        "create-hmac": true,
        "parse-asn1": true,
        "elliptic": true,
        "bn.js": true
      }
    },
    "buffer-xor": {
      "modules": {
        "buffer": true
      }
    },
    "buffer": {
      "modules": {
        "ieee754": true,
        "base64-js": true
      },
      "globals": {
        "console": true
      }
    },
    "cipher-base": {
      "modules": {
        "stream-browserify": true,
        "string_decoder": true,
        "inherits": true,
        "safe-buffer": true
      }
    },
    "core-util-is": {
      "modules": {
        "is-buffer": true
      }
    },
    "create-ecdh": {
      "modules": {
        "buffer": true,
        "bn.js": true,
        "elliptic": true
      }
    },
    "create-hash": {
      "modules": {
        "inherits": true,
        "cipher-base": true,
        "sha.js": true,
        "ripemd160": true,
        "md5.js": true,
        "buffer": true
      }
    },
    "create-hmac": {
      "modules": {
        "inherits": true,
        "safe-buffer": true,
        "cipher-base": true,
        "ripemd160": true,
        "create-hash": true,
        "sha.js": true
      }
    },
    "crypto-browserify": {
      "modules": {
        "browserify-sign": true,
        "randomfill": true,
        "randombytes": true,
        "pbkdf2": true,
        "create-hash": true,
        "create-hmac": true,
        "diffie-hellman": true,
        "browserify-cipher": true,
        "create-ecdh": true,
        "public-encrypt": true
      }
    },
    "des.js": {
      "modules": {
        "minimalistic-assert": true,
        "inherits": true
      }
    },
    "diffie-hellman": {
      "modules": {
        "buffer": true,
        "randombytes": true,
        "miller-rabin": true,
        "bn.js": true
      }
    },
    "elliptic": {
      "modules": {
        "brorand": true,
        "bn.js": true,
        "inherits": true,
        "hash.js": true,
        "hmac-drbg": true,
        "minimalistic-assert": true,
        "minimalistic-crypto-utils": true
      }
    },
    "events": {
      "globals": {
        "console": true
      }
    },
    "evp_bytestokey": {
      "modules": {
        "md5.js": true,
        "safe-buffer": true
      }
    },
    "hash-base": {
      "modules": {
        "stream-browserify": true,
        "safe-buffer": true,
        "inherits": true,
        "buffer": true
      }
    },
    "hash.js": {
      "modules": {
        "minimalistic-assert": true,
        "inherits": true
      }
    },
    "hmac-drbg": {
      "modules": {
        "minimalistic-assert": true,
        "hash.js": true,
        "minimalistic-crypto-utils": true
      }
    },
    "https-browserify": {
      "modules": {
        "stream-http": true,
        "url": true
      }
    },
    "md5.js": {
      "modules": {
        "inherits": true,
        "safe-buffer": true,
        "hash-base": true
      }
    },
    "miller-rabin": {
      "modules": {
        "brorand": true,
        "bn.js": true
      }
    },
    "os-browserify": {
      "globals": {
        "location": true,
        "navigator": true
      }
    },
    "parse-asn1": {
      "modules": {
        "asn1.js": true,
        "evp_bytestokey": true,
        "browserify-aes": true,
        "safe-buffer": true,
        "pbkdf2": true
      }
    },
    "pbkdf2": {
      "modules": {
        "process": true,
        "safe-buffer": true,
        "is-buffer": true,
        "ripemd160": true,
        "sha.js": true,
        "create-hash": true
      },
      "globals": {
        "window": true
      }
    },
    "process-nextick-args": {
      "modules": {
        "process": true
      }
    },
    "process": {
      "globals": {
        "clearTimeout": true,
        "setTimeout": true
      }
    },
    "public-encrypt": {
      "modules": {
        "create-hash": true,
        "safe-buffer": true,
        "parse-asn1": true,
        "browserify-rsa": true,
        "bn.js": true,
        "randombytes": true
      }
    },
    "punycode": {
      "globals": {
        "window": true
      }
    },
    "randombytes": {
      "modules": {
        "process": true,
        "safe-buffer": true
      },
      "globals": {
        "window": true
      }
    },
    "randomfill": {
      "modules": {
        "process": true,
        "safe-buffer": true,
        "randombytes": true
      },
      "globals": {
        "window": true
      }
    },
    "readable-stream": {
      "modules": {
        "process-nextick-args": true,
        "inherits": true,
        "core-util-is": true,
        "events": true,
        "process": true,
        "browser-resolve": true,
        "safe-buffer": true,
        "isarray": true,
        "string_decoder": true,
        "timers-browserify": true,
        "util-deprecate": true
      },
      "globals": {
        "window": true
      }
    },
    "string_decoder": {
      "modules": {
        "safe-buffer": true
      }
    },
    "ripemd160": {
      "modules": {
        "buffer": true,
        "hash-base": true,
        "inherits": true
      }
    },
    "safe-buffer": {
      "modules": {
        "buffer": true
      }
    },
    "sha.js": {
      "modules": {
        "safe-buffer": true,
        "inherits": true
      }
    },
    "stream-browserify": {
      "modules": {
        "events": true,
        "inherits": true,
        "readable-stream": true
      }
    },
    "stream-http": {
      "modules": {
        "url": true,
        "builtin-status-codes": true,
        "xtend": true,
        "process": true,
        "buffer": true,
        "inherits": true,
        "readable-stream": true,
        "to-arraybuffer": true
      },
      "globals": {
        "window": true,
        "Blob": true
      }
    },
    "timers-browserify": {
      "modules": {
        "process": true
      },
      "globals": {
        "clearInterval": true,
        "clearTimeout": true,
        "setInterval": true,
        "setTimeout": true,
        "window": true
      }
    },
    "to-arraybuffer": {
      "modules": {
        "buffer": true
      }
    },
    "url": {
      "modules": {
        "punycode": true,
        "querystring-es3": true
      }
    },
    "util-deprecate": {
      "globals": {
        "console.trace": true,
        "console.warn": true,
        "window": true
      }
    },
    "vm-browserify": {
      "globals": {
        "document.body.appendChild": true,
        "document.body.removeChild": true,
        "document.createElement": true
      }
    },
    "<root>": {
      "modules": {
        "ethereumjs-util": true,
        "babel-runtime": true,
        "ethereumjs-wallet": true,
        "process": true,
        "loglevel": true,
        "extensionizer": true,
        "url": true,
        "pump": true,
        "end-of-stream": true,
        "obs-store": true,
        "extension-port-stream": true,
        "debounce-stream": true,
        "xtend": true,
        "web3": true,
        "single-call-balance-checker-abi": true,
        "eth-contract-metadata": true,
        "eth-json-rpc-infura": true,
        "eth-json-rpc-middleware": true,
        "json-rpc-engine": true,
        "eth-block-tracker": true,
        "assert": true,
        "events": true,
        "eth-query": true,
        "extend": true,
        "swappable-obj-proxy": true,
        "eth-sig-util": true,
        "safe-event-emitter": true,
        "pify": true,
        "human-standard-token-abi": true,
        "ethereumjs-tx": true,
        "nonce-tracker": true,
        "ethjs-query": true,
        "abi-decoder": true,
        "clone": true,
        "fast-json-patch": true,
        "browserify-unibabel": true,
        "asmcrypto.js": true,
        "promise-to-callback": true,
        "readable-stream": true,
        "eth-ens-namehash": true,
        "ethjs-contract": true,
        "content-hash": true,
        "buffer": true,
        "eth-keyring-controller": true,
        "@sentry/browser": true,
        "obj-multiplex": true,
        "through2": true,
        "jsonschema": true,
        "bn.js": true,
        "debounce": true,
        "percentile": true,
        "json-rpc-middleware-stream": true,
        "await-semaphore": true,
        "eth-json-rpc-filters": true,
        "dnode": true,
        "eth-trezor-keyring": true,
        "eth-ledger-bridge-keyring": true,
        "gaba": true,
        "deep-extend": true,
        "etherscan-link": true,
        "bignumber.js": true,
        "ramda": true,
        "luxon": true,
        "reselect": true
      }
    },
    "@sentry/browser": {
      "modules": {
        "process": true,
        "@sentry/core": true
      },
      "globals": {
        "DOMError": true,
        "DOMException": true,
        "ErrorEvent": true,
        "Headers": true,
        "Request": true,
        "Response": true,
        "XMLHttpRequest": true,
        "clearTimeout": true,
        "document": true,
        "setTimeout": true,
        "window": true
      }
    },
    "@sentry/core": {
      "modules": {
        "@sentry/utils": true,
        "@sentry/types": true,
        "@sentry/minimal": true,
        "@sentry/hub": true
      },
      "globals": {
        "console.log": true,
        "clearTimeout": true,
        "setTimeout": true
      }
    },
    "@sentry/hub": {
      "modules": {
        "@sentry/utils": true
      },
      "globals": {
        "setTimeout": true
      }
    },
    "@sentry/minimal": {
      "modules": {
        "@sentry/hub": true
      }
    },
    "@sentry/utils": {
      "modules": {
        "process": true
      },
      "globals": {
        "console.error": true,
        "window": true
      }
    },
    "abi-decoder": {
      "modules": {
        "web3": true
      }
    },
    "bignumber.js": {
      "modules": {
        "crypto-browserify": true
      },
      "globals": {
        "crypto": true
      }
    },
    "web3": {
      "modules": {
        "bignumber.js": true,
        "crypto-js": true,
        "utf8": true,
        "xhr2": true,
        "buffer": true,
        "xhr2-cookies": true
      },
      "globals": {
        "XMLHttpRequest": true,
        "console.warn": true,
        "clearTimeout": true,
        "console.error": true,
        "setTimeout": true
      }
    },
    "aes-js": {
      "modules": {
        "buffer": true
      }
    },
    "asmcrypto.js": {
      "modules": {
        "process": true
      },
      "globals": {
        "atob": true,
        "btoa": true,
        "console": true,
        "crypto": true,
        "location": true,
        "msCrypto": true,
        "performance": true
      }
    },
    "async": {
      "modules": {
        "lodash": true,
        "process": true,
        "timers-browserify": true
      },
      "globals": {
        "clearTimeout": true,
        "console": true,
        "setTimeout": true,
        "window": true
      }
    },
    "await-semaphore": {
      "modules": {
        "process": true,
        "timers-browserify": true
      }
    },
    "babel-runtime": {
      "modules": {
        "core-js": true,
        "regenerator-runtime": true
      }
    },
    "backoff": {
      "modules": {
        "events": true,
        "util": true,
        "precond": true
      },
      "globals": {
        "clearTimeout": true,
        "setTimeout": true
      }
    },
    "base-x": {
      "modules": {
        "safe-buffer": true
      }
    },
    "bip39": {
      "modules": {
        "safe-buffer": true,
        "create-hash": true,
        "unorm": true,
        "randombytes": true,
        "pbkdf2": true
      }
    },
    "bip66": {
      "modules": {
        "safe-buffer": true
      }
    },
    "browser-passworder": {
      "modules": {
        "browserify-unibabel": true
      },
      "globals": {
        "btoa": true,
        "crypto.subtle.decrypt": true,
        "window": true
      }
    },
    "browserify-sha3": {
      "modules": {
        "buffer": true,
        "js-sha3": true
      }
    },
    "browserify-unibabel": {
      "globals": {
        "atob": true,
        "btoa": true
      }
    },
    "bs58": {
      "modules": {
        "base-x": true
      }
    },
    "bs58check": {
      "modules": {
        "buffer": true,
        "create-hash": true,
        "bs58": true
      }
    },
    "btoa": {
      "modules": {
        "buffer": true
      }
    },
    "multihashes": {
      "modules": {
        "buffer": true,
        "varint": true,
        "bs58": true
      }
    },
    "cids": {
      "modules": {
        "is-buffer": true,
        "multihashes": true,
        "buffer": true,
        "multicodec": true,
        "class-is": true,
        "multibase": true
      }
    },
    "clone": {
      "modules": {
        "buffer": true
      }
    },
    "coinstring": {
      "modules": {
        "buffer": true,
        "bs58": true,
        "create-hash": true
      }
    },
    "content-hash": {
      "modules": {
        "multicodec": true,
        "multihashes": true,
        "cids": true
      },
      "globals": {
        "console.warn": true
      }
    },
    "cookiejar": {
      "globals": {
        "console.warn": true
      }
    },
    "core-js": {
      "modules": {
        "browser-resolve": true
      },
      "globals": {
        "window": true,
        "document.createTextNode": true,
        "postMessage": true,
        "setTimeout": true,
        "PromiseRejectionEvent": true
      }
    },
    "cross-fetch": {
      "globals": {
        "Blob": true,
        "FileReader": true,
        "FormData": true,
        "URLSearchParams.prototype.isPrototypeOf": true,
        "XMLHttpRequest": true
      }
    },
    "debounce-stream": {
      "modules": {
        "debounce": true,
        "through": true,
        "duplexer": true
      }
    },
    "debounce": {
      "globals": {
        "clearTimeout": true,
        "setTimeout": true
      }
    },
    "deep-extend": {
      "modules": {
        "buffer": true
      }
    },
    "dnode-protocol": {
      "modules": {
        "events": true,
        "traverse": true
      }
    },
    "dnode": {
      "modules": {
        "stream-browserify": true,
        "process": true,
        "jsonify": true,
        "dnode-protocol": true
      }
    },
    "duplexer": {
      "modules": {
        "stream-browserify": true
      }
    },
    "end-of-stream": {
      "modules": {
        "once": true
      }
    },
    "eth-block-tracker": {
      "modules": {
        "eth-query": true,
        "safe-event-emitter": true,
        "pify": true,
        "events": true,
        "ethjs-util": true
      },
      "globals": {
        "clearTimeout": true,
        "setTimeout": true,
        "console.error": true
      }
    },
    "eth-ens-namehash": {
      "modules": {
        "buffer": true,
        "js-sha3": true,
        "idna-uts46-hx": true
      },
      "globals": {
        "name": true
      }
    },
    "js-sha3": {
      "modules": {
        "process": true
      },
      "globals": {
        "window": true,
        "navigator.userAgent.indexOf": true
      }
    },
    "eth-hd-keyring": {
      "modules": {
        "events": true,
        "buffer": true,
        "bip39": true,
        "ethereumjs-util": true,
        "ethereumjs-wallet": true,
        "eth-sig-util": true
      }
    },
    "eth-sig-util": {
      "modules": {
        "ethereumjs-util": true,
        "ethereumjs-abi": true,
        "buffer": true,
        "tweetnacl": true,
        "tweetnacl-util": true
      }
    },
    "ethereumjs-abi": {
      "modules": {
        "buffer": true,
        "bn.js": true,
        "ethereumjs-util": true
      }
    },
    "ethereumjs-util": {
      "modules": {
        "assert": true,
        "secp256k1": true,
        "create-hash": true,
        "keccak": true,
        "rlp": true,
        "safe-buffer": true,
        "bn.js": true,
        "ethjs-util": true,
        "buffer": true,
        "keccakjs": true
      }
    },
    "ethjs-util": {
      "modules": {
        "buffer": true,
        "is-hex-prefixed": true,
        "strip-hex-prefix": true
      }
    },
    "eth-json-rpc-filters": {
      "modules": {
        "safe-event-emitter": true,
        "await-semaphore": true,
        "eth-json-rpc-middleware": true,
        "json-rpc-engine": true,
        "ethjs-query": true,
        "lodash.flatmap": true
      },
      "globals": {
        "console.error": true
      }
    },
    "eth-json-rpc-middleware": {
      "modules": {
        "json-rpc-engine": true,
        "clone": true,
        "pify": true,
        "json-stable-stringify": true,
        "url": true,
        "json-rpc-error": true,
        "fetch-ponyfill": true,
        "btoa": true,
        "safe-event-emitter": true,
        "eth-sig-util": true
      },
      "globals": {
        "setTimeout": true,
        "window": true,
        "console.error": true
      }
    },
    "ethjs-query": {
      "modules": {
        "promise-to-callback": true,
        "ethjs-rpc": true,
        "ethjs-format": true,
        "babel-runtime": true
      },
      "globals": {
        "console": true
      }
    },
    "ethjs-rpc": {
      "modules": {
        "promise-to-callback": true
      }
    },
    "json-rpc-engine": {
      "modules": {
        "promise-to-callback": true,
        "babel-runtime": true,
        "safe-event-emitter": true,
        "async": true
      },
      "globals": {
        "console.error": true
      }
    },
    "eth-json-rpc-infura": {
      "modules": {
        "eth-json-rpc-middleware": true,
        "json-rpc-engine": true,
        "json-rpc-error": true,
        "cross-fetch": true
      },
      "globals": {
        "setTimeout": true
      }
    },
    "eth-keyring-controller": {
      "modules": {
        "events": true,
        "loglevel": true,
        "browser-passworder": true,
        "promise-filter": true,
        "obs-store": true,
        "ethereumjs-util": true,
        "bip39": true,
        "eth-sig-util": true,
        "eth-hd-keyring": true,
        "eth-simple-keyring": true
      }
    },
    "obs-store": {
      "modules": {
        "stream-browserify": true,
        "xtend": true,
        "babel-runtime": true,
        "events": true,
        "through2": true
      },
      "globals": {
        "window": true
      }
    },
    "eth-ledger-bridge-keyring": {
      "modules": {
        "events": true,
        "buffer": true,
        "ethereumjs-util": true,
        "eth-sig-util": true,
        "hdkey": true
      },
      "globals": {
        "addEventListener": true,
        "document.createElement": true,
        "document.head.appendChild": true,
        "fetch": true
      }
    },
    "hdkey": {
      "modules": {
        "assert": true,
        "safe-buffer": true,
        "secp256k1": true,
        "coinstring": true,
        "crypto-browserify": true,
        "buffer": true
      }
    },
    "eth-query": {
      "modules": {
        "json-rpc-random-id": true,
        "xtend": true
      }
    },
    "eth-simple-keyring": {
      "modules": {
        "events": true,
        "buffer": true,
        "ethereumjs-wallet": true,
        "ethereumjs-util": true,
        "eth-sig-util": true
      }
    },
    "eth-trezor-keyring": {
      "modules": {
        "events": true,
        "buffer": true,
        "hdkey": true,
        "ethereumjs-tx": true,
        "ethereumjs-util": true,
        "trezor-connect": true
      },
      "globals": {
        "console.log": true,
        "setTimeout": true
      }
    },
    "ethereumjs-tx": {
      "modules": {
        "buffer": true,
        "ethereum-common": true,
        "ethereumjs-util": true
      }
    },
    "ethereumjs-wallet": {
      "modules": {
        "hdkey": true,
        "crypto-browserify": true,
        "buffer": true,
        "uuid": true,
        "bs58check": true,
        "scrypt.js": true,
        "ethereumjs-util": true,
        "utf8": true,
        "aes-js": true
      }
    },
    "ethjs-abi": {
      "modules": {
        "buffer": true,
        "bn.js": true,
        "number-to-bn": true,
        "js-sha3": true
      }
    },
    "ethjs-contract": {
      "modules": {
        "ethjs-filter": true,
        "ethjs-util": true,
        "js-sha3": true,
        "ethjs-abi": true,
        "promise-to-callback": true,
        "babel-runtime": true
      }
    },
    "ethjs-filter": {
      "globals": {
        "clearInterval": true,
        "setInterval": true
      }
    },
    "ethjs-format": {
      "modules": {
        "ethjs-schema": true,
        "number-to-bn": true,
        "strip-hex-prefix": true,
        "ethjs-util": true
      }
    },
    "ethjs-provider-http": {
      "modules": {
        "xhr2": true
      }
    },
    "ethjs-unit": {
      "modules": {
        "bn.js": true,
        "number-to-bn": true
      }
    },
    "extension-port-stream": {
      "modules": {
        "util": true,
        "buffer": true,
        "readable-stream": true
      }
    },
    "extensionizer": {
      "globals": {
        "browser": true,
        "chrome": true,
        "window": true
      }
    },
    "fast-json-patch": {
      "modules": {
        "deep-equal": true
      },
      "globals": {
        "addEventListener": true,
        "clearTimeout": true,
        "document.documentElement.attachEvent": true,
        "document.documentElement.detachEvent": true,
        "removeEventListener": true,
        "setTimeout": true
      }
    },
    "fast-levenshtein": {
      "globals": {
        "Intl": true,
        "console.log": true,
        "postMessage": true,
        "window": true
      }
    },
    "fetch-ponyfill": {
      "globals": {
        "Blob": true,
        "FileReader": true,
        "FormData": true,
        "URLSearchParams.prototype.isPrototypeOf": true
      }
    },
    "gaba": {
      "modules": {
        "ethjs-query": true,
        "ethereumjs-util": true,
        "web3": true,
        "single-call-balance-checker-abi": true,
        "human-standard-collectible-abi": true,
        "human-standard-token-abi": true,
        "isomorphic-fetch": true,
        "events": true,
        "await-semaphore": true,
        "uuid": true,
        "eth-contract-metadata": true,
        "eth-sig-util": true,
        "ethereumjs-wallet": true,
        "eth-keyring-controller": true,
        "eth-query": true,
        "web3-provider-engine": true,
        "eth-json-rpc-infura": true,
        "eth-phishing-detect": true,
        "ethereumjs-tx": true,
        "eth-method-registry": true,
        "buffer": true,
        "jsonschema": true
      },
      "globals": {
        "clearTimeout": true,
        "setTimeout": true,
        "fetch": true,
        "name": true,
        "console.error": true
      }
    },
    "eth-method-registry": {
      "modules": {
        "ethjs": true
      }
    },
    "eth-phishing-detect": {
      "modules": {
        "fast-levenshtein": true
      }
    },
    "ethjs": {
      "modules": {
        "buffer": true,
        "bn.js": true,
        "ethjs-filter": true,
        "number-to-bn": true,
        "js-sha3": true,
        "ethjs-unit": true,
        "ethjs-provider-http": true,
        "ethjs-util": true,
        "ethjs-abi": true,
        "ethjs-query": true,
        "ethjs-contract": true
      },
      "globals": {
        "clearInterval": true,
        "setInterval": true
      }
    },
    "tweetnacl": {
      "modules": {
        "browser-resolve": true
      },
      "globals": {
        "crypto": true,
        "msCrypto": true
      }
    },
    "uuid": {
      "globals": {
        "crypto": true,
        "msCrypto": true,
        "window": true
      }
    },
    "idna-uts46-hx": {
      "modules": {
        "punycode": true
      }
    },
    "isomorphic-fetch": {
      "modules": {
        "whatwg-fetch": true
      },
      "globals": {
        "fetch.bind": true
      }
    },
    "json-rpc-error": {
      "modules": {
        "inherits": true
      }
    },
    "json-rpc-middleware-stream": {
      "modules": {
        "readable-stream": true
      }
    },
    "json-stable-stringify": {
      "modules": {
        "jsonify": true
      }
    },
    "jsonschema": {
      "modules": {
        "url": true
      }
    },
    "keccak": {
      "modules": {
        "stream-browserify": true,
        "inherits": true,
        "safe-buffer": true
      }
    },
    "keccakjs": {
      "modules": {
        "browserify-sha3": true
      }
    },
    "lodash.flatmap": {
      "globals": {
        "window": true
      }
    },
    "lodash": {
      "globals": {
        "window": true
      }
    },
    "loglevel": {
      "globals": {
        "console": true,
        "document.cookie": true,
        "localStorage": true
      }
    },
    "luxon": {
      "globals": {
        "Intl": true
      }
    },
    "multibase": {
      "modules": {
        "buffer": true,
        "base-x": true
      }
    },
    "multicodec": {
      "modules": {
        "buffer": true,
        "varint": true
      }
    },
    "nonce-tracker": {
      "modules": {
        "assert": true,
        "await-semaphore": true,
        "ethjs-query": true
      }
    },
    "number-to-bn": {
      "modules": {
        "bn.js": true,
        "strip-hex-prefix": true
      }
    },
    "obj-multiplex": {
      "modules": {
        "end-of-stream": true,
        "once": true,
        "readable-stream": true
      },
      "globals": {
        "console.warn": true
      }
    },
    "once": {
      "modules": {
        "wrappy": true
      }
    },
    "precond": {
      "modules": {
        "util": true
      }
    },
    "promise-filter": {
      "modules": {
        "assert": true,
        "any-promise": true
      }
    },
    "promise-to-callback": {
      "modules": {
        "is-fn": true,
        "set-immediate-shim": true
      }
    },
    "pump": {
      "modules": {
        "process": true,
        "browser-resolve": true,
        "once": true,
        "end-of-stream": true
      }
    },
    "rlp": {
      "modules": {
        "assert": true,
        "buffer": true
      }
    },
    "safe-event-emitter": {
      "modules": {
        "util": true,
        "events": true
      },
      "globals": {
        "setTimeout": true
      }
    },
    "scrypt.js": {
      "modules": {
        "scryptsy": true
      }
    },
    "scryptsy": {
      "modules": {
        "buffer": true,
        "pbkdf2": true
      }
    },
    "secp256k1": {
      "modules": {
        "is-buffer": true,
        "safe-buffer": true,
        "bip66": true,
        "create-hash": true,
        "bn.js": true,
        "elliptic": true
      }
    },
    "semaphore": {
      "modules": {
        "process": true
      },
      "globals": {
        "setTimeout": true
      }
    },
    "set-immediate-shim": {
      "modules": {
        "timers-browserify": true
      },
      "globals": {
        "setTimeout.apply": true
      }
    },
    "strip-hex-prefix": {
      "modules": {
        "is-hex-prefixed": true
      }
    },
    "through": {
      "modules": {
        "process": true,
        "stream-browserify": true
      }
    },
    "through2": {
      "modules": {
        "util": true,
        "process": true,
        "xtend": true,
        "readable-stream": true
      }
    },
    "trezor-connect": {
      "modules": {
        "@babel/runtime": true,
        "events": true,
        "whatwg-fetch": true
      },
      "globals": {
        "location.pathname": true,
        "location.protocol": true,
        "navigator": true,
        "btoa": true,
        "chrome": true,
        "clearTimeout": true,
        "document.body": true,
        "document.createElement": true,
        "document.createTextNode": true,
        "document.getElementById": true,
        "setTimeout": true,
        "addEventListener": true,
        "console.warn": true,
        "removeEventListener": true,
        "clearInterval": true,
        "open": true,
        "setInterval": true,
        "console": true,
        "window": true,
        "fetch": true,
        "document.querySelectorAll": true
      }
    },
    "@babel/runtime": {
      "modules": {
        "regenerator-runtime": true,
        "babel-runtime": true
      }
    },
    "whatwg-fetch": {
      "globals": {
        "Blob": true,
        "DOMException": true,
        "FileReader": true,
        "FormData": true,
        "Headers": true,
        "Request": true,
        "Response": true,
        "URLSearchParams.prototype.isPrototypeOf": true,
        "XMLHttpRequest": true,
        "fetch": true
      }
    },
    "tweetnacl-util": {
      "modules": {
        "browser-resolve": true
      },
      "globals": {
        "atob": true,
        "btoa": true
      }
    },
    "utf8": {
      "globals": {
        "window": true
      }
    },
    "web3-provider-engine": {
      "modules": {
        "events": true,
        "util": true,
        "ethereumjs-util": true,
        "eth-block-tracker": true,
        "async": true,
        "clone": true,
        "xtend": true,
        "promise-to-callback": true,
        "cross-fetch": true,
        "json-rpc-error": true,
        "semaphore": true,
        "eth-sig-util": true,
        "eth-json-rpc-infura": true,
        "buffer": true,
        "ethereumjs-tx": true,
        "browser-resolve": true,
        "backoff": true,
        "json-stable-stringify": true
      },
      "globals": {
        "setInterval": true,
        "console.error": true,
        "console.warn": true,
        "setTimeout": true,
        "console": true,
        "window": true
      }
    },
    "xhr2-cookies": {
      "modules": {
        "buffer": true,
        "url": true,
        "process": true,
        "os-browserify": true,
        "https-browserify": true,
        "cookiejar": true,
        "stream-http": true
      },
      "globals": {
        "console.warn": true
      }
    },
    "xhr2": {
      "globals": {
        "XMLHttpRequest": true
      }
    }
  }
}