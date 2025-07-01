

import { useForm } from "react-hook-form";
function FormHookBasic() {

    const { handleSubmit, register, watch, trigger, reset, formState: { errors,
        isDirty, isReady, isLoading, isSubmitSuccessful
    } } = useForm()

    let onSubmit = (data) => {
        console.log(data.name, data.email, data.phone)

    }

const preview  = watch()

    return (
        <>
            <style>
                {
                    `
    input{
    display : block;
    margin:5px;
    }
    
    `
                }
            </style>

 <style>
        {`
          input {
            display: block;
            margin: 5px;
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          input:focus {
            outline: none;
            border-color: #007bff;
          }

          p {
            color: red;
            margin: 4px 0 10px 0;
            font-size: 0.9rem;
          }
        `}
      </style>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input placeholder="enter name" type="text" {...register("name", {
                    required: "Name is Required", pattern: {
                        message: "Name can not be empty"
                    }
                })} />
                {errors.name && <p>
                    {errors.name.message}
                </p>}

                <input placeholder="enter your email " type="email"
                    {...register("email", { required: "Email is required", message: "Enter valid Email" })}
                />
                {errors.email && <p>
                    {errors.email.message}</p>}
                <input type="tel" placeholder="enter phone"
                    {...register("phone", {
                        required: "phone can't be empty ", pattern: {
                            value: /^03[0-9]{9}$/,
                            message: "Enter valid Pakistani phone number"
                        }
                    })} />

                {
                    errors.phone &&
                    <p>
                        {errors.phone.message}
                    </p>
                }

                <button type="submit">submit</button>
                <button type="button" onClick={()=>{
                    reset(
                     
                    )
                }}>
                    reset</button>
            </form>
 

 <div> 
<h2>live preview</h2>
{JSON.stringify(preview, null , 3)}
 </div>
        </>
    )
}


export default FormHookBasic;