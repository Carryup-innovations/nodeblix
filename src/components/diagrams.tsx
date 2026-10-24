export function CloudDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Cloud landing zone with identity, network, workloads, and operations">
      <svg viewBox="0 0 840 360" fill="none">
        <rect x="20" y="24" width="200" height="312" rx="4" stroke="#2a3b55" />
        <text x="40" y="52" fill="#9fb0c7" fontSize="12" fontFamily="ui-sans-serif">Identity</text>
        <text x="40" y="84" fill="#e8eef7" fontSize="14">Directory / SSO</text>
        <text x="40" y="110" fill="#8ea0b7" fontSize="12">Roles · least privilege</text>
        <text x="40" y="150" fill="#e8eef7" fontSize="14">Secrets</text>
        <text x="40" y="176" fill="#8ea0b7" fontSize="12">Short-lived credentials</text>
        <rect x="248" y="24" width="344" height="312" rx="4" stroke="#2a3b55" />
        <text x="268" y="52" fill="#9fb0c7" fontSize="12">Landing zone</text>
        <rect x="268" y="72" width="140" height="88" rx="3" stroke="#246BFD" />
        <text x="284" y="108" fill="#e8eef7" fontSize="13">Network</text>
        <text x="284" y="128" fill="#8ea0b7" fontSize="11">Ingress · private paths</text>
        <rect x="428" y="72" width="140" height="88" rx="3" stroke="#3d516c" />
        <text x="444" y="108" fill="#e8eef7" fontSize="13">Workloads</text>
        <text x="444" y="128" fill="#8ea0b7" fontSize="11">App · data · jobs</text>
        <rect x="268" y="180" width="300" height="64" rx="3" stroke="#3d516c" />
        <text x="284" y="218" fill="#e8eef7" fontSize="13">Observability · backup · cost owners</text>
        <rect x="268" y="260" width="300" height="52" rx="3" stroke="#3d516c" />
        <text x="284" y="292" fill="#e8eef7" fontSize="13">Infrastructure as code</text>
        <rect x="620" y="24" width="200" height="312" rx="4" stroke="#2a3b55" />
        <text x="640" y="52" fill="#9fb0c7" fontSize="12">Operations</text>
        <text x="640" y="92" fill="#e8eef7" fontSize="14">CI / CD promote</text>
        <text x="640" y="140" fill="#e8eef7" fontSize="14">Restore drill</text>
        <text x="640" y="188" fill="#e8eef7" fontSize="14">Access review</text>
        <text x="640" y="236" fill="#e8eef7" fontSize="14">Incident path</text>
      </svg>
    </div>
  );
}

export function PipelineDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Delivery pipeline from commit to production with rollback">
      <svg viewBox="0 0 840 200" fill="none">
        {["Commit", "Prove", "Artefact", "Staging", "Production"].map((label, i) => (
          <g key={label} transform={`translate(${24 + i * 164} 48)`}>
            <rect width="140" height="72" rx="3" stroke={i === 4 ? "#246BFD" : "#3d516c"} />
            <text x="16" y="42" fill="#e8eef7" fontSize="14">
              {label}
            </text>
            {i < 4 && <path d="M148 36h12" stroke="#8ea0b7" />}
          </g>
        ))}
        <path d="M760 132v20H88v-20" stroke="#246BFD" strokeDasharray="4 4" />
        <text x="88" y="176" fill="#9fb0c7" fontSize="12">
          Rollback uses the previous artefact, not a rebuild
        </text>
      </svg>
    </div>
  );
}

export function ServiceMapDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Modular services with APIs, events, and owned data">
      <svg viewBox="0 0 840 320" fill="none">
        <rect x="20" y="20" width="200" height="120" rx="4" stroke="#3d516c" />
        <text x="36" y="48" fill="#9fb0c7" fontSize="12">Experience</text>
        <text x="36" y="80" fill="#e8eef7" fontSize="14">Web / API façade</text>
        <rect x="300" y="20" width="220" height="120" rx="4" stroke="#246BFD" />
        <text x="316" y="48" fill="#9fb0c7" fontSize="12">Service A</text>
        <text x="316" y="76" fill="#e8eef7" fontSize="14">Owns its data</text>
        <text x="316" y="100" fill="#8ea0b7" fontSize="12">Sync API when an answer is needed</text>
        <rect x="600" y="20" width="220" height="120" rx="4" stroke="#3d516c" />
        <text x="616" y="48" fill="#9fb0c7" fontSize="12">Service B</text>
        <text x="616" y="76" fill="#e8eef7" fontSize="14">Independent release</text>
        <rect x="300" y="180" width="520" height="100" rx="4" stroke="#3d516c" />
        <text x="316" y="216" fill="#9fb0c7" fontSize="12">Events</text>
        <text x="316" y="244" fill="#e8eef7" fontSize="14">Facts other services may consume — not remote procedure calls</text>
        <path d="M220 80h80" stroke="#8ea0b7" />
        <path d="M410 140v40" stroke="#246BFD" />
        <path d="M710 140v40" stroke="#8ea0b7" />
      </svg>
    </div>
  );
}

export function DataFlowDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Data moving from sources through transform and governance into analytics">
      <svg viewBox="0 0 840 220" fill="none">
        {["Sources", "Raw land", "Transform", "Certified", "Analytics"].map((label, i) => (
          <g key={label} transform={`translate(${20 + i * 164} 40)`}>
            <rect width="148" height="100" rx="3" stroke={i === 3 ? "#246BFD" : "#3d516c"} />
            <text x="16" y="56" fill="#e8eef7" fontSize="14">
              {label}
            </text>
          </g>
        ))}
        <text x="20" y="180" fill="#9fb0c7" fontSize="12">
          Tests and lineage sit on the arrows — a green job is not the same as trustworthy data
        </text>
      </svg>
    </div>
  );
}

export function CrmFlowDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Customer lifecycle from identify through serve">
      <svg viewBox="0 0 840 180" fill="none">
        {["Identify", "Qualify", "Propose", "Deliver", "Serve"].map((label, i) => (
          <g key={label} transform={`translate(${24 + i * 164} 36)`}>
            <circle cx="28" cy="28" r="18" stroke="#246BFD" />
            <text x="22" y="33" fill="#e8eef7" fontSize="12">
              {i + 1}
            </text>
            <text x="56" y="34" fill="#e8eef7" fontSize="14">
              {label}
            </text>
          </g>
        ))}
        <text x="24" y="130" fill="#9fb0c7" fontSize="12">
          Finance remains the system of record for money. Support remains the system of record for tickets.
        </text>
      </svg>
    </div>
  );
}

export function ProcessDiagram() {
  const steps = [
    ["01", "Discover", "Goals, systems, constraints, and who will live with the result."],
    ["02", "Define", "Requirements, architecture, milestones, and what “good” looks like."],
    ["03", "Engineer", "Design, build, integrate, test, and validate in realistic conditions."],
    ["04", "Launch", "Deploy with monitoring, support, and a rollback that has been rehearsed."],
    ["05", "Evolve", "Reliability, cost, and usability after the first release — on purpose."],
  ];
  return (
    <ol className="process" style={{ listStyle: "none" }}>
      {steps.map(([n, t, d]) => (
        <li className="process-step" key={n}>
          <span className="kicker" style={{ color: "#7aa0ff" }}>
            {n}
          </span>
          <div>
            <h3>{t}</h3>
            <p className="muted">{d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
