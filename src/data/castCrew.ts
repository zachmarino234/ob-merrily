import placeholderPortrait from "../assets/Placeholder_Image_1.png";
import benSiegelPortrait from "../assets/headshots/cast/Ben Siegal.webp";
import brookeCrabtreePortrait from "../assets/headshots/cast/Brooke Crabtree.webp";
import davidReyesPortrait from "../assets/headshots/cast/David Reyes.webp";
import ellaMcdonnellPortrait from "../assets/headshots/cast/Ella McDonnell.webp";
import joeyRussonielloPortrait from "../assets/headshots/cast/Joey Russoniello.webp";
import laurenSanFanAndrePortrait from "../assets/headshots/cast/Lauren SanFanAndre.webp";
import lukeMcCarthyPortrait from "../assets/headshots/cast/Luke McCarthy.webp";
import maxBieberPortrait from "../assets/headshots/cast/Max Bieber.webp";
import ninaPiercePortrait from "../assets/headshots/cast/Nina Pierce.webp";
import noaBurrowsPortrait from "../assets/headshots/cast/Noa Burrows.webp";
import ryanDarrellPortrait from "../assets/headshots/cast/Ryan Darrell.webp";
import sophiaInsuaPortrait from "../assets/headshots/cast/Sophia Insua.webp";
import sophieFreemanPortrait from "../assets/headshots/cast/Sophie Freeman.webp";
import sophieSamSamplinerPortrait from "../assets/headshots/cast/Sophie _Sam_ Sampliner.webp";
import sydneyLowryPortrait from "../assets/headshots/cast/Sydney Lowry.webp";
import tobiAjelabiPortrait from "../assets/headshots/cast/Tobi Ajelabi.webp";

