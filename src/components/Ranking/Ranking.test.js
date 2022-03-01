import React from "react";
import Ranking from './Ranking';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Ranking', () => {
    it('renders appropriately', () => {
        // Arrange
        const title = "Name"
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        // Act
        render(<Ranking  toggleStart={() => {}} playersData={[]} isSpock={false}/>)
        // Assert
        expect(screen.getByText(/Name/i)).toBeInTheDocument()
    })
    it('clicking the button Exit calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player1 = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const player2 = {
            name: "Alex",
            gamesPlayed: 8,
            gamesWon: 3,
            gamesLost: 5
        }
        const component = render(<Ranking toggleStart={mockHandler} playersData={[player1, player2]} isSpock={false}/>)
        
        const button = component.getByAltText("exit")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
    it('clicking the button Exit calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player1 = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const player2 = {
            name: "Alex",
            gamesPlayed: 8,
            gamesWon: 3,
            gamesLost: 5
        }
        const component = render(<Ranking toggleStart={mockHandler} playersData={[player1, player2]} isSpock={true}/>)
        
        const button = component.getByAltText("exit")
        fireEvent.click(button)
    
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
}) 