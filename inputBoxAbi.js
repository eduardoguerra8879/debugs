export const INPUTBOX_ABI = [
  {
    "inputs": [],
    "name": "InputSizeExceedsLimit",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "dapp",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "inputIndex",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "input",
        "type": "bytes"
      }
    ],
    "name": "InputAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_dapp",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_input",
        "type": "bytes"
      }
    ],
    "name": "addInput",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_dapp",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getInputHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_dapp",
        "type": "address"
      }
    ],
    "name": "getNumberOfInputs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]