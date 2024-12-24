import { useEffect } from "react"
import { useState } from "react"
import Job from "../Job/Job"

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([])
    useEffect(() => {
      fetch('jobs.json')
      .then(res=>res.json())
      .then(data=>setJobs(data))
    }, [])
    
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div>
                {
                    jobs.map((job,idx)=><Job key={idx} job={job}/>)
                }
            </div>
        </div>
    )
}

export default FeaturedJobs