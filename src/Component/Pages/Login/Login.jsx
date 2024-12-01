import { Card, Input, Typography } from "@material-tailwind/react";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
	const { userLogin } = useAuth();
	const { register, handleSubmit, reset } = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		userLogin(data.email, data.password).then((result) => {
			if (result) {
				Swal.fire({
					title: "Successfully!",
					text: "Your Account has been Login Successfully!",
					icon: "success",
					showConfirmButton: false,
					timer: 1000,
				});
				reset();
				navigate(from, { replace: true });
			}
		});
	};

	return (
		<>
			{/* Background Section */}
			<div className="min-h-screen bg-gradient-to-r  flex justify-center items-center">
				<Card
					color="white"
					shadow={true}
					className="w-full sm:w-96 md:w-1/2 lg:w-1/3 py-10 px-6 rounded-lg shadow-lg"
				>
					<Typography variant="h4" color="blue-gray" className="text-center text-white mb-6">
						MediCamp | Login
					</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 mb-2 w-full flex flex-col gap-6"
					>
						{/* Email Input */}
						<div className="flex flex-col gap-2">
							<Typography variant="h6" color="blue-gray" className="text-white">
								Your Email
							</Typography>
							<Input
								size="lg"
								type="email"
								{...register("email", { required: true })}
								placeholder="name@mail.com"
								className="!border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
						</div>

						{/* Password Input */}
						<div className="flex flex-col gap-2">
							<Typography variant="h6" color="blue-gray" className="text-white">
								Password
							</Typography>
							<Input
								type="password"
								size="lg"
								{...register("password", { required: true })}
								placeholder="********"
								className="!border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
						</div>

						{/* Login Button */}
						<AwesomeButton type="primary" size="small" className="mt-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
							Login
						</AwesomeButton>
					</form>

					{/* Sign Up Link */}
					<Typography color="gray" className="my-4 text-center font-normal text-white">
						Don&lsquo;t have an account?{" "}
						<Link
							to="/register"
							className="font-medium text-blue-300 hover:text-blue-500"
						>
							Sign Up
						</Link>
					</Typography>
				</Card>
			</div>
		</>
	);
};

export default Login;
