import { useState } from 'react';

import { Switch } from '@mui/material';

export default function MuiSwitch() {
  const [switchState, setSwitchState] = useState({
    isOn: false
  });

  const handleChange = () => {
    setSwitchState((prev)=>{
      console.log(!prev.isOn);
      return {
      ...switchState,
      isOn: !prev.isOn
      }
    });

  };


  return(
    <>
      <h1>Switch</h1>
      <h4>Mui 的開關元件</h4>
      <hr />
      <Switch checked={switchState.isOn} onChange={()=>{handleChange()}} />
    </>
  );
};