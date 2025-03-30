export const NetworkIllustration = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" className="w-full h-auto">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(79, 70, 229, 0.2)" />
          <stop offset="100%" stopColor="rgba(79, 70, 229, 0.6)" />
        </linearGradient>
      </defs>
      <g>
        {/* Network nodes */}
        <circle cx="400" cy="300" r="40" fill="url(#grad1)" />
        <circle cx="250" cy="200" r="30" fill="url(#grad1)" />
        <circle cx="550" cy="200" r="30" fill="url(#grad1)" />
        <circle cx="250" cy="400" r="30" fill="url(#grad1)" />
        <circle cx="550" cy="400" r="30" fill="url(#grad1)" />
        <circle cx="150" cy="300" r="25" fill="url(#grad1)" />
        <circle cx="650" cy="300" r="25" fill="url(#grad1)" />

        {/* Connection lines */}
        <line x1="400" y1="300" x2="250" y2="200" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="400" y1="300" x2="550" y2="200" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="400" y1="300" x2="250" y2="400" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="400" y1="300" x2="550" y2="400" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="400" y1="300" x2="150" y2="300" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="400" y1="300" x2="650" y2="300" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
        <line x1="250" y1="200" x2="550" y2="200" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="1" />
        <line x1="250" y1="400" x2="550" y2="400" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="1" />
      </g>
    </svg>
  )
}

export default NetworkIllustration

