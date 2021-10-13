import { render, screen } from '@testing-library/react';
import Landing from "../src/components/Landing/Landing";
import Detail from "../src/components/DetailRecipe/Detail";
import { MemoryRouter } from 'react-router-dom';

test('Rederiza texto de bienvenida', () => {
  render(<Landing />, { wrapper: MemoryRouter })
  
  expect(screen.getByText('Home')).toBeInTheDocument()
})
