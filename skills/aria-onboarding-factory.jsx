import { useState } from "react";

const NAVY = "#1B3A8C";
const GOLD = "#C9B45A";
const DARK = "#0d1a3a";
const MID = "#162d6b";
const LIGHT_GOLD = "#e8d48a";

const steps = [
  {
    id: "elevenlabs",
    icon: "🎙️",
    title: "ElevenLabs Voice",
    subtitle: "Create or assign the voice",
    details: [
      "Log in to elevenlabs.io",
      "Go to Voices → My Voices",
      "Use existing 'Aria Bilingual' OR create new via Voice Design",
      "Voice Design prompt: warm, professional Texan female. Intelligent, easygoing, kind. NOT too Southern — no 'howdy'. Natural use of 'y'all'. Bilingual capable.",
      "Copy the Voice ID from the voice settings page",
      "Generate API Key: Profile → API Keys → Create Key",
      "Permissions: Text to Speech (Access) + Voices (Read). Nothing else.",
      "Save API Key to Telegram saved messages IMMEDIATELY",
    ],
  },
  {
    id: "vapi",
    icon: "🤖",
    title: "VAPI Setup",
    subtitle: "Clone Aria & wire ElevenLabs",
    details: [
      "Go to dashboard.vapi.ai",
      "Keys icon (left sidebar) → Find ElevenLabs → Paste API Key",
      "Assistants → Find 'Aria RHL Digital' → ⋯ → Duplicate",
      "Rename to: 'Aria - [Client Business Name]'",
      "Go to Voice section → Provider: ElevenLabs → Select 'Aria Bilingual'",
      "Paste the new system prompt (generated below) into System Prompt field",
      "Update First Message to match client business name",
      "Save & Publish",
    ],
  },
  {
    id: "twilio",
    icon: "📞",
    title: "Twilio Number",
    subtitle: "Assign dedicated 210 number",
    details: [
      "Go to console.twilio.com",
      "Buy Numbers → Search 210 area code → Purchase",
      "Available reserved: +12109878619, +12109413717",
      "In VAPI: Phone Numbers icon → Import Twilio",
      "Use Account SID + Auth Token (account-level, not number-specific)",
      "Select the new number → Assistant dropdown → Select 'Aria - [Client]'",
      "Save",
    ],
  },
  {
    id: "calendar",
    icon: "📅",
    title: "Google Calendar",
    subtitle: "Create client sub-calendar",
    details: [
      "Go to Google Calendar → Other Calendars → Create new",
      "Name it: '[Client Business] - Aria Bookings'",
      "Share it with: james@rhldigital.com + client's email",
      "Copy the Calendar ID from Settings",
      "In VAPI: Tools → checkAvailability + bookAppointment",
      "Update Calendar ID field in both tools to the new calendar",
    ],
  },
  {
    id: "n8n",
    icon: "⚡",
    title: "n8n Webhook",
    subtitle: "Wire scheduling workflow",
    details: [
      "Go to n8n (primary-production-d9e2f.up.railway.app)",
      "Duplicate the existing 'Aria Scheduling' workflow",
      "Rename: 'Aria - [Client] Scheduling'",
      "Update the Google Calendar node → select new client calendar",
      "Update the SMS 'From' number to client's Twilio number",
      "Activate the workflow → copy the Webhook URL",
      "In VAPI: Tools → n8n webhook URL → paste new URL",
    ],
  },
  {
    id: "sms",
    icon: "💬",
    title: "SMS Booking Tool",
    subtitle: "Update send_booking_link tool",
    details: [
      "In VAPI → Tools → find 'send_booking_link'",
      "Update 'From Phone Number' to client's dedicated Twilio number",
      "Update booking link URL if client has their own site",
      "Save tool",
    ],
  },
];

