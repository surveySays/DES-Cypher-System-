import React, { useState, useEffect } from "react";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

//CSS

//npmjs

//Components

//Images
import DESsystem from "../Images/DESsystem.png";

const Home = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.align}>
        <div className={classes.left}>
          <div className={classes.innerLeft}>
            <h2>DES - Data Encryption Standard</h2>
            <p>
              The Data Encryption Standard (DES) is a symmetric-key block cipher
              published by the National Institute of Standards and Technology
              (NIST).
            </p>
            <p>
              DES is an implementation of a Feistel Cipher. It uses 16 round
              Feistel structure. The block size is 64-bit. Though, key length is
              64-bit, DES has an effective key length of 56 bits, since 8 of the
              64 bits of the key are not used by the encryption algorithm
              (function as check bits only). General Structure of DES is
              depicted in the following illustration
            </p>
            <img src={DESsystem} alt="" className={classes.imageOne} />
            <h3>References: </h3>
            <p>
              All Data/Information on site came from here:{" "}
              <a
                href="https://www.tutorialspoint.com/cryptography/data_encryption_standard.htm"
                target="_blank"
              >
                DES
              </a>
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.innerRight}>
            <h3>64-bit Key</h3>
            <form noValidate autoComplete="off">
              <div style={{ display: "flex" }}>
                <TextField
                  id="standard-basic"
                  label="64-bit Key"
                  style={{ width: "100%", marginRight: 10 }}
                  InputLabelProps={{ classes: { root: classes.textF } }}
                  InputProps={{ className: classes.multilineColor }}
                  className={classes.textF}
                />
                <Button variant="contained" color="primary">
                  Done
                </Button>
              </div>
            </form>
            <h3>16 48-bit Keys Generated</h3>
            <ul style={{ listStyle: "none", textAlign: "left", padding: 0 }}>
              <li style={{ wordBreak: "break-all" }}>
                Key 1: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 2: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 3: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 4: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 5: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 6: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 7: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 8: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 9: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 10: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 11: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 11: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 12: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 13: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 14: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 15: 101000101010001010100010101000101010001010100010
              </li>
              <li style={{ wordBreak: "break-all" }}>
                Key 16: 101000101010001010100010101000101010001010100010
              </li>
            </ul>
            <h3>64-bit Text</h3>
            <div style={{ display: "flex" }}>
              <p>Encrypt</p>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <p>Decrypt</p>
            </div>
            <form noValidate autoComplete="off">
              <div style={{ display: "flex" }}>
                <TextField
                  id="standard-basic"
                  label="64-bit Text"
                  style={{ width: "100%", marginRight: 10 }}
                  InputLabelProps={{ classes: { root: classes.textF } }}
                  InputProps={{ className: classes.multilineColor }}
                  className={classes.textF}
                />
                <Button variant="contained" color="primary">
                  Done
                </Button>
              </div>
            </form>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <h3 style={{ marginRight: 10 }}>New Text: </h3>
              <p style={{ wordBreak: "break-all" }}>
                1001111010011110100111101001111010011110100111101001111010011110
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  align: {
    display: "flex",
    height: "100%",
  },
  left: {
    width: "40%",
    borderLeft: "2px solid red",
    overflowY: "auto",
  },
  right: {
    width: "60%",
    borderLeft: "2px solid black",
    height: "100%",
    overflowY: "scroll",
    backgroundColor: "#000000",
  },
  innerLeft: {
    padding: 20,
    textAlign: "left",
  },
  imageOne: {
    width: "100%",
  },
  innerRight: {
    padding: 20,
    color: "#FFFFFF",
  },
  textF: {
    color: "#9e9e9e",
    "& label.Mui-focused": {
      color: "#00C483",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00C483",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#9e9e9e",
    },
  },
  multilineColor: {
    color: "#00C483",
  },
}));

export default Home;
