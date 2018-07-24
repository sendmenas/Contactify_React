import React, { Component } from 'react';
import '../css/Main.css';

function Item(props) {
    return (
		<tr className="data-item">
			<th className="data-item__name">
				<div className="user-online"></div>
				<div>{props.name}</div>
			</th>
			<th className="data-item__surname">{props.surname}</th>
			<th className="data-item__city">{props.city}</th>
			<th className="data-item__email">{props.email}</th>
			<th className="data-item__phone">{props.phone}</th>
			<th className="data-item__actions">
				<div className="edit-item"></div>
				<div className="delete-item"></div>
			</th>
		</tr>
    );
}

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const dataItems = this.props.items.map((item) => {
			return (<Item 
				key={item.id}
				name={item.name}
				surname={item.surname}
				city={item.city}
				email={item.email}
				phone={item.phone}
			/>)
		});

		return (
			<main className="main">
				<div className="main__filter">
					<div className="filter-name">
						<input className="filter-input" placeholder="Name" type="text" id="nameFilter"></input>
					</div>
					<div className="filter-city" id="cityFilter">
						<div id="cityFilterSelection">City</div>
						<div className="filter-city__arrow"></div>
						<div className="filter-city__select" id="citySelect">
							<div>City</div>
							<div className="cities-container" id="citySelectContainer"></div>
						</div>
					</div>
					<div className="checkbox">
						<div className="checkbox__input" id="activeCheckboxContainer">
							<input type="checkbox" id="activeCheckbox"></input>
						</div>
						<div className="checkbox__label">Show active</div>
					</div>
					<div className="filter-button" id="filterButton">FILTER</div>
					<div className="filter-button" id="resetFilterButton">RESET</div>
					<div className="add-contact-button" id="addNewContact">
						<div className="add-contact-button__plus"></div>
						ADD NEW CONTRACT
					</div>
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
					<table className="data-table">
						<thead className="data-table__header">
							<tr>
								<th className="data-table__header__name">
									<div>Name</div>
									<div className="sort-arrow-inactive" id="sortName"></div>
								</th>
								<th className="data-table__header__surname">
									<div>Surname</div>
									<div className="sort-arrow-inactive" id="sortSurname"></div>
								</th>
								<th className="data-table__header__city">City</th>
								<th className="data-table__header__email">Email</th>
								<th className="data-table__header__phone">Phone</th>
								<th className="data-table__header__actions"></th>
							</tr>
						</thead>
						<tbody className="data-table__data" id="dataTable">{dataItems}</tbody>
					</table>
				</div>
			</main>
		);
	}
}

export default Main;
