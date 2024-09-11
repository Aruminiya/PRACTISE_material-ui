import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Alert, Link } from '@mui/material';

// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function MuiDatePickers() {
  const [value, setValue] = useState(dayjs('2024-09-17'));

  return (
    <>
      <h1>Date Pickers</h1>
      <h4>DatePicker 日期選擇元件</h4>
      <hr />
      <h2>單一時間選取</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker showDaysOutsideCurrentMonth onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
      <h2>範圍時間選取</h2>
      <Alert severity="warning">
        <span>需要付費專業版才可使用 </span>
        <Link href="https://mui.com/x/react-date-pickers/date-range-picker/">DateRangePicker</Link>
      </Alert>
      <h1>Date Calendar</h1>
      <h4>DatePicker 日期日曆元件允許使用者選擇日期，無需任何輸入或彈出視窗/模式。</h4>
      <hr />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={value} />
      </LocalizationProvider>
    </>
  );
};