import Head from 'next/head'; // Import Head from Next.js

import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <>
      {/* Add Head component for managing head content */}
      <Head>
        <style>{`
          .logo {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 150px;
            z-index: 1000;
          }

          .logo img {
            width: 100%;
            height: auto;
          }

          .nav ul {
            font-family: "Montserrat, sans-serif";
          }
        `}</style>
      </Head>

      <header id="header">
        <div className="header">
          <div className="header_in">
            <div className="trigger_logo">
              <div className="logo">
                <Link href="/">
                  <img src="/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="nav" style={{ opacity: 1 }}>
              <ul>
                <li>
                  <Link href="/#home" onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#collection"
                    className="creative_link"
                    onClick={() => navigationToggle(false)}
                  >
                    <span className="creative_link">Collection</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="creative_link"
                    onClick={() => navigationToggle(false)}
                  >
                    <span className="creative_link">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
