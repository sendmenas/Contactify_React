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
			nameFilterValue: "",
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
		console.log(contract);
		this.setState({
			selectedContract: contract,
		})
	}

	render() {
		const items = this.props.items;
		const selectedContract = this.state.selectedContract;
		
		return (
			<main className="main">
				<div className="main__filter">
					<FilterInput
						onFilterTextChange={(value) => this.handleFilterTextChange(value)}
					/>
					<FilterDropdown 
						dataItems={items}
					/>
					<FilterCheckbox />
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
