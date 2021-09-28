import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StatusItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.status.date.toString()}</Table.Cell>
        <Table.Cell>{this.props.status.condition}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StatusItem.propTypes = {
  status: PropTypes.shape({
    name: PropTypes.string,
    condition: PropTypes.string,
    date: PropTypes.Date,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(StatusItem);
