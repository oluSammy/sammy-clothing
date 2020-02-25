import React from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../preview-collection/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: shopData
        }
    }

    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id, ...otherCollections})=>(
                    <CollectionPreview key={id}{...otherCollections}/>
                ))
            }
        </div>)
    }
};

export default ShopPage;