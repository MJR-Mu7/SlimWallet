// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { WESTEND_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Kobole) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasWestend: EndpointOption[] = [
  {
    info: '',
    homepage: '',
    paraId: 2085,
    text: '',
    providers: {
      '': 'wss://'
    }
  }
];

export const testParasWestendCommon: EndpointOption[] = [];

export const testRelayWestend: EndpointOption = {
  dnslink: '',
  genesisHash: WESTEND_GENESIS,
  info: '',
  text: '',
  providers: {
    Metro: 'wss://',
    Sterling: 'wss://'
  // 'light client': 'light://'
  },
  teleport: [1000],
  linked: [
    ...testParasWestendCommon,
    ...testParasWestend
  ]
};
