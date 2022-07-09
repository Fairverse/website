import React, { Component } from "react";
import mietoken from "../token/mietoken";
//import web3 from "../token/web3";
import Web3 from "web3";
import styles from "../styles/Token.css";
import "antd/dist/antd.css";

function TokenFunc() {
  connectMetaMask();
  return <Token />;
}

function connectMetaMask() {
  window.ethereum.request({ method: "eth_requestAccounts" });
}

class Token extends Component {
  state = {
    connectWalletText: "Connect Wallet",
    address: "",
    addressBalance: "",
  };

  connectWallet = async () => {
    const web3 = new Web3(window.ethereum);
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

        <div className="p">
          <div className={styles.addressWrapper}>
            <h3>Address: {this.state.address}</h3>
            <h3>Balance: {this.state.addressBalance}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TokenFunc;
