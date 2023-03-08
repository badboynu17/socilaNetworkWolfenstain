import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reduser";


class HeaderContainer extends React.Component {
    render() {
        return <Header{...this.props} />
        this.componentDidMount()
        {
           this.props.getAuthUserData();
        }
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);