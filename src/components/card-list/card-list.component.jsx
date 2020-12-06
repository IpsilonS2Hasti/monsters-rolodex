import React from "react";
import { Card } from "../card/card.component";
import "./car-list.styles.css";

export const CardList = props => (
  <div className="card-list">
    {
      props.monsters.map(monster => <Card key={monster.id} monster={monster}/>) /* Keys are needed for React to refresh individual components of the same type */
    }
  </div>
);