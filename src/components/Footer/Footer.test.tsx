import { render } from '@testing-library/react';
import Footer from './Footer';
import { FooterProps } from './FooterProps';

describe('<Footer/>', () => {
  test('Should render the component just if it has props => text, username and website', () => {
    const componentProps: FooterProps = {
      text: 'This is a footer',
      username: 'chris96u',
      website: 'www.chris.com',
    };
    const component = render(<Footer text={componentProps.text} username={componentProps.username} website={componentProps.website} />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
  test('Shouldnt render the component if it doesnt have its props => text, username and/or website', () => {
    const componentProps: FooterProps = {
      website: 'www.chris.net',
    };
    const component = render(<Footer website={componentProps.website} />);
    expect(component.container.firstChild).not.toBeInTheDocument();
  });
});
