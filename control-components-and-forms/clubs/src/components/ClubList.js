import React from 'react';
import Club from './Club';

const ClubList = props => {
  return <ul>
    {props.items.map((item, index) =>{
      return <li key={index} className="clubs">
        <Club
          srcImage={item.image}
          clubTitle={item.name}
          members={item.members}
        />
        </li>
      })
    }
  </ul>
}


export default ClubList;