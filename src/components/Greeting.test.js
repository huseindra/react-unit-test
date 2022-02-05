import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // arrange
        render(<Greeting />)
    
        // Act
        // do something/nothing
    
        // Assert
        const helloWorldTest = screen.getByText('Hello World')
        expect(helloWorldTest).toBeInTheDocument()
    })
    
    test('renders "It will be going long night" was not clicked', () => {
        // arrange
        render(<Greeting />)
    
        // Act
        // do something/nothing
    
        // Assert
        const longNightTest = screen.getByText('It will be going long night', {exact:false})
        expect(longNightTest).toBeInTheDocument()
    })

    test('renders "Change" was  clicked', () => {
        // arrange
        render(<Greeting />)
    
        // Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
    
        // Assert
        const changedTest = screen.getByText('Changed!')
        expect(changedTest).toBeInTheDocument()
    })

    test('doest not render "it will be going long night"', () => {
        // Arrange
        render(<Greeting />)

       // Act
       const buttonElement = screen.getByRole('button')
       userEvent.click(buttonElement)
   
       // Assert
       const outputElement = screen.queryByText('It will be going long night',{exact:false})
       expect(outputElement).toBeNull() // Act

    })
})

