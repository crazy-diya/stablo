import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config.js';
import logo from '../../image/logo/logo.png'

// export default function({ collapsed, styling }) {
export default function ({ collapsed }) {
  return (
    <div
      className="isoLogoWrapper">
      {collapsed
        ? <div>
          <h3>
            <Link to="/dashboard">

              <img style={{
                height: '40px',
                width: '40px'
              }}
                src={logo} alt="Logo" />
            </Link>
          </h3>
        </div>
        : <h3>
          <Link to="/dashboard">
            {siteConfig.siteName}
          </Link>
        </h3>}
    </div>
  );
}
