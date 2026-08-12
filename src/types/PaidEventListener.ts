import { RevenuePrecisions } from '../common/constants';

export type PaidEvent = {
  currency: string;
  precision: RevenuePrecisions;
  value: number;
  /**
   * Name of the ad network that won this impression, taken from the loaded
   * adapter response (`AdapterResponseInfo.getAdSourceName()` on Android,
   * `GADAdNetworkResponseInfo.adSourceName` on iOS). Examples: "AdMob Network",
   * "Mintegral", "Meta Audience Network".
   *
   * Undefined when the SDK reports no response info for the impression.
   */
  adSourceName?: string;
  /** Placement name configured on the winning network's side, if reported. */
  adSourceInstanceName?: string;
};

export type PaidEventListener = (event: PaidEvent) => void;
