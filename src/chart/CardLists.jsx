import React from 'react';
import { Card } from './Card';

/*cards datalist*/
export function CardLists() {
    const cardData = [
        {
            title: "Product",
            count: 150,
            colors: "success",
            
        },
        {
            title: "Orders",
            count: 130,
            colors: "warning",
        },
        {
            title: "customers",
            count: 350,
            colors: "info",

        },
        {
            title: "employee",
            count: "158",
            colors: "primary",
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}