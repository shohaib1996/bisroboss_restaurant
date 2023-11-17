import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const inputRef = useRef(null)
    const axiosPublic = useAxiosPublic()
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleValidateCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = inputRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)

        } else {
            setDisabled(true)
        }
    }
    const handleSocial = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post("/users",userInfo)
                .then(res => {
                    console.log(res.data);
                })
                toast.success("Login Successfully")
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src="../../../public/assets/others/authentication1.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={inputRef} name="captcha" placeholder="enter captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                        </div>
                        <p>Don&apos;t Have an Account? <Link to="/register">
                            <button className="link link-secondary">Register</button>
                        </Link></p>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary bg-[#D1A054B3]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='w-full mx-auto p-10'>
                        <button onClick={() => handleSocial(googleSignIn)} className='btn btn-secondary'><FaGoogle></FaGoogle>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;