// external
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
// internal
import "../css/buyMeACoffee.scss";
import { primary } from "../css/muiThemes";
import SendCoffee from "./SendCoffee";

async function connectWallet(user) {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("please install MetaMask");
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    await user.setWallet(accounts[0]);
    console.log(`connected to wallet: `, user.wallet);
  } catch (e) {
    console.log(e);
    return null;
  }
}

const ObserveBuyMeACoffee = observer(({ user }) => {
  return (
    <div className="bmac-container">
      <span className="bmac-header-text">Good Morning ☀️</span>
      {user.wallet.length > 0 ? (
        <SendCoffee user={user} />
      ) : (
        <Button
          variant="outlined"
          style={{ borderRadius: "30px", border: "1px solid black" }}
          theme={primary}
          onClick={() => {
            connectWallet(user);
          }}
        >
          Connect wallet
        </Button>
      )}
    </div>
  );
});

const BuyMeACoffee = ({ user }) => {
  return <ObserveBuyMeACoffee user={user} />;
};

export default BuyMeACoffee;
