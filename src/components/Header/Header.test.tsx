import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header/>', () => {
  test('Should render the component with its props title', () => {
    const props = {
      title: 'Title example',
    };
    const component = render(<Header title={props.title} />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
  test('Shouldnt render the component without its props title', () => {
    const props = {
      title: 'Title example',
    };
    const component = render(<Header />);
    expect(component.container.firstChild).not.toBeInTheDocument();
  });
});
