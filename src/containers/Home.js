// internal
import Navbar from "./Navbar";
import BuyMeACoffee from "./BuyMeACoffee";
import {
  TransactionProcessingSnackbar,
  SuccessfulPurchaseSnackbar,
} from "./Snackbars";

const Home = ({ user }) => {
  return (
    <div className="main">
      <Navbar user={user} />
      <BuyMeACoffee user={user} />
      <TransactionProcessingSnackbar user={user} />
      <SuccessfulPurchaseSnackbar user={user} />
    </div>
  );
};

export default Home;
