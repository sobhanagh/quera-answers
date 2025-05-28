
const teamNames = []
fetch('http://localhost:3000/teams').then(response => response.json())
    .then((teams) => {
        teams.forEach((team) => {
            teamNames.push({
                name: team.name,
                id: team.id
            });
        })

    })


fetch('http://localhost:3000/scoreboard').then(response => response.json())
    .then((members) => {
        const groupedByTeam = members.reduce((result, player) => {
            const team = player.team;

            if (!result[team]) {
                result[team] = [];
            }

            result[team].push(player);

            return result;
        }, {});


        const teamsDiv = document.querySelector(".teams");



        const headersForEachPlayer = ["name", "kills", "assists", "revives", "deaths"]


        let highestScoringTeam;
        let highestTeamScore = 0;

        for (const team in groupedByTeam) {


            let teamTotalScore = 0;

            const table = document.createElement("table");
            const trTable = document.createElement("tr");

            const headers = ["Rank", "Name", "Kills", "Assists", "Revives", "Deaths", "Score"]

            for (let i = 0; i < headers.length; i++) {
                const th = document.createElement("th");
                th.textContent = headers[i];
                trTable.appendChild(th);
            }
            table.appendChild(trTable);

            const div = document.createElement("div");
            div.classList.add("team");
            div.id = team;

            const h2 = document.createElement("h2");

            teamNames.forEach((item) => {
                if (item.id.includes(team)) {
                    h2.textContent = item.name;
                }
            })

            div.appendChild(h2);
            div.appendChild(table);



            groupedByTeam[team].sort((a, b) => {
                const scoreA = a.kills * 100 + a.revives * 75 + a.assists * 50;
                const scoreB = b.kills * 100 + b.revives * 75 + b.assists * 50;
                return scoreB - scoreA;
            });

            groupedByTeam[team].forEach((player, index) => {
                const tdRank = document.createElement("td");
                const tr = document.createElement("tr");

                if (index == 0) {
                    tdRank.textContent = '🥇'
                }
                else if (index == 1) {
                    tdRank.textContent = '🥈'
                }
                else if (index == 2) {
                    tdRank.textContent = ' 🥉'
                }
                else {
                    tdRank.textContent = index + 1;
                }
                tr.appendChild(tdRank);

                for (let i = 0; i < headersForEachPlayer.length; i++) {
                    const td = document.createElement("td");
                    td.textContent = player[headersForEachPlayer[i]];
                    tr.appendChild(td);
                }
                const score = player.kills * 100 + player.revives * 75 + player.assists * 50;
                const tdScore = document.createElement("td");
                tdScore.textContent = score;
                tr.appendChild(tdScore);
                table.appendChild(tr);

                teamTotalScore += score;
            })

            if (teamTotalScore > highestTeamScore) {
                highestTeamScore = teamTotalScore;
                highestScoringTeam = team;
            }


            teamsDiv.append(div);
        }

        const statusDiv = document.querySelector(".status");

        teamNames.forEach((item) => {
            if (item.id.includes(highestScoringTeam)) {
                statusDiv.textContent = item.name
            }
        })

    })


