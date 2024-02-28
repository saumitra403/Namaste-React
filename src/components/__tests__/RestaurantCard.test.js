import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Korean Delicacies");

    expect(name).toBeInTheDocument();
})

it("should render RestaurantCard component with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})