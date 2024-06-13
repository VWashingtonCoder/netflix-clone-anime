interface MobileMenuItem {
  label: string;
}

export default function MobileMenuItem({ label }: MobileMenuItem) {
  return (
    <div className="px-3 text-center text-white hover:underline">{label}</div>
  );
}
