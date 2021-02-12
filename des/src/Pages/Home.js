import React, { useState, useEffect } from "react";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

//Images
import DESsystem from "../Images/DESsystem.png";

//Functions
import { GenerateKeys } from "../Functions/GenerateKeys";
import { CipherDES } from "../Functions/CipherDES";
import { DeCipherDES } from "../Functions/DeCipherDES";

const Keys = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const keyItems = Keys.map((key, index) => (
  <li>
    Key {index + 1}: {key}
  </li>
));

const Home = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [keysGenerated, setKeysGenerated] = React.useState(false);
  const [key, setKey] = React.useState("false");
  const [keys, setKeys] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const checkKey = () => {
    //TODO: Check input to make sure 64 bit and only 1 and 0
    var myKeys = GenerateKeys();

    setKeys(myKeys);

    setKeysGenerated(true);
  };

  const checkText = () => {
    //if decipher call
    DeCipherDES();

    //if cipher call
    CipherDES();
  };

  const isMob = useMedia("(min-width: 964px)");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isMob ? (
        <div className={classes.align}>
          <div className={classes.left}>
            <div className={classes.innerLeft}>
              <h2>DES - Data Encryption Standard</h2>
              <p>
                The Data Encryption Standard (DES) is a symmetric-key block
                cipher published by the National Institute of Standards and
                Technology (NIST).
              </p>
              <p>
                DES is an implementation of a Feistel Cipher. It uses 16 round
                Feistel structure. The block size is 64-bit. Though, key length
                is 64-bit, DES has an effective key length of 56 bits, since 8
                of the 64 bits of the key are not used by the encryption
                algorithm (function as check bits only). General Structure of
                DES is depicted in the following illustration
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={checkKey}
                  >
                    Done
                  </Button>
                </div>
              </form>
              <h3>16 48-bit Keys Generated</h3>
              <ul style={{ listStyle: "none", textAlign: "left", padding: 0 }}>
                {keys.map((key, index) => (
                  <li>
                    Key {index + 1}: {key}
                  </li>
                ))}
              </ul>
              {keysGenerated ? (
                <div>
                  <h3>64-bit Text</h3>
                  <div style={{ display: "flex" }}>
                    <p>Encrypt</p>
                    <div style={{ marginTop: 10 }}>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        InputProps={{
                          backgroundColor: "#FFFFFF",
                          color: "#FFFFFF",
                        }}
                      />
                    </div>
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
              ) : null}
              <h5 style={{ marginTop: 40, marginBottom: 0 }}>
                Boese ~ Canseco
              </h5>
            </div>
          </div>
        </div>
      ) : (
        //THIS IS THE SAME CODE AS ABOVE BUT DIFFERENY LAYOUT FOR MEDIA QUERY
        <div>
          <div className={classes.Smallleft}>
            <div className={classes.SmallinnerLeft}>
              <h2>DES - Data Encryption Standard</h2>
              <p>
                The Data Encryption Standard (DES) is a symmetric-key block
                cipher published by the National Institute of Standards and
                Technology (NIST).
              </p>
              <p>
                DES is an implementation of a Feistel Cipher. It uses 16 round
                Feistel structure. The block size is 64-bit. Though, key length
                is 64-bit, DES has an effective key length of 56 bits, since 8
                of the 64 bits of the key are not used by the encryption
                algorithm (function as check bits only). General Structure of
                DES is depicted in the following illustration
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
          <div className={classes.Smallright}>
            <div className={classes.SmallinnerRight}>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={checkKey}
                  >
                    Done
                  </Button>
                </div>
              </form>
              <h3>16 48-bit Keys Generated</h3>
              <ul style={{ listStyle: "none", textAlign: "left", padding: 0 }}>
                {keys.map((key, index) => (
                  <li>
                    Key {index + 1}: {key}
                  </li>
                ))}
              </ul>
              {keysGenerated ? (
                <div>
                  <h3>64-bit Text</h3>
                  <div style={{ display: "flex" }}>
                    <p>Encrypt</p>
                    <div style={{ marginTop: 10 }}>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        InputProps={{
                          backgroundColor: "#FFFFFF",
                          color: "#FFFFFF",
                        }}
                      />
                    </div>
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
              ) : null}
              <h5 style={{ marginTop: 40, marginBottom: 0 }}>
                Boese ~ Canseco
              </h5>
            </div>
          </div>
        </div>
      )}
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
    overflowY: "auto",
  },
  right: {
    width: "60%",
    height: "100%",
    overflowY: "auto",
    backgroundColor: "#000000",
  },
  innerLeft: {
    padding: 20,
    textAlign: "left",
  },
  imageOne: {
    width: "100%",
    maxWidth: 600,
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
  Smallleft: {
    width: "100%",
    overflowY: "auto",
  },
  Smallright: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    backgroundColor: "#000000",
  },
  SmallinnerLeft: {
    padding: 20,
    textAlign: "left",
  },
  SmallinnerRight: {
    padding: 20,
    color: "#FFFFFF",
  },
}));

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}

export default Home;
