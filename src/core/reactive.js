export default function defineReactive(data,key,val){
    let deps = [];
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        //增加依赖
        // called without arguments and with this set to the object through which the property is 
        // accessed (this may not be the object on which the property is defined due to inheritance)
        get(){
            if(window.target&&typeof window.target == 'function'&&!deps.includes(window.target)){
                deps.push(window.target);
            }
            // The return value will be used as the value of the property. 
            return val;
        },
        // When the property is assigned, this function is called with one argument (the value being assigned to the property) 
        set(newVal){
            //with this set to the object through which the property is assigned
            if(newVal === val){
                return;
            }
            val =  newVal;
            for(let dep of deps){
                dep(newVal,val);
            }
        }
    })
}