import { FooterProps } from './FooterProps';

const Footer = ({ text, username, website }: FooterProps) => {
  return (
    <>
      {!text || !username || !website ? null : (
        <div className="grid grid-cols-12 mt-24 md:mt-64 pb-5">
          <p className="text-sm text-gray-75 md:justify-self-center justify-end lg:col-start-5 lg:col-end-9 col-span-full text-center">
            {text} <span className="font-bold underline">{username}</span> - {website}
          </p>
        </div>
      )}
    </>
  );
};
export default Footer;
