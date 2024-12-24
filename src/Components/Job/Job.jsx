/* eslint-disable react/prop-types */


const Job = ({job}) => {
    
    console.log(job);
    const {logo} = job;
  return (
    <div>
        <img src={logo} alt="" />
    </div>
  )
}

export default Job