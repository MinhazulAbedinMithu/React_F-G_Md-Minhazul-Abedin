// import { useEffect } from "react";

import { useMemo } from "react";
import { useTable } from "react-table";

const FeedbackTab = () => {
	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Email",
				accessor: "email",
			},
			{
				Header: "Phone",
				accessor: "phone",
			},
			{
				Header: "Service from Host",
				accessor: "service_from_host",
			},
			{
				Header: "Quality of Beverage",
				accessor: "quality_of_beverage",
			},
			{
				Header: "Was Restaurant clean",
				accessor: "was_restaurant_clean",
			},
			{
				Header: "Overall dining experience",
				accessor: "overall_dining_experience",
			},
		],
		[]
	);

	const getValues = () => {
		const data: any = localStorage.getItem("formData") || "";

		return data !== "" ? JSON.parse(data) : [];
	};

	const data = getValues();

	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<div className="mt-2 flex flex-col w-full px-2">
			<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
						<table
							{...getTableProps()}
							className="min-w-full divide-y divide-gray-200"
						>
							<thead>
								{
									// Loop over the header rows
									headerGroups.map((headerGroup: any) => (
										// Apply the header row props
										<tr {...headerGroup.getHeaderGroupProps()}>
											{
												// Loop over the headers in each row
												headerGroup.headers.map((column: any) => (
													// Apply the header cell props
													<th
														{...column.getHeaderProps()}
														className="px-3 py-2 border-2 border-cyan-800 bg-cyan-200 font-bold text-xl"
													>
														{
															// Render the header
															column.render("Header")
														}
													</th>
												))
											}
										</tr>
									))
								}
							</thead>
							{/* Apply the table body props */}
							<tbody {...getTableBodyProps()}>
								{
									// Loop over the table rows
									rows.map((row: any) => {
										// Prepare the row for display
										prepareRow(row);
										return (
											// Apply the row props
											<tr {...row.getRowProps()}>
												{
													// Loop over the rows cells
													row.cells.map((cell: any) => {
														// Apply the cell props
														return (
															<td
																{...cell.getCellProps()}
																{...cell.getCellProps()}
																className="border border-cyan-400 p-2 text-center"
															>
																{
																	// Render the cell contents
																	cell.render("Cell")
																}
															</td>
														);
													})
												}
											</tr>
										);
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackTab;
