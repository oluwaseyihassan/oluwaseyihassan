export function ArchitectureMap() {
  return (
    <figure className="map">
      <figcaption className="map-head">
        <span>System map</span>
        <span>parascores.com</span>
      </figcaption>

      <p className="sr-only">
        Architecture summary: four clients — the public portal, organizer console,
        admin and embed widget — connect over HTTPS to a Nuxt 4 server-rendered
        frontend. It talks to a NestJS API of 28 domain modules over REST and
        Server-Sent Events. The API reads and writes PostgreSQL through Prisma and
        uses Redis for hot state and pub/sub. Paystack, Resend, Sentry and Satori
        run through the API.
      </p>

      <div className="map-body" aria-hidden="true">
        <div className="map-row map-clients">
          <span className="node">
            <strong>Public</strong>
            portal
          </span>
          <span className="node">
            <strong>Organizer</strong>
            console
          </span>
          <span className="node">
            <strong>Admin</strong>
            system
          </span>
          <span className="node">
            <strong>Embed</strong>
            widget
          </span>
        </div>

        <div className="map-connector">
          <span>HTTPS</span>
        </div>

        <div className="map-node wide">
          <strong>Nuxt 4</strong>
          <span>SSR · subdomain routing</span>
        </div>

        <div className="map-connector">
          <span>REST + SSE</span>
        </div>

        <div className="map-node wide accent">
          <strong>NestJS API</strong>
          <span>28 domain modules · JWT · RBAC</span>
        </div>

        <div className="map-connector">
          <span>Prisma · pub/sub</span>
        </div>

        <div className="map-row map-data">
          <span className="node">
            <strong>PostgreSQL</strong>
            durable state
          </span>
          <span className="node">
            <strong>Redis</strong>
            hot state · events
          </span>
        </div>

        <div className="map-services">
          <span>Paystack</span>
          <span>Resend</span>
          <span>Sentry</span>
          <span>Satori</span>
        </div>
      </div>

      <p className="map-foot">
        Payments, mail, telemetry and share images run through the API.
      </p>
    </figure>
  )
}
