import type { Cycle } from "./reducer";

export const ActionTypes = {
  ADD_NEW_CYCLE: "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE: "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED: "MARK_CURRENT_CYCLE_AS_FINISHED",
} as const;

type ActionTypes = (typeof ActionTypes)[keyof typeof ActionTypes];

interface AddNewCycleAction {
  type: typeof ActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface InterruptCurrentCycleAction {
  type: typeof ActionTypes.INTERRUPT_CURRENT_CYCLE;
  payload: {
    activeCycleId: string | null;
  };
}

interface MarkCurrentCycleAsFinishedAction {
  type: typeof ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
  payload: {
    activeCycleId: string | null;
  };
}

export type Action =
  | AddNewCycleAction
  | InterruptCurrentCycleAction
  | MarkCurrentCycleAsFinishedAction;

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction(
  activeCycleId: string | null
): InterruptCurrentCycleAction {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {
      activeCycleId,
    },
  };
}

export function markCurrentCycleAsFinishedAction(
  activeCycleId: string | null
): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      activeCycleId,
    },
  };
}