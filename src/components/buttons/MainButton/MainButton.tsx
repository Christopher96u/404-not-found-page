import '../MainButton/MainButton.css';
interface MainButtonProps {
  text?: string;
}

const MainButton = ({ text }: MainButtonProps) => {
  if (!text || text === '') {
    return <></>;
  }
  return (
    <button className="bg-gray-950 mt-16 duration-500 md:col-span-7 lg:col-span-5 col-span-8 ml-5 md:mt-14 md:ml-6 active:bg-gray-800 active:text-gray-300 transition hover:-translate-x-1  hover:scale-100 hover:bg-gray-600  dark:bg-gray-500  dark:text-gray-200 text-white hover:text-gray-200 px-9 py-5 uppercase font-mono font-bold tracking-tighter text-sm">
      {text}
    </button>
  );
};
export default MainButton;
