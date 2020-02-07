import React from 'react'

export default class MyButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mensagem_secreta: [80, 97, 108, 109, 101, 105, 114, 97, 115, 32, 110, 227, 111, 32, 116, 101, 109, 32, 109, 117, 110, 100, 105, 97, 108, 33]
        }

        // Linha necessária para poder usar o "this" 
        // dentro de uma função que foi passada como callback
        this.lidarComClick = this.lidarComClick.bind(this);
    }

    lidarComClick(e) {
        this.props.onMyButtonClick(this.state.mensagem_secreta);
    }

    render() {
        return (
            <button onClick={this.lidarComClick}>Sou um botão Secreto!</button>
        )
    }
}