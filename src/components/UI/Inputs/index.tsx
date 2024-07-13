import { FC } from "react";

import Checkbox, { CheckboxProps } from "./Checkbox/Checkbox";
import Radio, { RadioProps } from "./Radio/Radio";
import Text, { TextProps } from "./Text/Text";
import Password, { PasswordProps } from "./Password/Password";

interface InputsTypes {
   Text: FC<TextProps>;
   Password: FC<PasswordProps>;
   Radio: FC<RadioProps>;
   Checkbox: FC<CheckboxProps>;
}

const Input: InputsTypes = {
   Text: ({ placeholder, onChange, value, isError, errorText, autoFocus }) => (
      <Text
         placeholder={placeholder}
         value={value}
         autoFocus={autoFocus}
         onChange={onChange}
         isError={isError}
         errorText={errorText}
      />
   ),
   Password: ({
      placeholder,
      value,
      onChange,
      isError,
      errorText,
      autoFocus,
   }) => (
      <Password
         placeholder={placeholder}
         value={value}
         autoFocus={autoFocus}
         onChange={onChange}
         isError={isError}
         errorText={errorText}
      />
   ),
   Radio: ({ name, value, id }) => <Radio name={name} value={value} id={id} />,
   Checkbox: ({ children, id, name, checked, setChecked }) => (
      <Checkbox checked={checked} setChecked={setChecked} name={name} id={id}>
         {children}
      </Checkbox>
   ),
};

export default Input;
