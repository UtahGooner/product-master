import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormGroup from "./FormGroup";
import TextInput from "./TextInput";
import {inputPropType} from "../constants/myPropTypes";


export default class FormGroupTextInput extends PureComponent {
    static propTypes = {
        label: PropTypes.string,
        formGroupClassName: PropTypes.string,
        labelClassName: PropTypes.string,
        colWidth: PropTypes.number,
        type: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        value: inputPropType.isRequired,
        field: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.onChange(value);
    }

    render() {
        const {onChange, colWidth, value, className, id, labelClassName, formGroupClassName, label, field, placeholder, children, inline, ...rest} = this.props;
        return (
            <FormGroup colWidth={colWidth} inline={inline}
                       className={formGroupClassName} htmlFor={id}
                       labelClassName={labelClassName} label={label} >
                <TextInput id={id} className={className}
                           value={value} field={field}
                           onChange={this.onChange}
                           placeholder={placeholder || label}
                           {...rest}/>
                {children}
            </FormGroup>
        );
    }
}
