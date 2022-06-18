import React, { Component } from "react";
import mietoken from "../token/mietoken";
import web3 from "../token/web3";
import styles from "../styles/Token.css";
import "antd/dist/antd.css";

class Token extends Component {
  state = {
    connectWalletText: "Connect Wallet",
    address: "",
    addressBalance: "",
  };

  connectWallet = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ connectWalletText: "Connecting..." });
    this.setState({ address: accounts[0] });
    const balance = await mietoken.methods.balanceOf(accounts[0]).call();
    this.setState({ connectWalletText: "Wallet Connected" });
    this.setState({ addressBalance: balance });
  };

  render() {
    return (
      <div>
        <div className={styles.btnWrapper}>
          <button className={styles.button6} onClick={this.connectWallet}>
            {this.state.connectWalletText}
          </button>
        </div>

        <p className={styles.addressWrapper}>
          <div>
            <h3>Address: {this.state.address}</h3>
            <h3>Balance: {this.state.addressBalance}</h3>
          </div>
        </p>
      </div>
    );
  }
}

export default Token;
