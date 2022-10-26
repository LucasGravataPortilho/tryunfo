import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <h1>Adicione nova carta</h1>
        <form>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              id="attr1"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              id="attr2"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              id="attr3"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              name="rare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
              value={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
          <button
            disabled={ isSaveButtonDisabled }
            type="submit"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
