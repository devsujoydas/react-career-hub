import fbImg from '../../../public/assets/icons/facebook.png';
import twitterImg from '../../../public/assets/icons/twitter.png';
import instaImg from '../../../public/assets/icons/insta.png';

const Footer = () => {
    return (
        <div className="bg-base-200 ">
            <div>
                <div className=" max-w-screen-2xl md:mx-auto mx-10 text-base-content py-20">
                    <div className='grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-28'>

                        <div className='col-span-2 flex flex-col gap-4'>
                            <h1 className='text-4xl font-bold'>CareerHub</h1>
                            <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                            <div className='flex gap-2'>
                                <img className='active:scale-95 border rounded-full transition-all' src={fbImg} alt="" />
                                <img className='active:scale-95 border rounded-full transition-all' src={twitterImg} alt="" />
                                <img className='active:scale-95 border rounded-full transition-all' src={instaImg} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Company</h6>
                            <a className="">About Us</a>
                            <a className="">Work</a>
                            <a className="">Latest News</a>
                            <a className="">Careers </a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Product</h6>
                            <a className="">Prototype</a>
                            <a className="">Plans & Pricing</a>
                            <a className="">Customers</a>
                            <a className="">Integrations</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Support</h6>
                            <a className="">Help Desk</a>
                            <a className="">Sales</a>
                            <a className="">Become a Partner</a>
                            <a className="">Developers </a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Contact</h6>
                            <a className="">524 Broadway , NYC</a>
                            <a className="">+1 777 - 978 - 5570</a>
                        </div>


                    </div>

                    <div className='md:mx-28 flex md:flex-row flex-col text-center justify-between pt-10 mt-10 border-t-2 '>
                        <h1>@2023 CareerHub. All Rights Reserved</h1>
                        <h1>Powered by CareerHub</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer