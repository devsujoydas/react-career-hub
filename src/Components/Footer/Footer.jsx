import fbImg from "/assets/icons/facebook.png";
import twitterImg from "/assets/icons/twitter.png";
import instaImg from '/assets/icons/insta.png';

const Footer = () => {
    const aStyle = 'hover:underline hover:text-emerald-600 hover:-translate-y-1 transition-all'
    return (
        <div className="bg-base-200 ">
            <div id='footer'>
                <div className=" max-w-screen-2xl md:mx-auto mx-10 text-base-content py-20">
                    <div className='grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-28'>

                        <div className='col-span-2 flex flex-col gap-4'>
                            <h1 className='text-4xl font-bold'>CareerHub</h1>
                            <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                            <div className='flex gap-2'>
                                <a href="https://www.facebook.com/sujoydas36">
                                    <img className='active:scale-95 border rounded-full transition-all' src={fbImg} alt="" />
                                </a>
                                <img className='active:scale-95 border rounded-full transition-all' src={twitterImg} alt="" />
                                <a href="https://www.instagram.com/sdsujoy920243/">
                                    <img className='active:scale-95 border rounded-full transition-all' src={instaImg} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Company</h6>
                            <a href='#footer' className={aStyle}>About Us</a>
                            <a href='#footer' className={aStyle}>Work</a>
                            <a href='#footer' className={aStyle}>Latest News</a>
                            <a href='#footer' className={aStyle}>Careers </a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Product</h6>
                            <a href='#footer' className={aStyle}>Prototype</a>
                            <a href='#footer' className={aStyle}>Plans & Pricing</a>
                            <a href='#footer' className={aStyle}>Customers</a>
                            <a href='#footer' className={aStyle}>Integrations</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Support</h6>
                            <a href='#footer' className={aStyle}>Help Desk</a>
                            <a href='#footer' className={aStyle}>Sales</a>
                            <a href='#footer' className={aStyle}>Become a Partner</a>
                            <a href='#footer' className={aStyle}>Developers </a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h6 className="footer-title">Contact</h6>
                            <a href='#footer' className={aStyle}>524 Broadway , NYC</a>
                            <a href='#footer' className={aStyle}>+1 777 - 978 - 5570</a>
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