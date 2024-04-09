import * as React from 'react';

import { ExpoExampleViewProps } from './ExpoExample.types';

export default function ExpoExampleView(props: ExpoExampleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
