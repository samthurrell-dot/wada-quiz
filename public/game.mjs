// Wada you know about colour? Shared game logic, used by the page and the server.
// Colour data: Matt DesLauriers' dataset of Sanzo Wada's Dictionary of Color Combinations (MIT licence).
export const COLOURS = [["Hermosa Pink","#f9c1ce",[83.43,22.14,1.64]],["Corinthian Pink","#f8b6ba",[80.35,25.37,7.88]],["Cameo Pink","#e0b3b6",[77.22,17.2,4.95]],["Fawn","#d1b0a7",[74.49,11.19,9.39]],["Light Brown Drab","#b59392",[64.12,13.02,5.34]],["Coral Red","#f58e84",[70.28,39.29,23.19]],["Fresh Color","#f6917e",[70.96,37.48,27.3]],["Grenadine Pink","#f48067",[66.89,43.83,34.7]],["Eosine Pink","#f37f94",[67.25,46.68,10.3]],["Spinel Red","#f27291",[64.53,52.19,8.29]],["Old Rose","#d46d7a",[58.77,42.13,12.31]],["Eugenia Red | A","#e2625e",[58.37,50.75,28.54]],["Eugenia Red | B","#da525d",[54.27,54.7,23.66]],["Raw Sienna","#bb7125",[55.06,25.55,52.17]],["Vinaceous Tawny","#c56127",[53.23,38.18,50.19]],["Jasper Red","#eb5324",[56.81,58.41,57.63]],["Spectrum Red","#e31f26",[49.61,70.93,50.08]],["Red Orange","#dd4027",[51.83,60.64,50.88]],["Etruscan Red","#c55347",[50.75,45.88,31.05]],["Burnt Sienna","#ae5224",[46.44,36.23,43.79]],["Ochre Red","#ab544d",[46.82,35.74,21.85]],["Scarlet","#cb2f43",[46.55,61.53,28.9]],["Carmine","#cc1236",[44.29,67.19,33.71]],["Indian Lake","#c53c69",[47.54,57.21,6.68]],["Rosolanc Purple","#b73f74",[45.94,52.37,-3.16]],["Pomegranite Purple","#b71f57",[41.43,60.96,8.4]],["Hydrangea Red","#a94151",[43.07,44.35,14.18]],["Brick Red","#a84222",[42.46,41.51,40.69]],["Carmine Red","#a62c37",[38.71,50.23,24.69]],["Pompeian Red","#ab2439",[38.86,54.81,23.84]],["Red","#a72144",[37.87,54.59,15.37]],["Brown","#7c4226",[35.07,23.47,28.57]],["Hay's Russet","#793327",[31.24,30.66,23.51]],["Vandyke Red","#82241f",[30.16,40.6,27.61]],["Pansy Purple","#7d133a",[27.61,45.92,6.09]],["Pale Burnt Lake","#802626",[30.18,39.04,22.71]],["Violet Red","#642d5e",[27.77,30.39,-17.74]],["Vistoris Lake","#6d4145",[33.09,20.3,6.1]],["Sulpher Yellow","#f5ecc2",[93.22,-1.73,21.65]],["Pale Lemon Yellow","#ffefae",[94.86,-0.14,34.09]],["Naples Yellow","#fbe6a0",[91.73,0.32,36.57]],["Ivory Buff","#ebd3a2",[85.6,3.38,27.27]],["Seashell Pink","#fdd4bd",[88.13,12.09,17.27]],["Light Pinkish Cinnamon","#fcc79b",[84.21,15.63,29.81]],["Pinkish Cinnamon","#eeb480",[77.85,17.23,34.75]],["Cinnamon Buff","#fdc57e",[83.53,14.74,43.67]],["Cream Yellow","#fdbf68",[81.81,16.47,51.98]],["Golden Yellow","#f3a257",[73.86,25.94,51.18]],["Vinaceous Cinnamon","#eea78c",[74.99,24.74,24.81]],["Ochraceous Salmon","#d8a37b",[71.45,16.46,29.1]],["Isabella Color","#c5a56e",[69.68,7.07,33.02]],["Maple","#c59f6b",[68.19,9.59,32.95]],["Olive Buff","#c1c494",[78.05,-7.11,23.66]],["Ecru","#c2ae93",[72.19,4.23,16.73]],["Yellow","#fff200",[94.96,-6.46,95.58]],["Lemon Yellow","#f8ed43",[92.66,-9.39,77.76]],["Apricot Yellow","#ffdd00",[89.35,1.91,89.46]],["Pyrite Yellow","#cab356",[73.56,0.42,49.82]],["Olive Ocher","#d6b43e",[74.88,3.57,61.81]],["Yellow Ocher","#e2b540",[76.19,8.44,62.79]],["Orange Yellow","#fcb315",[78.49,19.57,78.22]],["Yellow Orange","#f99d1b",[72.96,29.4,72.94]],["Apricot Orange","#f68c50",[69.37,37.69,49.65]],["Orange","#f37420",[63.8,47.16,64.72]],["Peach Red","#f15a30",[59.1,57.55,54.35]],["English Red","#d96629",[57.22,43.3,54.36]],["Cinnamon Rufous","#c27544",[57.23,27.77,40.23]],["Orange Rufous","#c16b27",[54.56,31.61,51.25]],["Sulphine Yellow","#c19f2c",[67.24,4.35,60.55]],["Khaki","#bc892b",[61.02,13.86,55.05]],["Citron Yellow","#b2b73e",[72.47,-13.06,58.18]],["Citrine","#b09f36",[65.56,-2.58,54.49]],["Buffy Citrine","#96874d",[56.62,0.0,33.3]],["Dark Citrine","#8b835b",[54.71,-1.4,23.07]],["Light Grayish Olive","#848061",[53.19,-2.28,17.02]],["Krongbergs Green","#84875e",[55.12,-6.19,21.51]],["Olive","#837e31",[52.21,-5.73,41.49]],["Orange Citrine","#986f2d",[50.24,11.52,42.05]],["Sudan Brown","#a36752",[49.86,23.03,22.45]],["Olive Green","#6b7140",[46.39,-8.49,26.49]],["Light Brownish Olive","#806e4b",[47.51,3.75,22.19]],["Deep Grayish Olive","#635a3a",[38.61,-0.28,19.94]],["Pale Raw Umber","#71502f",[37.07,11.19,24.96]],["Sepia","#644b1e",[33.83,6.87,30.23]],["Madder Brown","#762c19",[29.09,32.0,29.28]],["Mars Brown Tobacco","#653514",[28.03,20.45,29.84]],["Vandyke Brown","#4b3317",[23.81,8.5,22.1]],["Turquoise Green","#b5decc",[85.26,-16.89,4.6]],["Glaucous Green","#b4cdc2",[80.3,-10.24,2.3]],["Dark Greenish Glaucous","#b7c2a9",[77.09,-7.56,11.37]],["Yellow Green","#afd472",[80.61,-24.6,43.91]],["Light Green Yellow","#c7d14f",[81.14,-15.86,60.56]],["Night Green","#87c540",[73.31,-36.03,57.03]],["Olive Yellow","#a6a159",[65.49,-6.05,37.84]],["Artemesia Green","#709390",[58.1,-12.83,-2.89]],["Andover Green","#6d7e77",[51.21,-7.76,1.54]],["Rainette Green","#8fa071",[63.74,-12.53,22.45]],["Chromium Green","#719470",[57.87,-18.15,14.99]],["Pistachio Green","#648f7b",[55.82,-18.64,5.69]],["Sea Green","#00b49b",[65.05,-48.9,0.46]],["Benzol Green","#00978d",[53.56,-54.63,-8.31]],["Light Porcelain Green","#00908a",[53.3,-37.52,-6.83]],["Green","#489b6e",[57.77,-34.51,15.59]],["Dull Viridian Green","#009465",[53.5,-49.0,14.44]],["Oil Green","#819238",[57.64,-16.01,43.77]],["Diamine Green","#1a7444",[42.74,-35.66,18.56]],["Cossack Green","#437742",[45.46,-27.2,23.45]],["Lincoln Green","#555832",[36.27,-5.91,21.18]],["Blackish Olive","#42533e",[33.26,-10.13,9.69]],["Deep Slate Olive","#253122",[18.8,-7.67,7.54]],["Nile Blue","#bce4e5",[87.68,-13.25,-5.03]],["Pale King's Blue","#a7d4e4",[82.21,-12.74,-12.88]],["Light Glaucous Blue","#a5c8d1",[78.21,-10.57,-8.72]],["Salvia Blue","#97acc8",[69.47,-2.76,-16.75]],["Cobalt Green","#96d1aa",[79.01,-25.56,13.0]],["Calamine BLue","#78cdd0",[77.09,-26.24,-10.37]],["Venice Green","#62c6bf",[73.7,-31.73,-6.14]],["Cerulian Blue","#0093a5",[54.97,-30.19,-20.14]],["Peacock Blue","#00939b",[52.79,-48.91,-17.52]],["Green Blue","#099197",[54.13,-31.27,-12.88]],["Olympic Blue","#5a82b3",[53.09,-3.63,-30.74]],["Blue","#006eb8",[43.49,-8.83,-48.77]],["Antwarp Blue","#007190",[42.03,-29.12,-27.73]],["Helvetia Blue","#005b8d",[35.31,-12.1,-36.37]],["Dark Medici Blue","#547076",[45.12,-9.23,-6.86]],["Dusky Green","#004f46",[27.97,-36.27,-3.28]],["Deep Lyons Blue","#1c4286",[28.53,6.56,-42.68]],["Violet Blue","#40456a",[30.15,5.44,-22.38]],["Vandar Poel's Blue","#064f6e",[30.78,-11.26,-24.52]],["Dark Tyrian Blue","#12354e",[20.61,-5.84,-19.08]],["Dull Violet Black","#1e0e3f",[8.1,19.43,-28.81]],["Deep Indigo","#051230",[5.82,4.14,-21.79]],["Deep Slate Green","#112f2c",[16.88,-12.14,-2.23]],["Grayish Lavender - A","#b5b1d8",[73.42,7.46,-19.35]],["Grayish Lavender - B","#c0a9b3",[71.35,10.05,-2.21]],["Laelia Pink","#ca92a8",[66.52,24.31,-2.66]],["Lilac","#b984af",[61.53,25.92,-14.25]],["Eupatorium Purple","#bf5892",[52.25,46.71,-11.72]],["Light Mauve","#9a72aa",[53.64,23.9,-23.98]],["Aconite Violet","#a36aa5",[52.67,30.7,-22.37]],["Dull Blue Violet","#80719e",[50.22,13.38,-22.46]],["Dark Soft Violet","#66629c",[44.0,12.35,-31.17]],["Blue Violet","#6450a1",[39.12,23.57,-41.91]],["Purple Drab","#84565b",[41.87,19.87,5.56]],["Deep Violet / Plumbeous","#70727c",[48.03,0.79,-5.91]],["Veronia Purple","#8c4c62",[40.98,29.56,0.13]],["Dark Slate Purple","#704357",[34.31,22.22,-3.55]],["Taupe Brown","#7a4456",[36.17,25.64,0.06]],["Violet Carmine","#713b4c",[32.3,25.87,0.82]],["Violet","#4f4086",[31.49,20.67,-37.93]],["Red Violet","#59256a",[25.05,33.11,-30.06]],["Cotinga Purple","#501345",[18.4,32.86,-15.76]],["Dusky Madder Violet","#4e1d4c",[20.1,28.65,-18.26]],["White","#ffffff",[100.0,0.0,0.0]],["Neutral Gray","#b6bfc1",[76.75,-3.03,-2.03]],["Mineral Gray","#a2b0ad",[70.75,-5.62,-0.1]],["Warm Gray","#a1a39a",[66.75,-2.25,4.74]],["Slate Color","#34454c",[27.85,-5.39,-6.97]],["Black","#111314",[5.63,-0.4,-1.12]]]; // [name, hex, lab]
export const COMBOS = [[65,117],[61,129],[13,39],[50,150],[106,128],[7,131],[63,88],[66,133],[36,140],[66,73],[41,155],[50,119],[13,145],[9,40],[100,133],[33,111],[12,99],[3,152],[85,92],[115,135],[7,99],[54,126],[45,138],[83,145],[18,110],[47,82],[1,157],[84,131],[75,113],[29,155],[17,39],[49,92],[13,157],[8,154],[4,28],[68,87],[27,150],[105,126],[22,123],[14,70],[73,115],[59,149],[1,139],[101,120],[42,55],[63,158],[18,134],[24,123],[111,121],[41,152],[28,121],[38,158],[61,152],[100,112],[10,153],[134,149],[147,157],[32,99],[8,71],[39,129],[91,151],[54,158],[37,117],[139,141],[68,115],[58,79],[120,129],[4,54],[156,158],[13,107],[29,49],[38,111],[82,96],[87,119],[111,127],[39,156],[12,128],[44,116],[84,119],[38,138],[47,156],[32,152],[52,127],[42,132],[14,122],[13,99],[1,70],[42,121],[61,127],[8,139],[37,67],[5,100],[71,112],[41,125],[32,130],[59,76],[1,18],[84,127],[39,117],[72,140],[2,126],[41,67],[66,152],[28,38],[2,97],[122,130],[56,74],[8,27],[39,108],[31,86],[39,90],[7,158],[42,86],[60,122],[40,64],[2,142],[22,158],[59,86],[112,129],[2,29],[31,49,107],[22,46,100],[5,55,147],[35,59,93],[3,117,127],[41,59,126],[45,98,141],[1,116,138],[56,69,113],[13,28,149],[13,65,118],[38,47,71],[33,71,99],[8,138,150],[38,106,113],[21,103,150],[18,45,98],[47,55,116],[113,131,154],[47,122,157],[63,90,129],[26,68,113],[121,136,156],[24,63,158],[31,70,130],[69,81,105],[9,33,87],[58,60,117],[58,63,132],[42,70,88],[38,61,128],[18,32,112],[8,60,70],[22,54,121],[15,100,131],[58,114,149],[34,58,120],[55,66,92],[69,115,133],[68,82,124],[31,44,123],[10,96,136],[56,87,122],[17,60,149],[2,9,37],[7,40,132],[53,111,128],[55,128,145],[1,39,156],[24,60,150],[35,61,88],[66,122,150],[55,84,87],[1,134,147],[44,52,142],[0,42,115],[35,72,133],[41,112,119],[17,47,126],[45,138,154],[28,149,151],[13,86,131],[144,145,150],[9,41,74],[4,18,39],[32,49,121],[123,134,139],[96,113,114],[55,109,116],[41,65,158],[4,59,121],[46,86,144],[7,40,101],[15,42,120],[9,39,154],[70,111,142],[8,141,154],[19,56,102],[20,80,126],[28,52,97],[7,76,114],[87,114,157],[39,48,107],[24,66,112],[35,48,149],[1,47,66],[78,88,158],[38,119,122],[41,61,113],[45,55,107],[62,93,131],[29,77,113],[48,56,111],[41,78,149],[46,121,137],[15,102,158],[35,49,105],[123,133,144],[15,97,125],[25,49,139],[28,154,158],[59,61,67],[4,49,87],[9,124,147],[22,125,146],[37,46,149],[0,112,117],[28,39,154],[47,109,154],[7,87,114],[2,32,120],[22,44,131],[28,72,127],[45,82,111],[41,61,134],[69,126,143],[28,84,113],[49,151,156],[4,57,88],[6,54,117],[17,39,50,124],[8,19,105,158],[13,41,79,157],[4,14,95,122],[28,104,129,157],[1,27,38,45],[13,56,100,126],[8,69,133,146],[32,53,58,124],[57,64,99,110],[30,54,105,157],[12,13,68,119],[55,62,151,157],[1,38,76,135],[13,57,115,158],[48,63,103,158],[16,60,121,139],[35,44,76,122],[55,119,123,156],[10,48,88,99],[30,39,115,156],[12,41,71,106],[19,44,87,157],[1,17,89,117],[10,56,93,130],[16,41,96,100],[46,61,100,121],[4,13,109,110],[13,35,139,158],[12,38,79,106],[25,114,119,132],[39,63,87,113],[0,34,78,154],[64,73,120,138],[18,53,84,147],[8,42,90,158],[9,24,76,130],[46,58,106,125],[13,48,53,129],[12,107,135,147],[39,100,114,122],[12,51,114,136],[20,35,97,116],[11,56,99,125],[4,19,64,87],[19,60,118,127],[8,57,111,115],[61,83,147,158],[55,91,127,130],[37,39,107,114],[91,99,114,115],[39,44,50,53],[13,87,94,102],[38,46,106,113],[46,54,121,130],[38,49,82,157],[19,61,79,127],[13,55,64,158],[23,48,104,122],[7,46,87,115],[16,41,96,139],[46,53,110,122],[40,64,109,154],[32,46,73,100],[44,56,70,87],[55,100,103,110],[22,133,139,151],[3,21,65,114],[47,62,127,128],[38,44,76,109],[29,46,89,91],[19,61,94,123],[22,54,105,158],[8,32,126,152],[7,38,47,137],[33,103,149,150],[43,53,55,87],[80,108,125,132],[13,56,61,106],[5,38,104,112],[4,38,109,113],[16,27,137,142],[45,70,84,158],[29,120,139,154],[12,40,59,132],[38,64,90,92],[8,13,53,134],[27,62,86,101],[46,134,151,157],[52,110,113,119],[23,130,138,149],[5,21,109,125],[19,55,114,121],[42,76,90,122],[33,61,149,157],[8,32,39,108],[37,135,148,158],[28,60,125,134],[49,65,112,127],[64,99,154,158],[7,106,109,112],[1,46,77,109],[19,41,81,128],[45,126,139,158],[32,110,116,142],[24,87,91,95],[93,99,123,136],[52,106,109,151]];
// Cryptic clues: [clue with [definition] marked, explanation]
export const CRYPTIC = {
"Hermosa Pink": [
"Her doctor, with appeal, blushing: [she looks beautiful to a Spaniard]",
"HER + MO (doctor) + SA (sex appeal) + PINK (blushing). Hermosa is Spanish for beautiful."
],
"Corinthian Pink": [
"Iron chain and top of tree, twisted, in fine fettle: [a classical blush]",
"Anagram (twisted) of IRON CHAIN + T(ree) = CORINTHIAN, + PINK (in the pink = in fine fettle)."
],
"Cameo Pink": [
"Star's walk-on part, in fine fettle: [a brooch-like blush]",
"CAMEO (a star's brief appearance) + PINK (in the pink)."
],
"Fawn": [
"Flatter [a young deer]",
"Double definition: to fawn is to flatter; a fawn is a young deer."
],
"Light Brown Drab": [
"Not heavy, tanned and dull: [a pale, dreary shade]",
"LIGHT (not heavy) + BROWN (tanned) + DRAB (dull)."
],
"Coral Red": [
"Reef builder turns revolutionary: [a warm sea shade]",
"CORAL (reef builder) + RED (revolutionary)."
],
"Fresh Color": [
"Cheeky tint: [a new shade]",
"FRESH (cheeky) + COLOR (tint). Possibly a misprint of Flesh Color."
],
"Grenadine Pink": [
"Pomegranate syrup in fine fettle: [a cocktail blush]",
"GRENADINE (pomegranate syrup) + PINK (in the pink)."
],
"Eosine Pink": [
"Dawn goddess at home with energy, blushing: [a synthetic dye]",
"EOS (Greek goddess of dawn) + IN (at home) + E (energy) + PINK (blushing)."
],
"Spinel Red": [
"Pines shuffled on the left, and Communist: [a gem's shade]",
"Anagram (shuffled) of PINES + L (left) = SPINEL, + RED (Communist)."
],
"Old Rose": [
"Ex stood up: [a faded pink]",
"OLD (ex-) + ROSE (stood up)."
],
"Eugenia Red": [
"A genie with you, conjured, flushed: [a myrtle's shade]",
"Anagram (conjured) of A GENIE + U (you) = EUGENIA, + RED (flushed)."
],
"Raw Sienna": [
"Sore, and insane when unhinged: [Tuscan earth]",
"RAW (sore) + anagram (unhinged) of INSANE = SIENNA."
],
"Vinaceous Tawny": [
"Wine-coloured owl? [A reddish brown]",
"VINACEOUS (a naturalist's word for wine-coloured) + TAWNY (a kind of owl)."
],
"Jasper Red": [
"Carrott's first name, and Communist: [a gemstone shade]",
"JASPER (Jasper Carrott, the comedian) + RED (Communist). Jasper is also a red gemstone."
],
"Spectrum Red": [
"Old Sinclair computer goes Communist: [a pure crimson]",
"SPECTRUM (the Sinclair ZX Spectrum) + RED (Communist)."
],
"Red Orange": [
"Radical fruit? [A fiery in-between shade]",
"RED (radical) + ORANGE (fruit)."
],
"Etruscan Red": [
"True scan, twisted, turns Communist: [an ancient Italian shade]",
"Anagram (twisted) of TRUE SCAN = ETRUSCAN, + RED (Communist)."
],
"Burnt Sienna": [
"Scorched, and insane when unhinged: [roasted Tuscan earth]",
"BURNT (scorched) + anagram (unhinged) of INSANE = SIENNA."
],
"Ochre Red": [
"Chore done badly by a Communist: [an earthy crimson]",
"Anagram (done badly) of CHORE = OCHRE, + RED (Communist)."
],
"Scarlet": [
"Mark allowed [a hunting coat's colour]",
"SCAR (mark) + LET (allowed)."
],
"Carmine": [
"Motor belonging to me, [dyed with insects]",
"CAR (motor) + MINE (belonging to me). Carmine dye is made from insects."
],
"Indian Lake": [
"Curry house by Windermere? [A crimson pigment]",
"INDIAN (a curry house, informally) + LAKE (Windermere is one). A lake is also a pigment."
],
"Rosolanc Purple": [
"Stood up, nearly, nothing, then most of Lancs, royally: [an old dye's shade]",
"ROS(e) (stood up, nearly) + O (nothing) + LANC(s) (most of Lancs) + PURPLE (royally). The book's spelling of rosolane."
],
"Pomegranite Purple": [
"Apple-type fruit on hard rock, royally: [a seedy fruit's shade]",
"POME (an apple-type fruit) + GRANITE (hard rock) + PURPLE (royally). It is the book's own spelling."
],
"Hydrangea Red": [
"Many-headed monster, new, age upset, flushed: [a mophead's shade]",
"HYDRA (many-headed monster) + N (new) + anagram (upset) of AGE + RED (flushed)."
],
"Brick Red": [
"Good egg turns Communist: [a building shade]",
"BRICK (a good egg: 'you're a brick') + RED (Communist)."
],
"Carmine Red": [
"My car's, and a Marxist's: [a deep crimson]",
"CAR MINE ('my car', turned round) + RED (a Marxist)."
],
"Pompeian Red": [
"Show, that is, turned round a Communist: [the shade of ancient frescoes]",
"POMP (show) + EI (i.e., 'that is', turned round) + AN (a) + RED (Communist)."
],
"Red": [
"[Colour] that was read aloud",
"Sounds like 'read' (past tense)."
],
"Brown": [
"[Colour] of a former prime minister",
"Gordon Brown."
],
"Hay's Russet": [
"Dried grass has an apple: [a naturalist's brown]",
"HAY'S (dried grass has) + RUSSET (an apple variety)."
],
"Vandyke Red": [
"Pointed beard on a leftie: [a painter's deep crimson]",
"VANDYKE (a pointed beard, named after the painter) + RED (a leftie)."
],
"Pansy Purple": [
"Criticise, say briefly, in royal robes: [a garden flower's shade]",
"PAN (criticise) + S(a)Y (say, briefly) + PURPLE (royal robes)."
],
"Pale Burnt Lake": [
"Wan, scorched, like Windermere: [a dark crimson pigment]",
"PALE (wan) + BURNT (scorched) + LAKE (Windermere is one)."
],
"Violet Red": [
"Shrinking flower, blushing: [a purplish crimson]",
"VIOLET (a shrinking violet) + RED (blushing)."
],
"Vistoris Lake": [
"Visit without it, hill, is by the water: [a misspelt queen's crimson]",
"VIS(it) (visit without 'it') + TOR (hill) + IS + LAKE (water). The book's spelling of Victoria Lake."
],
"Sulpher Yellow": [
"Brimstone, as the book spells it, and cowardly: [a pale element's shade]",
"SULPHER (brimstone, in the book's spelling) + YELLOW (cowardly)."
],
"Pale Lemon Yellow": [
"Wan dud, and cowardly: [a soft citrus shade]",
"PALE (wan) + LEMON (a dud) + YELLOW (cowardly)."
],
"Naples Yellow": [
"See it and die, they say; cowardly: [a Vesuvian pigment]",
"NAPLES ('See Naples and die') + YELLOW (cowardly)."
],
"Ivory Buff": [
"Tusk material, and enthusiast: [a creamy leather shade]",
"IVORY (tusk material) + BUFF (enthusiast)."
],
"Seashell Pink": [
"She sells these on the shore, in fine fettle: [a beach blush]",
"SEASHELL (from the tongue-twister) + PINK (in the pink)."
],
"Light Pinkish Cinnamon": [
"Not heavy, somewhat flushed bun spice: [a pale warm brown]",
"LIGHT (not heavy) + PINKISH (somewhat flushed) + CINNAMON (bun spice)."
],
"Pinkish Cinnamon": [
"Somewhat flushed bun spice: [a warm tan]",
"PINKISH (somewhat flushed) + CINNAMON (bun spice)."
],
"Cinnamon Buff": [
"Spice fan: [a warm pale shade]",
"CINNAMON (spice) + BUFF (fan)."
],
"Cream Yellow": [
"The best, but chicken: [a rich pale shade]",
"CREAM (the best) + YELLOW (chicken)."
],
"Golden Yellow": [
"Like a champion, but chicken: [a sunny shade]",
"GOLDEN (like a champion) + YELLOW (chicken)."
],
"Vinaceous Cinnamon": [
"Wine-like spice: [a naturalist's warm brown]",
"VINACEOUS (wine-coloured) + CINNAMON (spice)."
],
"Ochraceous Salmon": [
"Earthy fish: [a naturalist's pinkish orange]",
"OCHRACEOUS (like ochre, an earth pigment) + SALMON (fish)."
],
"Isabella Color": [
"Is a beauty in Italy, given some colour: [a greyish yellow of legend]",
"IS + A + BELLA (Italian for beautiful) + COLOR."
],
"Maple": [
"Ample, oddly, for [a syrup tree]",
"Anagram (oddly) of AMPLE."
],
"Olive Buff": [
"Martini garnish enthusiast: [a greenish tan]",
"OLIVE (martini garnish) + BUFF (enthusiast)."
],
"Ecru": [
"Cure ruined: it's [unbleached]",
"Anagram (ruined) of CURE. Ecru is French for raw or unbleached."
],
"Yellow": [
"Shout and cry of pain, being [chicken]",
"YELL (shout) + OW (cry of pain). Yellow also means cowardly."
],
"Lemon Yellow": [
"Duff one, and cowardly: [a sharp citrus shade]",
"LEMON (a duff one) + YELLOW (cowardly)."
],
"Apricot Yellow": [
"A priest cut short by the bed, chickened out: [a stone fruit's shade]",
"A + PRI(est) (priest, cut short) + COT (bed) + YELLOW (chicken)."
],
"Pyrite Yellow": [
"Pie try, badly baked, and cowardly: [fool's gold]",
"Anagram (badly baked) of PIE TRY = PYRITE, + YELLOW (cowardly)."
],
"Olive Ocher": [
"Green fruit with chore gone wrong: [an earthy khaki shade]",
"OLIVE (green fruit) + anagram (gone wrong) of CHORE = OCHER."
],
"Yellow Ocher": [
"Timid, with chore messed up: [a golden earth pigment]",
"YELLOW (timid) + anagram (messed up) of CHORE = OCHER."
],
"Orange Yellow": [
"Fruit, lily-livered: [a warm gold]",
"ORANGE (fruit) + YELLOW (lily-livered)."
],
"Yellow Orange": [
"Chicken, then fruit: [a warm in-between]",
"YELLOW (chicken) + ORANGE (fruit)."
],
"Apricot Orange": [
"A priest, briefly, by the bed, with fruit: [a stone fruit's glow]",
"A + PRI(est) + COT (bed) + ORANGE (fruit)."
],
"Orange": [
"Onager running wild in [the fruit bowl]",
"Anagram (running wild) of ONAGER, a wild ass."
],
"Peach Red": [
"Beauty turns Bolshevik: [a ripe fruit shade]",
"PEACH (a beauty) + RED (Bolshevik)."
],
"English Red": [
"A language teacher's marking pen? [A British earth pigment]",
"ENGLISH (a language) + RED (the marking pen). A cryptic definition."
],
"Cinnamon Rufous": [
"Spice, and William II with love inside: [a warm reddish brown]",
"CINNAMON (spice) + RUF(O)US (William Rufus, King William II, holding O, love)."
],
"Orange Rufous": [
"Fruit, and the red king holding love: [a burnt tangerine shade]",
"ORANGE (fruit) + RUF(O)US (William Rufus holding O, love)."
],
"Sulphine Yellow": [
"Brimstone dye, and yellow-bellied: [a sharp lime-gold]",
"SULPHINE (a sulphur-based dye) + YELLOW (yellow-bellied)."
],
"Khaki": [
"[Army drab], or a car key, to a posh ear",
"Sounds like 'car key' in a plummy accent. Khaki comes from the Urdu for dust."
],
"Citron Yellow": [
"Tonic mixed with rum's first, and chicken: [a citrus shade]",
"Anagram (mixed) of TONIC + R(um) = CITRON, + YELLOW (chicken)."
],
"Citrine": [
"Inciter, rearranged, makes [a golden quartz]",
"Anagram (rearranged) of INCITER."
],
"Buffy Citrine": [
"Vampire slayer's quartz: [a dull yellow-green]",
"BUFFY (the Vampire Slayer) + CITRINE (a quartz)."
],
"Dark Citrine": [
"Gloomy yellow quartz: [a deep olive gold]",
"DARK (gloomy) + CITRINE (yellow quartz)."
],
"Light Grayish Olive": [
"Pale, rather drab, fruit: [a soft sage shade]",
"LIGHT (pale) + GRAYISH (rather drab) + OLIVE (fruit)."
],
"Krongbergs Green": [
"Swedish coin cut short, good, ice masses, still naive: [a naturalist's olive]",
"KRON(a) (Swedish coin, cut short) + G (good) + BERGS (ice masses) + GREEN (naive). The book's spelling of Kronberg's."
],
"Olive": [
"I love, badly, [a Mediterranean fruit]",
"Anagram (badly) of I LOVE."
],
"Orange Citrine": [
"Fruit, and inciter twisted: [a golden brown quartz]",
"ORANGE (fruit) + anagram (twisted) of INCITER = CITRINE."
],
"Sudan Brown": [
"African country's former prime minister: [a dye's earthy shade]",
"SUDAN (African country) + BROWN (Gordon Brown)."
],
"Olive Green": [
"Popeye's girl, inexperienced: [a drab army shade]",
"OLIVE (Olive Oyl, Popeye's girlfriend) + GREEN (inexperienced)."
],
"Light Brownish Olive": [
"Pale, sort of tanned, Popeye's girl: [a dusky khaki]",
"LIGHT (pale) + BROWNISH (sort of tanned) + OLIVE (Olive Oyl)."
],
"Deep Grayish Olive": [
"Profound, rather dull, Popeye's girl: [a dark khaki]",
"DEEP (profound) + GRAYISH (rather dull) + OLIVE (Olive Oyl)."
],
"Pale Raw Umber": [
"Wan and sore, with number beheaded: [a light earth pigment]",
"PALE (wan) + RAW (sore) + (n)UMBER (number, beheaded)."
],
"Sepia": [
"[Old photo tone] found in close piano work",
"Hidden in 'cloSE PIAno'."
],
"Madder Brown": [
"Crazier former prime minister: [a root dye's earthy shade]",
"MADDER (crazier) + BROWN (Gordon Brown). Madder is a plant whose root gives dye."
],
"Mars Brown Tobacco": [
"Planet, prime minister and pipe filler: [an earthy dark shade]",
"MARS (planet) + BROWN (Gordon Brown) + TOBACCO (pipe filler)."
],
"Vandyke Brown": [
"Pointed beard, tanned: [a painter's dark earth]",
"VANDYKE (a pointed beard, after the painter) + BROWN (tanned)."
],
"Turquoise Green": [
"Turkish stone, still naive: [a sea-bright shade]",
"TURQUOISE (the 'Turkish' stone) + GREEN (naive)."
],
"Glaucous Green": [
"Covered in bloom, like a plum, and callow: [a blue-grey leafy shade]",
"GLAUCOUS (covered in a waxy bloom) + GREEN (callow)."
],
"Dark Greenish Glaucous": [
"Gloomy, rather naive, bloomy: [a deep sage]",
"DARK (gloomy) + GREENISH (rather naive) + GLAUCOUS (bloomy)."
],
"Yellow Green": [
"Cowardly novice: [a sharp spring shade]",
"YELLOW (cowardly) + GREEN (novice)."
],
"Light Green Yellow": [
"Not heavy, naive, chicken: [a pale lime]",
"LIGHT (not heavy) + GREEN (naive) + YELLOW (chicken)."
],
"Night Green": [
"After dark, envious: [a vivid leafy shade]",
"NIGHT (after dark) + GREEN (envious)."
],
"Olive Yellow": [
"I love, twisted, and cowardly: [a dull gold]",
"Anagram (twisted) of I LOVE = OLIVE, + YELLOW (cowardly)."
],
"Artemesia Green": [
"Artemis with a note and a, scrambled, still naive: [a silvery herb's shade]",
"Anagram (scrambled) of ARTEMIS + E (a note) + A = ARTEMESIA, + GREEN (naive). The book's spelling of artemisia."
],
"Andover Green": [
"Plus finished, and inexperienced: [a Hampshire town's shade]",
"AND (plus) + OVER (finished) + GREEN (inexperienced)."
],
"Rainette Green": [
"Shower with a small ending, still naive: [a French tree frog's shade]",
"RAIN (shower) + -ETTE (a small ending) + GREEN (naive). Rainette is French for tree frog."
],
"Chromium Green": [
"Shiny plating element, inexperienced: [a pigment's leafy shade]",
"CHROMIUM (plating metal) + GREEN (inexperienced)."
],
"Pistachio Green": [
"Nut, naive: [an ice-cream shade]",
"PISTACHIO (nut) + GREEN (naive)."
],
"Sea Green": [
"Main novice: [a watery shade]",
"SEA (the main) + GREEN (novice)."
],
"Benzol Green": [
"Car maker, love and left, still wet behind the ears: [a chemical leafy shade]",
"BENZ (car maker) + O (love) + L (left) + GREEN (wet behind the ears)."
],
"Light Porcelain Green": [
"Not heavy fine china, naive: [a pale jade]",
"LIGHT (not heavy) + PORCELAIN (fine china) + GREEN (naive)."
],
"Green": [
"[Envious] of the eco party?",
"Double definition: envious, and the colour of the Green Party."
],
"Dull Viridian Green": [
"Boring, fresh, a boy, naive: [a deep teal]",
"DULL (boring) + VIRID (fresh and green, poetic) + IAN (a boy) + GREEN (naive)."
],
"Oil Green": [
"Crude, callow: [an olive-toned shade]",
"OIL (crude) + GREEN (callow)."
],
"Diamine Green": [
"Princess, a pit, still naive: [a synthetic dye's shade]",
"DI (Princess Diana) + A + MINE (pit) + GREEN (naive)."
],
"Cossack Green": [
"Lettuce fired, still naive: [a steppe rider's shade]",
"COS (lettuce) + SACK (fire) + GREEN (naive)."
],
"Lincoln Green": [
"Honest Abe, callow: [Robin Hood's cloth]",
"LINCOLN (Abraham Lincoln) + GREEN (callow). Lincoln green was worn by Robin Hood's men."
],
"Blackish Olive": [
"Rather dark fruit: [a near-black green]",
"BLACKISH (rather dark) + OLIVE (fruit)."
],
"Deep Slate Olive": [
"Profound criticism of fruit: [a very dark khaki]",
"DEEP (profound) + SLATE (criticise) + OLIVE (fruit)."
],
"Nile Blue": [
"River in Egypt, feeling down: [a pale turquoise]",
"NILE (river in Egypt) + BLUE (down)."
],
"Pale King's Blue": [
"Wan ruler's down: [a soft sky shade]",
"PALE (wan) + KING'S (ruler's) + BLUE (down)."
],
"Light Glaucous Blue": [
"Pale, bloomy, and sad: [a soft grey sky]",
"LIGHT (pale) + GLAUCOUS (bloomy) + BLUE (sad)."
],
"Salvia Blue": [
"Girl travelling by way of, feeling low: [a sage flower's shade]",
"SAL (a girl) + VIA (by way of) + BLUE (low)."
],
"Cobalt Green": [
"Male swan, then a key, still naive: [a minty shade]",
"COB (male swan) + ALT (a keyboard key) + GREEN (naive)."
],
"Calamine BLue": [
"Californian, a pit, down: [a lotion-named shade]",
"CAL (California) + A + MINE (pit) + BLUE (down)."
],
"Venice Green": [
"Venerable, with frozen water, still naive: [a canal city's shade]",
"VEN (venerable) + ICE (frozen water) + GREEN (naive)."
],
"Cerulian Blue": [
"Nuclear I exploded, and felt low: [the colour of the sky]",
"Anagram (exploded) of NUCLEAR I = CERULIAN (the book's spelling of cerulean), + BLUE (low)."
],
"Peacock Blue": [
"Vegetable and bird, feeling low: [a tail-feather shade]",
"PEA (vegetable) + COCK (bird) + BLUE (low)."
],
"Green Blue": [
"Naive and sad: [a sea shade]",
"GREEN (naive) + BLUE (sad)."
],
"Olympic Blue": [
"Of the Games, feeling down: [a bright mid azure]",
"OLYMPIC (of the Games) + BLUE (down)."
],
"Blue": [
"[Down], like a Tory?",
"Double definition: sad, and the Conservatives' colour."
],
"Antwarp Blue": [
"Insect distortion, down: [a Flemish pigment]",
"ANT (insect) + WARP (distortion) + BLUE (down). The book's spelling of Antwerp."
],
"Helvetia Blue": [
"The veal I cooked for Switzerland, feeling low: [an Alpine azure]",
"Anagram (cooked) of THE VEAL I = HELVETIA (Latin for Switzerland), + BLUE (low)."
],
"Dark Medici Blue": [
"Gloomy doctor, one, down: [a Florentine slate shade]",
"DARK (gloomy) + MEDIC (doctor) + I (one) + BLUE (down)."
],
"Dusky Green": [
"Dim and naive: [a dark teal]",
"DUSKY (dim) + GREEN (naive)."
],
"Deep Lyons Blue": [
"Profound old tea shop, feeling low: [a rich royal shade]",
"DEEP (profound) + LYONS (the old J. Lyons tea shops) + BLUE (low)."
],
"Violet Blue": [
"Shrinking flower, down: [a deep indigo shade]",
"VIOLET (shrinking violet) + BLUE (down)."
],
"Vandar Poel's Blue": [
"Lorry, short dart, lopes about, down: [a naturalist's deep azure]",
"VAN (lorry) + DAR(t) (short dart) + anagram (about) of LOPES = POELS + BLUE (down). The book's spelling of Vanderpoel's."
],
"Dark Tyrian Blue": [
"Gloomy Norse god with a boy, feeling low: [an ancient dye's inky shade]",
"DARK (gloomy) + TYR (Norse god) + IAN (a boy) + BLUE (low)."
],
"Dull Violet Black": [
"Boring flower, jet: [a near-jet purple]",
"DULL (boring) + VIOLET (flower) + BLACK (jet)."
],
"Deep Indigo": [
"Profound, at home, excavate nothing: [a midnight blue]",
"DEEP (profound) + IN (at home) + DIG (excavate) + O (nothing)."
],
"Deep Slate Green": [
"Profound criticism, naive: [a very dark leafy shade]",
"DEEP (profound) + SLATE (criticism) + GREEN (naive)."
],
"Grayish Lavender": [
"Rather drab loo, finish, hesitation: [a muted lilac]",
"GRAYISH (rather drab) + LAV (loo) + END (finish) + ER (hesitation)."
],
"Laelia Pink": [
"Some gala Elias attended, blushing: [an orchid's shade]",
"Hidden in 'gaLA ELIAs' + PINK (blushing)."
],
"Lilac": [
"Lil's account: [a spring shrub's shade]",
"LIL (a girl) + AC (account)."
],
"Eupatorium Purple": [
"Europe's dad takes Tories, short, with hesitation, royally: [a butterfly plant's shade]",
"EU (Europe) + PA (dad) + TORI(es) (Tories, short) + UM (hesitation) + PURPLE (royally)."
],
"Light Mauve": [
"Not heavy: 'um, ave' rearranged: [the first synthetic dye, lightened]",
"LIGHT (not heavy) + anagram (rearranged) of UM AVE = MAUVE."
],
"Aconite Violet": [
"A trick, I and a note, shrinking: [a poisonous purple]",
"A + CON (trick) + I + TE (a note) + VIOLET (shrinking)."
],
"Dull Blue Violet": [
"Boring, sad flower: [a greyed indigo shade]",
"DULL (boring) + BLUE (sad) + VIOLET (flower)."
],
"Dark Soft Violet": [
"Gloomy, gentle, shrinking flower: [a muted deep purple]",
"DARK (gloomy) + SOFT (gentle) + VIOLET (shrinking flower)."
],
"Blue Violet": [
"Down and shrinking: [a clear indigo shade]",
"BLUE (down) + VIOLET (shrinking violet)."
],
"Purple Drab": [
"Royal robe, dull: [a greyish mauve-brown]",
"PURPLE (royal robe) + DRAB (dull)."
],
"Deep Violet / Plumbeous": [
"Profound shrinking flower, or simply leaden: [a dark grey-purple]",
"DEEP (profound) + VIOLET (shrinking flower); PLUMBEOUS means leaden. Either answer counts."
],
"Veronia Purple": [
"Raven, I, O, mixed up royally: [an ironweed's shade]",
"Anagram (mixed up) of RAVEN I O = VERONIA (the book's spelling of vernonia), + PURPLE (royally)."
],
"Dark Slate Purple": [
"Gloomy criticism, royal: [a smoky plum]",
"DARK (gloomy) + SLATE (criticism) + PURPLE (royal)."
],
"Taupe Brown": [
"Greek letter and exercise, tanned: [a mole's earthy shade]",
"TAU (Greek letter) + PE (exercise) + BROWN (tanned). Taupe is French for mole."
],
"Violet Carmine": [
"Shrinking motor of mine: [a purplish crimson]",
"VIOLET (shrinking) + CAR (motor) + MINE."
],
"Violet": [
"Love it, arranged as [a shrinking flower]",
"Anagram (arranged) of LOVE IT."
],
"Red Violet": [
"Communist, shrinking: [a crimson-purple]",
"RED (Communist) + VIOLET (shrinking)."
],
"Cotinga Purple": [
"Bed, at home, Georgia, royally: [a tropical bird's shade]",
"COT (bed) + IN (at home) + GA (Georgia) + PURPLE (royally). A cotinga is a bird."
],
"Dusky Madder Violet": [
"Dim, crazier, shrinking: [a dark root-dye purple]",
"DUSKY (dim) + MADDER (crazier) + VIOLET (shrinking)."
],
"White": [
"[Snowy], like an island off Hampshire, by the sound of it",
"Sounds like Wight, the island."
],
"Neutral Gray": [
"Swiss, perhaps, and dull: [a balanced ash shade]",
"NEUTRAL (like Switzerland) + GRAY (dull)."
],
"Mineral Gray": [
"Bottled water, and dull: [a stony ash shade]",
"MINERAL (bottled water) + GRAY (dull)."
],
"Warm Gray": [
"Getting close, and dull: [a cosy ash shade]",
"WARM (getting close, in a guessing game) + GRAY (dull)."
],
"Slate Color": [
"Criticise a hue: [a roof-tile grey]",
"SLATE (criticise) + COLOR (hue)."
],
"Black": [
"Back, taking in a learner: [like jet]",
"BACK with L (learner) inside."
]
};

