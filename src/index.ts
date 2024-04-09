import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoExample.web.ts
// and on native platforms to ExpoExample.ts
import ExpoExampleModule from './ExpoExampleModule';
import ExpoExampleView from './ExpoExampleView';
import { ChangeEventPayload, ExpoExampleViewProps } from './ExpoExample.types';

// Get the native constant value.
export const PI = ExpoExampleModule.PI;

export function hello(): string {
  return ExpoExampleModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoExampleModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoExampleModule ?? NativeModulesProxy.ExpoExample);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoExampleView, ExpoExampleViewProps, ChangeEventPayload };
