
export type TastePreference = 'spicy' | 'sweet' | 'none';

export interface MomoRecommendation {
  name: string;
  description: string;
  pairing: string;
  intensity: number;
}
