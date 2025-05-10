import React from 'react';
import ProfilePict from '../components/profile';

const Students = (props) => {
  const {classname, modif, textBig, textSmall} = props;
  return (
    <div>
      <div className={`flex mx-1 ${classname}  w-full`}>
        <ProfilePict imgUrl='/images/ProfilePic.jpg' classname={modif}/>
        <ProfilePict imgUrl='/images/ProfilePic.jpg' classname={modif}/>
        <ProfilePict imgUrl='/images/ProfilePic.jpg' classname={modif}/>
      </div>
     
      <div>
        <p className={textBig}>500+ Students</p>
        <p className={textSmall}> Study Here.</p>
      </div>
    </div>
  )
}

export default Students
