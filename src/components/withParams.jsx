import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

// This is for withRouter . I do it because I found out that 'withRouter' is not supported anymore by 
// react-router-dom v6'. But I can't figure out how to change my code compatibly to v6.
export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }