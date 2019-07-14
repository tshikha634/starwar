import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Input, Row, Col, CardBody, Table, Card, Button } from 'reactstrap'
import { getPlanetsListAction, getPlanetsListActionSuccess, getPlanetsListActionFailure } from '../../Common/actions/paymentHistoryAction'
import PaymentListService from '../../Services/searchPlanets/searchPlanets'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore } from 'react-toasts'

const style = {
  'word-break': 'break-all',
  'align-items': 'center'
}

export class SearchPlanets extends Component{

}


PaymentList.propTypes = {
  getTransactionListAction: PropTypes.func.isRequired,
  getTransactionListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

PaymentList.defaultProps = {
  history: () => null
};

const mapStateToProps = state => ({
  TransactionList: state.paymentList,
  MerchantId: state.userProfile.userData.user.MerchantId,
  userType: state.userProfile.userData.user.UserType,
  masterData: state.masterData
})

const mapDispatchToProps = dispatch => ({
  getPlanetsListAction: data => dispatch(getPlanetsListAction(data)),
  getPlanetsListActionSuccess: list => dispatch(getPlanetsListActionSuccess(list)),
  getPlanetsListActionFailure: err => dispatch(getPlanetsListActionFailure(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);
