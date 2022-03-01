import React from "react";
import GameSpock from './GameSpock';
import { fireEvent, render, screen } from '@testing-library/react'

describe('GameSpock', () => {
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
        render(<GameSpock currentPlayer={player} updatePlayer={() => {}}/>)
        // Assert
        expect(screen.getByText(/Game/i)).toBeInTheDocument()
        
    })
    it('clicking the gamebutton Rock calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<GameSpock currentPlayer={player} updatePlayer={mockHandler}/>)
        
        const button = component.getByAltText("Rock")
        
        fireEvent.click(button)
    
        expect(screen.getByText(/You: Rock/i)).toBeInTheDocument()
    })
    it('clicking the gamebutton Paper calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<GameSpock currentPlayer={player} updatePlayer={mockHandler}/>)
        
        const button = component.getByAltText("Paper")
        
        fireEvent.click(button)
    
        expect(screen.getByText(/You: Paper/i)).toBeInTheDocument()
    })
    it('clicking the gamebutton Scissors calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<GameSpock currentPlayer={player} updatePlayer={mockHandler}/>)
        
        const button = component.getByAltText("Scissors")
        
        fireEvent.click(button)
    
        expect(screen.getByText(/You: Scissors/i)).toBeInTheDocument()
    })
    it('clicking the gamebutton Lizard calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<GameSpock currentPlayer={player} updatePlayer={mockHandler}/>)
        
        const button = component.getByAltText("Lizard")
        
        fireEvent.click(button)
    
        expect(screen.getByText(/You: Lizard/i)).toBeInTheDocument()
    })
    it('clicking the gamebutton Spock calls the function passed as prop', () => {
        const mockHandler = jest.fn()
        const player = {
            name: "Sergio",
            gamesPlayed: 5,
            gamesWon: 3,
            gamesLost: 1
        }
        const component = render(<GameSpock currentPlayer={player} updatePlayer={mockHandler}/>)
        
        const button = component.getByAltText("Spock")
        
        fireEvent.click(button)
    
        expect(screen.getByText(/You: Spock/i)).toBeInTheDocument()
    })
})