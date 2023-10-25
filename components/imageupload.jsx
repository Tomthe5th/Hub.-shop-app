"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

export default function Imageupload({value , onChange , onRemove}) {
function handleUpload(res){
onChange(res.info.secure_url)
// console.log(res);
}

  return (
    <section>
      <CldUploadWidget uploadPreset="tfqlubs8" onUpload={handleUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button className="button" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </section>
  );
}
