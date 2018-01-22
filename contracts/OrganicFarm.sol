pragma solidity ^0.4.18;

contract OrganicFarm {

  uint constant active = 1;
  uint constant pending = 2;
  uint constant deleted = 3;

  uint index;
  string surveyNo;
  uint farmerId;
  uint status;

  function setOrganicFarm(string _surveyNo, uint _farmerId, uint _status ) public {
    surveyNo = _surveyNo;
    farmerId = _farmerId;
    status = _status;
  }

  function getOrganicFarm() public constant returns (string, uint) {
    return (surveyNo, farmerId);
  }
}
