import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css"; // Reuse contact CSS for consistent flex boxes

const Competitive = () => {
  return (
    <div className="contact-section section-container" id="competitive" style={{ paddingBottom: '0' }}>
      <div className="contact-container">
        <h3>Competitive Programming</h3>
        <div className="contact-flex">
          <div className="contact-box" style={{ width: '100%', flex: '1' }}>
            <h4>Profiles</h4>
            <a
              href="https://codeforces.com/profile/not_defined"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Codeforces <MdArrowOutward />
            </a>
            <a
              href="https://www.codechef.com/users/not_defined_0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Codechef <MdArrowOutward />
            </a>
            <a
              href="https://atcoder.jp/users/rishabhSinha"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Atcoder <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitive;
