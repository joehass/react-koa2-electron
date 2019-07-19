import React from 'react';
import FormItem from './FormItem'

export default function Form(prop){

    const {onSubmit,className} = prop
    
    const Item = FormItem

    return (
        <form onSubmit = {sub} className = {className}>
            {prop.children}            
        </form>
    )

    function sub(e){
        console.log("1111: "+e)

        onSubmit()
    }
}