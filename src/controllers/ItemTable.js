import React, { Component } from 'react';
import '../css/ItemTable.css';

function Item(props) {
    const onlineStatus = props.data.active === true ? "user-online" : "user-offline";
    return (
        <tr className="data-item" onClick={() => props.onClick(props.data)}>
			<th className="data-item__name">
				<div className={onlineStatus}></div>
				<div>{props.data.name}</div>
			</th>
            <th className="data-item__surname">{props.data.surname}</th>
            <th className="data-item__city">{props.data.city}</th>
            <th className="data-item__email">{props.data.email}</th>
            <th className="data-item__phone">{props.data.phone}</th>
			<th className="data-item__actions">
				<div className="edit-item"></div>
				<div className="delete-item"></div>
			</th>
		</tr>
    );
}

class ItemTable extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

	render() {
        const filter = this.props.filter;
        console.log(filter);
        const items = this.props.dataItems.map((item) => {
            let filterIndicators = [];
            if (filter.nameFilterValue !== "") {
                let name = (item.name).toLowerCase();
                let nameFilterValue = filter.nameFilterValue.trim().toLowerCase();
                if (name.indexOf(nameFilterValue) !== -1) {
                    filterIndicators.push(true);
                } else {
                    filterIndicators.push(false);
                }
            }
            if (filter.selectedCity !== "") {
                if (item.city === filter.selectedCity) {
                    filterIndicators.push(true);
                } else {
                    filterIndicators.push(false);
                }
            }
            if (filter.activityFilter) {
                if (item.active) {
                    filterIndicators.push(true);
                } else {
                    filterIndicators.push(false);
                }
            }
            if (filterIndicators.indexOf(false) === -1) {
                return (<Item
                    key={item.id}
                    data={item}
                    onClick={(item) => this.props.onClick(item)}
                />)
            }
		});

        return (
            <table className="data-table">
                <thead className="data-table__header">
                    <tr>
                        <th className="data-table__header__name">
                            <div>Name</div>
                            <div className="sort-arrow-inactive"></div>
                        </th>
                        <th className="data-table__header__surname">
                            <div>Surname</div>
                            <div className="sort-arrow-inactive"></div>
                        </th>
                        <th className="data-table__header__city">City</th>
                        <th className="data-table__header__email">Email</th>
                        <th className="data-table__header__phone">Phone</th>
                        <th className="data-table__header__actions"></th>
                    </tr>
                </thead>
                <tbody className="data-table__data">{items}</tbody>
            </table>
        );
    }
}

export default ItemTable;