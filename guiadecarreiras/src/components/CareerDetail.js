import React from 'react';

const CareerDetail = ({ profession }) => {
  if (!profession) {
    return <div>Selecione uma profissão para ver os detalhes.</div>;
  }

  return (
    <div>
      <h2>{profession.name}</h2>
      <p>{profession.description}</p>
    </div>
  );
};

export default CareerDetail;
