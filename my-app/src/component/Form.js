import React, { Component } from 'react'

export default class Form extends React.Component {
        constructor(props) {
            super(props);
            this.state = { inputValue: '' };
        }
        handleInputChange(event) {
            this.setState({ value: event.target.value });
        }
        handleSubmit(event) {
            event.preventDefault();
            /* hacer cosas como guardar data, llamar a API, etc… */
            /*let history = useHistory();
            history.push("/");*/
        }
        render() {
            return ( <
                form onSubmit = { this.handleSubmit } >
                <
                label > Name:
                <
                input type = "text"
                value = { this.state.value }
                onChange = { this.handleInputChange }
                /></label >
                <
                button type = "submit"
                value = "Submit" / >
                </form>);
            }
        }