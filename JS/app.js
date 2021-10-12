// This methods is part of the marked library and allows line breaks with return button 
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

// This function inserts target="_blank" into href tags (required for Codepen links).
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            markdown:placeholder,
            editorFullSize: false,
            previewFullSize: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEditorFullSize = this.handleEditorFullSize.bind(this);
        this.handlePreviewFullSize = this.handlePreviewFullSize.bind(this);
    }
    handleChange(event){
        this.setState({
            markdown:event.target.value
        })
    }
    handleEditorFullSize(){
        this.setState({
            editorFullSize:!this.state.editorFullSize
        })
    }
    handlePreviewFullSize(){
        this.setState({
            previewFullSize:!this.state.previewFullSize
        })
    }
    render(){
        return (
            <div>
            <p>Something cool IDK</p>
            </div>
        );
    }

}

const placeholder = `Some wild code that i'm to busy to write myself`;