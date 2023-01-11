import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 10vh;
  background-color: #3c5aa6;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
  input {
    height: 50%;
    align-self: center;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
    background-color: #f6f6f6;
  }
`;

export const Navbar = ({ pokemonFilter }) => {
  return (
    <NavbarContainer>
      <img src='/pokedex.png' alt='pokedex' height='100%' />
      <input
        placeholder='Buscar'
        type='text'
        name='search'
        id='search'
        onChange={(e) => pokemonFilter(e.target.value)}
      />
    </NavbarContainer>
  );
};
