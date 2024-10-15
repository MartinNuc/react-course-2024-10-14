import { useUser } from "./user-context"

export function CurrentUserInfo() {
  const {user, timeLeft, logout} = useUser();

  return <div>
    <div>{user?.email} (expires in {timeLeft}s)</div>
    <button onClick={logout}>Logout</button>
  </div>
}