import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { IFormValues } from "../utils/types";
import FormikControl from "./FormikControl";

const radioOptions: any = [
	{ value: "Excellent" },
	{ value: "Good" },
	{ value: "Fair" },
	{ value: "Bad" },
];

const getDatafromLS = () => {
	const data = localStorage.getItem("formData");
	if (data) {
		return JSON.parse(data);
	} else {
		return [];
	}
};

const FormTab = () => {
	const [formValues, setFormValues] = useState<object[]>(getDatafromLS());
	const [subFeed, setSubFeed] = useState<boolean>(false);

	const initialValues: IFormValues = {
		name: "",
		email: "",
		phone: "",
		service_from_host: "",
		quality_of_beverage: "",
		was_restaurant_clean: "",
		overall_dining_experience: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is Required!"),
		email: Yup.string().email("Invalid Email").required("required"),
		phone: Yup.string().required("required!"),
		service_from_host: Yup.string().required("required!"),
		quality_of_beverage: Yup.string().required("required!"),
		was_restaurant_clean: Yup.string().required("required!"),
		overall_dining_experience: Yup.string().required("required!"),
	});

	const onSubmit = (values: IFormValues, { resetForm }: any): void => {
		setFormValues([...formValues, values]);
		resetForm({ values: "" });
		setSubFeed(true);
	};

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(formValues));
	}, [formValues]);

	return (
		<div className="w-full py-10 px-5 relative">
			<h2 className="text-3xl font-bold text-cyan-600">Aromatic Bar</h2>
			<p className="text-xl mb-5 text-cyan-900 pt-2">
				We are committed to providing you with the best dining experience
				possible, so we welcome your comments. Please fill out this
				questionnaire. Thank you
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form className="lg:bg-white lg:px-5 rounded-lg lg:py-5">
						<div className="md:flex items-start justify-between gap-10">
							<div className="md:w-1/2 sm:w-full flex flex-col gap-6 pb-5">
								<FormikControl
									control="input"
									type="text"
									label="Name"
									name="name"
								/>
								<FormikControl
									control="input"
									type="email"
									label="Email"
									name="email"
								/>
								<FormikControl
									control="input"
									type="text"
									label="Phone"
									name="phone"
								/>
							</div>
							<div className="md:w-1/2 sm:w-full flex flex-col gap-6">
								<FormikControl
									control="radio"
									label="Please rate the quality of the service you received from your host."
									name="service_from_host"
									options={radioOptions}
								/>
								<FormikControl
									control="radio"
									label="Please rate the quality of your beverage."
									name="quality_of_beverage"
									options={radioOptions}
								/>
								<FormikControl
									control="radio"
									label="Was our restaurant clean?"
									name="was_restaurant_clean"
									options={radioOptions}
								/>
								<FormikControl
									control="radio"
									label="Please rate your overall dining experience."
									name="overall_dining_experience"
									options={radioOptions}
								/>
							</div>
						</div>

						<div className="text-center mt-10">
							<button
								type="submit"
								className="bg-gradient-to-bl from-teal-800 via-fuchsia-800 to-indigo-900 py-2 px-5 tracking-wider font-bold text-white rounded-lg text-xl"
							>
								Submit
							</button>
						</div>
					</Form>
				)}
			</Formik>
			{subFeed && (
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] rounded-lg flex flex-col gap-10 py-20 items-center justify-center bg-gradient-to-tl from-pink-800/80 via-emerald-800 to-rose-800/80 px-5">
					<h2 className="text-4xl font-bold text-yellow-300 text-center">
						Thank you for completing the information
					</h2>
					<button
						className="text-xl bg-rose-700 text-teal-400 rounded-lg px-6 font-bold text py-2"
						onClick={() => setSubFeed(false)}
					>
						Dismiss
					</button>
				</div>
			)}
		</div>
	);
};

export default FormTab;
