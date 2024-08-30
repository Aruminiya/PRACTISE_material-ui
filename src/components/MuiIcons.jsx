import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import AddAlertIcon from '@mui/icons-material/AddAlert';
export default function MuiIcons() {
  return (
    <>
      <h1>Icons</h1>
      <h4>Mui 的 Icon 元件</h4>
      <hr />
      <AccessAlarm />
      <ThreeDRotation />
      <AddAlertOutlinedIcon sx={{ color: "red" }}/>
      <AddAlertIcon />
    </>
  );
};