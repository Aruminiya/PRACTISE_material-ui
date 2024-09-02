import PropTypes from 'prop-types';
import { Stack, Box, TextField, Modal, RadioGroup, FormLabel, FormControlLabel, Radio, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ title, isOpen, handleClose, modalData, editData }) {
  console.log(modalData)

  const { register, handleSubmit, watch, reset, control, formState: { errors } } = useForm({
    defaultValues: {
      ...modalData,
    }
  });

  useEffect(() => {
    console.log(modalData);
    if (modalData) {
      reset(modalData);
    }
  }, [modalData, reset]); 
  // 使用 `useEffect` 監聽 `modalData` 的變化 , 當 `modalData` 更新時，使用 `reset` 函數來更新表單的值。

  const handleEditSubmit = () => {
    console.log(watch());
    editData(watch());
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
          <form onSubmit={handleSubmit(handleEditSubmit)}>
            {modalData ? (
              <>
                <TextField
                  label="會員"
                  fullWidth
                  name="member"
                  {...register("member", { required: "會員名稱必填", maxLength: {
                    value: 10,
                    message: "名稱不可大於 10 個字"
                  } })}
                />
                <Typography sx={{color: "#ef4444", margin: "6px 0"}} variant="p" component="p">{errors?.member?.message}</Typography>
                <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                <Controller
                   name='gender'
                   control={control}
                   rules={{ required: "性別選項必填" }}
                   render={({ field }) => ( // field` 是 React Hook Form 的 `Controller` 元件在 `render` 函數中提供的一個物件。這個物件包含了與表單控制項交互所需的所有屬性和方法。
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      {...field}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="女生" />
                      <FormControlLabel value="male" control={<Radio />} label="男生" />
                      <FormControlLabel value="other" control={<Radio />} label="其他" />
                    </RadioGroup>
                  )}
                />  
                <Typography sx={{color: "#ef4444", margin: "6px 0"}} variant="p" component="p">{errors?.gender?.message}</Typography>
                <TextField
                  label="地址"
                  fullWidth
                  name="address"
                  {...register("address", { required: "地址選項必填" })}
                />
                <Typography sx={{color: "#ef4444", margin: "6px 0"}} variant="p" component="p">{errors?.address?.message}</Typography>
              </>
            ) : (
              <h3>無資料</h3>
            )}
            <Button type='submit' sx={{marginTop: "15px"}} fullWidth variant="contained">確定修改</Button>
          </form>
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