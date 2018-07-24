import React, { Component } from 'react';
import '../css/ItemTable.css';

class ItemTable extends Component {
    constructor(props) {
        super(props);
    }
	render() {
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
                {/* <tbody className="data-table__data" id="dataTable">{dataItems}</tbody> */}
                <tbody className="data-table__data"></tbody>
            </table>
        );
    }
}

export default ItemTable;