import { createStore, sample } from 'effector';

import { TContract, Tohlc } from '../types';
import { getContractFx } from '../store/effects/contractEndPoint';
import { evtLoadContracts } from '../store/events';
import { setContracts } from '../utils/idb';

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
