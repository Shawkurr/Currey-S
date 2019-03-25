window.onload = function() 
    {
        let submitButton = null; 
        let endorsementButton = null;


        if (document.getElementById('submit-btn'))
        { 
            document.getElementById('submit-btn').addEventListener('click',submit);
        }


    //getting the stored Items from storage
        if (document.getElementById('battleTagName')) {
            let battleTagName = window.localStorage.getItem('battleTagName');
            document.getElementById('battleTagName').innerHTML =  battleTagName; 
        }
        if (document.getElementById('prestige')) {
            let prestige = window.localStorage.getItem('prestige');
            document.getElementById('prestige').innerHTML = "You are level " + prestige; 
        }
        if (document.getElementById('level')) {
            let level = window.localStorage.getItem('level');
            document.getElementById('level').innerHTML =  level; 
        }
        if (document.getElementById('endorsement')) {
            let endorsement = window.localStorage.getItem('endorsement');
            document.getElementById('endorsement').innerHTML = "Endorsement level is: " + endorsement; 
        }
        if (document.getElementById('competitiveStatsGamesPlayed')) {
            let competitiveStatsGamesPlayed = window.localStorage.getItem('competitiveStatsGamesPlayed');
            document.getElementById('competitiveStatsGamesPlayed').innerHTML = "Competitive games played: " + competitiveStatsGamesPlayed; 
        }
        if (document.getElementById('competitiveStatsGamesWon')) {
            let competitiveStatsGamesWon = window.localStorage.getItem('competitiveStatsGamesWon');
            document.getElementById('competitiveStatsGamesWon').innerHTML = "Competitive games won: " + competitiveStatsGamesWon; 
        }
        if (document.getElementById('compCards')) {
            let compCards = window.localStorage.getItem('compCards');
            document.getElementById('compCards').innerHTML = "You've had " + compCards + " achievement cards"; 
        }
        if (document.getElementById('compMedals')) {
            let compMedals = window.localStorage.getItem('compMedals');
            document.getElementById('compMedals').innerHTML = "You've had " + compMedals + " total medals"; 
        }
        if (document.getElementById('rating')) {
            let rating = window.localStorage.getItem('rating');
            document.getElementById('rating').innerHTML = rating; 
        }

    }


function submit()
    {
        getBattleNetFetch();
    }
    
    
    
let state = 
    {
        overwatchState: '',
    }

    
    
let updateContent = function() 
    {
        const overwatchStateElement = document.getElementById('battletag');
        overwatchStateElement.innerHTML = state.overwatchState;
        console.log = getElementById('battletag').value;
    }
    
    

    
function getBattleNetFetch()
{
        let xhr  = new XMLHttpRequest();
        let battletag = document.getElementById('input-area').value;
    
        xhr.open('GET', 'https://ow-api.com/v1/stats/pc/us/' + battletag + '/profile', true);


    xhr.onreadystatechange = () => 
    {
            
    if(xhr.readyState == 4 && xhr.status == 200)
        {
        console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);

/*///
///////
this switch case must stay inside of on ready state, 
when putting it in it's own function it loses reference
to battletag and een worse to response period     
///////
///*/            
    //console.log(response.competitiveStats.awards);
    let win;
    //Storing API results 
    window.localStorage.setItem('battleTagName', response.name);
    window.localStorage.setItem('prestige', response.prestige);
    window.localStorage.setItem('level', response.level);
    window.localStorage.setItem('endorsement', response.endorsement);


            switch(response.private)
            {
                case true:
                console.log(response);
                let PrivateUrl = "./PrivateBattleTag.html";
                win = window.open(PrivateUrl);
                //win.focus();
                console.log('the account is private, showing restricted info');
                break;

        
        
                case false:
                console.log(response);
                let PublicURL = "./PublicBattleTag.html";
                console.log('the account is public, showing all the info available');
                win = window.open(PublicURL);
                
                window.localStorage.setItem('competitiveStatsGamesPlayed', response.competitiveStats.games.played);
                window.localStorage.setItem('competitiveStatsGamesWon', response.competitiveStats.games.won);
                window.localStorage.setItem('compCards', response.competitiveStats.awards.cards);
                window.localStorage.setItem('compMedals', response.competitiveStats.awards.medals);
                window.localStorage.setItem('rating', response.rating);
                break;
        
        
        
                default:
                console.log(response);
                let PnfURL = "./PlayerNotFound.html";
                win = window.open(PnfURL);
                // win.focus();
                console.log('Player not found my lil lemon slices');
                
            }
        }
    }
        xhr.send();

}






