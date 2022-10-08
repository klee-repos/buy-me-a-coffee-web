import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }

  // session
  wallet = "";
  name = "";
  message = "";

  // snackbars
  transactionProcessing = false;
  successfulPurchase = false;

  async setSuccessfulPurchase(successfulPurchase) {
    this.successfulPurchase = successfulPurchase;
  }

  async setTransactionProcessing(transactionProcessing) {
    this.transactionProcessing = transactionProcessing;
  }

  async setName(name) {
    this.name = name;
  }

  async setMessage(message) {
    this.message = message;
  }

  async setWallet(wallet) {
    this.wallet = wallet;
  }
}

export default User;
