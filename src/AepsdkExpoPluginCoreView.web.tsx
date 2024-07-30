import * as React from 'react';

import { AepsdkExpoPluginCoreViewProps } from './AepsdkExpoPluginCore.types';

export default function AepsdkExpoPluginCoreView(props: AepsdkExpoPluginCoreViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
