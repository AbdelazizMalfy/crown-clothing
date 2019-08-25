import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collectionPreview/CollectionPreview.component';

import './CollectionsOverview.styles.scss';

function CollectionsOverview({collections}) {
    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview 
                    key={id}
                    {... otherCollectionProps}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)