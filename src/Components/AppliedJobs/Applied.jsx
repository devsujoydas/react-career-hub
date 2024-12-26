/* eslint-disable react/prop-types */

import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import loacationImg from "../../../public/assets/icons/Location.png"

const Applied = ({job}) => {
    
    const btnStyle = "px-5 py-2 font-bold rounded-md hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white border  text-[#7E90FE] border-[#7E90FE] transition-all active:scale-95 duration-900"
    
    const viewDetailsBtn = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 text-xl py-3 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white"
    
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="rounded-xl border md:p-5 p-6 ">
            <div className="flex justify-between items-center lg:flex-row flex-col gap-6">

                <div className='flex gap-5 md:flex-row flex-col justify-center items-center'>

                    <div className='bg-base-200 rounded-xl h-52 md:w-52 w-full flex justify-center items-center'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h2 className="font-bold text-2xl">{job_title}</h2>
                        <h2 className="font-semibold text-gray-500 text-xl">{company_name}</h2>

                        <div className="flex gap-5">
                            <button className={btnStyle}>{remote_or_onsite}</button>
                            <button className={btnStyle}>{job_type}</button>
                        </div>

                        <div className=' flex flex-col lg:flex-row md:gap-5 gap-2 text-lg'>
                            <h1 className='flex items-center gap-1'><img src={loacationImg} alt="" />{location}</h1>
                            <h1 className='flex items-center gap-1'><AiOutlineDollarCircle />Salary : {salary}</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to={`/job/${id}`}>
                        <button className={viewDetailsBtn}>View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Applied