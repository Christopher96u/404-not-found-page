import MainButton from '../buttons/MainButton/MainButton';

interface MainContentProps {
  title?: string;
  subtitle?: string;
}
const MainContent = ({ title, subtitle }: MainContentProps) => {
  return !title || !subtitle ? null : (
    /* NO RENDERIZAR SIN LAS PROPS */
    <div className="container font-space-mono tracking-tight  md:mt-16">
      <h4 className="font-bold  text-5xl md:text-6xl ml-5 text-gray-950 dark:text-gray-100">{title}</h4>
      <div className="grid grid-cols-12">
        <h6 className="text-base md:text-2xl col-span-12 md:col-span-9 mx-5 md:ml-5 md:mt-8 mt-7 text-gray-425 dark:text-gray-300">{subtitle}</h6>
        <MainButton text={'Back to homepage'} />
        <MainButton />
      </div>
    </div>
  );
};
export default MainContent;
