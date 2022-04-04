import React from "react";
import "./GamesInfo.css";
import Navbar from "../Navbar/Navbar";
import pokerImg from "../../images/poker-menu.jpg";
import poker5CardsImg from "../../images/war-menu.jpg";
import blackJackImg from "../../images/black-jack-menu.jpg";
import warImg from "../../images/thousand-menu.png";
import rouletteImg from "../../images/roulette-menu.jpg";


function GamesImfo() {
    return (
        <section className="games-info">
            <Navbar />
            <div className="game-info--hero">
                <h1>Read information about our games</h1>
            </div>
            <div className="games-info__container">
                <div className="games-info--poker">
                    <h2>Poker Rouls</h2>
                    <img src={pokerImg} alt={"example"}/>
                    <p>As early as the sixteenth century, Germans played a bluffing game called "Pochen."
                       It later developed into a French version, called "Poque," which was eventually brought over
                       to New Orleans and played on the riverboats that plied the Mississippi.
                       In the 1830s, the game was refined further and became known as Poker. During the Civil War,
                       the key rule about drawing cards to improve one's hand was added. A variation - Stud Poker - appeared
                       at about the same time. There are hundreds of versions of Poker, and the game is played not only in
                       private homes, but also in countless Poker rooms at famous casinos. Poker can be played socially
                       for pennies or matchsticks, or professionally for thousands of dollars.
                       There is plenty of luck in Poker, but the game requires incredibly great skill as well,
                       and each player is the master of his own fate.</p>
                    <h4>THE PACK</h4>
                    <p>The standard 52-card pack, sometimes with the addition of one or two jokers, is used.
                        Poker is a one-pack game, but today, in virtually all games played in clubs and among
                        the best players, two packs of contrasting colors are utilized in order to speed up the game.
                        While one pack is being dealt, the other is being shuffled and prepared for the next deal.
                        The procedure for two packs is as follows: While the deal is in progress, the previous dealer
                        assembles all the cards from the pack he dealt, shuffles them, and places them to the left.
                        When it is time for the next deal, the shuffled deck is passed to the next dealer.
                        In many games in which two packs are used, the dealer's left-hand opponent,
                        instead of the right-hand opponent, cuts the pack.</p>

                    <p>As early as the sixteenth century, Germans played a bluffing game&nbsp;called "Pochen." It later developed into a French version, called "Poque," which was eventually brought over to New Orleans and played on the riverboats that plied the Mississippi.</p>
                    <p>In the 1830s, the game was refined further and became known as Poker. During the Civil War, the key rule about drawing cards to improve one's hand was added. A variation - Stud Poker - appeared at about the same time. There are hundreds of versions of Poker, and the game is played not only in private homes, but also in countless Poker rooms at famous casinos. Poker can be played socially for pennies or matchsticks, or professionally for thousands of dollars.</p>
                    <p>There is plenty of luck in Poker, but the game requires incredibly great skill as well, and each player is the master of his own fate.</p>
                    <h4>The Pack</h4>
                    <p>The standard 52-card pack, sometimes with the addition of one or two jokers, is used. Poker is a one-pack game, but today, in virtually all games played in clubs and among the best players, two packs of contrasting colors are utilized in order to speed up the game. While one pack is being dealt, the other is being shuffled and prepared for the next deal. The procedure for two packs is as follows: While the deal is in progress, the previous dealer assembles all the cards from the pack he dealt, shuffles them, and places them to the left. When it is time for the next deal, the shuffled deck is passed to the next dealer. In many games in which two packs are used, the dealer's left-hand opponent, instead of the right-hand opponent, cuts the pack.</p>
                    <p>In clubs, it is customary to change cards often and to permit any player to call for new cards whenever they wish. When new cards are introduced, both packs are replaced, and the seal and cellophane wrapping on the new decks should be broken in full view of all the players.</p>
                    <h4>Card Values/Scoring</h4>
                    <p>While Poker is played in innumerable forms, a player who understands the values of the Poker hands and the principles of betting can play without difficulty in any type of Poker game. Except in a few versions of the game, a Poker hand consists of five cards. The various combinations of Poker hands rank from five of a kind (the highest) to no pair or nothing (the lowest):</p>
                    <p><strong>Five of a Kind</strong> – This is the highest possible hand and can occur only in games where at least one card is wild, such as a joker, the two one-eyed jacks, or the four deuces. Examples of five of a kind would be four 10s and a wild card or two queens and three wild cards.</p>
                    <p><strong>Straight Flush</strong> – This is the highest possible hand when only the standard pack is used, and there are no wild cards. A straight flush consists of five cards of the same suit in sequence, such as 10, 9, 8, 7, 6 of hearts. The highest-ranking straight flush is the A, K, Q, J, and 10 of one suit, and this combination has a special name: a royal flush or a royal straight flush. The odds on being dealt this hand are 1 in almost 650,000.</p>
                    <p><strong>Four of a Kind</strong> – This is the next highest hand, and it ranks just below a straight flush. An example is four aces or four 3s. It does not matter what the fifth, unmatched card is.</p>
                    <p><strong>Full House</strong> – This colorful hand is made up of three cards of one rank and two cards of another rank, such as three 8s and two 4s, or three aces and two 6s.</p>
                    <p><strong>Flush</strong> – Five cards, all of the same suit, but not all in sequence, is a flush. An example is Q, 10, 7, 6, and 2 of clubs.</p>
                    <p><strong>Straight</strong> – Five cards in sequence, but not all of the same suit is a straight. An example is 9♥, 8♣, 7♠, 6♦, 5♥.</p>
                    <p><strong>Three of a Kind</strong> – This combination contains three cards of the same rank, and the other two cards each of a different rank, such as three jacks, a seven, and a four.</p>
                    <p><strong>Two Pairs</strong> – This hand contains a pair of one rank and another pair of a different rank, plus any fifth card of a different rank, such as Q, Q, 7, 7, 4.</p>
                    <p><strong>One Pair</strong> – This frequent combination contains just one pair with the other three cards being of different rank. An example is 10, 10, K, 4, 3.</p>
                    <p><strong>No Pair</strong> – This very common hand contains "nothing." None of the five cards pair up, nor are all five cards of the same suit or consecutive in rank. When more than one player has no pair, the hands are rated by the highest card each hand contains, so that an ace-high hand beats a king-high hand, and so on.</p>
                    <p>Two hands that are identical, card for card, are tied since the suits have no relative rank in Poker. In such a case, the tied players split the pot. Note that if two hands contain the same high pair, then the ranking of the next card in the hands determines which one wins. For example: 9, 9, 7, 4, 2 beats 9, 9, 5, 3, 2. Likewise, two hands that have identical pairs would be decided by the fifth card. For example: Q, Q, 6, 6, J beats Q, Q, 6, 6, 10.</p>
                    <h4>Betting</h4>
                    <p>Betting is the key to Poker, for the game, in essence, is a game of chip management.</p>
                    <p>In the course of each Poker deal, there will be one or more betting intervals in which the players have an opportunity to bet on their hands. Minimizing losses with poor hands and maximizing winnings with good hands is the underlying skill that Poker requires.</p>
                    <p>Before the cards are even dealt, the rules of the Poker game being played may require that each player put an initial contribution, called an "ante," of one or more chips into the pot, to start it off.</p>
                    <p>Each betting interval, or round, begins when a player, in turn, makes a bet of one or more chips. Each player to the left, in turn, must either "call" that bet by putting into the pot the same number of chips; or "raise," which means that the player puts in more than enough chips to call; or "drop" ("fold"), which means that the player puts no chips in the pot, discards their hand, and is out of the betting until the next deal.</p>
                    <p>When a player drops, they lose any chips that have put into that pot. Unless a player is willing to put into the pot at least as many chips as any preceding player, they must drop out.</p>
                    <p>A betting interval ends when the bets have been equalized - that is, when each player has either put in exactly as many chips as their predecessors or has dropped. There are usually two or more betting intervals for each Poker deal. After the final interval there is a "showdown," which means that each player who remains shows their hand face up on the table. The best Poker hand then takes the pot.</p>
                    <p>If a player makes a bet or a raise that no other player calls, they win the pot without showing their hand. Thus, in Poker, there is a bluffing element, and the best combination of cards does not always win the pot! Bluffing is one of the key reasons why Poker is so popular.</p>
                    <p>If a player wishes to remain in the game without betting, they "check." This means, in effect, that the player is making a "bet of nothing." A player may check provided no one before them in that betting interval has made a bet. If another player has bet, they cannot check but must at least call the bet or drop. A player who checks may raise a bet that has been raised by another player. This is called "sandbagging," which is allowed, unless it has been decided beforehand that this practice is forbidden. If all players check during a round of play, the betting interval is over, and all the players still in the pot remain in the game.</p>
                    <p>In each betting round, one player is designated as the first bettor, according to the rules of the game. The turn to bet always moves to the left, from player to player, and no one may check, bet, or even drop, except when it is their turn.</p>
                    <h5>Knowing When to Bet</h5>
                    <p>The ranking of Poker hands is based on mathematics. The less likely a player is to get a certain hand, the higher it ranks and the more likely it is to win the pot. For example, a player should not expect to be dealt a straight flush more than once in 65,000 hands, but they can expect to be dealt two pair about once in every 21 hands.</p>
                    <p>Unless a player is planning to bluff, they should not make a bet without holding a hand that they think may be the best. No Poker player can bet intelligently unless they know what constitutes a good hand, a fair hand, and a bad hand. A table of the various Poker hands and the number of combinations of each in a pack of cards is provided.</p>
                    <h4>The Kitty</h4>
                    <p>By unanimous or majority agreement, the players may establish a special fund called a "kitty." Usually the kitty is built up by "cutting" (taking) one low-denomination chip from each pot in which there is more than one raise. The kitty belongs to all the players equally, and it is used to pay for new decks of cards or for food and drinks. Any chips left in the kitty when the game ends are divided equally among the players who are still in the game. Unlike the rule in some other games, such as Pinochle, when a player leaves a Poker game before it ends, they are not entitled to take their share of chips that comprised part of the kitty.</p>
                    <h4>Chips</h4>
                    <p>Poker is almost always played with poker chips. For a game with seven or more players, there should be a supply of at least 200 chips. Usually, the white chip (or the lightest-colored chip) is the unit, or lowest-valued chip, worth whatever the minimum ante or bet is; a red chip (or some other colored chip) is worth five whites, and a blue chip (or some other dark-colored chip) is worth 10 or 20 or 25 whites or two, four or five reds. At the start of the game, each player "buys in" by purchasing a certain number of chips. All of the players usually buy in for the same amount.</p>
                    <h4>Banker</h4>
                    <p>One player should be designated as the banker, who keeps the stock of chips and records how many have been issued to each player or how much cash the player has paid for their chips. Players should make no private transactions or exchanges among themselves; a player with surplus chips may return them to the banker and receive credit or cash for them, while a player who wants more chips should obtain them only from the banker.</p>
                    <h4>Betting Limits</h4>
                    <p>There are different ways of fixing a betting limit. Some limit is necessary; otherwise a player with a lot more money would have, or would be perceived to have, an unfair advantage. Once fixed, the limit should be unalterable throughout the game unless the players unanimously agree to change the stakes. Some popular limit systems follow:</p>
                    <h4>Fixed limit</h4>
                    <p>No one may bet or raise by more than a stipulated number of chips, for example, two, or five, or 10. Usually this limit varies with the stage of the game: In Draw Poker, if the limit is five before the draw, it might be ten after the draw. In Stud Poker, if the limit is five in the first four betting intervals, it is 10&nbsp;in the final betting interval (and often ten whenever a player has a pair or better showing).</p>
                    <h4>Pot limit</h4>
                    <p>Any bet or raise is limited to the number of chips in the pot at that time. This means that a player who raises may count as part of the pot the number of chips required for the player to call. If there are six chips in the pot, and a bet of four is made, the total is 10 chips; it requires four chips for the next player to call, making 14; and the player may then raise by 14 chips. But even when the pot limit is played, there should be some maximum limit, such as 50 chips.</p>
                    <h4>Table stakes</h4>
                    <p>The limit for each player is the number of chips the player has in front of them. If the player has only 10 chips, they may bet no more than 10 and he may call any other player's bet to that extent. In table stakes, no player may withdraw chips from the table, or return chips to the banker, until they leave the game. A player may add to their stack, but only between the deal just completed and the beginning of the next deal.</p>
                    <h4>Whangdoodles, or Roodles</h4>
                    <p>In a fixed-limit game, it is often agreed that following any very good hand - a full house or better, for example - there will be one deal by each player of Jackpots, in which everyone antes double, and the betting limit is doubled for these deals as well.</p>
                    <h4>Poverty Poker</h4>
                    <p>A maximum limit is put on the number of chips any player may lose. Each takes out one stack at the start; if they lose that stack, the banker issues the player another, without charging for it, and in many cases, the player can get still a third stack free before dropping out of the game. (Some limit should be placed on the number of free stacks so that a player will have the incentive to play carefully.)</p>
                    <h4>No limit</h4>
                    <p>In these sessions, the "sky's the limit," but such games are rarely played today.</p>
                    <h4>Limits on Raises</h4>
                    <p>In almost all games played today, there is a limit on the number of raises at each betting interval, and this limit is invariably three raises.</p>
                    <h4>Draw &amp; Stud Poker</h4>
                    <p>The players should first decide what form of Poker they will play</p>
                    <p>The main forms of Poker are <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Draw Poker</a> and <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Stud Poker.</a> In Draw Poker, all the cards are dealt face down to the players. In Stud Poker, some of the cards are dealt face up as the betting progresses, so that all of the other players get to see a part of each player's hands.</p>
                    <p>Unless the host, or the rule of a club, has already established the game, the players should first decide what form of Poker they will play. Two factors should influence their decision: the number of players, and whether the group has only experienced players or has some inexperienced players. The following selections are recommended:</p>
                    <p><strong><em>2, 3 or 4 players:</em></strong> <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Stud Poker</a> in any form. Usually, with so few players, only the very experienced play <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Draw Poker</a> and they will often use a stripped deck, which is a pack with cards removed, such as all the deuces (twos) and treys (threes).</p>
                    <p>5—8 players: Any form of Poker, either <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Draw</a> or <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Stud.</a></p>
                    <p>9 or 10 players: <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Five-card Stud Poker</a></p>
                    <p>More than 10 players: One of the games in which fewer than five cards are dealt, such as <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Three-Card Monte</a> or <a href="https://bicyclecards.wpengine.com/card-games/rule/basics-of-poker">Spit-in-the-Ocean.</a> All of the Poker variations are described later in this chapter. Another alternative with so many players is to simply form two tables and organize two separate games.</p>
                    <h4>Dealer's Choice</h4>
                    <p>When the Poker session is Dealer's Choice, each dealer has the privilege of naming the form of Poker to be played and to designate the ante, wild cards (if any), and the maximum limit of chips that can be wagered during each round. However, the dealer may not require one player to ante more than another. If a game such as Jackpots is selected and no one opens the betting, the same dealer deals again and everyone antes again.</p>
                    <h4>Wild Cards</h4>
                    <p>While most Poker purists choose to play with no wild cards, in many games, especially Dealer's Choice, various cards may be designated as wild. A wild card is specified by the holder to be a card of any rank or suit, such as a fifth queen, or the card needed to combine with the other four in a player's hand to form a straight or a flush. Wild cards in a Poker game add variety, and of course, they greatly increase the chances of getting a rare combination such as a full house or a straight flush. The usual choices for wild cards are as follows:</p>
                    <h4>The Joker</h4>
                    <p>Note that most packs of cards include two jokers for use in such games as Canasta. Poker players are increasingly adding one or both jokers as wild cards.</p>
                    <h4>The Bug</h4>
                    <p>This is the joker, but its wildness is limited: It counts as an ace; or as a card of any suit for making a flush; or as a card of any rank and suit for making a straight or straight flush.</p>
                    <h4>Deuces</h4>
                    <p>"Deuces Wild" is a popular form of Draw Poker. Every two is wild. Sometimes the joker is included as a fifth wild card. Note that the number of wild cards in a hand does not diminish it in anyway; thus, with deuces wild, five of a kind comprised of 10, 10, 2, 2, 2 (five 10s) beats 8, 8, 8, 8, 2 (five 8s).</p>
                    <h4>One-eyed cards</h4>
                    <p>The king of diamonds and the jacks of spades and hearts show only one eye, whereas the other face cards all have two eyes. One-eyed jacks are sometimes designated as wild cards, but the king of diamonds is rarely selected to be wild.</p>
                    <h4>Low hole card</h4>
                    <p>In Stud Poker, each player's lowest "hole" card (that is, the lowest card that is dealt face down and not seen by the other players) is wild. In Draw Poker, the wild card would be the lowest card in a player's hand. When such a card is designated, it means that every card of that rank in that player's hand is wild, but the fact that a certain card is wild in one player's hand does not make that same rank of card wild in other players' hands.</p>
                    <h4>Laws and Ethics</h4>
                    <p>In every game, a written code of Poker laws should be used as the final arbiter for settling all questions. No Poker laws are universally followed - there are many local customs and preferences - but the Poker laws on this site embrace the latest customs of the most expert games and are recommended for adoption. It is a tradition of Poker that any club or group of players may make special rules, called "house rules," to suit their personal preferences. Of course, any such house rules should be written down.</p>
                    <h4>Time Limit</h4>
                    <p>Before play begins, the players should set a time limit for when the game ends and stick to it. Violation of this principle could eventually turn pleasant sessions into unpleasant ones. Often when the time for quitting is approaching, the host or one of the players will say "three more deals" or "through Zane's deal," so that players will know how many deals are left and can gauge their strategies accordingly.</p>
 

                </div>
                <div className="games-info--poker-5-cards">
                    <h2>Poker 5 Cards Rouls</h2>
                    <img src={poker5CardsImg} alt={"example"}/>
                    <h4>The Deck</h4>
                    <p>In order to play a Poker game, you’ll need a classic 4-suits 52-cards deck. You don’t
                       need Jokers, unless you want to play with wildcards (for now I suggest you to stick with
                       the classic gameplay, until you get used to the basic rules). The only tricky cards are the aces,
                       because they can be played high (after a King) or low (before a two) in a straight, according to
                       the situation. However, is not a big deal, you’ll get used to it pretty fast, don’t worry! And
                       remember: in order to play you also need chips. Those have to be split equally between players at
                       the beginning of the game, and are used to bet during hands.</p>
                    <h4>Who wins?</h4>
                    <p>Obviously, at the end of the day, the player with the most chips wins. In order to gain more chips,
                        you have to win hands: at the end of every hand, after two bet rounds, the player with the
                        highest-valued hand wins and takes the pot. In order to be sure of how strong is your hand,
                        you should get used to the hand ranking (check it out here). Misevaluating hands is one of
                        the most common mistakes among new players and you don’t want to lose a hand because you 
                        thought your double pair was higher than your opponent’s three of a kind, so be careful!</p>
                    <h4>The game</h4>
                    <p>Now, let’s see the structure of an hand, going on step by step. You should become used to it,
                       so that you don't have to worry about what to do next during the game, and rather remain focused
                       on your game plan and your opponents.</p>
                </div>
                <div className="games-info--blackjack">
                    <h2>BlackJack Rouls</h2>
                    <img src={blackJackImg} alt={"example"}/>
                 
                    <p>Equally well known as Twenty-One.&nbsp;The rules are simple, the play is thrilling, and there is opportunity for high strategy. In fact, for the expert player who mathematically plays a perfect game and is able to count cards, the odds are sometimes in that player's favor to win.</p>
                    <p>But even for the casual participant who plays a reasonably good game, the casino odds are less, making Blackjack one of the most attractive casino games for the player. While the popularity of Blackjack dates from World War I, its roots go back to the 1760s in France, where it is called Vingt-et-Un (French for 21). Today, Blackjack is the one card game that can be found in every American casino. As a popular home game, it is played with slightly different rules. In the casino version, the house is the dealer (a "permanent bank"). In casino play, the dealer remains standing, and the players are seated. The dealer is in charge of running all aspects of the game, from shuffling and dealing the cards to handling all bets. In the home game, all of the players have the opportunity to be the dealer (a "changing bank").</p>
                    <h4>The Pack</h4>
                    <p>The standard 52-card pack is used, but in most casinos several decks of cards are shuffled together. The six-deck game (312 cards) is the most popular. In addition, the dealer uses a blank plastic card, which is never dealt, but is placed toward the bottom of the pack to indicate when it will be time for the cards to be reshuffled. When four or more decks are used, they are dealt from a shoe (a box that allows the dealer to remove cards one at a time, face down, without actually holding one or more packs).</p>
                    <h4>Object of the Game</h4>
                    <p>Each participant attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.</p>
                    <h4>Card Values/Scoring</h4>
                    <p>It is up to each individual player if an ace is worth 1 or 11. Face cards are 10 and any other card is its pip value.</p>
                    <h4>Betting</h4>
                    <p>Before the deal begins, each player places a bet, in chips, in front of them in the designated area. Minimum and maximum limits are established on the betting, and the general limits are from $2 to $500.</p>
                    <h4>The Shuffle and Cut</h4>
                    <p>The dealer thoroughly shuffles portions of the pack until all the cards have been mixed and combined. The dealer designates one of the players to cut, and the plastic insert card is placed so that the last 60 to 75 cards or so will not be used. (Not dealing to the bottom of all the cards makes it more difficult for professional card counters to operate effectively.)</p>
                    <h4>The Deal</h4>
                    <p>When all the players have placed their bets, the dealer gives one card face up to each player in rotation clockwise, and then one card face up to themselves. Another round of cards is then dealt face up to each player, but the dealer takes the second card face down. Thus, each player except the dealer receives two cards face up, and the dealer receives one card face up and one card face down. (In some games, played with only one deck, the players' cards are dealt face down and they get to hold them. Today, however, virtually all Blackjack games feature the players' cards dealt face up on the condition that no player may touch any cards.)</p>
                    <h4>Naturals</h4>
                    <p>If a player's first two cards are an ace and a "ten-card" (a picture card or 10), giving a count of 21 in two cards, this is a natural or "blackjack." If any player has a natural and the dealer does not, the dealer immediately pays that player one and a half times the amount of their bet. If the dealer has a natural, they immediately collect the bets of all players who do not have naturals, (but no additional amount). If the dealer and another player both have naturals, the bet of that player is a stand-off (a tie), and the player takes back his chips.</p>
                    <p>If the dealer's face-up card is a ten-card or an ace, they look at their face-down card to see if the two cards make a natural. If the face-up card is not a ten-card or an ace, they do not look at the face-down card until it is the dealer's turn to play.</p>
                    <h4>The Play</h4>
                    <p>The player to the left goes first and must decide whether to "stand" (not ask for another card) or "hit" (ask for another card in an attempt to get closer to a count of 21, or even hit 21 exactly). Thus, a player may stand on the two cards originally dealt to them, or they may ask the dealer for additional cards, one at a time, until deciding to stand on the total (if it is 21 or under), or goes "bust" (if it is over 21). In the latter case, the player loses and the dealer collects the bet wagered. The dealer then turns to the next player to their left and serves them in the same manner.</p>
                    <p>The combination of an ace with a card other than a ten-card is known as a "soft hand," because the player can count the ace as a 1 or 11, and either draw cards or not. For example with a "soft 17" (an ace and a 6), the total is 7 or 17. While a count of 17 is a good hand, the player may wish to draw for a higher total. If the draw creates a bust hand by counting the ace as an 11, the player simply counts the ace as a 1 and continues playing by standing or "hitting" (asking the dealer for additional cards, one at a time).</p>
                    <h4>The Dealer's Play</h4>
                    <p>When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.</p>
                    <h4>Signaling Intentions</h4>
                    <p>When a player's turn comes, they can say "Hit" or can signal for a card by scratching the table with a finger or two in a motion toward themselves, or they can wave their hand in the same motion that would say to someone "Come here!" When the player decides to stand, they can say "Stand" or "No more," or can signal this intention by moving their hand sideways, palm down and just above the table.</p>
                    <h4>Splitting Pairs</h4>
                    <p>If a player's first two cards are of the same denomination, such as two jacks or two sixes, they may choose to treat them as two separate hands when their turn comes around. The amount of the original bet then goes on one of the cards, and an equal amount must be placed as a bet on the other card. The player first plays the hand to their left by standing or hitting one or more times; only then is the hand to the right played. The two hands are thus treated separately, and the dealer settles with each on its own merits. With a pair of aces, the player is given one card for each ace and may not draw again. Also, if a ten-card is dealt to one of these aces, the payoff is equal to the bet (not one and one-half to one, as with a blackjack at any other time).</p>
                    <h4>Doubling Down</h4>
                    <p>Another option open to the player is doubling their bet when the original two cards dealt total 9, 10, or 11. When the player's turn comes, they place a bet equal to the original bet, and the dealer gives the player just one card, which is placed face down and is not turned up until the bets are settled at the end of the hand. With two fives, the player may split a pair, double down, or just play the hand in the regular way. Note that the dealer does not have the option of splitting or doubling down.</p>
                    <h4>Insurance</h4>
                    <p>When the dealer's face-up card is an ace, any of the players may make a side bet of up to half the original bet that the dealer's face-down card is a ten-card, and thus a blackjack for the house. Once all such side bets are placed, the dealer looks at the hole card. If it is a ten-card, it is turned up, and those players who have made the insurance bet win and are paid double the amount of their half-bet - a 2 to 1 payoff. When a blackjack occurs for the dealer, of course, the hand is over, and the players' main bets are collected - unless a player also has blackjack, in which case it is a stand-off. Insurance is invariably not a good proposition for the player, unless they are quite sure that there are an unusually high number of ten-cards still left undealt.</p>
                    <h4>Settlement</h4>
                    <p>A bet once paid and collected is never returned. Thus, one key advantage to the dealer is that the player goes first. If the player goes bust, they have already lost their wager, even if the dealer goes bust as well. If the dealer goes over 21, the dealer pays each player who has stood the amount of that player's bet. If the dealer stands at 21 or less, the dealer pays the bet of any player having a higher total (not exceeding 21) and collects the bet of any player having a lower total. If there is a stand-off (a player having the same total as the dealer), no chips are paid out or collected.</p>
                    <h4>Reshuffling</h4>
                    <p>When each player's bet is settled, the dealer gathers in that player's cards and places them face up at the side against a clear plastic L-shaped shield. The dealer continues to deal from the shoe until coming to the plastic insert card, which indicates that it is time to reshuffle. Once that round of play is over, the dealer shuffles all the cards, prepares them for the cut, places the cards in the shoe, and the game continues.</p>
                    <h4>Basic Strategy</h4>
                    <p>Winning tactics in Blackjack require that the player play each hand in the optimum way, and such strategy always takes into account what the dealer's upcard is. When the dealer's upcard is a good one, a 7, 8, 9, 10-card, or ace for example, the player should not stop drawing until a total of 17 or more is reached. When the dealer's upcard is a poor one, 4, 5, or 6, the player should stop drawing as soon as he gets a total of 12 or higher. The strategy here is never to take a card if there is any chance of going bust. The desire with this poor holding is to let the dealer hit and hopefully go over 21. Finally, when the dealer's up card is a fair one, 2 or 3, the player should stop with a total of 13 or higher.</p>
                    <p>With a soft hand, the general strategy is to keep hitting until a total of at least 18 is reached. Thus, with an ace and a six (7 or 17), the player would not stop at 17, but would hit.</p>
                    <p>The basic strategy for doubling down is as follows: With a total of 11, the player should always double down. With a total of 10, he should double down unless the dealer shows a ten-card or an ace. With a total of 9, the player should double down only if the dealer's card is fair or poor (2 through 6).</p>
                    <p>For splitting, the player should always split a pair of aces or 8s; identical ten-cards should not be split, and neither should a pair of 5s, since two 5s are a total of 10, which can be used more effectively in doubling down. A pair of 4s should not be split either, as a total of 8 is a good number to draw to. Generally, 2s, 3s, or 7s can be split unless the dealer has an 8, 9, ten-card, or ace. Finally, 6s should not be split unless the dealer's card is poor (2 through 6).</p>

                </div>
                <div className="games-info--war">
                    <h2>War Rouls</h2>
                    <img src={warImg} alt={"example"}/>
                   
                    <p>The goal is to be the first player to win all 52 cards</p>
                    <h4><strong>The Deal</strong></h4>
                    <p>The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.</p>
                    <h4><strong>The Play</strong></h4>
                    <p>Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.</p>
                    <p>If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.</p>
                    <h4><strong>How to Keep Score</strong></h4>
                    <p>The game ends when one player has won all the cards.</p>

                </div>
                <div className="games-info--roulette">
                    <h2>Roulette Rouls</h2>
                    <img src={rouletteImg} alt={"example"}/>
                    <h4>Rules of Roulette</h4>
                    <p>A roulette wheel consists of a spinning disk with divisions around its edge that revolves around the
                       base of a bowl. A ball is spun around the outside of the bowl until eventually ball and wheel come to
                       rest with the ball in one of the divisions.</p>
                    <p>The divisions around the wheel are numbered from 1 to 36 in a seemingly random pattern and alternate red and black.
                       Additionally, there is a green division numbered 0. On American tables only there is a second extra green 
                       division marked 00 and it is largely this that makes the American version of Roulette a worse proposition
                       financially than the European game.</p>
                    <p>Prior to rolling the ball, people place bets on what number will come up by laying down chips on a betting mat,
                       the precise location of the chips indicating the bet being made. Roulette is a game of French origin and on
                       a traditional table, the French terms on the betting area are still used even in English speaking areas.
                       However, on most US tables, English terms and a slightly different style of mat are used.</p>
                </div>
            </div>
        </section>
    )
}

export default GamesImfo;