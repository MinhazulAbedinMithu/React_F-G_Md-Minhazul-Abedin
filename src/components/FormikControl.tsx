import React from "react";
import Input from "./Input";
import RadioButton from "./RadioButton";

const FormikControl = (props: any) => {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		case "radio":
			return <RadioButton {...rest} />;

		default:
			return null;
	}
};

export default FormikControl;
