export function Clients() {
  const counters = [
    { label: 'Projects Completed', value: '180+' },
    { label: 'Happy Clients', value: '65+' },
    { label: 'Industries Served', value: '4' },
<<<<<<< HEAD
    { label: 'Years of Experience', value: '3' }
  ]

  // Mapped logos with names
  const row1Clients = [
    { src: '/logos/1.png', name: 'H-Factor Corp' },
    { src: '/logos/2.png', name: 'Ecell SCS&IT' },
    { src: '/logos/3.png', name: 'Civil Defence Indore' },
    { src: '/logos/4.png', name: 'Curezy' },
    { src: '/logos/5.png', name: 'REVIVE' },
    { src: '/logos/6.png', name: 'Vision' },
  ];

  const row2Clients = [
    { src: '/logos/7.png', name: 'Total Promo' },
    { src: '/logos/8.png', name: 'ACPL' },
    { src: '/logos/9.png', name: 'Abhimanch Beaters' },
    { src: '/logos/10.png', name: 'VVD' },
    { src: '/logos/11.png', name: 'Revol Go' },
    { src: '/logos/12.png', name: 'Geo Jurist Today' },
  ];

  const ClientRow = ({ clients, direction, mobileSpeed, desktopSpeed }: { clients: { src: string, name: string }[], direction: 'left' | 'right', mobileSpeed: number, desktopSpeed: number }) => {
    return (
      <div className="relative flex overflow-hidden w-full mb-12 group">
        <div
          className="flex gap-20 min-w-full items-center justify-start whitespace-nowrap scroll-track pr-20"
          style={{
            '--mobile-speed': `${mobileSpeed}s`,
            '--desktop-speed': `${desktopSpeed}s`,
            animationName: `scroll-${direction}`,
          } as React.CSSProperties}
        >
          {/* Duplicate clients 4 times to ensure smooth infinite scroll */}
          {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <div className="w-64 h-32 md:w-96 md:h-52 flex items-center justify-center mb-2">
                <img
                  src={client.src}
                  alt={`${client.name} Logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-muted-foreground font-medium text-sm md:text-base tracking-widest uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="clients" className="relative py-20 bg-background overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--mobile-speed);
        }
        @media (min-width: 768px) {
          .scroll-track {
            animation-duration: var(--desktop-speed);
          }
        }
      `}</style>

=======
    { label: 'Years of Experience', value: '2' }
  ]

  const clients = [
    'Ecell Scs&it',
    'Civil Defence Indore',
    'Shree Kedar Steels',
    'ACPL',
    'REVIVE',
    'REVOLGO',
    'VVD',
    'Curezy',
    'Geojuristoday',
    'Vision'
  ]

  return (
    <section id="clients" className="relative py-20 bg-background overflow-hidden">
>>>>>>> 41aa7448b710a6f83e8472e539e659acc74fa569
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent-purple/15 blur-3xl" />
        <div className="absolute top-16 left-1/3 h-24 w-24 rounded-full bg-accent-emerald/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Clients
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Trusted by Teams That Ship
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From startups to studios, we craft visuals and products that perform.
          </p>
        </div>

<<<<<<< HEAD
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
=======
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
>>>>>>> 41aa7448b710a6f83e8472e539e659acc74fa569
          {counters.map((counter) => (
            <div key={counter.label} className="bg-card clean-border glass-surface rounded-2xl p-6 text-center subtle-shadow">
              <div className="text-3xl sm:text-4xl font-black text-foreground mb-2">
                {counter.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">
                {counter.label}
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Logo Scroll Area */}
        <div className="max-w-full overflow-hidden py-10  relative">
          {/* Gradient Masks for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          {/* Row 1: Left to Right */}
          <ClientRow clients={row1Clients} direction="right" mobileSpeed={20} desktopSpeed={50} />

          {/* Row 2: Right to Left */}
          <ClientRow clients={row2Clients} direction="left" mobileSpeed={18} desktopSpeed={45} />
        </div>

        <div className="text-center mt-10 text-sm text-muted-foreground">
          Want to see your logo here? Let’s collaborate.
=======
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-card/80 clean-border glass-surface rounded-2xl px-4 py-6 text-center text-sm font-semibold text-foreground/80"
              >
                {client}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 text-sm text-muted-foreground">
            Want to see your logo here? Let’s collaborate.
          </div>
>>>>>>> 41aa7448b710a6f83e8472e539e659acc74fa569
        </div>
      </div>
    </section>
  )
}
