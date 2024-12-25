/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import bgImg1 from "../../../public/assets/images/bg1.png"
import bgImg2 from "../../../public/assets/images/bg2.png"

import salaryImg from "../../../public/assets/icons/money.png"
import jobTitleImg from "../../../public/assets/icons/calendar.png"
import phoneImg from "../../../public/assets/icons/phone.png"
import emailImg from "../../../public/assets/icons/email.png"
import locationImg from "../../../public/assets/icons/Location2.png"



const JobDetails = () => {
  const applyNowBtn = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl py-4 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white w-full"
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  const job = jobs.find(job => job.id === idInt);
  console.log(job);
  const { job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  const { company_name, job_title, job_type, location, logo, remote_or_onsite, salary } = job;
  const { phone, address, email } = contact_information;

const navigate = useNavigate();
const handleBack =() =>{
  navigate(-1)
}

  return (
    <div className="">

      <img className="absolute top-0 right-0" src={bgImg2} alt="" />
      <div className="h-56 bg-[#7E90FE] bg-opacity-5 flex justify-center items-center relative">
        <h1 className="font-bold text-3xl">Job Details</h1>
        <img className="absolute bottom-0 left-0" src={bgImg1} alt="" />
      </div>

      <div className="max-w-screen-2xl md:mx-auto mx-10">
        <div className="md:mx-28">
          <div className="grid md:grid-cols-3 gap-10 md:gap-5 my-20">
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
                  <h1 className="flex gap-2"><img src={salaryImg} alt="" /><span className="font-bold">Salary:</span>{salary} (Per Month)</h1>
                  <h1 className="flex gap-2"><img src={jobTitleImg} alt="" /><span className="font-bold">Job Title: </span>{job_title}</h1>
                </div>
                <h1 className="font-bold text-xl">Contact Information</h1>
                <div className='border-t-2 grid gap-3 pt-5 border-[#ccd3ff] text-lg'>
                  <h1 className="flex gap-2"><img src={phoneImg} alt="" /><span className="font-bold">Phone : </span>{phone}</h1>
                  <h1 className="flex gap-2"><img src={emailImg} alt="" /><span className="font-bold">Email :</span>{email}</h1>
                  <h1 className="flex gap-2">
                    <div>
                      <img className="w-10" src={locationImg} alt="" />
                    </div>
                    <span className="font-bold">Address:</span>
                    <span>{address}</span>
                  </h1>
                </div>
              </div>

              <button onClick={handleBack} className={applyNowBtn}>Apply Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails