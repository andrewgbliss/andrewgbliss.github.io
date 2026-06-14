---
slug: "game-development-systems"
date: "2025-11-08"
title: "Game Development Systems"
tagline: "Developing systems for your game"
authorSlug: "andrew-bliss"
image: "/Stan-Bg-32x32.png"
published: true
tags: ["game dev"]
---

Game development is a very hard and difficult task. There are so many systems going on during a game that it is mind numbing to try to think about. When you sit down and start designing a game and think to yourself, I would like this feature, this ability, this polished UI, this awesome soundtrack, you start to feel like making a whole game is out of reach.

However big the task though you can always break it down. In fact that's what code is. Small bits of instructions.

So don't think of builing a whole game. Build systems. Then when you have the foundation of systems for your game you can make easier desicions in the game. Then your knowledge of systems can transfer to other games as well.

Here is my list of systems I would like in my games.

> Don't build games. Build Systems

## Table of Contents

- [Data Store](#data-store)
- [Resource Store](#resource-store)
- [EventBus](#eventbus)
- [Config](#config)
- [Game Manager](#game-manager)
- [Scene Manager](#scene-manager)
- [Scene Transitions](#scene-transitions)
- [Audio](#audio)
- [Effects](#effects)
- [Input](#input)
- [WorldArea](#worldarea)
- [Game UI](#game-ui)
- [Menu](#menu)
- [Room](#room)
- [Item](#item)
- [Physics](#physics)
- [Save Games](#save-games)
- [Hotspot](#hotspot)
- [Pickup](#pickup)
- [Conversation](#conversation)
- [Dialog](#dialog)
- [Question and choices](#question-and-choices)
- [Triggers](#triggers)
- [Quest](#quest)
- [Acheivements](#acheivements)
- [Files Util](#files-util)
- [Audio Util](#audio-util)

<a id="data-store"></a>

## Data Store

Loads in json files and converts them to the correct type of resources they are. Creating items, audio files, anything.

### data/items/currency.json

```json
{
  "spriteSheet": {
    "name": "Currency",
    "atlas": {
      "path": "res://assets/img/items/Coin-Sheet.png",
      "cell_size": 16,
      "hframes": 4,
      "vframes": 1
    }
  },
  "items": [
    {
      "frame": 0,
      "type": "currency",
      "name": "gold",
      "amount": 1.0
    }
  ]
}
```

```javascript
# Get the store for the one file
var store = DataStore.get_store_by_path("items/currency")

# Get the store directory for all items
var items = DataStore.get_store_directory("items")
```

<a id="resource-store"></a>

## Resource Store

This will be a wrapper for the data store connecting up to resource files.

```js
# Create a random item from the Data Store
var item = ResourceStore.create_random_item()

var weapon : Weapon = ResourceStore.create_weapon()
```

<a id="eventbus"></a>

## EventBus

Any global events that need to be emitted from anywhere in the game go here.

- Audio Volume Changed
  - This is when you are changing the volume in the UI but the config needs to save the value

```js
EventBus.audio_volume_changed.connect(_on_audio_volume_changed)

func _on_audio_volume_changed(bus_idx: int, volume: float):
	user_config.set_volume(bus_idx, volume)
	AudioUtils.set_volume(bus_idx, volume)
	user_config.save_to_file()
```

<a id="config"></a>

## Config

Configuration files that will be used in the game manager.

- User Config - This will define parameters about the user.
  - Audio Levels
  - Custom Key bindings
  - Controls Type - Using Keyboard, Mouse, Joystick
  - Custom Cursor Types
    - TODO - This still needs to be worked on. Like a adventure game has many cursors. Or drag and drop, grab cursor
- Game Config - This will define parameters about the game
  - Game States - Loading, Menu, Play, Paused, Game over, Game Win
  - Game Starting Scene
  - Grid Size - To place tiles on or snap to grid
  - Gravity Direction
  - What scene you came from, what door you entered and what door you need to go to upon loading a new scene

<a id="game-manager"></a>

## Game Manager

This is the game manager that has all the config about the game. Gets everything setup to run the game.

When ready it will:

- Load in config
- set audio volumes
- set custom cursors
- set camera zoom levels
- toggle pause
- TODO - game quit
- Snap to grid
- Set transparent window
- Move window to bottom right screen for chill idle games
- Set gravity

<a id="scene-manager"></a>

## Scene Manager

The scene manager will handle scene transitions. You can setup scene transitions within the scene manager. Then when you want to change to a different scene it will run transitions in, load the scene, then load transition out. You can do loading screens this way.

```js
// Load the game start scene
SceneManager.goto_scene(GameManager.game_config.game_start_scene);
```

<a id="scene-transitions"></a>

## Scene Transitions

This defines some animations on how a scene transitions works. Like fade in / out.

<a id="audio"></a>

## Audio

- Jukebox - play whatever music you want
- TODO - Area Audio
  - Ambience - like birds chirpping or river sounds
  - Music - Certain areas will have certain audio. If your going through a village it's nice. When you go adventure it will change.
- TODO - Trigger Audio
  - When you collide with something, or you aggro an enemy, the music will change

<a id="effects"></a>

## Effects

TODO - The effects system needs to be more thought out. Example, when smashing down, it should screen shake, cause particles to fly, show a mark where you hit on the ground. Cause any tiles to break.

- Screen Shake
- Particles Emitter
- Evironment damage mark

<a id="input"></a>

## Input

Desktop - Keyboard, mouse, controller
Mobile - Tap, swipe, on screen controls
Console - Controller

TODO - Need to figure out how to navigate with keyboard and controller. If they dont have a mouse or tap

<a id="worldarea"></a>

## WorldArea

This has the WorldEnvironment. Everything about a world is in here. Then you can put this into any scene to have the same consistent world for every scene.

TODO - this needs to be though out more. Mayeb this isn't needed. Just when making a bunch of levels it's nice to have it all under the same world area, environment, glow, lighting, canvas modulate.

<a id="game-ui"></a>

## Game UI

- HUD
- Pause Button
- Menu's

<a id="menu"></a>

## Menu

This defines menus and transitions. The menu can be put in a stack so the Main menu can go to settings, and that can go to controls. Then you pop off the stack and go back to the main menu. This can be anywhere in the game.

<a id="room"></a>

## Room

TODO - this needs to be thought out more like the world area.

A room will consist of a camera, world environment, screen shake effects, anything about the current room the player is in.

TODO: Dont need room manager. Just save data to the game manager about which door you go through.

### Room Door

Should the room door spawn the player? Or does the room spawn the player? Or do spawn points spawn the player?

### Room Environment

What shoul be in the room environment. I dont want to have to setup a world environment, screen shake, music for rooms that are similar. So having a room environment would be nice to setup once and then use in the room. Cameras should be top level.

<a id="item"></a>

## Item

Items will be a resource that defines everything about items. It will be the base class.

- Item
  - Currency
  - Equipable
    - Weapon
      - Melee
      - Ranged
    - Armor
      - Head
      - Chest
  - Consumable
    - Potion
    - Health
    - Mana
    - Stamina
    - Food

TODO: Recipes like in minecraft

<a id="physics"></a>

## Physics

TODO - go through the code and put more documentation about it here.

This holds values such as acceleration and friction in a global state. This could also be in the game manager.

- Physics Group - This defines all the physics for certain aspects, like swimming, walking on ice, climbing a ladder, legdge grab

<a id="save-games"></a>

## Save Games

TODO - more thought and documentation here

When the player clicks play they are taken to a screen with four slots. Have a screen where they can save a game anytime thats not in combat or cinematic or dialogue scene. They can manually save, it has autosaves, and checkpoint saves.

<a id="hotspot"></a>

## Hotspot

A hotspot is a way to set up an area in order to start an interaction. For instance you can't talk to someone across the room, you have to go into the hotspot which is close by, then you can initiate an interaction

<a id="pickup"></a>

## Pickup

A pickup will use the item to fill in what type of item they are picking up. Can copy data from the data store.
This finds all the hotspots, or ways to interact as children, then listens on interaction

TODO: Need to do random items. Maybe a spawn system might be better for this to keep the class clean, and allow for injection from proc gen.

<a id="conversation"></a>

## Conversation

TODO - this doesn't exist yet

Conversation in back and forth until info is found out.
In order to trigger an interaction we need a hotspot, an area that you enter into, it shows a ui saying Press F To Talk, then it listens to press F, then it triggers the certain conversation.

<a id="dialog"></a>

## Dialog

TODO - this needs to be worked on. Is it the same as Conversation above?

Back and forth dialog, that may or may not contain questions. A question will show multiple choices of dialog that will determine how you are perceived.

<a id="question-and-choices"></a>

## Question and choices

TODO - this doesn't exist yet

There will be a question associated with perception percent. 0 is bad and 1 is the best.
Certain choices will determine other stuff later. But you can setup different breakpoints, like 50% means you aren’t bad or good. But your inner heart meter will tell the truth.

<a id="triggers"></a>

## Triggers

Triggers are things that trigger something. Like target in range, will find a target, check if they are within a certain range, then emit a signal when they are in range.

Aggro, this will make the enemy go after you and go into attack mode.
Deaggro, the enemy will lose sight of you and go back to wander or idle

<a id="quest"></a>

## Quest

TODO - Quest manager

<a id="acheivements"></a>

## Acheivements

TODO - Achievement Manager

<a id="files-util"></a>

## Files Util

This is a wrapper around the File system used for saving and loading json data.

```js
FilesUtil.save("items.json", { "name", "Andy" })
```

<a id="audio-util"></a>

## Audio Util

This is a wrapper around the Audio Server used for calculating volume levels and setting audio bus levels, such as Music, Sound Effects, and Ambient Noise.

```js
// Set the Music bus to 50% volume
AudioUtils.set_volume(1, 50);
```
