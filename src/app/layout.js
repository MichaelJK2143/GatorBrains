export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import {Providers} from "./providers";

export default function RootLayout({ children }) {
 return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}