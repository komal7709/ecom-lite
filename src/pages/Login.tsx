
const Login = () => {


    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <div>
                                <label htmlFor="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    </>
}

export default Login