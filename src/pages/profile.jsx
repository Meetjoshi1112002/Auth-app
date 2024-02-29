import React, { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../context/context";
import { app } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

export default function Profile() {
  const { currentUser } = useContext(authContext);
  const [img, setImg] = useState(currentUser?.photo);
  const [imgfile , setImgFie] = useState(undefined);
  const [form,setForm] = useState({});
  const [imgPercent,setPercent] = useState(0);
  useEffect(() => {
    if (imgfile) handleImgUpload(imgfile);
  }, [imgfile]);
  const fileRef = useRef(null);

  // Method to upload the file to the fire base and get URL of the image
  const handleImgUpload = async (img) => {
    const storage = getStorage(app);
    const fileName = currentUser?.username;
    // Reference of storage location and filename of upload file
    const storageRef = ref(storage, fileName);

    // create a task to uplaod a file(img here) with stroage and filename reference
    const uploadTask = uploadBytesResumable(storageRef, imgfile);
  
    // method that uploads the image to the firebase is this
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(Math.round(progress));
        setPercent(Math.round(progress))
      },
      (error) => {
        console.error("Error uploading image:", error.message);
        // You might want to provide feedback to the user here
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            setForm({ ...form, photo: url });
            console.log(url);
            setImg(url)
          })
          .catch((error) => {
            console.error("Error getting download URL:", error.message);
            setPercent(error.message);
          });
      }
    );
  };
  

  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="my-7 font-semibold text-3xl text-center">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImgFie(e.target.files[0])}
        />
        <p className="text-sm self-center text-green-600">{(imgPercent>0 && imgPercent<100)?"Uploaded "+imgPercent+" %":"Image Successfully launched"}</p>
        <img
          src={img}
          alt={img}
          className="cursor-pointer w-24 h-24 rounded-full self-center object-cover"
          onClick={() => {
            fileRef.current.click();
          }}
        />
        <input
          defaultValue={currentUser?.username}
          id="username"
          type="text"
          placeholder="username"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          defaultValue={currentUser?.email}
          id="email"
          type="email"
          placeholder="email"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          id="password"
          type="password"
          className="p-3 rounded-lg bg-slate-100"
        />
        <button className="p-3 uppercase bg-slate-700 rounded-lg text-white hover:opacity-95">
          Update{" "}
        </button>
        <div className="flex justify-between">
          <span className="text-red-700 hover:cursor-pointer">
            Delete Account
          </span>
          <span className="text-red-700 hover:cursor-pointer">Sign out</span>
        </div>
      </form>
    </div>
  );
}
