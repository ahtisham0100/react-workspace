import { useRef, useState } from "react";

function FileInputUploader() {
  const fileRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const file = fileRef.current?.files?.[0];
    if (!file) return setUploadStatus("❌ No file selected.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        fileRef.current="";
        const data = await res.json();
        setUploadStatus(`✅ ${data.message}`);
      } else {
        setUploadStatus("❌ Upload failed.");
      }
    } catch (err) {
      console.error(err);
      setUploadStatus("❌ Error uploading file.");
    }
  };

  return (
    <>
      <label htmlFor="fileinput">Upload your file:</label>
      <input id="fileinput" type="file" ref={fileRef} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
    </>
  );
}

export default FileInputUploader;
