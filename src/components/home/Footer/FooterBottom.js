import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#EAECEF] py-6">
      <div className="max-w-container mx-auto border-t-[1px] pt-4 text-center">
        <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
          <AiOutlineCopyright /> Copyright 2024 | Shopfinity | All Rights
          Reserved |{" "}
          <a
            href="https://shai-batonya.github.io/"
            target="_blank"
            rel="noreferrer"
            className="text-primeColor hover:underline"
          >
            Built by Shai Gabriel Batonya
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
