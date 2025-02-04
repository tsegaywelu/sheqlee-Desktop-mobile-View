import React, { useEffect, useState } from "react";
import Mybutton from "./Mybutton";
import { Link } from "react-router-dom";
import Rightarrow from "../../assets/SVG/Right.svg";
import clock from "../../assets/SVG/clock.svg";
import companyb from "../../assets/SVG/companyb.svg";
import calendar from "../../assets/SVG/calendar.svg";
import qualityassurance from "../../assets/SVG/qualityassurance.svg";
import Jobicons from "../onetimecmponent/Jobicons";
import { Jobs } from "../../data/Postedjobs";
// import devops from "../../assets/SVG/devops.svg";
import Postedjobsmobile from "../basecomponents/Postedjobsmobile";
const emptyRectangles = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
import { useLocation } from "react-router-dom";
import Pagination from "../basecomponents/Pagination";
import Paginationmobile from "../basecomponents/Paginationmobile";
const Postedjobs = ({
  showicon5,
  showtitle,
  showmobile,
  showpaginatin,
  totalPages,
}) => {
  const { pathname } = useLocation(); //here i want to cut out the text "latest posted jobs " in other pages
  const actualpath = pathname.replaceAll("/", "");
  const [loading, setloading] = useState(false);
  // const [Jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   console.log("i am running ");

  //   async function fetchjobs() {
  //     try {
  //       setloading(true);
  //       const response = await fetch("http://localhost:3000/jobs");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch jobs");
  //       }
  //       const result = await response.json();
  //       console.log({ result }, result.length);
  //       setJobs(result);
  //       setloading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchjobs();
  // }, []);

  return (
    <>
      {loading ? (
        <div className="md:py-1 mx-8 md:mx-16 ">
          {showtitle && (
            <div className="flex justify-between my-8">
              <h4 className=" text-[23px] md:text-[33px]  font-kantumruy font-medium my-3">
                Latest job posts
              </h4>
              <div className="flex justify-center items-center gap-2 relative ">
                <div className="w-24 h-4 bg-custom-tags rounded-[7px] "></div>
                <div className=" absolute  w-1/2 h-[4px] bg-custom-purple left-0 bottom-5"></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {/* ///////////////////// */}
            {emptyRectangles.map((jobsall, index) => {
              return (
                <div
                  className=" bg-custom-slate rounded-2xl md:p-3 lg:pr-5  lg:pt-5   "
                  key={index}
                >
                  <div className="flex  justify-center items-center gap-5">
                    <div className=" w-7 h-7 rounded-full bg-custom-tags   "></div>
                    <div className="h-5 w-full bg-custom-tags rounded-[7px]"></div>
                  </div>
                  <div>
                    <p className="h-3 w-full bg-custom-tags mt-10 rounded-[5px] "></p>
                    <p className="h-3 w-1/2 bg-custom-tags mt-2 rounded-[5px]"></p>
                  </div>

                  <div className="mt-10">
                    <div className="flex  justify-between">
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1  rounded-[5px]">
                        <div className=" w-4 h-4 rounded-full bg-custom-load  "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load   rounded-[5px]"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1 rounded-[5px]">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load  rounded-[5px]"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1 rounded-[5px]">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load rounded-[5px]"></div>
                      </div>
                    </div>

                    <div className="flex  justify-between mr-10">
                      <div className=" flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1 rounded-[5px]">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load rounded-[5px]"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1 rounded-[5px]">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load rounded-[5px]"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="h-5 w-1/4 flex gap-2 justify-center items-center mt-5 bg-custom-purple p-1 border-8 border-custom-purple rounded-[5px] ">
                        <div className="bg-custom-tags h-2 w-full rounded-[19px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="  md:py-1 mx-4 md:mx-16 ">
          {showtitle && (
            <div className="flex justify-between my-8">
              <h4 className="  text-[23px] md:text-[33px]  font-kantumruy font-medium ">
                Latest job posts{" "}
              </h4>
              <div className="flex justify-center items-center gap-2 relative ">
                <h3 className="text-xs md:text-sm font-medium">
                  745+ more jobs
                </h3>
                <div className=" absolute  w-1/2 h-[4px] bg-custom-purple left-0 bottom-0 md:bottom-2"></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}
          <div
            className={` ${
              showmobile ? "hidden" : " grid"
            }  md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5  lg:gap-x-8  gap-y-5  lg:gap-y-7 `}
          >
            {" "}
            {/* ///////////////////// */}
            {Jobs.map((jobsall) => {
              return (
                <Link to={`/sheqlee/all jobs/${jobsall.title}`}>
                  <div
                    className=" pl-[12px] md:pl-[16px]   md:mx-0 bg-custom-slate rounded-[20px] md:pr-2 px-3  pt-7 h-[275px]  flex flex-col  justify-between  pb-4  "
                    key={jobsall.title + Math.random()}
                  >
                    <div>
                      <div className=" flex  gap-5">
                        {showicon5 && (
                          <img src={qualityassurance} width={24} height={24} />
                        )}
                        <p className=" text-[20px] md:text-[22px] font-semibold md:font-medium font-kantumruy">
                          {jobsall.title}
                        </p>
                      </div>
                      <p className="text-base my-6 font-kantumruy    line-clamp-4 xl:line-clamp-2">
                        {jobsall.descreiption}
                      </p>
                    </div>
                    <div className="">
                      <div className="flex   flex-wrap  gap-2  ">
                        <Jobicons text={jobsall.time}>
                          <img
                            src={calendar}
                            width={14}
                            height={14}
                            className="mr-1"
                            alt=""
                          />
                        </Jobicons>
                        <Jobicons text={jobsall.companyname}>
                          <img
                            src={companyb}
                            width={14}
                            height={14}
                            className="mr-1"
                            alt=""
                          />
                        </Jobicons>

                        <Jobicons text={jobsall.work}>
                          <img
                            src={clock}
                            width={14}
                            height={14}
                            className="mr-1"
                            alt=""
                          />
                        </Jobicons>
                        {/* ///////// */}
                        <Jobicons text={jobsall.level}>
                          <img
                            src={calendar}
                            width={14}
                            height={14}
                            className="mr-1"
                            alt=""
                          />
                        </Jobicons>
                        <Jobicons text={jobsall.salary}>
                          <img
                            src={companyb}
                            width={14}
                            height={14}
                            className="mr-1"
                            alt=""
                          />
                        </Jobicons>

                        <Mybutton
                          background={
                            "bg-custom-purple  text-xs px-4 py-1 font-medium text-white font-kantumruy rounded-[5px] "
                          }
                        >
                          Apply
                        </Mybutton>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {showmobile && <Postedjobsmobile showicon5 />}
          {showpaginatin && (
            <div>
              <div className=" hidden md:block  mt-10">
                <Pagination totalPages={totalPages} />
              </div>
              <div className=" md:hidden   mt-1">
                <Paginationmobile totalPages={totalPages} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Postedjobs;
