import React, { Component } from "react";

export function FormTitle(props) {
  const { className, text } = props;
  return <h1 className={`${className} form-title`}>{text}</h1>;
}

export class FormInput extends Component {
  render() {
    const {
      className,
      placeholder,
      title,
      name,
      minDate,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <div className={`${className} form-field`}>
        <label className="form-field__label">{title}</label>
        <input
          className={
            type === "date"
              ? "form-field__input form-data date-picker__input"
              : "form-field__input form-data"
          }
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          min={minDate}
        />
      </div>
    );
  }
}

export class FormButton extends Component {
  render() {
    const { className, title, input, type, largeButton } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button
          className={`form-button__${title} form-button__button ${
            largeButton
              ? "form-button__large-button"
              : "form-button__small-button"
          } `}
          type={type}
          {...input}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default FormInput;
