import { useEffect, useState } from "react"
import Category from "../Category/Category"

const CategoriesList = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div className="my-10 max-w-screen-2xl mx-auto">
      <div className="md:mx-28 mx-10 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">Job Category List</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            categories.map((category, idx) => <Category key={idx} category={category} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CategoriesList