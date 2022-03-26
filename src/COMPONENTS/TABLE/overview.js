import * as React from 'react';
import './overview.scss'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: <b>ID</b>, width: 90 },
    {
        field: 'accountType',
        headerName: <b>Account Type</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: <b>Name</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'merId',
        headerName: <b>Mer Id</b>,
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'secretKey',
        headerName: <b>Secret Key</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'status',
        headerName: <b>Status</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'webPayment',
        headerName: <b>Web Payment</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'created',
        headerName: <b>Created</b>,
        width: 150,
        editable: true,
    },
    {
        field: 'action',
        headerName: <b>Action</b>,
        width: 150,
        editable: false,
    },
];
const fun=()=>{
    return <div>hello</div>
}
const eye = <input class="PrivateSwitchBase-input css-1m9pwf3" tabindex="-1" type="checkbox" data-indeterminate="false" aria-label="Select row"></input>
const rows = [
    { id: 1, accountType: 'Normal', name: 'David Oconner', merId: '1066', secretKey: '557b35d', status: 'Approved', webPayment: 'Approved', created: '25/03/2021', action:fun()},
];

export default function DataGridDemo() {
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
