import React from "react";

const TestItem = ({ item }) => {
	return (
		<div>
			<h1>item.name</h1>
			{item.answers.map((i) => {
				return (
					<div key={i.id}>
						<span>{i.name}</span>
					</div>
				);
			})}
		</div>
	);
};

export default TestItem;
