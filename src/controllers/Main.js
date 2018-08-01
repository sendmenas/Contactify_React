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
		const city = this.state.selectedCity;
		const name = this.state.nameFilterValue;
		const active = this.state.activityFilter;
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
		const arr = this.props.items;
		arr.push(data);
	}

	render() {
		const items = this.props.items;
		const selectedContract = this.state.selectedContract;
		const active = this.state.activityFilter;
		const filterValues = this.state.filterValues;
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
						onClick={(contract) => this.setSelectedContract(contract)}
						remove={(id) => this.props.removeItem(id)}
						edit={(item) => this.props.showContractDataDialogWithData(item)}
					/>
				</div>
			</main>
		);
	}
}

export default Main;
