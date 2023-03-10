import { createEvent } from 'effector';

export const evtChangeCoin = createEvent<string>();
export const evtLoadCandles = createEvent<unknown>();
export const evtLoadContracts = createEvent<unknown>();

