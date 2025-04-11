import { useEffect, useRef } from "react"

export function CallButton({ className = "" }: { className?: string }) {
  const waveRef = useRef<HTMLSpanElement>(null)

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
			//  Google Analytics Event
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
				(window as any).gtag("event", "click_chat_button", {
					event_category: "engagement",
					event_label: "ChatButton – Calendly Chat",
				})
			}

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
		const timeout = setTimeout(() => {
			triggerWave()
		}, 300) // delay

		const interval = setInterval(() => {
			triggerWave()
		}, 10000)

		return () => {
			clearTimeout(timeout)
			clearInterval(interval)
		}
	}, [])


  return (
    <button
      type="button"
      onClick={openCalendly}
      onMouseEnter={triggerWave}
      className={`group call-button ${className} hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer`}
    >
      <span>
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
