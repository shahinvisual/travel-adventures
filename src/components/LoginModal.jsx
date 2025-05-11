import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const LoginModal = () => {
    const [active, setActive] = useState(true);
    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className="hero">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0">
                            <div className="card-body">
                                <div className="flex gap-3 justify-center">
                                    <button onClick={() => setActive(true)} className={`btn outline-none ${active ? 'btn-accent' : ''}`}>Login</button>
                                    <button onClick={() => setActive(false)} className={`btn outline-none ${!active ? 'btn-accent' : ''}`}>Register</button>
                                </div>
                                {
                                    active ?
                                        <>
                                            <form className="fieldset">
                                                <label className="label">Email</label>
                                                <input type="email" className="input" placeholder="Email" />
                                                <label className="label">Password</label>
                                                <input type="password" className="input" placeholder="Password" />
                                                <div><a className="link link-hover">Forgot password?</a></div>
                                                <button className="btn btn-neutral mt-4">Login</button>
                                            </form>
                                            <NavLink onClick={() => setActive(false)} className="text-center p-3">Don't have an account? <span className=" text-[#3D90D7] font-semibold">Register</span></NavLink>
                                        </>
                                        :
                                        <>
                                            <form className="fieldset">
                                                <label className="label"></label>
                                                <input type="email" className="input" placeholder="Email" />
                                                <label className="label">Password</label>
                                                <input type="password" className="input" placeholder="Password" />
                                                <div><a className="link link-hover">Forgot password?</a></div>
                                                <button className="btn btn-neutral mt-4">Register</button>
                                            </form>
                                            <NavLink onClick={() => setActive(true)} className="text-center p-3">Already have an account? <span className=" text-[#3D90D7] font-semibold">Login</span></NavLink>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default LoginModal;