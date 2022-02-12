import { render } from '@testing-library/react';
import MainButton from './MainButton';
describe('<MainButton/>', () => {
  test('Should Render the component with text', () => {
    const text = 'Dummy text';
    render(<MainButton text={text} />);
  });
  test('Shouldnt render the component without prop => text', () => {
    const element = render(<MainButton />);
    expect(element.container.firstChild).not.toBeInTheDocument();
  });
});
