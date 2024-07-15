import { CiTwitter } from "react-icons/ci"
import { FaInstagram, FaRegCopyright } from "react-icons/fa6"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"

const Footer = () => {
    return (
        <>
            <div className="row mt-[140px] flex w-full gap-20 text-white bg-black h-[440px] pt-20 justify-center">
                <div className="max-content flex flex-col gap-6">
                    <p className='text-[24px] font-bold'>Exclusive</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input type="text"></input>
                </div>

                <div className="w-44 flex flex-col gap-6">
                    <p className='text-[24px] font-bold'>Support</p>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <input type="text"></input>
                </div>

                <div className="w-44 flex flex-col gap-6">
                    <p className='text-[24px] font-bold'>Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>

                <div className="w-44 flex flex-col gap-6">
                    <p className='text-[24px] font-bold'>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Wishlist</p>
                    <p>Contact</p>
                </div>

                <div className="min-w-max flex flex-col gap-6">
                    <p className='text-[24px] font-bold'>Download App</p>
                    <p className='opacity-75 text-xs'>Save $3 with App New User Only</p>
                    <div className="flex w-full justify-between">
                        <div className="left w-2/3 h-2/3">
                            <img src="/images/Qr Code.png" alt="" />
                        </div>
                        <div className="right flex flex-col justify-between ">
                            <div className="top ">
                                <img src="/images/playstore.png" alt="" />
                            </div>
                            <div className="bottom">
                                <img src="/images/download-appstore.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-between">
                        <div className="w-8 h-8 text-[24px]">
                            <TiSocialFacebook />
                        </div>
                        <div className="w-8 h-8 text-[24px]">
                            <CiTwitter />
                        </div>
                        <div className="w-8 h-8 text-[24px]">
                            <FaInstagram />
                        </div>
                        <div className="w-8 h-8 text-[24px]">
                            <TiSocialLinkedin />
                        </div>
                    </div>
                </div>

            </div>

            <div className="row flex align-middle items-center gap-2 justify-center bg-black text-[#4a4949] border-t-[1px] border-gray-600 pt-4 pb-4">
                <FaRegCopyright />
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </>
    )
}

export default Footer