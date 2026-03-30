# Network Name in Fullscreen Ads

Khi quảng cáo fullscreen được load thành công, bạn có thể nhận được tên mạng quảng cáo (network name) từ mediation adapter.

## Sử dụng với InterstitialAd

```typescript
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

// Lắng nghe sự kiện LOADED
interstitial.addAdEventListener(AdEventType.LOADED, (data) => {
  console.log('Ad loaded');
  if (data?.networkName) {
    console.log('Network adapter:', data.networkName);
    // Ví dụ output: "com.google.ads.mediation.admob.AdMobAdapter"
    // hoặc: "com.google.ads.mediation.facebook.FacebookAdapter"
  }
  interstitial.show();
});

interstitial.load();
```

## Sử dụng với RewardedAd

```typescript
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED);

// Lắng nghe sự kiện LOADED cho rewarded ad
rewarded.addAdEventListener(RewardedAdEventType.LOADED, (data) => {
  console.log('Rewarded ad loaded');
  console.log('Reward:', data.type, data.amount);
  
  if (data?.networkName) {
    console.log('Network adapter:', data.networkName);
  }
  
  rewarded.show();
});

rewarded.load();
```

## Sử dụng với AppOpenAd

```typescript
import { AppOpenAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

appOpenAd.addAdEventListener(AdEventType.LOADED, (data) => {
  console.log('App Open Ad loaded');
  if (data?.networkName) {
    console.log('Network adapter:', data.networkName);
  }
  appOpenAd.show();
});

appOpenAd.load();
```

## Sử dụng với Hooks

```typescript
import { useInterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { useEffect } from 'react';

function MyComponent() {
  const { 
    isLoaded, 
    load, 
    show,
    adEventsListener 
  } = useInterstitialAd(TestIds.INTERSTITIAL);

  useEffect(() => {
    const unsubscribe = adEventsListener((event) => {
      if (event.type === AdEventType.LOADED) {
        console.log('Ad loaded via hook');
        if (event.payload?.networkName) {
          console.log('Network adapter:', event.payload.networkName);
        }
      }
    });

    load();

    return unsubscribe;
  }, []);

  return (
    <Button 
      title="Show Ad" 
      onPress={show} 
      disabled={!isLoaded} 
    />
  );
}
```

## Network Names phổ biến

Một số network adapter class names bạn có thể nhận được:

- **AdMob**: `com.google.ads.mediation.admob.AdMobAdapter`
- **Facebook/Meta**: `com.google.ads.mediation.facebook.FacebookAdapter`
- **AppLovin**: `com.applovin.mediation.adapters.AppLovinMediationAdapter`
- **Unity Ads**: `com.google.ads.mediation.unity.UnityAdapter`
- **Vungle**: `com.google.ads.mediation.vungle.VungleMediationAdapter`
- **IronSource**: `com.google.ads.mediation.ironsource.IronSourceAdapter`

Network name giúp bạn:
- Theo dõi hiệu suất của từng ad network trong mediation
- Phân tích RPM, eCPM theo từng network
- Debug các vấn đề liên quan đến network cụ thể
- Tối ưu hóa mediation waterfall
