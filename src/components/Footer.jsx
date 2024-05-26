import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1">
                    <p>
                        &copy; {new Date().getFullYear()} RecipeFolio. All
                        rights reserved.
                    </p>
                    <p>
                        Created with{" "}
                        <span className="text-red-500">&hearts;</span> by Your
                        Name
                    </p>
                </div>
                <div className="">
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:info@recipefolio.com"
                            className="text-white hover:underline"
                        >
                            info@recipefolio.com
                        </a>
                    </p>
                    <p>
                        Phone:{" "}
                        <a
                            href="tel:123-456-7890"
                            className="text-white hover:underline"
                        >
                            123-456-7890
                        </a>
                    </p>
                    <ul className="flex mt-2 justify-start items-center text-lg ">
                        <li className="mr-4">
                            <a
                                href="https://www.facebook.com/yourfacebookpage"
                                className="text-white hover:text-teal-500 transition-all duration-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/yourlinkedinprofile"
                                className="text-white hover:text-teal-500 transition-all duration-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
