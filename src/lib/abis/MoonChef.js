const Moonchef = [
	{
		inputs: [
			{
				internalType: 'contract CheeseToken',
				name: '_cheese',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_devaddr',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_feeAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '_moonPerBlock',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'pid',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'Deposit',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'pid',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'EmergencyWithdraw',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newAddress',
				type: 'address'
			}
		],
		name: 'SetDevAddress',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newAddress',
				type: 'address'
			}
		],
		name: 'SetFeeAddress',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'goosePerBlock',
				type: 'uint256'
			}
		],
		name: 'UpdateEmissionRate',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'pid',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'Withdraw',
		type: 'event'
	},
	{
		inputs: [],
		name: 'BONUS_MULTIPLIER',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'MAXIMUM_DEPOSIT_FEE_RATE',
		outputs: [
			{
				internalType: 'uint16',
				name: '',
				type: 'uint16'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_allocPoint',
				type: 'uint256'
			},
			{
				internalType: 'contract IERC20',
				name: '_lpToken',
				type: 'address'
			},
			{
				internalType: 'uint16',
				name: '_depositFeeBP',
				type: 'uint16'
			},
			{
				internalType: 'bool',
				name: '_withUpdate',
				type: 'bool'
			}
		],
		name: 'add',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'cheese',
		outputs: [
			{
				internalType: 'contract CheeseToken',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'deposit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_devaddr',
				type: 'address'
			}
		],
		name: 'dev',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'devaddr',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			}
		],
		name: 'emergencyWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'feeAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_from',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_to',
				type: 'uint256'
			}
		],
		name: 'getMultiplier',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'massUpdatePools',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'moonPerBlock',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '_user',
				type: 'address'
			}
		],
		name: 'pendingTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'address'
			}
		],
		name: 'poolExistence',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		name: 'poolInfo',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: 'lpToken',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'allocPoint',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'lastRewardBlock',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'accMoonPerShare',
				type: 'uint256'
			},
			{
				internalType: 'uint16',
				name: 'depositFeeBP',
				type: 'uint16'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'poolLength',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_allocPoint',
				type: 'uint256'
			},
			{
				internalType: 'uint16',
				name: '_depositFeeBP',
				type: 'uint16'
			},
			{
				internalType: 'bool',
				name: '_withUpdate',
				type: 'bool'
			}
		],
		name: 'set',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_feeAddress',
				type: 'address'
			}
		],
		name: 'setFeeAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'startBlock',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'startFarming',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalAllocPoint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_moonPerBlock',
				type: 'uint256'
			}
		],
		name: 'updateEmissionRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			}
		],
		name: 'updatePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'userInfo',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'rewardDebt',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_pid',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

export default Moonchef;
