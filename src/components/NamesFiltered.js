import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NamesFiltered extends Component {
  render() {
    const { onInputChange, nameFilter } = this.props;
    return (
      <label htmlFor="name-filter">
        Filtro por nome
        <input
          type="text"
          id="name-filter"
          name="nameFilter"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

NamesFiltered.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default NamesFiltered;
