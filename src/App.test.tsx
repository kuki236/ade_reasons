import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the home screen with both main buttons', () => {
    render(<App />)

    expect(screen.getByText(/10 razones para estar con Kuki/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /10 razones para estar con kuki/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /seguir soltera/i })).toBeInTheDocument()
  })

  it('shows the first reason card when clicking the reasons button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /10 razones para estar con kuki/i }))

    expect(screen.getByText(/alguien que te cuide/i)).toBeInTheDocument()
    expect(screen.getByText(/1 \/ 10/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /siguiente razón/i })).toBeInTheDocument()
  })

  it('shows the second reason after clicking "Siguiente razon"', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /10 razones para estar con kuki/i }))
    await user.click(screen.getByRole('button', { name: /siguiente razón/i }))

    expect(screen.getByText(/2 \/ 10/i)).toBeInTheDocument()
    expect(screen.getByText(/alguien que te valore/i)).toBeInTheDocument()
  })

  it('returns to home when clicking back from cards', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /10 razones para estar con kuki/i }))
    await user.click(screen.getByRole('button', { name: /salir/i }))

    expect(screen.getByRole('button', { name: /10 razones para estar con kuki/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /seguir soltera/i })).toBeInTheDocument()
  })

  it('shows the result after all 10 reasons', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /10 razones para estar con kuki/i }))

    for (let i = 0; i < 9; i++) {
      await user.click(screen.getByRole('button', { name: /siguiente razón/i }))
    }

    await user.click(screen.getByRole('button', { name: /ver resultado/i }))

    expect(screen.getByText(/descubriste las 10 razones/i)).toBeInTheDocument()
    expect(screen.getByText(/kuki es el indicado/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /volver a empezar/i })).toBeInTheDocument()
  })

  it('shows the modal when clicking "Seguir soltera"', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /seguir soltera/i }))

    expect(screen.getByText(/mm\.\. no encuentro/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ver razones/i })).toBeInTheDocument()
  })

  it('closes the modal when clicking the close button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /seguir soltera/i }))
    await user.click(screen.getByRole('button', { name: /ver razones/i }))

    expect(screen.queryByText(/mm\.\. no encuentro/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /10 razones para estar con kuki/i })).toBeInTheDocument()
  })

  it('closes the modal when clicking the overlay background', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /seguir soltera/i }))

    const overlay = screen.getByTestId('modal-overlay')
    await user.click(overlay)

    expect(screen.queryByText(/mm\.\. no encuentro/i)).not.toBeInTheDocument()
  })

  it('renders the Hello Kitty logo SVG', () => {
    render(<App />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
