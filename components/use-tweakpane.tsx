'use client';

import { useEffect, useRef, useState } from 'react';
import { Pane } from 'tweakpane';

export interface TweakpaneControl {
  key: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  type?: 'number' | 'boolean' | 'string';
  options?: Record<string, unknown>;
  format?: (value: unknown) => string;
}

export interface TweakpaneConfig {
  title?: string;
  controls: TweakpaneControl[];
}

export interface TweakpaneValues {
  [key: string]: unknown;
}

export type AnimationParams = TweakpaneValues;

export function useTweakpane<T extends TweakpaneValues>(
  initialValues: T,
  config: TweakpaneConfig
): T {
  const paneRef = useRef<Pane | null>(null);
  const paneContainerRef = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<T>(initialValues);
  const configRef = useRef(config);

  useEffect(() => {
    configRef.current = config;
  }, [config]);

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
      title: configRef.current.title || 'Animation Controls' 
    });
    paneRef.current = pane;

    // Create a local mirror object for Tweakpane bindings
    const bindings: Record<string, unknown> = {};
    
    // Initialize bindings with current values
    configRef.current.controls.forEach((control) => {
      bindings[control.key] = values[control.key];
    });

    // Add controls to the pane
    configRef.current.controls.forEach((control) => {
      const controlConfig: Record<string, unknown> = {
        label: control.label,
      };

      if (control.type === 'boolean') {
        controlConfig.type = 'boolean';
      } else if (control.type === 'string') {
        controlConfig.type = 'select';
        controlConfig.options = control.options;
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
      
      binding.on('change', (ev: { value: unknown; last?: boolean }) => {
        setValues((prev) => ({
          ...prev,
          [control.key]: ev.value as never,
        }));
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
  }, []);

  return values;
}