import React from 'react'

export default function FormItem(prop){

    const {name} = prop

    return (
        <div>
            {name.children}
        </div>
    )
}