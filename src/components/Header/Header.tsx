import DarkModeButton from '../buttons/DarkModeButton/DarkModeButton';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header = ({ title, className }: HeaderProps) => {
  return !title ? null : (
    <div className="flex flex-row justify-between">
      <div className={`font-inconsolata uppercase font-bold tracking-tighter text-2xl text-gray-950 dark:text-gray-50 ${className}`}>
        <div>{title}</div>
      </div>
      <DarkModeButton />
    </div>
  );
};
export default Header;
