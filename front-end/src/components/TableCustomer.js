import React from 'react'

const TableCustomer = () => {

    let cus_json = [
        {
            "id":"1",
            "name":"snigdho dip howlader",
            "email":"snigdho.howlader@gmail.com",
            "phone":"+8801775641902",
            "delivery_point":"Kalabagan, Dhaka",
        },
        {
            "id":"2",
            "name":"tausif chowdhury",
            "email":"tausif.niloy@gmail.com",
            "phone":"+8801775641902",
            "delivery_point":"Kalabagan, Dhaka",
        },
        {
            "id":"3",
            "name":"arafat antor",
            "email":"abir.antor@gmail.com",
            "phone":"+8801775641902",
            "delivery_point":"Kalabagan, Dhaka",
        },
    ]

    console.log('complete');
    return (
        <div>
            <table class="CusTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delivery Point</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cus_json.map(emp=>{
                            return (
                                <tr>
                                    <td key={emp.id}>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.delivery_point}</td>
                                    <td><button>Update</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default TableCustomer
