import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useState, useEffect } from 'react';
import DarkModeButton from './DarkModeButton';
describe('<DarkModeButton />', () => {
  let initValues: any = {};
  enum themes {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
  }
  beforeEach(() => {
    initValues = renderHook(() => {
      const isDarkModeFromBrowser: boolean = window.localStorage.getItem('theme') === themes.DARK ? true : false;
      const [isDarkMode, setTheme] = useState(isDarkModeFromBrowser);
      const changeTheme = () => {
        setTheme(!isDarkMode);
      };
      useEffect(() => {
        if (!isDarkMode) {
          localStorage.setItem('theme', themes.LIGHT);
          document.documentElement.classList.remove('dark');
        } else if (isDarkMode) {
          localStorage.setItem('theme', themes.DARK);
          document.documentElement.classList.add('dark');
        }
      }, [isDarkMode]);
      return {
        isDarkMode,
        changeTheme,
      };
    });
  });
  test('Should show isDarkMode as false (init value when user go to the page for first time)', () => {
    expect(initValues.result.current.isDarkMode).toBe(false);
  });
  test('Should save into localStorage theme as LIGHT the first time that the user go to the website and the rootElement shouldnt have to have the dark className', () => {
    expect(window.localStorage.getItem('theme')).toBe(themes.LIGHT);
    expect(window.document.documentElement.classList.contains('dark')).toBe(false);
  });
  test('Should render the component', () => {
    const component = render(<DarkModeButton />);
    expect(component.container.firstChild).toBeInTheDocument();
  });
  test('Should save into localStorage theme as DARK and the rootElement should have dark className when user have cliked the button', () => {
    act(() => {
      initValues.result.current.changeTheme();
    });
    expect(window.document.documentElement.classList.contains('dark')).toBe(true);
    expect(window.localStorage.getItem('theme')).toBe(themes.DARK);
  });
  test('Should change them from light to dark or from dark to light when button is clicked', () => {
    let initDarkModeValue: boolean = initValues.result.current.isDarkMode;
    act(() => {
      initValues.result.current.changeTheme();
    });
    expect(initValues.result.current.isDarkMode).toBe(!initDarkModeValue);
    act(() => {
      initValues.result.current.changeTheme();
    });
    initDarkModeValue = !initValues.result.current.isDarkMode;
    expect(initValues.result.current.isDarkMode).toBe(!initDarkModeValue);
  });
});
