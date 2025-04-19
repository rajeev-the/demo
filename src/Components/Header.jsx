import React,{useState ,useEffect} from 'react'


const Header = () => {
    
      const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const checkScreen = () => {
          setIsMobile(window.innerWidth < 600);
        };
    
        checkScreen(); // Check on mount
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
      }, []);
    
      const textStyle = {
        fontSize: isMobile ? "12px" : "16px",
        textAlign: isMobile ? "center" : "left",
        marginBottom:  isMobile ? "1px" : "8px",
      };
    
      const contactContainerStyle = {
        textAlign: isMobile ? "center" : "left",
      };
  return (
    <div className="header-top">
      <div className="thm-container clearfix">
        <div className="row">
          {/* LEFT CONTACT INFO */}
          <div className="col-lg-7">
            <div className="left-contact-info tac-smd" style={contactContainerStyle}>
              <p style={textStyle}>
                <i className="hialeah-icon-phone-call" /> +99-55-66-88-526
              </p>
              <p style={textStyle}>
                <i className="far fa-envelope" /> exampl@support.com
              </p>
             
            </div>
          </div>

          {/* RIGHT SOCIAL + LANGUAGE PICKER — hidden on mobile */}
          {!isMobile && (
            <div className="col-lg-5">
              <div className="right-contact-info text-right tac-smd">
                <p className="social">
                  <a href="#" className="fab fa-facebook-f" />
                  <a href="#" className="fab fa-twitter" />
                  <a href="#" className="fab fa-linkedin-in" />
                  <a href="#" className="fab fa-google-plus-g" />
                  <a href="#" className="fab fa-youtube" />
                </p>
                <p className="language-picker">
                  <i className="fas fa-globe" />
                  <span className="select-box">
                    <select className="selectpicker" name="languages">
                      <option value="">EN</option>
                      <option value={1}>BN</option>
                      <option value={2}>DU</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header