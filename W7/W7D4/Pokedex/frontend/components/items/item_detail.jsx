import React from 'react';

class ItemDetail extends React.Component {
  render() {
    let name;
    let happiness;
    let price;
    const item = this.props.item;

    if (item) {
      name = item.name;
      happiness = item.happiness;
      price = item.price;
    }

    return (
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Happiness: {happiness}</li>
          <li>Price: {price}</li>
        </ul>
      </div>
    );
  }
}

export default ItemDetail;
