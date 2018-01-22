pragma solidity ^0.4.18;

contract Farmer {

  uint constant active = 1;
  uint constant pending = 2;
  uint constant deleted = 3;

  struct FarmerStruct {
    uint index;
    string name;
    uint aadhar;
    uint status;
  }

  mapping(address => FarmerStruct) private farmerStructs;
  address[] private userIndex;

  event LogNewFarmer   (address indexed userAddress, uint index, uint aadhar, string name);
  event LogUpdateFarmer(address indexed userAddress, uint index, uint aadhar, string name);

  function isFarmer(address userAddress)
  public
  constant
  returns (bool isIndeed)
  {
    if (userIndex.length == 0) return false;
    return (userIndex[farmerStructs[userAddress].index] == userAddress);
  }

  function insertFarmer(
    address userAddress,
    uint aadhar,
    string name)
  public
  returns (uint index)
  {
    if (isFarmer(userAddress)) revert();
    farmerStructs[userAddress].aadhar = aadhar;
    farmerStructs[userAddress].name = name;
    farmerStructs[userAddress].index = userIndex.push(userAddress) - 1;
    LogNewFarmer(
      userAddress,
      farmerStructs[userAddress].index,
      aadhar,
      name);
    return userIndex.length - 1;
  }

  function getFarmer(address userAddress)
  public
  constant
  returns (uint aadhar, string name, uint index)
  {
    if (!isFarmer(userAddress)) revert();
    return (
    farmerStructs[userAddress].aadhar,
    farmerStructs[userAddress].name,
    farmerStructs[userAddress].index);
  }

  function updateFarmerAadhar(address userAddress, uint aadhar)
  public
  returns (bool success)
  {
    if (!isFarmer(userAddress)) revert();
    farmerStructs[userAddress].aadhar = aadhar;
    LogUpdateFarmer(
      userAddress,
      farmerStructs[userAddress].index,
      aadhar,
      farmerStructs[userAddress].name);
    return true;
  }

  function updateFarmerAge(address userAddress, string name)
  public
  returns (bool success)
  {
    if (!isFarmer(userAddress)) revert();
    farmerStructs[userAddress].name = name;
    LogUpdateFarmer(
      userAddress,
      farmerStructs[userAddress].index,
      farmerStructs[userAddress].aadhar,
      name);
    return true;
  }

  function getFarmerCount()
  public
  constant
  returns (uint count)
  {
    return userIndex.length;
  }

  function getFarmerAtIndex(uint index)
  public
  constant
  returns (address userAddress)
  {
    return userIndex[index];
  }

}
