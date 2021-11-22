import { Feature } from './types';

import TEST_THUMBNAIL from '../../images/thumbnails/fiona-apple-fetch-the-bolt-cutters.jpg';

export const MOCK_FEATURES: ReadonlyArray<Feature> = [
  {
    id: 'test',
    title: 'Feature Title',
    description: 'Here is the feature description. Describe me',
    author: 'Parker Albert',
    createdAt: 1589180400,
    src: TEST_THUMBNAIL,
    content: `<b>Touche Amore</b> - <em>Lament </em>- Best album to listen to when everything is falling apart\n\nIn a year where anxiety repeatedly got the best of me, <em>Lament </em>was my safe haven. From rage-fueled workouts to panic-ridden drives down the interstate, <em>Lament </em>channeled my chaotic thoughts through eleven songs of blistering post-hardcore. Fittingly, singer Jeremy Bolm kicks off the album with a desperate cry for help: “From peaks of blue/Come Heroine”—a cleverly drawn double entendre about a woman he relies on to survive tough times—while the band barrels towards a climax that crashes into the title track. Out of “Lament” crawls a broken melody that stumbles over itself, wandering aimlessly as Bolm describes a cycle of sadness and anxiety that anyone who has battled with their brains can relate to.\n\nEach song on <em>Lament </em>peers into a corner of Bolm’s personal darkness, yet he allows a few glimpses of light as well, giving the album a determined drive that can bring someone back from the brink of collapse. The first two verses of “Limelight'' pour out the depths of Bolm’s fatigue with the world, while the third verse takes a last stand as Manchester Orchestra member Andy Hull makes a desperate swim upwards against Bolm's dark chants. He lets his voice reach manic heights as he runs out of breath, fighting for a gasp of air. Self-proclaimed as the catchiest song in their catalogue, “Reminders'' combines political disenchantment with the need for self-love, ending on an unanswered question that bellows with personal resonance: “Is there a way to feel free/Without being someone else.” On “I’ll Be Your Host,” Bolm deals with the aftermath of making music that heals others when he hasn’t finished healing himself. Yet even as he wrestles with the weight of countless letters from fans unloading their grief, the song simultaneously serves as a beacon for anyone that has carried the burden of another.\n`,
  },
];
