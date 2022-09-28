// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { KOBOLE_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Kobole) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasPolkadot: EndpointOption[] = [

];

export const prodParasPolkadotCommon: EndpointOption[] = [

];

export const prodRelayPolkadot: EndpointOption = {
  dnslink: 'kobole',
  genesisHash: KOBOLE_GENESIS,
  info: 'kobole',
  text: 'Kobole',
  providers: {
    Muchatha: 'wss://digitaltv.co.ke:9945',
    LocalNode: 'ws://localhost:9946'
    // 'light client': 'light://substrate-connect/kobole'
  },
  teleport: [1000],
  linked: [
    ...prodParasPolkadotCommon,
    ...prodParasPolkadot
  ]
};
