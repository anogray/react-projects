// import './App.css';
import React from 'react';
import "./App.css"
//fxn component needs props as paramter whereas class components 
//don't need they are inbuilt passed automatically
const FirstCmp = ({allchamps, delchamp}) => {
                //({allchamps}) is same as in fxn component (props)
                  //const { allchamps } = props;
    
                  //const championList = allchamps.map(champ => {
    //     if(champ.age>=2500){
    //     return (
    //         <div className="alpha" key={champ.id}>
    //             <div>Name : {champ.name}</div>
    //             <div>Age : {champ.age}</div>
    //             <div>Belt: {champ.belt}</div>
    //         </div>
    //     )
    // }
    // else{
    //     return null;
    // }allchamps=allchamchampion
    const championList = allchamps.map(champ=>{
        return champ.age>0 ? (
                <div className="alpha" key={champ.id}>
                <div>Name : {champ.name}</div>
                <div>Age : {champ.age}</div>
                <div>Belt: {champ.belt}</div>
                <button onClick={() => {delchamp(champ.id)}}>Delete</button>
                 {/* onClick = {delchamp(champ.id)} here style is not being used because 
                it will invoke every time whether we had clicked or not as it invokes fxn syntax 
                so we used arrow fxn syntax which will onlyinvoke when clicked*/}
                </div>     
        ) : null;
    })

    console.log(championList)

    return (
        <div className="champ-List">
            {championList}
        </div>
    )
}



export default FirstCmp