import React from "react";
import { Redirect } from "react-router";

export const Postcard = ({ user }) => {
    
    return(
        
        <div>
            {!user && <Redirect to = "/" />}
            {user.notifications && user.notifications.map((photo, index) => {
                return <img className="postcards" key={index} src={photo} style={{ height: '300px' }} />
            })}
            
        </div>
        

    );
};