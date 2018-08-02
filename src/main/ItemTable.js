import React, { Component } from 'react';
import './ItemTable.css';


function Item(props) {
        const onlineStatus = props.data.active === true ? "user-online" : "user-offline";
        return (
            <tr className="data-item" onClick={(evt) => props.onClick({target:evt.target, item:props.data})}>
                <th className="data-item__name">
                    <div className={onlineStatus}></div>
                    <div>{props.data.name}</div>
                </th>
                <th className="data-item__surname">{props.data.surname}</th>
                <th className="data-item__city">{props.data.city}</th>
                <th className="data-item__email">{props.data.email}</th>
                <th className="data-item__phone">{props.data.phone}</th>
                <th className="data-item__actions">
                    <div className="edit-item" onClick={() => props.editItem(props.data)}></div>
                    <div className="delete-item" onClick={() => props.removeItem(props.data.id)}></div>
                </th>
            </tr>
        );
    // }
}

class ItemTable extends Component {
    checkTarget(data) {
        const target = data.target;
        if (target.className !== "edit-item" && target.className !== "delete-item") {
            this.props.onClick(data.item); 
        }
    }

	render() {
        let nameSort = this.props.nameSortDirection  === "none" ? "sort-arrow-inactive" : this.props.nameSortDirection  === "asc" ? "sort-arrow-asc" : "sort-arrow-desc";
        let surnameSort= this.props.surnameSortDirection  === "none" ? "sort-arrow-inactive" : this.props.surnameSortDirection  === "asc" ? "sort-arrow-asc" : "sort-arrow-desc";
        let filter = this.props.filter;
        let items = [];

        this.props.dataItems.forEach((item) => {
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
                items.push(<Item
                    key={item.id}
                    data={item}
                    onClick={(data) => this.checkTarget(data)}
                    removeItem={(id) => this.props.remove(id)}
                    editItem={(item) => this.props.edit(item)}
                />)    
            }
        });

        return (
            <table className="data-table">
                <thead className="data-table__header">
                    <tr>
                        <th className="data-table__header__name">
                            <div>Name</div>
                            <div className={nameSort} onClick={() => this.props.sortByName()}></div>
                        </th>
                        <th className="data-table__header__surname">
                            <div>Surname</div>
                            <div className={surnameSort} onClick={() => this.props.sortBySurname()}></div>
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