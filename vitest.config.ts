/// <reference types="vitest" />
//  // / <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
	name: 'fast',

    globals: true,
    include: [ ],
    environment: "node",
    bail: 0,

  browser: { 
	enabled: false, 
	name: "chromium", 
			},
  },
});

// vim: syn=typescript nospell

