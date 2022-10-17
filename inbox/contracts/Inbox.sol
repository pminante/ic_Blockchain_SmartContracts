pragma solidity ^ 0.4.17 ;
contract Inbox {
    string public message ;
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage (string newMessage) public {
        message = newMessage;
    }
}//0x124B05a69d01be9BDfdA291E3fB8Cc4aA79bab75 endereço SC