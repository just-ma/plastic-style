import React, { useEffect, useState } from 'react';

import { List } from './models/types';

import ListListItem from './ui/ListListItem';

export const MOCK_LISTS: ReadonlyArray<List> = [
  {
    id: '1234',
    title: 'Best Albums of 2020',
    description:
      'I can hear your thoughts loud and clear: “Why on earth is this madlad posting a year-end list in the middle of May?” Well, lemme give you the scoop. 2021 fell like a bowling ball on my heart; a partnership forged during the pandemic blasted into pieces. My shattered self floated aimlessly, a recital of survival in its most primal form. Yet something monumental loomed just ahead of me, a towering beacon beckoning like a magnet.',
    author: 'Parker Albert',
    src: 'https://www.amatruda.eu/wp-content/uploads/2017/05/PHO_0618-12x18-Amalfi-envelope-1626x1080.jpg',
    listItems: [
      {
        id: '123',
        rank: 3,
        title: 'Lament',
        artist: 'Touche Amore',
        content: `In a year where anxiety repeatedly got the best of me, Lament was my safe haven. From rage-fueled workouts to panic-ridden drives down the interstate, Lament channeled my chaotic thoughts through eleven songs of blistering post-hardcore. Singer Jeremy Bolm kicks off the album with a desperate cry for help: “From peaks of blue/Come Heroine”—a cleverly drawn double entendre about a woman he relies on to survive tough times—while the band barrels towards a climax that crashes into the title track. Out of “Lament” crawls a broken melody that stumbles over itself, wandering aimlessly as Bolm describes a cycle of sadness and anxiety that anyone who has battled with their brains can relate to.

Each song on Lament peers into a corner of Bolm’s personal darkness, yet he allows a few glimpses of light as well, giving the album a determined drive that can bring someone back from the brink of collapse. The first two verses of “Limelight” pour out the depths of Bolm’s fatigue with the world. Instead of collapsing into complacency, the third verse takes a last stand as Manchester Orchestra member Andy Hull makes a last-minute swim upwards against Bolm’s dark chants. He lets his voice reach manic heights as he runs out of breath, fighting just for a gasp of air. Self-proclaimed as the catchiest song in their catalogue, “Reminders” combines political disenchantment with the need for self-love, ending on an unanswered question that bellows with personal resonance: “Is there a way to feel free/Without being someone else.” On “I’ll Be Your Host,” Bolm deals with the aftermath of making music that heals others when he hasn’t finished healing himself. Yet even as he wrestles with the weight of countless letters from fans unloading their grief, the song simultaneously serves as a beacon for anyone that has carried the burden of another.
      
The lyrics would be enough to make this record great, but the band comes together to elevate Lament to the next level. Each song slams into one another with the two-ton force of thunderous production and never-ending crescendos, and revelation packed anthems relentlessly rush to brutally catchy refrains. The stadium sized “Deflector” is home to false peaks, showcasing the group’s deft grasp of song structure. An unexpected break teases a finale that satisfyingly arrives and impossibly one-ups the rest of the song. After catching one of the only breaths allowed on the album, “A Broadcast” perfectly captures clenched-fist earnestness, rousing a wordless chorus that would be cliche if Bolm’s ragged vocal cords accented by pedal steel didn’t make it magical. 
      
For all the hooks and lessons in Lament, nothing is more powerful than the final track “A Forecast.” Against the distant keys of a sparse piano, Bolm takes a moment to quietly review his progress in processing his mother’s death (“Since the last time we’ve met/I’ve healed more than suffered”), and then everything implodes. Ocean-deep bass thunders as sparks of guitar shower down upon a heartfelt confession: “I’m still out in the rain/I could use/A little shelter/Now and then.” 
      
Lament reminds me that when I fuck up, the world doesn’t end, even when I want it to. It’s not about winning a fight against dark feelings, it’s about the simple act of fighting.`,
      },
      {
        id: '432',
        rank: 2,
        title: 'Every Bad',
        artist: 'Porridge Radio',
        content: `This is another album on the list that helped me through the rushed transition from college to living at home. Before I moved back into my childhood bedroom, I was whisked away to the Rockies with my family, providing me a moment to fully absorb what was happening. We spent hours trudging through deep snow, taking turns clearing a path through the woods and up the mountain. Every Bad accompanied me on this trek, lending acidic strings and fiery guitars to the tornado of thoughts whipped up by the chaos of covid. To listen to Every Bad is to sail a shaky boat through a turbulent sea of feelings while singer Dana Margolin tries to unwind her tangled brain by fashioning neurotic phrases into anthems. This daring voyage allows Porridge Radio to map out the fury and exuberance of being a human, hoping just to stay afloat.`,
      },
      {
        id: '465',
        rank: 1,
        title: 'Microphones in 2020',
        artist: 'The Microphones',
        content: `The most basic premise of meditation is to sit and be present. The breath is often used as a focal point – if one gets distracted by thoughts or outside stimuli, focus can always be turned back towards this life force. Phil Elverium’s Microphones in 2020 starts with just the breath. For the first 8 minutes of the song’s forty-five minute duration, two chords played on a five dollar acoustic guitar glide and cascade, undisturbed by anything else. Once Phil enters, he begins an exercise in excavation, examining his life at three different ages: 17, 20, and 23. Life’s undercurrent carries him through ruminations on the frivolity of band names, the tangibility of flashbulb memories, and the strange career of making art, but the song always returns to the breath. Microphones in 2020 simultaneously explores the impermanence of the present and the ceaseless nature of time, expressed succinctly in the final lines: “If there have to be words, they could just be/now only and there’s no end.”`,
      },
    ],
    createdAt: 1624082838,
  },
  {
    id: '4679',
    title: 'Best Songs of 2020',
    description:
      'I can hear your thoughts loud and clear: “Why on earth is this madlad posting a year-end list in the middle of May?” Well, lemme give you the scoop. 2021 fell like a bowling ball on my heart; a partnership forged during the pandemic blasted into pieces. My shattered self floated aimlessly, a recital of survival in its most primal form. Yet something monumental loomed just ahead of me, a towering beacon beckoning like a magnet.',
    author: 'Parker Albert',
    src: 'https://www.amatruda.eu/wp-content/uploads/2017/05/PHO_0618-12x18-Amalfi-envelope-1626x1080.jpg',
    listItems: [],
    createdAt: 1624082838,
  },
];

export default function Lists(): React.ReactElement {
  const [lists, setLists] = useState<ReadonlyArray<List>>(MOCK_LISTS);

  useEffect((): void => {
    //fetchLists();
  }, []);

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [lists]);

  return (
    <div>
      {lists.map((list: List) => (
        <ListListItem key={list.id} list={list} />
      ))}
    </div>
  );
}
