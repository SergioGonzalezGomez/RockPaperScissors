import React from "react";
import Main from './Main';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Main', () => {
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
        render(<Main toggleStart={() => {}} currentPlayer={() => {}} updatePlayer={() => {}} isSpock={false}/>)
        // Assert
        expect(screen.getByText(/Hi /i)).toBeInTheDocument()
    })
})