import { Card, Input, Typography } from "@material-tailwind/react";
import Select from "react-select";
import { AwesomeButton } from "react-awesome-button";

import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const image_key = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const SignUp = () => {
    const { createUser, userUpdate } = useAuth();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Upload the image to imgbb
            const formData = new FormData();
            formData.append("image", data.image[0]);

            const imageResponse = await fetch(image_api, {
                method: "POST",
                body: formData,
            });

            const imageResult = await imageResponse.json();

            if (imageResult.success) {
                // Create a new user in Firebase
                await createUser(data.email, data.password);
                await userUpdate(data.name, imageResult.data.display_url);

                // Show success notification
                Swal.fire({
                    title: "Success!",
                    text: "Your account has been created successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                });

                // Redirect to the homepage or login page
                navigate("/");
            } else {
                throw new Error("Image upload failed.");
            }
        } catch (error) {
            // Handle errors
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
        <>
            
            <Card
                color="transparent"
                shadow={false}
                className="mx-auto md:w-1/2 lg:w-1/4 py-20"
            >
                <Typography variant="h4" color="blue-gray">
                    MediCamp | Sign Up
                </Typography>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                >
                    <div className="mb-1 flex flex-col gap-6">
                        {/* Name Input */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <div>
                            <Input
                                size="lg"
                                name="name"
                                type="text"
                                {...register("name", { required: true, maxLength: 80 })}
                                placeholder="John Wick"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.name && (
                                <p className="text-red-600">Write your valid name</p>
                            )}
                        </div>

                        {/* Email Input */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <div>
                            <Input
                                size="lg"
                                name="email"
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="name@mail.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.email && (
                                <p className="text-red-600">Enter your valid email</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <div>
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
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Enter your valid password</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Enter minimum 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must include uppercase, lowercase, and numbers
                                </p>
                            )}
                        </div>

                        {/* Profile Picture Upload */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Profile Picture
                        </Typography>
                        <div>
                            <Input
                                type="file"
                                {...register("image", { required: true })}
                                name="image"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            />
                            {errors.image && (
                                <p className="text-red-600">Upload your profile picture</p>
                            )}
                        </div>

                        {/* Role Selection */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Role
                        </Typography>
                        <div>
                            <Controller
                                name="role"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Select
                                        className="z-10 border-t-blue-gray-200"
                                        {...field}
                                        options={[
                                            {
                                                value: "participant",
                                                label: "Participant",
                                            },
                                            {
                                                value: "healthcare-professional",
                                                label: "Healthcare Professional",
                                            },
                                            { value: "organizer", label: "Organizer" },
                                        ]}
                                    />
                                )}
                            />
                            {errors.role && (
                                <p className="text-red-600">You must select your role</p>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <AwesomeButton type="primary" size="small">
                            Sign Up
                        </AwesomeButton>
                    </div>
                </form>
                <Typography color="gray" className="my-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-gray-900 hover:text-blue-700"
                    >
                        Login
                    </Link>
                </Typography>
            </Card>
        </>
    );
};

export default SignUp;
