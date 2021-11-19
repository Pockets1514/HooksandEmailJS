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
          className="form-field__input form-data"
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

export class FormTextArea extends Component {
  render() {
    const { className, title, type, value, placeholder, onChange } = this.props;
    return (
      <div className={`${className} form-textarea`}>
        <label className="form-textarea__label">{title}</label>
        <textarea
          className="form-textarea__textarea form-data"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        >
          {title}
        </textarea>
      </div>
    );
  }
}

export default FormInput;
