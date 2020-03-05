import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class RentalListing extends React.Component {

    renderRental() {
        console.log(this.props)
        return this.props.rentals.map((rental, index) => {
            return (
                
                <RentalCard key={index}
                    colNum='col-md-3 col-xs-6'
                    rental={rental} />
            )
        })
    }

    componentWillMount(){
        this.props.dispatch(actions.fetchRentals())
    }

    render() {
        return (
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <RentalList rentals={this.props.rentals}/>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing)