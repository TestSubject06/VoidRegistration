import { ChangeEvent, Component } from "react";
import styled from "styled-components";

const InputElement = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;

  &:focus {
    outline: 0;
    border: 1px solid #1bb6ec;
    box-shadow: 0px 0px 3px 1px #7dddff;
  }
`;
InputElement.displayName = "InputElement";

const Label = styled.label`
  font-weight: 600;
  display: block;
`;
Label.displayName = "Label";

const ValidationMessage = styled.label`
  font-weight: 400;
  display: block;
  font-size: 0.8rem;
  color: crimson;
`;
ValidationMessage.displayName = "ValidationMessage";

interface Props {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  validationMessage?: string;
  type?: string;
  onChange: (value: string) => void;
}

export default class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

  public render() {
    let validationMessage;
    if (this.props.validationMessage) {
      validationMessage = <ValidationMessage>{this.props.validationMessage}</ValidationMessage>;
    }

    return (
      <>
        <Label>{this.props.label}</Label>
        <InputElement
          type={this.props.type ? this.props.type : "text"}
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.changeHandler}
        />
        {validationMessage}
      </>
    );
  }

  private changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(event.target.value);
  }
}
