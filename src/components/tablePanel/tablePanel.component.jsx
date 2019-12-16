import React from 'react';
import './tablePanel.styles.scss';

const TablePanel = (props) => {
    return (
        <div className="col-sm-12 tablePanel">
            <div className="card dashboardRow">
                <div className="card-body">
                    <h5 className="card-title">{props.tableTitle}</h5>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default TablePanel;