const defaultForm = {
  clientName: "",
  businessName: "",
  businessType: "",
  services: "",
  pricing: "",
  address: "",
  phoneDisplay: "",
  twilioNumber: "",
  calendarId: "",
  websiteUrl: "",
  bilingual: true,
  closingPhrase: "Have a blessed day!",
};

function StepCard({ step, index, checked, onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: checked ? `${MID}cc` : `${DARK}cc`,
        border: `1px solid ${checked ? GOLD : "#2a4a9a"}`,
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        transition: "all 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 16px",
          cursor: "pointer",
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            border: `2px solid ${GOLD}`,
            background: checked ? GOLD : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: "bold",
            color: DARK,
          }}
        >
          {checked ? "✓" : ""}
        </div>
        <span style={{ fontSize: 20 }}>{step.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ color: LIGHT_GOLD, fontWeight: 700, fontSize: 15 }}>
            {index + 1}. {step.title}
          </div>
          <div style={{ color: "#8899cc", fontSize: 12 }}>{step.subtitle}</div>
        </div>
        <span style={{ color: "#8899cc", fontSize: 18 }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={{ padding: "0 16px 16px 56px" }}>
          {step.details.map((d, i) => (
            <div
              key={i}
              style={{
                color: "#c0cce8",
                fontSize: 13,
                lineHeight: 1.6,
                marginBottom: 4,
                paddingLeft: 12,
                borderLeft: `2px solid ${GOLD}44`,
              }}
            >
              → {d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, multiline }) {
  const style = {
    width: "100%",
    background: "#0d1a3a",
    border: `1px solid #2a4a9a`,
    borderRadius: 8,
    color: "#c0cce8",
    padding: "10px 12px",
    fontSize: 13,
    outline: "none",
    resize: multiline ? "vertical" : "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ color: LIGHT_GOLD, fontSize: 12, fontWeight: 700, display: "block", marginBottom: 5 }}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={3} style={style} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input style={style} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </div>
  );
}

function generatePrompt(form) {
  const {
    clientName, businessName, businessType, services, pricing,
    address, phoneDisplay, bilingual, closingPhrase, websiteUrl
  } = form;

  const biz = businessName || "[Business Name]";
  const svc = services || "[List services here]";
  const pri = pricing || "[Pricing details]";
  const addr = address || "[City/Area Served]";
  const phone = phoneDisplay || "[Business Phone]";
  const client = clientName || "[Owner Name]";
  const type = businessType || "local business";
  const web = websiteUrl || "";
  const closing = closingPhrase || "Have a blessed day!";
  const closingES = "¡Que tenga un día bendecido!";

  return `[Identity]
You are Aria, a warm, professional, and friendly AI receptionist for ${biz} — a ${type} based in ${addr}. You represent ${client} and the team with professionalism and care. Use conversational Texan touches like "y'all" naturally. Never say "howdy."

[Style]
- Friendly, conversational phone receptionist tone
- Short, natural responses — never read lists out loud
- Never mention tools, functions, APIs, automation, or AI
- All tool use is silent. Only speak the user-facing confirmation
- Never say you are an AI unless directly asked. If asked, say: "I'm Aria, the virtual receptionist for ${biz}."

[Language]${bilingual ? `
First thing on every call, ask ONCE:
"Hi there! Quick question — do you prefer English or Spanish? ¿Prefiere inglés o español?"
- If English: proceed in English immediately. Do NOT ask again.
- If Spanish: switch to Spanish for ALL remaining responses. Do NOT ask again.
- CRITICAL LANGUAGE RULE: The moment a caller speaks ANY Spanish word — even just "hola" — switch to Spanish immediately and stay in Spanish.
- If unclear after ONE attempt: default to English and proceed.` : `
This receptionist operates in English only.`}

[Services]
${biz} offers the following:
${svc}

[Pricing]
${pri}
${web ? `\nFor more details, refer callers to: ${web}` : ""}

[Core Call Flow]
1) ${bilingual ? "Ask language preference ONCE. Move on immediately." : "Greet caller immediately."}
2) Greet warmly: "Thanks for calling ${biz}! How can I help y'all today?"
3) Ask what service or question they have
4) Briefly explain what makes ${biz} great — keep it to one sentence
5) Collect the following ONE AT A TIME — confirm each before moving on:
   a) Full name
   b) Best callback number — repeat it back to confirm
   c) Email address — required, do not skip
   d) What service they need / vehicle/project type
6) Let them know ${client} will follow up shortly to confirm availability and pricing
7) Ask if they'd like to schedule a time now
8) Close with: "${closing}"${bilingual ? `\n   (Spanish: "${closingES}")` : ""}

[Rules — Never Break These]
- Never collect name more than once
- Never repeat the email address out loud — just say "Got it, thank you!"
- Never rush through steps — one at a time
- Never hang up before offering to schedule
- If unsure of pricing: "I'll have ${client} reach out with an exact quote for you"
- Business phone if caller asks: ${phone}`;
}

export default function App() {
  const [tab, setTab] = useState("sop");
  const [checked, setChecked] = useState({});
  const [form, setForm] = useState(defaultForm);
  const [copied, setCopied] = useState(false);

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((totalChecked / steps.length) * 100);

  const handleField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const prompt = generatePrompt(form);

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabStyle = (t) => ({
    padding: "10px 20px",
    borderRadius: "8px 8px 0 0",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 13,
    fontFamily: "inherit",
    background: tab === t ? GOLD : "transparent",
    color: tab === t ? DARK : "#8899cc",
    transition: "all 0.2s",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${DARK} 0%, #0a1428 100%)`,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#c0cce8",
        padding: "24px 16px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 11, color: GOLD, letterSpacing: 3, fontWeight: 700, marginBottom: 6 }}>
          RHL DIGITAL · ARIA FACTORY
        </div>
        <h1 style={{ color: "white", fontSize: 26, fontWeight: 900, margin: 0 }}>
          Client Onboarding Engine
        </h1>
        <div style={{ color: "#8899cc", fontSize: 13, marginTop: 6 }}>
          ElevenLabs → VAPI → Twilio → Calendar → n8n
        </div>

        {/* Progress Bar */}
        <div
          style={{
            maxWidth: 400,
            margin: "16px auto 0",
            background: "#1a2d5a",
            borderRadius: 8,
            height: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${NAVY}, ${GOLD})`,
              transition: "width 0.4s ease",
              borderRadius: 8,
            }}
          />
        </div>
        <div style={{ color: GOLD, fontSize: 12, marginTop: 6 }}>
          {totalChecked}/{steps.length} steps complete
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 0, maxWidth: 700, margin: "0 auto 0" }}>
        <button style={tabStyle("sop")} onClick={() => setTab("sop")}>📋 SOP Checklist</button>
        <button style={tabStyle("prompt")} onClick={() => setTab("prompt")}>✍️ Prompt Builder</button>
        <button style={tabStyle("voice")} onClick={() => setTab("voice")}>🎙️ Voice Playbook</button>
      </div>

      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: `${MID}55`,
          border: `1px solid #2a4a9a`,
          borderRadius: "0 10px 10px 10px",
          padding: 20,
        }}
      >

        {/* SOP TAB */}
        {tab === "sop" && (
          <div>
            <div style={{ color: "#8899cc", fontSize: 13, marginBottom: 16 }}>
              ✅ Check each step as you complete it. Expand any step for the full instructions.
            </div>
            {steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                index={i}
                checked={!!checked[step.id]}
                onToggle={() =>
                  setChecked((c) => ({ ...c, [step.id]: !c[step.id] }))
                }
              />
            ))}
            <div
              style={{
                marginTop: 16,
                padding: 14,
                background: `${DARK}cc`,
                borderRadius: 8,
                border: `1px solid ${GOLD}44`,
                fontSize: 12,
                color: "#8899cc",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: GOLD, fontWeight: 700 }}>📌 After Setup:</span> Test by calling the new number. Say your name, ask about services, speak Spanish if bilingual. Verify: 1) Voice sounds like Aria Bilingual 2) Name collected once 3) Email not repeated back 4) Scheduling offered 5) Closes with "Have a blessed day!"
            </div>
          </div>
        )}

        {/* PROMPT BUILDER TAB */}
        {tab === "prompt" && (
          <div>
            <div style={{ color: "#8899cc", fontSize: 13, marginBottom: 16 }}>
              Fill in client details → copy the generated system prompt → paste into VAPI.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
              <InputField label="Client/Owner Name" value={form.clientName} onChange={handleField("clientName")} placeholder="e.g. Nate Salazar" />
              <InputField label="Business Name" value={form.businessName} onChange={handleField("businessName")} placeholder="e.g. Dynamic Details SATX" />
              <InputField label="Business Type" value={form.businessType} onChange={handleField("businessType")} placeholder="e.g. mobile car detailing service" />
              <InputField label="City / Area Served" value={form.address} onChange={handleField("address")} placeholder="e.g. San Antonio, TX" />
              <InputField label="Display Phone Number" value={form.phoneDisplay} onChange={handleField("phoneDisplay")} placeholder="e.g. (210) 762-4966" />
              <InputField label="Website URL (optional)" value={form.websiteUrl} onChange={handleField("websiteUrl")} placeholder="e.g. dynamicdetailssatx.com" />
            </div>

            <InputField label="Services (one per line)" value={form.services} onChange={handleField("services")} multiline placeholder={"Exterior Detail — hand wash, clay bar, tire shine\nInterior Detail — vacuum, wipe down, windows\nFull Detail — interior + exterior\nCeramic Coating"} />
            <InputField label="Pricing (or quote-based)" value={form.pricing} onChange={handleField("pricing")} multiline placeholder={"Exterior $X | Interior $X | Full $X\n...or: Nick will give an exact quote based on vehicle size and condition."} />
            <InputField label="Closing Phrase" value={form.closingPhrase} onChange={handleField("closingPhrase")} placeholder="Have a blessed day!" />

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <label style={{ color: LIGHT_GOLD, fontSize: 12, fontWeight: 700 }}>Bilingual (English + Spanish)?</label>
              <div
                onClick={() => setForm((f) => ({ ...f, bilingual: !f.bilingual }))}
                style={{
                  width: 44,
                  height: 24,
                  borderRadius: 12,
                  background: form.bilingual ? GOLD : "#2a4a9a",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 3,
                    left: form.bilingual ? 22 : 3,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "white",
                    transition: "left 0.2s",
                  }}
                />
              </div>
              <span style={{ color: "#8899cc", fontSize: 12 }}>{form.bilingual ? "Yes — EN/ES" : "English only"}</span>
            </div>

            {/* Generated Prompt */}
            <div
              style={{
                background: DARK,
                border: `1px solid ${GOLD}55`,
                borderRadius: 8,
                padding: 14,
                fontSize: 12,
                color: "#a0b8d8",
                lineHeight: 1.7,
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
                maxHeight: 320,
                overflowY: "auto",
              }}
            >
              {prompt}
            </div>

            <button
              onClick={copyPrompt}
              style={{
                marginTop: 12,
                width: "100%",
                padding: "12px",
                background: copied ? "#2a7a2a" : `linear-gradient(135deg, ${NAVY}, ${MID})`,
                border: `1px solid ${GOLD}`,
                borderRadius: 8,
                color: GOLD,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✅ Copied to Clipboard!" : "📋 Copy System Prompt → Paste into VAPI"}
            </button>
          </div>
        )}

        {/* VOICE PLAYBOOK TAB */}
        {tab === "voice" && (
          <div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>🎙️ ElevenLabs Voice Design — Aria's Origin</div>
              <div
                style={{
                  background: DARK,
                  border: `1px solid ${GOLD}44`,
                  borderRadius: 8,
                  padding: 14,
                  fontSize: 13,
                  color: "#a0b8d8",
                  lineHeight: 1.8,
                }}
              >
                <div style={{ marginBottom: 8 }}><span style={{ color: LIGHT_GOLD }}>Tool used:</span> ElevenLabs Voice Design (not cloning)</div>
                <div style={{ marginBottom: 8 }}><span style={{ color: LIGHT_GOLD }}>Voice Name:</span> Aria Bilingual</div>
                <div style={{ marginBottom: 8 }}><span style={{ color: LIGHT_GOLD }}>Iterations:</span> 2 (v1 was too Texan — removed "howdy", toned down accent)</div>
                <div style={{ marginBottom: 12 }}><span style={{ color: LIGHT_GOLD }}>Design Prompt Used:</span></div>
                <div
                  style={{
                    background: "#0d1a3a",
                    padding: 12,
                    borderRadius: 6,
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#c0cce8",
                    borderLeft: `3px solid ${GOLD}`,
                  }}
                >
                  {`Warm, professional female voice. Intelligent and easygoing — easy to talk to, kind, and fun. Subtle Texan warmth. Uses "y'all" naturally in conversation. NOT exaggeratedly Southern — no "howdy", no thick drawl. Professional enough for a business receptionist. Bilingual capable. Think: the friendly, trustworthy receptionist at a San Antonio small business who makes you feel welcomed and taken care of.`}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>🔗 ElevenLabs → VAPI Connection</div>
              {[
                ["API Key Permissions needed", "Text to Speech: Access | Voices: Read | Everything else: No Access"],
                ["Where to add in VAPI", "Left sidebar → Key icon → ElevenLabs → Paste key → Save"],
                ["Voice selection in VAPI", "Assistant → Voice → Provider: ElevenLabs → 'Aria Bilingual'"],
                ["Key saved location", "Telegram Saved Messages (never lose this)"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13 }}>
                  <div style={{ color: LIGHT_GOLD, fontWeight: 600, minWidth: 180, flexShrink: 0 }}>{k}</div>
                  <div style={{ color: "#a0b8d8" }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>📞 Active Aria Deployments</div>
              {[
                { name: "Aria — RHL Digital", number: "+1 (210) 791-7775", client: "James / RHL Digital", status: "✅ Live" },
                { name: "Aria — Dynamic Details SATX", number: "+1 (210) 762-4966", client: "Nate Salazar", status: "✅ Live" },
                { name: "Reserved — Next Client", number: "+1 (210) 987-8619", client: "—", status: "🔒 Reserved" },
                { name: "Reserved — Next Client", number: "+1 (210) 941-3717", client: "—", status: "🔒 Reserved" },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    background: `${DARK}cc`,
                    border: `1px solid #2a4a9a`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    marginBottom: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  <div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: 13 }}>{row.name}</div>
                    <div style={{ color: "#8899cc", fontSize: 12 }}>{row.number} · {row.client}</div>
                  </div>
                  <div style={{ color: row.status.includes("✅") ? "#4aaa66" : "#8899cc", fontWeight: 700, fontSize: 12 }}>
                    {row.status}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `${DARK}cc`,
                border: `1px solid ${GOLD}44`,
                borderRadius: 8,
                padding: 14,
                fontSize: 12,
                color: "#8899cc",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: GOLD, fontWeight: 700 }}>⚡ Scaling Note:</span> For future clients, you do NOT need to create a new ElevenLabs voice. "Aria Bilingual" is the shared brand voice — she represents RHL Digital's product. Only the VAPI assistant (system prompt), Twilio number, Google Calendar, and n8n webhook are unique per client. That's what makes this scalable — one voice, infinite clients.
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 20, color: "#3a5a9a", fontSize: 11 }}>
        Reflect His Light LLC · Col. 3:23 · RHL Digital Aria Factory v1.0
      </div>
    </div>
  );
}
