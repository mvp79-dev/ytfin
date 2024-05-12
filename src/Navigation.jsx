import { Link, useLocation } from "react-router-dom"

export const Navigation = () => {

    const location = useLocation();

    return (
        <div className="nav">
          <div className="left-content">
            <img className="left-content-image" src="/ytfin.png" />
          </div>
          <div className="right-content">
            <Link to="/" className="small-text navigation-text">
              <h1 className="small-text navigation-text" style={{ color: location.pathname === '/' ? '#fefeff' : '#fefeff50' }}>Home</h1>
            </Link>
            <Link to="/faq" className="small-text navigation-text">
              <h1 className="small-text navigation-text" style={{ color: location.pathname === '/faq' ? '#fefeff' : '#fefeff50' }}>FAQ</h1>
            </Link>
            <Link to="/stake" className="small-text navigation-text">
              <div className="button-stake" >
                <h1 className="small-text navigation-text" style={{ color: location.pathname === '/stake' ? '#fefeff' : '#fefeff50' }}>Stake</h1>
              </div>
            </Link>
          </div>
        </div>
    )
}