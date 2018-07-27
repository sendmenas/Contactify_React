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

	setSelectedContract(contract) {
		this.setState({
			selectedContract: contract,
		})
	}

	setSelectedCity(city) {
		this.setState({
			selectedCity: city,
		})
	}

	render() {
		const items = this.props.items;
		const selectedContract = this.state.selectedContract;
		const selectedCity = this.state.selectedCity;
		const active = this.state.activityFilter;
		
		return (
			<main className="main">
				<div className="main__filter">
					<FilterInput
						onFilterTextChange={(value) => this.handleFilterTextChange(value)}
					/>
					<FilterDropdown 
						handleFilterCitySelection={(value => this.setSelectedCity(value))}
						dataItems={items}
						selectedCity={selectedCity}
					/>
					<FilterCheckbox 
						active={active}
					/>
					<FilterButton value={"FILTER"} />
					<FilterButton value={"RESET"} />
					<AddContractButton />
				</div>
				<div className="main__container">
					<UserBlock selectedItem={selectedContract} />
					<ItemTable 
						dataItems={items}
						onClick={(contract) => this.setSelectedContract(contract)}
					/>
				</div>
			</main>
		);
	}
}

export default Main;
