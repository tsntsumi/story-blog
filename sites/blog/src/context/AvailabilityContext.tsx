import type { Dispatch, FC } from "react"
import { useReducer, useContext, createContext } from "react"

import Day from "@/lib/day"
import type { DateTimeInterval } from "@/lib/types"

type ModalStatus = "open" | "busy" | "error" | "closed"

export type StateType = {
  /** Whether the booking modal is open or busy. */
  modal: ModalStatus
}

export type ActionType =
  | {
      type: "SET_SELECTED_DATE"
      /** Change the selected date. */
      payload: Day
    }
  | {
      type: "SET_TIMEZONE"
      /** Change the timezone. */
      payload: string
    }
  | {
      type: "SET_DURATION"
      /** Change the duration */
      payload: number
    }
  | {
      type: "SET_MODAL"
      /** Set modal status */
      payload: ModalStatus
    }
  | {
      type: "SET_SELECTED_TIME"
      /** Set the selected time interval. */
      payload: DateTimeInterval
    }

const StateSetContext = createContext<Dispatch<ActionType> | undefined>(
  undefined
)
const StateContext = createContext<StateType>({
  modal: "closed"
})

/**
 * The provider component that wraps the application, providing state and actions.
 *
 * @param {Omit<PageProps, "busy">} props.values - The initial state values.
 * @param {React.ReactNode} props.children - The children components.
 *
 * @returns {JSX.Element} The provider-wrapped application.
 */
export function StateProvider({
  children,
  values
}: {
  children: React.ReactNode
  values: Omit<any, "busy">
}): JSX.Element {
  // Get the initial state from the values passed in.
  const initialProps: StateType = getInitialState(values)

  // Create the reducer function.
  const [state, action] = useReducer(reducerFunction, initialProps)

  return (
    <StateContext.Provider value={state}>
      <StateSetContext.Provider value={action}>
        {children}
      </StateSetContext.Provider>
    </StateContext.Provider>
  )
}

/**
 * Return the initial state from the values passed in, applying sensible
 * defaults for values that are missing.
 *
 * @param {Omit<PageProps, "busy">} values The initial values to use.
 * @return {StateType} An object that can be used for the initial state.
 */
function getInitialState(values: Omit<any, "busy">): StateType {
  const timeZone =
    values.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone ?? "UTC"

  return {
    modal: "closed"
  }
}

/**
 * Returns the state and dispatch from the Provider context.
 *
 * @returns {{state: StateType, dispatch: Dispatch<ActionType>}} - The return
 */
export function useStateProvider(): {
  state: StateType
  dispatch: Dispatch<ActionType>
} {
  const state = useContext(StateContext)
  const dispatch = useContext(StateSetContext)

  if (!state || !dispatch) {
    throw new Error("Provider not found")
  }

  return { state, dispatch }
}

/**
 * A reducer function that handles state updates.
 * @param {StateType} state - The current state.
 * @param {ActionType} action - The action to apply.
 * @returns {StateType} The updated state.
 */
function reducerFunction(state: StateType, action: ActionType): StateType {
  let newState
  switch (action.type) {
    case "SET_SELECTED_DATE": {
      newState = { ...state, selectedDate: action.payload }
      break
    }
    case "SET_TIMEZONE": {
      newState = { ...state, timeZone: action.payload }
      break
    }
    case "SET_DURATION": {
      newState = {
        ...state,
        duration: action.payload
      }
      break
    }
    case "SET_MODAL": {
      newState = { ...state, modal: action.payload }
      break
    }
    case "SET_SELECTED_TIME": {
      newState = { ...state, selectedTime: action.payload }
      // If we're setting a selected time, assume we want to
      // open the modal to let the user confirm it.
      newState.modal = "open"
      break
    }
    default: {
      newState = state
    }
  }

  return newState
}
