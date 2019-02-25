import React, { Component } from 'react'

type Props = {
  className?: string,
  disabled?: boolean,
  required?: boolean,
  label?: string,
  id: string,
  error?: string,
  grid?: 's6' | 's12',
  type: 'text' | 'email' | 'password',
  size: 'default' | 'small',
  value?: string,
  placeholder?: string,
  onBlur: () => void,
  innerRef: () => void,
  onKeyPress?: () => void,
}

// Define component Button
class TextBox extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
    }

    this.togglePassword = this.togglePassword.bind(this)
  }

  togglePassword() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      className,
      disabled,
      label,
      type,
      id,
      onBlur,
      innerRef,
      value,
      placeholder,
      grid,
      error,
      size,
      required,
      onKeyPress,
    } = this.props

    const classes = [
      'input-field__textbox',
      'validate',
      size === 'small' ? 'input-field__textbox--small' : '',
    ].join(' ')

    const inputType =
      type !== 'password' ? type : !this.state.showPassword ? type : 'text'

    return (
      <div className={`input-field col ${grid} ${className}`}>
        {label && (
          <label htmlFor={id} className='input-field__label'>
            {label}
          </label>
        )}
        <div
          className={`input-field__wrapper ${
            label ? 'input-field__distance' : ''
          }`}
        >
          <input
            placeholder={placeholder}
            id={id}
            type={inputType}
            disabled={disabled}
            className={classes}
            onBlur={onBlur}
            ref={innerRef}
            defaultValue={value}
            required={required}
            onKeyPress={onKeyPress}
          />
          {type === 'password' && (
            <span className='input-field__icon' onClick={this.togglePassword} />
          )}
        </div>
        {error && (
          <span className='helper-text input-field__error' data-error={error}>
            {error}
          </span>
        )}
      </div>
    )
  }
}

// Defined default Props
TextBox.defaultProps = {
  disabled: false,
  label: '',
  id: 'first-name',
  type: 'text',
  grid: 's12',
  size: 'default',
  required: false,
}

export default TextBox