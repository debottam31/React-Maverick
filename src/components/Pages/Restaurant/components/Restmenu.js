import React from 'react';
import ContentLoader from 'react-content-loader';
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
        <MenuLoader/>
        <MenuLoader/>
        </div>
    </section>
)

const MenuLoader = props => (
    <div className= 'menu-item'>
	    <ContentLoader
		    height={30}
		    width={650}
		    speed={2}
		    primaryColor="#dbdbdb"
            secondaryColor="#eae8e8"
            {...props}

	    >
		    <rect x="35" y="2" rx="0" ry="0" width="200" height="5" /> 
		    <rect x="35" y="12" rx="0" ry="0" width="500" height="5" /> 
		    <rect x="35" y="22" rx="0" ry="0" width="150" height="5" />
	    </ContentLoader>
    </div>
)

export default RestMenu ;
