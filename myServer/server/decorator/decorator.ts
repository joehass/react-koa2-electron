import GContext from '../config/globalContext'

export function SaveContext (target, key, descriptor) {
    const method = descriptor.value;
    let ret
    descriptor.value = (...args)=>{ 
        GContext.init(args[0].request.body)
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor
}

export function bindContext(...args1){
    return function bindContext(target, key, descriptor) {
        //console.log("args: " +args[0])
        const method = descriptor.value;
        let ret
        descriptor.value = (...args)=>{ 
            ret = method.apply(target, args)
            const data = args[0].request.body
            let flag = Array.isArray(data)
            if (flag){
                for(let single of data){
                    for (let st in single){
                        Object.defineProperty(args1[0],st,{
                            value:single.st
                        })
                    }
                }
            }else{
                for (let st in data){
                    Object.defineProperty(args1[0],st,{
                        value:data.st
                    })
                }
            }
            return ret;
        }
        return descriptor
    }
}
 