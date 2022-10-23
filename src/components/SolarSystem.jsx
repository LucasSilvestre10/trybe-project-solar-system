import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PLanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PLanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
