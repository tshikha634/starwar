import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Input, Row, Col, CardBody, Table, Card, Button } from 'reactstrap'
import { getPlanetsListAction, getPlanetsListActionSuccess, getPlanetsListActionFailure } from '../../Common/actions/paymentHistoryAction'
import SearchService from '../../Services/searchPlanets/searchPlanets'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore } from 'react-toasts'

const style = {
  'word-break': 'break-all',
  'align-items': 'center'
}

export class SearchPlanets extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // InvoiceNumber: '',
      // disabled: true,
      // InvoiceId: null,
      // MerchantId: '',
      // model: false,
      // isDelete: false,
      // isCopied: false,
      // status: '',
      // isCanceled: false,
      // isPaid: false,
      // isOpen: false,
      // isLoading: false,
      // search: {},
      // FirstName: '',
      // TotalAmount: '',
      // Title: '',
      // DueDate: '',
      // limit: 10,
      // offset: 1,
      // permission: '',
      // createdDateTimeSort: 'desc',
      // hyperClassName: '',
      // customerName: '',
      // isLoader: false
    }
    // bind context to methods
    this.SearchService = new SearchService()
    // this.onChangePage = this.onChangePage.bind(this)
    this.getPlanetList = this.getPlanetList.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
    this.onClear = this.onClear.bind(this)
    this.onChange = this.onChange.bind(this)
    this.renderPlanetList = this.renderPlanetList.bind(this)
  }
  componentDidMount() {
    const fields = {
      // InvoiceNumber: this.state.InvoiceNumber,
      // InvoiceId: this.state.InvoiceId,
      // FirstName: this.state.FirstName,
      // TotalAmount: this.state.TotalAmount,
      // status: this.state.status,
      // DueDate: this.state.DueDate,
      // offset: this.state.offset,
      // limit: this.state.limit,
      // MerchantID: this.props.MerchantId,
      // createdDateTimeSort: this.state.createdDateTimeSort
    }
    this.getPlanetList(fields)
  }
  async getPlanetList(param) {
    // const MerchantID = this.props.MerchantId
    try {
      this.props.getPlanetsListAction();
        let param = `limit=${this.state.limit}&offset=${this.state.offset}`
        let PlanetList = await this.SearchService.getPlanetsByName(param);
      this.props.getPlanetsListActionSuccess(PlanetList);
    } catch (err) {
      this.props.getPlanetsListActionFailure(err);
    }
  }
  onChange = (event) => {
    this.setState({
      status: event.target.value
    })
  }
  renderPlanetList(){

  }
  render() {
    let progressbarWidth = '0%'
    if(this.props.InvoiceList && this.props.InvoiceList.data) {
      progressbarWidth = parseInt(this.calculatePercentage(this.props.InvoiceList.data.overDuedateAmount, this.props.InvoiceList.data.underDueDateAmount))
      console.log("progressbarWidth", parseInt(progressbarWidth))
    }
  
    const MerchantID = this.props.MerchantId
    // Error handling if list API fails 
    if (this.props.InvoiceList.error) {
      return 'Oops something went wrong...!!!';
    }
    return (
      <div class='container'>
        <Loader loading={this.state.isLoader}> </Loader>
              <Card className='borderNone'>
                <CardBody>
                  <div className='table-responsive'>
                    <Table class='table table-bordered table-inverse'>
                      <thead>
                        <tr>
                          <th width='10%'>
                            <Input
                              className='formControl'
                              type='text'
                              id='InvoiceNumber'
                              name='InvoiceNumber'
                              onChange={this.binder.onChange}
                              value={this.state.InvoiceNumber}
                              placeholder='Number'
                            />
                          </th>
                       
                   
                          <th width='25%'>
                            <Button
                              id='searchClick'
                              onClick={this.onSearchClick}
                              className='site-button wrapper'
                            >
                              Search
                          </Button>
                            <Button
                              id='clearSearch'
                              onClick={this.onClear}
                              className='site-button wrapper'
                            >
                              Clear
                   </Button>
                          </th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th width='10%'>Invoice Number</th>
                          {/* Permission for Cpay User Only */}
                          {!MerchantID ?
                            <th width='9%'>Merchant ID</th>
                            : null}
                          <th width='15%'>Title </th>
                          <th width='12%'>Amount</th>
                          <th width='11%'>Due Date</th>
                          <th width='11%'>Status</th>
                          <th width='11%'>Paid Date</th>
                          <th width='25%'>
                          </th>
                        </tr>
                      </thead>
                      {this.props.InvoiceList.data.rows
                        && this.props.InvoiceList.data.rows.length ?
                        <tbody>{this.renderInvoiceList()}</tbody> : null}
                    </Table>
                    <div>
                      {this.props.InvoiceList.data.rows && this.props.InvoiceList.data.rows.length ? (
                        this.renderInvoiceList
                      ) : (
                          <p>No result found.</p>
                        )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}


SearchPlanets.propTypes = {
  getPlanetsListAction: PropTypes.func.isRequired,
  getPlanetsListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

SearchPlanets.defaultProps = {
  history: () => null
};

const mapStateToProps = state => ({
  searchPlanet: state.searchPlanet,
})

const mapDispatchToProps = dispatch => ({
  getPlanetsListAction: data => dispatch(getPlanetsListAction(data)),
  getPlanetsListActionSuccess: list => dispatch(getPlanetsListActionSuccess(list)),
  getPlanetsListActionFailure: err => dispatch(getPlanetsListActionFailure(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanets);
