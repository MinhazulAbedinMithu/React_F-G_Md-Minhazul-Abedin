import { ErrorMessage, Field } from "formik";
import { IFieldItem } from "../utils/types";

const FieldItem = ({
	name,
	type,
	label,
	isDisabled,
	isRequired,
}: IFieldItem) => {
	return (
		<div className="flex">
			<label htmlFor={name} className="text-xl">
				{label} {isRequired && <sup className=" text-red-500">*</sup>}
			</label>
			<Field
				type={type}
				name={name}
				disabled={isDisabled}
				className={`border border-neutral-500 rounded px-2 py-1 w-full ${
					isDisabled && "text-gray-500"
				}`}
			/>
			<div className="text-red-400">
				<ErrorMessage name={name} />
			</div>
		</div>
	);
};

export default FieldItem;
