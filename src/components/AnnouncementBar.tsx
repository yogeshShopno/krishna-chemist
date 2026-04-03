export default function AnnouncementBar() {
  const text =
    '💊 Prescription Medicines  •  🏠 Home Delivery  •  🌿 Ayurvedic Products  •  👶 Baby & Mother Care  •  🩺 Surgical Supplies  •  ⏰ Open 7 AM – 11:30 PM Daily  •  ';

  return (
    <div className="bg-brand-primary text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-sm font-medium">
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </div>
    </div>
  );
}
