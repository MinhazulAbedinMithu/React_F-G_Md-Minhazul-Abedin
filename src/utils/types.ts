import { ReactNode } from "react";

interface ITabItem {
	id: number;
	title: string;
	renderElement: ReactNode;
}

interface IFormValues {
	name: string;
	email: string;
	phone: string;
	service_from_host: string;
	quality_of_beverage: string;
	was_restaurant_clean: string;
	overall_dining_experience: string;
}

interface IFieldItem {
	name: string;
	type: string;
	label: string;
	isDisabled?: boolean;
	isRequired?: boolean;
}

export type { IFieldItem, ITabItem, IFormValues };
