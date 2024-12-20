import React from "react";
import Mybutton from "../basecomponents/Mybutton";
import Divider from "../basecomponents/Divider";
const Deleteaccount = () => {
  return (
    <div className=" mx-5 md:mx-16 lg:mx-48 ">
      <div className=" font-kantumruy my-5 space-y-6">
        <h2 className=" text-xl md:text-3xl font-medium font-kantumruy ">
          Account deletion{" "}
        </h2>
        <p className="font-kantumruy">
          Please note that your account will be available for recovery for a
          period of one month after deletion. After that, it will be permanently
          deleted and cannot be recovered.
        </p>
      </div>
      {/* //deletion reason part  */}
      <div className="relative mt-8 font-kantumruy space-y-5">
        <label
          htmlFor="reason"
          className="text-sm md:text-xl lg:text-2xl my-3 font-medium"
        >
          Deletion reason <span className="text-red-600">*</span>
        </label>

        <textarea
          name=""
          rows={8}
          id="reason"
          //   className="bg-custom-tags w-full rounded-xl p-4 text-xl outline-none "
          className="bg-custom-tags w-full rounded-lg p-4  outline-none text-xl placeholder:font-kantumruy placeholder:text-custom-placeholder resize-none"
          placeholder="Why are you deleting your account..."
        ></textarea>
        <p className="absolute bottom-2 right-2 text-sm">0/128</p>
      </div>
      <p className=" text-sm font-kantumruy">
        Giving us accurate reason for your deletion will help us make Qagnew
        better. We hope to see you back soon. Thank you.
      </p>
      {/* //button part */}
      <div className=" mt-10 ">
        <div className="flex justify-end  ">
          <Mybutton
            background={
              "bg-custom-red rounded-lg p-1 md:p-2 lg:p-3 text-white font-bold"
            }
          >
            <h1 className="text-2xl">Delete account</h1>
          </Mybutton>
        </div>
      </div>
      {/* ///////////// */}
      <div className=" mx-auto my-8">
        <Divider></Divider>
        <span className="block font-kantumruy ">
          <span className="text-red-800">*</span> all fields are required{" "}
        </span>
      </div>
    </div>
  );
};

export default Deleteaccount;