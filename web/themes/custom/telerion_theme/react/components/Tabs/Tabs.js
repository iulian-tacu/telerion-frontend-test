import React from 'react';
import styles from './Tabs.module.scss';

const tabs = (props) => {
  const clickHandler = typeof props.setActive === 'function' ?
    props.setActive :
    null;

  const renderedItems = props.items && props.items.length ?
    <div className={'tabs ' + styles.Tabs}>
      {props.items.map(
        item => (
          <div className={'tab' + (props.activeTab && props.activeTab === item.value ? ' active' : '')} onClick={() => clickHandler(item.value)}>
            {item.label}
          </div>
        )
      )}
    </div> :
    null;

    return renderedItems;
}

export default tabs;
