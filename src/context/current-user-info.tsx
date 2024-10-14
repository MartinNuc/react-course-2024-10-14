import { useUser } from "./user-context"

export function CurrentUserInfo() {
  const {user, logout} = useUser();

  return <div>
    <div>{user?.email}</div>
    <button onClick={logout}>Logout</button>
  </div>
}