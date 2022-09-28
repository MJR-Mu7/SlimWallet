// Copyright 2017-2022 @polkadot/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';

import { KOBOLE_GENESIS } from '@polkadot/apps-config';
import { TypeRegistry } from '@polkadot/types/create';

export function aGenesisHash (): Hash {
  return new TypeRegistry().createType('Hash', KOBOLE_GENESIS);
}

export function aHash (): Hash {
  return new TypeRegistry().createType('Hash');
}
