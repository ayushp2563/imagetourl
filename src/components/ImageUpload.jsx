import { useState } from "react";
import axios from "axios";
import { IoCloudUploadOutline } from "react-icons/io5";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy URL");
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://imagetourl-backend.onrender.com", // Update with your backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImageUrl(response.data.url);
      setCopyStatus("Copy URL");
      setError(null); // Reset error state
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("Error uploading image: " + error.message);
      }
      console.error("Error uploading image:", error);
    }
  };

  const copyToClipboard = () => {
    if (!imageUrl) {
      console.error("No image URL available");
      return;
    }

    navigator.clipboard
      .writeText(imageUrl)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => {
          setCopyStatus("Copy URL");
        }, 1500); // Reset copy status after 1.5 seconds
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="flex flex-col items-center space-y-4 rounded-2xl">
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          className="bg-black px-4 py-4 rounded-2xl block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </div>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-200"
      >
        <p className="flex flex-row items-center justify-center">
          <IoCloudUploadOutline className="mr-2" /> Upload Image
        </p>
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {imageUrl && (
        <div className="flex flex-col items-center space-x-2 py-2">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-auto h-auto rounded-md px-4"
          />
          <div className="flex flex-col items-center space-x-2 py-2">
            <p className="break-all text-sm bg-slate-400 rounded-2xl p-4 mb-2">
              {imageUrl}
            </p>
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-200"
            >
              {copyStatus}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
