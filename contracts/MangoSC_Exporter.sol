pragma solidity ^0.4.0;

contract MangoSC_Exporter {

  struct FruitBox{
    uint32 packer_rcv_wt;
    bytes32 farm_id;
    bytes32 timestamp;
  }

  FruitBox[] public fruitBoxList;

  struct ExporterReceive {
    address packer_id;
    bytes32 timestamp;
    bytes32 hash;
  }

  function createHash(bytes32 geo_tag1, bytes32 timestamp1, uint32 lotNo)
  internal
  pure
  returns (bytes32)
  {
    return keccak256(geo_tag1, timestamp1, lotNo);
    // Can different types of data items be compiled together
    // keccak256 is an alternative of sha3 - returns bytes32
  }


  mapping(uint32 => address[]) public lotAddressMap;// Mapping of lot with address list

  // returns true or false if successfully saved or not. Create a list of addresses
  //through which a particular lot goes through
  function saveAddress(uint32 lotNo)
  public
  returns (bool){
    lotAddressMap[lotNo].push(msg.sender);
    return true;

  }

  // bytes32 hash = createHash(geo_tag,timestamp,lotNo);
  struct ExportProcesses {
    bool isWashed;
    bool isDesapped;
    bool isFungicideTreated;
    uint32 pesticide_level;
    uint32 weight;
    bytes32 phytoCerti; //hash of Phytosanitary certificate which may be stored in IPFS like system
    bytes32 organicCerti;
    bytes32 timestamp;
  }


  struct ExporterSending {
    address destinationId; // should destinationId be address or string?
    address exporterId; // exporter's serial number
    bytes32 transporterId;
    bytes32 containerId;
    //ExporterHash#
    //ExporerProcessesDataHash#
    //function - pushes all these to blockchain

  }

  ExporterSending[] public ExporterSendingList;

  function setExporterReceive(uint32 _weight, bytes32 _farm_id, bytes32 _timestamp)
  public
  returns (bool){
    fruitBoxList.push(FruitBox({packer_rcv_wt : _weight, farm_id : _farm_id, timestamp : _timestamp}));
  }
}
