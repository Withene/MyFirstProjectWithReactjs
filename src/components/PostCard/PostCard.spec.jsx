import { render, screen } from "@testing-library/react"
import { PostCard } from "."

const mock = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: "img/img.png"
}
describe('PostCard', () => {
    it('should render the button with the text', () => {
  
    render(<PostCard {...mock} />)
        expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', mock.cover);
        expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const {container} = render(<PostCard {...mock} />)
        expect(container.firstChild).toMatchSnapshot();

    });

})