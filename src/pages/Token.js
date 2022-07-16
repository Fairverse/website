import React, { Component } from "react";
import mietoken from "../token/mietoken";
import Web3 from "web3";
import "../styles/TokenFunc.css";
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
    message: "",
    receiverAddress: "",
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

  transferToken = (value) => {
    const message = "Value: " + value;
    this.setState({message});
  }

  render() {
    return (
      <div>
        <div className="btnWrapper">
          <button className="button6" onClick={this.connectWallet}>
            {this.state.connectWalletText}
          </button>
        </div>

        <div className="p">
          <div className="addressWrapper">
            <h3>Address: {this.state.address}</h3>
            <h3>Balance: {this.state.addressBalance}</h3>
          </div>
        </div>

        <div className="interactionsCard">
          <h2 className="header">MiE Token Transfer İşlemi</h2>
          <div>
            <h3 className="header">Alıcı Adres: </h3>
            <input
              type="text"
              value={this.receiverAddress}
              className="addressInput"
              onChange={(event) =>
                this.setState({ receiverAddress: event.target.value })
              }
              placeholder="MiE Token gönderilecek adresi girin"
            />
          </div>
          <br />
          <div className="btnWrapper">
            <button className="button6" onClick={() => this.transferToken(100)}>
              100
            </button>
          </div>
          <hr />
        </div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default TokenFunc;
