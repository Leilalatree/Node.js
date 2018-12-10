//Reflect
/*
if(Reflect.defineProperty(target,property,attributes)){
    //successs
}else{
    //failure
}
* */
Proxy(target,{
    set:function (target,name,value,receiver){
        const success = Reflect.set(target,name,value,receiver);
        if(success){
            log('property'+name +'on'+target+' set to '+ value)
        }
        return success;
    }
})
//Proxy 方法拦截target对象的属性赋值行为。采用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能；