export type CastCrewMember = {
  id: string;
  name: string;
  pronouns: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export const castMembers: CastCrewMember[] = [
  {
    id: "joey-russoniello",
    name: "Joey Russoniello",
    pronouns: "he/him",
    role: "Franklin Shepard",
    bio: "Joey is so excited to playing the role of Franklin Shepard in his 6th and final BU On Broadway Show. Joey would like to dearly thank the OB community for being the most wonderful and supportive group of people at Boston University. Through BUOB Joey has made some of deepest, closest, best friends in the world, and he cannot understate how important and wonderful this group has been. Thanks, old friends!",
    imageSrc: joeyRussonielloPortrait,
  },
  {
    id: "max-bieber",
    name: "Max Bieber",
    pronouns: "he/they",
    role: "Charley Kringas",
    bio: "Max Bieber (Charley) is a Music Major at BU's College of Fine Arts. This is his second semester doing BU theater; last semester, he played Bobby in company with stage troupe and music directed BUOB's production of hair. He would like to thank his friends and family for supporting him. He is so excited to play one of his dream roles along side his new old friends!",
    imageSrc: maxBieberPortrait,
  },
  {
    id: "noa-burrows",
    name: "Noa Burrows",
    pronouns: "they/them",
    role: "Mary Flynn",
    bio: "Noa is beyond honored and excited to be making their BUOB debut in this sure fire genuine walkaway blockbuster lines down to Broadway boffola SENSATIONAL box office lalapalooza gargantuan hit!!! This has seriously been one of the most wonderful experiences of their life. Words cannot describe how grateful they are to the cast, crew, and creative team for being so welcoming and supportive throughout the entire process. Thank you all for letting them put the Mary in MARYly We Roll Along (so sorry)",
    imageSrc: noaBurrowsPortrait,
  },
  {
    id: "nina-pierce",
    name: "Nina Pierce",
    pronouns: "she/her",
    role: "Gussie Carnegie",
    bio: "Nina is a senior studying Biomedical Engineering at BU and is thrilled to be part of Merrily as her first and final on-campus musical. Her favorite past role was Sophie in Mamma Mia! at Coronado School of the Arts. She sings and plays keys in the band Thru Traffic, loves to playing guitar, travel, and spend time with her friends. Nina wants to thank her fellow cast members, and her family and friends for always supporting her artistic pursuits and hopes that you enjoy the show!",
    imageSrc: ninaPiercePortrait,
  },
  {
    id: "sydney-lowry",
    name: "Sydney Lowry",
    pronouns: "she/her",
    role: "Beth Shepard",
    bio: "Sydney is so excited for her BUOB debut! Selected previous roles include Clarissa/Queen of Diamonds (Alice by Heart), Margaret Truman (First Lady Suite), Female Swing (Ride the Cyclone), and Mme Renaud (La Cage Aux Folles) at Emerson College. She is grateful to the cast and crew for being so welcoming for her first show at BU, as well as to her friends and family for their never-ending support!",
    imageSrc: sydneyLowryPortrait,
  },
  {
    id: "luke-mccarthy",
    name: "Luke McCarthy",
    pronouns: "he/him",
    role: "Joe Josephson",
    bio: "Senior in Electrical Engineering that somehow got shoehorned into this show. I sing tunes that are HUMMMUMUMMUMABLE",
    imageSrc: lukeMcCarthyPortrait,
  },
  {
    id: "lauren-sanfanandre",
    name: "Lauren SanFanAndre",
    pronouns: "she/her",
    role: "Meg Kincaid + Others",
    bio: "In her first, and last, student theater show, Lauren is so excited to have fun with her bestest friends in the whole world one last time! Still, we bumble our way through life's crazy labyrinth <3",
    imageSrc: laurenSanFanAndrePortrait,
  },
  {
    id: "sophie-sam-sampliner",
    name: "Sophie \"Sam\" Sampliner",
    pronouns: "she/her",
    role: "Frank Jr. / Ensemble",
    bio: "Sam, a junior in CAS, studying Mathematics and Philosophy with a minor in Theatre Arts, is honored to be breaking out of her type cast with the young, exuberant, and straight(?) Frankie. She wants to thank the crew for being the awesomest, the pit folks for being so swag, her lovely castmates for such joy and friendship, and the best creative team for this opportunity to prove her youth. Here's to us, subito 7/8s, and the Pamana Canal. Big love xx",
    imageSrc: sophieSamSamplinerPortrait,
  },
  {
    id: "tobi-ajelabi",
    name: "Tobi Ajelabi",
    pronouns: "they/she",
    role: "K.T. and Mrs. Spencer",
    bio: "Tobi is a life-long theater kid and is very excited to be a part of their first Sondheim musical! They hope you enjoy the show!",
    imageSrc: tobiAjelabiPortrait,
  },
  {
    id: "ben-siegel",
    name: "Ben Siegel",
    pronouns: "he/him",
    role: "Tyler / Ensemble",
    bio: "Ben is a freshman and excited to be in his second OB show!",
    imageSrc: benSiegelPortrait,
  },
  {
    id: "ella-mcdonnell",
    name: "Ella McDonnell",
    pronouns: "she/her",
    role: "Terry / Ensemble",
    bio: "ella is so happy to be in her final production with OB this semester! you may have seen her in the past playing egg (something rotten), scary dancer (next to normal) or bama lamb (big fish). ella loves her BUOB family so dearly and can't think of a better way to end her theater career than being in this beautiful show! thank you to everyone involved for making this show so special.",
    imageSrc: ellaMcdonnellPortrait,
  },
  {
    id: "sophia-insua",
    name: "Sophia Insua",
    pronouns: "she/her",
    role: "Ru",
    bio: "Sophia is thrilled to be performing with OB again after her leave last semester. Please enjoy her grand return as Ru, Judge, Minister, and (most importantly) Blob Member #7.",
    imageSrc: sophiaInsuaPortrait,
  },
  {
    id: "david-reyes",
    name: "David Reyes",
    pronouns: "he/him",
    role: "Scotty",
    bio: "David is so excited to return to BUOB this semester, playing Scotty in Merrily We Roll Along! He wants to thank the rest of his cast, crew, pit, and all other CT members for helping make this show possible. It's going to be a great time-enjoy!!!",
    imageSrc: davidReyesPortrait,
  },
  {
    id: "ryan-darrell",
    name: "Ryan Darrell",
    pronouns: "he/him",
    role: "Jerome",
    bio: "In the ENG class of 2029 for Mechanical engineering, this is Ryan's second show with Boston University, after playing Berger in Hair. Ryan is very excited to continue with this club, and any show that arises in the future.",
    imageSrc: ryanDarrellPortrait,
  },
  {
    id: "brooke-crabtree",
    name: "Brooke Crabtree",
    pronouns: "she/her",
    role: "Dory / Newswoman",
    bio: "brooke crabtree should have quit theater in high school. right? she said she was going to. well, she's back. sondheim was calling, and you don't hang up on sondheim. brooke would like to thank quinn morgenroth, andrew scott, and mike faist for their never-ending inspiration in the realm of theater (#WhenYoureAJetYoureAJetAllTheWay). she hopes you remember the tunes past the parking lot.",
    imageSrc: brookeCrabtreePortrait,
  },
  {
    id: "sophie-freeman",
    name: "Sophie Freeman",
    pronouns: "she/her",
    role: "Bunker / Ensemble",
    bio: "Bunker/Ensemble",
    imageSrc: sophieFreemanPortrait,
  },
];

export const crewMembers: CastCrewMember[] = [
  {
    id: "amy-fu",
    name: "Amy Fu",
    pronouns: "she/her",
    role: "Hair and Makeup",
    bio: "Glad to help all the cast members look amazing!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "beatrice-levine",
    name: "Beatrice Levine",
    pronouns: "she/her",
    role: "Hair and Makeup",
    bio: "I love doing hair and makeup and making everyone look pretty",
    imageSrc: placeholderPortrait,
  },
  {
    id: "devin-rauscher",
    name: "Devin Rauscher",
    pronouns: "he/they",
    role: "Head of Costumes",
    bio: "Devin is so thrilled to be back in the theater working with an amazing team, so surrounded by feathers and pearls, so emotional about putting on his last college show, and so lucky to be doing it all with old friends.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "emma-park-miller",
    name: "Emma Park-Miller",
    pronouns: "she/her",
    role: "Head Props",
    bio: "EPM feels merry with props!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "ethan-mostoslavsky",
    name: "Ethan Mostoslavsky",
    pronouns: "he/him",
    role: "Head of Lights",
    bio: "Ethan is a junior studying linguistics. He likes doing lights, and he also does a some directing and acting. Fun fun fun fun fun",
    imageSrc: placeholderPortrait,
  },
  {
    id: "jessica-jara",
    name: "Jessica Jara",
    pronouns: "she/her",
    role: "Sound Crew",
    bio: "This is Jessica Jara's 7th OB show, and she is excited to be back in the Student Theater booth! She'd like to thank everyone for being patient, sounding awesome, and having funnn",
    imageSrc: placeholderPortrait,
  },
  {
    id: "meghan-mcgrody",
    name: "Meghan McGrody",
    pronouns: "she/her",
    role: "Hair and Makeup Dept Head",
    bio: "I have had so much fun working on hair and makeup with BUOB this past year and it has been absolute joy to work with my roommate and bff and most talented director Belen!!! Thank you times one million for trusting me with your face and your hair, it has been one of the highlights of my senior year. Much love!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "sydney-katz",
    name: "Sydney Katz",
    pronouns: "she/her",
    role: "Build",
    bio: "John Mackie is the only reason I'm here #keepyourenemiescloser",
    imageSrc: placeholderPortrait,
  },
  {
    id: "zach-marino",
    name: "Zach Marino",
    pronouns: "he/him",
    role: "Brand Designer",
    bio: "Zach is an experience designer and masters student at Northeastern University. He got bit by the Broadway bug spending his summer in New York, and works as a Design Consultant at No Pool Productions. He has worked at the Boston Globe and Dow Jones, and this is his first time in OB. Congrats to Dylan, Belen, and the whole team - and special thanks to Dylan for all the game nights, Emily for being a great partner, and the cast of Operation Mincemeat on Broadway, for everything.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "stef-linden",
    name: "Stef Linden",
    pronouns: "she/her",
    role: "Build Team",
    bio: "Stef Linden is a senior in CAS who has worked on OB shows throughout her time at BU and is excited to get the chance to work on one last one. She wants you to know how much work goes into each and every production and hopes you enjoy this one as much as she does.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "roger-brown",
    name: "Roger Brown",
    pronouns: "he/him",
    role: "Sound",
    bio: "I am a Senior in Electrical Engineering and I've worked for 4 years at Student Production Services. I love musicals and theater and I have a great appreciation for all the technical elements of a show. As soon as I heard that this show was going to have an extensive audio production I knew I had to be a part of it. I am very excited to be a part of this fantastic show.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "david-zhu",
    name: "David Zhu",
    pronouns: "they/them",
    role: "Props",
    bio: "David is a freshmen in CDS who likes doing theater stuff on the side. They spend most of their time listening to show tunes and stressing out over work. Shout out to whoever's reading this for showing up and reading these playbill bios.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "scarlett-wills",
    name: "Scarlett Wills",
    pronouns: "she/her",
    role: "Build Team",
    bio: "Scarlett Wills is a senior majoring in Art History with minors in WGS and the Core Curriculum. This is her fourth and final OB show. She is here to use a drill and have fun. Gooooooo Build!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "lydia-hall",
    name: "Lydia Hall",
    pronouns: "any",
    role: "Build",
    bio: "Lydia is SO EXCITED THEY LOVE MERRILY!!! This is such an ambitious project and they hope all the hard work of everyone involved paid off <3 be merrily and enjoy!!!",
    imageSrc: placeholderPortrait,
  },
];

export const creativeMembers: CastCrewMember[] = [
  {
    id: "dylan-gozdziewski",
    name: "Dylan Gozdziewski",
    pronouns: "he/they",
    role: "Co-Director",
    bio: "Dylan Gozdziewski is a senior in COM studying Film/TV. This is his 8th and final show with BUOB. They have previously directed Next to Normal, as well as acted and tech directed. He owes everything to his family, Joe Farina and Richard Chibbaro, and his friends for all their support in his endeavors. He especially wants to thank Belen, his stunning co-director, for doing this with him. After graduation, Dylan is off to Prague with the Prague Shakespeare Company as a Production Associate.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "maria-belen-ordonez",
    name: "Maria Belen Ordonez",
    pronouns: "she/they",
    role: "Co-Director",
    bio: "This is Belen's 4th OB show ever. But more importantly, this is her 2nd show directing with her best friend Dylan. It's been the pleasure of her life to explore this story with one of the people who will be around when she's old, wrinkled, and rolling it back. She wants to thank her cast, crew, and creative team. Without each and every one of them, this show wouldn't be a fraction of how wonderful it is. Belen hopes you leave tonight holding your big dreams and your friends very very close.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "emily-wyrwa",
    name: "Emily Wyrwa",
    pronouns: "she/her",
    role: "Lead Producer",
    bio: "Emily is a senior in COM and works in Broadway marketing at Theatrely, and is an Associate Producer at No Pool Productions. In OB, she ASMed Next to Normal, and was on the dream lighting team (shoutout to Dylan and Line) on 3 student theatre shows. Huge thanks to her parents, friends, boss Kobi, and partner Zach for their support of her dreams. Congrats to the whole team; it's our time!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "simone-gilbert",
    name: "Simone Gilbert",
    pronouns: "she/her",
    role: "Assistant Producer",
    bio: "Simone is really excited to be an Assistant Producer for Merilly We Roll Along. She loves theater, and some of her favorite shows include Sweeney Todd and Les Miserables. Enjoy the show!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "megan-amato",
    name: "Megan Amato",
    pronouns: "she/her",
    role: "Assistant Producer",
    bio: "Megan loved making instagrams for this show! Megan is an Avatar, YAY!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "elise-allaway",
    name: "Elise Allaway",
    pronouns: "she/her",
    role: "Assistant Producer",
    bio: "This is Elise's first show with BU on Broadway. She is very excited to be working with such an amazing team this semester and can't wait for the next. Elise loves the show, Merrily we Roll Along, and is beyond excited to see how it all comes along!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "heather-murray",
    name: "Heather Murray",
    pronouns: "unspecified",
    role: "Co-Technical Director",
    bio: "Heather is graduating this spring hoping to do applied policy work. Heather is thrilled to collaborate with their old friends in their 4th + final TD endeavor. Heather thanks Brycen, and all of the techies for making the dreams of a remote pit, raising the student theater ceiling, and time travel a reality. Who could have known that a random college sidequest would teach Heather so much? Without BU theatre, Heather is looking for hobbies to get way too into post-grad - thinking pottery, but open to suggestions?!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "emily-dahl",
    name: "Emily Dahl",
    pronouns: "she/her",
    role: "Assistant Technical Director",
    bio: "Emily is extremely merry to be working on her 5th show with OB! She couldn't have asked for a merrier cast and crew, and it has been very merry every step of the way. She hopes the show leaves you just as merry as she is... but she doubts anyone can be merrier than her. Roll along!",
    imageSrc: placeholderPortrait,
  },
  {
    id: "sunanda-guruprasad",
    name: "Sunanda Guruprasad",
    pronouns: "she/her",
    role: "Stage Manager",
    bio: "sunanda loves theatre and the friends she made through it. she's found such a beautiful space that helped create memories to last a lifetime. this is the best way she could've thought of to end her journey in college and start a new one after! to her dear friends, she hopes this isn't the end of their cycle in her life. but if it is, thank you and your impact on her life is not one she takes lightly.",
    imageSrc: placeholderPortrait,
  },
  {
    id: "rachel-beth-mannix",
    name: "Rachel Beth Mannix",
    pronouns: "she/her",
    role: "Assistant Stage Manager",
    bio: "This is Rachel Beth's first production with BUOB (and first time assistant stage managing) and she is so grateful for this incredible experience! She is absolutely thrilled that her return to theatre was with such an amazing cast, crew, and show, and, as a spring semester senior, is so sad that she didn't join sooner! She can only hope her future brings her many more collaborations like this. She is especially thankful for her parents, who have always supported her exploring her many interests.",
    imageSrc: placeholderPortrait,
  },
];

export const pitMembers: CastCrewMember[] = [];
