import React, { useState } from 'react';

function Votacao(){
  // Crie estados para armazenar os votos de cada opção
  const [votos, setVotos] = useState({
    voto1: 0,
    voto2: 0,
    voto3: 0,
    // Adicione mais opções conforme necessário
  });

  // Função para lidar com o voto de uma opção
  const voto1 = (voto1) => {
    setVotos((prevVotos) => ({
      ...prevVotos,
      [voto1]: prevVotos[voto1] + 1,
    }));
    console.log(voto1);
  };

  const voto2 = (voto2) => {
    setVotos((prevVotos) => ({
      ...prevVotos,
      [voto2]: prevVotos[voto2] + 1,
    }));
    console.log(voto2);
  };

  const voto3 = (voto3) => {
    setVotos((prevVotos) => ({
      ...prevVotos,
      [voto3]: prevVotos[voto3] + 1,
    }));
    console.log(voto3);
  };

  return (
    <div className="votacao-container">
      <h2>Qual sua marca de batom favorito?</h2>
      {/* Botões ou opções de seleção para cada opção de voto */}
      <div className="opcao">
        <button onClick={() => voto1('opcao1')}>Bruna Tavares</button>
        <span>Votos: {votos.voto1}</span>
      </div>
      <div className="opcao">
        <button onClick={() => voto2('opcao2')}>Mari Maria</button>
        <span>Votos: {votos.voto2}</span>
      </div>
      <div className="opcao">
        <button onClick={() => voto3('opcao3')}>Rare Beauty</button>
        <span>Votos: {votos.voto3}</span>
      </div>
      {/* Adicione mais opções conforme necessário */}
    </div>
  );
};

export default Votacao;