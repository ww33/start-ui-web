import { createStore, sample } from 'effector';

import { TContract, Tohlc } from '../types';
import { getContractFx } from './effects/contractEffects';
import { evtLoadContracts } from './events';
import { setContracts } from './utils/idb';

export const $contracts = createStore<TContract[]>([]);
$contracts.watch(async (e) => {
  if (e.length > 0) {
    const result = await setContracts(e);
    console.log({ result });
  }
});

sample({
  clock: getContractFx.done,
  fn: ({ result }) => result,
  target: $contracts,
});

sample({
  clock: evtLoadContracts,
  target: getContractFx,
});
