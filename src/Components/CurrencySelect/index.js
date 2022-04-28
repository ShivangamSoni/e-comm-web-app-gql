// React
import { Component, createRef } from "react";

// Styled Components
import { SelectContainer, SelectHeader, SelectedTitle, SelectBody, SelectOption } from "./StyledComponents";

// Components
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

// Apollo GraphQl
import { GET_CURRENCIES } from "../../Apollo/queries";
import { graphql } from "@apollo/client/react/hoc";

// Redux
import { connect } from "react-redux";
import { setCurrency } from "../../Redux/Site/ActionCreators";

class CurrencySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.menuRef = createRef();

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", (e) => {
      if (this.state.open && !this.menuRef.current.contains(e.target)) {
        this.setState({ open: false });
      }
    });
  }

  componentDidUpdate() {
    const {
      data: { loading, currencies },
      selectedCurrency,
      dispatchSetCurrency,
    } = this.props;

    if (!loading && currencies && !selectedCurrency) {
      dispatchSetCurrency(currencies[0].symbol);
    }
  }

  handleSelection(symbol) {
    if (this.props.selectedCurrency === symbol) {
      return;
    }

    this.props.dispatchSetCurrency(symbol);
    this.toggle();
  }

  toggle() {
    this.setState((prev) => {
      return { open: !prev.open };
    });
  }

  render() {
    const {
      data: { error, loading, currencies },
      selectedCurrency,
    } = this.props;

    const { open } = this.state;

    const { toggle, menuRef } = this;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <SelectContainer ref={menuRef}>
        <SelectHeader tabIndex={0} role="button" onClick={toggle}>
          <SelectedTitle>{selectedCurrency}</SelectedTitle>
        </SelectHeader>

        {open ? (
          <SelectBody>
            {currencies.map(({ label, symbol }) => (
              <SelectOption key={label} onClick={() => this.handleSelection(symbol)}>
                <span>{symbol}</span>
                <span>{label}</span>
              </SelectOption>
            ))}
          </SelectBody>
        ) : null}
      </SelectContainer>
    );
  }
}

// GraphQL
const withGQL = graphql(GET_CURRENCIES);

// REDUX
const MapStateToProps = (state) => {
  return { selectedCurrency: state.site.currency };
};

const MapDispatchToProps = (dispatch) => {
  return { dispatchSetCurrency: (symbol) => dispatch(setCurrency(symbol)) };
};

export default connect(MapStateToProps, MapDispatchToProps)(withGQL(CurrencySelect));
