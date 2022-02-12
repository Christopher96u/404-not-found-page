import { render } from '@testing-library/react';
import DarkIcon from './DarkIcon';
describe('<DarkIcon />', () => {
  test('Should render the icon component', () => {
    const component = render(<DarkIcon />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
});
