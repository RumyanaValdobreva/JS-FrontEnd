// function solve(input) {
//     let posse = {};
  
//     function fireShot(character, target) {
//       if (posse[character].bullets > 0) {
//         posse[character].bullets--;
//         console.log(`${character} has successfully hit ${target} and now has ${posse[character].bullets} bullets!`);
//       } else {
//         console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
//       }
//     }
  
//     function takeHit(character, damage, attacker) {
//       posse[character].hp -= damage;
//       if (posse[character].hp > 0) {
//         console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${posse[character].hp} HP!`);
//       } else {
//         console.log(`${character} was gunned down by ${attacker}!`);
//         delete posse[character];
//       }
//     }
  
//     function reload(character) {
//       if (posse[character].bullets < 6) {
//         const bulletsReloaded = 6 - posse[character].bullets;
//         posse[character].bullets = 6;
//         console.log(`${character} reloaded ${bulletsReloaded} bullets!`);
//       } else {
//         console.log(`${character}'s pistol is fully loaded!`);
//       }
//     }
  
//     function patchUp(character, amount) {
//       if (posse[character].hp === 100) {
//         console.log(`${character} is in full health!`);
//       } else {
//         const healedAmount = Math.min(amount, 100 - posse[character].hp);
//         posse[character].hp += healedAmount;
//         console.log(`${character} patched up and recovered ${healedAmount} HP!`);
//       }
//     }
  
//     const n = Number(input.shift());
  
//     for (let i = 0; i < n; i++) {
//       let [name, hp, bullets] = input.shift().split(" ");
//       hp = Number(hp);
//       bullets = Number(bullets);
//       posse[name] = { hp, bullets };
//     }
  
//     for (const line of input) {
//       if (line === "Ride Off Into Sunset") {
//         break;
//       }
  
//       const [action, character, ...params] = line.split(" - ");
  
//       switch (action) {
//         case "FireShot":
//           fireShot(character, ...params);
//           break;
//         case "TakeHit":
//           const [damage, attacker] = params;
//           takeHit(character, Number(damage), attacker);
//           break;
//         case "Reload":
//           reload(character);
//           break;
//         case "PatchUp":
//           patchUp(character, ...params.map(Number));
//           break;
//         default:
//           break;
//       }
//     }
  
//     for (const character in posse) {
//       console.log(`${character}
//     HP: ${posse[character].hp}
//     Bullets: ${posse[character].bullets}`);
//     }
// }

function solve(input) {
    let posse = {};
  
    function fireShot(character, target) {
      if (posse[character].bullets > 0) {
        posse[character].bullets--;
        console.log(`${character} has successfully hit ${target} and now has ${posse[character].bullets} bullets!`);
      } else {
        console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
      }
    }
  
    function takeHit(character, damage, attacker) {
      posse[character].hp -= damage;
      if (posse[character].hp > 0) {
        console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${posse[character].hp} HP!`);
      } else {
        console.log(`${character} was gunned down by ${attacker}!`);
        delete posse[character];
      }
    }
  
    function reload(character) {
      if (posse[character].bullets < 6) {
        const bulletsReloaded = 6 - posse[character].bullets;
        posse[character].bullets = 6;
        console.log(`${character} reloaded ${bulletsReloaded} bullets!`);
      } else {
        console.log(`${character}'s pistol is fully loaded!`);
      }
    }
  
    function patchUp(character, amount) {
      if (posse[character].hp === 100) {
        console.log(`${character} is in full health!`);
      } else {
        const healedAmount = Math.min(amount, 100 - posse[character].hp);
        posse[character].hp += healedAmount;
        console.log(`${character} patched up and recovered ${healedAmount} HP!`);
      }
    }
  
    const n = Number(input.shift());
  
    for (let i = 0; i < n; i++) {
      let parts = input.shift().split(" ");
      let name = parts[0];
      let hp = Number(parts[1]);
      let bullets = Number(parts[2]);
      posse[name] = { hp, bullets };
    }
  
    for (const line of input) {
      if (line === "Ride Off Into Sunset") {
        break;
      }
  
      let parts = line.split(" - ");
      let action = parts[0];
      let character = parts[1];
      let params = parts.slice(2);
  
      switch (action) {
        case "FireShot":
          let target = params[0];
          fireShot(character, target);
          break;
        case "TakeHit":
          let damage = Number(params[0]);
          let attacker = params[1];
          takeHit(character, damage, attacker);
          break;
        case "Reload":
          reload(character);
          break;
        case "PatchUp":
          let amount = Number(params[0]);
          patchUp(character, amount);
          break;
        default:
          break;
      }
    }
  
    for (const character in posse) {
      console.log(`${character}
      HP: ${posse[character].hp}
      Bullets: ${posse[character].bullets}`);
    }
}

solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]));
