import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);

    this.state = {
      nome: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: '',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  handleHasTrunfo() {
    const { trunfo } = this.state;
    if (trunfo) {
      this.setState({
        trunfo: false,
        hasTrunfo: true,
      });
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { nome, description, attr1, attr2, attr3,
        image, rare } = this.state;

      const sum = Number(attr1) + Number(attr2) + Number(attr3);
      const limitSum = 210;
      const maxValue = 90;
      const minValue = 0;

      const validInput = nome && description && image && rare;
      const checkMaxMin = sum <= limitSum;

      const checkattr1 = (Number(attr1) <= maxValue && Number(attr1) >= minValue);
      const checkattr2 = (Number(attr2) <= maxValue && Number(attr2) >= minValue);
      const checkattr3 = (Number(attr3) <= maxValue && Number(attr3) >= minValue);
      const checkAllattr = checkattr1 && checkattr2 && checkattr3;
      this.setState({
        isSaveButtonDisabled: !(validInput && checkMaxMin && checkAllattr),
      });
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { nome, description, attr1, attr2, attr3,
      image, rare } = this.state;

    const infos = { nome, description, attr1, attr2, attr3, image, rare };

    this.setState((prevState) => ({
      cards: [...prevState.cards, infos],
      nome: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      isSaveButtonDisabled: true,
    }), this.handleHasTrunfo);
  }

  render() {
    const { nome, description, attr1, attr2, attr3, image, rare, trunfo,
      isSaveButtonDisabled, hasTrunfo, cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        {cards.map((card) => (
          <div key={ card.nome }>
            <Card
              cardName={ card.nome }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
