import React, { useState } from 'react'
import areas from './dados.json';
import './career.css';

function Career() {
    const [selectedArea, setSelectedArea] = useState(areas.areas[0]);

    const handleChange = (event) => {
      const selectedTitle = event.target.value;
      const area = areas.areas.find(area => area.titulo === selectedTitle);
      setSelectedArea(area);
    };
  
    return (
      <div className="areas-de-atuacao">
        <label htmlFor="area-select">Selecione uma Área de Atuação:</label>
        <select id="area-select" onChange={handleChange}>
          {areas.areas.map(area => (
            <option key={area.titulo} value={area.titulo}>
              {area.titulo}
            </option>
          ))}
        </select>
        {selectedArea && (
          <div className="area-detalhes">
            <h1>{selectedArea.titulo}</h1>
            <p>{selectedArea.descricao}</p>
            <h2>Principais Habilidades</h2>
            <ul>
              {selectedArea.habilidades.map((habilidade, index) => (
                <li key={index}>{habilidade}</li>
              ))}
            </ul>
            <h2>Média Salarial</h2>
            <p>{selectedArea.salario_medio}</p>
            <h2>Faixa Salarial</h2>
            <p>{selectedArea.faixa_salarial}</p>
            <h2>Livros Didáticos</h2>
            <p>{selectedArea.livros_didaticos}</p>
            <h2>{selectedArea.graduacao1.titulo}</h2>
            <ul>
              {selectedArea.graduacao1.opcoes.map((graduacao, index) => (
                <li key={index}>{graduacao}</li>
              ))}
            </ul>
            <h2>{selectedArea.graduacao2.titulo}</h2>
            <ul>
              {selectedArea.graduacao2.opcoes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2>{selectedArea.graduacao3.titulo}</h2>
            <ul>
              {selectedArea.graduacao3.opcoes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default Career;
