import { Button } from "../ui/button"


export default function TombolyHowItWorks() {
  const steps = [
    {
      title: "Choose Raffle",
      description: "Pick from a variety of exciting home appliances and other products you'd love to win.",
    },
    {
      title: "Get Entered",
      description: "Pick from a variety of exciting home appliances and other products you'd love to win.",
    },
    {
      title: "Win & Celebrate!",
      description: "When the raffle ends, a winner is chosen randomly and fairly. If that's you congrats!",
    },
    {
      title: "Repeat",
      description: "Didn't win this time? No worries — coins roll over or can be used for another raffle.",
    },
  ]

  return (
    <section className="flex justify-center  max-w-[1600px] mx-auto">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          How Tomboly Works?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg text-center
                         bg-gradient-to-br from-[#00c0ff] to-[#007bff] text-white
                         min-h-[200px] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-base opacity-90">{step.description}</p>
            </div>
          ))}
        </div>
        <Button
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-full
                     bg-gradient-to-br from-[#8cd7f0] to-[#007bff] text-white
                     shadow-lg transition-all duration-300 cursor-pointer"
        >
          Start Playing Now
        </Button>
      </div>
    </section>
  )
}
