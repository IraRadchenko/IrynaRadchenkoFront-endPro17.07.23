import { Component } from 'react';
import './Button.scss'
import {string} from "prop-types";

export default class Button extends Component {
    render() {
        const { onClick, label } = this.props;

        return (
            <button className='btn' onClick={onClick}>
                {label}
            </button>
        );
    }
}

Button.propTypes = {
    label: string
};

Button.defaultProps = {
    label: 'BUTTON'
}