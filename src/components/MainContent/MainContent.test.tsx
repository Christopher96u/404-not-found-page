import MainContent from './MainContent';
import { render } from '@testing-library/react';
describe('<MainContent/>', () => {
  test('Should render the component with its props => title, subtitle', () => {
    const props = {
      title: 'Title example',
      subtitle: 'Subtitle example',
    };
    const component = render(<MainContent title={props.title} subtitle={props.subtitle} />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
  test('Shouldnt render the component without its props => title, subtitle', () => {
    const component = render(<MainContent />);
    expect(component.container.firstChild).not.toBeInTheDocument();
  });
});
