import { signOut } from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaCoins, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [currentUser] = useAuthState(auth);
    console.log(user);
    const userImage =
        currentUser?.photoURL ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    const coins = 50;

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="font-bold text-lg">
                    RecipeFolio
                </Link>

                <div className="flex items-center gap-x-10">
                    <Link to="/recipes" className="text-white hover:underline">
                        Recipes
                    </Link>
                    {!currentUser ? (
                        <button
                            onClick={handleGoogleLogin}
                            className="text-white flex items-center gap-x-2 border border-teal-500 hover:border-green-700 transition-all duration-500 rounded-lg px-3 py-[6px]"
                        >
                            Google Login <FaSignInAlt />
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/add-recipes"
                                className="text-white hover:underline"
                            >
                                Add-Recipes
                            </Link>
                            <div className="flex items-center gap-x-2">
                                <span className="text-white mr-2 flex items-center border border-teal-500 rounded-lg px-3 py-1">
                                    <span className="text-white mr-1 font-bold text-xl">
                                        {coins}
                                    </span>
                                    <FaCoins className="text-yellow-600" />
                                </span>
                                {userImage && (
                                    <img
                                        src={userImage}
                                        alt="User Image"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="text-white flex items-center gap-x-2 border border-teal-500 hover:border-red-500 transition-all duration-500 rounded-lg px-3 py-[6px]"
                                >
                                    Logout <FaSignOutAlt />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
