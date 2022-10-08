// external
import { observer } from "mobx-react-lite";
import Snackbar from "@mui/material/Snackbar";
// internal
import "../css/snackbars.scss";

export const TransactionProcessingSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.transactionProcessing}
    onClose={() => {
      user.setTransactionProcessing(false);
    }}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <div className="snackbar-container">
      <span className="snackbar-text">☕️ Buying coffee...</span>
    </div>
  </Snackbar>
));

export const SuccessfulPurchaseSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.successfulPurchase}
    autoHideDuration={5000}
    onClose={() => {
      user.setSuccessfulPurchase(false);
    }}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <div className="snackbar-container">
      <span className="snackbar-text">🌟 Coffee purchased</span>
    </div>
  </Snackbar>
));
