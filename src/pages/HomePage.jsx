import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function HomePage() {
  return (
    <>
      <h1>歡迎來到首頁</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </>
  )
};