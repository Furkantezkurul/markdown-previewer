import React from 'react';
import { connect } from 'react-redux';
import {marked} from 'marked';


class Preview extends React.Component {
    

    renderMarkdown() {

        marked.setOptions({
            gfm: true,
            breaks: true,
            tables: true,
            // Other options as needed
          });

        // Use Marked to convert markdown text to HTML
        const rawMarkup = marked(this.props.markdown, { sanitize: true });
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={this.renderMarkdown()}>
                {/* Rendered Markdown will go here */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    markdown: state.markdown.markdown
});

export default connect(mapStateToProps)(Preview);
