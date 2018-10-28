import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const mapStateToProps = state => {
	return {
		users: state.users
	}
};

class HomePage extends Component {
	render() {
		return (
			<>
				<BootstrapTable  striped hover>
					<TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
					<TableHeaderColumn dataField='FirstName'>First Name</TableHeaderColumn>
					<TableHeaderColumn dataField='LastName'>Last Name</TableHeaderColumn>
					<TableHeaderColumn dataField='Email'>Email</TableHeaderColumn>
					<TableHeaderColumn dataField='Password'>Password</TableHeaderColumn>
				</BootstrapTable>
				<Link to="/login"><Button>Logout</Button></Link>
			</>
		)
	}
}

export default connect(mapStateToProps)(HomePage)