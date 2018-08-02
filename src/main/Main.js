import React, { Component } from 'react';
import ItemTable from './ItemTable';
import './Main.css';
import FilterInput from './filter/FilterInput';
import FilterDropdown from './filter/FilterDropdown';
import FilterCheckbox from './filter/FilterCheckbox';
import FilterButton from './filter/FilterButton';
import AddContractButton from './AddContractButton';
import UserBlock from './UserBlock';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCity: "",
			nameFilterValue: "",
			activityFilter: false,
			filterValues: {
				selectedCity: "",
				nameFilterValue: "",
				activityFilter: false,
			},
			selectedContract: {
				avatar: "",
				name: "",
				surname: "",
				city: "",
				email: "",
				phone: "",
			},
		}
	}

	handleFilterTextChange(value) {
		this.setState({
			nameFilterValue: value,
		});
	}

	handleFilterCitySelection(value) {
		this.setState({
			selectedCity: value,
		});
	}

	handleActivitySelection(value) {
		this.setState({
			activityFilter: value,
		});
	}

	setSelectedContract(contract) {
		this.setState({
			selectedContract: contract,
		})
	}

	filterItems() {
		let city = this.state.selectedCity;
		let name = this.state.nameFilterValue;
		let active = this.state.activityFilter;
		this.setState({
			filterValues: {
				selectedCity: city,
				nameFilterValue: name,
				activityFilter: active,
			}
		});
	}

	resetFilter() {
		this.setState({
			selectedCity: "",
			nameFilterValue: "",
			activityFilter: false,
			filterValues: {
				selectedCity: "",
				nameFilterValue: "",
				activityFilter: false,
			}
		});
	}

	addContract(data) {
		let arr = this.props.items;
		arr.push(data);
	}

	render() {
		let items = this.props.items;
		let selectedContract = this.state.selectedContract;
		let active = this.state.activityFilter;
		let filterValues = this.state.filterValues;
		let nameSortDirection = this.props.nameSortDirection;
		let surnameSortDirection = this.props.surnameSortDirection;

		return (
			<main className="main">
				<div className="main__filter">
					<FilterInput
						value={this.state.nameFilterValue}
						onFilterTextChange={(value) => this.handleFilterTextChange(value)}
					/>
					<FilterDropdown
						dataItems={items}
						onFilterItemSelected={(value) => this.handleFilterCitySelection(value)}
						selectedCity={this.state.selectedCity}
					/>
					<FilterCheckbox
						activitySelection={(value) => this.handleActivitySelection(value)}
						active={active}
					/>
					<FilterButton
						manageFilter={() => this.filterItems()}
						value={"FILTER"}
					/>
					<FilterButton 
						manageFilter={() => this.resetFilter()}
						value={"RESET"}
					/>
					<AddContractButton 
						onClick={(data) => this.props.showContractDataDialog(data)}
					/>
				</div>
				<div className="main__container">
					<UserBlock selectedItem={selectedContract} />
					<ItemTable
						filter={filterValues}
						dataItems={items}
						nameSortDirection={nameSortDirection}
						surnameSortDirection={surnameSortDirection}
						onClick={(contract) => this.setSelectedContract(contract)}
						remove={(id) => this.props.removeItem(id)}
						edit={(item) => this.props.showContractDataDialogWithData(item)}
						sortByName={() => this.props.sortByName()}
						sortBySurname={() => this.props.sortBySurname()}
					/>
				</div>
			</main>
		);
	}
}

export default Main;
