"use client";
import React, { useState } from "react";
import Input from "../global/Input";
import Select from "../global/Select";
import Button2 from "../global/Button2";
import { Upload } from "lucide-react";

export default function Base() {
  const documents = ["Pan Card", "Drivers License", "Passport"];
  const [active, setActive] = useState(-1);
  const [img, setImg] = useState("");
  const onChange = (e) => {
    const imgSrc = URL.createObjectURL(e.target.files[0]);
    setImg(imgSrc);
  };

  return (
    <div>
      <div className="w-[750px] text-center text-white mx-auto">
        <p className="text-2xl font-semibold">
          Upload a Proof of your Identity
        </p>
        <p className="mt-2 text-sm">
          Capital Bank Requires a valid Government issue ID (Drivers License,
          Passport, National ID)
        </p>
        <img src={img} alt="" />
        <div className="grid mt-6 text-start grid-cols-2 gap-4">
          <Select
            data={["Drivers License"]}
            value=""
            onChange={onChange}
            name="documentType"
            label="Document Type"
          />
          <Select
            data={["Nigeria"]}
            value=""
            onChange={onChange}
            name="country"
            label="Your Country"
          />
        </div>
        <div className="grid grid-cols-2 mt-8 h-60 gap-7">
          <div className="bg-white/20 border-dotted backdrop-blur-xl border-2 grid place-content-center rounded-xl">
            <div className="">
              <p className="font-semibold mb-1">Front photo of your Document</p>
              <p className="text-13 mb-1">Upload the frontside of your document</p>
              <p className="text-10">Support: JPG, PNG, PDF, JPEG</p>
              <p className="border-2 shadow-md px-5 py-3 mt-4 cursor-pointer duration-300 hover:scale-105 active:scale-100 rounded-full text-sm">
                Choose file
                <Upload className="inline ml-2" size={15}/>
                </p>
            </div>
          </div>
          <div className="bg-black/20 relative border-dotted backdrop-blur-xl border-2 grid place-content-center rounded-xl">
            <div className={``}>
              <p className="font-semibold mb-1">Back photo of your Document</p>
              <p className="text-13 mb-1">Upload the backside of your document</p>
              <p className="text-10">Support: JPG, PNG, PDF, JPEG</p>
              <p className="border-2 shadow-md px-5 py-3 mt-4 cursor-pointer duration-300 hover:scale-105 active:scale-100 rounded-full text-sm">
                Choose file
                <Upload className="inline ml-2" size={15}/>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6 mb-10">
          <div className="h-6 w-6 shrink-0 border-2 rounded grid place-content-center"></div>
          <p className="text-sm text-start">
            I confirm that i uploaded valid government-issued photo ID. This ID
            include my picture, signature, name, date of birth and address
          </p>
        </div>
        <Button2
          title="Continue"
          style={{ background: "purple", width: "100%", height: "55px" }}
        />
      </div>
    </div>
  );
}