export const LAUNCH_UTC = Date.UTC(2026, 8, 28); // Puzzle No. 1 = 28 September 2026 (UK date)
export const QUESTIONS = 10;
export const MULTIPLIER = { pick: 1, type: 2 }; // typing is harder, so it scores double
export const basePoints = (correct, hints) => (correct ? 3 - Math.max(0, Math.min(2, hints)) : 0);

const ALIAS = {'sulpheryellow':['sulphuryellow','sulfuryellow'],'freshcolor':['fleshcolor'],'rosolancpurple':['rosolanepurple'],'pomegranitepurple':['pomegranatepurple'],'vistorislake':['victorialake'],'krongbergsgreen':['kronbergsgreen'],'artemesiagreen':['artemisiagreen'],'cerulianblue':['ceruleanblue'],'antwarpblue':['antwerpblue'],'vandarpoelsblue':['vanderpoelsblue'],'veroniapurple':['vernoniapurple'],'ochrered':['ocherred'],'isabellacolor':['isabella'],'deepvioletplumbeous':['deepviolet','plumbeous'],'yellowocher':['yellowochre'],'oliveocher':['oliveochre']};

export const display = n => n.replace(/\s*[|-]\s*[AB]$/, '').trim();
export const norm = s => String(s).toLowerCase().replace(/colour/g, 'color').replace(/grey/g, 'gray').replace(/[^a-z]/g, '');
function lev(a, b) { const m = a.length, n = b.length, d = Array.from({length: m + 1}, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)); return d[m][n]; }
export function isRightTyped(guess, i) {
  const g = norm(guess); if (!g || g.length > 60) return false;
  const t = norm(display(COLOURS[i][0]));
  return [t, ...(ALIAS[t] || [])].some(x => lev(g, x) <= Math.max(1, Math.floor(x.length / 7)));
}
export function enumOf(i) { const d = display(COLOURS[i][0]).split(' / ')[0]; return '(' + d.split(/\s+/).map(w => w.replace(/[^a-z]/gi, '').length).join(',') + ')'; }
export function letters(i) { return display(COLOURS[i][0]).split(/(\s+|\/)/).map(w => /^\s+$/.test(w) || w === '/' ? w : w.split('').map((ch, j) => /[a-z]/i.test(ch) ? (j === 0 ? ch : '_') : ch).join('')).join('').replace(/\s+/g, '   '); }
export const clueOf = i => CRYPTIC[display(COLOURS[i][0])] || ['[' + display(COLOURS[i][0]) + ']', ''];

