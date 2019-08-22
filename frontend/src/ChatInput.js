import React, { Component } from 'react'


class ChatInput extends Component {
 
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          style={{padding:8,borderRadius:4,marginRight:8}}
        />
        <input type="submit" value={'Send'} style={{padding:8,fontSize:14}} />
      </form>
    )
  }
}

export default ChatInput