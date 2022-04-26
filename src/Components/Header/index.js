import { Component } from "react";

import { Container, NavActions, Icon } from "./StyledComponents";

import { ReactComponent as SiteIcon } from "../../Assets/SiteIcon.svg";

import NavBar from "../NavBar";
import CurrencySelect from "../CurrencySelect";

import { ReactComponent as CartIcon } from "../../Assets/Vector.svg";

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
    const { toggleCartOverlay } = this;

    return (
      <Container>
        <NavBar />

        <SiteIcon />

        <NavActions>
          <CurrencySelect />
          <Icon count={0}>
            <CartIcon onClick={toggleCartOverlay} />
          </Icon>
        </NavActions>

        {cartOpen && "CARTOVERLAY"}
      </Container>
    );
  }
}

export default Header;
