import 'bootstrap/dist/css/bootstrap.min.css';
const Sidebar = ({selectedTab,setselectedTab}) => {

 
    return ( <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "280px"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={ () =>{setselectedTab("Home")} }>
            <a href="#" className={`nav-link text-white ${selectedTab ==='Home' && 'active'}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home
            </a>
          </li>
          <li onClick={ () => {setselectedTab("Createpost")}}>
            <a href="#" className={`nav-link text-white  ${selectedTab ==='Creatpost' && 'active'}`}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Creatpost 
            </a>
         </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>);
};
export default Sidebar;