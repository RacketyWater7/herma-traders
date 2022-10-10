import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 min-h-[200px] bg-gray-100 pt-10 pr-14 pl-14">
      <div className="flex justify-between">
        <div className="self-start flex gap-6">
          <div className="w-auto h-auto self-center">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              style={{ height: "30px" }}
              alt="logo"
              loading="lazy"
            />
          </div>
          <p className="text-xs">
            4-20-2 Fuda Chofu-Shi, Chile 182-0024 Chile <br /> Tel : +56 32 440
            3440 <br /> FAX : +56 43 440 3450 <br /> Email :
            info@hermatraders.com
          </p>
        </div>
        <div className="flex flex-col">
          <span className="flex mb-6">
            <GrLanguage className="self-center" height={20} width={20} />{" "}
            <span className="ml-2">Languages</span>
          </span>
          <div className="flex flex-col pl-6">
            <Link className="hover:underline text-sm" to={"#"}>
              English
            </Link>
            <Link className="hover:underline text-sm" to={"#"}>
              Spanish
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="flex mb-6">Join us on social media</p>
          <span className="flex">
            <Link to={"#"}>
              <FaFacebookF className="hover:text-[#3b5998] cursor-pointer duration-300 w-[25px] h-[25px]" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:info@hermatraders.com";
              }}
            >
              <FaEnvelope className=" ml-4 hover:text-[#0077b5] cursor-pointer duration-300 w-[25px] h-[25px]" />
            </Link>
            <Link to={"#"}>
              <FaTwitter className="ml-4 hover:text-[#1da1f2] cursor-pointer duration-300 w-[25px] h-[25px]" />
            </Link>
            <Link to={"#"}>
              <FaInstagram className="ml-4 hover:text-[#e4405f] cursor-pointer duration-300 w-[25px] h-[25px]" />
            </Link>
            <Link to={"#"}>
              <FaYoutube className="ml-4 hover:text-[#ff0000] cursor-pointer duration-300 w-[25px] h-[25px]" />
            </Link>
          </span>
        </div>
        <div className="flex flex-col">
          <p className="mb-6">Get In Touch With Us</p>
          <div className="flex flex-col pl-6">
            <Link to={"#"} className="hover:underline text-sm">
              FAQ
            </Link>
            <Link className="hover:underline text-sm" to={"#"}>
              About Us
            </Link>
            <Link className="hover:underline text-sm" to={"#"}>
              Get Support
            </Link>
          </div>
        </div>
      </div>
      {/* add copyright info */}
      <div className="flex justify-center mt-10">
        <p className="text-sm">
          © 2022 Hermatraders. All rights reserved.
          {/* <br /> Designed by{" "}
          <a
            href="https://www.linkedin.com/in/haseebudeen"
            target="_blank"
            rel="noreferrer"
          >
            Haseeb Udeen
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
