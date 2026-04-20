interface Window {
  crmTracker?: {
    track: (event: string, properties?: Record<string, unknown>) => void;
    identify: (email: string, name?: string, phone?: string, city?: string) => void;
  };
}
