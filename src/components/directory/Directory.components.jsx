import React from 'react';
import { connect } from 'react-redux'; 
import './Directory.styles.scss';

import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/MenuItem.component';

function Directory({sections}){
  return (
      <div className='directory-menu'>
          {
              sections.map(({title,id,imageUrl,size, linkUrl}) => (
                  <MenuItem 
                  key={id}
                  title={title}
                  imageUrl={imageUrl}
                  size={size}
                  linkUrl={linkUrl}
                  />
              ))
          }
      </div>
  )
}

const mapStateToProps = state => createStructuredSelector ({
    sections: selectDirectorySections
  })


export default connect(mapStateToProps)(Directory);