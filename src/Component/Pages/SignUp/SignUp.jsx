import { Card, Input, Typography } from "@material-tailwind/react";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_key = import.meta.env.VITE_IMAGE_KEY; // Ensure this is correctly set in your .env
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, userUpdate } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Check if an image is uploaded
            if (!data.image[0]) {
                throw new Error("Please upload a profile picture.");
            }

            // Upload image
            const formData = new FormData();
            formData.append("image", data.image[0]);

            const imageResponse = await fetch(image_api, {
                method: "POST",
                body: formData,
            });

            const imageResult = await imageResponse.json();

            if (!imageResult.success) {
                throw new Error("Image upload failed.");
            }

            // Create user and update profile
            await createUser(data.email, data.password);
            await userUpdate(data.name, imageResult.data.display_url);

            // Save user info to the database
            const userInfo = {
                name: data.name,
                email: data.email,
                image: imageResult.data.display_url,
                role: "user", // Default role
            };

            const res = await axiosPublic.post("/users", userInfo);

            if (res.status !== 201) {
                throw new Error("Failed to save user information to the database.");
            }

            Swal.fire({
                title: "Success!",
                text: "Your account has been created successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/"); // Redirect to homepage or desired route

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message || "Something went wrong!",
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <Card
                color="transparent"
                shadow={false}
                className="mx-auto md:w-1/2 lg:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg"
            >
                <Typography
                    variant="h4"
                    color="white"
                    className="text-center font-extrabold"
                >
                    Easysubstech | Sign Up
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    {/* Name Input */}
                    <div>
                        <Typography variant="h6" color="white">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            type="text"
                            {...register("name", { required: true, maxLength: 80 })}
                            placeholder="John Wick"
                            className="bg-gray-700 border-none text-white focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-400 mt-2">Please enter a valid name.</p>
                        )}
                    </div>

                    {/* Email Input */}
                    <div>
                        <Typography variant="h6" color="white">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="name@mail.com"
                            className="bg-gray-700 border-none text-white focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-400 mt-2">Please enter a valid email.</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div>
                        <Typography variant="h6" color="white">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                            })}
                            placeholder="********"
                            className="bg-gray-700 border-none text-white focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="text-red-400 mt-2">
                                Password must include uppercase, lowercase, and numbers.
                            </p>
                        )}
                    </div>

                    {/* Profile Picture Upload */}
                    <div>
                        <Typography variant="h6" color="white">
                            Profile Picture
                        </Typography>
                        <Input
                            type="file"
                            {...register("image", { required: true })}
                            className="bg-gray-700 border-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.image && (
                            <p className="text-red-400 mt-2">
                                Please upload a profile picture.
                            </p>
                        )}
                    </div>

                    {/* Sign Up Button */}
                    <div className="mt-6 text-center">
                        <AwesomeButton
                            type="primary"
                            size="medium"
                            className="mt-6 bg-gradient-to-r from-blue-500 w-full via-teal-500 to-cyan-500 text-white hover:scale-105 transition-transform"
                        >
                            Sign Up
                        </AwesomeButton>
                    </div>
                </form>
                <Typography color="white" className="my-4 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-400 hover:underline"
                    >
                        Login
                    </Link>
                </Typography>
            </Card>
        </div>
    );
};

export default SignUp;
