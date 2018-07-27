import React, { Component } from 'react';
import ItemTable from './ItemTable';
import '../css/Main.css';
import FilterInput from './FilterInput';
import FilterDropdown from './FilterDropdown';
import FilterCheckbox from './FilterCheckbox';
import FilterButton from './FilterButton';
import AddContractButton from './AddContractButton';
import UserBlock from './UserBlock';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCity: "",
			nameFilterValue: "",
			activityFilter: false,
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
		console.log(value);
		this.setState({
			nameFilterValue: value,
		});
	}

	handleFilterCitySelection(value) {
		console.log(value);
		this.setState({
			selectedCity: value,
		});
	}

	handleActivitySelection(value) {
		console.log(value);
		this.setState({
			activityFilter: value,
		});
	}

	setSelectedContract(contract) {
		console.log(contract);
		this.setState({
			selectedContract: contract,
		})
	}

	filterItems() {
		console.log("FILTER ITEMS");
	}

	resetFilter() {
		this.setState({
			selectedCity: "",
			nameFilterValue: "",
			activityFilter: false,
		});
		console.log(this.state);
	}

	render() {
		const items = this.props.items;
		const selectedContract = this.state.selectedContract;
		const active = this.state.activityFilter;
		const filterValues = this.state;
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
					<AddContractButton />
				</div>
				<div className="main__container">
					<UserBlock selectedItem={selectedContract} />
					<ItemTable
						filter={filterValues}
						dataItems={items}
						onClick={(contract) => this.setSelectedContract(contract)}
					/>
				</div>
			</main>
		);
	}
}

export default Main;
