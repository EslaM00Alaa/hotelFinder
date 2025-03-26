import { CCircleFill, Facebook, Github, Linkedin, Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='w-full h-fit bg-[#212121] text-white flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-16 py-4'>
      <h3 className='flex items-center text-base md:text-xl mb-4 md:mb-0 white'>
        <CCircleFill className='mr-2 md:mr-3'/>
        2025 All rights reserved
      </h3>

      <div className='mb-3 white flex flex-wrap justify-center md:justify-between text-2xl md:text-3xl'>
        <a href="https://www.linkedin.com/in/eslam-alaa-035470230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='mx-2'>
          <Linkedin />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008757813336&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='mx-2'>
          <Facebook />
        </a>
        <a href="https://github.com/EslaM00Alaa" target="_blank" rel="noopener noreferrer" className='mx-2'>
          <Github />
        </a>
        <a href="https://wa.me/201060849583?text=Hello!%20I%20would%20like%20to%20get%20in%20touch%20with%20you." target="_blank" rel="noopener noreferrer" className='mx-2'>
          <Whatsapp />
        </a>
      </div>
    </div>
  );
};

export default Footer;
