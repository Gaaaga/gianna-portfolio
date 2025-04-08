export function CallButton({ className = "" }: { className?: string }) {
  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly?.initPopupWidget({
        url: "https://calendly.com/gaa-song/30min",
      })
    }
  }

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={`call-button ${className}`}
    >
      <span className="md:hidden">Let's Chat! 👋</span>
      <span className="hidden md:inline">Let's Chat! 👋</span>
    </button>
  )
}
