import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoExampleViewProps } from './ExpoExample.types';

const NativeView: React.ComponentType<ExpoExampleViewProps> =
  requireNativeViewManager('ExpoExample');

export default function ExpoExampleView(props: ExpoExampleViewProps) {
  return <NativeView {...props} />;
}
