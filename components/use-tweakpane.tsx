'use client';

import { useEffect, useRef } from 'react';
import { Pane } from 'tweakpane';

export interface TweakpaneControl {
  key: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  type?: 'number' | 'boolean' | 'string';
  options?: Record<string, any>;
  format?: (value: any) => string;
}

export interface TweakpaneConfig {
  title?: string;
  controls: TweakpaneControl[];
}

export interface TweakpaneValues {
  [key: string]: any;
}

export type AnimationParams = TweakpaneValues;

export function useTweakpane<T extends TweakpaneValues>(
  initialValues: T,
  config: TweakpaneConfig
): T {
  const paneRef = useRef<Pane | null>(null);
  const paneContainerRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<T>(initialValues);

  useEffect(() => {
    // Create a fixed container for the pane
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '16px';
    container.style.right = '16px';
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'auto';
    document.body.appendChild(container);
    paneContainerRef.current = container;

    const pane = new Pane({ 
      container, 
      title: config.title || 'Animation Controls' 
    });
    paneRef.current = pane;

    // Create a local mirror object for Tweakpane bindings
    const bindings: any = {};
    
    // Initialize bindings with current values
    config.controls.forEach((control) => {
      bindings[control.key] = valuesRef.current[control.key];
    });

    // Add controls to the pane
    config.controls.forEach((control) => {
      const controlConfig: any = {
        label: control.label,
      };

      if (control.type === 'boolean') {
        controlConfig.type = 'boolean';
      } else if (control.type === 'number' || (control.min !== undefined || control.max !== undefined)) {
        if (control.min !== undefined) controlConfig.min = control.min;
        if (control.max !== undefined) controlConfig.max = control.max;
        if (control.step !== undefined) controlConfig.step = control.step;
        if (control.format) controlConfig.format = control.format;
      }

      // Add any additional options
      if (control.options) {
        Object.assign(controlConfig, control.options);
      }

      const binding = pane.addBinding(bindings, control.key, controlConfig);
      
      binding.on('change', (ev: { value: any; last?: boolean }) => {
        valuesRef.current = {
          ...valuesRef.current,
          [control.key]: ev.value,
        };
      });
    });

    // Cleanup function
    return () => {
      try {
        paneRef.current?.dispose();
      } finally {
        paneRef.current = null;
        paneContainerRef.current?.parentNode?.removeChild(
          paneContainerRef.current
        );
        paneContainerRef.current = null;
      }
    };
  }, [config]);

  return valuesRef.current;
}