import React from "react";
import Home from './Home';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Home', () => {
    it('renders appropriately', () => {
        // Arrange
        const title = "Rock Paper Scissors!"
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        // Act
        render(<Home currentPlayer={player} toggleStart={() => {}} playerName={player.name} setPlayerName={() => {}} createNewPlayer={() => {}}/>)
        // Assert
        expect(screen.getByText(/Rock Paper Scissors!/i)).toBeInTheDocument()
    })
    it('clicking the button Join calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component =  render(<Home currentPlayer={player} toggleStart={mockHandler} playerName={player.name} setPlayerName={() => {}} createNewPlayer={() => {}}/>)
        
        const button = component.getByText("Join")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
    it('image shown in the Home component', () => {
              
        const component =  render(<Home currentPlayer={{}} toggleStart={() => {}} playerName={""} setPlayerName={() => {}} createNewPlayer={() => {}}/>)
        
        expect(screen.getByAltText(/rock-paper-scissors/i)).toBeInTheDocument()    
        
    })
    it('placeholder shown in the input in Home component', () => {
              
        const component =  render(<Home currentPlayer={{}} toggleStart={() => {}} playerName={""} setPlayerName={() => {}} createNewPlayer={() => {}}/>)
        
        expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument()    
        
    })
    it('when you type an onChange event is triggered', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component =  render(<Home currentPlayer={player} toggleStart={() => {}} playerName={player.name} setPlayerName={mockHandler} createNewPlayer={() => {}}/>)
        
        const input = component.getByPlaceholderText("Enter your name")
        input.onChange = mockHandler
        fireEvent.change(input, {target:{value:'alex'}})
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
}) 