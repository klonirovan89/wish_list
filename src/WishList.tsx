import React from 'react';
import {WihesType} from "./App";

export type WishListPropsType = {
    wishes: WihesType[]
}

export const WishList = (props: WishListPropsType) => {

    return (
        <div>
            <h1>{props.wishes[0].category}</h1>
            <ul>
                <li>
                    <input type='checkbox' checked={props.wishes[0].checked}/>
                    <span>{props.wishes[0].title}</span> {` - ${props.wishes[0].OS} - ${props.wishes[0].price}`}
                    <button>х</button>
                </li>
            </ul>
        </div>
    );

}