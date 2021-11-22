/* eslint-disable indent */
import { FIONA_APPLE_FETCH_THE_BOLT_CUTTERS_KEY, DESTROYER_HAVE_WE_MET_KEY } from '../../reviews/models/constants';
import { reviewPagePath } from '../../reviews/routes';

import PARKERS_FAVORITE_ALBUMS_2020_THUMBNAIL from '../../images/thumbnails/parkers-albums-2020.jpg';

import { List } from './types';

export const PARKERS_FAVORITE_ALBUMS_2020_KEY = 'parkers-favorite-albums-2020';

export const MOCK_LISTS: ReadonlyArray<List> = [
  {
    id: PARKERS_FAVORITE_ALBUMS_2020_KEY,
    title: "Parker's Favorite Albums of 2020",
    author: 'Parker Albert',
    description:
      'Hey y’all it’s Ben here introducing Parker’s 2020 end of the year list. Although Waxahatchee’s Saint Cloud somehow isn’t no.1, it is still a pretty decent collection of albums. Only the top 3 albums have been ranked, everything else is unordered. Releasing this list so late in 2021 has given the both of us time to reflect, and damn what a year it was. We all had rather sentimental attachments to the albums that came out pre and during the pandemic, and this list is an honest representation of that. Included also is a section devoted to those artists who have collaborated with Pushing the Envelope in 2020, we truly appreciate it. Enjoy.',
    src: PARKERS_FAVORITE_ALBUMS_2020_THUMBNAIL,
    listItems: [
      {
        id: 'touche-amore-lament',
        rank: 1,
        title: 'Lament',
        artist: 'Touche Amore',
        content: `<b>Best album to listen to when everything is falling apart.</b>
        <p>In a year where anxiety repeatedly got the best of me, <em>Lament </em>was my safe haven. From rage-fueled workouts to panic-ridden drives down the interstate, <em>Lament </em>channeled my chaotic thoughts through eleven songs of blistering post-hardcore. Fittingly, singer Jeremy Bolm kicks off the album with a desperate cry for help: &ldquo;From peaks of blue/Come Heroine&rdquo;&mdash;a cleverly drawn double entendre about a woman he relies on to survive tough times&mdash;while the band barrels towards a climax that crashes into the title track. Out of &ldquo;Lament&rdquo; crawls a broken melody that stumbles over itself, wandering aimlessly as Bolm describes a cycle of sadness and anxiety that anyone who has battled with their brains can relate to.</p>
        <p>Each song on <em>Lament </em>peers into a corner of Bolm&rsquo;s personal darkness, yet he allows a few glimpses of light as well, giving the album a determined drive that can bring someone back from the brink of collapse. The first two verses of &ldquo;Limelight'' pour out the depths of Bolm&rsquo;s fatigue with the world, while the third verse takes a last stand as Manchester Orchestra member Andy Hull makes a desperate swim upwards against Bolm's dark chants. He lets his voice reach manic heights as he runs out of breath, fighting for a gasp of air. Self-proclaimed as the catchiest song in their catalogue, &ldquo;Reminders'' combines political disenchantment with the need for self-love, ending on an unanswered question that bellows with personal resonance: &ldquo;Is there a way to feel free/Without being someone else.&rdquo; On &ldquo;I&rsquo;ll Be Your Host,&rdquo; Bolm deals with the aftermath of making music that heals others when he hasn&rsquo;t finished healing himself. Yet even as he wrestles with the weight of countless letters from fans unloading their grief, the song simultaneously serves as a beacon for anyone that has carried the burden of another.</p>
        <p>The lyrics would be enough to make this record great, but the band comes together to elevate <em>Lament </em>to the next level. Each song slams into one another with the two-ton force of thunderous production and never-ending crescendos, a collection of revelation packed anthems that rush relentlessly to brutally catchy refrains. The stadium sized &ldquo;Deflector&rdquo; is home to false peaks, showcasing the group&rsquo;s deft grasp of song structure -- an unexpected break teases a finale that satisfyingly arrives and impossibly one-ups the rest of the song. After catching one of the only breaths allowed on the album, &ldquo;A Broadcast&rdquo; perfectly captures clenched-fist earnestness, rousing a wordless chorus that would be cliche if Bolm&rsquo;s ragged vocal cords accented by pedal steel didn&rsquo;t make it magical.&nbsp;</p>
        <p>For all the hooks and lessons in <em>Lament</em>, nothing is more powerful than the final track &ldquo;A Forecast.&rdquo; Against the distant keys of a sparse piano, Bolm takes a moment to quietly review his progress in processing his mother&rsquo;s death (&ldquo;Since the last time we&rsquo;ve met/I&rsquo;ve healed more than suffered&rdquo;), and then everything implodes. Ocean-deep bass thunders as sparks of guitar shower down upon a heartfelt confession: &ldquo;I&rsquo;m still out in the rain/I could use/A little shelter/Now and then.&rdquo;&nbsp;</p>
        <p><em>Lament </em>reminds me that when I fuck up, the world doesn&rsquo;t end, even when I want it to. It&rsquo;s not about winning a fight against dark feelings, it&rsquo;s about the simple act of fighting.</p>`,
      },
      {
        id: 'porridge-radio-every-bad',
        rank: 2,
        title: 'Every Bad',
        artist: 'Porridge Radio',
        content: `<b>Best album to play while watching the ocean lash jagged rocks on a windy day.</b>
        <p>This is another album on the list that helped me through the rushed transition from college to living at home. Before I moved back into my childhood bedroom, I was whisked away to the Rockies with my family, providing me a moment to fully absorb what was happening. We spent hours trudging through deep snow, taking turns clearing a path through the woods and up the mountain. <em>Every Bad </em>accompanied me on this trek, lending acidic strings and fiery guitars to the tornado of thoughts whipped up by the chaos of covid. To listen to <em>Every Bad </em>is to sail a shaky boat through a turbulent sea of feelings while singer Dana Margolin tries to unwind her tangled brain by fashioning neurotic phrases into anthems. This daring voyage allows Porridge Radio to map out the fury and exuberance of being human, hoping just to stay afloat.</p>`,
      },
      {
        id: 'the-microphones-microphones-in-2020',
        rank: 3,
        title: 'Microphones in 2020',
        artist: 'The Microphones',
        content: `<b>Best album to get you into meditation.</b>
        <p>The most basic premise of meditation is to sit and be present. The breath is often used as a focal point - if one gets distracted by thoughts or outside stimuli, focus can always be turned back towards this life force. Phil Elverium&rsquo;s <em>Microphones in 2020</em> starts with just the breath. For the first 8 minutes of the song&rsquo;s forty-five minute duration, two chords played on a five dollar acoustic guitar glide and cascade, unperturbed and at peace. Once Phil enters, he beginsan exercise in excavation, examining his life at three different ages: 17, 20, and 23. Life's undercurrent carries him through ruminations on the frivolity of band names, the tangibility of flashbulb memories, and the strange career of making art, but the song always returns to the breath. <em>Microphones in 2020 </em>simultaneously explores the slippery paradox of the present and the ceaseless nature of time, expressed succinctly in the final lines: "If there have to be words, they could just be/now only and there's no end."</p>`,
      },
      {
        id: 'fiona-apple-fetch-the-bolt-cutters',
        title: 'Fetch The Bolt Cutters',
        artist: 'Fiona Apple',
        content: `<b>Best album I can never listen to again</b>
        <p>When Fiona casually released this masterpiece into the ether, Pitchfork immediately awarded the album with a perfect ten, something it hadn&rsquo;t done in a decade. Publications stumbled over each other to heap praise upon the undeniable power of <em>Fetch the Bolt Cutters</em>, while I myself was scouring over every song in an attempt to glean each stroke of genius. It&rsquo;s an impossibly active record that crashes you through the ceiling of Fiona&rsquo;s home turned explosive parade featuring clanging percussion found in schoolyards; it&rsquo;s a rapidfire joyride through the synapses of her brain. After a few months of residing here, I began to feel like I was overstaying my welcome, and had to take a long break from listening to the album. Nevertheless, I come by to visit every now and then, and it&rsquo;s always a pleasure.&nbsp;</p>
        <p>Click <a href="${reviewPagePath(
          FIONA_APPLE_FETCH_THE_BOLT_CUTTERS_KEY,
        )}" target="_blank">here</a> for the review I wrote back in May 2020.</p>`,
      },
      {
        id: 'the-soft-pink-truth-shall-we-go-on-sinning-so-that-grace-may-increase',
        title: 'Shall We Go On Sinning So That Grace May Increase?',
        artist: 'The Soft Pink Truth',
        content: `<b>Best album to listen to while locking yourself in a sauna and taking too many drugs</b>
        <p>Drew Daniel&rsquo;s latest solo effort effectively captures what it would sound like if Steve Reich had been an avid raver. The opening track features angelic voices hypnotically repeating the record&rsquo;s title amidst chiming bells, imbuing the album with a strangely monastic quality. Fittingly, the two most important moments are found on the tracks &ldquo;Sinning'' and &ldquo;Grace.&rdquo; On the former, piano, clarinet, and saxophone circle one another in minimalist patterns, while booming bass and syncopated handclaps set up a sweaty club atmosphere. On &ldquo;Grace,&rdquo; a gentle piano melody meanders through swirling synths, dissipates into a cloud of raucous ambience, and slyly builds into the album&rsquo;s most transcendent moment. The perfect balance of soothing minimalism and adrenaline-pumping dance music, <em>Shall We Go On Sinning So That Grace May Increase? </em>maps out an ideal vision of ecstasy.</p>`,
      },
      {
        id: 'jeff-parker-suite-for-max-brown',
        title: 'Suite For Max Brown',
        artist: 'Jeff Parker',
        content: `<b>Best album to listen to when it’s raining outside</b>
        <p>Jeff Parker&rsquo;s <em>Suite for Max Brown </em>is cut from the same exploratory cloth as his renowned work with post-rock group Tortoise. Evading sonic expectations, Parker relentlessly tinkers with the jazz template to incorporate spaced-out ambience and trance-like rhythms into a delightful mood board. The methodical mindset of interlocking grooves on "Fusion Swirl" evaporates into atmospheric track &ldquo;After The Rain,&rdquo; which drizzles drowsy guitar over Vangelis-textured keys, perfectly evoking its namesake. After taking its time on a winding path that keeps you guessing, the record rides out on the ten minute closer &ldquo;Max Brown.&rdquo; Perhaps the most traditional track on the album, it&rsquo;s a satisfying send-off that proves Parker can play it straight too.</p>`,
      },
      {
        id: 'the-1975-notes-on-a-conditional-form',
        title: 'Notes On a Conditional Form',
        artist: 'The 1975',
        content: `<b>Most consistently inconsistent album</b>
        <p>Imagine a new thrift store opened up a few blocks from your place. You&rsquo;ve heard from friends it&rsquo;s a bit janky, but you still want to check it out. It&rsquo;s called <em>Notes On a Conditional Form</em>. Upon entering the store, you&rsquo;re immediately greeted by Greta Thurnburg, who delivers a rousing speech about the immediacy of addressing climate change over twinkling piano. <em>That&rsquo;s very inspiring,</em> you think, <em>but what a bizarre introduction. </em>As you shuffle past Greta and make your way down an aisle, you notice something that seems out of place. A cinematic interlude of Disney proportions (&ldquo;The End (Music for Cars)&rdquo;) and a slice of pastiche punk (&ldquo;People&rdquo;) sit side by side, eschewing any organizational logic. You push through more instrumental filler and arrive at a sparkling gem: &ldquo;The Birthday Party.&rdquo; An alt-country ballad ornamented with banjo and pedal-steel, the song exposes the paranoia and disenchantment Matty Healy holds with his own behavior: &ldquo;I depend/On my friends/To stay clean.&rdquo;</p>
        <p>The entire album continues in this hit-or-miss fashion, flirting with a jumbled ensemble of pop templates. Some songs make it seem like Matty&rsquo;s trying on styles just for laughs, such as &ldquo;Roadkill,&rdquo; which emulates Pinegrove so closely that I swear the line about a &ldquo;tucked-up erection&rdquo; is throwing shade at them. &ldquo;Me and You Together Song&rdquo;&mdash;a direct injection of jangly dream pop stolen straight from the 90&rsquo;s&mdash;almost looks like the real thing, but is smothered with a sheen of self-aware tackiness. It successfully rides the line between affecting and annoying, but &ldquo;If You&rsquo;re Too Shy (Let Me Know)&rdquo; crosses it. The chugging synths and yearning lyrics of the verses play to the band&rsquo;s strengths, but the chorus hews dangerously close to the melody and mentality of &ldquo;Shut Up and Dance.&rdquo; The fact that I&rsquo;ll still listen to the entire song, even enduring the cheesy saxophone solo, illustrates the overall appeal of <em>Notes</em>. It&rsquo;s sickeningly earnest enough to make you shake your head, but it's addictive catchiness will make you smile. This isn't any more apparent than on the satisfying closer &ldquo;Guys," where Matty ditches the dress-up. Stripping down to his pure self, he sings a sweetly unadorned ode to his bandmates: &ldquo;You guys are the best thing that ever happened to me.&rdquo; <em>Notes On a Conditional Form </em>is far from a perfect album, but I guarantee if you take the time to sort through the mess, you&rsquo;ll find something to take home.</p>`,
      },
      {
        id: 'lyra-pramuk-fountain',
        title: 'Fountain',
        artist: 'Lyra Pramuk',
        content: `<b>Best album to listen to with headphones in a dark room while imagining that your ceiling fan is a UFO that will carry you into the great beyond</b>
        <p>On Fountain, Lyra Pramuk is a master shapeshifter. Her voice is stretched, distorted, and multiplied across 7 tracks with vastly different palettes. &ldquo;Tendril&rdquo; is joyous, floating a soaring melody over buoyant hums, while following track &ldquo;Xeno&rdquo; does a 180 as Lyra takes the form of a horde of locusts, swarming around a dark synth that expands until it blocks out the sun. On &ldquo;Cradle&rdquo;, the drone of a cello draws a fog across Lyra&rsquo;s deeply ruminative singing, untils she breaks forth with a wordless rendition of the English hymn &ldquo;O Waly, Waly&rdquo; that transforms the song into a heavenly hymn. &ldquo;Cradle&rdquo; illustrates what each track on Fountain has in common: the ability to transcend, to swirl and layer fragments of the human voice until they become something greater, something beyond the self.</p>`,
      },
      {
        id: 'julianna-barwick-healing-is-a-miracle',
        title: 'Healing is a Miracle',
        artist: 'Julianna Barwick',
        content: `<b>Best album for a mental vacation</b>
        <p>Julianna Barwick&rsquo;s ethereal experiments have always been soothing, but <em>Healing is a Miracle </em>checks Barwick into therapy. After dealing with the aftershock of a divorce and years of grueling tours, she recently moved from New York to Los Angeles and started dating someone new. She&rsquo;s expanded her typically insular method of layering vocal loops by inviting collaborators to share space on the album. Sigur R&oacute;s&rsquo;s J&oacute;nsi contributes a delicate croon on &ldquo;In Light,&rdquo; flickers of Mary Lattimore&rsquo;s harp decorate &ldquo;Oh, Memory,&rdquo; and Nosaj Thing winds pensive harmonies around Barwick&rsquo;s on &ldquo;Nod.&rdquo; Best listened to when you need to catch a breath.</p>`,
      },
      {
        id: 'autechre-sign',
        title: 'SIGN',
        artist: 'Autechre',
        content: `<b>Best album to play while trying to fix your computer and having a revelation that this is just like doing surgery on a human, leaving you with teary eyes and a newfound connection with your machine</b>
        <p>Last summer I became spellbound by Autechre&rsquo;s 1994 landmark album <em>Amber</em>. The record is known for being Autechre&rsquo;s most emotional and melodic work, leading the duo to later dismiss it as &ldquo;cheesy.&rdquo; Yet the album&rsquo;s papery textures and haunting atmosphere quickly won me over, along with the realization that <em>Kid A </em>definitely took influence from songs like &ldquo;Montreal.&rdquo; 26 years after <em>Amber</em>, and Autechre is still on the bleeding edge of electronic experimentation. In some ways, <em>SIGN </em>mimics the approach of <em>Amber</em>: it&rsquo;s less cold-blooded than Autechre&rsquo;s other output, relying instead on capturing fleeting feelings. <em>SIGN </em>functions as a splatter painting, featuring a myriad of metallic synths that leave a mark on the canvas before dissipating. Squint hard enough and you might be able to make out a sketch of a melody, but more than anything else <em>SIGN </em>is about setting the mood.</p>`,
      },
      {
        id: 'eartheater-phoenix-flames-are-dew-upon-my-skin',
        title: 'Phoenix: Flames Are Dew Upon My Skin',
        artist: 'Eartheater',
        content: `<b>Best album to listen to while exploring a foggy forest in the middle of the night</b>
        <p>Eartheater&rsquo;s new album lurks under the surface. Alexandra&rsquo;s ghostly vocals join a mystical arrangement of baroque strings on a journey down the river Styx, a sheet of smoke hung over the water to obscure any destination. After escaping haunts of metal-infused glitches and computer-mangled voices, the album finds its haven in the centerpiece &ldquo;Volcano.&rdquo; A classically-bent piano pirouettes while a dejected angel laments (&ldquo;I'm still grinding bones to bake my bread/Grinding on a skull to get ahead&rdquo;). The song presents constant sorrow as a comfort, something to count on. As the album&rsquo;s title suggests, <em>Phoenix: Flames Are Dew Upon My Skin </em>shapes pain into something that glistens. When you&rsquo;re floating down a burning landscape, there&rsquo;s only one thing you can do: take in the view.</p>`,
      },
      {
        id: 'phoebe-bridgers-punisher',
        title: 'Punisher',
        artist: 'Phoebe Bridgers',
        content: `<b>Best album to listen to while mimicking the album’s cover</b>
        <p>Since her first album <em>Stranger in the Alps, </em>Phoebe&rsquo;s been on a constant upwards trajectory. That album gave hints of her greatness as a songwriter as well as a bittersweet hook crafter (&ldquo;Motion Sickness&rdquo;), and her following collaborative projects as boygenius and Better Oblivion Community Center got me even more excited for her next release. <em>Punisher </em>came out into the world a day early, while I was at my family&rsquo;s cabin by the Tennessee River. I waited till everyone had fallen asleep and walked down to our dock that overlooked the water, sitting there and listening to <em>Punisher </em>front to back while watching the river&rsquo;s reflection of the moon. As the album cover suggests, <em>Punisher </em>is best experienced like this - on your own, in the dark, preferably with a vast sky above you.</p>`,
      },
      {
        id: 'moses-sumney-grae-perfume-genius-set-my-heart-on-fire-immediately',
        title: 'Grae/Set My Heart On Fire Immediately',
        artist: 'Moses Sumney/Perfume Genius',
        content: `<b>Twinsies award</b>
        <p>Two of my most anticipated albums of 2020, <em>Grae </em>and <em>Set My Heart On Fire Immediately </em>are soulmates. Released on the same day, both mine deep within the psyche for a sense of identity, uncovering mind-body disconnects and reckoning with a world not quite ready to do the same. They confront the strangeness of sharing feelings and physicality with other humans while still trying to discover one&rsquo;s own place in life. Both have fine-tuned their distinct styles, dodging genre labels and expanding their sound to match their broadening view of self.</p>
        Check out <a href="https://www.mixcloud.com/paintingmusicshow/episode-15-contrast/" target="_blank">this</a> episode of Painting Music if you’d like to hear more about my thoughts on the albums:) `,
      },
      {
        id: 'ka-descendents-of-cain',
        title: 'Descendants of Cain',
        artist: 'Ka',
        content: `<b>Best album-length biblical allegory</b>
        <p><em>Descendants of Cain </em>digs deep into the story of Cain and Able, painting disturbing parallels with America&rsquo;s cultivation of racial disparity, and, as hinted to by the album&rsquo;s title, surveying the cycle of despair and crime suffered by the heirs of centuries of injustice. Ka delivers his message in a steadied tone and methodical flow, with the patience of a man who&rsquo;s waited his whole life to spread the word.</p>`,
      },
      {
        id: 'rap-ferraria-purple-moonlight-pages',
        title: 'Purple Moonlight Pages',
        artist: 'R.A.P. Ferraria',
        content: `<b>Best metaphysical beat poetry that makes you feel like an intellectual</b>
        <p>On <em>Purple Moonlight Pages</em>, R.A.P. Ferraria spits handpicked phrases packed with eloquently enunciated syllables, neatly fitting them into tapestries of spacey beats that put an emphasis on atmosphere. The album sits you in the audience of a dimly lit theatre while Rory takes center stage, mediating on everything from laundry to the merit of art, occupying the space between the tangible and the beyond.</p>`,
      },
      {
        id: 'armand-hammer-shrines',
        title: 'Shrines',
        artist: 'Armand Hammer',
        content: `<b>Best candidate to bring underground rap to the surface of the earth</b>
        <p><em>Shrines </em>takes the kaleidoscopic approach to sampling typical of underground rap&mdash;almost every producer on the album is unique to one song&mdash;while disillusioned duo billy woods and ELUCID trade hurried verses about the corruption and lies spread by those in charge. Their breakneck pace &agrave; la Run the Jewels is unusual in a scene that typically favors a patient kind of wit over adrenaline-fueled urgency (see: ka, MIKE, Navy Blue), yet Armand Hammer has all of the above in spades, enlisting a star-studded cast of experimental standouts (Earl Sweatshirt, Pink Siifu, R.A.P. Ferraria) to share bars while he catches breath.</p>`,
      },
      {
        id: 'destroyer-have-we-met',
        title: 'Have We Met',
        artist: 'Destroyer',
        content: `<b>Best sophisti-pop album to play while shaking out existential dread</b>
        <p><em>Have We Met </em>has a special place in my heart because it was the first album I wrote a review on. The lyrics are a little less cryptic than a typical Destroyer album&mdash;thematically centered around the idea of death&mdash;yet it features some of the catchiest pop songs in his catalog (&ldquo;The Raven&rdquo;, &ldquo;The Man in Black&rsquo;s Blues&rdquo;). It&rsquo;s telling that Bejar released this album in January, before 2020 had grown its fangs. One of the best lines on the album has only become all the more salient: &ldquo;Just look at the world around you/Actually, no, don't look.&rdquo;</p>
        <p>Check out my full review for the album <a href="${reviewPagePath(
          DESTROYER_HAVE_WE_MET_KEY,
        )}" target="_blank">here</a>.</p>`,
      },
      {
        id: 'navy-blue-songs-of-sage-post-panic',
        title: 'Songs of Sage: Post Panic!',
        artist: 'Navy Blue',
        content: `<b>Best candidate to bring underground rap to the surface of the earth</b>
        <p>Sage Elsesser&rsquo;s mournful project <em>Songs of Sage: Post Panic! </em>opens in a state of peril. Powerful chords crash down like waves in slow motion. Sage reckons with an understood sense of grief: &ldquo;I often rеminisce, what spirit guides a calm regrеt?/Look myself in the mirror, start tearing up as I reflect.&rdquo; But like the guiding trill of flute that floats throughout the song, he holds onto hope, keeping his eyes on the distant journey ahead of him. Following track &ldquo;Tired&rdquo; looks outside of Sage to see a world strife with unjust killings, pushing him even further below the surface. He spends the rest of the album trying to reach shore, and finds it on &ldquo;Alignment.&rdquo; Even as he steps on dry land, he knows the tides could change at any moment, pulling him back out to sea.</p>`,
      },
      {
        id: 'dogleg-melee',
        title: 'Melee',
        artist: 'Dogleg',
        content: `<b>Best album to remind me of the chaotic and sudden end to my college experience</b>
        <p>I see red every time I play this record. It released the same week covid first wreaked havoc in the U.S., and its furiously fast pace kept stride with the speed of the suddenly changing world. Listening to songs like &ldquo;Bueno&rdquo; break down and then build back up with walls of pure angst was so cathartic that I can&rsquo;t listen to the album now without returning to my cooped up apartment full of people preparing to flee the virus.</p>`,
      },
      {
        id: 'duval-timothy-help',
        title: 'Help',
        artist: 'Duval Timothy',
        content: `<b>Best album to play while taking a morning bike ride through London after a hard rain</b>
        <p><em>Help </em>skirts the peripheries of jazz and electronica while Timothy stays focused on shaping simple yet evocative piano motifs. Simultaneously exploratory and inward-looking, by the end of the album it feels as though you&rsquo;ve seen all angles of a beautiful sculpture.</p>`,
      },
      {
        id: 'waxahatchee-saint-cloud',
        title: 'Saint Cloud',
        artist: 'Waxahatchee',
        content: `<b>Best album to play while you’re coming home after a long time away</b>
        <p>My last all-nighter at UCLA was spent skating around campus with a sense of finality about my college experience. As the sun came up I played Waxahatchee&rsquo;s latest singles (&ldquo;Fire&rdquo; and &ldquo;Lilacs&rdquo;), and felt strangely at peace despite the incoming pandemic. <em>Saint Cloud</em> released the night before the 16 hour drive from Colorado back to Nashville; I waited to listen until the sunrise, just as we were about to make it home. It fit perfectly. <em>Saint Cloud </em>is the rainbow after her previous, gloomier album <em>Out in the Storm</em>, filtering Katie&rsquo;s trials through accessible Americana and relatable phrases that let her insightful songwriting shine. The record isn&rsquo;t happy-go-lucky or overly optimistic; it&rsquo;s just a friend who understands.</p>
        <p>Read more of my reflections on “Fire” <a href="https://docs.google.com/document/d/14dXD_uuy9b-Wzwd9d3HiXMMQpcPuYxN28iY8ypkT3EQ/edit?usp=sharing" target="_blank">here</a>.`,
      },
      {
        id: 'blake-mills-mutable-set',
        title: 'Mutable Set',
        artist: 'Blake Mills',
        content: `<b>Best album for Talk Talk fans</b>
        <p><em>Mutable Set </em>features my favorite opener of 2020. An acoustic guitar strums amidst murmuring synths, hesitantly at first, then picking up steam as Blake Mills&rsquo; comfortingly quiet voice enters. The song manages to mix colors of ambient, jazz, and pastoral folk to paint a picture of a town coming to life under the sun&rsquo;s soft guidance. The rest of the record mimics the muted approach of &ldquo;Never Forever," exploring the possibilities allowed by building a song in a quiet way, splashing inquisitive chords around simple musical phrases throughout. The minimally undulating piano of &ldquo;Summer All Over'' are reminiscent of Mills&rsquo; work with Perfume Genius, and the patchwork melody handled by guitar, piano, and bass on &ldquo;My Dear One&rdquo; makes the Talk Talk influence clear. Like Mark Hollis, Blake Mills understands that the absence of a sound can be intriguing as the presence of one.&nbsp;</p>`,
      },
      {
        id: 'duma-duma',
        title: 'Duma',
        artist: 'Duma',
        content: `<b>Most inventively scathing album</b>
        <p>On their punishing debut, Duma crafts a hellish soundscape of deadly synths and relentlessly looping drum machines that morph into something otherworldly. Inhuman shrieks and guttural moans are mixed below the sonic surface, as if they&rsquo;ve already passed the point of no return.</p>`,
      },
      {
        id: 'adrienne-lenker-songs',
        title: 'songs',
        artist: 'Adrienne Lenker',
        content: `<b>Best album to witness a campfire roar to life before falling back to glowing embers that settle into ash</b>
        <p>Inspired by the ashes of her relationship with Indigo Sparke, another artist who shares her affinity for open-hearted acoustic folk, <em>songs </em>is Adrianne at her best, a flex of sharp-eyed songwriting set to a menacingly minimal backdrop. Creeping vines of Adrienne&rsquo;s cyclical fingerpicks wind around insights of life swept from small but nonetheless impactful moments that shape her spirit. A dead horse found as a child is the subject of &ldquo;ingydar,&rdquo; spinning into a tale detailing the beauty and horror of mortality: &ldquo;Everything eats and is eaten/ Time is fed.&rdquo; The gorgeously lovesick &ldquo;anything&rdquo; cuts through the humid air of a pedal steel, resting in the open bed of a pickup truck rolling through billowing blades of grass. A prism shaped from shards of memories offers a peek into Adrianne&rsquo;s time with Indigo: a sliced fist from a dog bite, a campfire amongst the pines, and the cradle found in a partner&rsquo;s lap. Adrianne&rsquo;s vulnerable croon devastates and rejuvenates in the same breath, a reminder of the threads that entangle us all together.</p>`,
      },
      {
        id: 'adrienne-lenker-instrumentals',
        title: 'insrumentals',
        artist: 'Adrienne Lenker',
        content: `<b>Best album to mold with the serene sound of nature until the two become indistinguishable</b>
        <p>A darkened grey was spreading over Tennessee skies as I rushed up the carpeted steps of my family&rsquo;s home, aching to play Adrienne&rsquo;s freshly released <em>instrumentals </em>before dinnertime. The album opens at the creak of a well-worn wooden porch, bending under the dual weight of Adrienne and her guitar. As strums trickled from her fingers like the melt of Spring, and windchimes huddled together in a reverberating embrace, I heard the sky respond with pitter patters of raindrops on my rooftop. I opened my windows to let these two forces of nature meet. In due time melody burst forth from &ldquo;music for indigo&rdquo;,blooming into the flush of watercolored flowers on the album&rsquo;s cover. <em>instrumentals </em>is a wellspring, an invitation to dip into the source of Adrienne&rsquo;s tranquil kinship with Mother Earth, offering a state of pure peace she so effortlessly conjures.</p>`,
      },
      {
        id: 'special-interest-the-passion-of',
        title: 'The Passion Of',
        artist: 'Special Interest',
        content: `<b>Best album to play while hosting an apocalyptic dance party under an erupting volcano</b>
        <p>For someone who serves as the prophet of destruction on her band&rsquo;s latest album <em>The Passion Of</em>, Alli Logout is kind and candid. She walks me through her teenage years spent with best friends booking punk shows in an abandoned schoolhouse; unfortunately, outside of her small hometown she was met with an oversaturation of white men in punk who looked down upon her tightly-knit community. Special Interest&rsquo;s second record rings of Alli&rsquo;s upbringing: on it she comes to terms with the dismal state of the world while pulling those close to her even closer, asking them to stand side by side. We talked at a time when Trump&rsquo;s secret forces were snatching people off the streets of Portland, which imbued Alli&rsquo;s work with a saliency that was not lost on her. Lines like &ldquo;But would you bat an eye/Waiting for war machines to pass you by&rdquo; on &ldquo;All Tomorrow&rsquo;s Carry&rdquo; turned into a call to action, a desperate plea to fight the fires of injustice.&nbsp;</p>
        <p><br/>Even as its lyrics caustically castigate the willfully ignorant, the brutally sparse beats on <em>The Passion Of </em>form forceful techno, daring you to dance amongst shrieks of hopelessly distorted guitar and wails of menacing ambience. This tension between joy and despair threatens to consume until Alli finds a way forward on the final song &ldquo;With Love.&rdquo; The track takes one more sweeping glance at America&rsquo;s disturbing reality of oppression, and then delivers a decree of promised retribution based upon love and unity. Special Interest isn&rsquo;t afraid to face oncoming darkness, but that doesn&rsquo;t stop them from dancing.</p>`,
      },
      {
        id: 'king-britt-back2black-tooshay',
        title: 'Back2Black/TooShay',
        artist: 'King Britt',
        content: `<b>Best tracks to induce a spacefaring trance</b>
        <p>As an artist enamoured by the ideals of Afrofuturism, King Britt has always carried cosmic ambitions. In the thirty-plus years since his first gig, he&rsquo;s DJ&rsquo;d for Digable Planets, produced his own music under many monikers (including run-ins with De La Soul and Madlib), and served as a professor at UCSD&mdash;he currently teaches Blacktronica, a class about artists of color who helped pioneer electronic music. He&rsquo;s been to the stars, but for his latest two singles he brings it back down to Earth, digging up the roots of techno. &ldquo;Back2Black&rdquo; ripples with a minimal melody that periodically plunges into the depths of aquamarine textures. &ldquo;TooShay&rdquo; sends a plethora of polyrhythms on parallel paths that insistently stay their course for the large part of the song&rsquo;s 15 minute duration. As the track reaches a climax they collide in a prismatic fashion and scatter like sun rays at a day&rsquo;s end, emitting one last burst of radiance before fading away.</p>`,
      },
      {
        id: 'fake-phone-number-battle-royale-on-paper',
        title: 'Battle Royale on Paper',
        artist: 'Fake Phone Number',
        content: `<b>Best album to play at 3 am when you took too many edibles in downtown and you missed the last bus and you can’t tell if that guy across the street is frowning at you or if it’s just the way his face always looks</b>
        <p>Considering the haunted atmosphere of <em>Battle Royale on Paper</em>, perhaps it&rsquo;s appropriate that I had to re-do my interview with Ari Finkel due to technical difficulties. With a name inspired by scam calls, Finkel&rsquo;s project Fake Phone Number explores an uncanny valley populated by creeping samples climbing darkly textured mountains of techno. Skits aren&rsquo;t relegated to the peripheries, they&rsquo;re incorporated into the tracks, building an interaction that isn&rsquo;t present on most plunder-prone releases. There are moments of morbidity, such as on &ldquo;Stiffs,&rdquo; when, seconds after a sample snatched from the 1987 film <em>Angel Heart </em>describes stiffs going by in a hearse, an unsettling sample sings &ldquo;Homicide, Homicide, Homicide,&rdquo; fading in and out to mimic the doppler effect of a car passing by.&nbsp;</p>
        <p>Even the moments of humor are overshadowed by a sense of dread. &ldquo;Nightshade Pt. 1&rdquo; begins innocently enough, sampling a scene from <em>That 70&rsquo;s Show </em>parodying an anti-drug PSA: &ldquo;I have something that&rsquo;s even keener than soda pop. It&rsquo;s called marijuana,&rdquo; spouts a top-hatted man, beckoning a fresh-faced boy to join him. But as the bit takes a dark turn&mdash;&ldquo;All it takes is one puff to make you hopelessly addicted&rdquo;&mdash;a chilling synth slips through the cracks and makes the canned laughs sound frighteningly maniacal.&nbsp;</p>
        <p><br /><em>Battle Royale on Paper </em>was inspired by a night Finkel took too many tabs of acid, spiraling him into a terrifying trip that stretched towards infinity. An attempt to calm himself through ambient and jazz tracks just ramped up his anxiety, and he only pulled himself out of it after watching music videos of the menacing but amusing post-punk group The Birthday Party, who in his own words resembled &ldquo;vampires in cowboy outfits.&rdquo; His experience transforming fear into laughter colors the record, and explains why the aptly titled &ldquo;Halloween All Year&rdquo; concludes the album with a clear-eyed groove.</p>`,
      },
      {
        id: 'mourning-a-blkstar',
        title: 'The Cycle',
        artist: 'Mourning [A] Blkstar',
        content: `<b>Best use of gospel as a powerful force of change</b>
        <p>When I interviewed two of the vocalists for Mourning [A] Blkstar (James Longs and LaToya Kent) along with the writer/producer RA Washington, they huddled around their camera like a family, speaking of <em>The Cycle </em>as if it was their baby. MAB&rsquo;s inseparable nature has been an integral element to their creative process since the beginning&mdash;RA started the group after writing songs he wanted someone else to sing&mdash;but on their fourth album they take that mindset to the next level. The entirety of <em>The Cycle </em>was recorded live, with no overdubs and surprisingly few takes. Its sonics are a synthesis of diverse contributions from MAB&rsquo;s eight members: soulful vocals form flesh over skeletal samples, while drums clothe and bursts of horns adorn. Its lyrics speak of love in the midst of struggle, a fitting topic for a band so committed to togetherness.</p>`,
      },
      {
        id: 'nnamdi-brat',
        title: 'BRAT',
        artist: 'NNAMD&Iuml',
        content: `<b>Best album that will bring hip-hop and math-rock fans together</b>
        <p>Nnamd&iuml; Ogbonnaya writes all the lyrics, produces all of the tracks, and plays almost all of the instruments on his fourth album, although you wouldn&rsquo;t guess it by the way he carries himself. Disposed to a casual, humble air, at one point during the interview he shrugs and says, &ldquo;I&rsquo;m not that good at drums.&rdquo; None of this timidness can be found on the twelve tracks of <em>BRAT</em>, however. NNAMD&Iuml; is too busy switching styles ranging from hip-hop to math-rock, while simultaneously mixing humor with somberness. On &ldquo;Gimmie Gimmie,&rdquo; he unloads his greedy urges over a gleeful beat, complimented by a music video featuring NNAMD&Iuml; stealing a kid&rsquo;s ice cream cone. &ldquo;Everyone I Loved&rdquo; reckons with strained relationships and the fear of drifting away as NNAMD&Iuml; actively disproves his assertion that he&rsquo;s bad at drums.</p>
        <p><br />After the release of <em>BRAT</em>, it only took three months for another album to emerge. Inspired by looney toons, <em>KRAZY KARL </em>is a whirlwind of rhythmic experimentation and untethered melodies that was whipped up in a week&rsquo;s time. If that wasn&rsquo;t enough, NNAMD&Iuml; also drums in the post/math-rock group Monobody, who just released a new single last month. Needless to say you&rsquo;d be lucky to be a NNAMD&Iuml; fan, because there&rsquo;s clearly much more to come.</p>`,
      },
      {
        id: 'ono-red-summer',
        title: 'Red Summer',
        artist: 'ONO',
        content: `<b>Best music that isn't actually music</b>
        <p>When I started the Zoom for ONO&rsquo;s interview, I was greeted by their vocalist travis, who was sporting a grizzled grey beard and a wide smile. A wig most closely resembling a jellyfish was wrapped in lights and perched atop his head, while dozens of bedazzled crosses covered the wall behind him, many featuring miniature figurines of a crucified Jesus. I recognized the wig from a fiery performance ONO gave in Chicago, in which travis changes from a raincoat with a frightening hood to an outfit resembling a hazmat suit to an apron-like dress where the wig made its appearance. To my slight disappointment, travis removed it as we prepared to begin the interview.&nbsp;</p>
        <p>Once travis was joined by his band members Michael P ONO and Jordan Reyes, I asked my first question. What followed was an earnest discussion where I was merely an observer, an attendant of a lecture from a circle of academics and philosophers. I learned about the group&rsquo;s view of capitalism&rsquo;s effect on racial injustice, travis&rsquo; eventful life accented by time spent with the U.S. Navy and his education at Northwestern (from which he graduated with a 4.0 GPA), and the aim of ONO&rsquo;s art to serve as educational activism. <em>Red Summer </em>indeed opens a tome of dark history. travis&rsquo; spoken word vocals reference the Tuskegee incident, The Haitian Revolution, and of course the Red Summer of 1919, weaving together a disturbing web of inequity. The accompanying music is&mdash;according to ONO&rsquo;s mission statement&mdash;not music but rather &ldquo;Experimental, Noise, and Industrial Poetry ... Exploring Gospel's Darkest Conflicts, Tragedies and Premises.&rdquo; More than 40 years after their formation, they&rsquo;re still exploring, and I doubt they&rsquo;ll stop anytime soon.</p>`,
      },
      {
        id: 'asuquomo-diobu',
        title: 'Diobu',
        artist: 'Asuquomo',
        content: `<b>Best album to listen to when you’re homesick</b>
        <p>Named after the neighborhood in Nigeria where he was born and raised, <em>DIOBU </em>was released by Morris Ogbowu from his residence in Ottawa, Canada. While the EP was partially funded by the Ontario Arts Council and the City of Ottawa, it can largely be read as a homesick letter to his country of origin. This cultural dichotomy permeates <em>DIOBU</em>: &ldquo;YAHWEH&rdquo; features an Afrobeat groove coexisting with Ogbowu&rsquo;s determined flow, and &ldquo;FEEL AT HOME&rdquo; navigates his discovery of a sense of belonging while the beat wears the western hip-hop influence on its sleeve. As he happily dives into the record&rsquo;s intentions and inspirations, it&rsquo;s clear that the work of Asuquomo is meant to not only provide Ogbowu with a sense of peace but to make the listeners feel at home, wherever they may be.</p>`,
      },
      {
        id: 'michael-olatuja-lagos-pepper-soup',
        title: 'Lagos Pepper Soup',
        artist: 'Michael Olatuja',
        content: `<b>Best album to listen to while you're pretending to be a world class chef</b>
        <p>Named after the neighborhood in Nigeria where he was born and raised, <em>DIOBU </em>was released by Morris Ogbowu from his residence in Ottawa, Canada. While the EP was partially funded by the Ontario Arts Council and the City of Ottawa, it can largely be read as a homesick letter to his country of origin. This cultural dichotomy permeates <em>DIOBU</em>: &ldquo;YAHWEH&rdquo; features an Afrobeat groove coexisting with Ogbowu&rsquo;s determined flow, and &ldquo;FEEL AT HOME&rdquo; navigates his discovery of a sense of belonging while the beat wears the western hip-hop influence on its sleeve. As he happily dives into the record&rsquo;s intentions and inspirations, it&rsquo;s clear that the work of Asuquomo is meant to not only provide Ogbowu with a sense of peace but to make the listeners feel at home, wherever they may be.</p>`,
      },
    ],
    createdAt: 1624082838,
  },
];
