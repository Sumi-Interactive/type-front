import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import GridsList from '../parts/GridsPage/GridsList.react.js'
import GridEdit from '../parts/GridsPage/GridEdit.react.js'
import ImportGridsButton from '../parts/GridsPage/ImportGridsButton.react.js'
import ImportGridsPopup from '../parts/GridsPage/ImportGridsPopup.react.js'

import Logo from '../../../img/logo-black.png'

class GridsPage extends Component {
  render() {
    return (
      <div className="page__grids">
        <header>
          <div className="logo">
            <img src={Logo} />
          </div>
          <h1>1989-11-20</h1>
          <ImportGridsButton />
        </header>

        <GridsList
          data={this.props.data.gridsReducer.grids}
          history={this.props.history}
          dispatch={this.props.dispatch}
        />

        <GridEdit dispatch={this.props.dispatch} />

        <ImportGridsPopup {...this.props} />
      </div>
    )
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(GridsPage)
