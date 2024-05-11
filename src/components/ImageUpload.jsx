import { useState } from "react";
import axios from "axios";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy URL");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const loadingToastId = toast.loading("Uploading image...");
      const response = await axios.post(
        "https://imagetourl-backend.onrender.com/upload",
        // Update with your backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.dismiss(loadingToastId);
      toast.success(`Image URL: ${response.data.url}`);
      setImageUrl(response.data.url);
      setCopyStatus("Copy URL");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    }
  };

  const copyToClipboard = () => {
    if (!imageUrl) {
      console.error("No image URL available");
      toast.error("No image URL available");
      return;
    }

    navigator.clipboard
      .writeText(imageUrl)
      .then(() => {
        setCopyStatus("Copied!");
        toast.success("Image URL copied to clipboard");
        setTimeout(() => {
          setCopyStatus("Copy URL");
        }, 1500);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
        toast.error("Error copying to clipboard");
      });
  };

  return (
    <div className=" flex justify-center items-start bg-slate-800 px-4 pt-8 pb-8 min-h-[500px] h-auto ">
      <div className="flex items-center flex-col justify-center bg-white p-8 rounded-2xl shadow-lg">
        {/* <img className="p-4 w-60 h-66" src={logo} /> */}
        <h1 className="jersey-20-regular">Image to URL</h1>
        <div className="flex flex-col items-center space-y-4 rounded-2xl">
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              className="bg-black px-4 py-4 rounded-2xl block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            />
          </div>

          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-200"
          >
            <div className="flex flex-row items-center justify-center">
              <IoCloudUploadOutline className="mr-2" />
              Upload Image
            </div>
          </button>
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
        <div className="flex flex-col items-center justify-center">
          <div className="text-black flex items-center justify-center mt-4">
            Made with 💛 by Ayush Prajapati
          </div>
          {/* <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-2xl text-sm px-4 py-2.5 text-center inline-flex items-center mt-4 "
            onClick={() => window.open("https://github.com/ayushp2563")}
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Visit My GitHub
          </button> */}
        </div>
        <button className="mt-4">
          <a
            href="https://www.producthunt.com/posts/image-to-url?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-image&#0045;to&#0045;url"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456585&theme=light"
              alt="Image&#0032;to&#0032;URL - Get&#0032;URL&#0032;for&#0032;your&#0032;image&#0046; | Product Hunt"
              className="width: 250px; height: 54px;"
              width="250"
              height="54"
            />
          </a>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ImageUpload;
