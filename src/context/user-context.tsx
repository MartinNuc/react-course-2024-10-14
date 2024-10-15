import React, { PropsWithChildren, useContext, useEffect, useReducer, useState } from "react";

type User = {
  name: string;
  email: string;
}

type UserContextType = {
  user: User | null,
  timeLeft: number;
  login: (user: User) => void;
  logout: () => void;
}

type State = {
  user: User | null;
  timeLeft: number
}

type LoginAction = { type: 'LoginAction', payload: User};
type LogoutAction = { type: 'LogoutAction'};
type SessionTickAction = {type: 'SessionTickAction'}
type Action = LoginAction | LogoutAction | SessionTickAction;

function reducer(state: State, action: Action) {
  switch(action.type) {
    case "LoginAction":
      return {
        user: action.payload,
        timeLeft: 10
      }
    case "LogoutAction":
      return {
        user: null,
        timeLeft: 0
      }
    case "SessionTickAction":
      if (state.timeLeft <= 1) {
        return {
          user: null,
          timeLeft: 0
        }
      }

      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    default:
      return state;
  }
}

const UserContext = React.createContext<UserContextType>({} as unknown as UserContextType);

export function UserContextProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, { user: null, timeLeft: 0 });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      dispatch({type: "SessionTickAction"});
    }, 1000);

    return () => clearInterval(intervalRef);
  }, [])

  function login(user: User) {
    dispatch({type: "LoginAction", payload: user});
  }

  function logout() {
    dispatch({type: "LogoutAction"});
  }

  return <UserContext.Provider value={{
    user: state.user,
    timeLeft: state.timeLeft,
    login,
    logout
  }}>
    {children}
  </UserContext.Provider>

}

export const useUser = () => useContext(UserContext);