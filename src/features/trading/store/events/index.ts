import { createEvent } from 'effector';
import { Tohlc } from "../../types";

export const evtChangeCoin = createEvent<string>();
export const evtLoadCandles = createEvent<unknown>();
export const evtSetCandles = createEvent<Tohlc[]>();
export const evtLoadContracts = createEvent<unknown>();

