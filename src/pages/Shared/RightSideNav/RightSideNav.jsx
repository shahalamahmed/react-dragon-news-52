import { FaGoogle, FaGithub, FaFacebook, FaTwitter,  FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/2.png'
import qZone3 from '../../../assets/3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className=" p-4 space-y-3 mb-6">
                <h2 className='text-3xl '>Login With</h2>
                <button className="btn w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub />

                    Login With Google
                </button>

            </div>
            <div className=" p-4 space-y-3 mb-6">
                <h2 className='text-3xl '>Find Us on</h2>
                <a className="p-4 text-lg flex items-center border rounded-t-lg" href=" ">
                    <FaFacebook></FaFacebook>
                    <span className="ml-3">Facebook</span>
                </a>
                <a className="p-4 text-lg flex items-center border rounded-t-lg" href=" ">
                    <FaTwitter />
                    <span className="ml-3">Twitter</span>
                </a>
                <a className="p-4 text-lg flex items-center border rounded-t-lg" href=" ">
                   <FaInstagram></FaInstagram>
                    <span className="ml-3">Instagram</span>
                </a>

            </div>
            {/*q zone */}
            <div className=" p-4 space-y-3 mb-6">
                <h2 className='text-3xl '>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
            {/*q zone */}
        </div>
    );
};

export default RightSideNav;