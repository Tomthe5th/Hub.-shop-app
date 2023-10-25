"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";

export default function Imageupload({ value, onChange, onRemove }) {
  function handleUpload(res) {
    onChange(res.info.secure_url);
    // console.log(res);
  }

  return (
    <section>
      <ul>
        {value.map((url) => (
          <li key={url} className="relative aspect-square w-56">
            <Button
              className="absolute left-0 z-20 "
              variant="destructive"
              type="button"
              onClick={() => onRemove(url)}
            >
              <TrashIcon />
            </Button>
            <Image
              fill
              src={url}
              alt="product image"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
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
