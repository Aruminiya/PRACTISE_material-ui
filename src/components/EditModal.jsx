import PropTypes from 'prop-types';
import { Stack, Box, TextField, Modal, RadioGroup, FormLabel, FormControlLabel, Radio, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ title, isOpen, handleClose, modalData, editData }) {
  const [member, setMember] = useState({});

  useEffect(() => {
    setMember({ ...modalData });
  }, [modalData]); // 確保 modalData 有資料傳入

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    editData(member);
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
          <h2>{title}</h2>
          <div>
            {modalData ? (
              <>
                <TextField
                  label="會員"
                  fullWidth
                  name="member"
                  value={member.member || ''}
                  onChange={handleInputChange}
                />
                <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  value={member.gender || ''}
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="女生" />
                  <FormControlLabel value="male" control={<Radio />} label="男生" />
                  <FormControlLabel value="other" control={<Radio />} label="其他" />
                </RadioGroup>
                <TextField
                  label="地址"
                  fullWidth
                  name="address"
                  value={member.address || ''}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <h3>無資料</h3>
            )}
          </div>
          <Button variant="contained" onClick={handleEditSubmit}>確定修改</Button>
          </Stack>
  
        </Box>
      </Modal>
    </div>
  );
}

EditModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalData: PropTypes.object,
  editData: PropTypes.func
};