import { Card, Input, Typography } from "@material-tailwind/react";
import { BsGoogle } from "react-icons/bs";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const image_key = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const SignUp = () => {
    const { createUser, userUpdate, loginWithGoogle } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const handleSignInWithGoogle = async () => {
        try {
            const user = await loginWithGoogle();

            const userInfo = {
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                role: "user",
                createdAt: new Date(),
            };

            const backendResponse = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });

            if (backendResponse.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Google login successful!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                });

                navigate("/");
            } else {
                const backendResult = await backendResponse.json();
                throw new Error(backendResult.message || "Failed to save user in the database.");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("image", data.image[0]);

            const imageResponse = await fetch(image_api, {
                method: "POST",
                body: formData,
            });

            const imageResult = await imageResponse.json();

            if (imageResult.success) {
                await createUser(data.email, data.password);
                await userUpdate(data.name, imageResult.data.display_url);

                const userInfo = {
                    name: data.displayName,
                    email: data.email,
                    image: imageResult.data.display_url,
                    role: "user",
                    createdAt: new Date(),
                };

                const backendResponse = await fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                });

                if (backendResponse.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your account has been created successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000,
                    });

                    navigate("/");
                } else {
                    const backendResult = await backendResponse.json();
                    throw new Error(backendResult.message || "Failed to save user in the database.");
                }
            } else {
                throw new Error("Image upload failed.");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <Card
                color="transparent"
                shadow={false}
                className="mx-auto md:w-1/2 lg:w-1/3 bg-gray-800 p-8 rounded-lg"
            >
                <Typography variant="h4" color="white" className="text-center font-extrabold">
                    Easysubstech | Sign Up
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div>
                        <Typography variant="h6" color="white">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            name="name"
                            type="text"
                            {...register("name", { required: true, maxLength: 80 })}
                            placeholder="John Wick"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.name && <p className="text-red-400 mt-2">Write your valid name</p>}
                    </div>
                    <div>
                        <Typography variant="h6" color="white">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            name="email"
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="name@mail.com"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.email && <p className="text-red-400 mt-2">Enter your valid email</p>}
                    </div>
                    <div>
                        <Typography variant="h6" color="white">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            name="password"
                            size="lg"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                            })}
                            placeholder="********"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.password && (
                            <p className="text-red-400 mt-2">
                                Password must include uppercase, lowercase, and numbers
                            </p>
                        )}
                    </div>
                    <div>
                        <Typography variant="h6" color="white">
                            Profile Picture
                        </Typography>
                        <Input
                            type="file"
                            {...register("image", { required: true })}
                            name="image"
                            className="bg-gray-700 border-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.image && <p className="text-red-400 mt-2">Upload your profile picture</p>}
                    </div>
                    <div className="mt-6 text-center">
                        <AwesomeButton
                            type="primary"
                            size="medium"
                            className="mt-6 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 text-white hover:scale-105 transition-transform"
                        >
                            SignUp
                        </AwesomeButton>
                    </div>
                </form>
                <div className="flex justify-center items-center">
                    <BsGoogle
                        onClick={handleSignInWithGoogle}
                        className="text-3xl text-[#008FD4] cursor-pointer hover:text-[#0870A1]"
                    />
                </div>
                <Typography color="white" className="my-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-blue-400 hover:underline">
                        Login
                    </Link>
                </Typography>
            </Card>
        </div>
    );
};

export default SignUp;
