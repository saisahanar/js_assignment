// Question 3:
// Write a program to generate a quote randomly and display it on the web page in a proper format.



let quotes=["“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
  "“The secret of getting ahead is getting started.” – Mark Twain",
  "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan",
  "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash",
  "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
  "“Only the paranoid survive.” – Andy Grove",
  "“It’s hard to beat a person who never gives up.” – Babe Ruth",
  "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque",
  "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
  "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington",
  "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon","“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah",
  "“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln",
  "“Everything comes to him who hustles while he waits.”― Thomas Edison",
  "“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan",
  "“Invest in your dreams. Grind now. Shine later.” – Unknown",
  "“Hustlers don’t sleep, they nap.” – Unknown",
  "“Greatness only comes before hustle in the dictionary.” – Ross Simmonds",
  "“Without hustle, talent will only carry you so far.” – Gary Vaynerchuk",
  "“Work like there is someone working twenty four hours a day to take it away from you.” – Mark Cuban",
  "“Hustle in silence and let your success make the noise.” – Unknown","“The hard days are what make you stronger.” – Aly Raisman",
  "“If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.” – Wayne Dyer",
  "“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt",
  "“You can waste your lives drawing lines. Or you can live your life crossing them.” – Shonda Rhimes",
  "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” – George Lorimer",
  "“I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be.” – Michelle Obama",
  "“In a gentle way, you can shake the world.” – Mahatma Gandhi",
  "“If opportunity doesn’t knock, build a door.” – Kurt Cobain",
  "“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.” – Roy T. Bennett",
  "“Work hard in silence, let your success be the noise.” – Frank Ocean",];
  
  function clickme(){
    let no=Math.floor(Math.random()*(quotes.length));
    document.getElementById("quotedisplay").innerHTML=quotes[no]
  }
  const dmode=document.getElementById("btn")

dmode.onclick=function myFunction() {
    if(dmode.innerText=="DARK MODE"){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        dmode.innerText="LIGHT MODE";
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        dmode.innerText="DARK MODE";
    }
    
  }