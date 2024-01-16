import React from 'react';
import Editor from './editor';
import Preview from './preview';

class Container extends React.Component {
    render(){
        return(
         <div id="container">
            <Editor />
            <Preview />
         </div>
        );
    }
}

export default Container;