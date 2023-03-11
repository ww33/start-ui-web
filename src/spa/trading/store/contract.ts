import { createStore, sample } from 'effector';

import { TContract, Tohlc } from '@/spa/trading/types';
import { getContractFx } from '@/spa/trading/store/effects/contractEndPoint';
import { evtLoadContracts } from '@/spa/trading/store/events';
import { setContracts } from '@/spa/trading/utils/idb';

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
