import React, { useState, useCallback } from "react";
import {
  Play,
  Trash2,
  Plus,
  Minus,
  Download,
  Trophy,
  Users,
} from "lucide-react";

export default function TournamentBracket() {
  const ALLOWED_SIZES = [4, 8, 16, 32];
  const [teamCount, setTeamCount] = useState(4);
  const [teams, setTeams] = useState(
    Array.from({ length: 4 }, (_, i) => ({ id: i, name: `Equipo ${i + 1}` }))
  );
  const [bracket, setBracket] = useState(null);
  const [winners, setWinners] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);

  // Shuffle array
  const shuffleArray = useCallback((arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Update team count
  const updateTeamCount = useCallback(
    (newCount) => {
      const validCount = ALLOWED_SIZES.includes(newCount) ? newCount : 4;
      const newTeams = Array.from({ length: validCount }, (_, i) => ({
        id: i,
        name: teams[i]?.name || `Equipo ${i + 1}`,
      }));
      setTeamCount(validCount);
      setTeams(newTeams);
    },
    [teams]
  );

  // Handle team name change
  const handleTeamChange = useCallback((id, value) => {
    setTeams((prev) =>
      prev.map((team) => (team.id === id ? { ...team, name: value } : team))
    );
  }, []);

  // Add teams (increase to next power of 2)
  const increaseTeams = useCallback(() => {
    const nextSize = ALLOWED_SIZES.find((size) => size > teamCount);
    if (nextSize) updateTeamCount(nextSize);
  }, [teamCount, updateTeamCount]);

  // Remove teams (decrease to previous power of 2)
  const decreaseTeams = useCallback(() => {
    const currentIndex = ALLOWED_SIZES.indexOf(teamCount);
    if (currentIndex > 0) updateTeamCount(ALLOWED_SIZES[currentIndex - 1]);
  }, [teamCount, updateTeamCount]);

  // Build tournament bracket
  const buildBracket = useCallback(
    (teamList) => {
      const shuffled = shuffleArray(teamList);
      const rounds = [];
      let currentRound = shuffled.map((team) => team.name);
      let roundNum = 0;

      while (currentRound.length > 1) {
        const matches = [];
        for (let i = 0; i < currentRound.length; i += 2) {
          const matchId = `r${roundNum}-m${i / 2}`;
          matches.push({
            id: matchId,
            team1: currentRound[i],
            team2: currentRound[i + 1],
            matchNumber: i / 2 + 1,
          });
        }
        rounds.push(matches);
        currentRound = matches.map((m) => `Winner-${m.id}`);
        roundNum++;
      }

      return rounds;
    },
    [shuffleArray]
  );

  // Generate tournament
  const generateTournament = useCallback(() => {
    setIsGenerating(true);
    setWinners({});

    setTimeout(() => {
      const validTeams = teams.map((team, i) => ({
        ...team,
        name: team.name.trim() || `Equipo ${i + 1}`,
      }));
      setBracket(buildBracket(validTeams));
      setIsGenerating(false);
    }, 1000);
  }, [teams, buildBracket]);

  // Select winner
  const selectWinner = useCallback((matchId, winner) => {
    setWinners((prev) => ({ ...prev, [matchId]: winner }));
  }, []);

  // Reset tournament
  const resetTournament = useCallback(() => {
    setBracket(null);
    setWinners({});
    setTeams(
      Array.from({ length: 4 }, (_, i) => ({ id: i, name: `Equipo ${i + 1}` }))
    );
    setTeamCount(4);
  }, []);

  // Get round name
  const getRoundName = useCallback((roundIndex, totalRounds) => {
    const names = {
      1: ["Final"],
      2: ["Semifinales", "Final"],
      3: ["Cuartos de Final", "Semifinales", "Final"],
      4: ["Octavos de Final", "Cuartos de Final", "Semifinales", "Final"],
      5: [
        "Dieciseisavos",
        "Octavos de Final",
        "Cuartos de Final",
        "Semifinales",
        "Final",
      ],
    };
    return names[totalRounds]?.[roundIndex] || `Ronda ${roundIndex + 1}`;
  }, []);

  // Get champion
  const champion =
    bracket && Object.keys(winners).length > 0
      ? winners[`r${bracket.length - 1}-m0`]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Generador de Torneos
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={generateTournament}
                disabled={isGenerating}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Play className="h-4 w-4" />
                Generar
              </button>

              <button
                onClick={resetTournament}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Resetear
              </button>
            </div>
          </div>
        </div>

        {/* Team Configuration */}
        {!bracket && (
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Configurar Equipos ({teamCount})
                </h2>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={decreaseTeams}
                  disabled={teamCount === 4}
                  className="p-2 bg-red-100 hover:bg-red-200 disabled:bg-gray-100 disabled:text-gray-400 text-red-600 rounded-lg transition-colors"
                  title="Reducir equipos"
                >
                  <Minus className="h-5 w-5" />
                </button>

                <button
                  onClick={increaseTeams}
                  disabled={teamCount === 32}
                  className="p-2 bg-green-100 hover:bg-green-200 disabled:bg-gray-100 disabled:text-gray-400 text-green-600 rounded-lg transition-colors"
                  title="Aumentar equipos"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
              {teams.map((team) => (
                <div key={team.id} className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                    {team.id + 1}
                  </span>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => handleTeamChange(team.id, e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder={`Equipo ${team.id + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Generating Animation */}
        {isGenerating && (
          <div className="bg-white rounded-2xl shadow-xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-4"></div>
              <p className="text-2xl font-bold text-indigo-600 animate-pulse">
                Sorteando equipos...
              </p>
            </div>
          </div>
        )}

        {/* Tournament Bracket */}
        {bracket && !isGenerating && (
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Fixture del Torneo
            </h2>

            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto pb-4">
              <div className="flex gap-8 min-w-max">
                {bracket.map((round, roundIndex) => (
                  <div
                    key={roundIndex}
                    className="flex flex-col gap-4 min-w-[280px]"
                  >
                    <h3 className="text-center font-bold text-lg text-indigo-700 mb-2">
                      {getRoundName(roundIndex, bracket.length)}
                    </h3>

                    {round.map((match) => {
                      const isWinner1 = winners[match.id] === match.team1;
                      const isWinner2 = winners[match.id] === match.team2;

                      return (
                        <div
                          key={match.id}
                          className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="text-xs text-gray-500 font-medium mb-2 text-center">
                            Partido {match.matchNumber}
                          </div>

                          <div className="space-y-2">
                            <button
                              onClick={() =>
                                selectWinner(match.id, match.team1)
                              }
                              className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                                isWinner1
                                  ? "bg-green-600 text-white shadow-lg scale-105"
                                  : "bg-white border-2 border-gray-200 hover:border-indigo-300 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{match.team1}</span>
                                {isWinner1 && (
                                  <Trophy className="h-4 w-4 flex-shrink-0 ml-2" />
                                )}
                              </div>
                            </button>

                            <button
                              onClick={() =>
                                selectWinner(match.id, match.team2)
                              }
                              className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                                isWinner2
                                  ? "bg-green-600 text-white shadow-lg scale-105"
                                  : "bg-white border-2 border-gray-200 hover:border-indigo-300 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{match.team2}</span>
                                {isWinner2 && (
                                  <Trophy className="h-4 w-4 flex-shrink-0 ml-2" />
                                )}
                              </div>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Champion */}
                <div className="min-w-[280px] flex flex-col items-center justify-center">
                  <Trophy className="h-16 w-16 text-yellow-500 mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-gray-700">
                    Campeón
                  </h3>
                  <div className="text-2xl font-bold text-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl shadow-lg">
                    {champion || "Por definir"}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-6">
              {bracket.map((round, roundIndex) => (
                <div key={roundIndex}>
                  <h3 className="font-bold text-lg text-indigo-700 mb-4 text-center bg-indigo-50 py-2 rounded-lg">
                    {getRoundName(roundIndex, bracket.length)}
                  </h3>

                  <div className="space-y-4">
                    {round.map((match) => {
                      const isWinner1 = winners[match.id] === match.team1;
                      const isWinner2 = winners[match.id] === match.team2;

                      return (
                        <div
                          key={match.id}
                          className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4"
                        >
                          <div className="text-xs text-gray-500 font-medium mb-3 text-center">
                            Partido {match.matchNumber}
                          </div>

                          <div className="space-y-2">
                            <button
                              onClick={() =>
                                selectWinner(match.id, match.team1)
                              }
                              className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                                isWinner1
                                  ? "bg-green-600 text-white shadow-lg"
                                  : "bg-white border-2 border-gray-200 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{match.team1}</span>
                                {isWinner1 && (
                                  <Trophy className="h-4 w-4 flex-shrink-0 ml-2" />
                                )}
                              </div>
                            </button>

                            <button
                              onClick={() =>
                                selectWinner(match.id, match.team2)
                              }
                              className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                                isWinner2
                                  ? "bg-green-600 text-white shadow-lg"
                                  : "bg-white border-2 border-gray-200 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{match.team2}</span>
                                {isWinner2 && (
                                  <Trophy className="h-4 w-4 flex-shrink-0 ml-2" />
                                )}
                              </div>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Champion Mobile */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 text-center shadow-xl">
                <Trophy className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2 text-white">Campeón</h3>
                <div className="text-2xl font-bold text-white">
                  {champion || "Por definir"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
