import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is {props.info}</p>
    </div>
)
const  requireAuthentication = (ProWraps) => {  
    return (props) => (
         
        <div>
        
        {!props.isAuthenticated && "Login at first"}
        {props.isAuthenticated &&<ProWraps {...props}/>}
        </div>
    );
   
};

const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="There are secret detail " />, document.getElementById('app')) 
//ReactDom.render(<Info info='Hi,molester !'   />,document.getElementById('app'));