import {Injectable, OnInit} from '@angular/core';

import * as Web3 from 'web3';
import {$} from 'protractor';

declare let require: any;
declare let window: any;

const tokenAbi = require('./MangoSC.json');

@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress = '0x87ecbde6e4504ddbabf07c2be132213870d1fde8';

  constructor() {
    /*
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      // this._web3 = new Web3(window.web3.currentProvider);
      // DO NOT USE METAMASK
      //this._web3 = new Web3(window.web3.currentProvider);
    } else {
      this._web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }*/

    this._web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    this._web3.version.getNetwork((err, netId) => {
      switch (netId) {
        case '1':
          console.log('This is mainnet');
          break;
        case '2':
          console.log('This is the deprecated Morden test network.');
          break;
        case '3':
          console.log('This is the ropsten test network.');
          break;
        case '4':
          console.log('This is the Rinkeby test network.');
          break;
        case '42':
          console.log('This is the Kovan test network.');
          break;
        default:
          console.log('This is an unknown network with netId ' +  netId);
      }
    });
    this._web3.eth.defaultAccount = this._web3.eth.accounts[0];

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);

    this.initFarmerContractService();
    this.initFarmContractService();
  }

  private async initFarmContractService() {
    const FarmContract = this._web3.eth.contract([{
        'constant': true,
        'inputs': [],
        'name': 'getOrganicFarm',
        'outputs': [
          {
            'name': '',
            'type': 'string'
          },
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': '_surveyNo',
            'type': 'string'
          },
          {
            'name': '_farmerId',
            'type': 'uint256'
          },
          {
            'name': '_dateOfUpdate',
            'type': 'uint256'
          },
          {
            'name': '_status',
            'type': 'uint256'
          }
        ],
        'name': 'setOrganicFarm',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      }
    ]);
    const FarmService = FarmContract.at('0x663f568aab9ae04222b56a551ff9c1c0e0af691b');
    console.log(FarmService);
    window.FarmService = FarmService;
  }

  public getLastFarm() {
    window.FarmService.getOrganicFarm(function (error, result) {
      if (!error) {
        console.log(result);
      }
      else {
        console.error(error);
      }
    });
  }

  private async initFarmerContractService() {

    const FarmerContract = this._web3.eth.contract([
      {
        'constant': true,
        'inputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          }
        ],
        'name': 'isFarmer',
        'outputs': [
          {
            'name': 'isIndeed',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'getFarmerCount',
        'outputs': [
          {
            'name': 'count',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': 'index',
            'type': 'uint256'
          }
        ],
        'name': 'getFarmerAtIndex',
        'outputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          }
        ],
        'name': 'getFarmer',
        'outputs': [
          {
            'name': 'aadhar',
            'type': 'uint256'
          },
          {
            'name': 'name',
            'type': 'string'
          },
          {
            'name': 'index',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'name': 'userAddress',
            'type': 'address'
          },
          {
            'indexed': false,
            'name': 'index',
            'type': 'uint256'
          },
          {
            'indexed': false,
            'name': 'aadhar',
            'type': 'uint256'
          },
          {
            'indexed': false,
            'name': 'name',
            'type': 'string'
          }
        ],
        'name': 'LogNewFarmer',
        'type': 'event'
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'name': 'userAddress',
            'type': 'address'
          },
          {
            'indexed': false,
            'name': 'index',
            'type': 'uint256'
          },
          {
            'indexed': false,
            'name': 'aadhar',
            'type': 'uint256'
          },
          {
            'indexed': false,
            'name': 'name',
            'type': 'string'
          }
        ],
        'name': 'LogUpdateFarmer',
        'type': 'event'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          },
          {
            'name': 'aadhar',
            'type': 'uint256'
          },
          {
            'name': 'name',
            'type': 'string'
          }
        ],
        'name': 'insertFarmer',
        'outputs': [
          {
            'name': 'index',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          },
          {
            'name': 'aadhar',
            'type': 'uint256'
          }
        ],
        'name': 'updateFarmerAadhar',
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': 'userAddress',
            'type': 'address'
          },
          {
            'name': 'name',
            'type': 'string'
          }
        ],
        'name': 'updateFarmerAge',
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      }
    ]);

    const FarmerService = FarmerContract.at('0x2e4ef397cc6bc469c051e1d567594e9014587a2c');
    console.log(FarmerService);
    window.FarmerService = FarmerService;
  }

  public getFarmerCount() {
    window.FarmerService.getFarmerCount(function (error, result) {
      if (!error) {
        console.log(result.toNumber());
      }
      else {
        console.error(error);
      }
    });
  }

  private async callToHearGreet() {
    const greeterAddress = '0xbc15fCDef6F6FAbAd4097816006523626c10a685';
    const abi = [{constant: false, inputs: [], name: 'kill', outputs: [], type: 'function'}, {
      constant: true,
      inputs: [],
      name: 'greet',
      outputs: [{name: '', type: 'string'}],
      type: 'function'
    }, {inputs: [{name: '_greeting', type: 'string'}], type: 'constructor'}];

    const greeter2 = this._web3.eth.contract(abi).at(greeterAddress);

    console.log('Calling the smart contract');

    greeter2.greet(function (error, result) {
      if (!error) {
        console.log(result);
      }
      else {
        console.error(error);
      }
    });
  }

  private async callGreet() {
    const _greeting = 'Hello World!';
    const greeterContract = this._web3.eth.contract(
      [
        {'constant': false, 'inputs': [], 'name': 'kill', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'},
        {'constant': true, 'inputs': [], 'name': 'greet', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'name': '_greeting', 'type': 'string'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}]);
    const greeter = greeterContract.new(
      _greeting,
      {
        from: this._web3.eth.accounts[0],
        data: '0x6060604052341561000f57600080fd5b6040516103a93803806103a983398101604052808051820191905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190610081929190610088565b505061012d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c957805160ff19168380011785556100f7565b828001600101855582156100f7579182015b828111156100f65782518255916020019190600101906100db565b5b5090506101049190610108565b5090565b61012a91905b8082111561012657600081600090555060010161010e565b5090565b90565b61026d8061013c6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806341c0e1b514610051578063cfae321714610066575b600080fd5b341561005c57600080fd5b6100646100f4565b005b341561007157600080fd5b610079610185565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b957808201518184015260208101905061009e565b50505050905090810190601f1680156100e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610183576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b61018d61022d565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102235780601f106101f857610100808354040283529160200191610223565b820191906000526020600020905b81548152906001019060200180831161020657829003601f168201915b5050505050905090565b6020604051908101604052806000815250905600a165627a7a72305820b51d660bab94effc317222df7ac90121851a8b3960f57f03e695f6296cbebbbf0029',
      }, function (e, contract) {
        if (!e) {
          console.log('Greet Success ', contract);
          if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          }
        } else {
          console.log(e);
          console.log('Greet Rejected ');
        }
      });
  }

  public async displayBlock() {
    /*
    const number = 11610;
    this._web3.eth.getBlock(number, function (error, result) {
      if (!error) {
        console.log('Information on Block ' + number);
        console.log(result);
      }
      else {
        console.error(error);
      }
    });
    */

    this._web3.eth.getBlockNumber(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log('The number of blocks in network - ' + result); // 2744
      }
    });
  }

  public async saveProductHash() {
    const account = await this.getAccount();
    try {
      console.log('Invoke To _tokenContract.saveAddress.call with ' + account);
      // this._tokenContract.saveAddress.call('OyVeAgain', {gas: 600000, from: account});
      const _web3 = this._web3;

      this._tokenContract.saveAddress.call('0x0D3A66B2898FE8EBF934FBE53CE4C938651C2DF9CC54C6C15D95A7A42D13A976', { from: account}, function (err, result) {
        if (err != null) {
          console.log(err);
        }
        console.log('Result from saveAddress -> ' + result);
        console.log('Result from saveAddress in ether -> ' + _web3.fromWei(result));
      });

    } catch (err) {
      console.log(err);
    }
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        });
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }
}
