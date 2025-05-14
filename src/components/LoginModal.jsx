import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const LoginModal = () => {
    const { signInWithGoogle, createUser, signInWithPassword } = useContext(AuthContext);
    const [active, setActive] = useState(true);
    const [error, setError] = useState("")

    {/* --------------SignIn With Google-------------- */ }
    const handleGoogleLogin = () => {
        setError("")
        signInWithGoogle()
            .then(res => {
                toast.success('successfully login')
            }).catch(error => {
                setError(error.message)
            })
    };


    {/* --------------handleLogin-------------- */ }
    const handleLogin = (e) => {
        setError("")
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithPassword(email, password)
            .then(res => {
                toast.success('Successfully Login');
                e.target.reset();
            }).catch(error => {
                setError(error.message)
            })

    }

    {/* --------------CreateUser with Email & Password-------------- */ }
    const handleRegister = (e) => {
        setError("")
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
            return setError("Password must be 8+ characters with uppercase, lowercase, number & symbol.")
        }
        if (password !== confirmPassword) {
            return setError('password do not match!')
        }

        createUser(email, password)
            .then(res => {
                toast.success('(_successfully Create Account');
                e.target.reset();
            }).catch(error => {
                setError(error.message)
            })
    }
    return (
        <> <Navbar textColor="text-[#000000]"/>
            <div className="hero bg-base-200 p-12">
                <div className="card bg-base-100 w-full max-w-sm shrink-0">
                    <div className="card-body">
                        <div className="flex gap-3 justify-center">
                            <button onClick={() => setActive(true)} className={`btn outline-none ${active ? 'btn-accent' : ''}`}>Login</button>
                            <button onClick={() => setActive(false)} className={`btn outline-none ${!active ? 'btn-accent' : ''}`}>Register</button>
                        </div>
                        {
                            active ?
                                <>
                                    <form onSubmit={handleLogin} className="fieldset">
                                        {/* --------------Email-------------- */}
                                        <label className="label">Email</label>
                                        <input type="email" name="email" className="input" placeholder="Email" />
                                        {/* --------------Password-------------- */}
                                        <label className="label">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </form>
                                    <NavLink onClick={() => setActive(false)} className="text-center pt-1">Don't have an account? <span className=" text-[#3D90D7] font-semibold">Register</span></NavLink>
                                    {/* --------------Divider-------------- */}
                                    <div className="flex w-full flex-col">
                                        <div className="divider">OR</div>
                                        <button onClick={handleGoogleLogin} className="text-base font-semibold bg-base-300 text-center rounded-3xl p-2 flex justify-center items-center gap-4"> <span><FcGoogle size={21} /></span>Sign up with Google</button>
                                    </div>
                                    <div className="text-center pt-3 text-red-600 text-xl">{error}</div>
                                </>
                                :
                                <>
                                    <form onSubmit={handleRegister} className="fieldset">
                                        {/* --------------Name-------------- */}
                                        <label className="label">Name</label>
                                        <input required type="text" name="name" className="input" placeholder="Name" />
                                        {/* --------------Photo-URL-------------- */}
                                        <label className="label">Photo-URL</label>
                                        <input required type="text" name="photo" className="input" placeholder="Photo-URL" />
                                        {/* --------------Email-------------- */}
                                        <label className="label">Email</label>
                                        <input required type="email" name="email" className="input" placeholder="Email" />
                                        {/* --------------Password-------------- */}
                                        <label className="label">Password</label>
                                        <input required type="text" name="password" className="input" placeholder="Password" />
                                        {/* --------------Confirm_Password-------------- */}
                                        <label className="label">Confirm_Password</label>
                                        <input required type="text" name="confirm_password" className="input" placeholder="Confirm_Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4">Register</button>
                                    </form>
                                    <NavLink onClick={() => setActive(true)} className="text-center pt-3">Already have an account? <span className=" text-[#3D90D7] font-semibold">Login</span></NavLink>
                                    <div className="text-center pt-3 text-red-600 text-xl">{error}</div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;

