/* eslint-disable react/prop-types */

const Category = ({ category }) => {
    const { availability, category_name, logo } = category;
    return (
        <div className="bg-[#7E90FE] bg-opacity-5 rounded-xl  p-10">
            <div className="flex flex-col  gap-3">
                <div  className="">
                    <img className="p-2 w-16 shadow rounded-lg" src={logo} alt="" />

                </div>

                <h1 className="font-bold mt-5 text-xl">{category_name}</h1>
                <h1 className="text-gray-500">{availability}</h1>
            </div>
        </div>
    )
}

export default Category