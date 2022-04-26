import { Component } from "react";

import { Container, NavActions, Icon } from "./StyledComponents";

import { ReactComponent as SiteIcon } from "../../Assets/SiteIcon.svg";

import NavBar from "../NavBar";
import CurrencySelect from "../CurrencySelect";

import { ReactComponent as CartIcon } from "../../Assets/Vector.svg";

import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpen: false,
    };

    this.toggleCartOverlay = this.toggleCartOverlay.bind(this);
  }

  toggleCartOverlay() {
    this.setState((prev) => {
      return { cartOpen: !prev.cartOpen };
    });
  }

  render() {
    const { cartOpen } = this.state;
    const { cartCount } = this.props;
    const { toggleCartOverlay } = this;

    return (
      <Container>
        <NavBar />

        <SiteIcon />

        <NavActions>
          <CurrencySelect />
          <Icon count={cartCount} onClick={toggleCartOverlay}>
            <CartIcon />
          </Icon>
        </NavActions>

        {cartOpen && "CARTOVERLAY"}
      </Container>
    );
  }
}

const MapStateToProps = (state) => {
  return { cartCount: state.cart.count };
};

export default connect(MapStateToProps, null)(Header);
