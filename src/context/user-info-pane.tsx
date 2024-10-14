import { CurrentUserInfo } from "./current-user-info";
import { LoginForm } from "./login-form";
import { useUser } from "./user-context";

export function UserInfoPane() {
  const { user } = useUser();

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}