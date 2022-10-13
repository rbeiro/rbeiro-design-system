import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  name?: string;
  prefix?: string;
}

export function TextInput({ prefix, name, ...props }: TextInputProps) {
  return (
    <TextInputContainer htmlFor={name}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input name={name} id={name} {...props} />
    </TextInputContainer>
  );
}

TextInput.displayName = "TextInput";
