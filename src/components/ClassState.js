import React, { Component } from 'react'
import { Loading } from './Loading';
class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        }
    }
    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount");
      }
    
      componentDidMount() {
        console.log("componentDidMount");
      }
    
      componentDidUpdate() {
        console.log("Update");
    
        if(!!this.state.loading) {
          setTimeout(() => {
            console.log("Doing the validation");
    
            this.setState( { loading: false } );
    
            console.log("Finishing the validation");
          }, 3000);
        }
      }
    
    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>

                {this.state.error && (
                    <p>Error: el codigo es incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}

                <input type="text" placeholder="Codigo de seguridad"/>
                <button onClick={() => this.setState({ error: !this.state.error })}>Comprobar</button>
                <button onClick={() => this.setState({ loading: true })}>Comprobar Loading</button>
            </div>
        )
    }
}
export {ClassState} 