/* eslint-disable react/prop-types */
import salaryImg from "../../../public/assets/icons/money.png"
import locationImg from "../../../public/assets/icons/Location2.png"
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

  const btnStyle = "px-5 py-2 font-bold rounded-md hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white border  text-[#7E90FE] border-[#7E90FE] transition-all active:scale-95 duration-900"

  const viewDetailsBtn = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white"

  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


  return (
    <div className="card rounded-md border p-2 ">
      <div className="card-body">

        <div>
          <img src={logo} alt="Shoes" />
        </div>

        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div className="flex gap-5">
          <button className={btnStyle}>{remote_or_onsite}</button>
          <button className={btnStyle}>{job_type}</button>
        </div>

        <div className='mt-2 flex flex-col md:flex-row md:gap-5 gap-2'>
          <h1 className='flex md:w-1/2 items-start gap-1'>
            <img src={locationImg} alt="" />
            <span>{location}</span>
          </h1>

          <h1 className='flex md:w-1/2 items-center gap-1'> <img src={salaryImg} alt="" /> Salary : {salary}</h1>
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

export default Job