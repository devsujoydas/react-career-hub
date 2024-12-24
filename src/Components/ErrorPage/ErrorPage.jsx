import { Link } from "react-router-dom"



const ErrorPage = () => {

  
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center text-6xl font-bold text-red-500">
        <h1>Opps!!!</h1>
        
        <button className="text-xl mt-10 text-black bg-emerald-500 px-4 py-2 rounded-xl hover:bg-emerald-400 active:skew-x-6 active:-skew-y-6 transition-all "><Link to={'/'}>Go Back</Link></button>
    </div>
  )
}

export default ErrorPage