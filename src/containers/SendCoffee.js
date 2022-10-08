// external
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ethers } from "ethers";
// internal
import { primary } from "../css/muiThemes";
import abi from "../abi/BuyMeACoffee.json";

const ContractABI = abi.abi;
const { REACT_APP_CONTRACT_ADDRESS } = process.env;

async function sendCoffee(user) {
  try {
    const { ethereum } = window;
    console.log(REACT_APP_CONTRACT_ADDRESS);
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const buyMeACoffee = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      console.log("buying coffee...");
      await user.setTransactionProcessing(true);
      const coffeeTxn = await buyMeACoffee.buyCoffee(
        user.name.length > 0 ? user.name : "anon",
        user.message.length > 0 ? user.message : "Enjoy!",
        { value: ethers.utils.parseEther("0.001") }
      );
      await coffeeTxn.wait();
      user.setTransactionProcessing(false);
      console.log("mined ", coffeeTxn.hash);
      console.log("coffee purchased!");
      await user.setSuccessfulPurchase(true);
    }
  } catch (e) {
    console.log(e);
    return;
  }
}

const ObserveSendCoffee = observer(({ user }) => {
  return (
    <div className="bmac-buy-coffee-container">
      <div className="bmac-name-input">
        <TextField
          value={user.name}
          label="What's your name?"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            user.setName(e.target.value);
          }}
        />
      </div>
      <div className="bmac-message-input">
        <TextField
          value={user.message}
          label="Send Kevin a message"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            user.setMessage(e.target.value);
          }}
        />
      </div>
      <div className="bmac-send-eth-button">
        <Button
          variant="outlined"
          style={{ borderRadius: "30px", border: "1px solid black" }}
          theme={primary}
          onClick={() => {
            sendCoffee(user);
          }}
        >
          Send a coffee for 0.001 ETH!
        </Button>
      </div>
    </div>
  );
});

const SendCoffee = ({ user }) => {
  return <ObserveSendCoffee user={user} />;
};

export default SendCoffee;
