
    export const ConditionEmail = (Value:any) =>{
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;        
        return !regx.test(Value);
    }
    export const ConditionLength = (Value:any,Length:any) =>{
        return Value.length < Length;
    }
    export const ConditionConfirmValues=(V1:any,V2:any)=>{
        return V1==V2
    }