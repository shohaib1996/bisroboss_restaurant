import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: "success",
                    title: "Good...",
                    text: "User Register Successfully!",
                    
                  });
                updateUserProfile(data.name, data.photo)
                .then(()=> {
                    const userInfo = {
                        name: data.name,
                        email: data.email
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId){
                            console.log("user added to the data base");
                        }
                    })
                    console.log("user updated")
                    Swal.fire("User Updated Successfully!!!")
                    navigate("/")
                    
                }).catch((error) => {
                    console.log(error);
                  });
            })
            .catch(error => {
                console.log(error);
            })
        reset()
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src="../../../public/assets/others/authentication1.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" {...register("photo")} placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*%])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}


                            </div>

                            <p>Already Have an Account? <Link to="/login">
                                <button className="link link-secondary">Login</button>
                            </Link></p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-[#D1A054B3]" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;