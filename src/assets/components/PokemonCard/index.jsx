import styled from 'styled-components';

export const PokemonsContainer = styled.div`
  margin: auto;
  width: 60%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  overflow-y: scroll;
`;

export const CardContainer = styled.div`
  width: 150px;
  height: 250px;
  background-color: rgba(224, 224, 224, 0.8);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

export const PokeId = styled.h4`
  display: flex;
  justify-content: flex-end;
`;

export const PokeName = styled.h3`
  display: flex;
  justify-content: center;
`;

export const PokeType = styled.span`
  display: flex;
  justify-content: center;
`;

export const PokemonCard = ({ name, image, id, types }) => {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + ' | ' + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <CardContainer>
      <PokeId>#{id}</PokeId>
      <img src={image} width='100%' />
      <PokeName>{name}</PokeName>
      <PokeType>{typeHandler()}</PokeType>
    </CardContainer>
  );
};
