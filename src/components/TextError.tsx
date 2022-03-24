import React from "react";

const TextError = (props: any) => {
	return <div className="text-xl pt-2 pl-2 text-red-500">{props.children}</div>;
};

export default TextError;
