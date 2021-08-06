const { render,screen } = require("@testing-library/react")
const { default: userEvent } = require("@testing-library/user-event")
const { Button } = require(".")

describe('<Button />',()=>{
    it('should render the button with the text "next"',()=>{
        render(<Button text="next"/>)

        expect.assertions(1)
        
        const button = screen.getByRole('button',{name: /next/i })

        expect(button).toBeInTheDocument()
    })

    it('should call function on Button Click',()=>{
        const fn = jest.fn()

        render(<Button text="next" onClick={fn} />)
        
        expect.assertions(1)

        const button = screen.getByRole('button',{name: /next/i })

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
    })
    it('should be disabled when disabled is true',()=>{
        render(<Button text="next" disabled={true} />)
        
        const button = screen.getByRole('button',{name: /next/i })

        expect(button).toBeDisabled()
    })
    it('should match snapshot',()=>{        
        const {container} = render(<Button text="next"  />)
        expect(container.firstChild).toMatchSnapshot();
    })

  })
  