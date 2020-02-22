import React from 'react';
import MenuItem from '../menu-item/menu-item.components'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {title: 'Hats', 
                imgUrl: 'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1},
                {title: 'suits', 
                imgUrl: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 2},
                {title: 'shoes', 
                imgUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                id: 3},
                {title: 'men', 
                size: 'large',
                imgUrl: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 4},
                {title: 'women', 
                size: 'large',
                imgUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 6},
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">            
                {
                    this.state.section.map(({title, imgUrl, id, size})=>(
                        <MenuItem key={id} title={title} imgUrl= {imgUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}
export default Directory;