// dates: puzzles change at midnight UK time
export function ukDayUTC(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {timeZone: 'Europe/London', year: 'numeric', month: 'numeric', day: 'numeric'}).formatToParts(d).map(x => [x.type, x.value]));
  return Date.UTC(+p.year, +p.month - 1, +p.day);
}
export const puzzleNumber = (d = new Date()) => Math.floor((ukDayUTC(d) - LAUNCH_UTC) / 864e5) + 1;

export function mkRng(seed) { let s = Math.abs(Math.floor(seed)) % 2147483647 || 7; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; }
export function pickTen(rng) {
  const pool = COLOURS.map((_, i) => i);
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const seen = new Set(), out = [];
  for (const i of pool) { const d = display(COLOURS[i][0]); if (seen.has(d)) continue; seen.add(d); out.push(i); if (out.length === QUESTIONS) break; }
  return out;
}
export const dailyQuestions = puzzle => pickTen(mkRng(puzzle * 7919 + 13));
const dE = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
// four options for a question, the same for every player on a given puzzle
export function optionsFor(i, seed) {
  const rng = mkRng(seed), name = display(COLOURS[i][0]);
  const cand = COLOURS.map((c, j) => ({j, d: dE(c[2], COLOURS[i][2]), n: display(c[0])})).filter(x => x.n !== name && x.d > 4).sort((a, b) => a.d - b.d).slice(0, 10);
  const out = [i], names = new Set([name]);
  while (out.length < 4 && cand.length) { const x = cand.splice(Math.floor(rng() * cand.length), 1)[0]; if (names.has(x.n)) continue; names.add(x.n); out.push(x.j); }
  for (let a = out.length - 1; a > 0; a--) { const b = Math.floor(rng() * (a + 1)); [out[a], out[b]] = [out[b], out[a]]; }
  return out;
}
// score a whole round: answers = [{answer, hints}], answer is an option index (pick) or typed text (type)
export function scoreRound(questions, mode, answers) {
  let base = 0; const marks = [];
  questions.forEach((i, q) => {
    const a = answers[q] || {}, hints = Math.max(0, Math.min(2, a.hints | 0));
    const right = mode === 'pick' ? Number(a.answer) === i : isRightTyped(a.answer || '', i);
    const pts = basePoints(right, hints); base += pts; marks.push(pts);
  });
  return { base, points: base * MULTIPLIER[mode], marks };
}
export const gridText = marks => { const sq = ['⬛', '🟧', '🟨', '🟩']; return marks.slice(0, 5).map(p => sq[p]).join('') + '\n' + marks.slice(5).map(p => sq[p]).join(''); };
