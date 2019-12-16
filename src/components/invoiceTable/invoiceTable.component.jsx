import React, { useState } from 'react';
import './invoiceTable.styles.scss'
// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import TablePanel from '../tablePanel/tablePanel.component';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

const InvoiceTable = (props) => {

    const config = {
        sheetName: 'Invoice Data Data',
        hostClass: ' spreadsheet',
        autoGenerateColumns: true,
        width: 200,
        visible: true,
        resizable: true,
        priceFormatter: '$ #.00',
        chartKey: 1
    }

    const [_spread, setSpread] = useState({});

    const workbookInit = (spread) => {
        setSpread(spread)
    }

    function handleValueChanged(e, obj) {
        props.valueChangedCallback(obj.sheet.getDataSource());
    }

    handleValueChanged.bind(this);

    return(
        <TablePanel tableKey={config.chartKey} tableTitle='Invoice Data'>
            <SpreadSheets hostClass={config.hostClass} workbookInitialized={workbookInit} valueChanged={handleValueChanged}>
                <Worksheet name={config.sheetName} dataSource={props.tableData} autoGenerateColumns={config.autoGenerateColumns}>
                    <Column width={50} dataField='no' headerText="No"></Column>
                    <Column width={200} dataField='tanggal' headerText="Tanggal"></Column>
                    <Column width={320} dataField='keterangan' headerText="Keterangan"></Column>
                    <Column width={100} dataField='no_giro' headerText="No Giro" ></Column>
                    <Column width={100} dataField='total' headerText="Total" formatter={config.priceFormatter} resizable="resizable"></Column>
                </Worksheet>
            </SpreadSheets>
            <div className='dashboardRow'>
                <button className="btn btn-primary dashboardButton">Export to Excel</button>
                <div>
                    <b>Import Excel File:</b>
                    <div>
                        <input type="file" className="fileSelect"/>
                    </div>
                </div>
            
            </div>
        </TablePanel>
    )
}

export default InvoiceTable;