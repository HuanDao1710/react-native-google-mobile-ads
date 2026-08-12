/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type {
  Double,
  Float,
  UnsafeObject,
  EventEmitter,
} from 'react-native/Libraries/Types/CodegenTypes';

export type NativeAdProps = {
  responseId: string;
  advertiser: string | null;
  body: string;
  callToAction: string;
  headline: string;
  price: string | null;
  store: string | null;
  starRating: Double | null;
  icon: NativeAdImage | null;
  images: Array<NativeAdImage> | null;
  mediaContent: NativeMediaContent;
  extras: UnsafeObject | null;
  // App-specific: winning mediation network, read off ResponseInfo at load time so
  // callers can adapt the ad layout before the impression is recorded (the paid
  // event carries the same data but only fires after rendering).
  adSourceName?: string;
  adSourceInstanceName?: string;
};

export type NativeAdImage = {
  url: string;
  scale: Double;
};

export type NativeMediaContent = {
  aspectRatio: Float;
  hasVideoContent: boolean;
  duration: Float;
};

export type NativeAdEventPayload = {
  responseId: string;
  type: string;
};

export type NativeAdPaidEventPayload = {
  value: number;
  precision: number;
  // Key emitted by both platforms is "currency" — see ReactNativeGoogleMobileAdsNativeModule.kt
  // and RNGoogleMobileAdsNativeModule.mm. It was previously declared as `currencyCode` here,
  // which never matched the runtime payload.
  currency: string;
  /** Winning ad network name from the loaded adapter response, if reported. */
  adSourceName?: string;
  /** Placement name configured on the winning network's side, if reported. */
  adSourceInstanceName?: string;
};

export interface Spec extends TurboModule {
  load(adUnitId: string, requestOptions: UnsafeObject): Promise<NativeAdProps>;
  destroy(responseId: string): void;
  readonly onAdEvent: EventEmitter<NativeAdEventPayload>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNGoogleMobileAdsNativeModule');
