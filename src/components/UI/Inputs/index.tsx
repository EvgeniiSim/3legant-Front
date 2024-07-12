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
   Text: ({ placeholder, onChange, value }) => (
      <Text placeholder={placeholder} value={value} onChange={onChange} />
   ),
   Password: ({ placeholder, value, onChange }) => (
      <Password placeholder={placeholder} value={value} onChange={onChange} />
   ),
   Radio: ({ name, value, id }) => <Radio name={name} value={value} id={id} />,
   Checkbox: ({ children, id, name }) => (
      <Checkbox name={name} id={id}>
         {children}
      </Checkbox>
   ),
};

export default Input;
