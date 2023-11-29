import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    open: true,
    port: 8000,
    headers: {
      // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
      'X-Frame-Options': 'DENY', // Stops your site being used as an iframe
      'X-XSS-Protection': '0', // XSS protection can create vulnerabilities, so we disable it
      'X-Content-Type-Options': 'nosniff', // Block MIME type sniffing
      'Referrer-Policy': 'strict-origin-when-cross-origin', // Protects from improper referrer data being sent
      // Adds HSTS options to your website, with a expiry time of 1 day
      // 'Strict-Transport-Security': 'max-age=86400; includeSubDomains',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'same-site',
      'Permissions-Policy': 'geolocation=(), camera=(), microphone=()', // TODO: Adjust if we need to use these
      'X-DNS-Prefetch-Control': 'on', // Not aware of any third party DNS lookups we need to do
    },
  },
  base: '/class-graph/',
});
