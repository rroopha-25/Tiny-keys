# Tiny Keys

A safe keyboard playground for toddlers (ages 1–3). Hand your little one a laptop: every key they press shows a big picture, says something out loud, and plays music.

## [▶ Play Tiny Keys](https://rroopha-25.github.io/Tiny-keys/)

Free, no sign-up, no ads. Works best in Chrome or Edge on a laptop. Click **Start and lock screen**, then hand it over.

![A big letter A next to an apple, with the word Apple](letter.jpg)

## Why Tiny Keys exists

Parents who work from home know this moment: you're on a call or finishing something on your work laptop, and your toddler wants to "work" too. Give them a spare laptop and within seconds they've closed tabs, opened settings or typed into something important.

Tiny Keys turns that urge to bang on keys into something good:

- **Nothing breaks.** The screen locks into full screen and captures shortcut keys, so random mashing can't close the game or change the computer.
- **Every press is rewarded.** A picture appears, a cheerful voice speaks, and a note plays, so kids learn that their action causes something to happen.
- **They learn while they play.** Letters and their sounds, counting with real objects, animal names and sounds, colors and shapes, and simple melodies.
- **It engages more than one sense.** Sight (big bright pictures), hearing (voice and music) and touch (keys, touchpad and touch screen) all work together.
- **It's calm and honest.** No ads, no sign-up, no data collected, no links that lead away. A play timer and a bedtime mode help wind things down.

## Screenshots

| | |
| --- | --- |
| ![Counting three ducks](counting.jpg) | ![The cow says moo](animal.jpg) |
| **Numbers** count real things | **Space bar** brings animals |
| ![A colored shape](shape.jpg) | ![Veena in music mode with sargam notes](music.jpg) |
| **Other keys** show shapes and colors | **Music mode**: violin, veena, flute and more |
| ![Start screen](start.jpg) | ![Grown-up controls](controls.jpg) |
| **Start** with or without the screen lock | **Grown-up controls** (hold the moon button 3 seconds) |

## What the keys do

| Key | What happens |
| --- | --- |
| Letters | "C is for…?" then an excited "Cat!", and then the real thing: a cat meowing. Animals use real recordings; Bus honks, Train goes choo-choo, Drum rolls, Ball bounces. Each press of the same letter shows the next word. |
| Numbers 1–9, 0 | Counts out loud, and one thing drops onto the screen on each number: "One… two… three ducks!" 0 counts to ten. |
| Space bar | "The cow says…?" (a rising, curious voice) and then a **real cow mooing**. 14 animals, with real recordings for cow, dog, cat, duck, sheep, lion, rooster, pig, horse, owl, frog and goat. |
| Enter | Fireworks and a happy chord |
| Anything else | A colored shape: "Blue star!" |
| Mouse / touchpad / touch screen | Sparkle trails, notes as they drag, a new letter with each tap |

### The voice

Every spoken line is pre-recorded with the open-source [Kokoro](https://github.com/hexgrad/kokoro) neural voice (Apache 2.0), using a blend of two voices chosen for a lively, clear delivery. Letter names are set by pronunciation, so "A" is always said "ay". All 254 clips are packed into one small audio track embedded inside `index.html`, so the whole game is a single file. Clips play louder than the music, and the music dips while the voice talks, so every word comes through clearly. If a clip can't load, the laptop's built-in voice reads the line instead; grown-ups can also switch to "Laptop voice" in the controls.

Every key also plays a note on the chosen instrument, so mashing sounds musical (it's tuned to the pentatonic scale, Raga Mohanam, so no combination ever sounds wrong).

## Modes (grown-up controls)

Press and hold the moon button in the top corner for 3 seconds.

- **Everything** – the mix above (default)
- **ABC** / **123** / **Animals** / **Shapes and colors** – every key does just that one thing
- **Music** – the keyboard becomes an instrument: Bells, Violin, Veena, Flute or Marimba. Bottom row is low notes, top row is high. Veena shows sargam (Sa Re Ga Pa Dha).
- **Magic song** – any key plays the next note of Twinkle Twinkle, Mary Had a Little Lamb, Row Your Boat or Jingle Bells, so your child "plays" the whole song.

Also: volume, voice on/off, **Bedtime calm** (dimmer colors, softer and slower), and a **play timer** (10/20/30 min) that ends with a gentle "All done!" screen.

## Keeping the child inside the app

- **Start and lock screen** goes full screen. In Chrome and Edge it also uses the Keyboard Lock API, which captures shortcuts like Ctrl+W, Ctrl+T and Alt+Tab-style combos so they reach the game instead of the browser. Hold Esc to leave.
- If full screen is ever closed, a big "Tap to keep playing" screen appears; one tap goes back.
- Right-click, text selection, dragging, zoom and the back gesture are blocked. Closing the tab asks for confirmation.
- Screen stays awake while playing.

A web page can't block every system key (Cmd+Tab on Mac, the Windows key). For a fully sealed device:
- **Windows**: run Chrome in kiosk mode: `chrome.exe --kiosk https://rroopha-25.github.io/Tiny-keys/`
- **Mac**: `open -a "Google Chrome" --args --kiosk https://rroopha-25.github.io/Tiny-keys/`
- **iPad**: Settings → Accessibility → Guided Access, then triple-click to start
- **Android**: Settings → Security → App pinning

## One-click use

It's a single static page with no build step and no data collected. After the first visit it works offline, and you can install it (Chrome/Edge: the install icon in the address bar) so it opens like an app from the dock or desktop.

## For developers

### Publish your own copy on GitHub Pages

1. Push these files to a repo (for example `tiny-keys`).
2. Repo → **Settings → Pages** → Source: **Deploy from a branch**, Branch: `main`, folder `/ (root)`.
3. After a minute it's live at `https://rroopha-25.github.io/Tiny-keys/`.

### Sound credits

Real animal recordings, trimmed and loudness-leveled (sources as documented by [FunForge](https://github.com/bmbell23/FunForge/blob/main/src/fun_forge/static/sounds/animals/CREDITS.md)):

- Cow, dog, cat, duck, sheep, horse, rooster, goat, owl, frog: [BigSoundBank](https://bigsoundbank.com) (Joseph Sardin and contributors), CC0 / public domain
- Lion: Wikimedia Commons user தகவலுழவன், public domain
- **Pig grunt by erdie** ([freesound.org/people/Erdie/sounds/44274](https://freesound.org/people/Erdie/sounds/44274/)), licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), via Wikimedia Commons; trimmed and normalized
- Bee buzz and snake hiss are synthesized. The voice is [Kokoro](https://github.com/hexgrad/kokoro) (Apache 2.0).

### Files

- `index.html` – the whole app, including the voice (music is synthesized live)
- `manifest.webmanifest`, `icon.svg` – installable app
- `sw.js` – offline support
- `*.jpg` – screenshots used in this README
