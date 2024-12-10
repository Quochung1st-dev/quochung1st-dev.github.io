
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
  <nav className="navbar navbar-expand-sm bg-light bg-base-10 card shadow-lg compact bg-base-100 col-span-1 lg:col-span-2" >
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Trang chủ</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">Danh mục</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">Thông tin</Link>
    </li>
  </ul>
</nav>
  </>

);

export default Navbar;