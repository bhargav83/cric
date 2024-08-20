import { nameData } from './modules/fetchers.js';
import { RankChart } from './modules/rank-chart.js';
import { SwingChart } from './modules/swing-chart.js';
import { Top10Chart } from './modules/top10-chat.js';

(async () => {
  const [scotData, englWaleData] = await nameData();

  new Top10Chart('top-s', scotData).addCaption(
    'Rank shifts in the Top 10 Cricket teams with most wins in ODIs' 
  );
  
  new Top10Chart('top-ew', englWaleData).addCaption(
    'Rank shifts in the Top 10 Batsmen with highest Total runs in ODIs'
  );

  new RankChart('pop-s', scotData).addCaption(
    'Linechart that shows the journey of all the teams from 1996 to 2020.'
  );
  new RankChart('pop-ew', englWaleData).addCaption(
    'Linechart that shows the journey of all the players from 1996 to 2020.'
  );

  new SwingChart('swing-s', scotData, 50).addCaption(
    'Line chart of teams with the largest swings in win rate'
  );
  new SwingChart('swing-ew', englWaleData, 50).addCaption(
    'Line chart of batsmen with the largest swings in highest runs per year.'
  );

})();
