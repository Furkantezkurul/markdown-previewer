import React from 'react';
import Editor from './editor';
import Preview from './preview';
import { updateMarkdown } from '../redux/actionTypes';
import {useDispatch}  from 'react-redux';

const Container = () =>  {

    const dispatch = useDispatch();
  

    const handleChange = (event) => {
        const text = event.target.value;
        dispatch(updateMarkdown(text));
    }

        return(
            <div id="container">
            <div className="editor-section">
                <div className="title-bar">Editor</div>
                <Editor onChange={handleChange} />
            </div>
            <div className="preview-section">
                <div className="title-bar">Preview</div>
                <Preview />
            </div>
        </div>
        );
    
}

export default Container;