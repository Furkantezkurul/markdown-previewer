import React from 'react';
import { connect } from 'react-redux';


const Editor = ({ onChange, markdown }) => {
    return (
        
        <textarea id="editor" onChange={onChange} value={markdown}>
            {/* The editor will display the markdown text */}
        </textarea>
    );
}

const mapStateToProps = (state) => ({
    markdown: state.markdown.markdown
});

export default connect(mapStateToProps)(Editor);
