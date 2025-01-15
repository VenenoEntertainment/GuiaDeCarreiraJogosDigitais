import React from 'react';

const CareerList = ({ careers, onSelectCareer }) => {
  return (
    <div>
      {careers.map((career) => (
        <div key={career.area}>
          <h2>{career.area}</h2>
          <ul>
            {career.professions.map((profession) => (
              <li key={profession.id} onClick={() => onSelectCareer(profession)}>
                <h3>{profession.name}</h3>
                <p>{profession.description}</p>
                <p><strong>Faixa Salarial:</strong> {profession.salaryRange}</p>
                <p><strong>Principais Graduações:</strong> {profession.mainDegrees.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
