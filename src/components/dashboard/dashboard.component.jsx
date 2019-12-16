import React, { useState } from 'react';
import recentPayments from '../data/data';
import InvoiceTable from '../invoiceTable/invoiceTable.component';

import './dashboard.styles.scss';


const Dashboard = () => {
    
    console.log('Inside of Dashboard');

    const [payments, setPayments] = new useState(recentPayments);

    console.log(payments);

    function handleValueChanged(tableData) {
        setPayments(tableData.slice(0));
    }
    

    return (
        <div style={{ backgroundColor: '#ddd' }}>
            <div className="container">
                <div className="row">
                    <InvoiceTable tableData={payments}
                        valueChangedCallback={handleValueChanged}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

