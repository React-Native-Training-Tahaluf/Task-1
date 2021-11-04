import React from "react";

export const useForceUpdate = () => {
    console.log('**********************************************[useForceUpdate] : Rerender');
    
    const [value, setValue] = React.useState(false); // integer state
    return () => setValue(value =>  !value); // update the state to force render
}
