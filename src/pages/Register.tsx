import { useEffect, useState } from "react"
import { USER } from "../types/User"
// const { useEffect } = from("react");
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions";

const Register = () => {

    const [userData, setUserData] = useState<USER>({
        email: "",
        name: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const dispatch = useAppDispatch()
    const { registered } = useAppSelector(state => state.auth)
    const naviagate = useNavigate()

    useEffect(() => {
        if (registered) {
            naviagate("/login")
        }
    }, [registered])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label htmlFor="name" className="form-label">First name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="form-label">First Email</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    onChange={handleChange}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="cpassword" className="form-label"
                                >Confirm Password</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control"
                                    id="cpassword"
                                    name="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div>
                            <button type="button" onClick={(e) => dispatch(register(userData))} className="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register