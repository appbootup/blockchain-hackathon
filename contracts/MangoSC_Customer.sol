pragma solidity ^0.4.0;
contract MangoSC_Customer{

   struct feedback{
   uint32 customerfeedbackScore;
   bytes32 customerFeedback_text;
   uint32 lotNo; // should lotNo just be a number or a string?
   }

   mapping (address => feedback) public custFeedback;

   function saveCustomerFeedback()
   public
   returns (bool) {
       // table of lotNo, customerFeedback_text, customerfeedbackScore with store id
   }
}
