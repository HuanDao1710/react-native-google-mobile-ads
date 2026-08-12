import type { TurboModule } from 'react-native';
import type { Double, Float, UnsafeObject, EventEmitter } from 'react-native/Libraries/Types/CodegenTypes';
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
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeGoogleMobileAdsNativeModule.d.ts.map