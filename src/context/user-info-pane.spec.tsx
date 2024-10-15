import { fireEvent, render, screen } from "@testing-library/react";
import { UserInfoPane } from "./user-info-pane";
import { UserContextProvider } from "./user-context";

function setup() {

  function renderComponent() {
    render(
      <UserContextProvider>
        <UserInfoPane />
      </UserContextProvider>
    );
  }

  function getEmailInput() {
    return screen.getByPlaceholderText(/email/i);
  }

  function fillOutEmail(email: string) {
    const emailInput = getEmailInput();
    fireEvent.change(emailInput, { target: { value: email } });
  }

  function pressLoginButton() {
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
  }

  function pressLogoutButton() {
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);
  }


  return {
    render: renderComponent,
    getEmailInput,
    fillOutEmail,
    pressLoginButton,
    pressLogoutButton
  }
}

describe("UserInfoPane", () => {
  it("shows login form", () => {
    const {render, getEmailInput} = setup();
    render();
    expect(getEmailInput()).toBeInTheDocument();
  });

  it("logs in user and shows current user info", async () => {
    const {render, fillOutEmail, pressLoginButton} = setup();

    render();
    fillOutEmail('martin@nuc.cz');

    pressLoginButton();

    expect(await screen.findByText("martin@nuc.cz")).toBeInTheDocument();
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });

  it("logs out the user", () => {
    const {render, getEmailInput, fillOutEmail, pressLoginButton, pressLogoutButton} = setup();
    render();
    fillOutEmail('martin@nuc.cz');
    pressLoginButton();
    pressLogoutButton();
    expect(getEmailInput()).toBeInTheDocument();
  });
});
