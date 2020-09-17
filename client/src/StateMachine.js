export default function StateMachine(state, payload) {
  return {
    ...state,
    ...payload
  };
}
