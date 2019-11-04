import React,  { useState, useEffect, useLayoutEffect, useMemo }  from 'react';

let born = false;

function Example() {
    const [ growth, setGrowth ] = useState(5);
    const [ nirvana, setNirvana] = useState(false);

    useEffect(() => {
        if(born){
            console.log("is this changing the coming to nirwana state")
            document.title = "nirvana attained"
        }
    },[nirvana])
    // in this useEffect only whenever the nirwana change then only this useEffect will run

    useEffect(() => {
        console.log("this is useEffect function where the component has born, it will run first render");
    }, []);

    // here empty error means this useEffect will run only one time means first render 

    useEffect(() => {
        if(born){
          console.log("make mistake and learn", born);
        }else {
            console.log("2----------")
            born = true;
        } 

        if(growth > 70){
            setNirvana(true);
        }

        return function cleanUp(){
            console.log("clean up after the mistake");
        }
    })
    //this use effect will run in any update
    // first time else will run, then this become true.

    function  growHandle(){
        setGrowth(growth + 5);
    }

    return(
        <div>
            <h1>Use Effect</h1> 
            <p>growth: {growth} times</p> 
            <button onClick={() => growHandle()}>
                Click me
            </button>
        </div>
    )
}

export default Example;