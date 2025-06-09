import logo from "../assets/images/codexhub-logo.png"

export default function Header() {
  return (
    <header>
        <div className="header">
            <div className="header-outer">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-elements row">
                            <div className="site-logo col-2 text-left">
                                <img src={logo}></img>
                            </div>
                            <div className="main-menu col-8">
                                <ul className="row gap-2">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Blogs</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="btn-area col-2 text-right">
                                <button className="primary-btn">Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
