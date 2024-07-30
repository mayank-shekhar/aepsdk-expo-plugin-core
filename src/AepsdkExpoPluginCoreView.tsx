import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AepsdkExpoPluginCoreViewProps } from './AepsdkExpoPluginCore.types';

const NativeView: React.ComponentType<AepsdkExpoPluginCoreViewProps> =
  requireNativeViewManager('AepsdkExpoPluginCore');

export default function AepsdkExpoPluginCoreView(props: AepsdkExpoPluginCoreViewProps) {
  return <NativeView {...props} />;
}
