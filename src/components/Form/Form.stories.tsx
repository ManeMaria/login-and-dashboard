import { Button } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from './Fields/AutoComplete';
import { DayPicker } from './Fields/DayPicker';
import { PinInput } from './Fields/PinInput';
import { Radio, RadioGroup } from './Fields/Radio';
import { Slider } from './Fields/Slider';
import { TextArea } from './Fields/TextArea';
import { TextInput } from './Fields/TextInput';
import { FieldWrapper } from './FieldWrapper';
import { Form } from './Form';

type FormValues = {
  name: string;
  bio: string;
  dob: string;
  code: string;
  gender: string;
  age: string;
  country: string;
};

const MyForm = () => {
  return (
    <Form<FormValues>
      initialValues={{
        name: '',
        bio: '',
        dob: '',
        code: '',
        gender: '',
        age: '',
        country: '',
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      withDebugger
    >
      {() => (
        <>
          <FieldWrapper
            name="name"
            helper="Seu nome completo"
            required
            label="Nome"
            as={(fieldProps) => <TextInput {...fieldProps} />}
          />

          <FieldWrapper
            name="bio"
            helper="Nos conte um pouco mais sobre você"
            required
            label="Bio"
            as={(fieldProps) => <TextArea {...fieldProps} />}
          />

          <FieldWrapper
            name="dob"
            required
            label="Data de nascimento"
            as={(fieldProps) => <DayPicker {...fieldProps} />}
          />

          <FieldWrapper
            name="code"
            helper="Codigo de 5 digitos"
            required
            label="Código de ativação"
            as={(fieldProps) => <PinInput pinAmount={5} {...fieldProps} />}
          />

          <FieldWrapper
            name="gender"
            label="Gênero"
            as={(fieldProps) => (
              <RadioGroup {...fieldProps} inline>
                <Radio value="1">Masculino</Radio>
                <Radio value="2">Feminino</Radio>
                <Radio value="3">Prefiro não me identificar</Radio>
              </RadioGroup>
            )}
          />

          <FieldWrapper
            name="age"
            required
            label="Idade"
            as={(fieldProps) => <Slider {...fieldProps} />}
          />

          <FieldWrapper
            name="country"
            required
            label="Local de nascimento"
            as={(fieldProps) => (
              <AutoComplete {...fieldProps} openOnFocus>
                <AutoCompleteInput variant="filled" />
                <AutoCompleteList>
                  {['nigeria', 'japan', 'india', 'united states', 'south korea', 'brazil'].map(
                    (country, cid) => (
                      <AutoCompleteItem
                        key={`option-${cid}`}
                        value={country}
                        textTransform="capitalize"
                      >
                        {country}
                      </AutoCompleteItem>
                    ),
                  )}
                </AutoCompleteList>
              </AutoComplete>
            )}
          />

          <Button type="submit">Enviar</Button>
        </>
      )}
    </Form>
  );
};

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyForm />;

export const Basic = Template.bind({});
Basic.args = {};
