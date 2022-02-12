import { render } from '@testing-library/react';
import LightIcon from './LightIcon';
describe('<LightIcon />', () => {
  test('Should render the icon component', () => {
    const component = render(<LightIcon />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
});
