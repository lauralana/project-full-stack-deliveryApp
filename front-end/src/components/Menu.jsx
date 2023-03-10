import { Link, useHistory } from 'react-router-dom';
import '../style/Menu.css';

const vasco = () => {
  localStorage.removeItem('user');
};

function Menu() {
  const history = useHistory();

  const getDataInStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  const activeLink = (path) => {
    if (history.location.pathname.includes(path)) {
      return 'active-link';
    }
  };

  return (
    <div className="menu-customer">
      <div
        className={ `btn-produtos ${activeLink('products') || activeLink('checkout')}` }
      >
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h4>Produtos</h4>
        </Link>
      </div>

      <div className={ `btn-orders ${activeLink('orders')}` }>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h4>Meus Pedidos</h4>
        </Link>
      </div>

      <div className="space" />

      <div className="username">
        <h4
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { getDataInStorage().name }
        </h4>
      </div>

      <div className="btn-logout">
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ vasco }
        >
          <h4>Sair</h4>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
