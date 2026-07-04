import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tea Terrace Vythiri - Luxury Resort in Wayanad, Kerala',
  description: 'Discover luxury wellness at Tea Terrace Vythiri, a boutique resort nestled in tea gardens on the misty hillsides of Kerala.',
  generator: 'Tea Terrace Vythiri',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF8F5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} bg-background`}>
      <head>
        <title>Tea Terrace Vythiri - Luxury Resort in Wayanad, Kerala</title>
        <meta name="description" content="Discover luxury wellness at Tea Terrace Vythiri, a boutique resort nestled in tea gardens on the misty hillsides of Kerala." />
        <link rel="canonical" href="https://yourdomain.com/tea-terrace-vythiri-resort" />


        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tea Terrace Vythiri - Luxury Resort in Wayanad, Kerala" />
        <meta property="og:description" content="Discover luxury wellness at Tea Terrace Vythiri, a boutique resort nestled in tea gardens on the misty hillsides of Kerala." />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaaQExYQCwnjbhVBJjyx6iRi0Zj3Cu.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tea Terrace Vythiri - Luxury Resort in Wayanad, Kerala" />
        <meta name="twitter:description" content="Discover luxury wellness at Tea Terrace Vythiri, a boutique resort nestled in tea gardens on the misty hillsides of Kerala." />
        <meta name="twitter:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaaQExYQCwnjbhVBJjyx6iRi0Zj3Cu.png" />

        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaaQExYQCwnjbhVBJjyx6iRi0Zj3Cu.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"Hotel",
      "@id":"https://yourdomain.com/tea-terrace-vythiri-resort#hotel",
      "name":"Tea Terrace Vythiri Resort",
      "url":"https://yourdomain.com/tea-terrace-vythiri-resort",
      "telephone":"+919544542000",
      "description":"Boutique resort in Vythiri, Wayanad offering luxury cottages, a multi-cuisine restaurant, library, free Wi-Fi and easy access to local attractions.",
      "image":["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaaQExYQCwnjbhVBJjyx6iRi0Zj3Cu.png"],
      "address":{
        "@type":"PostalAddress",
        "streetAddress":"Valiyapaara, Achooranam",
        "addressLocality":"Vythiri",
        "addressRegion":"Kerala",
        "postalCode":"673575",
        "addressCountry":"IN"
      },
      "geo":{
        "@type":"GeoCoordinates",
        "latitude":11.61,
        "longitude":76.12
      },
      "priceRange":"$$",
      "checkinTime":"12:00",
      "checkoutTime":"11:00",
      "amenityFeature":[
        {"@type":"LocationFeatureSpecification","name":"Multi-cuisine restaurant","value":true},
        {"@type":"LocationFeatureSpecification","name":"Free Wi-Fi","value":true},
        {"@type":"LocationFeatureSpecification","name":"Library","value":true},
        {"@type":"LocationFeatureSpecification","name":"On-site parking","value":true},
        {"@type":"LocationFeatureSpecification","name":"Spacious cottages with balcony","value":true}
      ],
      "sameAs":["https://www.facebook.com/yourpage","https://www.instagram.com/yourprofile"],
      "potentialAction":{
        "@type":"ReserveAction",
        "target":{
          "@type":"EntryPoint",
          "urlTemplate":"https://wa.me/919544542000?text={text}"
        }
      }
    },
    {
      "@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://yourdomain.com/"},
        {"@type":"ListItem","position":2,"name":"Tea Terrace Vythiri Resort","item":"https://yourdomain.com/tea-terrace-vythiri-resort"}
      ]
    }
  ]
}` }}
        />
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
