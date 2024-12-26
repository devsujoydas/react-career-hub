import Applied from './Applied'
import bgImg1 from '../../../public/assets/images/bg1.png'
import bgImg2 from '../../../public/assets/images/bg2.png'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStoredJobApplication } from '../utility/LocalStorage'

const AppliedJobs = () => {
  const jobs = useLoaderData()
  const [appliedJob, setAppliedJob] = useState([])

  console.log()

  useEffect(() => {
    const storedJobIds = getStoredJobApplication()
    if (jobs.length > 0) {
      const jobApplied = []
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id)
        jobApplied.push(job)
      }
      setAppliedJob(jobApplied)
    }
  }, [jobs])

  return (
    <div>
      <img className='absolute top-0 right-0' src={bgImg2} alt='' />
      <div className='h-56 bg-[#7E90FE] bg-opacity-5 flex justify-center items-center relative'>
        <h1 className='font-bold text-3xl'>Applied Jobs</h1>
        <img className='absolute bottom-0 left-0' src={bgImg1} alt='' />
      </div>

      <div className='max-w-screen-2xl md:mx-auto my-20'>
        <div className='md:mx-32 mx-10 grid gap-6'>
          {appliedJob.map((job, idx) => (
            <Applied key={idx} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs
