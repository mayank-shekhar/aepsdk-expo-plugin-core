import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to AepsdkExpoPluginCore.web.ts
// and on native platforms to AepsdkExpoPluginCore.ts
import AepsdkExpoPluginCoreModule from './AepsdkExpoPluginCoreModule';
import AepsdkExpoPluginCoreView from './AepsdkExpoPluginCoreView';
import { ChangeEventPayload, AepsdkExpoPluginCoreViewProps } from './AepsdkExpoPluginCore.types';

// Get the native constant value.
export const PI = AepsdkExpoPluginCoreModule.PI;

export function hello(): string {
  return AepsdkExpoPluginCoreModule.hello();
}

export async function setValueAsync(value: string) {
  return await AepsdkExpoPluginCoreModule.setValueAsync(value);
}

const emitter = new EventEmitter(AepsdkExpoPluginCoreModule ?? NativeModulesProxy.AepsdkExpoPluginCore);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AepsdkExpoPluginCoreView, AepsdkExpoPluginCoreViewProps, ChangeEventPayload };
