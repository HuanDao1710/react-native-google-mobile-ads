/**
 * Data returned when an ad is loaded.
 */
export interface AdLoadedEvent {
  /**
   * The network name/adapter class name from mediation.
   * This is the ad network that won the mediation waterfall.
   */
  networkName?: string;
}

/**
 * Data returned when a rewarded ad is loaded, extends AdLoadedEvent with reward information.
 */
export interface RewardedAdLoadedEvent extends AdLoadedEvent {
  /**
   * The reward name, e.g. 'coins', 'diamonds'.
   */
  type: string;

  /**
   * The number value of the reward, e.g. 10
   */
  amount: number;
}
