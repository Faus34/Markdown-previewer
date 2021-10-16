//import React from 'react';
//import ReactDOM from 'react-dom';

// This methods is part of the marked library and allows line breaks with return button 
alert('I am in');
console.log('im here')
const pinkCube = document.getElementById('app');
pinkCube.style.background = 'red';

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
        const UIversion = [];
        if (this.state.editorFullSize){
            UIversion = ['editor max','preview hide', 'fa fa-compress'];
        } else if (this.state.previewFullSize){
            UIversion = ['editor hide','preview max','fa fa-compress'];
        } else {
            UIversion = ['editor','preview','fa fa-arrows-alt'];
        };
        return (
            <div>
                <div className={UIversion[0]}>
                    <Header icon={UIversion[2]} 
                    text="Editor" 
                    onClick={this.handleEditorFullSize} />
                    <Editor 
                    onChange={this.handleChange} 
                    markdown={this.state.markdown} />
                </div>
                <div className={UIversion[1]}>
                    <Header icon={UIversion[2]}
                    text="Previewer"
                    onClick={this.handleEditorFullSize} />
                    <Preview 
                    markdown={this.state.markdown} />
                </div>
            </div>
        );
    }

}

const Header = (props)=>{
    //This is a functional react component that renders the header (toolbar) for the preview and editor depending on the props content.
    return (
        <div className="Header">
            <i className="fa fa-free-code-camp" title="MyLogo" />
            {props.text}
            <i className={props.icon} onClick={props.onClick} />
        </div>
    );
}

const Editor = (props)=>{
    //This is a functional react component that render the editor where the user enters the markup text.
    return (
    <textarea 
    id="editor"
    onChange={props.onChange} //When change it calls the onChange handler defined in props
    type="text"
    value={props.markdown}
    />
    );
}

const Preview = (props) =>{
    //This functional react component renders the preview depending on what's inside the props
    // and uses the marked library to run html (through the renderer function defined)
    return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview">
    </div>
  );
};

const placeholder = `Some wild code that i'm to busy to write myself`;

ReactDOM.render(<App />, document.getElementById('app'));