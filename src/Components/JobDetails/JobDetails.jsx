/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";
import bgImg1 from "/assets/images/bg1.png"
import bgImg2 from "/assets/images/bg2.png"

import salaryImg from "/assets/icons/money.png"
import jobTitleImg from "/assets/icons/calendar.png"
import phoneImg from "/assets/icons/phone.png"
import emailImg from "/assets/icons/email.png"
import locationImg2 from "/assets/icons/location2.png"
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../utility/LocalStorage"



const JobDetails = () => {
  const applyNowBtn = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl py-4 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white w-full"
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  
  const job = jobs.find(job => job.id === idInt);

  const { job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  const { job_title, salary } = job;
  const { phone, address, email } = contact_information;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }

  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast('You have applied successfully')
  }
  return (
    <div className="">
      <ToastContainer />
      <div>
        <button onClick={handleBack} className="fixed bottom-5 right-5 bg-emerald-500 rounded-full text-white font-bold p-2"><IoArrowBack /></button>
      </div>

      <img className="absolute top-0 right-0" src={bgImg2} alt="" />
      <div className="h-56 bg-[#7E90FE] bg-opacity-5 flex justify-center items-center relative">
        <h1 className="font-bold text-3xl">Job Details</h1>
        <img className="absolute bottom-0 left-0" src={bgImg1} alt="" />
      </div>

      <div className="max-w-screen-2xl md:mx-auto mx-10">
        <div className="md:mx-28">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-5 my-20">

            <div className="md:col-span-2 flex flex-col gap-8 leading-9 text-lg">
              <h2 className="text-gray-500"><span className="font-bold text-black">Job Description: </span>{job_description}</h2>
              <h2 className="text-gray-500"><span className="font-bold text-black">Job Responsibility: </span>{job_responsibility}</h2>
              <h1 className="font-bold">Educational Requirements: </h1>
              <h2 className="text-gray-500">{educational_requirements}</h2>
              <h1 className="font-bold">Experiences:</h1>
              <h2 className="text-gray-500">{experiences}</h2>
            </div>

            <div className="flex flex-col gap-6 ">
              <div className="p-8 rounded-lg bg-[#7E90FE] bg-opacity-20 grid gap-5">
                <h1 className="font-bold text-xl">Job Details</h1>
                <div className='border-t-2 grid gap-5 pt-5 border-[#ccd3ff]  text-lg'>
                  <h1 className="flex items-start gap-2">
                    <img src={salaryImg} alt="" />
                    <span className="font-bold">Salary:</span>
                    {salary} (Per Month)
                  </h1>
                  <h1 className="flex gap-2"><img src={jobTitleImg} alt="" /><span className="font-bold">Job Title: </span>{job_title}</h1>
                </div>
                <h1 className="font-bold text-xl">Contact Information</h1>
                <div className='border-t-2 grid gap-3 pt-5 border-[#ccd3ff] text-lg'>
                  <h1 className="flex items-start gap-2"><img src={phoneImg} alt="" /><span className="font-bold">Phone : </span>{phone}</h1>
                  <h1 className="flex gap-2"><img src={emailImg} alt="" /><span className="font-bold">Email :</span>{email}</h1>
                  <h1 className="flex gap-2">
                    <div>
                      <img className="md:w-10 w-16" src={locationImg2} alt="" />
                    </div>
                    <span className="font-bold">Address:</span>
                    <span>{address}</span>
                  </h1>
                </div>
              </div>

              <button onClick={handleApplyJob} className={applyNowBtn}>Apply Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails