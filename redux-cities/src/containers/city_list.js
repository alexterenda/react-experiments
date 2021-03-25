import React, { Component } from "react";

import City from "./city";

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return <City key={city.name} city={city} />;
    });
  }

  render() {
    return <ul className="list-group cities">{this.renderList()}</ul>;
  }
}

export default CityList;
