import { useForm } from "react-hook-form";

function UseFormHoook() {
  const {
    register,
    handleSubmit,
    reset,
    watch, // ✅ Correctly destructured from useForm
    formState: { errors, isDirty, isValid, isLoading }
  } = useForm();

  const onSubmit = (data) => {
    console.log("data is", data);
    console.log("errors:", errors, "isDirty:", isDirty, "isLoading:", isLoading);
    reset(); // ✅ This will clear the form
  };

  const preview = watch(); // ✅ Watch all fields

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="03XX-XXXXXXX"
          className="border p-2 rounded w-full"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^03[0-9]{9}$/,
              message: "Enter valid Pakistani phone number"
            }
          })}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

        <input placeholder="Name" {...register("name", { required: true })} className="border p-2 rounded w-full" />
        <input placeholder="Email" {...register("email", { required: true })} className="border p-2 rounded w-full" />

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>

        <button type="button" onClick={() => reset()} className="ml-2 px-4 py-2 bg-gray-300 rounded">
          Reset
        </button>
      </form>

      <div className="mt-6 bg-gray-100 p-4 rounded text-black">
        <h2 className="font-semibold">Live Preview:</h2>
        <pre>{JSON.stringify(preview, null, 2)}</pre>
      </div>
    </>
  );
}

export default UseFormHoook;
