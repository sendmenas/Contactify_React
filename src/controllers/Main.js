import React, { Component } from 'react';
import ItemTable from './ItemTable';
import '../css/Main.css';
import FilterInput from './FilterInput';
import FilterDropdown from './FilterDropdown';
import FilterCheckbox from './FilterCheckbox';
import FilterButton from './FilterButton';
import AddContractButton from './AddContractButton';

// function Item(props) {
//     return (
// 		<tr className="data-item">
// 			<th className="data-item__name">
// 				<div className="user-online"></div>
// 				<div>{props.name}</div>
// 			</th>
// 			<th className="data-item__surname">{props.surname}</th>
// 			<th className="data-item__city">{props.city}</th>
// 			<th className="data-item__email">{props.email}</th>
// 			<th className="data-item__phone">{props.phone}</th>
// 			<th className="data-item__actions">
// 				<div className="edit-item"></div>
// 				<div className="delete-item"></div>
// 			</th>
// 		</tr>
//     );
// }

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		// const dataItems = this.props.items.map((item) => {
		// 	return (<Item 
		// 		key={item.id}
		// 		name={item.name}
		// 		surname={item.surname}
		// 		city={item.city}
		// 		email={item.email}
		// 		phone={item.phone}
		// 	/>)
		// });

		return (
			<main className="main">
				<div className="main__filter">
					<FilterInput />
					<FilterDropdown />
					<FilterCheckbox />
					<FilterButton value={"FILTER"} />
					<FilterButton value={"RESET"} />
					<AddContractButton />
				</div>
				<div className="main__container">
					<aside className="user-block">
						<div className="user-block__avatar" id="userAvatar"></div>
						<table className="user-block__data">
							<tbody>
								<tr className="data-row">
									<th className="data-row__label">Name:</th>
									<th className="data-row__data" id="userName"></th>
								</tr>
								<tr className="data-row">
									<th className="data-row__label">Surname:</th>
									<th className="data-row__data" id="userSurname"></th>
								</tr>
								<tr className="data-row">
									<th className="data-row__label">City:</th>
									<th className="data-row__data" id="userCity"></th>
								</tr>
								<tr className="data-row">
									<th className="data-row__label">Email:</th>
									<th className="data-row__data data-row__data--email" id="userEmail"></th>
								</tr>
								<tr className="data-row">
									<th className="data-row__label">Phone:</th>
									<th className="data-row__data" id="userPhone"></th>
								</tr>
							</tbody>
						</table>
					</aside>
					<ItemTable />
				</div>
			</main>
		);
	}
}

export default Main;
