import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
     <Link
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </Link>
        <div className="navbox">
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                 <Link href="/#home" onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Home</span>
                 </Link>
              </li>

              <li>
                 <Link href="/blog" onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Designed &amp; Developed by{" "}
                <Link
                  href="https://mail.google.com/mail/u/0/h/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ArtsByYaseen
                </Link>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                   <Link href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                   <Link href="#">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                   <Link href="#">
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                   <Link href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                   <Link href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
