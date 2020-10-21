import React from 'react'
import propTypes from 'prop-types'

const Profile = props => {
    function handleName(a) {
        a.preventDefault();
        alert("Nelson Mandela")
    }
    return (
        <div className="holder">
            <div onClick={handleName}>
                {props.children}
            </div>
            <div className="left">
                <h1 style ={{fontSize:"60px",color:"#2e2e1f"}}>{props.fullName}</h1>
                <h2 style={{color:"#6b6b47"}}>{props.profession}</h2>
                <p className="descirption">{props.bio}</p>

            </div>
        </div>
    );
}
export default Profile;
Profile.defaultProps={
fullName: "string",
profession:"string",
bio:"string"
}
Profile.propType={
    fullName: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    profession: propTypes.string.isRequired
};
