// components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer ttm-bgcolor-darkgrey ttm-textcolor-white clearfix"
      id="footer"
    >
      <div className="bottom-footer-text text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center pb-15 mt-3">
                Copyright © 2026
                <span className="text-light fw-bold"> IMT HYDERABAD.</span> All
                Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
}
