import React, { Component } from 'react';
import MyButton from './components/my_button'
class App extends Component {
  constructor(props) {
    super(props)

    // Linha necessária para poder usar o "this" 
    // dentro de uma função que foi passada como callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(mensagem_secreta) {
    
    //Essa função quebra o encode da mensagem secreta.
    function desemcriptar(msg) {
      return msg.map(c => String.fromCharCode(c)).join("");
    }
    
    let mensagem = desemcriptar(mensagem_secreta);

    alert(mensagem);
  }

  render() {
    return (
      <MyButton onMyButtonClick={this.handleClick}></MyButton>
    );
  }
}

export default App;
