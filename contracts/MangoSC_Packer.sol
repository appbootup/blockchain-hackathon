pragma solidity ^0.4.0;
contract MangoSC_Packer{

    struct FruitBox{
        uint32 packer_rcv_wt;
        bytes32 farm_id;
        bytes32 timestamp;
    }

    struct PackerProcess{
        address packer_id;
        uint weight;
        bytes32 timestamp;
        bytes32 geo_tag;
        uint32 lotNo;
    }

    FruitBox[] public fruitBoxList;

    function setPackerReceive(uint32 _weight, bytes32 _farm_id, bytes32 _timestamp) public returns(bool){
        fruitBoxList.push(FruitBox({ packer_rcv_wt : _weight, farm_id: _farm_id, timestamp: _timestamp}));
    }

    function getLastItemFBoxList()
    public
    view
    returns(FruitBox){
        return fruitBoxList[fruitBoxList.length-1];
    }
}
