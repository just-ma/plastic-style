import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import { listReviews } from '../graphql/queries';
import { Review } from './models/types';

import ReviewListItem from './ui/ReviewListItem';

export const MOCK_REVIEWS: ReadonlyArray<Review> = [
  {
    id: '123',
    title: 'Fetch the Bolt Cutters',
    artist: 'Fiona Apple',
    author: 'Justin Ma',
    createdAt: 1624082838,
    src: 'https://upload.wikimedia.org/wikipedia/en/0/00/Fiona_Apple_-_Fetch_the_Bolt_Cutters.png',
    recordLabel: 'Epic - 2020',
    content: `Fetch the Bolt Cutters is the fifth studio album by American singer-songwriter Fiona Apple. It was released on April 17, 2020, Apple's first release since The Idler Wheel... in 2012. The album was recorded from 2015 to 2020, largely at Apple's home in Venice Beach. It was produced and performed by Apple alongside Amy Aileen Wood, Sebastian Steinberg and Davíd Garza; recording consisted of long, often improvised takes with unconventional percussive sounds. GarageBand was used for much of this recording, and Apple credited the album's unedited vocals and long takes to her lack of expertise with the program.
  
Rooted in experimentation, the album largely features unconventional percussion. While conventional instruments, such as pianos and drum sets, do appear, the album also features prominent use of non-musical found objects as percussion. Apple described the result as "percussion orchestras". These industrial-like rhythms are contrasted against traditional melodies, and the upbeat songs often subvert traditional pop structures.
  
The album explores freedom from oppression; Apple identified its core message as: "Fetch the fucking bolt cutters and get yourself out of the situation you're in". The title, a quote from TV series The Fall, reflects this idea. The album also discusses Apple's complex relationships with other women and other personal experiences, including bullying and sexual assault. It has nevertheless been referred to as Apple's most humorous album.
  
Fetch the Bolt Cutters was released during the COVID-19 pandemic, and many critics found its exploration of confinement timely. It received significant critical acclaim, and was described as an instant classic and Apple's best work to date. The album was awarded Best Alternative Music Album at the 63rd Annual Grammy Awards, with "Shameika" winning Best Rock Performance.[5] The album debuted at number four on the US Billboard 200 and number one on the US Top Alternative Albums and Top Rock Albums, with 44,000 equivalent album units. It also charted in the top 15 in Canada, Australia and New Zealand.`,
  },
  {
    id: '456',
    title: 'Lumberjack',
    artist: 'Tyler, the Creator',
    author: 'Justin Ma',
    createdAt: 1624082838,
    recordLabel: 'Columbia - 2021',
    src: 'https://media.pitchfork.com/photos/60ccbe4606280ce20ecfc149/1:1/w_160/Tyler-the-Creator-Lumberjack.jpeg',
    content: `Add it to the canon: “Yonkers,” “Domo23,” “Who Dat Boy,” “Okra,” “Potato Salad,” and now “Lumberjack,” the songs where Tyler, the Creator is really rapping. Throw in “French,” “Rella,” and “Deathcamp,” and you’ll see Tyler does this before all of his albums, pulling together some of his best verses as if to say, Ignore the antics, the fashion lines, and the sun-soaked synths, you care because this guy can rap his head off.
  
“Lumberjack” delights in being self-reflexive; he’s still trying as hard as ever, while almost smirking at himself for trying at all. The sinister Tyler-produced beat is built on a sample of Gravediggaz’s “2 Cups of Blood,” and, before you know it, DJ Drama is shouting and dropping Gangsta Grillz tags. Tyler even invites Odd Future mainstays Domo Genesis, L-Boy, and Taco just to lose their minds in the background about how hard Tyler’s going, like it’s “What the Fuck Right Now.”
  
“Lumberjack” also follows “Who Dat Boy” as a song that embraces and amplifies rap’s mean-mugging tropes. Tyler murmurs, “Rolls-Royce pull up, Black boy hop out,” and, “Call me Lumberjack ’cause I wish a n---a would,” recurring lines that transcend with confidence and conviction. He strips the genre to its core elements: a spare minor-key beat, an understated delivery, and unfussy, inarguably tough bars.`,
  },
  {
    id: '789',
    title: 'All My Heroes Are Cornballs',
    artist: 'JPEGMafia',
    author: 'Justin Ma',
    createdAt: 1624082838,
    src: 'https://upload.wikimedia.org/wikipedia/en/2/21/Jpegmafia_AMHAC_1.jpg',
    content: `All My Heroes Are Cornballs is the third studio album by American rapper JPEGMafia, released on September 13, 2019 by EQT Recordings. After the release of his record Veteran (2018), he began recording tracks for its follow-up, with a total of around 93 songs by 2019. He handled the production, mixing and mastering in his home studio. The album features guest appearances from Abdu Ali, Helena Deland and Buzzy Lee, as well as additional vocals by Refined Sugar, Vegyn and Young Emoji. Vegyn also serves as a co-producer on one track.
  
An avant-garde experimental hip hop and punk rap album, All My Heroes Are Cornballs draws influences from experimental pop, glitch hop, ambient, noise and industrial music. It has a smoother and more melodic sound than its predecessor, employing uncommon song structures, extensive sampling, and a variety of vocal techniques such as rapping, screaming and singing, often in falsetto. Thematically, the album is personal, introspective, and presented in a stream of consciousness form, touching on the Internet culture, prejudice, political issues and JPEGMafia's newfound fame.
  
All My Heroes Are Cornballs was promoted as a "disappointment" with videos released on the rapper's YouTube, along with two singles: "Jesus Forgive Me, I Am a Thot" and "Beta Male Strategies". It was supported by the JPEGMafia Type Tour, which began in North America on October 14, 2019 and ended in Europe on July 6, 2020. Upon release, All My Heroes Are Cornballs received widespread acclaim from critics, with many highlighting the humorous, sarcastic lyrical content, as well as praising its detailed and chaotic production; some of them deemed it superior to Veteran, and it was placed in numerous publications' year-end lists. The album debuted at number 105 on the Billboard 200, becoming JPEGMafia's first entry in the chart.`,
  },
  {
    id: '0123',
    title: 'Pushing the Envelope',
    artist: 'afafafafafafafaf',
    author: 'Justin Ma',
    createdAt: 1624082838,
    src: 'https://www.amatruda.eu/wp-content/uploads/2017/05/PHO_0618-12x18-Amalfi-envelope-1626x1080.jpg',
    content: `Add it to the canon: “Yonkers,” “Domo23,” “Who Dat Boy,” “Okra,” “Potato Salad,” and now “Lumberjack,” the songs where Tyler, the Creator is really rapping. Throw in “French,” “Rella,” and “Deathcamp,” and you’ll see Tyler does this before all of his albums, pulling together some of his best verses as if to say, Ignore the antics, the fashion lines, and the sun-soaked synths, you care because this guy can rap his head off.
  
“Lumberjack” delights in being self-reflexive; he’s still trying as hard as ever, while almost smirking at himself for trying at all. The sinister Tyler-produced beat is built on a sample of Gravediggaz’s “2 Cups of Blood,” and, before you know it, DJ Drama is shouting and dropping Gangsta Grillz tags. Tyler even invites Odd Future mainstays Domo Genesis, L-Boy, and Taco just to lose their minds in the background about how hard Tyler’s going, like it’s “What the Fuck Right Now.”
  
“Lumberjack” also follows “Who Dat Boy” as a song that embraces and amplifies rap’s mean-mugging tropes. Tyler murmurs, “Rolls-Royce pull up, Black boy hop out,” and, “Call me Lumberjack ’cause I wish a n---a would,” recurring lines that transcend with confidence and conviction. He strips the genre to its core elements: a spare minor-key beat, an understated delivery, and unfussy, inarguably tough bars.`,
  },
];

export default function Reviews(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>(MOCK_REVIEWS);

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    //fetchReviews();
  }, []);

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [reviews]);

  return (
    <div>
      {reviews.map((review: Review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </div>
  );
}
