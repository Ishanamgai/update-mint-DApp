import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import logo from "./assets/logo.png";
import one from "./assets/one.png";
import five from "./assets/five.png";
import ten from "./assets/ten.png";
require("dotenv").config();

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `Maximum 5 Mints, to mint your NFT.`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`MAXIMUM 5 Mints for your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  /*configure this for use*/
  const allowedAdd = [
    "0x7a8633a6d00BC857E684fD6f15687f9a0fc24585",
    "0x922985EB13048639866022e14d01E31B5a792b4A",
    "0x93b8893e482faF7472e25b5994Acb6CA3631caE6",
    "0x3aa109761f5047c83c76ac4e61a07fa8ca9db959",
    "0x8425beb485c711E6D2db691577413a9812C9FeD5",
    "0x99DA0e75f62511ee615B36b1a463085D9b13024D",
    "0xB6C5B1a489606028Da263EDa28063186f96fa921",
    "0x0ED7643fb4EDA6a98Da2A942DA73132ad03581Ea",
    "0x19E909737E5cA7fF3A032E8b15BFa82E8F892b6f",
    "0x48Ec0b0b07Dec69DF7e1b1d0BD8bE1Eaf123901d",
    "0x4fc7398EBf80804797Ca735938f972D98736246e",
    "0x5a9DC3F62B089aC07718aD23a0311E1e8283ba72",
    "0x8AAc7De9201f731d046F11e43037bA26A59b2548",
    "0x9bbb34445b8e490faa4ec7eca3b12670dd630539",
    "0xA283b6810C2b6c24e0D06A854586d652D8E602b4",
    "0xAB2575851fBa7d4B6Df7E1A0588aa54E72c48feA",
    "0xB95731D8960164cdF68484439c65A634e471AA60",
    "0xbf22FA288baCd7ad784814D3a6c2f593c2d51698",
    "0xD60742d6332e8D01265D75e4eFb118DFE5385275",
    "0xd866432668d7a0d19125332622677cd4f626c4be",
    "0xebcee6204eeeef21e406c0a75734e70f342914e0",
  ];
  const arrAllowedAddresses = allowedAdd.map((address) =>
    address.toLowerCase()
  );

  return (
    <s.Screen>
      <s.Header>
        <s.Logo src={logo}></s.Logo>
        <s.Menu>
          <s.MenuItem>HOME</s.MenuItem>
          <s.MenuItem>DISCORD</s.MenuItem>
          <s.MenuItem>TWITTER</s.MenuItem>
          <s.MenuItem>INSTAGRAM</s.MenuItem>
          <s.MenuItem>FAQ</s.MenuItem>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <s.MenuActiveItem
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
                getData();
              }}
            >
              CONNECT
            </s.MenuActiveItem>
          ) : (
            <s.MenuActiveItem
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                claimNFTs();
                getData();
              }}
            >
              MINT NOW
            </s.MenuActiveItem>
          )}
        </s.Menu>
      </s.Header>
      <s.TimerText>120</s.TimerText>
      <s.CommentText>
        On August 20th at 6PM PST, you will be able to mint your own Chibi Dinos
      </s.CommentText>
      <s.MintBlock>
        <s.Card>
          <s.CardImg src={one}></s.CardImg>
          <s.CardText>Mint 1 Chibi Dinos</s.CardText>
          <s.CardButton onClick={() => setMintAmount(1)}>
            MINT SOON
          </s.CardButton>
        </s.Card>
        <s.Card>
          <s.CardImg src={five}></s.CardImg>
          <s.CardText>Mint 5 Chibi Dinos</s.CardText>
          <s.CardButton onClick={() => setMintAmount(5)}>
            MINT SOON
          </s.CardButton>
        </s.Card>
        <s.Card>
          <s.CardImg src={ten}></s.CardImg>
          <s.CardText>Mint 10 Chibi Dinos</s.CardText>
          <s.CardButton onClick={() => setMintAmount(10)}>
            MINT SOON
          </s.CardButton>
        </s.Card>
      </s.MintBlock>
    </s.Screen>
  );
}

export default App;
