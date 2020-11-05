import React from 'react';

import styles from './Project.module.scss';

const project = (props) => {
  return (
    <div className={'project ' + styles.Project}>
      <img src={props.image.url} alt={props.image.alt} />
      <div className='project-bottom'>
        <div className='published'>{props.published}</div>
        <div className='title'>{props.title}</div>
      </div>
    </div>
  )
}

export default project;
