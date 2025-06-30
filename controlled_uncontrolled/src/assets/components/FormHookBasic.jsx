

import { useForm } from "react-hook-form";
function FormHookBasic() {
    
    const {handleSubmit, register,watch,reset , formState:{errors,
isDirty , isReady , isLoading , isSubmitSuccessful        
    }} = useForm()

let onSubmit =  (data)=>{
        console.log(data.name , data.email , data.phone)

}

    return( 
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
     
        <form onSubmit={handleSubmit(onSubmit)} > 
<input placeholder="enter name" type="text" {...register("name",{required:"Name is Required" , pattern:{
    message:"Name can not be empty"
}})} /> 
{errors.name && <p>
    {errors.name.message}
</p> }

<input placeholder="enter your email " type="email"
{...register("email" , {required:"Email is required" , message:"Enter valid Email"})}
/> 
{errors.email && <p>
    {errors.email.message}</p>}
<input type="tel" placeholder="enter phone" 
{...register("phone" , {required:"phone can't be empty " , message:"invalid phone"})} />
 
{
    errors.phone && 
    <p>
        {errors.phone.message}
    </p>
}

<button type="submit">submit</button>
<button onClick={reset}>reset</button>
        </form>
        
        </>
    )
} 


export default FormHookBasic;