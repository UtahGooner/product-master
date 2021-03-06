import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class FormGroup extends PureComponent {
    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        htmlFor: PropTypes.string,
        className: PropTypes.string,
        labelClassName: PropTypes.string,
        colWidth: PropTypes.number,
        inline: PropTypes.bool,
        helpText: PropTypes.string,
    };

    static defaultProps = {
        inline: false,
        colWidth: 0,
        className: '',
        labelClassName: '',
        label: null,
        helpText: null,
    };

    render() {
        const {label, htmlFor, className = '', labelClassName, colWidth, children, inline, helpText} = this.props;
        const defaultClassName = {
            'form-row': !(inline || colWidth === 0 || className.split(' ').includes('form-group')),
            'form-group': inline || colWidth === 0
        };

        const colLabelClassName = (!!colWidth && colWidth < 12)
            ? `col-${12 - colWidth} col-form-label-sm`
            : null;
        const colClassName = (!!colWidth && colWidth < 12)
            ? `col-${colWidth}`
            : null;
        return (
                <div className={classNames(defaultClassName, className)}>
                {(!!colWidth || !!inline) && (
                    <label htmlFor={htmlFor} className={classNames(colLabelClassName, labelClassName)}>{label}</label>
                )}
                    <div className={classNames(colClassName, className)}>
                        {children}
                        {!!helpText && <small className="form-text">{helpText}</small>}
                    </div>
                </div>
            );
    }
}


