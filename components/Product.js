
const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
    </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
     const weight = props[propName]
     if (!(weight > 80 && weight < 300)) {
       return new console.error('Weight should be a number between 80 and 300');
     }
   }
 };

module.exports = Product;
