import {
  Speaker, RadioTower, MonitorPlay, Receipt, HandCoins, UserPlus,
  UtensilsCrossed, Disc3, Hotel, ShoppingBag, Dumbbell, Building2, PartyPopper, Tv, Smartphone, Bus,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  speaker: Speaker,
  radio: RadioTower,
  streaming: MonitorPlay,
  collect: Receipt,
  distribute: HandCoins,
  register: UserPlus,
  dj: Disc3,
  utensils: UtensilsCrossed, Disc3,
  hotel: Hotel,
  shop: ShoppingBag,
  gym: Dumbbell,
  office: Building2,
  event: PartyPopper,
  tv: Tv,
  digital: Smartphone,
  transport: Bus,
};
