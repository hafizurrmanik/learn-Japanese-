export default function Page() {
  return (
    <main className="app-frame">
      <iframe
        src="/index.html"
        title="Khatom Japanese learning app"
        className="app-frame__iframe"
      />
    </main>
  )
}

// The standalone HTML/CSS/JS build lives in public so it can also be downloaded and hosted independently.

import './globals.css'
