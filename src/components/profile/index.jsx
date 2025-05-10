import React from 'react'

const ProfilePict = (props) => {
  const {imgUrl, classname} = props;

  return (
    <img
        src={imgUrl} className={`${classname} rounded-full`}
    />
  )
}

export default ProfilePict;
