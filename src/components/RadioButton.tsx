import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import TextError from "./TextError";

const RadioButton = (props: any) => {
	const { label, name, options, ...rest } = props;
	const [field, meta] = useField(props.name);
	return (
		<div className="">
			<label htmlFor={name} className={`text-2xl text-cyan-800 pb-1 block`}>
				{label}{" "}
				<sup
					className={` ${meta.error ? "text-red-600" : meta.touched ? 'text-green-400' : "text-gray-300"}`}
				>
					*
				</sup>
			</label>
			<div className="lg:flex ml-5 gap-8">
				<Field name={field.name} {...rest}>
					{({ field }: any) => {
						return options.map((option: any) => {
							return (
								<div key={option.value} className="flex gap-3 items-center">
									<input
										type="radio"
										id={option.value}
										{...field}
										value={option.value}
										checked={field.value === option.value}
										className="h-6 w-6 rounded-full "
									/>
									<label htmlFor={option.value} className="text-xl">
										{option.value}
									</label>
								</div>
							);
						});
					}}
				</Field>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default RadioButton;
