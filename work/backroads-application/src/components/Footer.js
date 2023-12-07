import {socialLinks, pageLinks} from '../linkData'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">


        {pageLinks.map((link)=>{
          const {href, text} = link
          return (
            <li>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
        

      </ul>
      <ul className="footer-icons">

        {socialLinks.map((link)=>{
          const {href, icon} = link
          return (
            <li>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}

        

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer