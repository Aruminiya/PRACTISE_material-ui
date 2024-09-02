import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "Leo",
      comment: "Hello"
    }
  });

  const onSubmit = (data) => console.log(data);
  console.log(watch()) // 透過傳遞名稱來監視輸入值 

  return (
    <>
      <h1>React Hook Form 表單驗證工具</h1>
      <p>React 好用的表單驗證工具</p>
      <hr />
      { /* “handleSubmit” 將在呼叫 “onSubmit” 之前驗證您的輸入 */ }
      <form onSubmit={handleSubmit(onSubmit)}>
        { /* 透過呼叫「register」函數將您的輸入註冊到鉤子中 */ }
        <input {...register("name", { required: "This is required" })} />
        {errors?.name?.message }
        { /* 包含使用必要的或其他標準 HTML 驗證規則的驗證 */ }
        <input {...register("comment", { 
          required: "This is required",
          maxLength: {
            value: 10,
            message: "Min length is 10"
          } 
        })} />
        { /* 欄位驗證失敗時會回傳錯誤 */ }
        {console.log(errors)}
        {errors?.comment?.message }

        <input type="submit" />
      </form>
    </>
  );
};