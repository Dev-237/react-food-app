import React from 'react'
import logo_img from '../assets/logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Footer = () => {
  return (
    <footer className="bg-gray-300 rounded-tl-full">
      <div className="grid lg:grid-cols-3 pb-3">
        <div className="flex flex-col items-center border-r-2">
          <img src={logo_img} alt="" className="w-40" />
          <p className="text-2xl font-bold text-purple-900">Foodies</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <div>
            <p className="text-xl my-2" >
              Contact us : <span className="text-sm font-bold" >+91 282 323 3132</span>
            </p>
            <p className="text-xl my-2" >
              Email : <span className="text-sm font-bold" >Foodies@gmail.com</span>
            </p>
            <p className="text-xl my-2" >
              Location : <span className="text-sm font-bold" >Nangali circle, near bus stand, Alwar</span>
            </p>
            
          </div>
          <div>
            <span className="mx-2 cursor-pointer" ><FacebookIcon /></span>
            <span className="mx-2 cursor-pointer" ><InstagramIcon /></span>
            <span className="mx-2 cursor-pointer" ><GitHubIcon /></span>
            <span className="mx-2 cursor-pointer" ><LinkedInIcon /></span>
          </div>
        </div>
        <div className="border-l-2 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold my-2" >Delivery Time : </p>
          <p className="text-xl mb-2" >Monday to Saturday : <span className="font-bold text-xs" >10:00 AM - 7:00 PM</span></p>
          <p className="text-xl mb-2" >Sunday : <span className="font-bold text-xs" >OFF</span></p>
        </div>
      </div>

    </footer>
  );
}

export default Footer
