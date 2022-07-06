import { useForm, useStep } from 'react-hooks-helper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const defaultData = {
  Name: '',
  place: '',
};

const steps = [
  { id: 'firststep' },
  { id: 'secondstep' },
];

function Form() {
  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  // passing down props for each components
  const props = { formData, setFormData, navigation };

  switch (step.id) {
    case 'firststep':
      return <FirstStep {...props} />;
    case 'secondstep':
      return <SecondStep {...props} />;
  }
  return (
    <div>
      hello world
    </div>

  );
}

export default Form;
