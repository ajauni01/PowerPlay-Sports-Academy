import logo from '../../../../public/icon.png'

const Footer = () => {


  return (
    <div>

      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <img className='w-[36px] h-[36px]' src={logo} alt="" />


          <p ><span className='font-bold text-2xl mb-2'>PowerPlay Sports Academy</span><br />Providing sports training since 1992</p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

    </div>
  );
};

export default Footer;