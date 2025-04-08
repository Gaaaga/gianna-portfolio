import { useEffect, useRef } from "react"

export function CallButton({ className = "" }: { className?: string }) {
  const waveRef = useRef<HTMLSpanElement>(null)

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly?.initPopupWidget({
        url: "https://calendly.com/gaa-song/30min",
      })
    }
  }

  // add a wave
  const triggerWave = () => {
    const el = waveRef.current
    if (el) {
      el.classList.remove("animate-wave")
      void el.offsetWidth // redraw
      el.classList.add("animate-wave")
    }
  }

  // 10s wave
  useEffect(() => {
    const interval = setInterval(() => {
      triggerWave()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <button
      type="button"
      onClick={openCalendly}
      onMouseEnter={triggerWave}
      className={`group call-button ${className} hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer`}
    >
      <span className="md:hidden">
        Let's Chat!
				<span> </span>
        <span
          ref={waveRef}
          className="inline-block"
        >
          👋
        </span>
      </span>
      <span className="hidden md:inline">
        Let's Chat!
				<span> </span>
        <span
          ref={waveRef}
          className="inline-block"
        >
          👋
        </span>
      </span>
    </button>
  )
}
