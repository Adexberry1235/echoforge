import { IntentsSDK } from '@defuse-protocol/intents-sdk';

export class EchoForgeIntents {
  constructor(accountId = 'echoforge.near') {
    this.accountId = accountId;
  }

  createPaymentIntent({ assetId = 'nep141:usdt.tether-token.near', amount = 1000000, destinationAddress = 'echoforge-treasury.near' } = {}) {
    console.log(`[NEAR-INTENTS] Constructing payment intent for ${amount} (${assetId}) -> ${destinationAddress}`);
    return {
      protocol: 'near-intents',
      assetId,
      amount: amount.toString(),
      destinationAddress,
      timestamp: Date.now()
    };
  }
}
