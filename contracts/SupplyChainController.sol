pragma solidity ^0.4.8;

import "./SupplyChainDB.sol";

contract SupplyChainController {
  address public owner;
  mapping (uint => address) public paths;

  function SupplyChainController() {
    owner = msg.sender;
  }

  function createPath(uint _lotId, address _checkpoint) returns (bool) {
    SupplyChainDB supplyChainDB = new SupplyChainDB();
    supplyChainDB.addCheckpoint(_checkpoint);
    paths[_lotId] = address(supplyChainDB);

    return true;
  }

  function addCheckpoint(uint _lotId, address _checkpoint) returns (bool) {
    bool result = SupplyChainDB(paths[_lotId]).addCheckpoint(_checkpoint);
    return result;
  }

  function createOrUpdatePath(uint _lotId, address _checkpoint) returns (bool result) {
    if (_lotId == 0 || _checkpoint == 0x0) {
      result = false;
    }

    if (paths[_lotId] == 0x0) {
      result = createPath(_lotId, _checkpoint);
    } else {
      result = addCheckpoint(_lotId, _checkpoint);
    }
  }

  function getPath(uint _lotId) constant returns (address[] memory path) {
    if (paths[_lotId] == 0x0){
      return path;
    }

    uint length = SupplyChainDB(paths[_lotId]).getPathLength();

    path = new address[](length);

    for (uint i = 0; i < length; i++) {
      path[i] = SupplyChainDB(paths[_lotId]).path(i);
    }

    return path;
  }

  function destroyPath(uint _lotId) returns (bool){
    if (owner == msg.sender) SupplyChainDB(paths[_lotId]).destroy();
    paths[_lotId] = 0x0;
    return true;
  }

  function destroy() {
    if (owner == msg.sender) selfdestruct(owner);
  }
}
