import { useState } from 'react';

import { applyTheme, colorSchemes } from '@/utils';

const patterns = [colorSchemes.light, colorSchemes.default, colorSchemes.dark, colorSchemes.default];

let mode = 1;

applyTheme(patterns[mode]);

export const ToggleBar = () => {
  const [checked, setCheckedState] = useState(false);

  const handleToggle = () => {
    mode = (mode + 1) % patterns.length;
    setCheckedState(!checked);
    applyTheme(patterns[mode]);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" onChange={handleToggle} className="sr-only peer" checked={checked} />
      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none ring-2 ring-primary dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
    </label>
  );
};
