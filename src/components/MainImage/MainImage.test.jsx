const { render } = require('@testing-library/react');
import MainImage from './MainImage'

describe('<MainImage/>',()=>{
    test('Should render the component with its prop => logo(img)', ()=>{
        const imagePath = 'assets/images/scarecrow.png';
        const element = render(<MainImage imagePath={imagePath} />);
        expect(element.container.firstChild).toBeInTheDocument();
    });
    test('Shouldnt render the component without its prop => logo(img) or empty', ()=>{
        const imagePath = '';
        const element = render(<MainImage imagePath={imagePath} />);
        expect(element.container.firstChild).not.toBeInTheDocument();
    });
});