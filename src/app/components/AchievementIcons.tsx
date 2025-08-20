import cn from 'classnames';

export type IconState = {
  key: string;
  label: string;
  unlocked: boolean;
  src: string; // /images/icon_*.png
};

export default function AchievementIcons({ icons }: { icons: IconState[] }) {
  return (
    <div className="mt-4 grid grid-cols-6 gap-2">
      {icons.map((ic) => (
        <div key={ic.key} className="flex items-center justify-center">
          <img
            src={ic.src}
            alt={ic.label}
            title={ic.unlocked ? `${ic.label} (Unlocked)` : `${ic.label} (Locked)`}
            className={cn(
              'h-9 w-9 rounded-lg transition-all duration-300',
              ic.unlocked
                ? 'icon-glow ring-1 ring-white/20'
                : 'grayscale opacity-60'
            )}
          />
        </div>
      ))}
    </div>
  );
}