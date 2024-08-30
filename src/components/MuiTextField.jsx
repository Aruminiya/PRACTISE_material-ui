import { useState } from 'react';
import { TextField, Stack } from '@mui/material';

export default function MuiTextField() {
  const [textFieldValue, setTextFieldValue] = useState({
    outlined: "",
    filled: "",
    standard: ""
  });

  const handelTextField = (value,label) => {
    setTextFieldValue((prev) => {

      return {
        ...prev,
        [label]: value
      }
    })
  }; 

  return (
    <>
      <h1>TextField</h1>
      <h4>Mui 的文字輸入元件</h4>
      <hr />
      <Stack sx={{ width: "300px" }} spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={textFieldValue.outlined} onChange={(e)=>handelTextField(e.target.value, "outlined")}/>
        <TextField id="filled-basic" label="Filled" variant="filled" value={textFieldValue.filled} onChange={(e)=>handelTextField(e.target.value, "filled")}/>
        <TextField id="standard-basic" label="Standard" variant="standard" value={textFieldValue.standard} onChange={(e)=>handelTextField(e.target.value, "standard")}/>
      </Stack>
      <p>{JSON.stringify(textFieldValue)}</p>
    </>
  );
};