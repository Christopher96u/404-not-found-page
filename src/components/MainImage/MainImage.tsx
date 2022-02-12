interface MainImageProps {
  imagePath: string;
}
const MainImage = ({ imagePath }: MainImageProps) => {
  return !imagePath || imagePath === '' ? null : <img src={imagePath} alt="logo" className="max-h-54 sm:max-h-90 justify-self-center my-14" />;
};
export default MainImage;
