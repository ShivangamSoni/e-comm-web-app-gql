// React
import { Component, createRef } from "react";

// Styled Components
import { Container, NavActions, Icon, CartOverlay, Backdrop } from "./StyledComponents";

// Components
import NavBar from "../NavBar";
import CurrencySelect from "../CurrencySelect";
import Cart from "../../Pages/Cart";

// Icons
import { ReactComponent as CartIcon } from "../../Assets/Vector.svg";
import { ReactComponent as SiteIcon } from "../../Assets/SiteIcon.svg";

// Redux HOC
import { connect } from "react-redux";

// React Router HOC
import withRouter from "../../Utils/withRouter";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpen: false,
    };

    this.toggleCartOverlay = this.toggleCartOverlay.bind(this);
    this.cartRef = createRef(null);
    this.cartButtonRef = createRef(null);
  }

  componentDidMount() {
    document.addEventListener("mousedown", (e) => {
      if (this.state.cartOpen && !this.cartRef.current.contains(e.target) && !this.cartButtonRef.current.contains(e.target)) {
        this.setState({ cartOpen: false });
      }
    });
  }

  toggleCartOverlay() {
    this.setState((prev) => {
      return { cartOpen: !prev.cartOpen };
    });
  }

  render() {
    const { cartOpen } = this.state;
    const { cartCount } = this.props;
    const { toggleCartOverlay, cartRef, cartButtonRef } = this;

    return (
      <Container>
        <NavBar />

        <SiteIcon />

        <NavActions>
          <CurrencySelect />
          <Icon count={cartCount} onClick={toggleCartOverlay} ref={cartButtonRef}>
            <CartIcon />
          </Icon>
        </NavActions>

        {cartOpen && (
          <>
            <CartOverlay ref={cartRef}>
              <Cart overlay={true} toggle={toggleCartOverlay} />
            </CartOverlay>

            <Backdrop />
          </>
        )}
      </Container>
    );
  }
}

// REDUX
const MapStateToProps = (state) => {
  return { cartCount: state.cart.count };
};

export default connect(MapStateToProps, null)(withRouter(Header));
