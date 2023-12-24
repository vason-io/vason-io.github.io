import React from 'react';

export default function DummySpan({ children, color }) {
  return (
    <span
      style={{
        color: color,
      }}
    >
      {children}
    </span>
  );
}
