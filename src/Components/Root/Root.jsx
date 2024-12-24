
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Root = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Root