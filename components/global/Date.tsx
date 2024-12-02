'use client'
import React, { useState } from "react";


export const Date = () => {
  const style = 'border-2 h-7 w-7 outline-none text-sm text-black flex justify-center text-center rounded-full'
  return (
    <div className="flex gap-2">
      <input type="text"
        placeholder="D"
        className={`${style} border-red-500 placeholder:text-red-500`} maxLength={1} name="" id=""
      />
      <input type="text"
        placeholder="D"
        className={`${style} border-red-500 placeholder:text-red-500`} maxLength={1} name="" id=""
      />
      <input type="text"
        placeholder="M"
        className={`${style} border-green-500 placeholder:text-green-500`} maxLength={1} name="" id=""
      />
      <input type="text"
        placeholder="M"
        className={`${style} border-green-500 placeholder:text-green-500`} maxLength={1} name="" id=""
      />
      <input type="text"
        placeholder="Y"
        className={`${style} border-amber-500 placeholder:text-amber-500`} maxLength={1} name="" id=""
      />
      <input type="text"
        placeholder="Y"
        className={`${style} border-amber-500 placeholder:text-amber-500`} maxLength={1} name="" id=""
      />
    </div>
  );
};

