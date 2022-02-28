import React from "react";
import Header from './Header';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Header', () => {
    it('renders appropriately', () => {
        // Arrange
        const salute = "Hi "
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        // Act
        render(<Header currentPlayer={player} toggleStart={() => {}} isSpock={false}/>)
        // Assert
        expect(screen.getByText(/Hi /i)).toBeInTheDocument()
        expect(screen.getByText(/Sergio/i)).toBeInTheDocument()
    })
    it('clicking the button Exit calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<Header currentPlayer={player} toggleStart={mockHandler} isSpock={false}/>)
        
        const button = component.getByAltText("exit")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
    it('clicking the button Ranking calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<Header currentPlayer={player} toggleStart={mockHandler} isSpock={false}/>)
        
        const button = component.getByAltText("ranking")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
    it('clicking the button Hand calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<Header currentPlayer={player} toggleStart={mockHandler} isSpock={true}/>)
        
        const button = component.getByAltText("paperbutton")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
    it('clicking the button Spock calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<Header currentPlayer={player} toggleStart={mockHandler} isSpock={false}/>)
        
        const button = component.getByAltText("spockbutton")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})