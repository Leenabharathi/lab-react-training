import React from "react";

function generateNumber(limit){

    let numArr = [];

    for(let i=1; i<=limit; i++){

        numArr.push(i);

    }

    return numArr;

}
const NumberList = ({limit})=>{

    const numbers = generateNumber(limit);

    return(

        <ul>

        {

            numbers.map((num)=>(

                <li key={num} className={num%2===0?"even":"odd"}>{num}</li>

            ))

        }

        </ul>

    )

}

export default NumberList;