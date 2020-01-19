import React from 'react';

class FileReader381 extends React.Component {

  handleClick = event => {
    event.preventDefault();
    this.refs.imageInput.click();
  }

  inputFileChanged = event => {
    event.preventDefault();
    this.props.inputFileChanged(this.refs.imageInput);
  }

  render() {
    const { image } = this.props
    return(
      <div>
        <img src={image} height={80} width={80}/>
        <button onClick={this.handleClick}>Upload</button>
        <input type="file" ref="imageInput" style={{display:'none'}} onChange={this.inputFileChanged} />
      </div>
    );
  }
}

export default FileReader381;