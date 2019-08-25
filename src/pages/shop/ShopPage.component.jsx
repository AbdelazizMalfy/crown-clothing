import React from 'react';
import { Route } from 'react-router-dom';  

import CollectionPage from '../../pages/Collection/Collection.component';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';

function ShopPage({match}) {
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

export default ShopPage;