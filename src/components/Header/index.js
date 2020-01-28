import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/cerveja.svg';
import { Container, Cart, Blogo } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
        <Link to="/">
        <Blogo src={logo} className="blogo" alt="BrewShop" />
        <h1>BrewShop</h1>
        </Link>

        <Cart to="/cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize}</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
    </Container>
  );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);