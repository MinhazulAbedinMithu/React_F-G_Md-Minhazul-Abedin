import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = (props: any) => {
	const { label, name, ...rest } = props;
	const [field, meta] = useField(props.name);
	return (
		<div>
			<label htmlFor={field.name} className="text-2xl text-cyan-800 pb-1 block">
				{label}
			</label>
			<Field
				id={field.name}
				name={name}
				{...rest}
				className={`w-full py-1 text-xl px-5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-violet-300 ${
					meta.touched && meta.error && "border-red-400"
				} ${meta.touched && !meta.error && "border-green-500"}`}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Input;
