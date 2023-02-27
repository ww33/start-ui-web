import { createStore, sample } from 'effector';
import {  evtLoadContracts } from './events'
import { getContractFx } from './effects/contract';
import { TContract, Tohlc } from '../types';

export const $contracts = createStore<TContract[]>([]);
$contracts.watch(e => console.log(e.length >0 ? e[0]:{}))

sample({
  clock: getContractFx.done,
  fn: ({result}) => (result),
  target: $contracts,
});

sample({
  clock: evtLoadContracts,
  target: getContractFx,
});


