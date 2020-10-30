import React from 'react';

const Rainbow = (WrappedComponent)=>{


    const colors = ['red', 'blue', 'green', 'purple', 'yellow']

    const randomColor = colors[Math.floor(Math.random()*5)];
        
    const className = randomColor + '-text';

    

    return (props)=>{
        console.log("props rainbow ",props);
        return (
            <div className={className}>
            {console.log("Rainbow rendering")}
            <WrappedComponent {...props} />
            </div>
        )
    }

}
console.log("conosling Rainbow")
export default Rainbow