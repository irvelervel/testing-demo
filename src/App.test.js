import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import PokemonCard from './PokemonCard'

test('renders learn react link', () => {
  // lo scopo è verificare che il link alla documentazione sia presente nella pagina
  render(<App />)
  const linkElement = screen.getByText('Learn React')
  expect(linkElement).toBeTruthy()
})

test('renders pokemon card with props', () => {
  // lo scopo è verificare che il link alla documentazione sia presente nella pagina
  render(<PokemonCard title="Pikachu" imgSrc="http://placehold.it/300x200" />)

  const heading = screen.getByText('Pikachu')

  // const linkElement = screen.getByText('Learn React')
  expect(heading).toBeTruthy()
})
