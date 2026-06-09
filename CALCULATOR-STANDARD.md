# Calculator Standard Guidelines

When building a new calculator or estimator for Honeybee (and the broader Rural Utility Cost network), all components and logic must adhere to the following standards:

## 1. Compliance and Disclaimers
- **Inline Disclaimer**: Every interactive calculator must include the `<Disclaimer type="inline" />` component directly below the result output area, prior to the footer.
- **Wording**: Do not invent new legal text. If a calculator requires specific risk notices, pass an `overrideText` prop to the `Disclaimer` component, but keep it concise.
- **Footer**: Ensure the global `Footer` component (which contains the footer-style disclaimer and links) is visible at the bottom of the page.

## 2. Layout and Responsive Design
- **Mobile First**: Inputs must be stacked vertically on smaller screens (`flex-col`) and may transition to grid or horizontal layouts on desktop.
- **Touch Targets**: All inputs, toggles, and buttons must be a minimum of 48px in height/width to meet mobile accessibility standards.
- **Glass Card Aesthetics**: Wrap the primary calculator interface in a card using the `glass-card` class (e.g., `className="glass-card rounded-2xl p-6 sm:p-8"`).

## 3. Inputs and Validation
- **Clarity**: Use clear, concise labels and provide helpful tooltips or placeholder text (e.g., "Number of Hives").
- **State Management**: Use React's `useState` for simple local state, or `useReducer` for complex calculators with many interdependent inputs.
- **Validation**: Prevent negative numbers for physical counts (like hives or frames). Use standard HTML5 input validations (`min="0"`, `type="number"`) paired with JavaScript boundary checks.

## 4. Result Presentation
- **Dynamic Calculation**: Results should ideally update dynamically as the user types, rather than requiring a "Calculate" button, unless the calculation is highly intensive.
- **Emphasis**: Display the primary outcome (e.g., "Estimated Honey Yield") prominently using large typography and primary colors (e.g., `text-amber-600`).
- **Formatting**: Format numbers elegantly (e.g., `toLocaleString()` for large numbers or currency).

## 5. Analytics
- Bind `gtag` events to meaningful user actions within the calculator.
- Example: Track when a user actively changes an input or views a final calculation result.

## 6. Example Skeleton
```tsx
import { useState } from 'react';
import { Disclaimer } from '../components/Disclaimer';
import { cn } from '../lib/utils';

export function ExampleCalculator() {
  const [hives, setHives] = useState(1);
  const yieldPerHive = 50; // lbs

  const totalYield = hives * yieldPerHive;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Honey Yield Estimator</h2>
        
        {/* Input Area */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Number of Active Hives
          </label>
          <input 
            type="number"
            min="0"
            value={hives}
            onChange={(e) => setHives(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[48px]"
          />
        </div>
        
        {/* Output Area */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
          <p className="text-sm text-slate-500 font-medium mb-1">Estimated Annual Yield</p>
          <p className="text-4xl font-bold text-amber-600 tracking-tight">
            {totalYield.toLocaleString()} <span className="text-lg text-slate-400 font-normal">lbs</span>
          </p>
        </div>

        {/* Mandatory Inline Disclaimer */}
        <Disclaimer type="inline" />
      </div>
    </div>
  );
}
```
