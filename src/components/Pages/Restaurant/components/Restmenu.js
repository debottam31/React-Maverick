import React from 'react';
import MenuItem from './MenuItem';

const RestMenu = (props)=>(
    <section className='menu-placeholder'>
        <h3 className='rest-meu-subheading'>Menu</h3>
        <div className='rest-menu-placeholder'>
        {
            props.dishItems.map((item)=>{
                return(  
                    <MenuItem 
                    key = {item._id} 
                    details = {{
                        restId : props.restId,
                        name : props.name,
                        ...item,
                        }}/>
                )
            })
        }
        </div>
    </section>
)


export default RestMenu ;