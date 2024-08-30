import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function MuiCheckbox() {
  const [checkboxState, setCheckboxState] = useState({
    label: true,
    required: false,
    disabled: false,
  });

  const handleChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log(checkboxState);
  };

  return (
    <>
      <h1>Checkbox</h1>
      <h4>Mui 的方框勾選元件</h4>
      <hr />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxState.label}
              onChange={handleChange}
              name="label"
            />
          }
          label="Label"
        />
        {/* `name` 屬性在這裡的作用是用來標識每個 `Checkbox`，以便在 `handleChange` 函數中能夠正確地更新對應的狀態。具體來說，`name` 屬性提供了一個唯一的標識符，使得我們可以在狀態對象中區分不同的 `Checkbox`。 */}
        <FormControlLabel
          required
          control={
            <Checkbox
              checked={checkboxState.required}
              onChange={handleChange}
              name="required"
            />
          }
          label="Required"
        />
        <FormControlLabel
          disabled
          control={
            <Checkbox
              checked={checkboxState.disabled}
              onChange={handleChange}
              name="disabled"
            />
          }
          label="Disabled"
        />
      </FormGroup>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}