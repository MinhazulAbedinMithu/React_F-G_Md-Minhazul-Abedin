import { useState } from "react";
import { FeedbackTab, FormTab, Header } from "./components";
import { ITabItem } from "./utils/types";

const tabItems: ITabItem[] = [
	{
		id: 1,
		title: "Form",
		renderElement: <FormTab />,
	},
	{
		id: 2,
		title: "Feedback",
		renderElement: <FeedbackTab />,
	},
];

function App() {
	const [activeTab, setActiveTab] = useState<number>(1);

	return (
		<div className="w-full">
			<Header />
			<div className="w-full">
				<div className="container mx-auto bg-slate-100 border-2 rounded-md my-5">
					<div className="flex items-center bg-white border-b-2 border-gray-300">
						{tabItems.map((item) => (
							<div
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`border-b-4 px-8 py-2 cursor-pointer hover:bg-lime-100 text-2xl font-bold ${
									activeTab === item.id
										? "border-cyan-800 text-cyan-500"
										: "border-none text-gray-500"
								} `}
							>
								{item.title}
							</div>
						))}
					</div>
					<div className="">
						{tabItems.map((item) => (
							<div
								key={item.id}
								className={`w-full flex flex-grow ${
									activeTab === item.id ? "block" : "hidden"
								}`}
							>
								{item.renderElement}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
