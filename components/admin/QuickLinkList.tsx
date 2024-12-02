import QuickLinksCard from './QuickLinkCard'

export default function QuickLinkList() {
  const details = [
    {
      title: "Total Account",
      number: 38,
    },
    {
      title: "Tickets",
      number: 12,
    },
    {
      title: "Transfer Made",
      number: 9,
    },
    {
      title: "Total Inactive Accounts",
      number: 16,
    },
  ]
  return (
    <div className="grid gap-5 text-white grid-cols-4">
      {details.map((detail, key) => (
        <QuickLinksCard key={key} detail={detail} />
      ))}
    </div>
  )
}
